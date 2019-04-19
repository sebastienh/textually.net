import React, { Component } from 'react'
import { Box } from '@rebass/grid'

export default class YinYang extends Component {

    render() {

        const {
            width,
            height,
            dotColor,
            fillColor
        } = this.props;

        return (
            <React.Fragment>
                <Box width={["100px", "200px", "300px"]}>
                    <svg viewBox="0 0 414 414" xmlns="http://www.w3.org/2000/svg">
                        <g fill-rule="nonzero" fill="none">
                            <path d="M207 0v414c114.264 0 207-92.736 207-207S321.264 0 207 0z" fill={fillColor}/>
                            <path d="M207 414V0C92.736 0 0 92.736 0 207s92.736 207 207 207z" fill="#FFF"/>
                            <path d="M311 103.5c0 57.161-46.339 103.5-103.5 103.5S104 160.661 104 103.5 150.339 0 207.5 0 311 46.339 311 103.5z" fill="#FFF"/>
                            <path d="M311 310.5c0 57.161-46.339 103.5-103.5 103.5S104 367.661 104 310.5 150.339 207 207.5 207 311 253.339 311 310.5z" fill={fillColor}/>
                            <path d="M234 102c0 14.36-11.64 26-26 26s-26-11.64-26-26 11.64-26 26-26 26 11.64 26 26z" fill={dotColor}/>
                            <path d="M234 312c0 14.36-11.64 26-26 26s-26-11.64-26-26 11.64-26 26-26 26 11.64 26 26z" fill="#FFF"/>
                        </g>
                    </svg>
                </Box>
            </React.Fragment>
        )
    }
}
