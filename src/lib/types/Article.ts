import type {Timestamp} from "firebase/firestore"

type Article = {
  id: string
  title: string
  href: string
  timestamp: Timestamp
  site: string
  authors?: string[]
  image?: {
    file: string
    credit?: string
  }
  standfirst?: string
  quote?: string
}

export type {Article as default}
