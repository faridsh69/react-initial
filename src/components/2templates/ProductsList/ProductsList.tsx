import { useEffect } from 'react'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { ProductCard } from 'components/ProductCard/ProductCard'
import { PRODUCTS_PER_PAGE } from 'constants/constants'
import { IconsEnum } from 'enums/enums'
import { filtersAtom } from 'hooks/contexts/filtersAtom'
import { usePaginateWithIntersection } from 'hooks/usePaginateWithIntersection'
import { useAtom } from 'jotai'
import { themeStyles } from 'scss/theme.styels'

import { ProductsListProps } from './ProductsList.types'
import { SkeletonProductsList } from './SkeletonProductsList'

export const ProductsList = (props: ProductsListProps) => {
  const { isLoading, isLoadingPagination, products } = props

  const { divLocatedAtBottomOfPageRef, page } = usePaginateWithIntersection(
    products.length,
    PRODUCTS_PER_PAGE,
  )
  const [, setFilters] = useAtom(filtersAtom)

  useEffect(() => {
    setFilters(p => ({ ...p, page: page }))
  }, [page])

  if (isLoading) {
    return <SkeletonProductsList />
  }

  if (!products.length) {
    return <DataNotFound label='No product found for your search.' icon={IconsEnum.EmptyProduct} />
  }

  const showPagination = isLoadingPagination || page * PRODUCTS_PER_PAGE === products.length

  return (
    <>
      <div className={themeStyles.row}>
        {products.map(product => (
          <div key={product.id} className={themeStyles.productsListCard}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {showPagination && (
        <div ref={divLocatedAtBottomOfPageRef}>
          <SkeletonProductsList />
        </div>
      )}
    </>
  )
}
