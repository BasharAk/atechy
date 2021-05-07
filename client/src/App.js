import { useState } from 'react';
import switchPages from './utils/switchPages';
import ThemeProvider from './Components/ThemeProvider/ThemeProvider';

const App = () => {
  const [state, setState] = useState({
    currentStep: 1,
    userInfo: {
      firstName: '',
      lastName: '',
      nationality: '',
      country: '',
      gender: '',
      dob: '',
      contact: '',
      email: ''
    }
  });

  return (
    <>
      <ThemeProvider>{switchPages(state, setState)}</ThemeProvider>
    </>
  );
};

export default App;
