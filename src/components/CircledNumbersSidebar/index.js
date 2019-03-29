import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import CircledNumber from "../CircledNumber"

const CircledNumbersContainer = styled(Flex)`
    margin:0px;
    padding: 0px;
    width: 10%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
`;

export default class CircledNumbersSidebar extends Component {
  
    constructor(props) {
        super(props);
    }
  
    render() {

        const { numbers } = this.props;

        return (
            <CircledNumbersContainer>
                {
                    numbers.map ( (number) => {
                        return <CircledNumber 
                            link={number.link} 
                            style={{marginTop:"10px"}} 
                            width={"32px"} 
                            height={"32px"} 
                            color={"#000"} 
                            number={number.number}/>
                    })
                }
            </CircledNumbersContainer>
        )
    }
}
