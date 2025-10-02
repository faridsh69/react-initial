import { API_ENDPOINTS } from './clientDomains'
import { createApiClient } from './createApiClient'

export const AUTH_API_CLIENT = createApiClient(API_ENDPOINTS.base, true)

export const PUBLIC_API_CLIENT = createApiClient(API_ENDPOINTS.base, false)
export const PUBLIC_PURE_API_CLIENT = createApiClient(API_ENDPOINTS.base, false, false)

export const AUTO_SUGGEST_API_CLIENT = createApiClient(API_ENDPOINTS.autoSuggest, true)
export const DISCOURSE_API_CLIENT = createApiClient(API_ENDPOINTS.discourse, true, true)

export const FIREBASE_API_CLIENT = createApiClient(API_ENDPOINTS.firebase, true)

export const QUIZ_API_CLIENT = createApiClient(API_ENDPOINTS.quiz, true, true)
