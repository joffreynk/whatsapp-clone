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
  margin: 5px 10px;
  background-color:rgb(160, 156, 156);
  border-radius: 30px;
  width: 100%;
`;

const SearchInput = styled.input`
outline: none;
height: 40px;
border: none;
border-radius: 32px;
background-color:rgb(160, 156, 156);
font-size: 16px;
padding: 0;
`;

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
