import type {GeoPoint} from "firebase/firestore"
import type Sort from "./SignUp/Sort"

type SignUp = {
  name: string
  href?: string
  location: GeoPoint
  sort: Sort
  pledge?: string
  resources?: {
    href: string
    description: string
  }[]
  place: string
  county: string
}

export type {SignUp as default}
