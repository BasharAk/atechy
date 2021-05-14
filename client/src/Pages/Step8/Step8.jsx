import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';

const Step8 = ({ state, setState, educationList }) => {
  const [education, setEducation] = useState(state.userInfo.educationTime);

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        educationTime: education
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 12
    });
  };

  return (
    <>
      <Box p xs={12}>
        <Typography>What is your level of education ?</Typography>
      </Box>

      <Box p xs={12}>
        {educationList.map((educationItem) => (
          <StyledButton
            key={uuidv4()}
            col={education === educationItem ? 'pur' : 'white'}
            onClick={() => setEducation(educationItem)}
          >
            {educationItem}
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

export default Step8;
