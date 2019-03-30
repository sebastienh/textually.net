import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import CircledNumber from "../CircledNumber"
import DrawerContext from "../../context/DrawerContext"

const CircledNumbersContainer = styled(Flex)`
    margin:0px;
    padding: 0px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;
    z-index: 1000;

    /* ${({ open }) => open && `
        backdrop-filter: blur(10px);
        background-image: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.3), rgba(255,255,255,0));
    `} */
`;

const CenterHorizontally = styled(Flex)`
    z-index: 1000;
    margin: 0;
    padding: 0;
    height: 100%;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: row;
`

export default class CircledNumbersSidebar extends Component {
  
    constructor(props) {
        super(props);
    }
  
    render() {

        const { 
            numbers,
         } = this.props;

        return (

            <React.Fragment>

                <DrawerContext.Consumer>
                    {(context) => (
                        <CenterHorizontally>
                            <CircledNumbersContainer open={context.open}>
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
                        </CenterHorizontally>
                    )}
                </DrawerContext.Consumer>
            </React.Fragment>
        )
    }
}
