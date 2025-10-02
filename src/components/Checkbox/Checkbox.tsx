import { useState } from 'react'
import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { IconsEnum, SizesEnum } from 'enums/enums'
import { getUniqueId } from 'helpers/helpers'

import { CheckboxProps } from './Checkbox.types'
import styles from './Checkbox.module.scss'

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked,
    onChange,
    label,
    disabled = false,
    required = false,
    hasError = false,
    hint = '',
    size = SizesEnum.M,
  } = props

  const [htmlFor] = useState(getUniqueId())

  return (
    <label className={clsx(styles.checkbox, styles[`size-${size}`])}>
      <input type='checkbox' checked={!!checked} onChange={e => onChange?.(e)} id={htmlFor} />
      <span className={styles.box}></span>
      <Icon icon={IconsEnum.Check} className={styles.mark} />
      <Label
        label={label}
        required={required}
        hasError={hasError}
        disabled={disabled}
        hint={hint}
        htmlFor={htmlFor}
        cursorPointer
      />
    </label>
  )
}
