import { DiscourseReviewType } from 'services/apis/discourseApis'

export const separateTitleAndDescription = (text: string) => {
  const BREAK_LENGTH = 200

  // Normalize line endings
  const normalized = text.replace(/\r\n?/g, '\n')
  const lines = normalized.split('\n')

  // Title = first non-empty line
  const firstNonEmpty = lines.findIndex(l => l.trim().length > 0)
  if (firstNonEmpty === -1) return { title: '', description: '' }

  const title = lines[firstNonEmpty].trim()

  // Description = everything after title, skipping any blank lines
  let i = firstNonEmpty + 1
  while (i < lines.length && lines[i].trim() === '') i++

  const description = lines.slice(i).join('\n')

  // Optional fallback if there was no description at all and text is long
  if (!description && normalized.length > BREAK_LENGTH) {
    return {
      title: normalized.slice(0, BREAK_LENGTH),
      description: normalized.slice(BREAK_LENGTH),
    }
  }

  return { title, description }
}

export const getIsPost = (review: DiscourseReviewType) => {
  return review.product_id === 'post'
}
