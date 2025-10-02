import { Skelet } from 'components/Skelet/Skelet'
import { SkeletVariants } from 'components/Skelet/Skelet.enums'
import { SkeletProps } from 'components/Skelet/Skelet.types'

import styles from './Story.module.scss'

export const SkeletonStory = () => {
  const defaultProps = {
    variant: SkeletVariants.Rectangular,
    width: 300,
    height: 30,
  }
  const propsArray: SkeletProps[] = []

  for (const variantKey in SkeletVariants) {
    const variant = SkeletVariants[variantKey as keyof typeof SkeletVariants]
    propsArray.push({
      ...defaultProps,
      variant,
      width: variantKey === 'Circle' ? defaultProps.height : defaultProps.width,
    })
  }

  return (
    <div className={styles.story}>
      <h4>17) Skeleton</h4>
      <small>Should be used inside loader state of components</small>
      <code>{'<Skeleton width={200} height={300} />'}</code>

      <div className={styles.story}>
        {propsArray.map((propsItem, index) => {
          return (
            <div key={index}>
              {propsItem.variant}
              <br />
              <br />
              <Skelet {...propsItem} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
