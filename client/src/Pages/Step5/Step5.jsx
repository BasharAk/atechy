import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';

const Step5 = ({ state, setState, availableInt }) => {
  const [interests, setInterests] = useState(state.userInfo.interests);
  const check = (item) => {
    return interests.includes(item);
  };

  const updateInt = (item) => {
    if (!check(item)) {
      const arr = [...interests, item];
      setInterests(arr);
    } else {
      const arr = interests.filter((int) => int !== item);
      setInterests(arr);
    }
  };

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        interests: interests
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Box p xs={12}>
        <Typography>What are your interests ?</Typography>
      </Box>

      <Box p xs={12}>
        {availableInt.map((int) => (
          <StyledButton
            key={uuidv4()}
            col={check(int) ? 'pur' : 'white'}
            onClick={() => updateInt(int)}
          >
            {int}
          </StyledButton>
        ))}
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

export default Step5;
