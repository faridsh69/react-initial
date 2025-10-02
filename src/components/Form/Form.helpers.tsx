import { CheckboxController } from './Controllers/CheckboxController'
import { ChecklistController } from './Controllers/ChecklistController'
import { ChipsController } from './Controllers/ChipsController'
import { CustomController } from './Controllers/CustomComponentController'
import { DateController } from './Controllers/DateController'
import { GroupController } from './Controllers/GroupController'
import { RadioController } from './Controllers/RadioController'
import { RatingController } from './Controllers/RatingController'
import { SelectController } from './Controllers/SelectController'
import { TextareaController } from './Controllers/TextareaController'
import { TextController } from './Controllers/TextController'
import { ToggleButtonController } from './Controllers/ToggleButtonController'
import { ToggleController } from './Controllers/ToggleController'
import { UploaderController } from './Controllers/UploaderController'
import { InputComponentsEnum } from './Form.enums'

export const getInputController = (component?: InputComponentsEnum) => {
  const inputs = {
    [InputComponentsEnum.Text]: TextController,
    [InputComponentsEnum.Textarea]: TextareaController,
    [InputComponentsEnum.RadioList]: RadioController,
    [InputComponentsEnum.Checkbox]: CheckboxController,
    [InputComponentsEnum.Checklist]: ChecklistController,
    [InputComponentsEnum.Select]: SelectController,
    [InputComponentsEnum.Date]: DateController,
    [InputComponentsEnum.Toggle]: ToggleController,
    [InputComponentsEnum.ToggleButton]: ToggleButtonController,
    [InputComponentsEnum.Rating]: RatingController,
    [InputComponentsEnum.Uploader]: UploaderController,
    [InputComponentsEnum.Chips]: ChipsController,
    [InputComponentsEnum.Group]: GroupController,
    [InputComponentsEnum.Custom]: CustomController,
  }

  return component && inputs[component] ? inputs[component] : TextController
}

export const getCleanErrorMessage = (message: string) => {
  return message.replaceAll('>', '').replace(/\[\d+\]/g, '')
}
