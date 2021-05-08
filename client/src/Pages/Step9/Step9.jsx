import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import StyledFab from '../../Components/StyledButton/StyledButton';
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
          <Typography variant='h5'>Complete review your application</Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography color='primary' variant='h5'>
                Basic information
              </Typography>
              <Box>
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
                  <Typography key={uuidv4()}>
                    {item.name + ' : ' + item.value}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography>Have you ever visited Dubai?</Typography>
              <StyledFab variant='extended' col={visited ? 'pur' : 'white'}>
                {visited ? 'Yes' : 'No'}
              </StyledFab>
              <Typography>
                Do you have any friends or family in Dubai?
              </Typography>
              <StyledFab variant='extended' col={relatives ? 'pur' : 'white'}>
                {relatives ? 'Yes' : 'No'}
              </StyledFab>
              <Typography>
                How long do you want to stay in stay in Dubai?
              </Typography>
              <StyledFab variant='extended' col='pur'>
                {howLong}
              </StyledFab>
              {why.length > 0 ? (
                <>
                  <Typography>Why do you want to come to Dubai ?</Typography>
                  <Box>
                    {why.map((item) => (
                      <StyledFab variant='extended' col='pur' key={uuidv4()}>
                        {item}
                      </StyledFab>
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
                      <StyledFab variant='extended' col='pur' key={uuidv4()}>
                        {item}
                      </StyledFab>
                    ))}
                  </Box>
                </>
              ) : null}
              {interests.length > 0 ? (
                <>
                  <Typography>What are your interests?</Typography>
                  <Box>
                    {interests.map((item) => (
                      <StyledFab variant='extended' col='pur' key={uuidv4()}>
                        {item}
                      </StyledFab>
                    ))}
                  </Box>
                </>
              ) : null}
              <Typography>What is your level of education?</Typography>
              <StyledFab variant='extended' col='pur'>
                {education}
              </StyledFab>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
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
          <StyledFab
            col='pur'
            onClick={(e) => confirmStep(e)}
            variant='extended'
          >
            Next
          </StyledFab>
        </Grid>
      </Grid>
    </>
  );
};

export default Step9;
