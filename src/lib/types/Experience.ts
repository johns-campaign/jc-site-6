import type {Timestamp} from "firebase/firestore"
import type CaptionedImage from "./CaptionedImage"

type Experience = {
  id: string
  name: string
  timestamp: Timestamp
  image?: CaptionedImage
  content: string[]
}

export type {Experience as default}
