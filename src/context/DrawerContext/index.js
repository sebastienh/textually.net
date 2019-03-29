import React from "react"

const DrawerContext = React.createContext()

class DrawerProvider extends React.Component {

  state = {
    open: false
  }

  toggleDrawer = () => {
    console.log("Updating drawer state to: " + !this.state.open);
    this.setState({ open: !this.state.open});
  }

  render() {
    const { children } = this.props
    const { open } = this.state
    return (
      <DrawerContext.Provider
        value={{
            open: open,
            toggleDrawer: this.toggleDrawer
        }}
      >
        {children}
      </DrawerContext.Provider>
    )
  }
}

export default DrawerContext

export { DrawerProvider }