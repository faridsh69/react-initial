import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { FontsEnum, IconsEnum } from 'enums/enums'
import { renderPriceFormat } from 'helpers/calculationHelpers'

import { PriceCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const PriceCell = (props: PriceCellProps) => {
  const {
    label = 0,
    subLabel = '€',
    bold = false,
    icon = IconsEnum.Post,
    font: propsFont,
    color,
    textAlign = 'right',
  } = props

  const font = propsFont ? propsFont : bold ? FontsEnum.Header14 : FontsEnum.Text12

  return (
    <div className={clsx(styles.priceCell)} style={{ textAlign }}>
      <Icon icon={icon} className={styles.cellIcon} />
      <Label label={renderPriceFormat(label)} font={font} color={color} />
      <Label label={subLabel} disabled color={color} />
    </div>
  )
}
