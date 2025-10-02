import { SizesEnum } from 'enums/enums'

export type ToggleProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  title?: string
  label?: string
  size?: SizesEnum
  disabled?: boolean
  hasError?: boolean
  required?: boolean
  hint?: string
}
