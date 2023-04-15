import type {Timestamp} from "firebase/firestore"

type Book = {
  id: string
  authors?: string[]
  cover?: string
  title: string
  subtitle?: string
  timestamp: Timestamp
  content: string[]
  information?: string[]
  links?: {
    href: string
    text: string
  }[]
}

export type {Book as default}
