import React, { Component } from 'react'
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Link } from 'gatsby'
import { Text } from 'rebass'
import rehypeReact from "rehype-react"
import FunnyQuote from '../FunnyQuote';

const MarkdownContainer = styled(Box)`

  font-weight: 400;

  h1 {
    font-size: 30pt;
  }
`;

function MarkdownHeader1(props) {
  return (
    <Flex justifyContent={"left"} flexDirection={"row"}>
        <h1>{props.children}</h1>
    </Flex>
  )
}

function MarkdownHeader2(props) {
    return (
        <Flex justifyContent={"left"} flexDirection={"row"}>
            <h2>{props.children}</h2>
        </Flex>
    )
}

function MarkdownHeader3(props) {
    return (
        <Flex justifyContent={"left"} flexDirection={"row"}>
            <h3>{props.children}</h3>
        </Flex>
    )
}

function MarkdownParagraph(props) {
    return (
        <Text mt={0} mb={16}>{props.children}</Text>
    )
}

const TextuallyLink = styled(Link)`
    color: gray;
    box-shadow: 0 0 0;

    &:hover {
        box-shadow: 0 1px 0 #808080;
    }
`

const ExternalLink = styled.a`
    color: gray;
    box-shadow: 0 0 0;

    &:hover {
        box-shadow: 0 1px 0 #808080;
    }
`

function MarkdownLink(props) {

    return (
        props.href.startsWith("http") || props.href.startsWith("#") ? <ExternalLink href={props.href}>{props.children}</ExternalLink> : <TextuallyLink to={props.href}>{props.children}</TextuallyLink>
    )
}

export const MarkdownUnorderedList = styled.ul`
    padding-left: 2em;
    margin-top: 0;
    margin-bottom: 16px;
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`

const Code = styled.code`

    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    tab-size: 4;
`

const MarkdownListItem = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: disc;
    margin-bottom: 0px;
`

const Pre = styled.pre`
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    background-color: #F2F2F2;
    border-radius: 3px;
    word-wrap: normal;
    margin-top: 0;
    margin-bottom: 16px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
    line-height: normal;

    code {
        background-color: inherit;
    }
`

const Blockquote = styled.blockquote`
    color: #D74E09;
    border-left: 2px solid gray;
`

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { 
        "h1": MarkdownHeader1, 
        "h2": MarkdownHeader2,
        "h3": MarkdownHeader3,
        "p": MarkdownParagraph,
        "a": MarkdownLink,
        "ul": MarkdownUnorderedList,
        "li": MarkdownListItem,
        "code": Code,
        "pre": Pre,
        "blockquote": Blockquote,
        "funny-quote": FunnyQuote
    }
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
