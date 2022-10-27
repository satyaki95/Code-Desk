import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { DarkModeContext } from '../../DarkModeContext/DarkModeContext';
import DarkModeToggleButton from '../HomeScreen/DarkModeToggleButton';

const NavbarContainer = styled.div`
width : '7vw';
height : 4.5rem;
background : #241f21;
display : flex;
align-items : center;
justify-content : center;
`;

const NavbarContent =styled.button`
display : flex;
align-items: center;
gap : 0.9rem;
border : 0;
outline : 0;
background : transparent;
`

const Logo = styled.img`
width : 45px;
height : 45px;
`
const MainHeading = styled.h1`
font-size : 1.9rem;
font-weight : 400;
color : white;

span{
  font-weight : 700;
}
`

function Navbar() {

  const navigate = useNavigate();
  // DarkMode Switch
  const darkTheme = React.useContext(DarkModeContext)!;
  let isDarkThemeOn = darkTheme.isDarkModeOn;
  let SetIsDarkThemeOn = darkTheme.setIsDarkModeOn;

  function changeTheme(){
    SetIsDarkThemeOn(!isDarkThemeOn);
  }
  return (
    <NavbarContainer>
      <NavbarContent onClick={() => {
        navigate('/')
      }}>
        <Logo src="/logo.png" alt="" />
        <MainHeading>
          <span>Code</span>Deck
        </MainHeading>
      </NavbarContent>
      <DarkModeToggleButton changeTheme ={changeTheme} />
    </NavbarContainer>
  )
}

export default Navbar