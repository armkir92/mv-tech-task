export type Contact = {
  id: string
  name: string
  username: string
  info: string
  image: string
}

export interface ContactFormData {
  name: string
  username: string
  info: string
  image?: string
}
