import type Ambassador from "$lib/types/Ambassador"

export default ({contact}: Ambassador) =>
  contact.email ||
  (contact.emails && (contact.emails.home || contact.emails.work)) ||
  contact.facebook ||
  contact.instagram ||
  contact.phone ||
  contact.twitter ||
  (contact.twitters && contact.twitters.length)
