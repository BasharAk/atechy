import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';

const Step4 = ({ state, setState, availableInd }) => {
  const [industries, setIndustries] = useState(state.userInfo.industries);
  const check = (item) => {
    return industries.includes(item);
  };

  const updateInd = (item) => {
    if (!check(item)) {
      const arr = [...industries, item];
      setIndustries(arr);
    } else {
      const arr = industries.filter((ind) => ind !== item);
      setIndustries(arr);
    }
  };

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        industries: industries
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Box p xs={12}>
        <Typography>What industries would you prefer to work in ?</Typography>
      </Box>

      <Box p xs={12}>
        <Box
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {availableInd.map((indus) => (
            <StyledButton
              key={uuidv4()}
              col={check(indus) ? 'pur' : 'white'}
              onClick={() => updateInd(indus)}
            >
              {indus}
            </StyledButton>
          ))}
        </Box>
      </Box>

      <Box p xs={12}>
        <StyledButton
          onClick={() =>
            setState({
              ...state,
              currentStep: state.currentStep - 1,
              progress: state.progress - 11
            })
          }
        >
          Back
        </StyledButton>
        <StyledButton col='pur' onClick={(e) => confirmStep(e)}>
          Next
        </StyledButton>
      </Box>
    </>
  );
};

export default Step4;
