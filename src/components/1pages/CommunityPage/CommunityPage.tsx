import { LastActivityTab } from 'components/2templates/LastActivityTab/LastActivityTab'
import { MyFeedTab } from 'components/2templates/MyFeedTab/MyFeedTab'
import { NotificationsTab } from 'components/2templates/NotificationsTab/NotificationsTab'
import { PostReviewCreation } from 'components/2templates/PostReviewCreation/PostReviewCreation'
import { TabItems } from 'components/TabItems/TabItems'
import { SkeletonUserInfo } from 'components/UserInfo/SkeletonUserInfo'
import { UserInfo } from 'components/UserInfo/UserInfo'
import { DirectionsEnum } from 'enums/enums'
import { useAuth } from 'hooks/useAuth'
import { usePersistState } from 'hooks/usePersistState'
import { themeStyles } from 'scss/theme.styels'
import {
  useCrudDiscourseNotificationsUnreads,
  useCrudDiscourseUsers,
} from 'services/hooks/useCrudDiscourse'
import { OptionValueType } from 'types/types'

import styles from './CommunityPage.module.scss'

export const CommunityPage = () => {
  const { authUser } = useAuth()

  const { list: users, isLoading: isUsersLoading } = useCrudDiscourseUsers()

  const TAB_VALUES = {
    lastActivity: 'Latest activity',
    myFeed: 'My feed',
    notification: 'Notifications',
  }

  const { listApiResponse } = useCrudDiscourseNotificationsUnreads()
  const TABS = [
    {
      label: 'Explore',
      value: TAB_VALUES.lastActivity,
    },
    {
      label: 'My feed',
      value: TAB_VALUES.myFeed,
    },
    {
      label: 'Notifications',
      value: TAB_VALUES.notification,
      badge: listApiResponse,
    },
  ]

  const [tab, setTab] = usePersistState<OptionValueType>('discourseTab', TAB_VALUES.lastActivity)

  return (
    <div className={themeStyles.container}>
      <div className={themeStyles.row}>
        <div className={themeStyles.discourseLeftColumn}>
          <div className={styles.leftSidebar}>
            <UserInfo
              userId={authUser.user_id}
              avatar={authUser.avatar_link}
              username={authUser.username}
              likesCount={authUser.likes_count}
              followersCount={authUser.followers_count}
              isFollowed={false}
            />
          </div>
        </div>
        <div className={themeStyles.discourseCenterColumn}>
          <div className={styles.tabContent}>
            <TabItems
              value={tab}
              onChange={setTab}
              direction={DirectionsEnum.Horizontal}
              options={TABS}
            />
            {TAB_VALUES.lastActivity === tab && <LastActivityTab />}
            {TAB_VALUES.myFeed === tab && <MyFeedTab />}
            {TAB_VALUES.notification === tab && <NotificationsTab />}
          </div>
        </div>
        <div className={themeStyles.discourseRightColumn}>
          <div className={styles.rightSidebar}>
            <PostReviewCreation />
            {isUsersLoading && <SkeletonUserInfo />}
            {users
              .filter(u => u.user_id !== authUser.user_id)
              .slice(0, 4)
              .map(user => (
                <UserInfo
                  userId={user.user_id}
                  username={user.username}
                  avatar={user.avatar_link}
                  likesCount={user.likes_count}
                  isFollowed={user.is_followed}
                  key={user.user_id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
