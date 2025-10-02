import { RadioList } from 'components/RadioList/RadioList'

import styles from './Story.module.scss'

export const RadioListStory = () => {
  return (
    <div className={styles.story}>
      <h4>5) RadioList</h4>
      <small>
        We have options, value, onChange here, plus: required, hasError, disabled, background and
        size
      </small>
      <code>{'<RadioList options="[{value:1, label: 1}]" value="1" onChange label />'}</code>
      <div className={styles.story}>
        {[{ background: false }, { background: true }].map((props, index) => (
          <RadioList
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
            ]}
            value={2}
            onChange={() => {}}
            required={false}
            hasError={false}
            disabled={false}
            key={index}
            label={'RadioList:'}
            {...props}
          />
        ))}
      </div>
    </div>
  )
}
