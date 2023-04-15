import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

const config = {
  apiKey: "AIzaSyAHn8_2SjVwzc9oy9hFgkUUGxxC48u11CA",
  authDomain: "johns-campaign-site.firebaseapp.com",
  databaseURL: "https://johns-campaign-site.firebaseio.com",
  projectId: "johns-campaign-site",
  storageBucket: "johns-campaign-site.appspot.com",
  messagingSenderId: "940496482534",
  appId: "1:940496482534:web:e721a2e7e8d987cf544b27",
  measurementId: "G-KKP6WHPB0G",
}

const app = initializeApp(config)

export const firestore = getFirestore(app)
