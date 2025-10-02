import { atom } from 'jotai'

export const DEFAULT_IMAGE_MODAL = { isOpen: false, src: '', alt: 'Image' }

export const imageModalAtom = atom(DEFAULT_IMAGE_MODAL)
