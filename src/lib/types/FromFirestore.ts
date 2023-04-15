import type {DocumentReference} from "firebase/firestore"

type FromFirestore<T> = {ref: DocumentReference} & T

export type {FromFirestore as default}
