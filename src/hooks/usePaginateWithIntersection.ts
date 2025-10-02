import { useEffect, useState } from 'react'
import { API_PER_PAGE } from 'constants/constants'

import { useElementVisibility } from './useElementVisibility'

export const usePaginateWithIntersection = (listLength: number, perPage = API_PER_PAGE) => {
  const { ref: divLocatedAtBottomOfPageRef, isVisible } = useElementVisibility({})

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
    const isDataMultipleOfPagination = listLength % perPage === 0
    const isCountIsCorrectToUpdatePage = listLength === page * perPage

    if (!isVisible || !isDataMultipleOfPagination || !isCountIsCorrectToUpdatePage) return

    setUpdatingPage(true)
  }, [listLength, updatingPage, isVisible])

  return { divLocatedAtBottomOfPageRef, page }
}
