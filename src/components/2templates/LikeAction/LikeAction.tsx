import { Button } from 'components/Button/Button'
import { toastError } from 'components/Toast/Toast'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import {
  invalidateQueryKey,
  optimisticsUpdateMyFeedAfterLikeAction,
  optimisticsUpdateMyReviewsAfterLikeAction,
  optimisticsUpdateReviewsAfterLikeAction,
} from 'helpers/optimisticsUpdateHelper'
import { useAuth } from 'hooks/useAuth'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import {
  useCrudDiscourseLike,
  useCrudDiscourseMyFeed,
  useCrudDiscourseMyReviews,
  useCrudDiscourseReviews,
} from 'services/hooks/useCrudDiscourse'

import { LikeActionProps } from './LikeAction.types'

export const LikeAction = (props: LikeActionProps) => {
  const { review } = props

  const { authUser } = useAuth()
  const { createMutation: likeMutation } = useCrudDiscourseLike()
  const { listQueryKey: reviewsQueryKey } = useCrudDiscourseReviews()
  const { listQueryKey: myFeedQueryKey } = useCrudDiscourseMyFeed()
  const { listQueryKey: myReviewsQueryKey } = useCrudDiscourseMyReviews({
    userId: authUser.user_id,
  })

  const handleLike = () => {
    optimisticsUpdateReviewsAfterLikeAction(reviewsQueryKey, review.id)
    optimisticsUpdateMyFeedAfterLikeAction(myFeedQueryKey, review.id)
    optimisticsUpdateMyReviewsAfterLikeAction(myReviewsQueryKey, review.id)

    likeMutation.mutate({
      data: {
        review_id: review.id,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
      },
      hideToast: true,
      onSuccess: () => {
        // toastSuccess({
        //   description: `Review ${review.is_liked ? 'unliked' : 'liked'} successfully.`,
        // })
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.statisticsUser, 'all')
      },
      onError: () => {
        toastError({
          description: `Review ${review.is_liked ? 'unliked' : 'liked'} failed.`,
        })
      },
    })
  }

  return (
    <Button
      iconLeft={IconsEnum.Like}
      label={`${review.likes_count} likes`}
      variant={review.is_liked ? VariantsEnum.Primary : VariantsEnum.Secondary}
      size={SizesEnum.S}
      onClick={handleLike}
    />
  )
}
