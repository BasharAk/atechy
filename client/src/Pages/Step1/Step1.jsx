import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
//////////////////////////////////// Material UI components///////////
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography/Typography';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid/Grid';
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
  const [err, setErr] = useState('');

  const confirmStep = (e) => {
    if (!firstName) {
      setErr('Please enter your first name');
      return;
    }
    if (!lastName) {
      setErr('Please enter your last name');
      return;
    }
    if (!nationality) {
      setErr('Please select your nationality');
      return;
    }
    if (!gender) {
      setErr('Please select your gender');
      return;
    }
    if (!country) {
      setErr('Please select your country');
      return;
    }
    if (!dob) {
      setErr('Please enter your date of birth');
      return;
    }
    if (!isMobilePhone(contact)) {
      setErr('Please enter a valid phone number');
      return;
    }
    if (!isEmail(email)) {
      setErr('Please enter valid Email address');
      return;
    } else {
      setState({
        ...state,
        currentStep: state.currentStep + 1,
        progress: state.progress + 11,
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
        }
      });
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5'>Apply now to work in Dubai</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='firstname'
            label='First name'
            variant='outlined'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='lastname'
            label='Last name'
            variant='outlined'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            name='someDate'
            label='Date of birth'
            variant='outlined'
            InputLabelProps={{ shrink: true, required: true }}
            type='date'
            onChange={(e) => setDOB(e.target.value)}
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

        <Grid item xs={12} md={6}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel id='nationality'>Nationality</InputLabel>
            <Select
              style={{ width: '100%' }}
              labelId='nationality'
              id='nationality'
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            >
              <MenuItem value={'United States'}>United States</MenuItem>
              <MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
              <MenuItem value={'United Arab Emirates'}>
                United Arab Emirates
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl style={{ width: '100%' }}>
            <InputLabel id='country'>Country</InputLabel>
            <Select
              fullWidth
              labelId='country'
              id='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <MenuItem value={'United States'}>United States</MenuItem>
              <MenuItem value={'United Kingdom'}>United Kingdom</MenuItem>
              <MenuItem value={'United Arab Emirates'}>
                United Arab Emirates
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h6'>How we can contact you?</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id='contact'
            label='Contact number:'
            variant='outlined'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            type='email'
            fullWidth
            id='email'
            label='Email address:'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>

        {err ? (
          <Grid item xs={12}>
            <Typography color='error'>{err}</Typography>
          </Grid>
        ) : null}

        <Grid item xs={12}>
          <StyledFab
            col='pur'
            onClick={(e) => confirmStep(e)}
            variant='extended'
          >
            Apply Now
          </StyledFab>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;
