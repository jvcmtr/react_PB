import {theme} from '../../defaultCss.js';
import styled from "styled-components";

  const Txt = styled.div`
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: 1px;


  @media(max-width: 600px){
    font-size: 0.7rem ; }
    
  @media(max-width: 420px){
    font-size: 0.65rem ; }

`

export default function HelperText(props){
  let color = theme.textColor3;

  if (props.themeColor !== undefined){
    color = props.themeColor
  }
  
  return ( 
    <Txt style={{color: color}}> 
      {props.children}
    </Txt> 
  )
}
