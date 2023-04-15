import type {Timestamp} from "firebase/firestore"

export const formatAuthors = (authors: string[]): string => {
  const lastIndex = authors.length - 1
  return authors
    .map((author, index) => {
      const separator =
        index === lastIndex ? "" : index + 1 === lastIndex ? " and " : ", "
      return `${author}${separator}`
    })
    .join("")
}

const monthName = (month: number) => {
  switch (month) {
    case 0:
      return "Jan"
    case 1:
      return "Feb"
    case 2:
      return "Mar"
    case 3:
      return "Apr"
    case 4:
      return "May"
    case 5:
      return "Jun"
    case 6:
      return "Jul"
    case 7:
      return "Aug"
    case 8:
      return "Sep"
    case 9:
      return "Oct"
    case 10:
      return "Nov"
    case 11:
      return "Dec"
  }
}

export const formatDate = (date: Date) => {
  const y = date.getFullYear()
  const m = date.getMonth()
  const d = date.getDate()
  const M = monthName(m)
  return `${M} ${d}, ${y}`
}

export const formatTimestampAsDate = (timestamp: Timestamp) =>
  formatDate(timestamp.toDate())
