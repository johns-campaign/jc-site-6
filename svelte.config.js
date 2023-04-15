// import adapter from "@sveltejs/adapter-auto"
import adapter from "sveltekit-adapter-firebase"
import autoprefixer from "autoprefixer"
import preprocess from "svelte-preprocess"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      nodeVersion: "16",
      version: "v2",
      functionOptions: {
        cpu: 1,
        memory: "512MiB",
        maxInstances: 10,
      },
    }),
    alias: {
      $styles: "src/styles",
    },
  },
  preprocess: preprocess({
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            modules: false,
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
    },
    postcss: {
      plugins: [autoprefixer()],
    },
    sass: {
      prependData: ["breakpoints", "colours", "fonts", "gaps"]
        .map((file) => `@use "src/styles/${file}" as *`)
        .join("\n"),
    },
  }),
  onwarn: (warning, handler) => {
    // could make this more specific
    // https://stackoverflow.com/questions/60677782/how-to-disable-svelte-warning-unused-css-selector
    const {code} = warning
    if (code === "css-unused-selector") return
    handler(warning)
  },
}

export default config
