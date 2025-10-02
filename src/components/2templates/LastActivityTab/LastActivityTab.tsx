import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { ReviewCard } from 'components/ReviewCard/ReviewCard'
import { SkeletonReviewCard } from 'components/ReviewCard/SkeletonReviewCard'
import { API_PER_PAGE } from 'constants/constants'
import { usePaginateWithIntersection } from 'hooks/usePaginateWithIntersection'
import { themeStyles } from 'scss/theme.styels'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'
import { useCrudDiscourseReviewsPagination } from 'services/hooks/useCrudPagination'

export const LastActivityTab = () => {
  const { list, isLoading, listQueryKey } = useCrudDiscourseReviews()

  const { divLocatedAtBottomOfPageRef, page } = usePaginateWithIntersection(
    list.length,
    API_PER_PAGE,
  )

  useCrudDiscourseReviewsPagination(UTILS_QUERY_KEYS.discourse.reviews, listQueryKey, page)

  if (!isLoading && !list.length)
    return (
      <div>
        <DataNotFound label='No reviews created yet.' />
      </div>
    )

  return (
    <div className={themeStyles.paginatedList}>
      {isLoading && !list.length && <SkeletonReviewCard count={3} />}
      {list.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
      <div ref={divLocatedAtBottomOfPageRef}>
        <SkeletonReviewCard count={1} />
      </div>
    </div>
  )
}
