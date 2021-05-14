import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
//////////////////////////////////// Material UI components///////////
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const Step2 = ({ state, setState, howLongList }) => {
  const [visited, setVisited] = useState(state.userInfo.visited);
  const [relatives, setRelatives] = useState(state.userInfo.relatives);
  const [howLong, setHowLong] = useState(state.userInfo.howLong);

  const confirmStep = (e) => {
    ///////////////////////////
    //validators should be here
    ///////////////////////////
    setState({
      ...state,
      userInfo: {
        ...state.userInfo,
        visited,
        relatives,
        howLong
      },
      currentStep: state.currentStep + 1,
      progress: state.progress + 11
    });
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>Have you ever visited dubai</Typography>
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            col={visited ? 'white' : 'pur'}
            onClick={() => setVisited(false)}
          >
            no
          </StyledButton>
          <StyledButton
            col={visited ? 'pur' : 'white'}
            onClick={() => setVisited(true)}
          >
            yes
          </StyledButton>
        </Grid>

        <Grid item xs={12}>
          <Typography>Do you have any friends or family in Dubai?</Typography>
        </Grid>

        <Grid item xs={12}>
          <StyledButton
            col={relatives ? 'white' : 'pur'}
            onClick={() => setRelatives(false)}
          >
            no
          </StyledButton>
          <StyledButton
            col={relatives ? 'pur' : 'white'}
            onClick={() => setRelatives(true)}
          >
            yes
          </StyledButton>
        </Grid>

        <Grid item xs={12}>
          <Typography>How long do you want to stay in Dubai ?</Typography>
        </Grid>

        <Grid item xs={12}>
          {howLongList.map((long) => (
            <StyledButton
              key={uuidv4()}
              col={long === howLong ? 'pur' : 'white'}
              onClick={() => setHowLong(long)}
            >
              {long}
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

export default Step2;
