import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
`

 const Bar = styled.div`
    width: 320px;
    border: 1px solid grey;
    text-align: left;
    background: darkgrey;
    padding: 1.5%;
`

 const Button = styled.button`
    background: darkblue;
    color: white;
    display: flex;
    font-size: 1.5rem;
    width: 250px;
    padding: 5%;
    text-align: center;
    position: center;
    flex-direction: column;
    cursor: pointer;

`
 class SideBar extends React.Component {
    render(){
        return(
            <Bar>
                <Title>Lambda Notes</Title>
                <Button>View Your Notes</Button>
                <Button>Create New Note</Button>
            </Bar>
        );
    }
}
 export default SideBar; 