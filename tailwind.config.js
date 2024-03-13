/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: '#FD5C63', // Brand color
          light: '#FF8A8F', // Lighter shade of brand color
          dark: '#D94A53', // Darker shade of brand color
        },
        positive: {
          DEFAULT: '#008000', // Green
          light: '#00B200', // Lighter shade of green
          dark: '#005900', // Darker shade of green
        },
        warning: {
          DEFAULT: '#FFA500', // Orange
          light: '#FFC75F', // Lighter shade of orange
          dark: '#CC8400', // Darker shade of orange
        },
        negative: {
          DEFAULT: '#FF0000', // Red
          light: '#FF5E5E', // Lighter shade of red
          dark: '#CC0000', // Darker shade of red
        },
        info: {
          DEFAULT: '#0000FF', // Blue
          light: '#5E5EFF', // Lighter shade of blue
          dark: '#0000CC', // Darker shade of blue
        },
        neutral: {
          light: '#F3F3F3', // Light gray
          DEFAULT: '#C0C0C0', // Gray
          dark: '#808080', // Dark gray
          input: '#E0E0E0', // Slightly darker than light gray
        },
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    },
  },
  plugins: [],
};
