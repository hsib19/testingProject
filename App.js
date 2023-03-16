import {ThemeProvider} from '@rneui/themed';
import { Provider } from 'react-redux';

import theme from './app/config/theme';
import configureStore from './app/redux/configureStore';
import RouteApp from './app/route/RouteApp';

export default App = () => {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <RouteApp />
      </ThemeProvider>
    </Provider>
  );
};