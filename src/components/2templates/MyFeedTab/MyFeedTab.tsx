import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { ReviewCard } from 'components/ReviewCard/ReviewCard'
import { SkeletonReviewCard } from 'components/ReviewCard/SkeletonReviewCard'
import { themeStyles } from 'scss/theme.styels'
import { useCrudDiscourseMyFeed } from 'services/hooks/useCrudDiscourse'

export const MyFeedTab = () => {
  const { list: myFeeds, isLoading } = useCrudDiscourseMyFeed()

  if (!isLoading && !myFeeds.length)
    return (
      <>
        <DataNotFound label='No reviews found in your followings, please follow more users.' />
      </>
    )

  return (
    <div className={themeStyles.paginatedList}>
      {isLoading && !myFeeds.length && <SkeletonReviewCard />}
      {myFeeds.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
