import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import StyledFab from '../../Components/StyledButton/StyledButton';
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
          <Typography variant='h5'>What are your interests ?</Typography>
        </Grid>

        <Grid item xs={12}>
          {availableInt.map((int) => (
            <StyledFab
              key={uuidv4()}
              variant='extended'
              col={check(int) ? 'pur' : 'white'}
              onClick={() => updateInt(int)}
            >
              {int}
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

export default Step5;
