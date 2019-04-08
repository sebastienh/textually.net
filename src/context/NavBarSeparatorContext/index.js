import React, { Component } from 'react'

const NavBarSeparatorContext = React.createContext({
    selectedPageLinkVisible: false,
    selectedPageLinkRight: 0,
    navBarRight: 0
})

class NavBarSeparatorProvider extends Component {

    state = {
        selectedPageLinkVisible: false,
        selectedPageLinkRight: 0,
        navBarRight: 0
    }

    reset = () => {

        this.setState({
            selectedPageLinkVisible: false,
            selectedPageLinkRight: 0,
            navBarRight: 0
        })
    }

    updateSelectedPageLinkVisible = (value) => {

        this.setState({
            selectedPageLinkVisible: value
        })
    }

    updateSelectedPageLinkRight = (right) => {

        this.setState({
            selectedPageLinkRight: right
        })
    }

    updateNavBarRight = (right) => {

        this.setState({
            navBarRight: right
        })
    }

    computeSeparatorRightMargin = () => {

        if(this.state.selectedPageLinkVisible) {
            return this.state.navBarRight - this.state.selectedPageLinkRight
        }
        else {
            return 0
        }
    }

    render() {

        const { children } = this.props
        const { 
            selectedPageLinkVisible, 
            selectedPageLinkRight, 
            navBarRight 
        } = this.state
        
        return (
            <NavBarSeparatorContext.Provider
                value={{
                    selectedPageLinkVisible,
                    selectedPageLinkRight,
                    navBarRight,
                    separatorRightMargin: this.computeSeparatorRightMargin(),
                    updateSelectedPageLinkVisible: this.updateSelectedPageLinkVisible,
                    updateSelectedPageLinkRight: this.updateSelectedPageLinkRight,
                    updateNavBarRight: this.updateNavBarRight,
                    reset: this.reset,
                }}>
                {children}
            </NavBarSeparatorContext.Provider>
        )
    }
}

export default NavBarSeparatorContext

export { NavBarSeparatorProvider }