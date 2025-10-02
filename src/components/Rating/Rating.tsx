import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { SizesEnum } from 'enums/enums'

import { RatingProps } from './Rating.types'
import { StarSvg } from './StarSvg'
import styles from './Rating.module.scss'

export const Rating = (props: RatingProps) => {
  const {
    label,
    value = 0,
    onChange,
    disabled = false,
    size = SizesEnum.M,
    required,
    hasError,
    hint,
    noHover = false,
  } = props

  return (
    <div className={clsx(styles.wrapper, noHover && styles.noHover, styles[`size-${size}`])}>
      <Label
        label={label}
        required={required}
        hasError={hasError}
        hint={hint}
        disabled={disabled}
      />
      {disabled && <div className={styles.disabled} />}
      <div className={styles.stars}>
        {[5, 4, 3, 2, 1].map(star => {
          return (
            <div
              className={styles.star}
              key={star}
              onClick={!disabled ? () => onChange?.(star) : undefined}
            >
              <StarSvg size={size} fill={value >= star} disabled={disabled} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
