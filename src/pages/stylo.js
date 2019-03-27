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
    width: 60px;
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
  height: 100%;
`

const GreyPage = styled.section`
  background-color: #fafafa;
  position: relative;
  width: 100%;
  height: 100%;
`

class Index extends React.Component {

  render() {

    const { data } = this.props
    const styloAboutHtml =  data.styloAbout.edges[0].node.html

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
                m={0}
                style={{height: "100%", width: "100%"}}>
          <ContentArea>
            <GreyPage>
              <Flex justifyContent={"center"} flexDirection={"row"}>
                <StyloLogo width={"500px"}/>
              </Flex>
              <Flex justifyContent={"center"} flexDirection={"row"}>
                <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                  Stylo
                </Text>
              </Flex>
            </GreyPage>  
            <WhitePage>
              <Flex justifyContent={"center"} flexDirection={"row"} mt={100}>
                <Text fontSize={[ 20, 35, 50 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                  Markdown the way you want
                </Text>
              </Flex>
              <Text fontSize={[ 12, 16, 20 ]} mt={20} fontFamily={"HurmeGeometricSans3-Regular"}>
                  Theming in Stylo is a first class citizen, because it is a lot more than just colors or fonts… it’s a creative mood!
              </Text>
            </WhitePage>











            <Flex justifyContent={"center"} flexDirection={"row"} mt={100}>

            </Flex>
            
            <Content dangerouslySetInnerHTML={{ __html: styloAboutHtml }} />
          </ContentArea>
          <Box                 
            width={[
                0,
                1/8
              ]}>
              <CenterHorizontally>
                <CircledNumbersContainer>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={1}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#FFA701"} number={2}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={3}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={4}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={5}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={6}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={7}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={8}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={9}/>
                    <CircledNumber width={"32px"} height={"32px"} color={"#000"} number={10}/>
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
}
`;