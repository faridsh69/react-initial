import { useCallback } from 'react'
import { Checkbox } from 'components/Checkbox/Checkbox'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const CheckboxController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, ...rest } = props

  const handleChange = useCallback(
    (checked: boolean, onChange: (checkeds: boolean) => void) => {
      onChange(checked)
      onChangeInput?.({ [name]: checked })
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
            <Checkbox
              checked={!!value}
              onChange={e => handleChange(e.target.checked, onChange)}
              hasError={!!error}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
