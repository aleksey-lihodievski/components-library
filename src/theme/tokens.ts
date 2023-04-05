import { TinyColor } from '@ctrl/tinycolor';

// import { vars } from './theme-contract.css';

// export const generatePalette = (colorType: string, color: TinyColor) => {
//   const firstLetter = colorType.charAt(0);
//   const remaining = colorType.slice(1);
//
//   const type = firstLetter.toUpperCase() + remaining;
//
//   return {
//     [`color${type}Bg`]: color.lighten(45).toHexString(),
//     [`color${type}BgHover`]: color.lighten(35).toHexString(),
//     [`color${type}Border`]: color.lighten(25).toHexString(),
//     [`color${type}BorderHover`]: color.lighten(15).toHexString(),
//     [`color${type}Hover`]: color.lighten(10).toHexString(),
//     [`color${type}`]: color.toHexString(),
//     [`color${type}Active`]: color.darken(10).toHexString(),
//     [`color${type}TextHover`]: color.lighten(10).toHexString(),
//     [`color${type}Text`]: color.toHexString(),
//     [`color${type}TextActive`]: color.darken(10).toHexString(),
//   };
// };

export const generatePalette = (color: TinyColor) => {
  return {
    colorBg: color.lighten(45).toHexString(),
    colorBgHover: color.lighten(35).toHexString(),
    colorBorder: color.lighten(25).toHexString(),
    colorBorderHover: color.lighten(15).toHexString(),
    colorHover: color.lighten(10).toHexString(),
    colorActive: color.darken(10).toHexString(),
    colorTextHover: color.lighten(10).toHexString(),
    colorText: color.toHexString(),
    colorTextActive: color.darken(10).toHexString(),
  };
};

const getDefaultColors = () => {
  return {
    white: '#fff',
    black: '#000',

    gold: '#faad14',
    yellow: '#fadb14',
    lime: '#a0d911',
    green: '#52c41a',
    cyan: '#13c2c2',
    sky: '#1677ff',
    blue: '#2f54eb',
    purple: '#722ed1',
    magenta: '#eb2f96',

    gray1: '#ffffff ',
    gray2: '#fafafa ',
    gray3: '#f5f5f5 ',
    gray4: '#f0f0f0 ',
    gray5: '#d9d9d9 ',
    gray6: '#bfbfbf ',
    gray7: '#8c8c8c ',
    gray8: '#595959 ',
    gray9: '#434343 ',
    gray10: '#262626 ',
    gray11: '#1f1f1f ',
    gray12: '#141414 ',
    gray13: '#000000 ',
  };
};

interface ThemeColors {
  primary: TinyColor;
  secondary: TinyColor;
  success: TinyColor;
  warning: TinyColor;
  error: TinyColor;
  info: TinyColor;
  gray: TinyColor;
}

const getLightColors = ({ primary, secondary, success, warning, error, info, gray }: ThemeColors) => {
  // primary = primary.darken(3);
  // secondary = secondary.darken(5);
  // success = success.darken(10);
  // warning = warning.darken(10);
  // error = error.darken(5);
  // info = info.darken(10);
  // gray = gray.darken(10);

  return {
    primary: {
      light: primary.lighten(20).toHexString(),
      main: primary.toHexString(),
      dark: primary.darken(10).toHexString(),

      ...generatePalette(primary),
    },

    secondary: {
      light: secondary.lighten(10).toHexString(),
      main: secondary.toHexString(),
      dark: secondary.darken(10).toHexString(),

      ...generatePalette(secondary),
    },

    success: {
      light: success.lighten(10).toHexString(),
      main: success.toHexString(),
      dark: success.darken(10).toHexString(),

      ...generatePalette(success),
    },

    warning: {
      light: warning.lighten(10).toHexString(),
      main: warning.toHexString(),
      dark: warning.darken(10).toHexString(),

      ...generatePalette(warning),
    },

    error: {
      light: error.lighten(15).toHexString(),
      main: error.toHexString(),
      dark: error.darken(10).toHexString(),

      ...generatePalette(error),
    },

    info: {
      light: info.lighten(10).toHexString(),
      main: info.toHexString(),
      dark: info.darken(10).toHexString(),

      ...generatePalette(info),
    },

    gray: {
      light: gray.lighten(10).toHexString(),
      main: gray.toHexString(),
      dark: gray.darken(10).toHexString(),

      ...generatePalette(gray),
    },
  };
};

