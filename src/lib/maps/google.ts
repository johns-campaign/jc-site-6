import {Loader} from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "AIzaSyA-5DsQYl9K19bNoIyH4wsgD4X9_fUzWWw",
  version: "weekly",
  libraries: ["marker"],
})

export const mapsLibrary = async () => {
  await loader.load()
  return (await google.maps.importLibrary("maps")) as google.maps.MapsLibrary
}

export const markerLibrary = async () => {
  await loader.load()
  return (await google.maps.importLibrary(
    "marker",
  )) as google.maps.MarkerLibrary
}
