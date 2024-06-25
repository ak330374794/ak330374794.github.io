import { ref, unref, nextTick } from 'vue'
import { WarningFilled } from '@element-plus/icons-vue'

/**
 * 获取表单详下方提示信息
 * @param {string} content 提示内容
 * @param {*} show 显示/隐藏(条件渲染)
 * @returns
 */
export const useFormItemExtendSlot =
  (content, show = true) =>
  () => {
    return unref(show) ? (
      <div class="form-item-info-extend">
        <span class="form-item-info-extend__icon">
          <span class="icon-content">!</span>
        </span>
        <span class="form-item-info-extend__contenet">{content}</span>
      </div>
    ) : null
  }
export const useForm = (props, registered) => {
  // From实例
  const formRef = ref()
  // ElForm实例
  const elFormRef = ref()

  /**
   * @param ref Form实例
   * @param elRef ElForm实例
   */
  const register = (ref, elRef) => {
    formRef.value = ref
    elFormRef.value = elRef
    registered?.(formRef) // add register callback for dynamic rendering form
  }

  const getForm = async () => {
    await nextTick()
    const form = unref(formRef)
    if (!form) {
      console.error('The form is not registered. Please use the register method to register')
    }
    return form
  }

  // 一些内置的方法
  const methods = {
    setProps: async (props = {}) => {
      const form = await getForm()
      form?.setProps(props)
    },

    setValues: async (data) => {
      const form = await getForm()
      form?.setValues(data)
    },
    clearValues: async (data) => {
      const form = await getForm()
      form?.clearValues()
    },
    /**
     * @param schemaProps 需要设置的schemaProps
     */
    setSchema: async (schemaProps) => {
      const form = await getForm()
      form?.setSchema(schemaProps)
    },

    getSchema: async (field) => {
      const form = await getForm()
      return form?.getSchema(field)
    },

    /**
     * @param formSchema 需要新增数据
     * @param index 在哪里新增
     */
    addSchema: async (formSchema, index) => {
      const form = await getForm()
      form?.addSchema(formSchema, index)
    },

    /**
     * @param field 删除哪个数据
     */
    delSchema: async (field) => {
      const form = await getForm()
      form?.delSchema(field)
    },

    /**
     * @returns form data
     */
    getFormData: async () => {
      const form = await getForm()
      return form?.formModel
    },
  }

  props && methods.setProps(props)

  return {
    register,
    elFormRef,
    methods,
  }
}
