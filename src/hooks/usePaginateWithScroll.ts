import { useEffect, useRef, useState } from 'react'
import { API_PER_PAGE, SCROLL_TRESHOLD } from 'constants/constants'

export const usePaginateWithScroll = (listLength: number, perPage = API_PER_PAGE) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const [page, setPage] = useState(1)

  const [updatingPage, setUpdatingPage] = useState(false)

  useEffect(() => {
    if (!updatingPage) return

    setPage(page + 1)
    setTimeout(() => {
      setUpdatingPage(false)
    }, 1000)
  }, [updatingPage])

  useEffect(() => {
    const div = containerRef.current
    if (!div) return

    const handleScroll = () => {
      const isHeightBigEnough = div.scrollHeight > 1000
      const isDataMultipleOfPagination = listLength % perPage === 0
      const isCountIsCorrectToUpdatePage = listLength === page * perPage
      const isScrolledToBottom =
        div.scrollTop + div.clientHeight >= div.scrollHeight - SCROLL_TRESHOLD

      if (
        updatingPage ||
        !isHeightBigEnough ||
        !isScrolledToBottom ||
        !isDataMultipleOfPagination ||
        !isCountIsCorrectToUpdatePage
      )
        return

      setUpdatingPage(true)
    }

    div.addEventListener('scroll', handleScroll)

    return () => div.removeEventListener('scroll', handleScroll)
  }, [listLength, updatingPage, containerRef.current])

  return { containerRef, page }
}
