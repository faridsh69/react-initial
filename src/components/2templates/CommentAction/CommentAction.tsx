import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { Textarea } from 'components/Textarea/Textarea'
import { toastError } from 'components/Toast/Toast'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import {
  invalidateQueryKey,
  optimisticUpdateMyFeedAfterCommentAction,
  optimisticUpdateReviewAfterCommentAction,
} from 'helpers/optimisticsUpdateHelper'
import { useAuth } from 'hooks/useAuth'
import { DiscourseReviewType } from 'services/apis/discourseApis'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import {
  useCrudDiscourseComments,
  useCrudDiscourseMyFeed,
  useCrudDiscourseReviews,
} from 'services/hooks/useCrudDiscourse'

import { CommentsList } from '../CommentsList/CommentsList'
import { LikeAction } from '../LikeAction/LikeAction'
import styles from './CommentAction.module.scss'

export const CommentAction = (props: { review: DiscourseReviewType }) => {
  const { review } = props

  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')

  const { authUser } = useAuth()

  const handleChangeComment = (e: any) => {
    setComment(e.target.value)
  }

  const { listQueryKey: reviewsQueryKey } = useCrudDiscourseReviews()
  const { listQueryKey: myFeedQueryKey } = useCrudDiscourseMyFeed()

  const { createMutation: createCommentMutation } = useCrudDiscourseComments()

  const handleSaveComment = () => {
    createCommentMutation.mutate({
      data: {
        review_id: review.id,
        description: comment,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
      },
      hideToast: true,
      onSuccess: () => {
        setComment('')
        // toastSuccess({
        //   description: `Comment created successfully.`,
        // })
        // optimisticUpdateReviewCommentsAfterCommentAction(
        //   [UTILS_QUERY_KEYS.discourse.comments, review.id],
        //   apiResponse?.data,
        // )
        optimisticUpdateReviewAfterCommentAction(reviewsQueryKey, review.id)
        optimisticUpdateMyFeedAfterCommentAction(myFeedQueryKey, review.id)
        invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
        invalidateQueryKey([UTILS_QUERY_KEYS.discourse.comments, review.id], 'exact')
      },
      onError: () => {
        toastError({
          description: `Comment creation failed.`,
        })
      },
    })
  }

  return (
    <div className={styles.CommentAction}>
      <div className={styles.actions}>
        <LikeAction review={review} />
        <Button
          iconLeft={IconsEnum.Comment}
          label={`${review.comments_count} comments`}
          variant={showComments ? VariantsEnum.Primary : VariantsEnum.Secondary}
          size={SizesEnum.S}
          onClick={() => setShowComments(!showComments)}
        />
        <Button
          iconLeft={IconsEnum.Share}
          label='Share'
          variant={VariantsEnum.Secondary}
          size={SizesEnum.S}
        />
      </div>
      {showComments && <CommentsList reviewId={review.id} />}
      <div className={styles.textarea}>
        <Textarea
          placeholder='Write a comment...'
          value={comment}
          onChange={handleChangeComment}
          width={'100%'}
        />
        {comment && (
          <div className={styles.commentBtn}>
            <Button
              size={SizesEnum.S}
              variant={VariantsEnum.Primary}
              label='Comment'
              iconLeft={IconsEnum.Comment}
              onClick={handleSaveComment}
            />
          </div>
        )}
      </div>
    </div>
  )
}
