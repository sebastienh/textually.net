import React from "react"

const ScrollPositionContext = React.createContext(0)

class ScrollPositionProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        position: window.scrollY
    }
    this.handleScrollPositionChange = this.handleScrollPositionChange.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScrollPositionChange);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollPositionChange);
  }

  handleScrollPositionChange(e) {
    console.log("handling scroll position change:" + window.scrollY);
    this.setState({
      position: window.scrollY
    })
  }

  updatePosition = (position) => {
    console.log("Updating scroll position to: " + position);
    this.setState({position});
  }

  render() {
    const { children } = this.props
    const { position } = this.state
    return (
      <ScrollPositionContext.Provider
        value={{
          position
        }}
      >
        {children}
      </ScrollPositionContext.Provider>
    )
  }
}

export default ScrollPositionContext

export { ScrollPositionProvider }