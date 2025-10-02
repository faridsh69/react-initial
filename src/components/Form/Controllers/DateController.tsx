import { useCallback } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const DateController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, ...rest } = props

  const handleChange = useCallback(
    (date: string, onChange: (value: string) => void) => {
      onChange(date)
      onChangeInput?.({ [name]: date })
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
            <TextInput
              value={value}
              onChange={(date: any) => handleChange(date, onChange)}
              hasError={!!error}
              {...rest}
              type='date'
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
