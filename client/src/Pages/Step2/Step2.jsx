import { useState } from 'react';

//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step2 = ({ state, setState }) => {
  const [visited, setVisited] = useState(state.userInfo.visited);
  const [relatives, setRelatives] = useState(state.userInfo.relatives);
  const [howLong, setHowLong] = useState(state.userInfo.howLong);

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        visited,
        relatives,
        howLong
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
                  Have you ever visited dubai
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <StyledFab
                        variant='extended'
                        col={visited ? 'white' : 'pur'}
                        onClick={() => setVisited(false)}
                      >
                        no
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledFab
                        variant='extended'
                        col={visited ? 'pur' : 'white'}
                        onClick={() => setVisited(true)}
                      >
                        yes
                      </StyledFab>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  Do you have any friends or family in Dubai?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <StyledFab
                        variant='extended'
                        col={relatives ? 'white' : 'pur'}
                        onClick={() => setRelatives(false)}
                      >
                        no
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6}>
                      <StyledFab
                        variant='extended'
                        col={relatives ? 'pur' : 'white'}
                        onClick={() => setRelatives(true)}
                      >
                        yes
                      </StyledFab>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant='h5'>
                  How long do you want to stay in Dubai ?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item xs={12}>
                  <Grid container spacing={3}>
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={howLong === 3 ? 'pur' : 'white'}
                        onClick={() => setHowLong(3)}
                      >
                        Up To 3 months
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={howLong === 6 ? 'pur' : 'white'}
                        onClick={() => setHowLong(6)}
                      >
                        3 To 6 months
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={howLong === 12 ? 'pur' : 'white'}
                        onClick={() => setHowLong(12)}
                      >
                        6 To 12 months
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={howLong === 24 ? 'pur' : 'white'}
                        onClick={() => setHowLong(24)}
                      >
                        +12 months
                      </StyledFab>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <StyledFab
                        variant='extended'
                        col={howLong === 48 ? 'pur' : 'white'}
                        onClick={() => setHowLong(48)}
                      >
                        +3 years
                      </StyledFab>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
        </Grid>
      </Container>
    </>
  );
};

export default Step2;
