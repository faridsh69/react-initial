import { useState } from 'react'
import { Textarea } from 'components/Textarea/Textarea'

import styles from './Story.module.scss'

export const TextareaStory = () => {
  const [value, setValue] = useState('Value')

  const onChange = (e: any) => setValue(e.target.value)

  const props = {
    value,
    onChange,
    min: 5,
    max: 100,
    width: 400,
    rows: 7,
    label: 'Textarea',
    placeholder: 'Textarea',
  }

  return (
    <div className={styles.story}>
      <h4>7) Textarea</h4>
      <small>We have min, max that shows minimum and maximum lenght of content</small>
      <code>{'<Textarea min={20} max={100} width={400} rows={7} label="label" />'}</code>
      <Textarea {...props} />
    </div>
  )
}
