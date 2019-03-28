import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components";
import SideArea from "../components/SideArea"
import ContentArea from "../components/ContentArea"
import Accordion from "../components/Accordion"
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyledAccordion from "../components/StyledAccordion";
import StyledAccordionItem from "../components/StyledAccordionItem";
import Pointer from "../icons/pointer"
import CircledNumber from "../components/CircledNumber"
import Image from 'gatsby-image';
import StyloLogo from "../../images/logo-green.svg"
import theme from "../styles/theme.js";
import PageHeaderSection from "../components/PageHeaderSection"
import StyloFourColoredScreenshots from "../components/StyloFourColoredScreenshots"

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

class Index extends React.Component {

  render() {

    const { data } = this.props
    const styloAboutHtml =  data.styloAbout.edges[0].node.html

    const {
        data: {
            bgDesktop: {
              resize: { src: desktop }
            },
            bgTablet: {
              resize: { src: tablet }
            },
            bgMobile: {
              resize: { src: mobile }
            }
        }
    } = this.props;

    const images = {
        desktop,
        tablet,
        mobile
    };

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `textually`, 
            `text editor`, 
            `stylo`, 
            `markdown`, 
            `md`, 
            `commonmark`, 
            `css`, 
            `html`]}
        />  
        <Flex p={0}
                m={0}>
          <ContentArea>
            <PageHeaderSection>
              <ContentResizer>
                <Flex justifyContent={"center"} flexDirection={"row"}>
                  <StyloLogo width={[
                    "200px",
                    "300px",
                    "500px"]}/>
                </Flex>
                <Flex justifyContent={"center"} flexDirection={"row"}>
                  <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                    Stylo
                  </Text>
                </Flex>
              </ContentResizer>
            </PageHeaderSection>  
            <StyloFourColoredScreenshots images={images}/>
            <WhitePage>
              <Flex>
                <Box width={1/10} />
                <Box width={8/10}>
                  <Content dangerouslySetInnerHTML={{ __html: styloAboutHtml }} />
                </Box>
                <Box width={1/10} />
              </Flex>
            </WhitePage>
          </ContentArea>
          <Box            
            zIndex={100}     
            width={"60px"}>
              <CenterHorizontally>
                <CircledNumbersContainer>
                    <CircledNumber 
                      link={"#four-colored-screenshots-page"}
                      style={{marginTop:"10px"}} 
                      width={"24px"} 
                      height={"24px"} 
                      color={"#000"} 
                      number={1}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#FFA701"} number={2}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={3}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={4}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={5}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={6}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={7}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={8}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={9}/>
                    <CircledNumber link={"/stylo#four-colored-screenshots-page"} style={{marginTop:"10px"}} width={"32px"} height={"32px"} color={"#000"} number={10}/>
                </CircledNumbersContainer>
              </CenterHorizontally>
            </Box>
        </Flex>
      </Layout>
    )
  }
}

export default Index

export const query = graphql`
query {
  styloAbout: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { fields: { 
      slug: { eq: "/stylo-about/" } } }) {
    edges {
      node {
        html
      }
    }
  }
  bgDesktop: imageSharp(fluid: { originalName: { regex: "/colored-four-screens/" } }) {
    resize(width: 1200, quality: 90, cropFocus: CENTER) {
      src
    }
  }
  bgTablet: imageSharp(fluid: { originalName: { regex: "/colored-four-screens/" } }) {
    resize(width: 800, quality: 90, cropFocus: CENTER) {
      src
    }
  }
  bgMobile: imageSharp(fluid: { originalName: { regex: "/colored-four-screens/" } }) {
    resize(width: 450, quality: 90, cropFocus: CENTER) {
      src
    }
  }
}
`;