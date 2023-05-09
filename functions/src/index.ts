import * as admin from "firebase-admin"
import * as functions from "firebase-functions"

// admin.initializeApp(functions.config().firebase)
admin.initializeApp()

const oldExperienceImages = [
  "christine-wise-wedding-1978-and-anniversary-2022.jpg",
  "dail-maudsley-noble.JPG",
  "irene-hill.jpg",
  "jen.jpg",
  "mary-kidd.jpg",
  "nick-atkinson.jpg",
]

exports.storageAccess = functions.https.onRequest((request, response) => {
  const requestPath = request.path
  functions.logger.info("Storage Access: " + requestPath, {
    structuredData: true,
  })
  const filePath = requestPath.slice(1)
  const file =
    filePath.startsWith("images/") &&
    oldExperienceImages.includes(filePath.slice("images/".length)) ?
      `images/experiences/${filePath.slice("images/".length).toLowerCase()}` :
      filePath.startsWith("images/observer-articles/") ?
      `images/articles/${filePath.slice("images/observer-articles/".length)}` :
      filePath
  const object = encodeURIComponent(file)
  const storagePath = `https://firebasestorage.googleapis.com/v0/b/johns-campaign-site.appspot.com/o/${object}?alt=media`
  response.redirect(storagePath)
})

exports.storageList = functions.https.onRequest((request, response) => {
  const prefix = request.path.slice("/list/".length)
  admin
      .storage()
      .bucket()
      .getFiles({prefix})
      .then((files) => files[0].map((file) => file.name))
      .then((files) => {
        response.json(files)
        return
      })
      .catch((error) => console.error(error))
})
