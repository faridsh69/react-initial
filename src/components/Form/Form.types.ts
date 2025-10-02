import {
  ChangeEventHandler,
  FC,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react'
import { RatingProps } from 'components/Rating/Rating.types'
import { IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { Control, FieldError } from 'react-hook-form'
import { OptionValueType } from 'types/types'
import * as yup from 'yup'

import { InputComponentsEnum } from './Form.enums'

type CommonInputProps = {
  name: string
  label?: string
  columns?: number
  unit?: string
  hint?: string
  variant?: VariantsEnum
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
type DatepickerProps = InputHTMLAttributes<HTMLInputElement>

export type CheckboxProps = {
  checked?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
}

export type OptionType = {
  label: string
  value: OptionValueType
}

export type CheckListProps = {
  options?: OptionType[]
  value?: OptionValueType[]
  onChange?: (value: OptionValueType[]) => void
  size?: SizesEnum
}

export type RadioListProps = {
  options?: OptionType[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
}

export type ToggleButtonsProps = {
  options?: OptionType[]
  value?: OptionValueType
  onChange?: (value: OptionValueType) => void
}

export type SelectProps = {
  options?: OptionType[]
  value?: OptionType[]
  multiple?: boolean
  onChange?: (value: OptionType[]) => void
  handleChangeSearch?: (query: string) => void
  isLoading?: boolean
  placeholder?: string
}

type GroupProps = {
  inputs: FormInput[]
  noItemsLabel?: string
  disabled?: boolean
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  fieldName?: string
  checkPathInBreadcrumb?: boolean
  breadCrumbOptions?: any
  arrowButtonPath?: string
}

type CustomProps = {
  ControllerComponent: FC<InputControllerProps>
}

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export type FormInput =
  | ({ component: InputComponentsEnum.Text } & CommonInputProps &
      TextInputProps & { icon?: IconsEnum; debounceTime?: number; size?: SizesEnum })
  | ({ component: InputComponentsEnum.Checkbox } & CommonInputProps & CheckboxProps)
  | ({ component: InputComponentsEnum.Checklist } & CommonInputProps & CheckListProps)
  | ({ component: InputComponentsEnum.Chips } & CommonInputProps & CheckListProps)
  | ({ component: InputComponentsEnum.RadioList } & CommonInputProps & RadioListProps)
  | ({ component: InputComponentsEnum.Toggle } & CommonInputProps)
  | ({ component: InputComponentsEnum.ToggleButton } & CommonInputProps & ToggleButtonsProps)
  | ({ component: InputComponentsEnum.Textarea } & CommonInputProps & TextareaProps)
  | ({ component: InputComponentsEnum.Select } & CommonInputProps & SelectProps)
  | ({ component: InputComponentsEnum.Date } & CommonInputProps & DatepickerProps)
  | ({ component: InputComponentsEnum.Rating } & CommonInputProps & RatingProps)
  | ({ component: InputComponentsEnum.Uploader } & CommonInputProps)
  | ({ component: InputComponentsEnum.Group } & CommonInputProps & GroupProps)
  | ({ component: InputComponentsEnum.Custom } & CommonInputProps & CustomProps)

export type FormSchemaType = yup.ObjectSchema<any>

export type FormProps = {
  inputs: FormInput[]
  values?: any
  schema?: FormSchemaType
  onChangeInput?: (formData: any, changedInput: object) => void
  setFormIsValid?: (isValid: boolean) => void
}

export type inputWrapperProps = {
  children: ReactNode
  error?: FieldError
}

export type InputControllerProps = {
  control: Control<any>
  name: string
  onChangeInput?: (changedInput: object) => void
  label?: string
  options?: OptionType[]
  multiple?: boolean
  inputs?: FormInput[]
  disabled?: boolean
  ControllerComponent?: FC<InputControllerProps>
  hiddenInputLabelsBasedOnIndex?: (index: number) => string[]
  noItemsLabel?: string
  errors?: any
  fieldName?: string
  checkPathInBreadcrumb?: boolean
  arrowButtonPath?: string
  breadCrumbOptions?: any
  handleChangeSearch?: (query: string) => void
  debounceTime?: number
}
