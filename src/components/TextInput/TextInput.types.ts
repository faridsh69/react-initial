import { ChangeEvent, ReactNode } from 'react'
import { IconsEnum, SidesEnum, SizesEnum, TextAlignEnum, VariantsEnum } from 'enums/enums'

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: VariantsEnum
  label?: string
  size?: SizesEnum
  required?: boolean
  disabled?: boolean
  hasError?: boolean
  errorText?: string
  readOnly?: boolean
  width?: string | number
  hint?: string
  hintZIndex?: number
  unit?: ReactNode | string
  icon?: IconsEnum
  iconColor?: string
  withHandle?: boolean
  active?: boolean
  clearable?: boolean
  onClear?: () => void
  copyable?: boolean
  hideable?: boolean
  wrapperClassName?: string
  noBorderRadius?: SidesEnum[]
  noBorderColors?: SidesEnum[]
  textAlign?: TextAlignEnum
}

export type InputOptionsProps = {
  size?: SizesEnum
  value?: string | number | readonly string[]
  unit?: string | ReactNode
  withHandle?: boolean
  clearable?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  copyable?: boolean
  hideable?: boolean
  active?: boolean
  disabled?: boolean
  visible?: boolean
  setVisible: (visible: boolean) => void
  onClear?: () => void
}
