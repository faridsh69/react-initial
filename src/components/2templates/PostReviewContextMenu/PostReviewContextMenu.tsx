import { APP_PATHS } from 'components/0app/constants'
import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { toastSuccess } from 'components/Toast/Toast'
import { ColorsEnum, IconsEnum, VariantsEnum } from 'enums/enums'
import { getIsPost } from 'helpers/logicHelpers'
import { postModalAtom } from 'hooks/contexts/postModalAtom'
import { reviewModalAtom } from 'hooks/contexts/reviewModalAtom'
import { useChangePath } from 'hooks/useChangePath'
import { useAtom } from 'jotai'
import { useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'

import { PostReviewContextMenuProps } from './PostReviewContextMenu.types'

export const PostReviewContextMenu = (props: PostReviewContextMenuProps) => {
  const { review } = props

  const { deleteMutation } = useCrudDiscourseReviews()

  const [, setPostModal] = useAtom(postModalAtom)
  const [, setReviewModal] = useAtom(reviewModalAtom)

  const isPost = getIsPost(review)

  const { navigate } = useChangePath()

  const handleEdit = () => {
    if (isPost) {
      setPostModal({
        isOpen: true,
        postId: review.id,

        text: `${review.title}\n${review.description}`,
        imageUrls: review.image_urls,
      })
      return
    }

    setReviewModal({
      isOpen: false,
      reviewId: review.id,

      title: review.title,
      description: review.description,
      rate: review.rate,
      vintageYear: review.product?.vintage_year,
      imageUrls: review.image_urls,
      product: {
        product_id: review.product_id,
        slug: review.product_id,
        text: review.product.product_title,
        image_url: review.product.product_image,
        product_color: review.product.product_color,
        product_type: review.product.product_type,
      },
    })
    navigate(APP_PATHS.communityReview)
  }

  const handleDelete = () => {
    deleteMutation.mutate({
      id: review.id,
      hideToast: true,
      onSuccess: () => {
        toastSuccess({ description: 'Review deleted successfully.' })
        // @TODO 1 Handle optimistic update in my-reviews
      },
    })
  }

  return (
    <ContextMenu
      width={150}
      triggerButtonProps={{
        iconLeft: IconsEnum.Dots,
        variant: VariantsEnum.Text,
        width: 40,
      }}
      options={[
        { label: 'Edit', onClick: handleEdit },
        {
          label: 'Delete',
          color: ColorsEnum.Error,
          onClick: handleDelete,
        },
      ]}
    />
  )
}
