import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
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
          <Typography>What is your level of education ?</Typography>
        </Grid>

        <Grid item xs={12}>
          {educationList.map((educationItem) => (
            <StyledButton
              key={uuidv4()}
              col={education === educationItem ? 'pur' : 'white'}
              onClick={() => setEducation(educationItem)}
            >
              {educationItem}
            </StyledButton>
          ))}
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            onClick={() =>
              setState({
                ...state,
                currentStep: state.currentStep - 1,
                progress: state.progress - 11
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

export default Step8;
