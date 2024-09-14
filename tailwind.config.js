module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        "serif": ['"Source Serif 4"', '"Noto Serif Thai"', 'serif'],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  daisyui: {
    themes:[
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#000000",
          "primary-content": "#FFFFFF",
          "secondary": "#232323",
          "secondary-content": "#EBEBEB",
          "accent": "#0075FF",
          "accent-content": "#ebf4ff",
          "neutral": "#323c4a",
          "neutral-content": "#d8dbde",
          "base-100": "#F1F5F9",
          "base-200": "#E2E8F0",
          "base-300": "#CBD5E1",
          "base-content": "#000c20",
          "info": "#0096ff",
          "info-content": "#f0f5ff",
          "success": "#6dd187",
          "success-content": "#032e11",
          "warning": "#ff8000",
          "warning-content": "#fbebdf",
          "error": "#ff6f6f",
          "error-content": "#fff2f2",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#FFFFFF",
          "primary-content": "#000000",
          "secondary": "#d8d8d8",
          "secondary-content": "#131313",
          "accent": "#0075FF",
          "accent-content": "#ebf4ff",
          "neutral": "#323c4a",
          "neutral-content": "#d8dbde",
          "base-100": "#1E293B",
          "base-200": "#172033",
          "base-300": "#0F172A",
          "base-content": "#e9f0ff",
          "info": "#0096ff",
          "info-content": "#f0f5ff",
          "success": "#6dd187",
          "success-content": "#032e11",
          "warning": "#ff8000",
          "warning-content": "#fbebdf",
          "error": "#ff6f6f",
          "error-content": "#fff2f2",
        }
      }
    ]
  }
}