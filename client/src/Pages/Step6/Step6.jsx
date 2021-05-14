import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const Step6 = ({ state, setState, savings }) => {
  const [saving, setSaving] = useState(state.userInfo.saving);

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Do you have any financial savings ?</Typography>
        </Grid>

        <Grid item xs={12}>
          {savings.map((savingsItem) => (
            <StyledButton
              key={uuidv4()}
              col={saving === savingsItem ? 'pur' : 'white'}
              onClick={() => setSaving(savingsItem)}
            >
              {savingsItem}
            </StyledButton>
          ))}
        </Grid>

        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default Step6;
