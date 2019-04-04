import React from "react"

const LocationContext = React.createContext(["/"])

class LocationProvider extends React.Component {

  state = {
    pagePath: ["/"],
    index: 0,
    visibleIndexes: new Set()
  }

  updatePagePath = (pagePath) => {
    console.log("Updating location page path to: " + pagePath);
    this.setState({ pagePath: pagePath, index: 0});
  }

  resetIndexContext = () => {
    console.log("Reseting index context");
    this.setState({ 
      index: 0,
      visibleIndexes: new Set()
    })
  }

  enteringIndex = (index) => {
    console.log("Entering index to: " + index);
    var visibleIndexes = this.state.visibleIndexes
    visibleIndexes.add(index)

    console.log("Visible index is " + index + ", and visible indexes:" +  Array.from(visibleIndexes).join(','))

    this.setState({ 
      index: index, 
      visibleIndexes:  visibleIndexes
    });
  }

  leavingIndex = (index) => {
    console.log("Leaving index: " + index); 

    var visibleIndexes = this.state.visibleIndexes
    visibleIndexes.delete(index)

    let array = Array.from(visibleIndexes)

    if(array.length == 0) {
      visibleIndexes.clear()
      this.setState({ 
        index: 0, 
        visibleIndexes: visibleIndexes 
      });
    }
    else {
      let entry = array[0]
      console.log("Visible index is " + entry + ", and visible indexes:" +  Array.from(visibleIndexes).join(','))
      this.setState({ 
        index: entry, 
        visibleIndexes: visibleIndexes 
      });
    }
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
          leavingIndex: this.leavingIndex,
          resetIndexContext: this.resetIndexContext
        }}>
        {children}
      </LocationContext.Provider>
    )
  }
}

export default LocationContext
export { LocationProvider }