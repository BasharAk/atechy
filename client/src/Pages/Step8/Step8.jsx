import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import StyledFab from '../../Components/StyledButton/StyledButton';
////////////////////////////////////////////////////////////////////

const Step8 = ({ state, setState, educationList }) => {
  const [education, setEducation] = useState(state.userInfo.educationTime);

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        educationTime: education
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 12
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5'>
            What is your level of education ?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {educationList.map((educationItem) => (
            <StyledFab
              key={uuidv4()}
              variant='extended'
              col={education === educationItem ? 'pur' : 'white'}
              onClick={() => setEducation(educationItem)}
            >
              {educationItem}
            </StyledFab>
          ))}
        </Grid>

        <Grid item xs={12}>
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

export default Step8;
