import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import BorderLinearProgress from '../../Components/ProgressBar/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    fontWeight: 'bold'
  }
});

const MainPageContainer = ({ children, progress, currentStep }) => {
  const classes = useStyles();

  return (
<>
      <Grid container>
        {currentStep === 1 ? (
          <Grid item xs={12} md={6}>
            <Box
              display={{ xs: 'none', md: 'block' }}
              style={{
                backgroundColor: 'purple',
                height: '100vh'
              }}
            />
          </Grid>
        ) : null}
        <Grid item xs={12} md={currentStep === 1 ? 6 : 12}>
          <Box p={3}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant='h3' className={classes.root}>
                  digg
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box py={3} display={`${progress > 15 ? 'block' : 'none'}`}>
                  <BorderLinearProgress
                    variant='determinate'
                    value={progress}
                  />
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
