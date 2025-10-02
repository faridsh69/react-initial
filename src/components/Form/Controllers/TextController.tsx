import { ChangeEvent, useCallback } from 'react'
import { TextInput } from 'components/TextInput/TextInput'
import { useDebounceMethod } from 'hooks/useDebounceMethod'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const TextController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, debounceTime, ...rest } = props

  const debouncedChangeInput = useDebounceMethod(onChangeInput, debounceTime)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, onChange: (val: string | number) => void) => {
      const value = e.target.value
      onChange(value)
      debouncedChangeInput?.({ [name]: value })
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
            <TextInput
              value={value || ''}
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
