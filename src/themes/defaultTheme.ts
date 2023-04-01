export const defaultTheme = {
  colors: {
    white: '#FFFFFF',

    gray: {
      100: '#E1E1E6',
      200: '#C4C4CC',
      300: '#7C7C8A',
      400: '#323238',
      500: '#29292E',
      600: '#202024',
      700: '#121214',
    },

    success: {
      500: '#00B37E',
      700: '#00875F',
    },

    danger: {
      500: '#F75A68',
      700: '#AA2834',
    }
  },
  fonts: {
    regular: 'Roboto_400Regular',
    bold: 'Roboto_700Bold'
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px'
  }
} as const
