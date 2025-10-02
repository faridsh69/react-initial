import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { Loader } from 'components/Loader/Loader'
import { SizesEnum } from 'enums/enums'
import { DiscourseCommentType } from 'services/apis/discourseApis'
import { useCrudDiscourseComments } from 'services/hooks/useCrudDiscourse'

import { CommentCard } from '../CommentCard/CommentCard'
import styles from './CommentsList.module.scss'

export const CommentsList = ({ reviewId }: { reviewId: string }) => {
  const { single, isLoadingSingle } = useCrudDiscourseComments(reviewId)

  // @ts-ignore
  const comments = single as DiscourseCommentType[]

  if (isLoadingSingle)
    return (
      <div className={styles.comments}>
        <Loader size={SizesEnum.S} label='' subLabel='Loading comments' />
      </div>
    )

  if (!comments?.length)
    return (
      <div className={styles.comments}>
        <DataNotFound label='No comments found, be the first one to write a comment.' />
      </div>
    )

  return (
    <div className={styles.comments}>
      {comments.map(comment => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
    </div>
  )
}
