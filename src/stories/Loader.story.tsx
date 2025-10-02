import { Loader } from 'components/Loader/Loader'
import { SizesEnum } from 'enums/enums'

import styles from './Story.module.scss'

export const LoaderStory = () => {
  return (
    <div className={styles.story}>
      <h4>26) Loader</h4>
      <Loader size={SizesEnum.S} label='Loading' />
      <Loader size={SizesEnum.M} />
      <Loader size={SizesEnum.L} />
    </div>
  )
}
