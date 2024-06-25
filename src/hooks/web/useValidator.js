import {
  isPositiveDecimalNum,
  positiveInteger,
  validateEmail,
  validateMobile,
  validateUseCardCode,
  validateLinuxPath,
  validateStr1,
  validateStr2,
  validateStr3,
  zeroAndPositiveInteger,
  Isvalidatenumber,
  validateNumber,
  tNumberValidate,
  validate2DecimalInteger,
} from '@/utils/validate'
import { isEmpty } from '@/utils/is'
export const useValidator = () => {
  // 验证数组的必填项
  const arrayRequired = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && val.length > 0) {
          callback()
        } else {
          callback(new Error(message || '必填项不能为空'))
        }
      },
      trigger,
    })
  }
  const required = (message, type, trigger = 'change') => {
    let params = {
      required: true,
      message: message || '必填项不能为空',
      trigger,
    }
    if (type) {
      params = { ...params, type }
    }
    return params
  }
  //字符串的验证
  const lengthRange = (min, max, message, trigger = 'change') => {
    return { min, max, message: message || '长度必须在__min__和__max__之间'.replace('__min__', min).replace('__max__', max), trigger }
  }
  const inputRangeForNumber = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && val.length > 0 && (isEmpty(val[0]) === false || isEmpty(val[1]) === false)) {
          if (validateNumber(val[0]) && validateNumber(val[1])) {
            callback()
          } else {
            callback(new Error(message || '请输入正整数、负整数或者小数'))
          }
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const numberRange = (min, max, message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val >= min && val <= max) {
          callback()
        } else {
          callback(new Error(message || '必须在__min__和__max__之间'.replace('__min__', min).replace('__max__', max)))
        }
      },
      trigger,
    })
  }
  const notSpace = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        // 输入的内容不能有空格
        if (val.indexOf(' ') !== -1) {
          callback(new Error(message || '输入内容不能含有空格'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const email = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateEmail(val)) {
          callback(new Error(message || '邮件格式不合法'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const mobile = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateMobile(val)) {
          callback(new Error(message || '手机格式不合法'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const userCard = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateUseCardCode(val)) {
          callback(new Error(message || '身份证校验不合法'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const menuPath = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateLinuxPath(val)) {
          callback(new Error(message || '菜单路径不合法'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const v2DecimalInteger = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validate2DecimalInteger(val)) {
          callback(new Error(message || '请输入0、正整数且小数保留2位'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }
  const positiveDecimalNum = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !isPositiveDecimalNum(val)) {
          callback(new Error(message || '请输入正确格式数字'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const str1 = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateStr1(val)) {
          callback(new Error(message || '只能包含数字、字母、下划线、减号'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const str2 = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateStr2(val)) {
          callback(new Error(message || `只能包含 数字、字母、以及半角句号 \".\" `))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const str3 = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !validateStr3(val)) {
          callback(new Error(message || '不能输入特殊字符，如：#%&*+-:/.<>?'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const positiveIntegerNum = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (!positiveInteger(val)) {
          callback(new Error(message || '请输入正整数'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const positiveIntegerNumber = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !positiveInteger(val)) {
          callback(new Error(message || '请输入正整数'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  const zeroAndPositiveIntegerNum = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !zeroAndPositiveInteger(val)) {
          callback(new Error(message || '请输入0或正整数'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  // 只能输入纯数字类型个
  const isValidateNumber = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !Isvalidatenumber(val)) {
          callback(new Error(message || '不能输入非数字的字符'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  // 只能输入纯数字类型个
  const tNumber = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val && !tNumberValidate(val)) {
          callback(new Error(message || '长度6位，前2位是大写字母，后四位是数字，例如：AA1234'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }

  // 自定义验证
  const customValidate = ({ validator, trigger = 'blur' }) => {
    return { validator, trigger }
  }
  //正数
  const validatePositiveNumber = (message, trigger) => {
    return customValidate({
      validator: (rule, val, callback) => {
        if (val <= 0) {
          callback(new Error(message || '必填项不能为空'))
        } else {
          callback()
        }
      },
      trigger,
    })
  }
  return {
    required,
    lengthRange,
    numberRange,
    notSpace,
    email,
    mobile,
    userCard,
    positiveDecimalNum,
    customValidate,
    menuPath,
    str1,
    str2,
    positiveIntegerNum,
    zeroAndPositiveIntegerNum,
    isValidateNumber,
    str3,
    tNumber,
    validatePositiveNumber,
    arrayRequired,
    v2DecimalInteger,
    positiveIntegerNumber,
    inputRangeForNumber,
  }
}
