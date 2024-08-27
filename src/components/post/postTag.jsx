import {useEffect, useState} from 'react'
import styled from "styled-components"
import {theme} from "../../defaultCss.js"
import Button from "../reaproveitarComponents/buttons/textButtonBehaviour.jsx"
import Icon from "../reaproveitarComponents/navIcon.jsx"
import Text from '../text/titleText'
import Comment from './comment.jsx'
import CreateComment from './createComment.jsx'

export default function Review(props){
  let post = props.post
  let stars = [1,2,3,4,5]

  
  if(!post.review){
    return( <Text themeColor={theme.highlightColor}> {post.game.title} Post </Text>)
  }

  return(
    <Text themeColor={theme.highlightColor}>
      <Div>
        Review 
      {
        stars.map((item, index)=>{
          if (post.review_stars >= item){
            return <Icon key={index} name='star'/>
          }
          else {
            return <Icon key={index} name='star_border'/>
          }
        })
      }
      </Div>
    </Text>
  )
}
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  column-gap: -5px;
  margin: 0;
  height: 35px;
`