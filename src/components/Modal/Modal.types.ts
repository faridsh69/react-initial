import { ReactNode } from 'react'
import { ButtonProps } from 'components/Button/Button.types'
import { VariantsEnum } from 'enums/enums'

export type ModalProps = {
  title?: string | ReactNode
  body?: ReactNode
  actions?: ReactNode
  background?: boolean
  isOpen?: boolean
  setIsOpen?: (isOpen: boolean) => void
  zIndex?: number
  overlayZIndex?: number
  bodyPadding?: boolean
  width?: string | number
  closeOnClickOutside?: boolean
  variant?: VariantsEnum
}

export type MainLayerProps = {
  title?: string
  body?: ReactNode
  actions: ButtonProps[]
  handleCloseModal: () => void
  bodyPadding?: boolean
  hideHeader?: boolean
  actionsCenter?: boolean
}
