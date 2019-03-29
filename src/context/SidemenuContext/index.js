import React from "react"

const SidemenuContext = React.createContext()

class SidemenuProvider extends React.Component {

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
      <SidemenuContext.Provider
        value={{
            open: open,
            toggleDrawer: this.toggleDrawer
        }}
      >
        {children}
      </SidemenuContext.Provider>
    )
  }
}

export default SidemenuContext

export { SidemenuProvider }