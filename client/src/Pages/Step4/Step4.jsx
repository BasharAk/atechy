import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
////////////////////////////////////////////////////////////////////

const Step4 = ({ state, setState, availableInd }) => {
  const [industries, setIndustries] = useState(state.userInfo.industries);
  const check = (item) => {
    return industries.includes(item);
  };

  const updateInd = (item) => {
    if (!check(item)) {
      const arr = [...industries, item];
      setIndustries(arr);
    } else {
      const arr = industries.filter((ind) => ind !== item);
      setIndustries(arr);
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
        industries: industries
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>What industries would you prefer to work in ?</Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            {availableInd.map((indus) => (
              <StyledButton
                key={uuidv4()}
                col={check(indus) ? 'pur' : 'white'}
                onClick={() => updateInd(indus)}
              >
                {indus}
              </StyledButton>
            ))}
          </Box>
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

export default Step4;