const getDarkColors = ({ primary, secondary, success, warning, error, info, gray }: ThemeColors) => {
  primary = primary.lighten(5);
  secondary = secondary.lighten(5);
  success = success.lighten(10);
  warning = warning.lighten(10);
  error = error.lighten(5);
  info = info.lighten(10);

  return {
    primary: {
      light: primary.lighten(10).toHexString(),
      main: primary.toHexString(),
      dark: primary.darken(10).toHexString(),

      ...generatePalette(primary),
    },

    // primaryLight: primary.lighten(10).toHexString(),
    // primaryMain: primary.toHexString(),
    // primaryDark: primary.darken(10).toHexString(),

    secondary: {
      light: secondary.lighten(10).toHexString(),
      main: secondary.toHexString(),
      dark: secondary.darken(10).toHexString(),

      ...generatePalette(secondary),
    },

    // secondaryLight: secondary.lighten(10).toHexString(),
    // secondaryMain: secondary.toHexString(),
    // secondaryDark: secondary.darken(10).toHexString(),

    success: {
      light: success.lighten(10).toHexString(),
      main: success.toHexString(),
      dark: success.darken(10).toHexString(),

      ...generatePalette(success),
    },

    // successLight: success.lighten(10).toHexString(),
    // successMain: success.toHexString(),
    // successDark: success.darken(10).toHexString(),

    warning: {
      light: warning.lighten(10).toHexString(),
      main: warning.toHexString(),
      dark: warning.darken(10).toHexString(),

      ...generatePalette(warning),
    },

    // warningLight: warning.lighten(10).toHexString(),
    // warningMain: warning.toHexString(),
    // warningDark: warning.darken(10).toHexString(),

    error: {
      light: error.lighten(10).toHexString(),
      main: error.toHexString(),
      dark: error.darken(10).toHexString(),

      ...generatePalette(error),
    },

    // errorLight: error.lighten(10).toHexString(),
    // errorMain: error.toHexString(),
    // errorDark: error.darken(10).toHexString(),

    info: {
      light: info.lighten(10).toHexString(),
      main: info.toHexString(),
      dark: info.darken(10).toHexString(),

      ...generatePalette(info),
    },

    // infoLight: info.lighten(10).toHexString(),
    // infoMain: info.toHexString(),
    // infoDark: info.darken(10).toHexString(),

    gray: {
      light: gray.lighten(10).toHexString(),
      main: gray.toHexString(),
      dark: gray.darken(10).toHexString(),

      ...generatePalette(gray),
    },

    // grayLight: gray.lighten(10).toHexString(),
    // grayMain: gray.toHexString(),
    // grayDark: gray.darken(10).toHexString(),
  };
};

export const getThemeTokens = (theme: 'light' | 'dark') => {
  const primary = new TinyColor('#cb2e6d');
  const secondary = new TinyColor('#2e93ab');
  const success = new TinyColor('#52c41a');
  const warning = new TinyColor('#fa8c16');
  const error = new TinyColor('#f5222d');
  const info = new TinyColor('#4096ff');
  const gray = new TinyColor('#bdbdbd');

  const defaultColors = getDefaultColors();
  let colors = getLightColors({ primary, secondary, success, warning, error, info, gray });

  if (theme === 'dark') {
    colors = getDarkColors({ primary, secondary, success, warning, error, info, gray });
  }

  return {
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

    // Set of colors
    ...defaultColors,

    // Default color
    ...colors,

    // Line
    lineWidth: '1',
    lineType: 'solid',

    // Motion
    motionUnit: '0.1',
    motionBase: '0',
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',

    // Radius
    borderRadius: '0',

    // Size
    sizeUnit: '4',
    sizeStep: '4',
    sizePopupArrow: '16',

    // Control Base
    controlHeight: '32',

    // zIndex
    zIndexBase: '0',
    zIndexPopupBase: '1000',
  };
};

// interface palette {
//   colorSomethingBg: string;
//   colorSomethingBgHover: string;
//   colorSomethingBorder: string;
//   colorSomethingBorderHover: string;
//   colorSomethingHover: string;
//   colorSomething: string;
//   colorSomethingActive: string;
//   colorSomethingTextHover: string;
//   colorSomethingText: string;
//   colorSomethingTextActive: string;
// }

// console.log(generatePalette('primary', new TinyColor('#cb2e6d')));
