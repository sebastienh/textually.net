import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Flex, Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import CircledNumber from "../CircledNumber"
import handleViewport from 'react-in-viewport';

class TitledSectionInsideBlock extends Component {

    render() {

        const { number, children, ...other } = this.props

        return (
            <React.Fragment>
                <Box {...other}>
                    {children}
                </Box>
            </React.Fragment>
        )
    }
}

const TrackerTitledSection = handleViewport(TitledSectionInsideBlock, { rootMargin: '-1.0px' });

export default class TitledSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        }
        this.onEnterViewport = this.onEnterViewport.bind(this);
        this.onLeaveViewport = this.onLeaveViewport.bind(this);
    }

    onEnterViewport() {
        console.log("Entering index: " + this.state.number);
        this.context.enteringIndex(this.state.number);
    }

    onLeaveViewport() {
        console.log("Leaving index: " + this.state.number);
        this.context.leavingIndex(this.state.number);
    }

    render() {

        const { id, number, children, ...other } = this.props

        return (
            <TrackerTitledSection {...other} onEnterViewport={this.onEnterViewport} onLeaveViewport={this.onLeaveViewport}>
                <Box id={id} pt={50}>
                    <Flex mb={40} flexDirection={"row"} justifyContent={"center"}>
                        <CircledNumber selectedColor={"#444545"}
                            unselectedColor={"#444545"}
                            forceSelected={true}
                            width={"82px"} 
                            height={"82px"} 
                            color={"#444545"}
                            number={number}
                            zIndex={"0"}/>
                            
                    </Flex>
                    <TitledSectionInsideBlock number={number}>
                        {children}
                    </TitledSectionInsideBlock>
                </Box>
            </TrackerTitledSection>
        )
    }
}

TitledSection.contextType = LocationContext; 



