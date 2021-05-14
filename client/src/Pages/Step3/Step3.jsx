import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const Step3 = ({ state, setState, whyList }) => {
  const [why, setWhy] = useState(state.userInfo.why);

  const check = (item) => {
    return why.includes(item);
  };

  const updateWhy = (item) => {
    if (!check(item)) {
      const arr = [...why, item];
      setWhy(arr);
    } else {
      const arr = why.filter((ind) => ind !== item);
      setWhy(arr);
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
        why: why
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Why do you want to come to Dubai?</Typography>
        </Grid>

        <Grid item xs={12}>
          {whyList.map((why) => (
            <StyledButton
              key={uuidv4()}
              col={check(why) ? 'pur' : 'white'}
              onClick={() => updateWhy(why)}
            >
              {why}
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

export default Step3;
