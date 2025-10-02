import { Chip } from 'components/Chip/Chip'
import { IconsEnum, SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ChipStory = () => {
  return (
    <div className={styles.story}>
      <h4>18) Chip</h4>

      <small>We have two size s, m, also can have onClose, and icon beside label</small>
      <code>{'<Chip label="chip" size={SizesEnum.M}  />'}</code>

      <div style={{ gap: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {[SizesEnum.M, SizesEnum.S].map(size => (
          <Chip label='Red' size={size} key={size} />
        ))}
      </div>
      <div style={{ gap: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {[SizesEnum.M, SizesEnum.S].map(size => (
          <Chip label='with icon and close' size={size} key={size} icon={IconsEnum.ArrowRight} />
        ))}
      </div>
    </div>
  )
}
