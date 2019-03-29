import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "gatsby"
import LocationContext from "../../context/LocationContext"
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

// 3: x="200.371px" y="331.57px"
// 4: x="194.541px" y="325.122px"
// 5: x="199.931px" y="324.022px"
// 6: x="196.191px" y="324.572px"
// 7: x="199.381px" y="325.122px"
// 8: x="195.641px" y="325.342px"
// 9: x="195.861px" y="326.222px"
// 10: x="154.611px" y="325.122px"
// 11: x="181.09px" y="325.122px"
// 12: x="159.781px" y="326.442px"
// 13: x="157.471px" y="331.57px"
// 14: x="152.71px" y="325.122px"
// 15: x="158.131px" y="324.022px"
// 16: x="155.711px" y="324.572px"
const getX = (number) => {
    switch(number) {
    case 1:
        return "220.58px";
    case 2:
        return "201.141px";
    case 3:
        return "200.371px";
    case 4:
        return "194.541px";
    case 5:
        return "199.931px";
    case 6:
        return "196.191px";
    case 7:
        return "199.381px";
    case 8:
        return "195.641px";
    case 9:
        return "195.861px";
    case 10:
        return "154.611px";
    case 11:
        return "181.09px";
    case 12:
        return "159.781px";
    case 13:
        return "157.471px";   
    case 14:
        return "152.71px";     
    case 15:
        return "158.131px";     
    case 16:
        return "155.711px";       
    default:
        return "220.58px";
    }
}

const getY = (number) => {
    switch(number) {
    case 1:
        return "325.122px";
    case 2:
        return "326.442px";
    case 3:
        return "331.57px";
    case 4:
        return "325.122px";
    case 5:
        return "324.022px";
    case 6:
        return "324.572px";
    case 7:
        return "325.122px";
    case 8:
        return "325.342px";
    case 9:
        return "326.222px";
    case 10:
        return "325.122px";
    case 11:
        return "325.122px";
    case 12:
        return "326.442px";
    case 13:
        return "331.57px";    
    case 14:
        return "325.122px";   
    case 15:
        return "324.022px";   
    case 16:
        return "324.572px";   
    default:
        return "325.122px";
    }
}

const PlainLink = styled(Link)`
    box-shadow: 0 0 0;
    text-decoration: none;
`
// context.state.index == number ? "#f00" : color}
export default class CircledNumber extends Component {

    render() {

        const {
            link,
            width,
            height,
            number,
            color
        } = this.props;

        return (

            <PlainLink to={link}>
                <LocationContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <svg width={width} height={height} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.41421">
                                <path d="M259.441,14.443c129.153,0 234.009,104.856 234.009,234.009c0,129.152 -104.856,234.008 -234.009,234.008c-129.153,0 -234.008,-104.856 -234.008,-234.008c0,-129.153 104.855,-234.009 234.008,-234.009Zm0,58.502c96.865,0 175.507,78.642 175.507,175.507c0,96.864 -78.642,175.506 -175.507,175.506c-96.864,0 -175.506,-78.642 -175.506,-175.506c0,-96.865 78.642,-175.507 175.506,-175.507Z" fill={context.index == number ? "#f00" : color}/>
                                <text x={getX(number)} y={getY(number)} font-family="HurmeGeometricSans3W03-Bold, sans-serif" font-weight="700" font-size="220px" fill={context.index == number ? "#f00" : color}>{number}</text>
                            </svg>
                        </React.Fragment>
                    )}
                </LocationContext.Consumer>
            </PlainLink>
        )
    }
}
