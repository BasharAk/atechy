import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const Step5 = ({ state, setState, availableInt }) => {
  const [interests, setInterests] = useState(state.userInfo.interests);
  const check = (item) => {
    return interests.includes(item);
  };

  const updateInt = (item) => {
    if (!check(item)) {
      const arr = [...interests, item];
      setInterests(arr);
    } else {
      const arr = interests.filter((int) => int !== item);
      setInterests(arr);
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
        interests: interests
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>What are your interests ?</Typography>
        </Grid>

        <Grid item xs={12}>
          {availableInt.map((int) => (
            <StyledButton
              key={uuidv4()}
              col={check(int) ? 'pur' : 'white'}
              onClick={() => updateInt(int)}
            >
              {int}
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

export default Step5;
