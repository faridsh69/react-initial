import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

type TypeErrorValidation = { message: string; property: string }

export type TypeErrorHandlerInterceptor = (
  error: AxiosError<{ message: TypeErrorValidation[] }>,
) => Promise<AxiosError>

export type TypeResponseInterceptor = (response: AxiosResponse) => AxiosResponse

export type TypeRequestInterceptor = (
  config: InternalAxiosRequestConfig,
) => InternalAxiosRequestConfig

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TypeAxiosMethod = <ResType>(parameters: {
  endpoint: string
  data?: object
  options?: object
}) => Promise<AxiosResponse>

export type CreateApiClientType = (
  baseURL: string,
  auth?: boolean,
  addPartnerId?: boolean,
) => {
  get: TypeAxiosMethod
  post: TypeAxiosMethod
  put: TypeAxiosMethod
  patch: TypeAxiosMethod
  remove: TypeAxiosMethod
}

// We are defining types in only crud layer, then only layer that whole frontend app can interact with
export type TypeModel = {
  [key: string]: string | number | boolean | null | undefined | any
}

export type TypeListApiMethod = (filters?: any) => Promise<AxiosResponse<TypeModel[]>>
export type TypeSingleApiMethod =
  | ((id: number) => Promise<AxiosResponse<TypeModel>>)
  | ((id: string) => Promise<AxiosResponse<TypeModel>>)
export type TypeCreateApiMethod = (data: any) => Promise<AxiosResponse<TypeModel>>
export type TypeUpdateApiMethod = (data: any) => Promise<AxiosResponse<TypeModel>>
export type TypeDeleteApiMethod = (id: number) => Promise<AxiosResponse<void>>

export type TypeApis = {
  listApi: TypeListApiMethod
  singleApi: TypeSingleApiMethod
  createApi: TypeCreateApiMethod
  updateApi: TypeUpdateApiMethod
  deleteApi: TypeDeleteApiMethod
}
export type ApiKeyMapType = {
  [key: string]: Partial<TypeApis>
}

export type TypePayload<T> = {
  data: Partial<T> & { id?: number | string }
  onSuccess?: (apiRes: any) => void
  onError?: (error?: any) => void
  hideToast?: boolean
}

export type TypePayloadDelete = {
  id: string | number
  onSuccess?: (apiRes: any) => void
  onError?: (error?: any) => void
  hideToast?: boolean
}

export type TypeUseCrudProps = {
  queryKey: string
  queryKeyApisMapping?: ApiKeyMapType
  modelId?: string | number
  filters?: any
  configs?: Partial<UseQueryOptions>
  hideToast?: boolean
}

export type TypeUseCrudReturn<T> = {
  list: T[]
  listApiResponse: any
  single?: T
  isLoading: boolean
  isLoadingSingle: boolean
  isError: boolean

  createMutation: {
    mutate: (payload: TypePayload<T>) => void
    isPending: boolean
    error: Error | null
  }

  updateMutation: {
    mutate: (payload: TypePayload<T>) => void
    isPending: boolean
    error: Error | null
  }

  deleteMutation: {
    mutate: (payload: TypePayloadDelete) => void
    isPending: boolean
    error: Error | null
  }

  listQueryKey: any[]
  singleQueryKey: any[]
}
