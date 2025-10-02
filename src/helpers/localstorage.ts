import { APP_LS_KEY } from 'constants/constants'

import { isObjectEmpty, isUndefined } from './helpers'

export const getLs = <T>(lsKey: string, defaultValue: T, appLsKey = APP_LS_KEY): T => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}

    if (isObjectEmpty(appLsData) || isUndefined(appLsData[lsKey])) {
      return defaultValue
    }

    return appLsData[lsKey]
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return defaultValue
  }
}

export const setLs = (lsKey: string, value: any, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || '{}'
    const appLsData = JSON.parse(appLsJson) || {}
    const newAppLsData = { ...appLsData, [lsKey]: value }

    localStorage.setItem(appLsKey, JSON.stringify(newAppLsData))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    const appLsJson = JSON.stringify({ [lsKey]: value })
    localStorage.setItem(lsKey, appLsJson)
  }
}

export const removeLs = (lsKey: string, appLsKey = APP_LS_KEY): void => {
  try {
    const appLsJson = localStorage.getItem(appLsKey) || ''
    const appLsData = JSON.parse(appLsJson) || {}
    delete appLsData[lsKey]

    localStorage.setItem(appLsKey, JSON.stringify(appLsData))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    //
  }
}
