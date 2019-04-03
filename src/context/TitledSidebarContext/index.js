import React from "react"

const TitledSidebarContext = React.createContext(0)

class TitledSidebarProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        display: false,
        links: []
    }
  }

  hide = () => {
    this.setState({ display: false});
  }

  show = () => {
    this.setState({ display: true});
  }

  updateLinks = (links) => {
    this.setState({
        links: links
    })
  }

  resetLinks = () => {
    this.setState({
        links: []
    })
  }

  render() {
    const { children } = this.props
    const { display, links } = this.state
    return (
      <TitledSidebarContext.Provider
        value={{
            display,
            links,
            hide: this.hide,
            show: this.show,
            updateLinks: this.updateLinks,
            resetLinks: this.resetLinks,
        }}
      >
        {children}
      </TitledSidebarContext.Provider>
    )
  }
}

export default TitledSidebarContext
export { TitledSidebarProvider }