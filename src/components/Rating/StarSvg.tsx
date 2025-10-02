import { SizesEnum } from 'enums/enums'

import { StarSvgProps } from './Rating.types'
import styles from './Rating.module.scss'

export const StarSvg = (props: StarSvgProps) => {
  const { fill, disabled, size } = props

  return (
    <svg
      width={size === SizesEnum.S ? 20 : 36}
      height={size === SizesEnum.S ? 20 : 36}
      viewBox='0 0 24 25'
      className={fill ? (disabled ? styles.disabledFill : styles.fill) : styles.notFilled}
    >
      <path
        d='M12 1.58631L14.9489 8.78623L15.0631 9.06511L15.363 9.09437L22.8415 9.82367L17.1807 15.0525L16.9714 15.2459L17.0311 15.5246L18.6802 23.218L12.2648 19.2126L12 19.0473L11.7352 19.2126L5.31983 23.218L6.9689 15.5246L7.02863 15.2459L6.81926 15.0525L1.15846 9.82367L8.63698 9.09437L8.93693 9.06511L9.05115 8.78623L12 1.58631Z'
        stroke='var(--grey-500)'
      />
    </svg>
  )
}
