import { Image } from 'components/Image/Image'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

import { FoodCardProps } from './FoodCard.types'
import styles from './FoodCard.module.scss'

export const FoodCard = (props: FoodCardProps) => {
  const { food } = props

  return (
    <div className={styles.foodCard}>
      <Image src={food.src} alt={food.title} width={290} />
      <Label label={food.title} font={FontsEnum.Label20} linesCount={2} />
    </div>
  )
}
