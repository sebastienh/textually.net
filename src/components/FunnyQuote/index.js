import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import VisibilitySensor from 'react-visibility-sensor'
import CircledNumber from "../CircledNumber"


const Quote = styled(Box)`
    text-align: right;
    width: 50%;
    color: #444545;
`

const QuoteContainer = styled(Flex)`
    font-family: "Times New Roman", serif;
    width: 100%;
    margin-bottom: 50px;
    margin-top: 20px;
`

export default class FunnyQuote extends Component {

    render() {

        const {
            children
        } = this.props;

        return (

            <QuoteContainer flexDirection={"row"}>
                <Box mx={"auto"} />
                <Quote>
                    {children}
                </Quote>
            </QuoteContainer>
        )
    }


}