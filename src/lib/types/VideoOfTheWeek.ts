import type {Timestamp} from "firebase/firestore"

type VideoOfTheWeek = {
  id: string
  title: string
  day?: boolean // false
  timestamp: Timestamp
  href: string
  content: string[]
}

export type {VideoOfTheWeek as default}
