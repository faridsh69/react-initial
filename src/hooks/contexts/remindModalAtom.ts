import { atom } from 'jotai'

type RemindModalType = {
  isOpen: boolean
  email: string
}

export const DEFAULT_REMIND_MODAL = {
  isOpen: false,
  email: '',
}

export const remindModalAtom = atom<RemindModalType>(DEFAULT_REMIND_MODAL)
