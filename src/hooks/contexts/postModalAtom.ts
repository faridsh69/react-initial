import { atom } from 'jotai'

type PostModalType = { isOpen: boolean; text: string; imageUrls: string[]; postId?: string }

export const DEFAULT_POST_MODAL = {
  isOpen: false,
  postId: undefined,
  text: '',
  imageUrls: [],
}

export const postModalAtom = atom<PostModalType>(DEFAULT_POST_MODAL)
