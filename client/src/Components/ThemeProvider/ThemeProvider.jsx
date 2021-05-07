import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4C33E2'
    }
  },
  typography: {
    fontFamily: ['Sora', 'sans-serif', 'Arial', 'Roboto'].join(',')
  }
});

const AppTheme = ({ children }) => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default AppTheme;
