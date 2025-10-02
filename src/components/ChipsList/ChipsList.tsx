import { useCallback, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Chip } from 'components/Chip/Chip'
import { Label } from 'components/Label/Label'
import { DirectionsEnum, FontsEnum, SizesEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

import { ChipsListProps } from './ChipsList.types'
import styles from './ChipsList.module.scss'

export const ChipsList = (props: ChipsListProps) => {
  const {
    options = [],
    value: propsValue = [],
    onChange,
    size = SizesEnum.M,
    direction = DirectionsEnum.Horizontal,
    label,
    required,
    hasError,
    hint,
    disabled,
    background = false,
    width,
  } = props

  const [value, setValue] = useState<OptionValueType[]>(propsValue)

  useEffect(() => {
    setValue(prevValue => (propsValue === prevValue ? prevValue : propsValue))
  }, [propsValue])

  const onChangeHandler = useCallback(
    (val: OptionValueType) => {
      const newVal = value.includes(val) ? value?.filter?.(v => v !== val) : [...value, val]

      setValue(newVal || [])
      onChange?.(newVal || [])
    },
    [value, onChange],
  )

  return (
    <div className={styles.ChipsList} style={{ width }}>
      <Label
        label={label}
        font={FontsEnum.Label14}
        required={required}
        hasError={hasError}
        hint={hint}
        disabled={disabled}
      />
      <div
        className={clsx(
          styles.wrapper,
          styles[`size-${size}`],
          styles[direction],
          background && styles.background,
        )}
      >
        {options.map(option => {
          return (
            <div key={option.label} onClick={() => onChangeHandler(option.value)}>
              <Chip
                key={option.label}
                active={value?.includes?.(option.value)}
                size={size}
                label={option.label}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
