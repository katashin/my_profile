module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    backgroundSize: {
      '100%': '100%'
    },
    extend: {
      colors: {
        'font-green': '#008c8d',
        'header-green': '#6bc2c3',
        'futter-black': '#262c3a',
        'skill-bar1': '#c5eaea',
        'skill-bar2': '#2bb9ba',
        'line': '#c5eaea'
      },
      backgroundImage: {
        'about': "url('/bg-about.png')",
        'skill': "url('/bg-skills.png')",
        'future': "url('/bg-future.png')",
        'sp-skill': "url('/bg-skills-sp.png')"
      },
  },
  plugins: [],
  }
}
