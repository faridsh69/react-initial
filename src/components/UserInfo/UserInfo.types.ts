import { SizesEnum } from 'enums/enums'

export type UserInfoProps = {
  userId: string
  avatar: string
  username: string
  likesCount?: number
  followersCount?: number
  createdAt?: string
  isFollowed?: boolean
  description?: string
  hideFollow?: boolean
  size?: SizesEnum
}
