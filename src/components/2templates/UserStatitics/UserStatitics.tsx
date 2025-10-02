import { APP_PATHS } from 'components/0app/constants'
import { Avatar } from 'components/Avatar/Avatar'
import { Button } from 'components/Button/Button'
import { Chip } from 'components/Chip/Chip'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { Loader } from 'components/Loader/Loader'
import { FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { useChangePath } from 'hooks/useChangePath'
import { useCrudDiscourseStatistics } from 'services/hooks/useCrudDiscourse'

import styles from './UserStatitics.module.scss'

export const UserStatitics = (props: any) => {
  const { userId } = props

  const { navigate } = useChangePath()

  const handleRedirectCommunity = () => {
    navigate(APP_PATHS.instagram)
  }

  const { single: userStatistics, isLoadingSingle } = useCrudDiscourseStatistics(userId || '-')

  if (isLoadingSingle || !userStatistics) return <Loader size={SizesEnum.M} />
  return (
    <div className={styles.userStatistics}>
      <Avatar
        src={userStatistics.avatar_link}
        size={SizesEnum.L}
        alt={userStatistics.username}
        width={120}
      />
      <div className={styles.flexRow}>
        <Label label={userStatistics.username} font={FontsEnum.Label18} />
        <Icon icon={IconsEnum.Verified} size={SizesEnum.L} />
      </div>
      <Button
        iconLeft={IconsEnum.Pencil}
        label='Edit'
        size={SizesEnum.S}
        width={'100%'}
        variant={VariantsEnum.Secondary}
        onClick={handleRedirectCommunity}
      />
      <div className={styles.statistics}>
        <div>Reviews </div>
        <div>{userStatistics.reviews_count}</div>
      </div>

      <div className={styles.statistics}>
        <div>Likes </div>
        <div>{userStatistics.likes_count}</div>
      </div>

      <div className={styles.statistics}>
        <div>Following </div>
        <div>{userStatistics.following_count}</div>
      </div>

      <div className={styles.statistics}>
        <div>Followers </div>
        <div>{userStatistics.followers_count}</div>
      </div>

      <div className={styles.statistics}>
        <div>Member since </div>
        <div>May 2025</div>
      </div>

      <br />
      <Label label='Product Preferences' font={FontsEnum.Label14} />

      <Label label='Usually pours:' font={FontsEnum.Label14} />

      <Chip label='Sauvignon Blanc' size={SizesEnum.S} />
      <Chip label='Chardonnay' size={SizesEnum.S} />
      <Chip label='Shiraz' size={SizesEnum.S} />

      <div>Favorites from:</div>

      <Chip label='France' size={SizesEnum.S} />
      <Chip label='Australia' size={SizesEnum.S} />
    </div>
  )
}
