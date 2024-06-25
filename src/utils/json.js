class JsonTransfer {
  constructor() {}

  useHasOwn = !!{}.hasOwnProperty

  // crashes Safari in some instances
  //let validRE = /^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/;
  pad(n) {
    return n < 10 ? '0' + n : n
  }

  m = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\',
  }

  encodeString(s) {
    // eslint-disable-next-line no-control-regex
    if (/["\\\x00-\x1f]/.test(s)) {
      return (
        '"' + // eslint-disable-next-line no-control-regex
        s.replace(/([\x00-\x1f\\"])/g, function (a, b) {
          let c = this.m[b]
          if (c) {
            return c
          }
          c = b.charCodeAt()
          return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16)
        }) +
        '"'
      )
    }
    return '"' + s + '"'
  }

  encodeArray(o) {
    let a = ['['],
      b,
      i,
      l = o.length,
      v
    for (i = 0; i < l; i += 1) {
      v = o[i]
      switch (typeof v) {
        case 'undefined':
        case 'function':
        case 'unknown':
          break
        default:
          if (b) {
            a.push(',')
          }
          a.push(v === null ? 'null' : JSONUtil.encode(v))
          b = true
      }
    }
    a.push(']')
    return a.join('')
  }

  encodeDate(o) {
    return (
      '"' +
      o.getFullYear() +
      '-' +
      this.pad(o.getMonth() + 1) +
      '-' +
      this.pad(o.getDate()) +
      'T' +
      this.pad(o.getHours()) +
      ':' +
      this.pad(o.getMinutes()) +
      ':' +
      this.pad(o.getSeconds()) +
      '"'
    )
  }

  isArray(v) {
    return v && typeof v.pop == 'function'
  }

  isDate(v) {
    return v && typeof v.getFullYear == 'function'
  }

  /**
   * 将javascript对象转换成JSON字符串的方法
   * @name encode
   * @function
   * @param {Object} object - 将要转换的javascript对象.
   * @returns {string} 被转换后的JSON字符串
   * @example
   * let obj = {name:1,id:2};
   * let jsonStr = JSONUtil.encode(obj);
   * console.log(jsonStr)
   */
  encode(o) {
    if (typeof o == 'undefined' || o === null) {
      return 'null'
    } else if (this.isArray(o)) {
      return this.encodeArray(o)
    } else if (this.isDate(o)) {
      return this.encodeDate(o)
    } else if (typeof o == 'string') {
      return this.encodeString(o)
    } else if (typeof o == 'number') {
      return isFinite(o) ? String(o) : 'null'
    } else if (typeof o == 'boolean') {
      return String(o)
    } else {
      let a = ['{'],
        b,
        i,
        v
      for (i in o) {
        // eslint-disable-next-line no-prototype-builtins
        if (!this.useHasOwn || o.hasOwnProperty(i)) {
          v = o[i]
          switch (typeof v) {
            case 'undefined':
            case 'function':
            case 'unknown':
              break
            default:
              if (b) {
                a.push(',')
              }
              a.push(this.encode(i), ':', v === null ? 'null' : this.encode(v))
              b = true
          }
        }
      }
      a.push('}')
      return a.join('')
    }
  }

  /**
   * 将JSON字符串转换成javascript对象的方法
   * @name decode
   * @function
   * @param {string} json - 将要转换的JSON字符串.
   * @returns {Object} 被转换后的javascript对象
   * @example
   * let jsonStr = "{name:1,id:2}";
   * let obj = JSONUtil.decode(jsonStr);
   * console.log(obj)
   */
  decode(json) {
    // eslint-disable-next-line no-control-regex, no-misleading-character-class
    json = json.replace(/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/gi, '') //去掉特殊字符
    return eval('(' + json + ')')
  }
}

export const JSONUtil = new JsonTransfer()
