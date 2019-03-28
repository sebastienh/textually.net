import React, { Component } from 'react'
import { Box } from '@rebass/grid'
import styled from "styled-components";

const HeaderBox = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #cacaca;
    height: ${props => props.height ?  props.height : "100%"};
    width: ${props => props.width ?  props.width : "100%"};
`

export default class PageHeaderSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize(e) {
        console.log("handling width:" + window.innerWidth)
        console.log("handling height:" + window.innerHeight)
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {

        const { children } = this.props
        const { width, height } = this.state

        console.log("changing width:" + window.innerWidth)
        console.log("changing height:" + window.innerHeight)

        return (
            <HeaderBox height={height+"px"} width={width+"px"}>
                {children}
            </HeaderBox>
        )
    }
}

