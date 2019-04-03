import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Link } from 'gatsby'
import { Text } from 'rebass'
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

function MarkdownHeader2(props) {
    return (
        <Flex justifyContent={"center"} flexDirection={"row"}>
            <h2>{props.children}</h2>
        </Flex>
    )
}

function MarkdownHeader3(props) {
    return (
        <Flex justifyContent={"center"} flexDirection={"row"}>
            <h3>{props.children}</h3>
        </Flex>
    )
}


function MarkdownParagraph(props) {
    return (
        <Flex justifyContent={"center"} flexDirection={"row"}>
            <Text>{props.children}</Text>
        </Flex>
    )
}

const TextuallyLink = styled(Link)`
    color: gray;
`

function MarkdownLink(props) {

    return (
        <TextuallyLink to={props.href}>
            <Text>{props.children}</Text>
        </TextuallyLink>
    )
}

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
        "h1": MarkdownHeader1, 
        "h2": MarkdownHeader2,
        "h3": MarkdownHeader3,
        "p": MarkdownParagraph,
        "a": MarkdownLink
    }
}).Compiler

export default class MarkdownDocumentationSection extends Component {
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
