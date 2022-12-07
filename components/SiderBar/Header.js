import styled from 'styled-components'
import { Avatar, Button } from '@mui/material'
import { Chat, MoreVert, Groups, DonutLarge, Search } from '@mui/icons-material'

function MainHead() {
  return (
    <>
      <Header>
        <Avatar cursor='pointer' />
        <IconsContainer>
        <Groups cursor='pointer' />
        <DonutLarge cursor='pointer' />
        <Chat cursor='pointer' />
        <MoreVert cursor='pointer' />
        </IconsContainer>
      </Header>
      <SearchTab>
        <Search />
        <SearchInput />
      </SearchTab>
      </>
  )
}

export default MainHead

const SearchTab = styled.div`
  display: flex;
justify-content: center;
align-items: center;

`;

const SearchInput = styled.input``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid whitesmoke;
  z-index: 1000;
  margin: 0  10px;
  `;

const Container = styled.div`
width: 250px;
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
  `;
