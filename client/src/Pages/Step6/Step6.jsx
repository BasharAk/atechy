import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';

const Step6 = ({ state, setState, savings }) => {
  const [saving, setSaving] = useState(state.userInfo.saving);

  const confirmStep = (e) => {
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        saving: saving
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Box p xs={12}>
        <Typography>Do you have any financial savings ?</Typography>
      </Box>

      <Box p xs={12}>
        {savings.map((savingsItem) => (
          <StyledButton
            key={uuidv4()}
            col={saving === savingsItem ? 'pur' : 'white'}
            onClick={() => setSaving(savingsItem)}
          >
            {savingsItem}
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

export default Step6;
