import { Button } from 'components/Button/Button'
import { Chip } from 'components/Chip/Chip'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ProductCardProps } from 'components/ProductCard/ProductCard.types'
import { ProductImage } from 'components/ProductImage/ProductImage'
import { toastSuccess } from 'components/Toast/Toast'
import { CountriesEnum, FontsEnum, IconsEnum, SizesEnum } from 'enums/enums'

import styles from './ProductCardHorizontal.module.scss'

export const ProductCardHorizontal = (props: ProductCardProps) => {
  const { product } = props

  if (!product) return <></>

  const { src, label, vintage, litr, rate = 4.3, rateCount, country, tags = [] } = product

  const handleAddBasket = () => {
    toastSuccess({ title: 'Success', description: 'Product added to basket successfully.' })
  }

  return (
    <div className={styles.productCard}>
      <div className={styles.imageHolder}>
        <ProductImage src={src} width={25} height={84} />
      </div>
      <div className={styles.content}>
        <Label
          label={`${label} ${vintage}, ${litr}ml`}
          font={FontsEnum.Label16}
          linesCount={2}
          cursorPointer
        />
        <div className={styles.price}>
          {/* <Label label={`$${price}`} font={FontsEnum.Header16} cursorPointer /> */}
          <div className={styles.rate}>
            <Icon icon={IconsEnum.Star} size={SizesEnum.S} />
            <Label label={`${rate} (${rateCount || 13})`} font={FontsEnum.Label14} cursorPointer />
            <div className={styles.tags}>
              <Chip label={country} size={SizesEnum.S} country={CountriesEnum.Fr} noHover />
              {tags.map((tag, index) => (
                <Chip key={index} label={tag} size={SizesEnum.S} icon={IconsEnum.Grap} noHover />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button label='Buy now' size={SizesEnum.S} onClick={handleAddBasket} width={90} />
    </div>
  )
}
