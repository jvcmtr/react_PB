import styled from "styled-components";
import defaultPic from "/src/imagens/user_pic_placeholder.jpg";

const FotoPerfilStyle = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media(max-width: 900px){
    width: 40px;
    height: 40px;
  }
  @media(max-width: 600px){
    width: 30px;
    height: 30px;
  }
`
FotoPerfilStyle.defaultProps = {
  src: "/src/imagens/user_pic_placeholder.jpg",
};

export default function FotoPerfil(props) {
  
  if ((props != null) && (props.src != "")){
   return <FotoPerfilStyle src={props.src} /> 
  }

  return <FotoPerfilStyle />
}