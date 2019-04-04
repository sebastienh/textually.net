import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"
import VisibilitySensor from 'react-visibility-sensor'
import CircledNumber from "../CircledNumber"


const QuoteText = styled(Text)`

`

const QuoteAuthor = styled(Text)`

`

export default class FunnyQuote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        }
        this.onChange = this.onChange.bind(this);
    }

    render() {

        const {
            text,
            author
        } = this.props;

        return (
            <Flex flexDirection={"column"}>
                <QuoteText>{text}</QuoteText>
                <QuoteAuthor>{author}</QuoteAuthor>
            </Flex>
        )
    }


}