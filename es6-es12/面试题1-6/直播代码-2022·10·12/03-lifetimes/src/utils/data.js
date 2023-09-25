function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2000)
    }, 2000)
  })
}

export default getData