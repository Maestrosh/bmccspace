import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: `Secular One, sans-serif`
      }
    }
  },
  preflight: {
    '@import': `https://fonts.googleapis.com/css2?family=Secular+One&display=swap`
  }
} as Options;