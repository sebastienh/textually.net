
import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'

// context.state.index == number ? "#f00" : color}
export default class Dot extends Component {

    render() {

        const {
            size,
            color,
        } = this.props;

        return (
            <React.Fragment>
                <Box width={size}>
                    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.4">
                        <circle cx="200" cy="200" r="181.9" fill={color}/>
                    </svg>
                </Box>
            </React.Fragment>
        )
    }
}








