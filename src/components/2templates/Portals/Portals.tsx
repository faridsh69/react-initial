import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ConfirmModal } from 'components/ConfirmModal/ConfirmModal'
import { confirmModalAtom } from 'hooks/contexts/confirmModalAtom'
import { imageModalAtom } from 'hooks/contexts/imageModalAtom'
import { postModalAtom } from 'hooks/contexts/postModalAtom'
import { useAtom } from 'jotai'
import { ToastContainer } from 'react-toastify'

import { ImageModal } from '../../ImageModal/ImageModal'
import { PostModal } from '../PostModal/PostModal'

export const Portals = () => {
  const [{ isOpen: isPostModalOpen }] = useAtom(postModalAtom)
  const [{ isOpen: isImageModalOpen }] = useAtom(imageModalAtom)
  const [{ isOpen: isConfirmModalOpen }] = useAtom(confirmModalAtom)

  return (
    <>
      {isConfirmModalOpen && <ConfirmModal />}
      {isImageModalOpen && <ImageModal />}
      {isPostModalOpen && <PostModal />}

      <ToastContainer
        limit={2}
        position={'bottom-right'}
        icon={false}
        autoClose={3000}
        closeButton={false}
      />
    </>
  )
}
