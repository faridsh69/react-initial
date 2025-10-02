import { Skelet } from 'components/Skelet/Skelet'
import { SkeletVariants } from 'components/Skelet/Skelet.enums'
import { getSliderCountBasedOnDevice } from 'scss/theme.helpers'

import styles from './ProductsList.module.scss'

export const SkeletonProductsList = (props: { count?: number }) => {
  const { count = getSliderCountBasedOnDevice() } = props

  return (
    <div className={styles.productsListSkeleton}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Skelet key={index} variant={SkeletVariants.Card} width='100%' height={300} />
        ))}
    </div>
  )
}
