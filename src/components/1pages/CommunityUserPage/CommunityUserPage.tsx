import { MyReviewsTab } from 'components/2templates/MyReviewsTab/MyReviewsTab'
import { PostReviewCreation } from 'components/2templates/PostReviewCreation/PostReviewCreation'
import { UserStatitics } from 'components/2templates/UserStatitics/UserStatitics'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { TabItems } from 'components/TabItems/TabItems'
import { DirectionsEnum } from 'enums/enums'
import { useAuth } from 'hooks/useAuth'
import { usePersistState } from 'hooks/usePersistState'
import { useParams } from 'react-router-dom'
import { themeStyles } from 'scss/theme.styels'
import { OptionValueType } from 'types/types'

import { FollowingsTab } from '../../2templates/FollowingsTab/FollowingsTab'
import styles from './CommunityUserPage.module.scss'

export const CommunityUserPage = () => {
  const { userId } = useParams()

  const { authUser } = useAuth()

  const finalUserId = userId || authUser.user_id

  const TAB_VALUES = {
    myReviews: 'My reviews',
    following: 'Following',
    notification: 'Notifications',
  }
  const TABS = [
    {
      label: 'My reviews',
      value: TAB_VALUES.myReviews,
    },
    {
      label: 'Following',
      value: TAB_VALUES.following,
    },
    {
      label: 'Notifications',
      value: TAB_VALUES.notification,
      badge: 1,
    },
  ]
  const [tab, setTab] = usePersistState<OptionValueType>(
    'discourseProfileTab',
    TAB_VALUES.myReviews,
  )

  return (
    <div className={themeStyles.container}>
      <div className={themeStyles.row}>
        <div className={themeStyles.discourseLeftColumn}>
          <div className={styles.leftSidebar}>
            <UserStatitics userId={userId} />
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
            {TAB_VALUES.myReviews === tab && <MyReviewsTab userId={finalUserId} />}
            {TAB_VALUES.following === tab && <FollowingsTab userId={finalUserId} />}
            {TAB_VALUES.notification === tab && <DataNotFound label='No notifications' />}
          </div>
        </div>
        <div className={themeStyles.discourseRightColumn}>
          <div className={styles.rightSidebar}>
            <PostReviewCreation />
          </div>
        </div>
      </div>
    </div>
  )
}
