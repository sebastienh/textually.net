import React, { Component } from 'react'
import { Flex, Box } from '@rebass/grid'

export default class SectionContainer extends Component {
    render() {
        return (
            <Flex pb={20}>
                <Box width={[1/6, 2/12]} />
                <Box width={[4/6, 8/12]}>
                    {this.props.children}
                </Box>
                <Box width={[1/6, 2/12]} />
            </Flex>
        )
    }
}
