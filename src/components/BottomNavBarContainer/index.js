import React, { Component } from 'react'
import NavBarSeparatorContext from "../../context/NavBarSeparatorContext"

export default class BottomNavBarContainer extends Component {

    constructor(props) {

        super(props)
        this.state = {
            right: null
        }
    }

    componentDidMount() {

        this.context.updateNavBarRight(this.state.right)
    }

    render() {
        return (
            <div ref={(node) => this.updateNavBarContextRight(node)}>
                {this.props.children}    
            </div>
        )   
    }

    updateNavBarContextRight = (node) => {
        if(node && !this.state.right) {
            let rect = node.getBoundingClientRect();
            let right = rect.right;
            this.state = {
                right: right
            }
        }
    }
}

BottomNavBarContainer.contextType = NavBarSeparatorContext;
