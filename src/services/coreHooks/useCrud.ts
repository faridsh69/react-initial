import { useEffect, useMemo } from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toastSuccess } from 'components/Toast/Toast'
import { handleException } from 'helpers/handleException'
import { emptyPromise, isArray, isObject } from 'helpers/helpers'
import { QUERY_CLIENT, UTILS_QUERY_KEY_APIS } from 'services/apis/queryConstants'
import {
  TypeModel,
  TypePayload,
  TypePayloadDelete,
  TypeUseCrudProps,
  TypeUseCrudReturn,
} from 'services/types/services'

export const useCrud = <T>({
  queryKey,
  modelId = 0,
  filters = {},
  configs = {},
  hideToast = false,
  queryKeyApisMapping = UTILS_QUERY_KEY_APIS,
}: TypeUseCrudProps): TypeUseCrudReturn<T> => {
  const {
    listApi = emptyPromise,
    singleApi = emptyPromise,
    createApi = emptyPromise,
    updateApi = emptyPromise,
    deleteApi = emptyPromise,
  } = queryKeyApisMapping[queryKey]

  const listApiResponse = QUERY_CLIENT.getQueryData([queryKey])

  const {
    data: listApiData,
    error: listApiError,
    isFetching,
  } = useQuery({
    queryKey: [queryKey, filters],
    queryFn: async () => {
      const response: any = await listApi?.(filters)

      const apiResponse = response?.data
      QUERY_CLIENT.setQueryData([queryKey], apiResponse)

      if (isArray(apiResponse)) return apiResponse
      if (isArray(apiResponse?.data)) return apiResponse?.data || []
      if (isArray(apiResponse?.items)) return apiResponse?.items || []

      return []
    },
    placeholderData: [],
    enabled: configs.enabled ? configs.enabled : !!listApi,
    ...configs,
  })

  const list = useMemo(() => {
    return listApiData || []
  }, [listApiData]) as T[]

  const {
    data: single,
    error: singleApiError,
    isFetching: isFetchingSingle,
  } = useQuery<any>({
    queryKey: [queryKey, modelId],
    queryFn: async () => {
      const response: any = await singleApi(modelId as never)
      const apiResponse = response?.data as any

      return isObject(apiResponse?.data) ? apiResponse.data : apiResponse || {}
    },
    placeholderData: {},
    ...configs,
    enabled: !!modelId,
  })

  const createMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => createApi(payload.data),
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      const createdModel = apiResponse.data

      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (list && isArray(list)) {
          if (createdModel) {
            return [createdModel, ...list]
          }

          return list
        }

        return [createdModel]
      })

      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) toastSuccess({ description: queryKey })
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.(error)

      handleException(error, 'Creating Api Error: ' + queryKey, payload.hideToast)
    },
  })

  const updateMutation = useMutation({
    mutationFn: (payload: TypePayload<T>) => updateApi(payload.data),
    onMutate: (payload: TypePayload<T>) => {
      const { data } = payload
      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (!list || !isArray(list)) return []

        const updatedList = list.map(item =>
          item.id !== data.id
            ? item
            : {
                ...item,
                ...data,
              },
        )

        return updatedList
      })

      if (single?.id === data?.id) {
        QUERY_CLIENT.setQueryData([queryKey, modelId], (single: TypeModel) => {
          return {
            ...single,
            ...data,
          }
        })
      }
    },
    onSuccess: (apiResponse: any, payload: TypePayload<T>) => {
      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) toastSuccess({ description: queryKey })
    },
    onError: (error: any, payload: TypePayload<T>) => {
      payload.onError?.(error)

      handleException(error, 'Updating Api Error: ' + queryKey, payload.hideToast)
    },
  })

  const deleteApiFn = (payload: TypePayloadDelete) => deleteApi(payload.id as number)

  const deleteMutation = useMutation({
    mutationFn: deleteApiFn,
    onSuccess: (apiResponse: any, payload: TypePayloadDelete) => {
      QUERY_CLIENT.setQueryData([queryKey, filters], (list: TypeModel[]) => {
        if (list) {
          return list.filter(item => item.id !== payload.id)
        }

        return []
      })
      payload.onSuccess?.(apiResponse)

      if (!payload.hideToast) toastSuccess({ description: queryKey })
    },
    onError: (error: any, payload: TypePayloadDelete) => {
      payload.onError?.()

      handleException(error, 'Deleting Api Error: ' + queryKey, payload.hideToast)
    },
  })

  useEffect(() => {
    if (listApiError) {
      handleException(listApiError, 'Fetching list Api: ' + queryKey, hideToast)
    }

    if (singleApiError) {
      handleException(singleApiError, 'Showing item Api: ' + queryKey, hideToast)
    }
  }, [listApiError, singleApiError, queryKey])

  return {
    list,
    listApiResponse,
    isLoading: isFetching,
    isError: !!listApiError,
    single,
    isLoadingSingle: isFetchingSingle,
    createMutation,
    updateMutation,
    deleteMutation,
    listQueryKey: [queryKey, filters],
    singleQueryKey: [queryKey, modelId],
  }
}
