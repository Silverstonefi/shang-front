module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'Lobster': ['Lobster Two', 'sans-serif'],      
    },
    extend: {
      strokeWidth: {
        '5': '5px',
      },
    },
  },
    plugins: [require("daisyui")],
}
