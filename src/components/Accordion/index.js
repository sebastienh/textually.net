import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Flex, Box } from '@rebass/grid'
import ExpandMoreIcon from "../../icons/expandMore";

export const Container = styled(Box)`
    margin: 0px 0px 0px 0px;
    padding-left: 10px;
    width: 100%;
    height: 100%;
`;

export const Title = styled.div`
  font-size: 15px;
  padding: 0 0px 0px 0px;
  margin-bottom: 0;
  cursor: pointer;
  position: relative;
  ${props => props.isOpen && css`
    padding: 0 0px 0px 0px;
    /* border-bottom: 1px solid red; */
  `}
`;

export const Content = styled(Box)`
  height: 0px;
  /* overflow: hidden; */
  transition: ease-out .3s;
  opacity: 0;

  ${props => props.show && css`
    margin-top: 5px;
    opacity: 1;
  `}

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`;

export const Icon = styled(ExpandMoreIcon)`
    margin-top: 6px;
    margin-right: 0px;
    position: absolute;
    right: 20px;
    transition: transform ease-out .3s;
    /* stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }} */
    stroke: props.color;
    ${props => props.open && css`
        transform: rotate(180deg);
    `}
`;

const propTypes = {
  /**
   * The content to render within the acordion
   */
  children: PropTypes.node.isRequired,
  /**
   * Title of the accordion
   */
  title: PropTypes.string,
  /**
   * Color for the chevron
   */
  color: PropTypes.string,
  /**
   * CSS styles
   */
  className: PropTypes.string,
  /**
   * Callback when the accordion state changes
   */
  onChange: PropTypes.func
};

const defaultProps = {
  title: '',
  color: null,
  className: null,
  onChange: null
};

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  isOpen to be seeded by prop only once [correct pattern]
      isOpen: props.openByDefault ? props.openByDefault : false
    };
  }

  componentDidMount() {
    this.resize();
  }

  componentDidUpdate() {
    // It needs to be on update to cater for async and dynamic content
    this.resize();
  }

  resize() {
    if (this.state.isOpen) this.content.style.height = `${this.content.scrollHeight}px`;
    else this.content.style.height = '0';
  }

  render() {
    const {
      title,
      color,
      children,
      className,
      onChange
    } = this.props;
    const { isOpen } = this.state;

    return (
      <Container>
        <Title
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen }, () => {
              if (onChange) onChange();
            });
          }}
          isOpen={isOpen}
        >
          {title}
          <Icon open={isOpen} color={"#000"}/>
        </Title>
        <Content show={isOpen} ref={(c) => { this.content = c; }}>
          {children}
        </Content>
      </Container>
    );
  }
}

Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

export default Accordion;