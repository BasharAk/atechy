import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';

const StyledFab = styled(Fab)`
  min-width: 120px;
  ${({ col }) =>
    col === 'pur' &&
    `
    background-image: linear-gradient(135deg, #4734e1 0%, #8e27ea 100%);
    color: white;
    `};
  ${({ col }) =>
    col === 'white' &&
    `
    background-image: linear-gradient(135deg, #EFEFEF 0%, #EFEFEF 100%);
    color: #141212;
    `};
`;
export default StyledFab;
