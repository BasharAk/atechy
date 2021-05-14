import { useState, useEffect } from 'react';
import switchPages from './utils/switchPages';
import axios from 'axios';
import MainPageContainer from './Pages/MainPageContainer/MainPageContainer';

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
      howLong: 'Up To 3 months',
      why: [],
      industries: [],
      interests: [],
      saving: 'No savings',
      education: 'High school or less',
      educationTime: 'Right now'
    }
  });
  const [fetchedData, setFetchedData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
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
      const howLongList = await axios.get('http://localhost:3001/howLongList');

      setFetchedData({
        whyList: whyList.data,
        industries: industries.data,
        interests: interests.data,
        savings: savings.data,
        educationList: educationList.data,
        educationList2: educationList2.data,
        howLongList: howLongList.data
      });
    };
    fetchData();
  }, []);

  return (
    <>
      <MainPageContainer
        progress={state.progress}
        currentStep={state.currentStep}
      >
        {switchPages(state, setState, fetchedData)}
      </MainPageContainer>
    </>
  );
};

export default App;
