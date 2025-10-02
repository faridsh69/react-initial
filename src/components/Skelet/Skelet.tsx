import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

import { SkeletVariants } from './Skelet.enums'
import { SkeletProps } from './Skelet.types'
import styles from './Skelet.module.scss'

export const Skelet = (props: SkeletProps) => {
  const { variant = SkeletVariants.Rectangular, width, height, count } = props

  const cssProps = { width, height, count }
  const array = [1, 2, 3]

  if (variant === SkeletVariants.Rectangular) {
    return <Skeleton {...cssProps} />
  }

  if (variant === SkeletVariants.Circle) {
    return <Skeleton circle {...cssProps} />
  }

  if (variant === SkeletVariants.Card) {
    return (
      <div className={styles.card} style={{ width }}>
        <Skeleton height={height} />
        <Skeleton />
        <Skeleton width='30%' />
      </div>
    )
  }

  if (variant === SkeletVariants.Cards) {
    return (
      <div className={styles.cards}>
        {array.map(index => {
          return (
            <div className={styles.card} key={index}>
              <Skeleton height={100} />
              <Skeleton />
              <Skeleton width='30%' />
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === SkeletVariants.List) {
    return (
      <div className={styles.list}>
        {array.map(index => {
          return (
            <div className={styles.listItem} key={index}>
              <Skeleton circle height={40} width={40} />
              <div className={styles.listText}>
                <Skeleton height={40} width='100%' />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === SkeletVariants.TextList) {
    return (
      <div className={styles.list}>
        {array.map(index => {
          return (
            <div className={styles.listItem} key={index}>
              <div className={styles.width100}>
                <Skeleton height={40} width='100%' />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === SkeletVariants.Table) {
    return (
      <div className={styles.table}>
        {array.map(index => {
          return (
            <div className={styles.tableRow} key={index}>
              <Skeleton width='100%' height='100%' borderRadius={10} />
              <div className={styles.tableCells}>
                <div className={styles.tableCell}>
                  <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
                </div>
                <div className={styles.tableCell}>
                  <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
                </div>
                <div className={styles.tableCell}>
                  <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === SkeletVariants.FilterBar) {
    return (
      <div className={styles.filterBar}>
        <div className={styles.filterCell}>
          <Skeleton width='100%' height='100%' borderRadius={10} />
        </div>
        <div className={styles.filterInputs}>
          <div className={styles.filterInputLong}>
            <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
          </div>
          <div className={styles.filterInputMedium}>
            <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
          </div>
          <div className={styles.seperator} />
          <div className={styles.filterInputSmall}>
            <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
          </div>
          <div className={styles.filterInputSmall}>
            <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
          </div>
          <div className={styles.filterInputSmall}>
            <Skeleton width='100%' height='100%' baseColor='#dbdbdb' />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.kanban}>
      {array.map(index => {
        return (
          <div className={styles.column} key={index}>
            <Skeleton height={200} />
          </div>
        )
      })}
    </div>
  )
}
