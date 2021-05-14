import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Card from '../../Components/Card/Card';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const Step9 = ({ state, setState }) => {
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
    education
  } = state.userInfo;

  const confirmStep = (e) => {
    localStorage.setItem('mydata', JSON.stringify(state.userInfo));
    const storedData = JSON.parse(localStorage.getItem('mydata'));
    console.log('storedData:', storedData);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Complete review your application</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Typography color='#4D33E2'>Basic information</Typography>
            <br />
            <Box>
              {[
                {
                  name: 'Name',
                  value: firstName + ' ' + lastName
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
                <div key={uuidv4()}>
                  <Typography key={uuidv4()}>
                    {item.name + ' : ' + item.value}
                  </Typography>
                </div>
              ))}
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Typography color='#4D33E2'>Questionnaire</Typography>
            <br />
            <Typography>Have you ever visited Dubai?</Typography>
            <StyledButton col='pur'>{visited ? 'Yes' : 'No'}</StyledButton>
            <Typography>Do you have any friends or family in Dubai?</Typography>
            <StyledButton col='pur'>{relatives ? 'Yes' : 'No'}</StyledButton>
            <Typography>
              How long do you want to stay in stay in Dubai?
            </Typography>
            <StyledButton col='pur'>{howLong}</StyledButton>
            {why.length > 0 ? (
              <>
                <Typography>Why do you want to come to Dubai ?</Typography>
                <Box>
                  {why.map((item) => (
                    <StyledButton col='pur' key={uuidv4()}>
                      {item}
                    </StyledButton>
                  ))}
                </Box>
              </>
            ) : null}
            {industries.length > 0 ? (
              <>
                <Typography>
                  What industries would you prefer to work in?
                </Typography>
                <Box>
                  {industries.map((item) => (
                    <StyledButton col='pur' key={uuidv4()}>
                      {item}
                    </StyledButton>
                  ))}
                </Box>
              </>
            ) : null}
            {interests.length > 0 ? (
              <>
                <Typography>What are your interests?</Typography>
                <Box>
                  {interests.map((item) => (
                    <StyledButton col='pur' key={uuidv4()}>
                      {item}
                    </StyledButton>
                  ))}
                </Box>
              </>
            ) : null}
            <Typography>What is your level of education?</Typography>
            <StyledButton col='pur'>{education}</StyledButton>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            onClick={() =>
              setState({
                ...state,
                currentStep: state.currentStep - 1,
                progress: state.progress - 12
              })
            }
          >
            Back
          </StyledButton>
          <StyledButton col='pur' onClick={(e) => confirmStep(e)}>
            Next
          </StyledButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Step9;
