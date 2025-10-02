import { APP_PATHS } from 'components/0app/constants'
import { FollowAction } from 'components/2templates/FollowAction/FollowAction'
import { Avatar } from 'components/Avatar/Avatar'
import { Button } from 'components/Button/Button'
import { Icon } from 'components/Icon/Icon'
import { Label } from 'components/Label/Label'
import { ColorsEnum, FontsEnum, IconsEnum, SizesEnum, VariantsEnum } from 'enums/enums'
import { isNumber } from 'helpers/helpers'
import { useAuth } from 'hooks/useAuth'
import { useChangePath } from 'hooks/useChangePath'

import { UserInfoProps } from './UserInfo.types'
import styles from './UserInfo.module.scss'

export const UserInfo = (props: UserInfoProps) => {
  const {
    userId,
    avatar = '',
    username,
    likesCount,
    followersCount,
    createdAt = '',
    isFollowed = false,
    description = '',
    hideFollow = false,
    size = SizesEnum.M,
  } = props

  const followersLabel = isNumber(followersCount) ? `${followersCount} followers` : ''
  const likesLabel = isNumber(likesCount) ? `${likesCount} likes` : ''
  const { authUser } = useAuth()

  const isAuthUser = authUser.user_id === userId

  const { navigate } = useChangePath()
  const handleRedirectUser = () => {
    navigate(APP_PATHS.communityUser.replace(':userId', userId))
  }

  return (
    <div className={styles.userInfo}>
      <div className={styles.body}>
        <Avatar src={avatar} size={size} alt={username} />
        <div className={styles.labels}>
          <div className={styles.username}>
            <Button
              label={username}
              variant={VariantsEnum.Text}
              size={SizesEnum.S}
              onClick={handleRedirectUser}
            />
            {createdAt && (
              <Label
                label={createdAt}
                font={size === SizesEnum.S ? FontsEnum.Text12 : FontsEnum.Text14}
                color={ColorsEnum.Grey700}
              />
            )}
            {isAuthUser && <Icon icon={IconsEnum.Verified} size={SizesEnum.M} />}
          </div>
          {!description && (
            <Label
              label={`${followersLabel} ${likesLabel}`}
              font={FontsEnum.Text12}
              color={ColorsEnum.Grey700}
            />
          )}
          {!!description && (
            <Label label={description} font={FontsEnum.Text12} color={ColorsEnum.Black} />
          )}
        </div>
      </div>
      {!isAuthUser && !hideFollow && <FollowAction userId={userId} isFollowed={isFollowed} />}
    </div>
  )
}
