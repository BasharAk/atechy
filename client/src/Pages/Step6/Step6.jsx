import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import StyledFab from '../../Components/StyledButton/StyledButton';
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
          <Typography variant='h5'>
            Do you have any financial savings ?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {savings.map((savingsItem) => (
            <StyledFab
              key={uuidv4()}
              variant='extended'
              col={saving === savingsItem ? 'pur' : 'white'}
              onClick={() => setSaving(savingsItem)}
            >
              {savingsItem}
            </StyledFab>
          ))}
        </Grid>

        <Grid item xs={12}>
          <StyledFab
            variant='extended'
            onClick={() =>
              setState({
                ...state,
                currentStep: state.currentStep - 1,
                progress: state.progress - 11
              })
            }
          >
            Back
          </StyledFab>
          <StyledFab
            col='pur'
            onClick={(e) => confirmStep(e)}
            variant='extended'
          >
            Next
          </StyledFab>
        </Grid>
      </Grid>
    </>
  );
};

export default Step6;
