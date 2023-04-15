import type CaptionedImage from "$lib/types/CaptionedImage"

type Ambassador = {
  id: string
  name: string
  pronoun: string
  place?: string
  "participant-id"?: string
  contact: {
    email?: string
    emails?: {
      home?: string
      work?: string
    }
    facebook?: string
    instagram?: string
    phone?: string
    twitter?: string
    twitters?: string[]
  }
  content?: string
  image?: CaptionedImage
  more?: {
    content: string[]
    quote?: boolean // default true
    shownByDefault?: boolean // default false
  }
}

export type {Ambassador as default}
