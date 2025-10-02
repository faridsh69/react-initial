import { ToggleButtons } from 'components/ToggleButtons/ToggleButtons'
import { DirectionsEnum, VariantsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ToggleButtonStory = () => {
  return (
    <div className={styles.story}>
      <h4>9) Toggle buttons </h4>
      <small>We have two varianst primary and secondary with options, value and onChange</small>
      <code>
        {
          '<ToggleButtons label="Toggle buttons" direction={DirectionsEnum.Horizontal} variant={VariantsEnum.Primary}  />'
        }
      </code>
      <div style={{ width: 300 }}>
        <ToggleButtons
          label='Toggle buttons'
          value={3}
          direction={DirectionsEnum.Horizontal}
          sameWidthOptions
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'twooooo' },
            { value: 3, label: 'three' },
          ]}
        />
      </div>
      <div style={{ width: 60 }}>
        <ToggleButtons
          label='Toggle buttons'
          variant={VariantsEnum.Secondary}
          value={3}
          direction={DirectionsEnum.Vertical}
          sameWidthOptions
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'two' },
            { value: 3, label: 'three' },
          ]}
        />
      </div>
    </div>
  )
}
