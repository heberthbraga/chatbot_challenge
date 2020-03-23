const alphabetize = (words) => {
  const sortedWords = words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()) )
  return sortedWords.join(",")
}

const listEvenWords = (words) => {
  const evenWords = words.filter((word) => {
    return (word.length % 2 === 0)
  })

  return evenWords.join(",")
}

export default { alphabetize, listEvenWords }