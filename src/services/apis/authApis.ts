import { PUBLIC_API_CLIENT, PUBLIC_PURE_API_CLIENT } from '../clients/clients'
import { HEADER_CONTENT_TYPE_URLENCODED } from './queryConstants'

const AUTH = 'auth'

export const postAuthRegisterApi = (data: any) =>
  PUBLIC_API_CLIENT.post<any>({
    endpoint: `${AUTH}/register`,
    data,
  })

export const postAuthLoginApi = (data: any) =>
  PUBLIC_PURE_API_CLIENT.post<any>({
    endpoint: `${AUTH}/jwt/login`,
    data,
    options: HEADER_CONTENT_TYPE_URLENCODED,
  })

export type AuthEmailAvailabilityApiFilters = {
  email: string
}
