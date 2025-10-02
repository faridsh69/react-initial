import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { IconsEnum } from 'enums/enums'
import { DEFAULT_POST_MODAL, postModalAtom } from 'hooks/contexts/postModalAtom'
import { DEFAULT_REVIEW_MODAL, reviewModalAtom } from 'hooks/contexts/reviewModalAtom'
import { useAtom } from 'jotai'

export const PostReviewCreation = () => {
  const [, setPostModal] = useAtom(postModalAtom)
  const [, setReviewModal] = useAtom(reviewModalAtom)

  const handleCreatePost = () => {
    setPostModal({ ...DEFAULT_POST_MODAL, isOpen: true })
  }

  const handleCreateReview = () => {
    setReviewModal({ ...DEFAULT_REVIEW_MODAL, isOpen: true })
  }

  return (
    <div>
      <ContextMenu
        triggerButtonProps={{
          label: 'New conversation',
          iconLeft: IconsEnum.Plus,
          width: '100%',
        }}
        options={[
          { label: 'Post', icon: IconsEnum.Post, onClick: handleCreatePost },
          {
            label: 'Review',
            icon: IconsEnum.Review,
            onClick: handleCreateReview,
          },
        ]}
      />
    </div>
  )
}
