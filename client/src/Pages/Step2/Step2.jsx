import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Typography from '../../Components/Typography/Typography';
import StyledButton from '../../Components/StyledButton/StyledButton';
import Box from '../../Components/Box/Box';

const Step2 = ({ state, setState, howLongList }) => {
  const [visited, setVisited] = useState(state.userInfo.visited);
  const [relatives, setRelatives] = useState(state.userInfo.relatives);
  const [howLong, setHowLong] = useState(state.userInfo.howLong);

  const confirmStep = (e) => {
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
      <Box p xs={12}>
        <Typography>Have you ever visited dubai</Typography>
      </Box>

      <Box p xs={12}>
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
      </Box>

      <Box p xs={12}>
        <Typography>Do you have any friends or family in Dubai?</Typography>
      </Box>

      <Box p xs={12}>
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
      </Box>

      <Box p xs={12}>
        <Typography>How long do you want to stay in Dubai ?</Typography>
      </Box>

      <Box p xs={12}>
        {howLongList.map((long) => (
          <StyledButton
            key={uuidv4()}
            col={long === howLong ? 'pur' : 'white'}
            onClick={() => setHowLong(long)}
          >
            {long}
          </StyledButton>
        ))}
      </Box>

      <Box p xs={12}>
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
      </Box>
    </>
  );
};

export default Step2;
