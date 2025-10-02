import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum, IconsEnum } from 'enums/enums'

import { ProductImageProps } from './ProductImage.types'
import styles from './ProductImage.module.scss'

export const ProductImage = (props: ProductImageProps) => {
  const { src, alt, width, height } = props

  const showImageNotAvailabelText = height && height > 200

  if (!src || src === 'None') {
    return (
      <div className={styles.imageHolder}>
        <Icon icon={IconsEnum.EmptyProduct} style={{ height }} />
        {showImageNotAvailabelText && (
          <div className={styles.emptyProductText}>
            <Label
              label='Image is unavailable'
              font={FontsEnum.Label16}
              color={ColorsEnum.Grey700}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={styles.imageHolder}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  )
}
