import { useState } from 'react';

//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
////////////////////////////////////////////////////////////////////

const Step9 = ({ state, setState }) => {
  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
  };
  const {
    firstName,
    lastName,
    nationality,
    country,
    gender,
    dob,
    contact,
    email,
    visited,
    relatives,
    howLong,
    why,
    industries,
    interests,
    saving,
    education,
    educationTime
  } = state.userInfo;
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
                  Complete review your application
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container spacing={3}>
                  <Card>
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography color='primary' variant='h5'>
                            Basic information
                          </Typography>
                          <Grid item xs={12}>
                            <Grid container spacing={3}>
                              {[
                                {
                                  name: 'First name',
                                  value: firstName + '' + lastName
                                },
                                { name: 'Nationality', value: nationality },
                                {
                                  name: 'Country of residence',
                                  value: country
                                },
                                { name: 'Gender', value: gender },
                                { name: 'Date of birth', value: dob },
                                { name: 'Contact Number', value: contact },
                                { name: 'Email', value: email }
                              ].map((item) => (
                                <Grid item xs={12} md={4}>
                                  <Typography>
                                    {item.name + ' : ' + item.value}
                                  </Typography>
                                </Grid>
                              ))}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Box my={5}>
                  <Grid container spacing={3}>
                    <Card>
                      <CardContent>
                        <Grid item xs={12}>
                          <Typography>Have you ever visited Dubai?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <StyledFab
                            variant='extended'
                            col={visited ? 'pur' : 'white'}
                          >
                            {visited ? 'Yes' : 'No'}
                          </StyledFab>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            Do you have any friends or family in Dubai?
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <StyledFab
                            variant='extended'
                            col={relatives ? 'pur' : 'white'}
                          >
                            {relatives ? 'Yes' : 'No'}
                          </StyledFab>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            How long do you want to stay in stay in Dubai?
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <StyledFab variant='extended' col='pur'>
                            {howLong}
                          </StyledFab>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            Why do you want to come to Dubai ?
                          </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                          {why.map((item) => (
                            <Grid item xs={6} md={4}>
                              <StyledFab variant='extended' col='pur'>
                                {item}
                              </StyledFab>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            What industries would you prefer to work in?
                          </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                          {industries.map((item) => (
                            <Grid item xs={6} md={4}>
                              <StyledFab variant='extended' col='pur'>
                                {item}
                              </StyledFab>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            What industries would you prefer to work in?
                          </Typography>
                        </Grid>
                        <Grid container spacing={3}>
                          {industries.map((item) => (
                            <Grid item xs={6} md={4}>
                              <StyledFab variant='extended' col='pur'>
                                {item}
                              </StyledFab>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>What are your interests?</Typography>
                        </Grid>
                        <Grid container spacing={3}>
                          {interests.map((item) => (
                            <Grid item xs={6} md={4}>
                              <StyledFab variant='extended' col='pur'>
                                {item}
                              </StyledFab>
                            </Grid>
                          ))}
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            Do you have any financial savings?
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <StyledFab variant='extended' col='pur'>
                            {saving}
                          </StyledFab>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            What is your level of education?
                          </Typography>
                        </Grid>
                        <Grid item xs={6} md={4}>
                          <StyledFab variant='extended' col='pur'>
                            {education}
                          </StyledFab>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Box>
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
                    progress: state.progress - 12
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

export default Step9;
