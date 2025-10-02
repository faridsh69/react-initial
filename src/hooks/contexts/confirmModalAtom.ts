import { atom } from 'jotai'

type ConfirmModalType = {
  isOpen: boolean
  label: string
  onConfirm: () => void
  onCancel?: () => void
  subLabel?: string
  src?: string
}

export const DEFAULT_CONFIRM_MODAL = {
  isOpen: false,
  label: 'Are you sure about this process?',
  subLabel: '',
  src: '',
  onConfirm: () => {},
  onCancel: () => {},
}

export const confirmModalAtom = atom<ConfirmModalType>(DEFAULT_CONFIRM_MODAL)
