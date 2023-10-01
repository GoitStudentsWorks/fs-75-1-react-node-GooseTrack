import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  textPrimary: '#111111',
  textPrimaryTransparent: 'rgba(17, 17, 17, 0.15)',
  textPrimaryLight: '#343434',
  textPrimaryLightTransparent: 'rgba(52, 52, 52, 0.5)',
  textModalTransparent: 'rgba(52, 52, 52, 0.8)',
  textSecondary: '#171820',
  bgPrimary: '#ffffff',
  bgSidebar: '#ffffff',
  bgSecondary: '#F7F6F9',
  bgToggleActive: '#CAE8FF',
  bgToggleUnactive: '#E3F3FF',
  toggleStroke: 'rgba(62, 133, 243, 0.20)',
  accentPrimary: '#3E85F3',
  accentPrimaryHover: '#2B78EF',
  accentSecondary: '#E3F3FF',
  stroke: 'rgba(220, 227, 229, 0.5)',
  userProfileLabel: '#111111',
  gooseTrackIconLabel: '#3E85F3',
  iconEnabled: '#343434',
  iconDisabled: '#DCE3E5',
  strokeTransparant: 'rgba(220, 227, 229, 0.8)',
  accentRed: '#EA3D65',
  accentRedLight: '#FFD2DD',
  accentYellow: '#F3B249',
  accentYellowLight: '#FCF0D4',
  accentBlue: '#3E85F3',
  accentBlueLight: '#CEEEFD',
  white: '#ffffff',
  star: '#FFAC33',
  starUnactive: '#CEC9C1',
  error: '#E74A3B',
  success: '#3CBC81',
  shadowColor: 'rgba(17, 17, 17, 0.05)',

  gradients: {
    red: 'linear-gradient(0deg, #FFD2DD 0%, rgba(255, 210, 221, 0.00) 96.87%)',
    blue: 'linear-gradient(0deg, #3E85F3 0%, rgba(62, 133, 243, 0.00) 100%)',
  },
  transitions: {
    time: '0.3s',
    cubic: 'linear',
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  textPrimary: '#ffffff',
  textPrimaryTransparent: 'rgba(255, 255, 255, 0.15)',
  textPrimaryLight: '#ffffff',
  textPrimaryLightTransparent: '#ffffff',
  textModalTransparent: 'rgba(250, 250, 250, 0.30)',
  textSecondary: '#ffffff',
  bgPrimary: '#171820',
  bgSidebar: '#13151A',
  bgSecondary: '#21222C',
  bgToggleActive: '#3E85F3',
  bgToggleUnactive: '#21222C',
  toggleStroke: 'rgba(62, 133, 243, 0.20)',
  accentPrimary: '#3E85F3',
  accentPrimaryHover: '#2B78EF',
  accentSecondary: '#3E85F3',
  stroke: '#13151A',
  userProfileLabel: 'rgba(250, 250, 250, 0.30)',
  gooseTrackIconLabel: '#E3F3FF',
  iconEnabled: '#FFFFFF',
  iconDisabled: 'rgba(255, 255, 255, 0.15)',
  strokeTransparant: 'rgba(255, 255, 255, 0.15)',
  accentRed: '#EA3D65',
  accentRedLight: '#FFD2DD',
  accentYellow: '#F3B249',
  accentYellowLight: '#FCF0D4',
  accentBlue: '#3E85F3',
  accentBlueLight: '#CEEEFD',
  white: '#ffffff',
  starUnactive: '#353647',
  error: '#E74A3B',
  success: '#3CBC81',
  shadowColor: 'rgba(17, 17, 17, 0.05)',

  gradients: {
    red: 'linear-gradient(0deg, #FFD2DD 0%, rgba(255, 210, 221, 0.00) 96.87%)',
    blue: 'linear-gradient(0deg, #3E85F3 0%, rgba(62, 133, 243, 0.00) 100%)',
  },

  transitions: {
    time: '0.3s',
    cubic: 'linear',
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
  },
});
