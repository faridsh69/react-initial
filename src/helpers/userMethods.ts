import { DiscourseStatisticsUser } from 'services/apis/discourseApis'
import { TypeModel } from 'services/types/services'

import { getLs, setLs } from './localstorage'

const authUserKey = 'user'
export const getAuthUser = (): Partial<TypeModel> => {
  return getLs(authUserKey, {})
}

export const getAuthUserAccessToken = (): string => {
  return getAuthUser().access_token || ''
}

export const setAuthUserAccessToken = (token: string): void => {
  return setLs(authUserKey, { access_token: token })
}

const authUserDetailsKey = 'user-details'
export const getAuthUserDetails = (
  defaultUserDetails: Partial<DiscourseStatisticsUser>,
): Partial<DiscourseStatisticsUser> => {
  return getLs<Partial<DiscourseStatisticsUser>>(authUserDetailsKey, defaultUserDetails)
}

export const setAuthUserDetails = (userDetails: DiscourseStatisticsUser): void => {
  return setLs(authUserDetailsKey, userDetails)
}

export const logoutUser = () => {
  // removeLs('user')
  // window.location.href = '/login'
}

export const getUserName = (user: Partial<TypeModel>): string => {
  return `${user.first_name} ${user.last_name}`
}
