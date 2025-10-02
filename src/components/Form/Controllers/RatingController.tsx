import { useCallback } from 'react'
import { Rating } from 'components/Rating/Rating'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const RatingController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: number, onChange: (v: number) => void) => {
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
            <Rating value={value} onChange={value => handleChange(value, onChange)} {...rest} />
          </ErrorWrapper>
        )
      }}
    />
  )
}
