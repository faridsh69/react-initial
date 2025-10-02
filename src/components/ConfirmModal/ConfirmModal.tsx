import { Button } from 'components/Button/Button'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { Modal } from 'components/Modal/Modal'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { confirmModalAtom, DEFAULT_CONFIRM_MODAL } from 'hooks/contexts/confirmModalAtom'
import { useAtom } from 'jotai'

import styles from './ConfirmModal.module.scss'

export const ConfirmModal = () => {
  const [confirmModal, setConfirmModal] = useAtom(confirmModalAtom)
  const { label, subLabel, src, onConfirm, onCancel, isOpen } = confirmModal

  const handleCloseModal = () => {
    setConfirmModal(DEFAULT_CONFIRM_MODAL)
    onCancel?.()
  }

  const onConfirmClick = () => {
    setConfirmModal(DEFAULT_CONFIRM_MODAL)
    onConfirm?.()
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={handleCloseModal}
      variant={VariantsEnum.Secondary}
      body={
        <div className={styles.body}>
          {src && <Image src={src} alt='image' width={250} />}
          <Label label={label} font={FontsEnum.Header26} linesCount={3} />
          <Label label={subLabel} font={FontsEnum.Text16} />
        </div>
      }
      actions={
        <div className={styles.actions}>
          <Button
            label={'Cancel'}
            iconLeft={IconsEnum.CloseMedium}
            onClick={handleCloseModal}
            variant={VariantsEnum.Secondary}
            size={SizesEnum.M}
          />
          <Button
            label={'Confirm'}
            iconLeft={IconsEnum.Check}
            onClick={onConfirmClick}
            variant={VariantsEnum.Primary}
            size={SizesEnum.M}
          />
        </div>
      }
    />
  )
}
