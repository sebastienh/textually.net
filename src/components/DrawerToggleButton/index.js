import React from 'react'
import { Button } from "rebass";
import styled from "styled-components";

export const ToggleButton = styled(Button)`
    height: 32px;
    width: 36px;
    background-color: transparent;
    border: none;
    margin-left: 28px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    padding: 0; 
    box-sizing: border-box;
    justify-content: space-around;
    z-index: 100;

    &:focus {
        outline: none;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

export const ToggleButtonLine = styled.div`
    width: 40px;
    height: 3px;
    background-color: #000;
    z-index: 100;
`;

export default class DrawerToggleButton extends React.Component {

    render() {
        return (
            <ToggleButton onClick={this.props.click}>
                <ToggleButtonLine />
                <ToggleButtonLine />
                <ToggleButtonLine />
            </ToggleButton>
        )
    }
}