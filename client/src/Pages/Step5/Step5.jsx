import { useState } from 'react';
import availableInt from './interests';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step5 = ({ state, setState }) => {
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
    ///////////////////////////
    //validators should be here
    ///////////////////////////
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
                <Typography variant='h5'>What are your interests ?</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {availableInt.map((int) => (
                    <Grid item xs={6} md={4} key={uuidv4()}>
                      <StyledFab
                        variant='extended'
                        col={check(int) ? 'pur' : 'white'}
                        onClick={() => updateInt(int)}
                      >
                        {int}
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

export default Step5;
