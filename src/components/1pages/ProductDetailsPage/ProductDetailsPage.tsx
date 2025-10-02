import { useState } from 'react'
import { APP_PATHS } from 'components/0app/constants'
import { ProductDetailAccordions } from 'components/2templates/ProductDetailAccordions/ProductDetailAccordions'
import { BreadCrumb } from 'components/BreadCrumb/BreadCrumb'
import { Button } from 'components/Button/Button'
import { Flag } from 'components/Flag/Flag'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ProductImage } from 'components/ProductImage/ProductImage'
import { Select } from 'components/Select/Select'
import { toastSuccess } from 'components/Toast/Toast'
import { PRODUCTS } from 'constants/constants'
import { CountriesEnum, FontsEnum, IconsEnum, VariantsEnum } from 'enums/enums'
import { useChangePath } from 'hooks/useChangePath'
import { themeStyles } from 'scss/theme.styels'
import { OptionValueType } from 'types/types'

import styles from './ProductDetailsPage.module.scss'

export const ProductDetailsPage = () => {
  const { navigate } = useChangePath()

  const [year, setYear] = useState<OptionValueType>('2011')
  const [volumn, setVolumn] = useState<OptionValueType>('750 ml')

  const handleAddBasket = () => {
    toastSuccess({ title: 'Success', description: 'Product added to basket successfully.' })
  }

  const product = PRODUCTS[0]

  return (
    <>
      <div className={themeStyles.container}>
        <div className={themeStyles.row}>
          <div className={themeStyles.col12}>
            <BreadCrumb
              options={[
                {
                  label: 'Home',
                  path: APP_PATHS.home,
                },
                {
                  label: product.category,
                  path: APP_PATHS.home,
                },
                {
                  label: product.label,
                  path: APP_PATHS.products,
                },
              ]}
            />
          </div>
        </div>
        <div className={themeStyles.row}>
          <div className={themeStyles.productDetailsImage}>
            <ProductImage src={product.src} alt={product.label} width={105} />
          </div>
          <div className={themeStyles.productDetailsText}>
            <div className={styles.productDetailsPage}>
              <Button
                variant={VariantsEnum.Text}
                label='Pahlmeyer'
                onClick={() => {
                  navigate(APP_PATHS.products)
                }}
              />
              <Label font={FontsEnum.Label30} label={product.label} linesCount={2} />

              <div className={themeStyles.flexRow}>
                <Flag country={product.flag || CountriesEnum.Us} width={30} />
                <Label label={product.country} />
                <Label label={product.region} />
                <Label label={product.category} />
              </div>
              <div className={themeStyles.flexRow}>
                <Icon icon={IconsEnum.Verified} />
                <Label label={`${product.rate} Expert Rating`} />
                <Icon icon={IconsEnum.Star} />
              </div>
              <Label label={`$${product.price}`} font={FontsEnum.Label30} />

              <div className={themeStyles.row}>
                <div className={themeStyles.col6}>
                  <Select
                    options={[]}
                    multiple={false}
                    value={year}
                    onChange={v => setYear(v)}
                    isSearchable={false}
                  />
                </div>
                <div className={themeStyles.col6}>
                  <Select
                    options={[]}
                    multiple={false}
                    value={volumn}
                    onChange={setVolumn}
                    isSearchable={false}
                  />
                </div>
              </div>
              {product.price && (
                <Button
                  iconLeft={IconsEnum.Plus}
                  label='Add to cart'
                  onClick={handleAddBasket}
                  width={'100%'}
                />
              )}
              {!product.price && <Button label='Not available' disabled />}
              <br />
              <ProductDetailAccordions />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
