import React from "react"

const LocationContext = React.createContext(["/"])

class LocationProvider extends React.Component {

  state = {
    pagePath: ["/"],
    index: 1,
    visibleIndexes: new Set([1])
  }

  updatePagePath = (pagePath) => {
    // console.log("Updating location page path to: " + pagePath);
    this.setState({ pagePath: pagePath, index: 1});
  }

  enteringIndex = (index) => {
    // console.log("Entering index to: " + index);
    var visibleIndexes = this.state.visibleIndexes
    visibleIndexes.add(index)

    // console.log("Visible index is " + index + ", and visible indexes:" +  Array.from(visibleIndexes).join(','))

    this.setState({ 
      index: index, 
      visibleIndexes:  visibleIndexes
    });
  }

  leavingIndex = (index) => {
    // console.log("Leaving index: " + index); 

    var visibleIndexes = this.state.visibleIndexes
    visibleIndexes.delete(index)

    let array = Array.from(visibleIndexes)
    let entry = array[0]

    // console.log("Visible index is " + entry + ", and visible indexes:" +  Array.from(visibleIndexes).join(','))

    this.setState({ index: entry });
  }

  render() {
    const { children } = this.props
    const { pagePath, index } = this.state
    return (
      <LocationContext.Provider
        value={{
          pagePath,
          index,
          updatePagePath: this.updatePagePath,
          enteringIndex: this.enteringIndex,
          leavingIndex: this.leavingIndex
        }}>
        {children}
      </LocationContext.Provider>
    )
  }
}

export default LocationContext
export { LocationProvider }