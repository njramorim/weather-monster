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

export default defaultTheme;
