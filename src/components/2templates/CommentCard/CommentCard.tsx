import { ChangeEvent, useState } from 'react'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { Textarea } from 'components/Textarea/Textarea'
import { toastError, toastSuccess } from 'components/Toast/Toast'
import { UserInfo } from 'components/UserInfo/UserInfo'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { getRelativeTime } from 'helpers/dateHelpers'
import {
  optimisticUpdateReviewAfterCommentDelete,
  optimisticUpdateReviewCommentsAfterCommentDelete,
  optimisticUpdateReviewCommentsAfterCommentUpdate,
} from 'helpers/optimisticsUpdateHelper'
import { useAuth } from 'hooks/useAuth'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrudDiscourseComments, useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'

import { CommentCardProps } from './CommentCard.types'
import styles from './CommentCard.module.scss'

export const CommentCard = (props: CommentCardProps) => {
  const { comment } = props

  const { authUser } = useAuth()
  const { updateMutation, deleteMutation } = useCrudDiscourseComments()
  const { listQueryKey: reviewsQueryKey } = useCrudDiscourseReviews()

  const handleDeleteComment = () => {
    deleteMutation.mutate({
      id: comment.id,
      hideToast: true,
      onSuccess: () => {
        toastSuccess({ description: 'Comment deleted successfully.' })
        optimisticUpdateReviewAfterCommentDelete(reviewsQueryKey, comment.review_id)
        optimisticUpdateReviewCommentsAfterCommentDelete(
          [UTILS_QUERY_KEYS.discourse.comments, comment.review_id],
          comment.id,
        )
      },
    })
  }

  const DEFAULT_EDITING_COMMENT = { id: '', description: '' }
  const [editingComment, setEditingComment] = useState(DEFAULT_EDITING_COMMENT)
  const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEditingComment(p => ({ ...p, description: e.target.value }))
  }

  const handleEditComment = () => {
    setEditingComment({ id: comment.id, description: comment.description })
  }

  const handleSaveComment = () => {
    updateMutation.mutate({
      data: {
        id: comment.id,
        description: editingComment.description,
        username: authUser.username,
        avatar_link: authUser.avatar_link,
        review_id: comment.review_id,
      },
      hideToast: true,
      onSuccess: apiResponse => {
        optimisticUpdateReviewCommentsAfterCommentUpdate(
          [UTILS_QUERY_KEYS.discourse.comments, comment.review_id],
          apiResponse?.data,
        )
        setEditingComment(DEFAULT_EDITING_COMMENT)
        // invalidateQueryKey(UTILS_QUERY_KEYS.discourse.myReviews, 'all')
      },
      onError: () => {
        toastError({
          description: `Comment creation failed.`,
        })
      },
    })
  }

  return (
    <div className={styles.comment}>
      <UserInfo
        userId={comment.user.user_id}
        username={comment.user.username}
        avatar={comment.user.avatar_link}
        createdAt={getRelativeTime(comment.created_at)}
        hideFollow={true}
        size={SizesEnum.S}
      />
      <div className={styles.content}>
        {!editingComment.id && <Label label={comment.description} font={FontsEnum.Text14} />}
        {editingComment.id && (
          <>
            <Textarea
              placeholder='Editing comment...'
              value={editingComment.description}
              onChange={handleChangeComment}
              width={'100%'}
            />
            <div className={styles.commentBtn}>
              <Button
                size={SizesEnum.S}
                variant={VariantsEnum.Primary}
                label='Comment'
                iconLeft={IconsEnum.Comment}
                onClick={handleSaveComment}
              />
            </div>
          </>
        )}
        <div className={styles.actions}>
          <Button
            label={'Edit'}
            size={SizesEnum.S}
            variant={VariantsEnum.Text}
            onClick={handleEditComment}
            iconLeft={IconsEnum.Pencil}
          />
          <Button
            label={'Delete'}
            size={SizesEnum.S}
            variant={VariantsEnum.Text}
            onClick={handleDeleteComment}
            iconLeft={IconsEnum.CloseSmall}
          />
          {/* <Button
            iconLeft={IconsEnum.Like}
            label={'12'}
            size={SizesEnum.S}
            variant={VariantsEnum.Secondary}
          />
          <Button label={'Reply'} size={SizesEnum.S} variant={VariantsEnum.Secondary} /> */}
        </div>
      </div>
    </div>
  )
}
