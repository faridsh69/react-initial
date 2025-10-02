import { API_PER_PAGE } from 'constants/constants'

import { AUTH_API_CLIENT, DISCOURSE_API_CLIENT, QUIZ_API_CLIENT } from '../clients/clients'

const STATISTICS = 'statistics'
const REVIEWS = 'reviews'
const USERS = 'users'
const FOLLOWERS = 'followers'
const LIKES = 'likes'
const MY_FEED = 'my-feed'
const MY_REVIEWS = 'my-reviews'
const MY_FOLLOWINGS = 'my-followings'
const COMMENTS = 'comments'
const REVIEW_COMMENTS = 'review-comments'
const NOTIFICATIONS = 'notifications'

////// STATISTICS
export type DiscourseStatisticsUser = {
  user_id: string
  username: string
  avatar_link: string
  reviews_count: number
  likes_count: number
  comments_count: number
  followers_count: number
  following_count: number
}

export const getDiscourseStatisticsUserApi = (userId: string) =>
  DISCOURSE_API_CLIENT.get<DiscourseStatisticsUser>({
    endpoint: `${STATISTICS}/${userId}`,
  })

////// REVIEWS
export type DiscourseReviewsApiFilters = {
  page: number
  perPage: number
}
export const getDiscourseReviewsApi = (filters: DiscourseReviewsApiFilters) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${REVIEWS}`,
    data: {
      page: filters.page || 1,
      per_page: filters.perPage || API_PER_PAGE,
    },
  })

export const getDiscourseReviewApi = (reviewId: number) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${REVIEWS}/${reviewId}`,
  })

export type DiscourseReviewType = {
  id: string
  username: string
  avatar_link: string
  user_id: string
  user: DiscourseUserType
  title: string
  description: string
  rate: number
  image_urls: string[]
  vintage_year: string
  created_at: string
  is_followed: boolean
  likes_count: number
  comments_count: number
  is_liked: boolean
  product_id: string
  product_title: string
  product_type: string
  product_image: string
  slug: string
  product: {
    product_id: string
    product_title: string
    slug?: string
    product_type: string
    product_color: string
    description: string
    product_image: string
    vintage_year: string
    bottle_volume: string
    country: string
    region: string
    user_rating: string
  }
}

export const createDiscourseReviewApi = (data: DiscourseReviewType) =>
  DISCOURSE_API_CLIENT.post({
    endpoint: REVIEWS,
    data,
  })

export const updateDiscourseReviewApi = (data: DiscourseReviewType) =>
  DISCOURSE_API_CLIENT.put({
    endpoint: `${REVIEWS}/${data.id}`,
    data,
  })

export const deleteDiscourseReviewApi = (reviewId: number) =>
  DISCOURSE_API_CLIENT.remove({
    endpoint: `${REVIEWS}/${reviewId}`,
  })

//////// USERS
export type DiscourseUserType = {
  user_id: string
  username: string
  avatar_link: string
  likes_count: number
  comments_count: number
  posts_count: number
  is_followed: boolean
}
export const getDiscourseUsersApi = (filters: DiscourseReviewsApiFilters) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${USERS}`,
    data: {
      page: filters.page,
      per_page: filters.perPage,
    },
  })

//////// FOLLOWERS
export type DiscourseFollowerApiPayload = {
  following_id: string
  username: string
  avatar_link: string
}
export const postDiscourseFollowerApi = (data: DiscourseFollowerApiPayload) =>
  DISCOURSE_API_CLIENT.post({
    endpoint: FOLLOWERS,
    data,
  })

////////// MY FEED
export const getDiscourseMyFeedApi = (filters: DiscourseReviewsApiFilters) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${MY_FEED}`,
    data: {
      page: filters.page,
      per_page: filters.perPage,
    },
  })

////////// MY REVIEWS
export type DiscourseMyReviewsApiFilters = {
  userId?: string
  page?: number
  perPage?: number
}
export const getDiscourseMyReviewsApi = (filters: DiscourseMyReviewsApiFilters) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${MY_REVIEWS}/${filters.userId}`,
    data: {
      page: filters.page || 1,
      per_page: filters.perPage || API_PER_PAGE,
    },
  })

////////// MY FOLLOWINGS
export const getDiscourseMyFollowingsApi = (filters: DiscourseMyReviewsApiFilters) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${MY_FOLLOWINGS}/${filters.userId}`,
    data: {
      page: filters.page || 1,
      per_page: filters.perPage || API_PER_PAGE,
    },
  })

////////// Like
export type DiscourseLikeApiPayload = {
  review_id: string
  username: string
  avatar_link: string
}
export const postDiscourseLikeApi = (data: DiscourseLikeApiPayload) =>
  DISCOURSE_API_CLIENT.post({
    endpoint: `${LIKES}`,
    data,
  })

////// COMMENTS
export const getDiscourseReviewCommentsApi = (review_id: string) =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${REVIEW_COMMENTS}/${review_id}`,
  })

export type DiscourseCommentType = {
  id: string
  review_id: string
  description: string
  username: string
  avatar_link: string
  created_at: string
  user: DiscourseUserType
}
export const createDiscourseCommentApi = (data: DiscourseCommentType) =>
  DISCOURSE_API_CLIENT.post({
    endpoint: COMMENTS,
    data,
  })

export const updateDiscourseCommentApi = (data: DiscourseCommentType) =>
  DISCOURSE_API_CLIENT.put({
    endpoint: `${COMMENTS}/${data.id}`,
    data,
  })

export const deleteDiscourseCommentApi = (commentId: number) =>
  DISCOURSE_API_CLIENT.remove({
    endpoint: `${COMMENTS}/${commentId}`,
  })

////////// IMAGES
export type DiscourseRatingImageApiPayload = {
  images: string[]
}
export const postDiscourseRatingImageApi = (data: DiscourseRatingImageApiPayload) =>
  AUTH_API_CLIENT.post({
    endpoint: `ratings/images`,
    data,
  })

////////// NOTIFICATIONS
export const getDiscourseNotificationsApi = () =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${NOTIFICATIONS}`,
  })

export const putUpdateDiscourseNotificationApi = (data: any) =>
  DISCOURSE_API_CLIENT.put({
    endpoint: `${NOTIFICATIONS}`,
    data,
  })

export const getDiscourseNotificationsUncreadsCountApi = () =>
  DISCOURSE_API_CLIENT.get({
    endpoint: `${NOTIFICATIONS}-unreads`,
  })

export const postDiscourseNotificationsMarkAllAsReadApi = (data: any) =>
  DISCOURSE_API_CLIENT.post({
    endpoint: `${NOTIFICATIONS}-all`,
    data,
  })

export const postQuizSubmissionApi = (data: any) =>
  QUIZ_API_CLIENT.post({
    endpoint: 'quiz_submission?page=1&size=20',
    data,
  })
