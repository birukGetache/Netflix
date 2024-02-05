import React from 'react';
import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';
import { space, color, layout, typography, flexbox, compose, display } from 'styled-system';

// Styled components with Emotion and Styled System integration
const Navbar = styled.nav`
  background-color: lightblue;
  color: #fff;
  padding:3px;
  display: grid;
  grid-template-columns: 1fr 4fr 4fr; /* Adjusted property */
  justify-content:center;
  align-items:center;
`;

const Logo = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: auto;
  padding:8px;
  padding-top:6px;
  text-align:center;
`;

const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  width:80%;
`;

const NavItem = styled.div`
  margin-left: 10px;
  //float:left;
display:inline;
color:#4169E1;
font-size: 20px;
align-items: center; /* Align items vertically */
  text-align: center; /* Center-align text */
  justify-content:center;
  padding-left:35px;
  &:hover {
    color: gray; /* Change color to gray on hover */
    cursor: pointer; /* Show pointer cursor on hover */
  }
  `;
const Main= styled.div`
display:flex;
align-items: center; /* Align items vertically */
text-align: center; /* Center-align text */

font-size: 20px;
`;
const LogoMaker=styled.div`
width:70px;
height:70px;
border-radius:50%;
background-color:white;
padding:7px;
color:lightblue;
`
const Seacrch = styled.div`
display:flex;
justify-content:right;
padding:10px;
text-align:center;
align-items:center;
`
// Define your Navbar component
const NavBar = () => {
  return (
    <Navbar>
      <LogoMaker>
      <Logo>Addis Music Player</Logo>
      </LogoMaker>
     
     <Main>
     <NavItem className='item'>fevorite</NavItem>
      <NavItem className='item'>most Played </NavItem>
      <NavItem className='item'>shared</NavItem>
      <NavItem className='item'>Most replayed</NavItem>
      <NavItem className='item'>the music is allready in database</NavItem>
      <NavItem className='item'>symentanesly add items</NavItem>
     </Main>
    
   
       <Seacrch>
       <SearchInput type="text" placeholder="Search..." ></SearchInput>
      <FaSearch></FaSearch>
       </Seacrch>
 
      
    </Navbar>
  );
};

export default NavBar;
