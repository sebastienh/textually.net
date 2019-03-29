import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LocationContext from "../context/LocationContext"

class NotFoundPage extends React.Component {

  componentDidMount() {

    console.log("Trying to update location context");
    this.context.updatePagePath(["/", "not-found"]);
  }

  render() {
    
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      // <Layout location={this.props.location} title={siteTitle}>
      <React.Fragment>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      {/* </Layout> */}
      </React.Fragment>
    )
  }
}

NotFoundPage.contextType = LocationContext; 
export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
