import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#B32855',
    background: '#121212',
    white: '#E7E7E7',
    grey0: '#212121',
    grey1: '#888888',
  },
  mode: 'dark',
});

module.exports = {
    theme
}