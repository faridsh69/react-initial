import { CheckList } from 'components/CheckList/CheckList'

import styles from './Story.module.scss'

export const CheckListStory = () => {
  return (
    <div className={styles.story}>
      <h4>4) Checklist</h4>
      <small>
        We have options, value, onChange here, plus: required, hasError, disabled, background and
        size
      </small>
      <code>{'<CheckList options="array with value and label" value onChange label />'}</code>

      <div className={styles.story}>
        {[{ background: false }, { background: true }].map((props, index) => (
          <CheckList
            options={[
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
            ]}
            value={[1]}
            onChange={() => {}}
            label={'CheckList:'}
            required={false}
            hasError={false}
            disabled={false}
            key={index}
            {...props}
          />
        ))}
      </div>
    </div>
  )
}
