import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudAuthLogin = () => useCrud<any>({ queryKey: UTILS_QUERY_KEYS.auth.jwtLogin })

export const useCrudAuthLogout = () =>
  useCrud<{ id?: string }>({ queryKey: UTILS_QUERY_KEYS.auth.jwtLogout })
