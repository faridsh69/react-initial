import { ChangeEvent, useCallback } from 'react'
import { Textarea } from 'components/Textarea/Textarea'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const TextareaController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>, onChange: (value: string) => void) => {
      const value = e.target.value
      onChange(value)
      onChangeInput?.({ [name]: value })
    },
    [onChangeInput],
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error}>
            <Textarea
              name={name}
              value={value}
              onChange={e => handleChange(e, onChange)}
              onBlur={onBlur}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
