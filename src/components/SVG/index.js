import React, { Component } from 'react'
import { Img } from 'gatsby'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import Gear from "../Gear"
import SectionContainer from "../SectionContainer"


export default class SVG extends Component {


    render() {

        const {
            path,
            alt
        } = this.props

        return (

            <Img src={path} alt={alt}/>
        )
    }

}