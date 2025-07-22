module.exports = {
  theme: {
    extend: {
      imageRendering: {
        crisp: 'crisp-edges',
        pixelated: 'pixelated',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.image-rendering-crisp': {
          'image-rendering': 'crisp-edges',
        },
        '.image-rendering-pixelated': {
          'image-rendering': 'pixelated',
        },
      })
    }
  ],
}