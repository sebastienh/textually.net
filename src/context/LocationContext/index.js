import React from "react"

const LocationContext = React.createContext(["/"])

class LocationProvider extends React.Component {

  state = {
    pagePath: ["/"],
    index: 0
  }

  updatePagePath = (pagePath) => {
    console.log("Updating location page path to: " + pagePath);
    this.setState({ pagePath: pagePath, index: 1});
  }

  updateIndexInPage = (index) => {
    console.log("Updating location index to: " + index);
    this.setState({ index });
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
          updateIndexInPage: this.updateIndexInPage
        }}
      >
        {children}
      </LocationContext.Provider>
    )
  }
}

export default LocationContext
export { LocationProvider }