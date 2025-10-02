import {
  DiscourseCommentType,
  DiscourseReviewType,
  DiscourseUserType,
} from 'services/apis/discourseApis'
import { QUERY_CLIENT } from 'services/apis/queryConstants'

import { isArray } from './helpers'

export const invalidateQueryKey = (queryKey: any, type = 'exact') => {
  if (type === 'exact') {
    QUERY_CLIENT.invalidateQueries({
      queryKey,
    })
  }

  if (type === 'all') {
    QUERY_CLIENT.invalidateQueries({
      predicate: cached => {
        return cached.queryKey.includes(queryKey)
      },
      refetchType: 'inactive',
    })
    QUERY_CLIENT.invalidateQueries({
      predicate: cached => {
        return cached.queryKey.includes(queryKey)
      },
    })
  }
}

export const optimisticsUpdateUsersAfterFollowAction = (
  usersQueryKey: any,
  following_id: string,
  isFollowed: boolean,
) => {
  QUERY_CLIENT.setQueryData(usersQueryKey, (users: DiscourseUserType[]): DiscourseUserType[] => {
    if (!users || !isArray(users)) return []

    const updatedList = users.map(user =>
      user.user_id !== following_id
        ? user
        : {
            ...user,
            is_followed: !isFollowed,
          },
    )

    return updatedList
  })
}

export const optimisticsUpdateReviewsAfterFollowAction = (
  reviewsQueryKey: any,
  following_id: string,
  isFollowed: boolean,
) => {
  QUERY_CLIENT.setQueryData(
    reviewsQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.user.user_id !== following_id
          ? review
          : {
              ...review,
              is_followed: !isFollowed,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticsUpdateReviewsAfterLikeAction = (reviewsQueryKey: any, reviewId: string) => {
  QUERY_CLIENT.setQueryData(
    reviewsQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              is_liked: !review.is_liked,
              likes_count: review.is_liked ? review.likes_count - 1 : review.likes_count + 1,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticsUpdateMyFeedAfterLikeAction = (myFeedQueryKey: any, reviewId: string) => {
  QUERY_CLIENT.setQueryData(
    myFeedQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              is_liked: !review.is_liked,
              likes_count: review.is_liked ? review.likes_count - 1 : review.likes_count + 1,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticsUpdateMyReviewsAfterLikeAction = (
  myReviewsQueryKey: any,
  reviewId: string,
) => {
  QUERY_CLIENT.setQueryData(
    myReviewsQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              is_liked: !review.is_liked,
              likes_count: review.is_liked ? review.likes_count - 1 : review.likes_count + 1,
            },
      )

      return updatedReviews
    },
  )
}

// export const optimisticUpdateReviewCommentsAfterCommentAction = (
//   singleQueryKey: any,
//   createdComment: DiscourseCommentType,
// ) => {
//   QUERY_CLIENT.setQueryData(
//     singleQueryKey,
//     (comments: DiscourseCommentType[]): DiscourseCommentType[] => {
//       if (!comments || !isArray(comments)) return []

//       if (createdComment) {
//         return [createdComment, ...comments]
//       }

//       return comments
//     },
//   )
// }

export const optimisticUpdateReviewCommentsAfterCommentUpdate = (
  singleQueryKey: any,
  updatedComment: DiscourseCommentType,
) => {
  QUERY_CLIENT.setQueryData(
    singleQueryKey,
    (comments: DiscourseCommentType[]): DiscourseCommentType[] => {
      if (!comments || !isArray(comments)) return []

      const updatedComments = comments.map(comment =>
        comment.id !== updatedComment.id
          ? comment
          : {
              ...comment,
              ...updatedComment,
            },
      )

      return updatedComments
    },
  )
}

export const optimisticUpdateReviewCommentsAfterCommentDelete = (
  singleQueryKey: any,
  commentId: string,
) => {
  QUERY_CLIENT.setQueryData(
    singleQueryKey,
    (comments: DiscourseCommentType[]): DiscourseCommentType[] => {
      if (!comments || !isArray(comments)) return []

      return comments.filter(comment => comment.id !== commentId)
    },
  )
}

export const optimisticUpdateReviewAfterCommentAction = (
  reviewsQueryKey: any,
  reviewId: string,
) => {
  QUERY_CLIENT.setQueryData(
    reviewsQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              comments_count: review.comments_count + 1,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticUpdateReviewAfterCommentDelete = (
  reviewsQueryKey: any,
  reviewId: string,
) => {
  QUERY_CLIENT.setQueryData(
    reviewsQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              comments_count: review.comments_count - 1,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticUpdateMyFeedAfterCommentAction = (myFeedQueryKey: any, reviewId: string) => {
  QUERY_CLIENT.setQueryData(
    myFeedQueryKey,
    (reviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!reviews || !isArray(reviews)) return []

      const updatedReviews = reviews.map(review =>
        review.id !== reviewId
          ? review
          : {
              ...review,
              comments_count: review.comments_count + 1,
            },
      )

      return updatedReviews
    },
  )
}

export const optimisticsUpdateMyReviewsAfterCreateReviewAction = (
  myReviewsQueryKey: any,
  createdReview: DiscourseReviewType,
) => {
  QUERY_CLIENT.setQueryData(
    myReviewsQueryKey,
    (myReviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!myReviews || !isArray(myReviews)) return []

      if (createdReview) {
        return [createdReview, ...myReviews]
      }

      return myReviews
    },
  )
}

export const optimisticsUpdateMyReviewsAfterUpdateReviewAction = (
  myReviewsQueryKey: any,
  updatedReview: DiscourseReviewType,
) => {
  QUERY_CLIENT.setQueryData(
    myReviewsQueryKey,
    (myReviews: DiscourseReviewType[]): DiscourseReviewType[] => {
      if (!myReviews || !isArray(myReviews)) return []

      const updatedReviews = myReviews.map(review =>
        review.id !== updatedReview.id
          ? review
          : {
              ...review,
              updatedReview,
            },
      )

      return updatedReviews
    },
  )
}
