import { ColorsEnum } from 'enums/enums'

import { getTwoDigits } from './calculationHelpers'

export const getGermanDate = (date?: Date | string | number | null) => {
  if (!date) return ''

  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = getTwoDigits(dateObject.getMonth() + 1)
  const day = getTwoDigits(dateObject.getDate())
  const germanDate = `${day}.${month}.${year}`

  return germanDate
}

export const getServerDate = (date?: Date | string | number | null) => {
  if (!date) return ''

  const dateObject = new Date(date)
  const year = dateObject.getFullYear()
  const month = getTwoDigits(dateObject.getMonth() + 1)
  const day = getTwoDigits(dateObject.getDate())

  const serverDate = `${year}-${month}-${day}`

  return serverDate
}

export function getRelativeTime(date: Date | string, isShort = true): string {
  const target = typeof date === 'string' ? new Date(date) : date
  const diffMs = Date.now() - target.getTime()
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHrs = Math.floor(diffMin / 60)
  const diffDays = Math.floor(diffHrs / 24)

  if (diffDays >= 1) {
    if (isShort) return `${diffDays} d`

    return diffDays === 1 ? 'yesterday' : `${diffDays} days ago`
  }

  if (diffHrs >= 1) {
    return isShort ? `${diffHrs} h` : `${diffHrs} hours ago`
  }

  if (diffMin >= 1) {
    return isShort ? `${diffMin} m` : `${diffMin} minutes ago`
  }

  return 'just now'
}

export const getDiffTimeColor = (dateString: string | number | null) => {
  if (!dateString) return ColorsEnum.PrimaryMain

  const givenDate = new Date(dateString)
  const today = new Date()

  givenDate.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  // @ts-ignore
  const diffTime = givenDate - today

  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return ColorsEnum.PrimaryMain
  if (diffDays > 0) return ColorsEnum.SecondaryMain

  return ColorsEnum.Error
}

export const getDaysAfter = (date = getServerDate(new Date()), days = 0): string => {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + days)

  const year = newDate.getFullYear()
  const month = getTwoDigits(newDate.getMonth() + 1)
  const day = getTwoDigits(newDate.getDate())

  return `${year}-${month}-${day}`
}
