/* vite相关 */
import dotenv from 'dotenv'
export function loadEnv(mode) {
  const ret = {}
  const envList = [`./.env.${mode}.local`, `./.env.${mode}`, './.env.local', './.env']
  envList.forEach((e) => {
    dotenv.config({ path: e })
  })
  const keys = Object.keys(process.env)
  const newKeys = keys.filter((it) => {
    return it === 'NODE_ENV' || it.indexOf('WEB_') !== -1
  })
  for (const envName of newKeys) {
    let realName = process.env[envName].replace(/\\n/g, '\n')
    // 转换boolean
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    const tmpName = realName
    ret[envName] = realName
  }
  return ret
}
