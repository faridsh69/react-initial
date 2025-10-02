import { useState } from 'react'
import { clsx } from 'clsx'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ZINDEXES } from 'constants/constants'
import { FontsEnum, SizesEnum, TextAlignEnum, VariantsEnum } from 'enums/enums'

import { InputOptions } from './InputOptions'
import { TextInputProps } from './TextInput.types'
import styles from './TextInput.module.scss'

export const TextInput = (props: TextInputProps) => {
  const {
    variant = VariantsEnum.Primary,
    value,
    onChange,
    label,
    size = SizesEnum.M,
    required = false,
    disabled = false,
    hasError = false,
    errorText,
    readOnly = false,
    width,
    hint,
    hintZIndex = ZINDEXES.tooltip,
    unit,
    icon,
    iconColor,
    withHandle = false,
    active = false,
    clearable = false,
    onClear,
    wrapperClassName,
    copyable = false,
    hideable = false,
    noBorderRadius = [],
    noBorderColors = [],
    textAlign = TextAlignEnum.Left,
    ...restOfProps
  } = props

  const showError = !!errorText || hasError
  const paddingLeft = icon

  const hasActionButton = (clearable && value) || copyable || hideable
  const hasRightIcon = unit || withHandle

  const singlePaddingRight = hasActionButton || hasRightIcon
  const doublePaddingRight = hasActionButton && hasRightIcon

  const [visible, setVisible] = useState(true)

  const isSecondary = variant === VariantsEnum.Secondary

  return (
    <div
      className={clsx(
        styles.TextInput,
        active && styles.active,
        showError && styles.showError,
        styles[`size-${size}`],
        wrapperClassName,
      )}
      style={{ width }}
    >
      <Label
        label={label}
        font={FontsEnum.Label14}
        required={required}
        hasError={showError}
        disabled={disabled}
        hint={hint}
        hintZIndex={hintZIndex}
        active={active}
        className={styles.label}
      />

      <div className={styles.wrapper}>
        <div className={clsx(styles.icon)}>
          <Icon icon={icon} size={size} style={{ color: iconColor }} />
        </div>
        <input
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
          className={clsx(
            styles.input,
            readOnly && styles.readOnly,
            textAlign && styles[`textAlign-${textAlign}`],
            isSecondary && styles.secondary,
            paddingLeft && styles.paddingLeft,
            singlePaddingRight && styles.singlePaddingRight,
            doublePaddingRight && styles.doublePaddingRight,
            !visible && styles.invisible,
            styles[`noBorderRadius-${noBorderRadius[0]}`],
            styles[`noBorderRadius-${noBorderRadius[1]}`],
            styles[`noBorderRadius-${noBorderRadius[2]}`],
            styles[`noBorderRadius-${noBorderRadius[3]}`],
            styles[`noBorderColors-${noBorderColors[0]}`],
            styles[`noBorderColors-${noBorderColors[1]}`],
            styles[`noBorderColors-${noBorderColors[2]}`],
            styles[`noBorderColors-${noBorderColors[3]}`],
          )}
          {...restOfProps}
        />
        <InputOptions
          size={size}
          value={value}
          unit={unit}
          withHandle={withHandle}
          clearable={clearable}
          onChange={onChange}
          copyable={copyable}
          hideable={hideable}
          active={active}
          disabled={disabled}
          visible={visible}
          setVisible={setVisible}
          onClear={onClear}
        />
      </div>
      {showError && <Label label={errorText} hasError font={FontsEnum.Text12} />}
    </div>
  )
}
