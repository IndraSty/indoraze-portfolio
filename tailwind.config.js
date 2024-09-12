/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'outline-primary': '0 0 0 2px #FF9843',
        'outline-white': '0 0 0 2px #FFFFFF',
        'bottom': '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.02)'
      },
      colors: {
        'primary': '#FF9843',
        'secondary': '#B5C0D0',
        'secondary-thin': '#ECECEC',
        'secondary-2': '#000080',
        'primary-hover': '#f83600',
        'dark': 'var(--gray-900)'
      },
    },
  },

  variants: {
    extend: {
      boxShadow: ['hover', 'active'],
    }
  },
  
  plugins: [
  ],

};
