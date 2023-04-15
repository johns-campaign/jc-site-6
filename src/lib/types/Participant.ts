import type {GeoPoint} from "firebase/firestore"
import type SignUp from "./Participant/SignUp"

type Participant = {
  id: string
  name: string
  href?: string
  location?: GeoPoint
  pledge?: string
  figures?: {
    images: string[]
    description?: string
  }[]
  resources?: {
    href: string
    description: string
  }[]
  "sign-ups"?: SignUp[]
}

export type {Participant as default}
