import { isServer } from './is'
import { browser } from './browser'
import { cssStyleToDomStyle, camelCase, trim } from './string'
const ieVersion = isServer ? 0 : Number(document.documentMode)

/**
 * 模拟jquery的closest方法，通过当前节点向外查找满足selector最近的节点集合
 * @param {*} el
 * @param {*} selector
 * @returns
 */
export function closest(el, selector) {
  let matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
  while (el) {
    if (matchesSelector.call(el, selector)) {
      break
    }
    el = el.parentElement
  }
  return el
}

/**
 * 判断节点是否拥有某个样式
 * @param {*} el
 * @param {*} cls
 * @returns
 */
export function hasClass(el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.')
  }
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/**
 * 给某个节点添加样式
 * @param {*} el
 * @param {*} cls
 * @returns
 */
export function addClass(el, cls) {
  if (!el) return
  let curClass = el.className
  const classes = (cls || '').split(' ')

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * 删除某个节点的样式
 * @param {*} el
 * @param {*} cls
 * @returns
 */
export function removeClass(el, cls) {
  if (!el || !cls) return
  const classes = cls.split(' ')
  let curClass = ' ' + el.className + ' '

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}

/**
 * 得到节点的编剧大小、位置等等
 * @param {*} element
 * @returns
 */
export function getBoundingClientRect(element) {
  if (!element || !element.getBoundingClientRect) {
    return 0
  }
  return element.getBoundingClientRect()
}

/**
 * 获取当前元素的left、top偏移
 *   left：元素最左侧距离文档左侧的距离
 *   top:元素最顶端距离文档顶端的距离
 *   right:元素最右侧距离文档右侧的距离
 *   bottom：元素最底端距离文档底端的距离
 *   rightIncludeBody：元素最左侧距离文档右侧的距离
 *   bottomIncludeBody：元素最底端距离文档最底部的距离
 *
 * @description:
 */
export function getViewportOffset(element) {
  const doc = document.documentElement
  const docScrollLeft = doc.scrollLeft
  const docScrollTop = doc.scrollTop
  const docClientLeft = doc.clientLeft
  const docClientTop = doc.clientTop

  const pageXOffset = window.pageXOffset
  const pageYOffset = window.pageYOffset

  const box = getBoundingClientRect(element)

  const { left: retLeft, top: rectTop, width: rectWidth, height: rectHeight } = box

  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0)
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0)
  const offsetLeft = retLeft + pageXOffset
  const offsetTop = rectTop + pageYOffset

  const left = offsetLeft - scrollLeft
  const top = offsetTop - scrollTop

  const clientWidth = window.document.documentElement.clientWidth
  const clientHeight = window.document.documentElement.clientHeight
  return {
    left: left,
    top: top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top,
  }
}

/**
 * 得到某个dom的style样式内容
 */
export const getStyle =
  ieVersion < 9
    ? function (element, styleName) {
        if (isServer) return
        if (!element || !styleName) return null
        styleName = camelCase(styleName)
        if (styleName === 'float') {
          styleName = 'styleFloat'
        }
        try {
          if (styleName === 'opacity') {
            try {
              return element.filters.item('alpha').opacity / 100
            } catch (e) {
              return 1.0
            }
          } else {
            return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null
          }
        } catch (e) {
          return element.style[styleName]
        }
      }
    : function (element, styleName) {
        if (isServer) return
        if (!element || !styleName) return null
        styleName = camelCase(styleName)
        if (styleName === 'float') {
          styleName = 'cssFloat'
        }
        try {
          const computed = document.defaultView.getComputedStyle(element, '')
          return element.style[styleName] || computed ? computed[styleName] : null
        } catch (e) {
          return element.style[styleName]
        }
      }

/**
 * 给dom节点设置样式和值
 * @param {*} element
 * @param {*} styleName
 * @param {*} value
 * @returns
 */
