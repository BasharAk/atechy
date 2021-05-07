import { useState } from 'react';
import savings from './savings';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step6 = ({ state, setState }) => {
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
      <Container m='auto'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box display={{ xs: 'block', md: 'none' }}>
              <Typography variant='h3'>digg</Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <BorderLinearProgress
              variant='determinate'
              value={state.progress}
            />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  Do you have any financial savings ?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {savings.map((savingsItem) => (
                    <Grid item xs={6} md={4} key={uuidv4()}>
                      <StyledFab
                        variant='extended'
                        col={saving === savingsItem ? 'pur' : 'white'}
                        onClick={() => setSaving(savingsItem)}
                      >
                        {savingsItem}
                      </StyledFab>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <br />
          <br />
          <br />
          <br />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={10}>
            <Grid item xs={6} md={3}>
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
            </Grid>
            <Grid item xs={6} md={3}>
              <StyledFab
                col='pur'
                onClick={(e) => confirmStep(e)}
                variant='extended'
              >
                Next
              </StyledFab>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Step6;
