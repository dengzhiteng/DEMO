import React, { useState, useEffect, useMemo } from 'react'

const useDoubleCount = (count) => {
  const doubleCount = useMemo(() => {
    return count * 2
  })

  return {
    doubleCount
  }
}

export default useDoubleCount