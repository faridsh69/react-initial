import {
  DiscourseCommentType,
  DiscourseFollowerApiPayload,
  DiscourseLikeApiPayload,
  DiscourseMyReviewsApiFilters,
  DiscourseRatingImageApiPayload,
  DiscourseReviewType,
  DiscourseStatisticsUser,
  DiscourseUserType,
} from 'services/apis/discourseApis'
import { UTILS_QUERY_KEYS } from 'services/apis/queryConstants'
import { useCrud } from 'services/coreHooks/useCrud'

export const useCrudDiscourseStatistics = (userId: string) =>
  useCrud<DiscourseStatisticsUser>({
    queryKey: UTILS_QUERY_KEYS.discourse.statisticsUser,
    modelId: userId,
  })

export const useCrudDiscourseReviews = (filters: any) =>
  useCrud<DiscourseReviewType>({ queryKey: UTILS_QUERY_KEYS.discourse.reviews, filters })

export const useCrudDiscourseUsers = () =>
  useCrud<DiscourseUserType>({ queryKey: UTILS_QUERY_KEYS.discourse.users })

export const useCrudDiscourseFollowers = () =>
  useCrud<DiscourseFollowerApiPayload>({ queryKey: UTILS_QUERY_KEYS.discourse.followers })

export const useCrudDiscourseComments = (reviewId = '') =>
  useCrud<DiscourseCommentType>({
    queryKey: UTILS_QUERY_KEYS.discourse.comments,
    modelId: reviewId,
  })

export const useCrudDiscourseLike = () =>
  useCrud<DiscourseLikeApiPayload>({ queryKey: UTILS_QUERY_KEYS.discourse.like })

export const useCrudDiscourseMyFeed = () =>
  useCrud<DiscourseReviewType>({ queryKey: UTILS_QUERY_KEYS.discourse.myFeed })

export const useCrudDiscourseMyReviews = (filters: DiscourseMyReviewsApiFilters) =>
  useCrud<DiscourseReviewType>({
    queryKey: UTILS_QUERY_KEYS.discourse.myReviews,
    filters,
    configs: { enabled: !!filters.userId },
  })

export const useCrudDiscourseMyFollowings = (filters: DiscourseMyReviewsApiFilters) =>
  useCrud<DiscourseUserType>({ queryKey: UTILS_QUERY_KEYS.discourse.myFollowings, filters })

export const useCrudDiscourseRatingImages = () =>
  useCrud<DiscourseRatingImageApiPayload>({
    queryKey: UTILS_QUERY_KEYS.discourse.ratingsImages,
  })

export const useCrudDiscourseNotifications = () =>
  useCrud<any>({ queryKey: UTILS_QUERY_KEYS.discourse.notifications })

export const useCrudDiscourseNotificationsUnreads = () =>
  useCrud<any>({ queryKey: UTILS_QUERY_KEYS.discourse.notificationsUnreads })

export const useCrudDiscourseNotificationsMarkAsRead = () =>
  useCrud<any>({ queryKey: UTILS_QUERY_KEYS.discourse.notificationMarkAsRead })

export const useCrudQuizSubmission = () =>
  useCrud<any>({ queryKey: UTILS_QUERY_KEYS.quiz.submission })
