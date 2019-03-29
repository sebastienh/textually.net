import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "rebass";
import LocationContext from "../../context/LocationContext"

export default class NavigationLink extends Component {

    constructor(props) {
        super(props)
        this.state = {
            path: props.path
        }
    }

    isSelected = (contextPagePath) => {

        const {
            path
        } = this.state;

        var equal = true;
        for(var i = 0; i < path.length; i++) {

            let element = path[i];
            if(i < contextPagePath.length) {
                let contextElement = contextPagePath[i];
                if(element != contextElement) {
                    equal = false;   
                }
            }
            else {
                equal = false;
                break;
            }
        }
        return equal;
    }

    render() {

        const {
            path,
            children,
            color,
            ...other
        } = this.props;

        return (
            <React.Fragment>
                <LocationContext.Consumer>
                    {(context) => (
                        <Link {...other} color={this.isSelected(context.pagePath) ? "#f00" : color}  >
                            {children}
                        </Link> 
                    )}
                </LocationContext.Consumer>
            </React.Fragment>
        );
    }
}