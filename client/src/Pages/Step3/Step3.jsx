import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import StyledFab from '../../Components/StyledButton/StyledButton';

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
          <Typography variant='h5'>
            Why do you want to come to Dubai?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {whyList.map((why) => (
            <StyledFab
              key={uuidv4()}
              variant='extended'
              col={check(why) ? 'pur' : 'white'}
              onClick={() => updateWhy(why)}
            >
              {why}
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

export default Step3;
