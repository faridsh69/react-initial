import { OccasionCard } from 'components/OccasionCard/OccasionCard'
import { Slider } from 'components/Slider/Slider'
import { IMAGES } from 'constants/constants'
import { themeStyles } from 'scss/theme.styels'

export const OccasionsSlider = () => {
  const occiasions = [
    {
      id: 1,
      title: 'Anniversary',
      src: IMAGES[0],
    },
    {
      id: 2,
      title: 'Birthday',
      src: IMAGES[1],
    },
    {
      id: 3,
      title: 'Graduation',
      src: IMAGES[2],
    },
    {
      id: 4,
      title: 'Graduation2',
      src: IMAGES[0],
    },
    {
      id: 4,
      title: 'Graduation2',
      src: IMAGES[1],
    },
  ]

  return (
    <div className={themeStyles.fluidContainer}>
      <Slider
        label=' Occasions'
        description=' Celebrate with the right bottle to make every moment special.'
        options={occiasions}
        SlideComponent={OccasionCard}
        SlideComponentProp='occiasion'
      />
    </div>
  )
}
