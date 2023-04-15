import type {Timestamp} from "firebase/firestore"
import type CaptionedImage from "./CaptionedImage"

type Post = {
  id: string
  title: string
  authors: string[]
  timestamp: Timestamp
  // tags: string[]
  tags: {[s: string]: boolean}
  image?: CaptionedImage
  standfirst?: string
  quote?: string
  content: string[]
}

export type {Post as default}
