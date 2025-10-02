import { useState } from 'react'
import { Button } from 'components/Button/Button'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { IconsEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const DataNotFoundStory = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSearch = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className={styles.story}>
      <h4>25) DataNotFound </h4>
      <small>It will show after search data is not found</small>

      <Button label='start searching' onClick={handleSearch} />
      <div style={{ width: 160 }}>
        <DataNotFound
          isLoading={isLoading}
          label='Items not found.'
          icon={IconsEnum.EmptyProduct}
        />
      </div>
    </div>
  )
}
