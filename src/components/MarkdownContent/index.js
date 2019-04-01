import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import rehypeReact from "rehype-react"

const MarkdownContainer = styled(Box)`

  font-weight: 400;

  h1 {
    font-size: 30pt;
  }
`;

function MarkdownHeader1(props) {
  return (
    <Flex justifyContent={"center"} flexDirection={"row"}>
        <h1>{props.children}</h1>
    </Flex>
  )
}

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "markdown-header-1": MarkdownHeader1 }
}).Compiler

export default class MarkdownContent extends Component {
  render() {

    const {
        post
    } = this.props;

    return (

        <MarkdownContainer>
            {renderAst(post.htmlAst)}
        </MarkdownContainer>
    )
  }
}
