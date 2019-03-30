import React from "react"

const ScrollingNumbersSidebarContext = React.createContext(0)

class ScrollingNumbersSidebarProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        display: false,
        links: []
    }
  }

  hide = () => {
    console.log("Hiding scrolling numbers sidebar");
    this.setState({ display: false});
  }

  show = () => {
    console.log("Showing scrolling numbers sidebar");
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
    const { display, count, links } = this.state
    return (
      <ScrollingNumbersSidebarContext.Provider
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
      </ScrollingNumbersSidebarContext.Provider>
    )
  }
}

export default ScrollingNumbersSidebarContext
export { ScrollingNumbersSidebarProvider }