import { Footer } from 'components/2templates/Footer/Footer'
import { MainSlider } from 'components/2templates/MainSlider/MainSlider'
import { NewsSlider } from 'components/2templates/NewsSlider/NewsSlider'
import { OccasionsSlider } from 'components/2templates/OccasionsSlider/OccasionsSlider'

import { AccordionStory } from './AccordionStory'
import { AvatarsStory } from './AvatarsStory'
import { BreadcrumbStory } from './BreadcrumbStory'
import { ButtonStory } from './Buttons.story'
import { CheckListStory } from './CheckList.story'
import { ChipStory } from './Chip.story'
import { ContextMenuStory } from './ContextMenuStory'
import { DataNotFoundStory } from './DataNotFound.story'
import { FileUploaderStory } from './FileUploaderStory'
import { FormStory } from './Form.story'
import { IconsStory } from './Icons.story'
import { LabelStory } from './Label.story'
import { LoaderStory } from './Loader.story'
import { ModalStory } from './Modal.story'
import { NavbarStory } from './NavbarStory'
import { PopoverStory } from './Popover.story'
import { ProductCardStory } from './ProductCardStory'
import { RadioListStory } from './RadioList.story'
import { RatingStory } from './RatingStory'
import { SelectStory } from './Select.story'
import { SkeletonStory } from './SkeletonStory'
import { TabItemsStory } from './TabItems.story'
import { TextareaStory } from './Textarea.story'
import { TextInputStory } from './TextInput.story'
import { ToastStory } from './ToastStory'
import { ToggleButtonStory } from './ToggleButton.story'
import { ToggleStory } from './ToggleStory'
import styles from './Story.module.scss'

export const Uikit = () => {
  return (
    <div className={styles.story}>
      <h1>DESIGN SYSTEM</h1>
      <IconsStory />
      <LabelStory />
      <ButtonStory />
      <CheckListStory />
      <RadioListStory />
      <TextInputStory />
      <TextareaStory />
      <ModalStory />
      <ToggleButtonStory />
      <SelectStory />
      <PopoverStory />
      <ContextMenuStory />
      <TabItemsStory />
      <BreadcrumbStory />
      <ToastStory />
      <AvatarsStory />
      <SkeletonStory />
      <ChipStory />
      <RatingStory />
      <AccordionStory />
      <FileUploaderStory />
      <MainSlider />
      <ToggleStory />
      <ProductCardStory />
      <DataNotFoundStory />
      <LoaderStory />
      <FormStory />
      <NavbarStory />
      <OccasionsSlider />
      <NewsSlider />
      <Footer />
    </div>
  )
}
