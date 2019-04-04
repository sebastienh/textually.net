import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { Box } from '@rebass/grid'
import styled from "styled-components";
import LocationContext from    "../../context/LocationContext"

const HeaderBox = styled.div`
    margin: 0;
    padding: 0;
    position: relative;
    background-color: #E0E0E0;
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
        this.handleWindowResize = this.handleWindowResize.bind(this);
        // this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize(e) {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    // onChange(isVisible) {

    //     if(isVisible) {
    //         this.context.enteringIndex(1);
    //     }
    //     else {
    //         this.context.enteringIndex(2);
    //     }
    // }

    render() {

        const { id, children } = this.props
        const { width, height } = this.state

        return (
            <HeaderBox height={height+"px"} width={width+"px"}>
                {children}
            </HeaderBox>
        )
    }
}

PageHeaderSection.contextType = LocationContext; 

