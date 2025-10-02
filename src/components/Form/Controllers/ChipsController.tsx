import { useCallback } from 'react'
import { ChipsList } from 'components/ChipsList/ChipsList'
import { Controller } from 'react-hook-form'
import { OptionValueType } from 'types/types'

import { ErrorWrapper } from '../ErrorWrapper'
import { InputControllerProps } from '../Form.types'

export const ChipsController = (props: InputControllerProps) => {
  const { control, onChangeInput, name, options, ...rest } = props

  const handleChange = useCallback(
    (checkeds: OptionValueType[], onChange: (checkeds: OptionValueType[]) => void) => {
      onChange(checkeds)
      onChangeInput?.({ [name]: checkeds })
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
            <ChipsList
              value={value || []}
              onChange={checkeds => handleChange(checkeds, onChange)}
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
