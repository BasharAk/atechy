import { useState } from 'react';
import availableInd from './industries';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step4 = ({ state, setState }) => {
  const [industries, setIndustries] = useState([]);
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
                  What industries would you prefer to work in ?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  {availableInd.map((indus) => (
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={check(indus) ? 'pur' : 'white'}
                        onClick={() => updateInd(indus)}
                      >
                        {indus}
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

export default Step4;
