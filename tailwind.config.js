/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        colorss: "rgb(31, 41, 55)",
        cl: 'rgb(72, 85, 91)',
        button:'rgb(1,174,246)',
        'footer-reg': 'rgb(23, 24, 25)',
        'footer-opis': 'rgb(20, 26, 32)',
      },
      maxWidth:{
        'max-width': '87.5em',
      },
      fontFamily:{
        'font-family': 'OpenSans'
      },
      spacing:{
        'ml-link': '18.75em',
        'ml-logo': '12.5em',
      },

      fontSize:{
        'size-text': '1.5625em',
        'text-h':'3.75em',

      },
      width:{
        sizeboxx: '87.5em',
        'text-header-x': '20px',
        custom: '6.375em',
        'main-text': '32.1875em',
        'cart-main-x': '20.75em',
        'footer-title': '18.75em'
      },
      height:{
        sizeboxy: '59.5em',
        'text-header-y': '24px',
        customs: "10.625em",
        'cart-main-y': '21.875em',
        'footer-h': '41.1875em',
      },
      backgroundImage:{
        fon: "url('Photo/header_photo.png')",
        'icon-1': "url('Photo/main_icon1.png')",
        'icon-2': "url('Photo/main_icon2.png')",
        'icon-3': "url('Photo/main_icon3.png')",
        'fon-footer': 'url("Photo/fonfooter.png")'
      },
      screens:{
        xl: '1401px',
        x1: '1199px'
      },
    },
  },
  plugins: [],
}

