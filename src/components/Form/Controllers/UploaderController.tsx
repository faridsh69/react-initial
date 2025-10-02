import { useCallback } from 'react'
import { FileUploader } from 'components/FileUploader/FileUploader'
import { Controller } from 'react-hook-form'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const UploaderController = (props: InputControllerProps) => {
  const { control, name, onChangeInput, ...rest } = props

  const handleChange = useCallback(
    (value: string[], onChange: (v: string[]) => void) => {
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
            <FileUploader
              value={value}
              onChange={value => handleChange(value, onChange)}
              {...rest}
            />
          </ErrorWrapper>
        )
      }}
    />
  )
}
