import { useState } from 'react';

//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step3 = ({ state, setState }) => {
  const [why, setWhy] = useState([]);

  const check = (item) => {
    return why.includes(item);
  };

  const updateWhy = (item) => {
    if (!check(item)) {
      const arr = [...why, item];
      setWhy(arr);
    } else {
      const arr = why.filter((ind) => ind !== item);
      setWhy(arr);
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
        why: why
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
                  Why do you want to come to Dubai?
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('lifeStyle') ? 'pur' : 'white'}
                      onClick={() => updateWhy('lifeStyle')}
                    >
                      Life Style
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('workOp') ? 'pur' : 'white'}
                      onClick={() => updateWhy('workOp')}
                    >
                      Work
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('edu') ? 'pur' : 'white'}
                      onClick={() => updateWhy('edu')}
                    >
                      Education
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('fin') ? 'pur' : 'white'}
                      onClick={() => updateWhy('fin')}
                    >
                      Finance
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('tour') ? 'pur' : 'white'}
                      onClick={() => updateWhy('tour')}
                    >
                      Tourism
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('family') ? 'pur' : 'white'}
                      onClick={() => updateWhy('family')}
                    >
                      Family
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('bus') ? 'pur' : 'white'}
                      onClick={() => updateWhy('bus')}
                    >
                      Buisness
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('secuirty') ? 'pur' : 'white'}
                      onClick={() => updateWhy('secuirty')}
                    >
                      Secuirty
                    </StyledFab>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <StyledFab
                      variant='extended'
                      col={check('culture') ? 'pur' : 'white'}
                      onClick={() => updateWhy('culture')}
                    >
                      Culture
                    </StyledFab>
                  </Grid>
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

export default Step3;
