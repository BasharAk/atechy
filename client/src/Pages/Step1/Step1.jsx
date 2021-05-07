import { useState } from 'react';

//////////////////////////////////// Material UI components///////////
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid/Grid';
import Container from '@material-ui/core/Container/Container';
import StyledFab from '../../Components/StyledButton/StyledButton';
////////////////////////////////////////////////////////////////////

const Step1 = ({ state, setState }) => {
  const [firstName, setfirstName] = useState(state.userInfo.firstName);
  const [lastName, setLastName] = useState(state.userInfo.lastName);
  const [nationality, setNationality] = useState(state.userInfo.nationality);
  const [country, setCountry] = useState(state.userInfo.country);
  const [gender, setGender] = useState(state.userInfo.gender);
  const [dob, setDOB] = useState(state.userInfo.dob);
  const [contact, setContact] = useState(state.userInfo.contact);
  const [email, setEmail] = useState(state.userInfo.email);

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        firstName,
        lastName,
        nationality,
        country,
        gender,
        dob,
        contact,
        email
      },
      currentStep: state.currentStep + 1
    });
  };

  return (
    <>
      <Container m='auto'>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box
              display={{ xs: 'none', md: 'block' }}
              style={{
                backgroundColor: 'purple',
                height: '768px'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box display={{ xs: 'block', md: 'none' }}>
                  <Typography variant='h3'>digg</Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h5'>Apply now to work in Dubai</Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id='firstname'
                      label='First name'
                      variant='outlined'
                      value={firstName}
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id='lastname'
                      label='Last name'
                      variant='outlined'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      name='someDate'
                      label='Date of birth'
                      variant='outlined'
                      InputLabelProps={{ shrink: true, required: true }}
                      type='date'
                      onChange={() => setDOB()}
                      value={dob}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography>Gender</Typography>
                    <FormControl component='fieldset'>
                      <FormGroup aria-label='position' row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gender === 'male' ? true : false}
                              onChange={(e) => setGender('male')}
                              name='Male'
                              color='primary'
                            />
                          }
                          label='Male'
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gender === 'female' ? true : false}
                              onChange={(e) => setGender('female')}
                              name='female'
                              color='primary'
                            />
                          }
                          label='Female'
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={gender === 'other' ? true : false}
                              onChange={(e) => setGender('other')}
                              name='other'
                              color='primary'
                            />
                          }
                          label='Other'
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      style={{ marginTop: '10px', marginBottom: '15px' }}
                    >
                      <InputLabel id='nationality'>Nationality</InputLabel>
                      <Select
                        labelId='nationality'
                        id='nationality'
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                        defaultValue='Nationality'
                      >
                        <MenuItem value={'usa'}>USA</MenuItem>
                        <MenuItem value={'usa'}>UK</MenuItem>
                        <MenuItem value={'uae'}>UAE</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl
                      style={{ marginTop: '10px', marginBottom: '15px' }}
                    >
                      <InputLabel id='country'>Country</InputLabel>
                      <Select
                        labelId='country'
                        id='country'
                        defaultValue='Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <MenuItem value={'United States'}>
                          United States
                        </MenuItem>
                        <MenuItem value={'United Kingdom'}>
                          United Kingdom
                        </MenuItem>
                        <MenuItem value={'United Arab Emirates'}>
                          United Arab Emirates
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h6'>How we can contact you?</Typography>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id='contact'
                      label='Contact number:'
                      variant='outlined'
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id='email'
                      label='Email address:'
                      variant='outlined'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <StyledFab onClick={(e) => confirmStep(e)} variant='extended'>
                  Apply Now
                </StyledFab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Step1;
