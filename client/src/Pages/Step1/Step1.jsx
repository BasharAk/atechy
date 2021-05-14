import { useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Input from '../../Components/Input/Input';
import DropDown from '../../Components/Input/DropDown';
import CheckBox from '../../Components/Input/CheckBox';

//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
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
          <Typography size={1.375}>Apply now to work in Dubai</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Input setValue={setfirstName} value={firstName} label='First name' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input setValue={setLastName} value={lastName} label='Last name' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input
            setValue={setDOB}
            value={dob}
            type='date'
            label='Date of birth'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography size={0.875}>Gender</Typography>
          <CheckBox
            value={gender}
            setValue={setGender}
            options={['Male', 'Female', 'Other']}
            label='Gender'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <DropDown
            setValue={setNationality}
            value={nationality}
            options={['United States', 'United Arab Emirates', 'Germany']}
            label='Nationality'
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <DropDown
            value={country}
            setValue={setCountry}
            options={['United States', 'United Arab Emirates', 'Germany']}
            label='Country'
          />
        </Grid>

        <Grid item xs={12}>
          <Typography>How we can contact you?</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Input setValue={setContact} value={contact} label='Contact number' />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input setValue={setEmail} value={email} label='Email address' />
        </Grid>

        {err ? (
          <Grid item xs={12}>
            <Typography color='red'>{err}</Typography>
          </Grid>
        ) : null}

        <Grid item xs={12}>
          <StyledButton col='pur' onClick={(e) => confirmStep(e)}>
            Apply Now
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Step1;
