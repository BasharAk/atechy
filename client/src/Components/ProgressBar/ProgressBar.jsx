import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const BorderLinearProgress = withStyles(() => ({
  root: {
    height: 10,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor: '#ECECEC'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: 'primary'
  }
}))(LinearProgress);

export default BorderLinearProgress;
