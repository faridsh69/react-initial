import { ProductType } from 'types/types'

export type ProductsListProps = {
  isLoading: boolean
  isLoadingPagination: boolean
  products: ProductType[]
}
