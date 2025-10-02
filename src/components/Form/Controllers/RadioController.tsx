import { useCallback } from 'react'
import { RadioList } from 'components/RadioList/RadioList'
import { Controller } from 'react-hook-form'
import { OptionValueType } from 'types/types'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const RadioController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  const handleChange = useCallback(
    (value: OptionValueType, onChange: (value: OptionValueType) => void) => {
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <RadioList
              value={value}
              onChange={value => handleChange(value, onChange)}
              options={options}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
