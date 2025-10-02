import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { Loader } from 'components/Loader/Loader'
import { FontsEnum, SizesEnum } from 'enums/enums'

import { DataNotFoundProps } from './DataNotFound.types'
import styles from './DataNotFound.module.scss'

export const DataNotFound = (props: DataNotFoundProps) => {
  const { isLoading, label: propsLabel, icon, image, className } = props

  const finalLabel = propsLabel || 'No results found!'
  const label = isLoading ? 'Searching...' : finalLabel

  return (
    <div className={clsx(styles.wrapper, className)}>
      {isLoading && <Loader label='' subLabel='' size={SizesEnum.L} />}
      {!isLoading && !image && <Icon icon={icon} className={styles.icon} />}
      {!isLoading && image && <Image src={image} />}
      <Label label={label} font={FontsEnum.Text14} disabled />
    </div>
  )
}
