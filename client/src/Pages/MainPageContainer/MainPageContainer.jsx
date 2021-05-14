import Typography from '../../Components/Typography/Typography';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import MainPageCover from './MainPageCover';
import Box from '../../Components/Box/Box';
import { Container } from '../../Components/PageBackground/PageBackground';

const MainPageContainer = ({ children, progress, currentStep }) => {
  return (
    <Container>
      <Box flex xs={12}>
        {currentStep === 1 ? (
          <Box xs={'none'} md={6}>
            <MainPageCover />
          </Box>
        ) : null}

        <Box p xs={12} md={currentStep === 1 ? 6 : 12}>
          <Box flex>
            <Box xs={12} md={6}>
              <Typography size='4' weight='Bold'>
                digg
              </Typography>
            </Box>
            <Box xs={12} md={6}>
              <Box xs={12} display={`${progress < 15 ? 'none' : ''}`}>
                <ProgressBar value={progress} />
              </Box>
            </Box>
          </Box>

          <Box xs={12}>{children}</Box>
        </Box>
      </Box>
    </Container>
  );
};

export default MainPageContainer;
