import { AiSearch } from 'components/2templates/AiSearch/AiSearch'
import { MainSlider } from 'components/2templates/MainSlider/MainSlider'
import { NewsSlider } from 'components/2templates/NewsSlider/NewsSlider'
import { OccasionsSlider } from 'components/2templates/OccasionsSlider/OccasionsSlider'
import { Label } from 'components/Label/Label'
import { FontsEnum } from 'enums/enums'

export const HomePage = () => {
  return (
    <>
      <Label label='What ever you need from react project.' font={FontsEnum.Label40} />
      <AiSearch />
      <MainSlider />
      <OccasionsSlider />
      <NewsSlider />
    </>
  )
}
