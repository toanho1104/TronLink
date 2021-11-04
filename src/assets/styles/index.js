import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const rate = width / 375

export const colors = {
  darkMode: false,
  primaryDark: '#0c7bfa',
  primary: '#509ffa',
  primaryLight: '#a2c8f5',

  secondaryDark: '#C8B900',
  secondary: '#FFEB3B',
  secondaryLight: '#FFFF72',
  textPrimary: '#000000',
  textSecondary: '#60727d',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#000000',

  iconPrimary: '#000000',
  iconSecondary: '#60727d',

  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#E5E5E5',
}

export const lightColors = {
  darkMode: false,
  primaryDark: '#00004F',
  primary: '#19227C',
  primaryLight: '#524AAC',

  secondaryDark: '#C8B900',
  secondary: '#FFEB3B',
  secondaryLight: '#FFFF72',
  textPrimary: '#000000',
  textSecondary: '#60727d',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#000000',

  iconPrimary: '#60727d',

  backgroundPrimary: '#ffffff',
  backgroundSecondary: '#E5E5E5',
}
export const darkColors = {
  darkMode: true,
  primaryDark: '#00004F',
  primary: '#ffffff',
  primaryLight: '#524AAC',

  secondaryDark: '#C8B900',
  secondary: '#24211a',
  secondaryLight: '#FFFF72',

  textPrimary: '#ffffff',
  textSecondary: '#ffffff',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#ffffff',

  iconPrimary: '#6e86c4',

  backgroundPrimary: '#000000',
  backgroundSecondary: '#E5E5E5',
}

export const fonts = {
  bold: {
    fontFamily: 'Roboto-Bold',
  },
  regular: {
    fontFamily: 'Roboto-Regular',
  },
  italic: {
    fontFamily: 'Roboto-Italic',
  },
  thinItalic: {
    fontFamily: 'Roboto-ThinItalic',
  },
  boldItalic: {
    fontFamily: 'Roboto-BoldItalic',
  },
}

export const textStyles = {
  headingLarge: {
    ...fonts.bold,
    fontSize: 24,
    // lineHeight: 1.2,
  },
  headingMedium: {
    ...fonts.bold,
    fontSize: 22,
    // lineHeight: 1.2,
  },
  headingSmall: {
    ...fonts.bold,
    fontSize: 18,
    // lineHeight: 1.2,
  },

  linkTextBold: {
    ...fonts.boldItalic,
    fontSize: 16,
    // lineHeight: 1.2,
  },
  linkTextNomarl: {
    ...fonts.italic,
    fontSize: 15,
    // lineHeight: 1.2,
  },

  buttonTextBold: {
    ...fonts.bold,
    fontSize: 16 * rate,
    // lineHeight: 1.2,
  },
  buttonTextNomarl: {
    ...fonts.regular,
    fontSize: 16 * rate,
    // lineHeight: 1.2,
  },

  contenTextBold: {
    ...fonts.bold,
    fontSize: 16,
  },
  contenTextRegular: {
    ...fonts.regular,
    fontSize: 12,
  },
  contenTextItalic: {
    ...fonts.italic,
    fontSize: 12,
  },
  textInput: {
    ...fonts.regular,
    fontSize: 15,
    // lineHeight: 1.2,
  },
  textBottomTab: {
    ...fonts.bold,
    fontSize: 14,
  },
}

// export const Shadows = {
//   buttonShadow: {
//     shadowColor: colors.primaryRed,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.24,
//     shadowRadius: 30,
//     elevation: 8,
//   },
//   mainButtonShadow: {
//     shadowColor: colors.primaryBlue,
//     shadowOffset: {
//       width: 0,
//       height: 10,
//     },
//     shadowOpacity: 0.24,
//     shadowRadius: 30,
//     elevation: 8,
//   },
// }

export const MessageStyle = {
  success: {
    style: {
      backgroundColor: colors.green,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    titleStyle: textStyles.headingSmall,
    duration: 1000,
  },
  error: {
    style: {
      backgroundColor: colors.red,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    titleStyle: textStyles.headingSmall,
    duration: 1000,
  },
}
