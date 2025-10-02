import { clsx } from 'clsx'
import { SizesEnum } from 'enums/enums'

import { LoaderProps } from './Loader.types'
import styles from './Loader.module.scss'

export const Loader = (props: LoaderProps) => {
  const {
    label = 'The page is currently loading.',
    subLabel = 'We appreciate your patience.',
    size = SizesEnum.M,
    isLoading = true,
  } = props

  if (!isLoading) return <></>

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.loader, styles[`size-${size}`])}></div>

      <div className={styles.texts}>
        <b className={styles.loadingText}>{label}</b>
        <p className={styles.loadingText}>{subLabel}</p>
      </div>
    </div>
  )
}
