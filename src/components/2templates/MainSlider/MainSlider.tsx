import { MainSliderSwipper } from 'components/MainSliderSwipper/MainSliderSwipper'
import { IMAGES } from 'constants/constants'

export const MainSlider = () => {
  const text = 'React sample codebase'
  const productCards = [
    {
      label: text,
      src: IMAGES[0],
    },
    {
      label: text,
      src: IMAGES[1],
    },
    {
      label: text,
      src: IMAGES[2],
    },
  ]

  return <MainSliderSwipper options={[...productCards, ...productCards, ...productCards]} />
}
