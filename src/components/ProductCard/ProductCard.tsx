import { APP_PATHS } from 'components/0app/constants'
import { Button } from 'components/Button/Button'
import { Chip } from 'components/Chip/Chip'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ProductImage } from 'components/ProductImage/ProductImage'
import { toastSuccess } from 'components/Toast/Toast'
import { FontsEnum, IconsEnum, SizesEnum } from 'enums/enums'
import { mappingDataCountryNameToFlag } from 'helpers/mappingDataHelpers'
import { useChangePath } from 'hooks/useChangePath'

import { ProductCardProps } from './ProductCard.types'
import styles from './ProductCard.module.scss'

export const ProductCard = (props: ProductCardProps) => {
  const { product } = props

  const { navigate } = useChangePath()
  if (!product) return <></>

  const { src, label, price, vintage, litr, rate, rateCount, country, tags = [] } = product

  const handleAddBasket = () => {
    toastSuccess({ title: 'Success', description: 'Product added to basket successfully.' })
  }

  const handleChangePath = () => {
    navigate(APP_PATHS.productDetails.replace(':productId', '' + product.label))
  }

  return (
    <div className={styles.productCard} onClick={handleChangePath}>
      <ProductImage src={src} height={240} alt={label} />
      <Label
        label={`${label} ${vintage}${litr ? ', ' + litr + 'ml' : ''}`}
        font={FontsEnum.Label16}
        linesCount={2}
        cursorPointer
      />
      <div className={styles.price}>
        {price && <Label label={`$${price}`} font={FontsEnum.Header16} cursorPointer />}
        <div className={styles.rate}>
          <Icon icon={IconsEnum.Star} size={SizesEnum.S} />
          <Label label={`${rate} (${rateCount})`} font={FontsEnum.Label14} cursorPointer />
        </div>
      </div>
      <div className={styles.tags}>
        <Chip
          label={country}
          size={SizesEnum.S}
          country={mappingDataCountryNameToFlag(country)}
          noHover
        />
        {tags.map((tag: any) => (
          <Chip key={tag} label={tag} size={SizesEnum.S} icon={IconsEnum.Grap} noHover />
        ))}
      </div>
      {price && (
        <Button
          iconLeft={IconsEnum.Plus}
          label='Add to cart'
          size={SizesEnum.S}
          onClick={handleAddBasket}
        />
      )}
      {!price && <Button label='Not available' size={SizesEnum.S} disabled />}
    </div>
  )
}
