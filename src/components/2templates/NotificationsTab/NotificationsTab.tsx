import { useMemo, useState } from 'react'
import { Button } from 'components/Button/Button'
import { ContextMenu } from 'components/ContextMenu/ContextMenu'
import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { Label } from 'components/Label/Label'
import { Select } from 'components/Select/Select'
import { SkeletonUserInfo } from 'components/UserInfo/SkeletonUserInfo'
import { UserInfo } from 'components/UserInfo/UserInfo'
import { IconsEnum, VariantsEnum } from 'enums/enums'
import { getRelativeTime } from 'helpers/dateHelpers'
import { themeStyles } from 'scss/theme.styels'
import {
  useCrudDiscourseNotifications,
  useCrudDiscourseNotificationsMarkAsRead,
} from 'services/hooks/useCrudDiscourse'

import styles from './NotificationsTab.module.scss'

export const NotificationsTab = () => {
  const { list, isLoading } = useCrudDiscourseNotifications()

  const { createMutation } = useCrudDiscourseNotificationsMarkAsRead()

  const MarkAsRead = () => {
    console.log('1 createMutation', createMutation)
    createMutation.mutate({ data: {}, hideToast: false })
  }

  const [filter, setFilter] = useState('All notifications')

  const notifications = useMemo(() => {
    if (filter === 'All read notifications')
      return list.filter(notification => notification.read_at)

    if (filter === 'All unread notifications')
      return list.filter(notification => !notification.read_at)

    return list
  }, [filter, list])

  if (!list.length && !isLoading) return <DataNotFound label='No notifications' />

  if (!list.length && isLoading) return <SkeletonUserInfo />

  return (
    <div className={styles.notifications}>
      <div className={themeStyles.row}>
        <div className={themeStyles.col6}>
          <Select
            options={[
              {
                value: 'All notifications',
                label: 'All notifications',
              },
              {
                value: 'All read notifications',
                label: 'All read notifications',
              },
              {
                value: 'All unread notifications',
                label: 'All unread notifications',
              },
            ]}
            multiple={false}
            isSearchable={false}
            value={filter}
            // @ts-ignore
            onChange={setFilter}
          />
        </div>
        <div className={themeStyles.col2}>
          <Button
            variant={VariantsEnum.Secondary}
            label='Mark all as read'
            iconLeft={IconsEnum.Check}
            onClick={MarkAsRead}
          />
        </div>
      </div>

      {notifications.map(notification => (
        <div key={notification.id} className={styles.notification}>
          <UserInfo
            userId={notification.actor?.user_id}
            avatar={notification.actor?.avatar_link}
            username={''}
            hideFollow
          />
          {notification.type === 'comment' && (
            <Label
              label={
                notification.actor?.username +
                ' commented on your review ' +
                notification.review?.title +
                ' on product ' +
                notification.review?.product?.product_title +
                ' ' +
                getRelativeTime(notification.created_at)
              }
              linesCount={3}
            />
          )}
          {notification.type === 'like' && (
            <Label
              label={
                notification.actor?.username +
                ' liked your review ' +
                notification.review?.title +
                ' on product ' +
                notification.review?.product?.product_title +
                ' ' +
                getRelativeTime(notification.created_at)
              }
              linesCount={3}
            />
          )}
          <ContextMenu
            width={150}
            triggerButtonProps={{
              iconLeft: IconsEnum.Dots,
              variant: VariantsEnum.Text,
              width: 40,
            }}
            options={[{ label: 'Mark as read', onClick: MarkAsRead }]}
          />
        </div>
      ))}
    </div>
  )
}
