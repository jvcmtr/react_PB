import styled from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
import {theme} from "../../defaultCss.js"


import HeaderLinkIcon from "../reaproveitarComponents/navButton.jsx";
import Usuario from '../reaproveitarComponents/userInfo.jsx';
import HelperText from '../text/helperText.jsx'
import BigText from '../text/bigText.jsx'


const mediaTrashold = 800;


const LogoWraper = styled.div`
  background-color: ${theme.backgroundColor1};
  font-family: "courier";
  color: ${theme.highlightColor};
  letter-spacing: -1;
  border-radius: 5px;
  text-shadow: 2px 2px 0px #000000;
  flex-shrink: 0;
  padding: 5px;
`


export default function Logo(props) {  
  return(
      
      <LogoWraper>
        <BigText> 
          <LogoWraper>
            {/*   
            GameVibe
            GameHub
            GamerVerse
            ReviewRise
            NexusGamers
            CritiQ
            CritiXchange
            ReviewHive 
          */}
            ₪ GamerVerse □■
          </LogoWraper> 
        </BigText>
      </LogoWraper>
      );
}