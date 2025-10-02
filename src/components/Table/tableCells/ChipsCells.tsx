import { Chip } from 'components/Chip/Chip'
import { SizesEnum } from 'enums/enums'

import { ChipsCellProps } from '../Table.types'
import styles from '../Table.module.scss'

export const ChipsCell = (props: ChipsCellProps) => {
  const { chips = [] } = props

  return (
    <div className={styles.tdCell}>
      {chips.map(chip => {
        const { size = SizesEnum.S } = chip
        return <Chip key={chip.label} label={chip.label} size={size} />
      })}
    </div>
  )
}
