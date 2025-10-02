import { useEffect } from 'react'
import { API_PER_PAGE } from 'constants/constants'
import { isArray } from 'helpers/helpers'
import { DiscourseReviewType } from 'services/apis/discourseApis'
import { QUERY_CLIENT } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudDiscourseReviewsPagination = (
  apiCallingQueryKey: string, // e.g. UTILS_QUERY_KEYS.discourse.reviews
  cachedListQueryKey: any, // the listQueryKey from useCrud that is e.g. [UTILS_QUERY_KEYS.discourse.reviews, filters]
  page: number,
  perPage = API_PER_PAGE,
) => {
  const { list: paginatedList, isLoading: isLoadingPagination } = useCrud<DiscourseReviewType>({
    queryKey: apiCallingQueryKey,
    filters: { page, perPage },
    configs: { enabled: page !== 1 },
  })

  useEffect(() => {
    QUERY_CLIENT.setQueryData(
      cachedListQueryKey,
      (list: DiscourseReviewType[]): DiscourseReviewType[] => {
        if (!list || !isArray(list)) return []

        return [...list, ...paginatedList]
      },
    )
  }, [paginatedList])

  return {
    isLoadingPagination,
  }
}
