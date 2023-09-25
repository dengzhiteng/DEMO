import React, { useEffect } from 'react'

const useTitle = (count) => {
  useEffect(() => {
    document.title = count
  })
}

export default useTitle