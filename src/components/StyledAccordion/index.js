import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Flex, Box } from '@rebass/grid'
import ExpandMoreIcon from "../../icons/expandMore";
import Pointer from "../../icons/pointer"

export const Container = styled(Box)`
    margin: 0px 0px 0px 0px;
    padding-left: 10px;
    width: 100%;
`

export const Title = styled.div`
  font-size: 15px;
  font-weight: 300;
  padding: 0 0px 0px 0px;
  margin-bottom: calc(1.75rem / 3);
  cursor: pointer;
  position: relative;
  ${props => props.isOpen && css`
    padding: 0 0px 0px 0px;
    /* border-bottom: 1px solid red; */
  `}
  &:hover {
        cursor: pointer;
    }
`

export const Content = styled(Flex)`

    max-height: 0px;
    -webkit-transition: all 1s ease;
    -moz-transition: all 1s ease;
    -o-transition: all 1s ease;
    -ms-transition: all 1s ease;
    transition: all 1s ease;
    flex-direction: column;
    opacity: 0; 
    height: 0;
    overflow: hidden;

    ${props => props.isOpen && css`

        max-height: 500px;
        -webkit-transition: all 1s ease;
        -moz-transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
        transition: all 1s ease;
        height: auto;
        opacity: 1;
    `}
`

const ItemPointer = styled(Pointer)`

    /* ${props => props.isOpen && css`

        display: block;

        &>path {

            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 5s linear alternate infinite;

            @keyframes dash {
                from {
                    stroke-dashoffset: 1000;
                }
                to {
                    stroke-dashoffset: 0;
                }
            }
        }
    `} */
`

// export const Content = styled(Flex)`

//     /* max-height: 0; */
//     /* transition: max-height 0.75s ease-in; */
//     flex-direction: column;
//     opacity: 0; 
//     height: 0;
//     overflow: hidden;

//     ${props => props.isOpen && css`

//         max-height: 800px;
//         transition: max-height 0.75s ease-in;
//         opacity: 1;
//         height: auto;
//     `}

//     ${props => !props.isOpen && css`

//         max-height: 0px;
//         transition: max-height 0.75s ease-in;
//     `}
// `

export const Elements = styled.ul`
    margin-bottom: 0rem;
`

export const Icon = styled(ExpandMoreIcon)`
    margin-top: 6px;
    margin-right: 0px;
    position: absolute;
    right: 20px;
    transition: transform ease-out 0s;
    /* stroke: ${(props) => { if (props.color) return props.theme.colors[props.color]; return props.theme.colors.mineShaft; }} */
    stroke: props.color;
    ${props => props.open && css`
        transform: rotate(180deg);
        transition: transform ease-out 0.15s;
    `}
`

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

class StyledAccordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //  isOpen to be seeded by prop only once [correct pattern]
      isOpen: props.openByDefault ? props.openByDefault : false
    };
  }

  componentDidMount() {
    // this.resize();
  }

  componentDidUpdate() {
    // It needs to be on update to cater for async and dynamic content
    // this.resize();
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
        
        <Content isOpen={this.state.isOpen} ref={(c) => { this.content = c; }}>
            <Elements>
                {children}
            </Elements>
        </Content>
      </Container>
    );
  }
}

StyledAccordion.propTypes = propTypes;
StyledAccordion.defaultProps = defaultProps;

export default StyledAccordion;