import styled from 'styled-components';
import ChatLists from './SiderBar/ChatLists';


import MainHead from './SiderBar/Header';

function SiderBr() {
  return (
    <Container>
      <MainHead />
      <ChatLists />
     
    </Container>
  )
}

export default SiderBr


const Container = styled.div`
width: 250px;
`;
