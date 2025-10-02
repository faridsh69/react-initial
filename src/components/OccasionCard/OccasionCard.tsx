import { Button } from 'components/Button/Button'
import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum, VariantsEnum } from 'enums/enums'
import { getSliderCountBasedOnDevice } from 'scss/theme.helpers'

import { OccasionCardProps } from './OccasionCard.types'
import styles from './OccasionCard.module.scss'

export const OccasionCard = (props: OccasionCardProps) => {
  const { occiasion } = props

  const columns = getSliderCountBasedOnDevice()
  const width = window.innerWidth / columns

  return (
    <div className={styles.occiasionCard}>
      <Image src={occiasion.src} alt={occiasion.title} width={width} />
      <div className={styles.text}>
        <Label label={occiasion.title} color={ColorsEnum.White} font={FontsEnum.Label50} />
        <Button label='Shop Collection' variant={VariantsEnum.Secondary} />
      </div>
    </div>
  )
}
