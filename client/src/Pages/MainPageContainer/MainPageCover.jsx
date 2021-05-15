import styled from 'styled-components';
import Box from '../../Components/Box/Box';

const Image = styled.img`
  width: 100%;
`;

const MainPageCover = () => (
  <Box position='relative'>
    <Image src='./images/1.png' />

    <Box position='absolute' width='50%' top='26%' left='8.65%'>
      <Image src='./images/2.png' />
    </Box>

    <Box position='absolute' width='50%' top='26%' left='8.65%'>
      <Image src='./images/3.png' />
    </Box>

    <Box position='absolute' width='36.5%' top='21.111%' left='17.292%'>
      <Image src='./images/4.png' />
    </Box>
  </Box>
);

export default MainPageCover;
