import { useState } from 'react'
import { Rating } from 'components/Rating/Rating'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const RatingStory = () => {
  const [value, setValue] = useState(2)
  const props = {
    label: 'Label',
    disabled: false,
    size: SizesEnum.M,
    hasError: false,
    hint: '',
    required: false,
  }
  return (
    <div className={styles.story}>
      <h4>19) Rating</h4>

      <small>We have Rating as a 5 star component for adding review on a product</small>
      <code>{'<Rating />'}</code>

      <div style={{ gap: 10, display: 'flex', flexDirection: 'column' }}>
        <Rating {...props} label='Rating' value={value} onChange={setValue} size={SizesEnum.L} />
        <Rating
          {...props}
          label='Disabled'
          value={value}
          onChange={setValue}
          disabled
          size={SizesEnum.M}
        />
        <Rating {...props} label='Small' value={value} onChange={setValue} size={SizesEnum.S} />
      </div>
    </div>
  )
}
