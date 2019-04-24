import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"

const HeaderBox = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #f6f6f6;
    height: ${props => props.height ?  props.height : "100%"};
    width: ${props => props.width ?  props.width : "100%"};
`

export default class PageHeaderSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0
        }
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {

        this.setState({
            width: window !== undefined && window !== null ? window.innerWidth : 0,
            height: window !== undefined && window !== null ? window.innerHeight : 0
        })

        const mq = window.matchMedia( "(min-width: 769px)" );
        if (mq.matches) {
            window.addEventListener('resize', this.handleWindowResize);
        }
        else {
            this.handleWindowResize()
        }
    }

    componentWillUnmount() {
        const mq = window.matchMedia( "(min-width: 769px)" );
        if (mq.matches) {
            window.removeEventListener('resize', this.handleWindowResize);
        }
        this.context.resetIndexContext()
    }

    handleWindowResize(e) {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    render() {

        const { children } = this.props
        const { width, height } = this.state

        return (
            <HeaderBox height={height+"px"} width={width+"px"}>
                {children}
            </HeaderBox>
        )
    }
}

PageHeaderSection.contextType = LocationContext; 

