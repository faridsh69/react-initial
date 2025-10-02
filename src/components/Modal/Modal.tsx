import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Button } from 'components/Button/Button'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useClickOutside } from 'hooks/useClickOutside'
import { createPortal } from 'react-dom'

import { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'

export const Modal = (props: ModalProps) => {
  const {
    title,
    body,
    actions,
    zIndex = ZINDEXES.modal,
    overlayZIndex = ZINDEXES.modalOverlay,
    isOpen: propIsOpen = true,
    setIsOpen: propSetIsOpen,
    bodyPadding = false,
    width,
    closeOnClickOutside = true,
    variant = VariantsEnum.Primary,
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(propIsOpen)

  useEffect(() => {
    if (propIsOpen !== isOpen) setIsOpen(propIsOpen)
  }, [propIsOpen])

  const handleClose = useCallback(() => {
    setIsOpen(false)
    propSetIsOpen?.(false)
  }, [propSetIsOpen])

  const clickoutsideRef = useClickOutside(handleClose, isOpen && closeOnClickOutside)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const isSecondary = variant === VariantsEnum.Secondary
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    if (!isOpen) return

    setTimeout(() => {
      setIsHidden(false)
    }, 0)
  }, [isOpen])
  if (!isOpen) return <></>

  return createPortal(
    <div className={styles.overlay} style={{ zIndex: overlayZIndex }}>
      <div
        className={clsx(styles.modal, isHidden && styles.isHidden)}
        style={{ zIndex, width }}
        ref={clickoutsideRef}
      >
        <div className={clsx(styles.main, variant && styles[`variant-${variant}`])}>
          <div className={styles.header}>
            {isSecondary && (
              <div className={styles.title}>
                {/* @ts-ignore */}
                <Label label={title} font={FontsEnum.Label18} />
              </div>
            )}
            <Button
              variant={VariantsEnum.Text}
              size={SizesEnum.S}
              iconLeft={IconsEnum.CloseBold}
              onClick={handleClose}
            />
          </div>
          <div className={clsx(styles.body, bodyPadding && styles.bodyPadding)}>
            {!isSecondary && (
              <div className={styles.title}>
                {/* @ts-ignore */}
                <Label label={title} font={FontsEnum.Label30} linesCount={7} textAlign='center' />
              </div>
            )}
            <div>{body}</div>
            <div className={clsx(styles.footer)}>{actions}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
