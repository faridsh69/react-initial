import { useState } from 'react'
import { Toggle } from 'components/Toggle/Toggle'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const ToggleStory = () => {
  const [checked, onChange] = useState(false)
  const props = {
    title: undefined,
    label: 'Toggle label',
    checked,
    onChange,
    disabled: false,
    size: SizesEnum.M,
    hasError: false,
    hint: '',
    required: false,
  }

  return (
    <div className={styles.story}>
      <h4>23) Toggle</h4>

      <small>Toggle or switch to act in a case we have only two options like Yes/No</small>
      <code>{'<Toggle label="chip" size={SizesEnum.M}  />'}</code>

      <div>
        <Toggle {...props} />
      </div>
    </div>
  )
}
