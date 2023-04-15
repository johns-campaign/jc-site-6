type Statement = {
  id: string
  title: string
  subtitle?: string
  href?: string
  image: {
    file: string
    caption?: string
    "caption-href"?: string
  }
  content: string[]
}

export type {Statement as default}
