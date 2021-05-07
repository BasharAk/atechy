import { useState } from 'react';
import switchPages from './utils/switchPages';
import ThemeProvider from './Components/ThemeProvider/ThemeProvider';

const App = () => {
  const [state, setState] = useState({
    currentStep: 1,
    progress: 11,
    userInfo: {
      firstName: '',
      lastName: '',
      nationality: '',
      country: '',
      gender: '',
      dob: '',
      contact: '',
      email: '',
      visited: false,
      relatives: false,
      howLong: 3,
      why: [],
      industries: [],
      interests: [],
      saving: '',
      education: '',
      educationTime: ''
    }
  });

  return (
    <>
      <ThemeProvider>{switchPages(state, setState)}</ThemeProvider>
    </>
  );
};

export default App;
