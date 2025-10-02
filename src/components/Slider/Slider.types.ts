import { FC } from 'react'

export type SliderProps = {
  label: string
  description?: string
  options: any[]
  SlideComponent: FC<any>
  SlideComponentProp: string
  count?: number
}
