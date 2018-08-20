import React from "react";
import styled from 'styled-components';


const NoteCard = styled.div`
display: flex; 
flex-wrap: wrap; 
flex-direction: row; 
align-content: center; 
justify-content: center; 

`
const Card = styled.div`
border: 1px solid black;
background-color: white; 
width: 200px; 
height: 190px;  
flex-direction: column;
padding: 10px; 
margin: 10px; 
display: flex;  
`
const Title = styled.div`
`
const Content = styled.div`
`
const H2= styled.h2`
font-size: 20px; 
`
const P = styled.p`
font-size: 13px; 
`


const Note = props => {
  return (
    <NoteCard>
      {props.note.map((item) => {
          return(
        <div key={item.id}>
          <Card>
            <Title><H2>{item.title}</H2></Title>
            <Content><P>{item.content}</P></Content>
          </Card>
        </div>
          )
      })}
    </NoteCard>
  );
};

export default Note;