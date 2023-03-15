import {ThemeProvider, createTheme} from '@rneui/themed';

import theme from './app/config/theme';
import RouteApp from './app/route/RouteApp';

export default App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouteApp />
    </ThemeProvider>
  );
};