import { clsx } from 'clsx'
import { Label } from 'components/Label/Label'
import { FontsEnum, SizesEnum } from 'enums/enums'

import { ToggleProps } from './Toggle.types'
import styles from './Toggle.module.scss'

export const Toggle = (props: ToggleProps) => {
  const {
    label,
    onChange,
    checked = false,
    disabled = false,
    size = SizesEnum.S,
    required,
    hasError,
    hint,
  } = props

  return (
    <div className={clsx(styles.wrapper, styles[`size-${size}`])}>
      <Label
        label={label}
        required={required}
        hasError={hasError}
        disabled={disabled}
        hint={hint}
        font={FontsEnum.Label14}
      />
      <div
        className={clsx(checked ? styles.on : '', styles.switch)}
        onClick={() => onChange?.(!checked)}
      >
        <div className={styles.knob}>{checked && <div className={styles.dot} />}</div>
      </div>
    </div>
  )
}
