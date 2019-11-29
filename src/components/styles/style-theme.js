// @flow

const colors = {
  eucalyptus: '#4FC6A5',
  whiteSmoke: '#F7F0F5',
  jordyBlue: '#8EB8E5',
  eletricBlue: '#0C85DE',
  brandeisBlue: '#0070FF',
  dymGray: '#696D7D',
  platinum: '#EDE3E4',
  red: '#ED1C24',
  saffron: '#EAC435'
};

const defaultTheme = {
  colors: {
    dark: colors.platinum,
    extraDark: colors.dymGray,
    light: colors.whiteSmoke,
    highlight: colors.jordyBlue,
    highStrong: colors.eletricBlue,
    cleanColor: colors.eucalyptus,
    danger: colors.red,
    alert: colors.saffron
  },
  text: {
    size: '1.6rem',
    color: colors.dymGray,
    link: colors.brandeisBlue,
    highlight: colors.eucalyptus
  },
  bodyFontSize: '62.5%',
  borderRadius: {
    max: '4rem',
    min: '2rem'
  },
  margin: {
    max: '6rem',
    medium: '3rem',
    min: '1.5rem'
  },
  padding: {
    max: '4rem',
    min: '2rem'
  }
};

export const anotherRandomTheme = {
  colors: {
    dark: '#333745',
    extraDark: '#000000',
    light: '#FFFFFF',
    highlight: '#E63462',
    highStrong: '#FE5F55',
    cleanColor: '#C7EFCF',
    danger: 'red',
    alert: 'yellow'
  },
  text: {
    size: '1.5rem',
    color: '#E63462',
    link: '#FE5F55',
    highlight: '#C7EFCF'
  },
  bodyFontSize: '62.5%',
  borderRadius: {
    max: '6rem',
    min: '4rem'
  },
  margin: {
    max: '5rem',
    medium: '2.5rem',
    min: '1rem'
  },
  padding: {
    max: '3rem',
    min: '1.5rem'
  }
};

export default defaultTheme;
