import {createTheme} from '@rneui/themed';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default theme = createTheme({
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
  components: {
    Text: props => ({
      style: {
        fontFamily: props.bold ?  'Lato-Bold' : 'Lato-Regular',
        color: '#fff'
      },
    }),
    Skeleton: {
        style: {
            borderRadius: 15
        },
        animation: "wave"
    }
  },
});
