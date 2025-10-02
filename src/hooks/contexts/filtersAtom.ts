import { PRODUCTS_PER_PAGE } from 'constants/constants'
import { atom } from 'jotai'

export type filtersAtomType = {
  isOpen: boolean
  page: number
  perPage: number
  query: string
}

export const DEFAULT_FILTERS: filtersAtomType = {
  isOpen: false,
  page: 1,
  perPage: PRODUCTS_PER_PAGE,
  query: 'small bag',
}

export const filtersAtom = atom<filtersAtomType>(DEFAULT_FILTERS)
