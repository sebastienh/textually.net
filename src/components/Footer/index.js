import React, { Component } from 'react';
import styled from "styled-components";
import { Flex, Box, Link, Text } from "rebass";
import logo from '../../../content/assets/textually-logo.png'

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        );
    }
}