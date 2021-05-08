import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Box from '@material-ui/core/Box/Box';
import StyledFab from '../../Components/StyledButton/StyledButton';
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
          <Typography variant='h5'>
            What industries would you prefer to work in ?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box
            style={{
              display: 'flex',
              flexWrap: 'wrap'
            }}
          >
            {availableInd.map((indus) => (
              <StyledFab
                key={uuidv4()}
                variant='extended'
                col={check(indus) ? 'pur' : 'white'}
                onClick={() => updateInd(indus)}
              >
                {indus}
              </StyledFab>
            ))}
          </Box>
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

export default Step4;
