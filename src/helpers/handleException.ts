import { toastError } from 'components/Toast/Toast'
import { BREAKLINE } from 'constants/constants'

import { getUniqueArray } from './arrayMethods'
import { getCleanCase, isObject, isString } from './helpers'

export const handleException = (error: Error, errorSource = '', hideToast = false): void => {
  const message = getCleanCase(getErrorMessage(error, errorSource))
  if (errorSource) {
    console.error('errorSource', errorSource, error, message)
  }

  if (hideToast || !isString(message)) return

  toastError({ description: message })
}

const getErrorMessage = (error: any, errorSource = ''): string => {
  if (!error) {
    return 'Something went wrong.'
  }

  if (isString(error)) {
    if (
      error === 'Network Error' ||
      error.includes('502 Bad Gateway') ||
      error.includes('<title>Error</title>') ||
      error.includes('<title>500 Internal Server Error</title>')
    ) {
      return 'Please check your VPN and internet connection!'
    }

    if (error.includes('503 Service Temporarily Unavailable')) {
      return 'Maintenance mode, we will back soon!'
    }

    if (error === 'canceled') {
      return ''
    }

    return error
  }

  let validationError = ''
  if (error.response?.data?.message) {
    validationError = error.response.data.message
  } else if (error.response?.data?.error) {
    validationError = error.response.data.error
  } else if (error.response?.data?.detail?.[0]?.ctx?.reason) {
    validationError = error.response.data.detail[0].ctx.reason
  } else if (error.response?.data?.detail?.[0]?.msg) {
    const msg = error.response.data.detail[0].msg
    const field = error.response.data.detail[0].loc?.[1]

    validationError = `${field} ${msg}`
  } else if (error.response?.data?.detail) {
    validationError = error.response.data.detail
    if (validationError === 'Not Found' || validationError === 'Not found') {
      validationError = `url ${error.config.url} Not Found`
    }
  }

  if (validationError) {
    if (isString(validationError)) {
      return validationError
    }

    if (isObject(validationError)) {
      return getValidationErrorMessage(validationError)
    }
  }

  if (isObject(error)) {
    if (error instanceof Error) {
      if (errorSource) {
        return `Error in ${errorSource}:${BREAKLINE} ${error.message}`
      }

      return error.message
    }

    if (!error) {
      return 'Something went wrong!'
    }

    // @ts-ignore
    const code = error.code ? `${BREAKLINE} (${error.code})` : null

    // @ts-ignore
    if (error.error && isString(error.error)) {
      // @ts-ignore
      return getErrorMessage(error.error, '') + code
    }

    // @ts-ignore
    if (isObject(error.error)) {
      // @ts-ignore
      return getValidationErrorMessage(error.error)
    }

    // @ts-ignore
    if (isString(error.message)) {
      // @ts-ignore
      return getErrorMessage(error.message, '')
    }

    return 'Error occured!'
  }

  return 'Error occured.'
}

const getValidationErrorMessage = (apiError: any) => {
  const errors = Object.values(apiError)
  const uniqueErrors = getUniqueArray<unknown>(errors)

  return uniqueErrors.join(BREAKLINE)
}
