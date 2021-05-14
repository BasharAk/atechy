import Typography from '../../Components/Typography/Typography';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';
import MainPageCover from './MainPageCover';
//////////////////////////////////// Material UI components///////////
import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
////////////////////////////////////////////////////////////////////

const MainPageContainer = ({ children, progress, currentStep }) => {
  return (
    <>
      <Grid container>
        {currentStep === 1 ? (
          <Grid item xs={12} md={6}>
            <Box display={{ xs: 'none', md: 'block' }}>
              <MainPageCover />
            </Box>
          </Grid>
        ) : null}
        <Grid item xs={12} md={currentStep === 1 ? 6 : 12}>
          <Box p={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography size='4' weight='Bold'>
                  digg
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box py={3} display={`${progress > 15 ? 'block' : 'none'}`}>
                  <ProgressBar value={progress} />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <br />
                <br />
                <br />
                {children}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MainPageContainer;
