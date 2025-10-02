import clsx from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { SizesEnum, VariantsEnum } from 'enums/enums'

import { ButtonProps } from './Button.types'
import styles from './Button.module.scss'

export const Button = (props: ButtonProps) => {
  const {
    label,
    iconLeft,
    iconRight,
    onClick,
    variant = VariantsEnum.Primary,
    size = SizesEnum.M,
    active = false,
    disabled = false,
    noBorderRadius = [],
    width,
    font,
    noHover = false,
  } = props

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        styles.button,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        active && styles[`active-${variant}`],
        disabled && styles.disabled,
        styles[`noBorderRadius-${noBorderRadius[0]}`],
        styles[`noBorderRadius-${noBorderRadius[1]}`],
        styles[`noBorderRadius-${noBorderRadius[2]}`],
        styles[`noBorderRadius-${noBorderRadius[3]}`],
        font && styles[`font-${font}`],
        noHover && styles.noHover,
      )}
      style={{ width }}
    >
      {iconLeft && <Icon icon={iconLeft} size={size} />}
      {label}
      {iconRight && <Icon icon={iconRight} size={size} />}
    </button>
  )
}
