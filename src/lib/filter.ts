import {DocumentReference, GeoPoint, Timestamp} from "firebase/firestore"

type StringHaystack =
  | undefined
  | boolean
  | string
  | Timestamp
  | GeoPoint
  | DocumentReference
  | StringHaystack[]
  | {[s: string]: StringHaystack}

type In<Needle, Haystack> = (needle: Needle, haystack: Haystack) => boolean

type StringIn<Haystack extends StringHaystack> = In<string, Haystack>

export const stringInUndefined: StringIn<undefined> = () => false

export const stringInBoolean: StringIn<boolean> = () => false

export const stringInTimestamp: StringIn<Timestamp> = () => false

export const stringInGeoPoint: StringIn<GeoPoint> = () => false

export const stringInDocumentReference: StringIn<DocumentReference> = () =>
  false

export const stringInString: StringIn<string> = (needle, haystack) =>
  haystack.toLowerCase().includes(needle.toLowerCase())

export const stringInArray: StringIn<StringHaystack[]> = (needle, haystack) =>
  haystack.findIndex((haystack) => stringIn(needle, haystack)) !== -1

export const stringInObject: StringIn<{[s: string]: StringHaystack}> = (
  needle,
  haystack,
) =>
  Object.values(haystack).findIndex((haystack) =>
    stringIn(needle, haystack),
  ) !== -1

export const stringIn: StringIn<StringHaystack> = (needle, haystack) =>
  typeof haystack === "string"
    ? stringInString(needle, haystack)
    : Array.isArray(haystack)
    ? stringInArray(needle, haystack)
    : haystack instanceof Timestamp
    ? stringInTimestamp(needle, haystack)
    : haystack instanceof GeoPoint
    ? stringInGeoPoint(needle, haystack)
    : haystack instanceof DocumentReference
    ? stringInDocumentReference(needle, haystack)
    : typeof haystack === "boolean"
    ? stringInBoolean(needle, haystack)
    : haystack != null && typeof haystack === "object"
    ? stringInObject(needle, haystack)
    : false
