import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Text } from 'rebass'
import { Link } from 'gatsby';

export const Item = styled(Link)`
    text-decoration: none;
    box-shadow: 0 0 0 0;
    color: black;

`

export const ListItem = styled.li`
    text-decoration: none;
    list-style-type: none;
    padding-left: 10px;
    margin-bottom: calc(1.75rem / 3);
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

class StyledAccordionItem extends Component {
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
      onChange,
    } = this.props;

    const { isOpen } = this.state;

    return (
        <ListItem>
            <Item href="#">
                <Text fontSize={"15px"} fontWeight={300}>
                    {title}
                </Text>    
            </Item>
        </ListItem>
    );
  }
}

StyledAccordionItem.propTypes = propTypes;
StyledAccordionItem.defaultProps = defaultProps;

export default StyledAccordionItem;