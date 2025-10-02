import { useState } from 'react'
import { TabItems } from 'components/TabItems/TabItems'
import { DirectionsEnum } from 'enums/enums'
import { OptionValueType } from 'types/types'

import styles from './Story.module.scss'

export const TabItemsStory = () => {
  const [value, setValue] = useState<OptionValueType>(1)

  return (
    <div className={styles.story}>
      <h4>13) TabItems</h4>
      <small>
        TabItems is a list of tabs that can be triggered, has options, value and onChange
      </small>
      <code>{'<TabItems options={[{value:1, label: 1}]} value onChange />'}</code>

      <TabItems
        value={value}
        onChange={setValue}
        direction={DirectionsEnum.Horizontal}
        title='Human Resources'
        options={[
          {
            label: 'Latest activity',
            value: 1,
          },
          {
            label: 'My feed',
            value: 2,
          },
          {
            label: 'Notifications',
            value: 3,
            badge: 1,
          },
        ]}
      />
    </div>
  )
}
