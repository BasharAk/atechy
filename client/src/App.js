import { useState, useEffect } from 'react';
import switchPages from './utils/switchPages';
import ThemeProvider from './Components/ThemeProvider/ThemeProvider';
import axios from 'axios';

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
  const [fetchedData, setFetchedData] = useState('');

  useEffect(async () => {
    const whyList = await axios.get('http://localhost:3001/whyList');
    const industries = await axios.get('http://localhost:3001/industries');
    const interests = await axios.get('http://localhost:3001/interests');
    const savings = await axios.get('http://localhost:3001/savings');
    const educationList = await axios.get(
      'http://localhost:3001/educationList'
    );
    const educationList2 = await axios.get(
      'http://localhost:3001/educationTimeList'
    );

    setFetchedData({
      whyList: whyList.data,
      industries: industries.data,
      interests: interests.data,
      savings: savings.data,
      educationList: educationList.data,
      educationList2: educationList2.data
    });
  }, []);

  return (
    <>
      <ThemeProvider>{switchPages(state, setState, fetchedData)}</ThemeProvider>
    </>
  );
};

export default App;
