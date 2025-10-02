import { QueryClient } from '@tanstack/react-query'
import { handleException } from 'helpers/handleException'
import { ApiKeyMapType } from 'services/types/services'

import {
  createDiscourseCommentApi,
  createDiscourseReviewApi,
  deleteDiscourseCommentApi,
  deleteDiscourseReviewApi,
  getDiscourseMyFeedApi,
  getDiscourseMyFollowingsApi,
  getDiscourseMyReviewsApi,
  getDiscourseNotificationsApi,
  getDiscourseNotificationsUncreadsCountApi,
  getDiscourseReviewApi,
  getDiscourseReviewCommentsApi,
  getDiscourseReviewsApi,
  getDiscourseStatisticsUserApi,
  getDiscourseUsersApi,
  postDiscourseFollowerApi,
  postDiscourseLikeApi,
  postDiscourseNotificationsMarkAllAsReadApi,
  postDiscourseRatingImageApi,
  putUpdateDiscourseNotificationApi,
  updateDiscourseCommentApi,
  updateDiscourseReviewApi,
} from './discourseApis'

const GET_APIS_TOAST_MESSAGE_SUFFIX = 'loaded successfully.'
export const UTILS_QUERY_KEYS = {
  auth: {
    jwtLogin: 'Login successfully.',
    jwtLogout: 'Logout successfully.',
  },
  discourse: {
    statisticsUser: `Discourse statistics ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    reviews: `Reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    users: `Users ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    followers: `User followed/unfollowed successfully.`,
    myFeed: `My feed ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    comments: `Comments ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    like: `Comment liked successfully.`,
    myReviews: `My reviews ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    myFollowings: `My followings ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    ratingsImages: `Image uploaded successfully.`,
    notifications: `Notifications ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    notificationsUnreads: `Notifications unread ${GET_APIS_TOAST_MESSAGE_SUFFIX}`,
    notificationMarkAsRead: `Notification mark as read.`,
  },
}

export const UTILS_QUERY_KEY_APIS: ApiKeyMapType = {
  [UTILS_QUERY_KEYS.auth.jwtLogin]: {
    listApi: getDiscourseUsersApi,
  },
  [UTILS_QUERY_KEYS.auth.jwtLogout]: {
    listApi: getDiscourseUsersApi,
  },
  [UTILS_QUERY_KEYS.discourse.users]: {
    listApi: getDiscourseUsersApi,
  },
  [UTILS_QUERY_KEYS.discourse.myFeed]: {
    listApi: getDiscourseMyFeedApi,
  },
  [UTILS_QUERY_KEYS.discourse.myReviews]: {
    listApi: getDiscourseMyReviewsApi,
  },
  [UTILS_QUERY_KEYS.discourse.myFollowings]: {
    listApi: getDiscourseMyFollowingsApi,
  },
  [UTILS_QUERY_KEYS.discourse.statisticsUser]: {
    singleApi: getDiscourseStatisticsUserApi,
  },
  [UTILS_QUERY_KEYS.discourse.reviews]: {
    listApi: getDiscourseReviewsApi,
    singleApi: getDiscourseReviewApi,
    createApi: createDiscourseReviewApi,
    updateApi: updateDiscourseReviewApi,
    deleteApi: deleteDiscourseReviewApi,
  },
  [UTILS_QUERY_KEYS.discourse.comments]: {
    singleApi: getDiscourseReviewCommentsApi,
    createApi: createDiscourseCommentApi,
    updateApi: updateDiscourseCommentApi,
    deleteApi: deleteDiscourseCommentApi,
  },
  [UTILS_QUERY_KEYS.discourse.notifications]: {
    listApi: getDiscourseNotificationsApi,
    updateApi: putUpdateDiscourseNotificationApi,
  },
  [UTILS_QUERY_KEYS.discourse.notificationsUnreads]: {
    listApi: getDiscourseNotificationsUncreadsCountApi,
  },
  [UTILS_QUERY_KEYS.discourse.notificationMarkAsRead]: {
    createApi: postDiscourseNotificationsMarkAllAsReadApi,
  },

  [UTILS_QUERY_KEYS.discourse.followers]: {
    createApi: postDiscourseFollowerApi,
  },
  [UTILS_QUERY_KEYS.discourse.like]: {
    createApi: postDiscourseLikeApi,
  },
  [UTILS_QUERY_KEYS.discourse.ratingsImages]: {
    createApi: postDiscourseRatingImageApi,
  },
}

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      gcTime: 1000 * 600,
    },
    mutations: {
      // @ts-ignore
      onError: handleException,
    },
  },
})

export const HEADER_CONTENT_TYPE_URLENCODED = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}
