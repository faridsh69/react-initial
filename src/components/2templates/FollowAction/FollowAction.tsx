import { Button } from 'components/Button/Button'
import { toastError, toastWarning } from 'components/Toast/Toast'
import { SizesEnum, VariantsEnum } from 'enums/enums'
import {
  invalidateQueryKey,
  optimisticsUpdateReviewsAfterFollowAction,
  optimisticsUpdateUsersAfterFollowAction,
} from 'helpers/optimisticsUpdateHelper'
import { confirmModalAtom } from 'hooks/contexts/confirmModalAtom'
import { useAuth } from 'hooks/useAuth'
import { useAtom } from 'jotai'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import {
  useCrudDiscourseFollowers,
  useCrudDiscourseMyFeed,
  useCrudDiscourseReviews,
  useCrudDiscourseUsers,
} from 'services/hooks/useCrudDiscourse'

export const FollowAction = (props: { userId: string; isFollowed: boolean }) => {
  const { userId, isFollowed } = props

  const { authUser, accessToken } = useAuth()

  const [, setConfirmModal] = useAtom(confirmModalAtom)

  const { createMutation: followMutation } = useCrudDiscourseFollowers()
  const { listQueryKey: usersQueryKey } = useCrudDiscourseUsers()
  const { listQueryKey: reviewsQueryKey } = useCrudDiscourseReviews()
  const { listQueryKey: myFeedQueryKey } = useCrudDiscourseMyFeed()

  const handleUnfollow = () => {
    setConfirmModal({
      isOpen: true,
      label: 'Unfollow',
      subLabel: 'Are you sure you want to unfollow this user?',
      onConfirm: handleToggleFollow,
    })
  }

  const handleToggleFollow = () => {
    if (!accessToken) {
      toastWarning({ description: 'You need to be logged in to follow users.' })
      return
    }

    optimisticsUpdateUsersAfterFollowAction(usersQueryKey, userId, isFollowed)
    optimisticsUpdateReviewsAfterFollowAction(reviewsQueryKey, userId, isFollowed)
    followMutation.mutate({
      data: {
        following_id: userId,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
      },
      hideToast: true,
      onSuccess: () => {
        invalidateQueryKey(myFeedQueryKey)
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myFollowings, 'all')
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
      },
      onError: () => {
        toastError({
          description: `User ${isFollowed ? 'unfollowed' : 'followed'} failed.`,
        })
      },
    })
  }

  return (
    <Button
      label={isFollowed ? 'Following' : 'Follow'}
      size={SizesEnum.S}
      onClick={isFollowed ? handleUnfollow : handleToggleFollow}
      variant={isFollowed ? VariantsEnum.Primary : VariantsEnum.Secondary}
      width={80}
    />
  )
}
