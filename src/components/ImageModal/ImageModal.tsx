import { Button } from 'components/Button/Button'
import { Image } from 'components/Image/Image'
import { Modal } from 'components/Modal/Modal'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { downloadImage } from 'helpers/helpers'
import { DEFAULT_IMAGE_MODAL, imageModalAtom } from 'hooks/contexts/imageModalAtom'
import { useAtom } from 'jotai'

import styles from './ImageModal.module.scss'

export const ImageModal = () => {
  const [imageModal, setImageModal] = useAtom(imageModalAtom)
  const { isOpen, src, alt } = imageModal

  return (
    <Modal
      isOpen={isOpen}
      bodyPadding
      setIsOpen={() => setImageModal(DEFAULT_IMAGE_MODAL)}
      closeOnClickOutside={true}
      variant={VariantsEnum.Secondary}
      body={
        <div className={styles.body}>
          <Image src={src} />
        </div>
      }
      title={
        <div className={styles.actions}>
          <Button
            iconRight={IconsEnum.ArrowRight}
            label={`Download`}
            variant={VariantsEnum.Text}
            size={SizesEnum.S}
            onClick={() => downloadImage(src, alt)}
          />
        </div>
      }
    />
  )
}