export function setStyle(element, styleName, value) {
  if (!element || !styleName) return

  if (typeof styleName === 'object') {
    for (const prop in styleName) {
      if (Object.prototype.hasOwnProperty.call(styleName, prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
}

/**
 * 删除dom节点的样式
 * @param {*} element
 * @param {*} name
 */
export function removeStyle(element, name) {
  if (browser.ie) {
    //针对color先单独处理一下
    if (name === 'color') {
      name = '(^|;)' + name
    }
    element.style.cssText = element.style.cssText.replace(new RegExp(name + '[^:]*:[^;]+;?', 'ig'), '')
  } else {
    if (element.style.removeProperty) {
      element.style.removeProperty(name)
    } else {
      element.style.removeAttribute(cssStyleToDomStyle(name))
    }
  }

  if (!element.style.cssText) {
    removeAttributes(element, ['style'])
  }
}

/**
 * 删除dom的某个属性
 * @param {*} node
 * @param {*} attrNames
 */
export function removeAttributes(node, attrNames) {
  attrNames = Array.isArray(attrNames)
    ? attrNames
    : attrNames
        .trim()
        .replace(/[ ]{2,}/g, ' ')
        .split(' ')
  const val = node.getAttributeNode('style')
  for (let i = 0, ci; (ci = attrNames[i++]); ) {
    switch (ci) {
      case 'className':
        node[ci] = ''
        break
      case 'style':
        node.style.cssText = ''
        !browser.ie && val && node.removeAttributeNode(val)
    }
    node.removeAttribute(ci)
  }
}

/**
 * 判断某个dom是否有滚动条
 * @param {*} el
 * @param {*} vertical
 * @returns
 */
export const isScroll = (el, vertical) => {
  if (isServer) return

  const determinedDirection = vertical !== null || true
  const overflow = determinedDirection ? (vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x')) : getStyle(el, 'overflow')

  return overflow.match(/(scroll|auto)/)
}

/**
 * 获取元素element相对于 viewport 的位置坐标
 * @method getXY
 * @param { Node } element 需要计算位置的节点对象
 * @return { Object } 返回形如{x:left,y:top}的一个key-value映射对象， 其中键x代表水平偏移距离，
 *                          y代表垂直偏移距离。
 *
 * @example
 * ```javascript
 * var location = UE.dom.domUtils.getXY( document.getElementById("test") );
 * //output: test的坐标为: 12, 24
 * console.log( 'test的坐标为： ', location.x, ',', location.y );
 * ```
 */
export const getXYViewport = (element) => {
  let x = 0,
    y = 0
  while (element.offsetParent) {
    y += element.offsetTop
    x += element.offsetLeft
    element = element.offsetParent
  }
  return { x: x, y: y }
}

/**
 * 滚动到某个节点的位置
 * @param {*} node
 * @param {*} win
 * @param {*} offsetTop
 */
export const scrollToView = (node, win, offsetTop) => {
  let getViewPaneSize = function () {
      let doc = win.document,
        mode = doc.compatMode === 'CSS1Compat'
      return {
        width: (mode ? doc.documentElement.clientWidth : doc.body.clientWidth) || 0,
        height: (mode ? doc.documentElement.clientHeight : doc.body.clientHeight) || 0,
      }
    },
    getScrollPosition = function (win) {
      if ('pageXOffset' in win) {
        return {
          x: win.pageXOffset || 0,
          y: win.pageYOffset || 0,
        }
      } else {
        let doc = win.document
        return {
          x: doc.documentElement.scrollLeft || doc.body.scrollLeft || 0,
          y: doc.documentElement.scrollTop || doc.body.scrollTop || 0,
        }
      }
    }
  let winHeight = getViewPaneSize().height,
    offset = winHeight * -1 + offsetTop
  offset += node.offsetHeight || 0
  let elementPosition = getXYViewport(node)
  offset += elementPosition.y
  let currentScroll = getScrollPosition(win).y
  // offset += 50;
  if (offset > currentScroll || offset < currentScroll - winHeight) {
    win.scrollTo(0, offset + (offset < 0 ? -20 : 20))
  }
}

/**
 * 设置节点node及其子节点不会被选中
 * @method unSelectable
 * @param { Element } node 需要执行操作的dom元素
 * @remind 执行该操作后的节点， 将不能被鼠标选中
 * @example
 * ```javascript
 * UE.dom.domUtils.unSelectable( document.body );
 * ```
 */
export const unSelectable =
  (browser.ie && browser.ie9below) || browser.opera
    ? (node) => {
        //for ie9
        node.onselectstart = function () {
          return false
        }
        node.onclick =
          node.onkeyup =
          node.onkeydown =
            function () {
              return false
            }
        node.unselectable = 'on'
        node.setAttribute('unselectable', 'on')
        for (let i = 0, ci; (ci = node.all[i++]); ) {
          switch (ci.tagName.toLowerCase()) {
            case 'iframe':
            case 'textarea':
            case 'input':
            case 'select':
              break
            default:
              ci.unselectable = 'on'
              node.setAttribute('unselectable', 'on')
          }
        }
      }
    : (node) => {
        node.style.MozUserSelect = node.style.webkitUserSelect = node.style.msUserSelect = node.style.KhtmlUserSelect = 'none'
      }

/**
 * 得到节点父节点是否有滚动条，并且将父节点返回
 * @param {*} el
 * @param {*} vertical
 * @returns
 */
export const getScrollContainer = (el, vertical) => {
  if (isServer) return

  let parent = el
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window
    }
    if (isScroll(parent, vertical)) {
      return parent
    }
    parent = parent.parentNode
  }

  return parent
}

/**
 * 判断某个dom是否在某个dom中
 * @param {*} el
 * @param {*} container
 * @returns
 */
export const isInContainer = (el, container) => {
  if (isServer || !el || !container) return false

  const elRect = el.getBoundingClientRect()
  let containerRect

  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    }
  } else {
    containerRect = container.getBoundingClientRect()
  }

  return (
    elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right
  )
}
