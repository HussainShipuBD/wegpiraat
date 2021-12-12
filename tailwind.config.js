module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '2rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      fontFamily: {
        body:[
          'regular'
        ],
        big:[
          'big'
        ],
        light:[
          'light'
        ]
         
      },
      colors:{
        1:'#767676',
        2:'#707070',
        3:'#ECEBEA',
        four:'#D1D1D1',
        five:'#f7f7f6',
        primary: '#e6128c',
        primaryHover: '#cf0f7d',
        // primary: {
        //   100: '#e6128c',
        //   200: '#3ea6d6', 
        // },
        secondaryHover: '#425fa9',
        secondary: '#3ea6d6',
        secondaryLightHover: '#568fb5',
        secondaryLight: '#6ca4ca',
      },
      fontSize: {
        18: '18px',
        20: '20px',
        28: '28px',
        24: '24px',
        32: '32px',
        42: '42px',
        55: '55px',
        '42l1': ['42px', { lineHeight: '3rem' }],
      },
      width: (theme) => ({
        w44: '44px',
        w55: '55px',
        w63: '63px',
        w75: '75px',
        w220:'220px',
        w300:'300px',
        w360:'360px',
        w700:'700px',
      }),
      minWidth: {
        minW90: '90%',
      },
      height: (theme) => ({
        hei35: '35px',
        hei44: '44px',
        hei55: '55px',
        hei63: '63px',
        hei75: '75px',
        hei166: '166px',
        hei355: '355px',
        hei507: '507px'
      }),
      boxShadow: {
        shadowOne : '0px 0px 7px 2px #ddd9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
