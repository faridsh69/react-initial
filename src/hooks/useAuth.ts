import { useEffect } from 'react'
import { toastSuccess } from 'components/Toast/Toast'
import {
  getAuthUserAccessToken,
  getAuthUserDetails,
  setAuthUserAccessToken,
  setAuthUserDetails,
} from 'helpers/userMethods'
import { DiscourseStatisticsUser } from 'services/apis/discourseApis'
import { useCrudAuthLogin } from 'services/hooks/useCrudAuth'
import { useCrudDiscourseStatistics } from 'services/hooks/useCrudDiscourse'

const static_auth_user: Partial<DiscourseStatisticsUser> = {
  user_id: '6891ce7086befe06e973eb8e', // '68774356f1a51ac06604bf78',
}

export const useAuth = () => {
  const { createMutation: login } = useCrudAuthLogin()

  const accessToken = getAuthUserAccessToken()
  const lsAuthUserDetails = getAuthUserDetails(static_auth_user)

  const { single: authUserStatistics } = useCrudDiscourseStatistics(static_auth_user.user_id || '')

  const authUser = authUserStatistics?.user_id ? authUserStatistics : lsAuthUserDetails

  useEffect(() => {
    if (!authUserStatistics?.user_id) return

    setAuthUserDetails(authUserStatistics)
  }, [authUserStatistics?.user_id])

  const autoLogin = () => {
    login.mutate({
      data: { username: 'farid@test.com', password: '123456' },
      onSuccess: response => {
        setAuthUserAccessToken(response?.data?.access_token)
        toastSuccess({ description: 'Login successfully' })
      },
      hideToast: true,
    })
  }

  return { authUser: authUser as DiscourseStatisticsUser, accessToken, autoLogin }
}
