import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { ReviewCard } from 'components/ReviewCard/ReviewCard'
import { SkeletonReviewCard } from 'components/ReviewCard/SkeletonReviewCard'
import { useCrudDiscourseMyReviews } from 'services/hooks/useCrudDiscourse'

export const MyReviewsTab = (props: { userId: string }) => {
  const { userId } = props

  const { list: reviews, isLoading } = useCrudDiscourseMyReviews({ userId })

  if (!isLoading && !reviews.length)
    return (
      <div>
        <DataNotFound label='There is no review created yet.' />
      </div>
    )

  return (
    <>
      {isLoading && !reviews.length && <SkeletonReviewCard />}
      {reviews.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </>
  )
}
