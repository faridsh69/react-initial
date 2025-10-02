import { Avatar } from 'components/Avatar/Avatar'

import styles from './Story.module.scss'

export const AvatarsStory = () => {
  return (
    <div className={styles.story}>
      <h4>16) Avatar</h4>
      <small>We have avatar to show user profile picture</small>
      <code>{'<Avatar src="src" />'}</code>
      <div>
        <div className={styles.iconsStory}>
          <Avatar src={'https://avatars.githubusercontent.com/u/24242843?s=96&v=4'} />
        </div>
      </div>
    </div>
  )
}
