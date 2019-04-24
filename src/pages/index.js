import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import SideArea from "../components/SideArea"
import ContentArea from "../components/ContentArea"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyloLogo from "../images/svg/logo.svg"
import theme from "../styles/theme.js";
import PageHeaderSection from "../components/PageHeaderSection"
import StyloFourColoredScreenshots from "../components/StyloFourColoredScreenshots"
import StyloNewParadigm from "../components/StyloNewParadigm"
import StyloImmerseInTheText from "../components/StyloImmerseInTheText"
import StyloCommonMark from "../components/StyloCommonMark"
import PageSection from "../components/PageSection"
import PageLocation from "../components/PageLocation"
import PageScrollingNumbers from "../components/PageScrollingNumbers"
import ReadyToTryStylo from "../components/ReadyToTryStylo"
import StyloRevolutionary from "../components/StyloRevolutionary"
import StyloUnique from "../components/StyloUnique"
import StyloStylable from "../components/StyloStylable"
import StyloInspiring from "../components/StyloInspiring"
import StyloEasy from "../components/StyloEasy"
import StyloOtherFeatures from "../components/StyloOtherFeatures"
import MediaQuery from "react-responsive"

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
`;

export const SectionDivider = styled.hr`
  background-color: #000;
  height: 6px;
`;

export const HeadingLevel1 = styled.h1`
  font-family: "Big Moore";
  font-weight: 500;
  font-style: italic;
  margin-top: 0;
`;

export const Content = styled.div`
  
`;

export const AccordionText = styled.div`
  font-family: "Avenir Next";
  font-weight: 400;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const CircledNumbersContainer = styled(Flex)`
    margin:0px;
    padding: 0px;
    width: 10%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    justify-content: center;
    flex-direction: column;
`;

const RightSideContainer = styled(Box)`

    margin:0px;
    padding: 0px;
    width: 60px;
    height: 100%;
    /* position: fixed; */
    /* top: 0; */
    /* bottom: 0; */
    /* justify-content: center; */
    /* flex-direction: column; */
`;

const CenterHorizontally = styled(Flex)`

    height: 100%;
    justify-content: center;
    flex-direction: row;
`

const WhitePage = styled.section`
  background-color: #fff;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const GreyPage = styled.section`
  background-color: #fafafa;
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`

const ContentResizer = styled(Flex)`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100vh;
  height: 100px;
`

class StyloIndex extends React.Component {

  render() {

    const { data } = this.props;
    const styloAboutHtml =  data.styloAbout.edges[0].node.html;
    const newParadigmImageDesktop = data.newParadigmDesktop.childImageSharp.sizes;
    const {
        data: { 
            bgDesktop: {
              childImageSharp: { fixed: desktop }
            },
            bgTablet: {
              childImageSharp: { fixed: tablet }
            },
            bgMobile: {
              childImageSharp: { fixed: mobile }
            }
        }
    } = this.props;

    const images = {
        desktop,
        tablet,
        mobile
    };

    return (
      <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input hidden className="hidden" name="bot-field" />
        <input type="text" placeholder="name" name="name" />
        <div data-netlify-recaptcha />
        <button>Send</button>
      </form>
    </div>

      //   <PageLocation path={["/", "stylo", "about"]}>
      //       <SEO
      //         title="Stylo App"
      //         keywords={[
      //           `textually`, 
      //           `text editor`, 
      //           `stylo`, 
      //           `markdown`, 
      //           `md`, 
      //           `commonmark`, 
      //           `css`, 
      //           `html`]}
      //       />  
      //   {/* <MediaQuery query="(min-width: 769px)"> */}
      //     {/* <PageScrollingNumbers links={[
      //         "/#intro",
      //         "/#ying-yang",
      //         "/#unique",
      //         "/#stylable",
      //         "/#inspiring",
      //         "/#easy",
      //         "/#stylo-commonmark",
      //         "/#stylo-immerse",
      //         "/#stylo-other-features",
      //         "/#ready-to-try-stylo"
      //       ]}> */}

      //       <Flex p={0}
      //               m={0}>
      //         <ContentArea>
      //         <PageSection id={"intro"} number={1}>
      //           <PageHeaderSection>
      //             <ContentResizer>
      //               <Flex mt={80} justifyContent={"center"} flexDirection={"row"}>
      //                 <StyloLogo />
      //               </Flex>
      //               <Flex justifyContent={"center"} flexDirection={"row"}>
      //                 <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
      //                   Stylo
      //                 </Text>
      //               </Flex>
      //             </ContentResizer>
      //           </PageHeaderSection>  
      //           </PageSection>
      //           <PageSection mt={[20,60,80]} id={"ying-yang"} number={2}>
      //             <StyloRevolutionary />
      //           </PageSection>
      //           <PageSection bg={"#f6f6f6"} mt={[20,60,80]} id={"unique"} number={3}>
      //             <StyloUnique />
      //           </PageSection>
      //           <PageSection mt={[20,60,80]} id={"stylable"} number={4}>
      //             <StyloStylable />
      //           </PageSection>
      //           <PageSection bg={"#f6f6f6"} mt={[20,60,80]} id={"inspiring"} number={5} pb={40}>
      //             <StyloInspiring />
      //           </PageSection>
      //           <PageSection mt={[20,60,80]} id={"easy"} number={6}>
      //             <StyloEasy />
      //           </PageSection>
      //           <PageSection bg={"#f6f6f6"} mt={[20,60,80]} id={"stylo-commonmark"} number={7}>
      //             <StyloCommonMark />
      //           </PageSection>
      //           <PageSection  mt={[20,60,80]} id={"stylo-immerse"} number={8}>
      //             <StyloImmerseInTheText />
      //           </PageSection>
      //           <PageSection bg={"#f6f6f6"} mt={[20,60,80]} id={"stylo-other-features"} number={9}>
      //             <StyloOtherFeatures />
      //           </PageSection>
      //           <PageSection  mt={[20,60,80]} id={"ready-to-try-stylo"} number={10}>
      //             <ReadyToTryStylo />
      //           </PageSection>
      //         </ContentArea>
      //       </Flex>

      //     {/* </PageScrollingNumbers> */}
      // </PageLocation>
    )
  }
}
export default StyloIndex

export const query = graphql`
query {
  styloAbout: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/stylo-about/" } 
      } 
    }) {
    edges {
      node {
        html
      }
    }
  }

  newParadigmDesktop: file(relativePath: { eq: "new-paradigm.png" }) {
    childImageSharp {
        sizes(quality: 90) {
          ...GatsbyImageSharpSizes
        }
    }
  }

  bgDesktop: file(relativePath: { eq: "colored-four-screens.png" }) {
    childImageSharp {
      sizes(quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
  }

  bgTablet: file(relativePath: { eq: "colored-four-screens.png" }) {
    childImageSharp {
      fixed(width: 800, height: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  bgMobile: file(relativePath: { eq: "colored-four-screens.png" }) {
    childImageSharp {
      fixed(width: 450, height: 281) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;