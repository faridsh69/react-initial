import { APP_PATHS } from 'components/0app/constants'
import { ProductsList } from 'components/2templates/ProductsList/ProductsList'
import { BreadCrumb } from 'components/BreadCrumb/BreadCrumb'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'
import { filtersAtom } from 'hooks/contexts/filtersAtom'
import { useAtom } from 'jotai'
import { themeStyles } from 'scss/theme.styels'
import { useCrudDiscourseReviews } from 'services/hooks/useCrudDiscourse'

export const ProductsListPage = () => {
  const pageTitle = 'French Ui kit under $20'

  const [filters] = useAtom(filtersAtom)

  const { list, isLoading } = useCrudDiscourseReviews(filters)

  return (
    <div className={themeStyles.container}>
      <BreadCrumb
        options={[
          {
            label: 'Home',
            path: APP_PATHS.home,
          },
          {
            label: pageTitle,
            path: APP_PATHS.products,
          },
        ]}
      />
      <Label label={pageTitle} font={FontsEnum.Label30} />
      <ProductsList isLoading={isLoading} isLoadingPagination={isLoading} products={list} />
    </div>
  )
}
