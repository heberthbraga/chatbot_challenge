const sum = (numbers) => {
  return numbers.reduce((a, b) => {
    let x = parseInt(a)
    let y = parseInt(b)
    return (!isNaN(x-y)) ? x + y : x
  })
}

const largest = (numbers) => {
  return numbers.reduce((a, b) => {
    let x = parseInt(a)
    let y = parseInt(b)

    return (x > y) ? x : y
  })
}

export default { sum, largest }