import { DataNotFound } from 'components/DataNotFound/DataNotFound'
import { SkeletonUserInfo } from 'components/UserInfo/SkeletonUserInfo'
import { UserInfo } from 'components/UserInfo/UserInfo'
import { useAuth } from 'hooks/useAuth'
import { useCrudDiscourseMyFollowings } from 'services/hooks/useCrudDiscourse'

export const FollowingsTab = (props: { userId: string }) => {
  const { userId } = props
  const { list: followings, isLoading } = useCrudDiscourseMyFollowings({ userId })

  const { authUser } = useAuth()

  if (!isLoading && !followings.length) {
    return (
      <div>
        <DataNotFound label='There is not following yet.' />
      </div>
    )
  }

  return (
    <>
      {isLoading && !followings.length && <SkeletonUserInfo />}
      {followings
        .filter(u => u.user_id !== authUser.user_id)
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
    </>
  )
}
