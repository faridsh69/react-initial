import { FontsEnum, IconsEnum, SidesEnum, SizesEnum, VariantsEnum } from 'enums/enums'

export type ButtonProps = {
  type?: string
  label?: string
  variant?: VariantsEnum
  size?: SizesEnum
  active?: boolean
  disabled?: boolean
  iconLeft?: IconsEnum
  iconRight?: IconsEnum
  onClick?: () => void
  noBorderRadius?: SidesEnum[]
  width?: string | number
  font?: FontsEnum
  noHover?: boolean
}
