import { CommentAction } from 'components/2templates/CommentAction/CommentAction'
import { PostReviewContextMenu } from 'components/2templates/PostReviewContextMenu/PostReviewContextMenu'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { Rating } from 'components/Rating/Rating'
import { UserInfo } from 'components/UserInfo/UserInfo'
import { FontsEnum, SizesEnum } from 'enums/enums'
import { getRelativeTime } from 'helpers/dateHelpers'
import { getIsPost } from 'helpers/logicHelpers'
import { useAuth } from 'hooks/useAuth'

import { ReviewCardProps } from './ReviewCard.types'
import styles from './ReviewCard.module.scss'

export const ReviewCard = (props: ReviewCardProps) => {
  const { review } = props

  const { user_id, username, avatar_link } = review.user

  const isPost = getIsPost(review)

  const { authUser } = useAuth()
  const isAuthReview = review.user_id === authUser.user_id

  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <div className={styles.userinfo}>
          <UserInfo
            userId={user_id}
            username={username}
            avatar={avatar_link}
            isFollowed={review.is_followed}
            createdAt={getRelativeTime(review.created_at)}
            description='Posted a review'
          />
        </div>
        {isAuthReview && <PostReviewContextMenu review={review} />}
      </div>
      {!isPost && <Rating value={review.rate} size={SizesEnum.S} noHover={true} />}
      <Label label={review.title} font={FontsEnum.Label18} linesCount={3} />
      <Label label={review.description} font={FontsEnum.Text14} />

      {!!review.image_urls?.length && (
        <div className={styles.images}>
          {review.image_urls.map(src => {
            return (
              <Image
                key={src}
                src={src}
                width={120}
                height={100}
                borderRadius='12px'
                className={styles.image}
              />
            )
          })}
        </div>
      )}

      <CommentAction review={review} />
    </div>
  )
}
