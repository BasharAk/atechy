import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
//////////////////////////////////// Material UI components///////////
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import StyledFab from '../../Components/StyledButton/StyledButton';
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
          <Typography variant='h5'>Have you ever visited dubai</Typography>
        </Grid>

        <Grid item xs={12}>
          <StyledFab
            variant='extended'
            col={visited ? 'white' : 'pur'}
            onClick={() => setVisited(false)}
          >
            no
          </StyledFab>
          <StyledFab
            variant='extended'
            col={visited ? 'pur' : 'white'}
            onClick={() => setVisited(true)}
          >
            yes
          </StyledFab>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h5'>
            Do you have any friends or family in Dubai?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <StyledFab
            variant='extended'
            col={relatives ? 'white' : 'pur'}
            onClick={() => setRelatives(false)}
          >
            no
          </StyledFab>
          <StyledFab
            variant='extended'
            col={relatives ? 'pur' : 'white'}
            onClick={() => setRelatives(true)}
          >
            yes
          </StyledFab>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='h5'>
            How long do you want to stay in Dubai ?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          {howLongList.map((long) => (
            <StyledFab
              key={uuidv4()}
              variant='extended'
              col={long === howLong ? 'pur' : 'white'}
              onClick={() => setHowLong(long)}
            >
              {long}
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

export default Step2;
