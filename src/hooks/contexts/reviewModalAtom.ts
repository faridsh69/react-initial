import { atom } from 'jotai'

type ReviewModal = {
  isOpen: boolean
  reviewId?: string
  title: string
  description: string
  rate: number
  vintageYear: string
  imageUrls: string[]
  product?: {
    product_id: string
    text: string
    slug: string
    image_url: string
    product_color: string
    product_type: string
  }
}
export const DEFAULT_REVIEW_MODAL: ReviewModal = {
  isOpen: false,
  reviewId: undefined,
  title: '',
  description: '',
  rate: 0,
  vintageYear: '',
  imageUrls: [],
  product: undefined,
}

export const reviewModalAtom = atom<ReviewModal>(DEFAULT_REVIEW_MODAL)
