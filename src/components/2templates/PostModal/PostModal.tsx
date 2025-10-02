import { Button } from 'components/Button/Button'
import { FileUploader } from 'components/FileUploader/FileUploader'
import { Modal } from 'components/Modal/Modal'
import { Textarea } from 'components/Textarea/Textarea'
import { toastError, toastSuccess } from 'components/Toast/Toast'
import { SizesEnum, VariantsEnum } from 'enums/enums'
import { separateTitleAndDescription } from 'helpers/logicHelpers'
import {
  optimisticsUpdateMyReviewsAfterCreateReviewAction,
  optimisticsUpdateMyReviewsAfterUpdateReviewAction,
} from 'helpers/optimisticsUpdateHelper'
import { DEFAULT_POST_MODAL, postModalAtom } from 'hooks/contexts/postModalAtom'
import { useAuth } from 'hooks/useAuth'
import { useAtom } from 'jotai'
import { useCrudDiscourseMyReviews, useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'

import styles from './PostModal.module.scss'

export const PostModal = () => {
  const { authUser } = useAuth()

  const [postModal, setPostModal] = useAtom(postModalAtom)
  const { isOpen, text, imageUrls, postId } = postModal

  const handleCloseModal = () => {
    setPostModal(DEFAULT_POST_MODAL)
  }

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostModal(prev => ({
      ...prev,
      text: e.target.value,
    }))
  }

  const setImageUrls = (imageUrls: string[]) => {
    setPostModal(prev => ({
      ...prev,
      imageUrls,
    }))
  }

  const { listQueryKey: myReviewsQueryKey } = useCrudDiscourseMyReviews({
    userId: authUser.user_id,
  })
  const { createMutation, updateMutation } = useCrudDiscourseReviews()
  const handleCreatePost = () => {
    const { title, description } = separateTitleAndDescription(text)

    if (postId) {
      updateMutation.mutate({
        data: {
          id: postId,
          title,
          description,
          image_urls: imageUrls,
          product_id: 'post', // This is showing this content is a post
          username: authUser.username,
          avatar_link: authUser.avatar_link,
          // FAKE DATA from here
          rate: 0,
          product_title: '',
        },
        hideToast: true,
        onSuccess: apiResponse => {
          toastSuccess({
            description: `Post updated successfully.`,
          })
          handleCloseModal()
          optimisticsUpdateMyReviewsAfterUpdateReviewAction(myReviewsQueryKey, apiResponse?.data)
        },
        onError: () => {
          toastError({
            description: `Post update failed.`,
          })
        },
      })
      return
    }

    createMutation.mutate({
      data: {
        title,
        description,
        image_urls: imageUrls,
        product_id: 'post', // This is showing this content is a post
        username: authUser.username,
        avatar_link: authUser.avatar_link,
        // FAKE DATA from here
        rate: 0,
        product_title: '',
      },
      hideToast: true,
      onSuccess: apiResponse => {
        toastSuccess({
          description: `Post created successfully.`,
        })
        handleCloseModal()
        optimisticsUpdateMyReviewsAfterCreateReviewAction(myReviewsQueryKey, apiResponse?.data)
      },
      onError: () => {
        toastError({
          description: `Post creation failed.`,
        })
      },
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      bodyPadding
      width={'720px'}
      setIsOpen={handleCloseModal}
      closeOnClickOutside={false}
      title='New post'
      variant={VariantsEnum.Secondary}
      body={
        <div>
          <Textarea
            placeholder='What do you want to talk about?'
            rows={6}
            value={text}
            onChange={handleChangeText}
          />
        </div>
      }
      actions={
        <div className={styles.actions}>
          <FileUploader value={imageUrls} onChange={setImageUrls} label='Add Photo' />
          <Button
            label='Submit'
            variant={VariantsEnum.Primary}
            onClick={handleCreatePost}
            size={SizesEnum.S}
            disabled={createMutation.isPending || updateMutation.isPending}
          />
        </div>
      }
    />
  )
}
