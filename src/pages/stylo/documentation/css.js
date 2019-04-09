import React from "react"
import { graphql } from "gatsby"
import SEO from "../../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyloLogo from "../../../images/svg/logo-red.svg"
import PageHeaderSection from "../../../components/PageHeaderSection"
import PageSection from "../../../components/PageSection"
import PageLocation from "../../../components/PageLocation"
import TitledSidebar from "../../../components/TitledSidebar"
import MarkdownContent from "../../../components/MarkdownContent";
import DocumentationPageTemplate from "../../../components/DocumentationPageTemplate"
import TitledSection from "../../../components/TitledSection"

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

class StyloDocumentationCSS extends React.Component {

  render() {

    const { data } = this.props;
    const attributeExistence = data.attributeExistence.edges[0].node;
    const attributeSelector = data.attributeSelector.edges[0].node;      
    const attributeValue = data.attributeValue.edges[0].node;
    const cascading = data.cascading.edges[0].node;
    const childCombinator = data.childCombinator.edges[0].node;
    const classSelector = data.classSelector.edges[0].node;
    const colorKeywords = data.colorKeywords.edges[0].node;
    const combinators = data.combinators.edges[0].node;
    const containsWordMatch = data.containsWordMatch.edges[0].node;
    const cssBackgroundColorProperty = data.cssBackgroundColorProperty.edges[0].node;
    const cssColorProperty = data.cssColorProperty.edges[0].node;
    const cssContents = data.cssContents.edges[0].node;
    const cssFontFamilyProperty = data.cssFontFamilyProperty.edges[0].node;
    const cssFontSizeProperty = data.cssFontSizeProperty.edges[0].node;
    const cssFontStyleProperty = data.cssFontStyleProperty.edges[0].node;
    const cssFontWeightProperty = data.cssFontWeightProperty.edges[0].node;
    const cssPropertyTypes = data.cssPropertyTypes.edges[0].node;
    const cssPropertyValuesColor = data.cssPropertyValuesColor.edges[0].node;
    const cssPropertyValuesInherit = data.cssPropertyValuesInherit.edges[0].node;
    const cssPropertyValuesInitial = data.cssPropertyValuesInitial.edges[0].node;
    const cssPropertyValuesLength = data.cssPropertyValuesLength.edges[0].node;
    const cssTextDecorationColorProperty = data.cssTextDecorationColorProperty.edges[0].node;
    const cssTextDecorationLineProperty = data.cssTextDecorationLineProperty.edges[0].node;
    const cssTextDecorationStyleProperty = data.cssTextDecorationStyleProperty.edges[0].node;
    const descendantCombinator = data.descendantCombinator.edges[0].node;
    const exactMatch = data.exactMatch.edges[0].node;
    const firstWordMatch = data.firstWordMatch.edges[0].node;
    const followingSiblingCombinator = data.followingSiblingCombinator.edges[0].node;
    const idSelector = data.idSelector.edges[0].node;
    const lastWordMatch = data.lastWordMatch.edges[0].node;
    const nextSiblingCombinator = data.nextSiblingCombinator.edges[0].node;
    const priorityRules = data.priorityRules.edges[0].node;
    const properties = data.properties.edges[0].node;
    const pseudoClassSelector = data.pseudoClassSelector.edges[0].node;
    const pseudoElements = data.pseudoElements.edges[0].node;
    const pseudoElementSelector = data.pseudoElementSelector.edges[0].node;
    const selectors = data.selectors.edges[0].node;
    const startsWithWordMatch = data.startsWithWordMatch.edges[0].node;
    const style = data.style.edges[0].node;
    const stylesheet = data.stylesheet.edges[0].node;
    const typeSelector = data.typeSelector.edges[0].node;
    const universalSelector = data.universalSelector.edges[0].node;
    const wordContainsMatch = data.wordContainsMatch.edges[0].node;

    return (
        <PageLocation path={["/", "stylo", "documentation", "css"]}>
            <SEO
              title="Stylo - Documentation - CSS"
              keywords={[
                `textually`, 
                `stylo`, 
                `css`]}
            />  
            <TitledSidebar links={[
                {
                    href: "#introduction",
                    title: "Introduction"
                },
                {
                    href: "#style",
                    title: "Style"
                },
                {
                    href: "#selectors",
                    title: "Selectors"
                },
                {
                    href: "#attribute-match",
                    title: "Attribute Match"
                },
                {
                    href: "#combinators",
                    title: "Combinators"
                },
                {
                    href: "#stylesheet",
                    title: "Stylesheet"
                },
                {
                    href: "#cascading",
                    title: "Cascading"
                },
                {
                    href: "#properties",
                    title: "Properties"
                },
                {
                    href: "#value-types",
                    title: "Value Types"
                },
                {
                    href: "#pseudo-elements",
                    title: "Pseudo Elements"
                },
                {
                    href: "#color-keywords",
                    title: "Color Keywords"
                }
            ]}>            
            <PageHeaderSection id={"header"}>
                <ContentResizer>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <StyloLogo width={[
                        "200px",
                        "300px",
                        "500px"]}/>
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        CSS
                        </Text>
                    </Flex>
                </ContentResizer>
            </PageHeaderSection>  
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <TitledSection id={"introduction"} number={1}>    
                        <Box>
                            <MarkdownContent post={cssContents} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"style"} number={2}>    
                        <Box>
                            <MarkdownContent post={style} />
                        </Box>  
                    </TitledSection>
                    <TitledSection id={"selectors"} number={3}>
                        <Box>
                            <MarkdownContent  post={selectors}/>
                        </Box>
                        <Box id={"type-selector"}>
                            <MarkdownContent post={typeSelector}/>
                        </Box>
                        <Box id={"id-selector"}>
                            <MarkdownContent post={idSelector}/>
                        </Box>
                        <Box id={"class-selector"}>
                            <MarkdownContent post={classSelector}/>
                        </Box>
                        <Box id={"universal-selector"}>
                            <MarkdownContent post={universalSelector}/>
                        </Box>
                        <Box id={"pseudo-element-selector"}>
                            <MarkdownContent post={pseudoElementSelector}/>
                        </Box>
                        <Box id={"pseudo-class-selector"}>
                            <MarkdownContent post={pseudoClassSelector}/>
                        </Box>
                        <Box id={"attribute-selector"}>
                            <MarkdownContent post={attributeSelector}/>
                        </Box>
                        <Box id={"attribute-existence"}>
                            <MarkdownContent post={attributeExistence}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"attribute-match"} number={4}>
                        <Box>
                            <MarkdownContent post={attributeValue}/>
                        </Box>
                        <Box id={"exact-match"}>
                            <MarkdownContent post={exactMatch}/>
                        </Box>
                        <Box id={"contains-word-match"}>
                            <MarkdownContent post={containsWordMatch}/>
                        </Box>
                        <Box id={"starts-with-word-match"}>
                            <MarkdownContent post={startsWithWordMatch}/>
                        </Box>
                        <Box id={"first-word-match"}>
                            <MarkdownContent post={firstWordMatch}/>
                        </Box>
                        <Box id={"last-word-match"}>
                            <MarkdownContent post={lastWordMatch}/>
                        </Box>
                        <Box id={"word-contains-match"}>
                            <MarkdownContent post={wordContainsMatch}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"combinators"} number={5}>
                        <Box>
                            <MarkdownContent post={combinators}/>
                        </Box>
                        <Box id={"descendant-combinator"}>
                            <MarkdownContent post={descendantCombinator}/>
                        </Box>
                        <Box id={"child-combinator"}>
                            <MarkdownContent post={childCombinator}/>
                        </Box>
                        <Box id={"following-sibling-combinator"}>
                            <MarkdownContent post={followingSiblingCombinator}/>
                        </Box>
                        <Box id={"next-sibling-combinator"}>
                            <MarkdownContent post={nextSiblingCombinator}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"stylesheet"} number={6}>
                        <Box>
                            <MarkdownContent post={stylesheet}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"cascading"} number={7}>
                        <Box>
                            <MarkdownContent post={cascading}/>
                        </Box>
                        <Box id={"priority-rules"}>
                            <MarkdownContent post={priorityRules}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"properties"} number={8}>
                        <Box>
                            <MarkdownContent post={properties}/>
                        </Box>
                        <Box id={"css-color-property"}>
                            <MarkdownContent post={cssColorProperty}/>
                        </Box>
                        <Box id={"css-background-color-property"}>
                            <MarkdownContent post={cssBackgroundColorProperty}/>
                        </Box>
                        <Box id={"css-font-size-property"}>
                            <MarkdownContent post={cssFontSizeProperty}/>
                        </Box>
                        <Box id={"css-font-family-property"}>
                            <MarkdownContent post={cssFontFamilyProperty}/>
                        </Box>
                        <Box id={"css-font-weight-property"}>
                            <MarkdownContent post={cssFontWeightProperty}/>
                        </Box>
                        <Box id={"css-font-style-property"}>
                            <MarkdownContent post={cssFontStyleProperty}/>
                        </Box>
                        <Box id={"css-text-decoration-line-property"}>
                            <MarkdownContent post={cssTextDecorationLineProperty}/>
                        </Box>
                        <Box id={"css-text-decoration-style-property"}>
                            <MarkdownContent post={cssTextDecorationStyleProperty}/>
                        </Box>
                        <Box>
                            <MarkdownContent post={cssTextDecorationColorProperty}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"value-types"} number={9}>
                        <Box id={"css-property-types"}>
                            <MarkdownContent post={cssPropertyTypes}/>
                        </Box>
                        <Box id={"css-property-values-initial"}>
                            <MarkdownContent post={cssPropertyValuesInitial}/>
                        </Box>
                        <Box id={"css-property-values-inherit"}>
                            <MarkdownContent post={cssPropertyValuesInherit}/>
                        </Box>
                        <Box id={"css-property-values-length"}>
                            <MarkdownContent post={cssPropertyValuesLength}/>
                        </Box>
                        <Box id={"css-property-values-color"}>
                            <MarkdownContent post={cssPropertyValuesColor}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"pseudo-elements"} number={10}>
                        <Box>
                            <MarkdownContent post={pseudoElements}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"color-keywords"} number={11}>
                        <Box>
                            <MarkdownContent post={colorKeywords}/>
                        </Box>
                    </TitledSection>
                </Flex>
            </DocumentationPageTemplate>
            </TitledSidebar>
        </PageLocation>
    )
  }
}
export default StyloDocumentationCSS

export const query = graphql`
query {
  attributeExistence: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/attributeExistence/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  attributeSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/attributeSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  attributeValue: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/attributeValue/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cascading: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cascading/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  childCombinator: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/childCombinator/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  classSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/classSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  colorKeywords: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/colorKeywords/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  combinators: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/combinators/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  containsWordMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/containsWordMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssBackgroundColorProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssBackgroundColorProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssColorProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssColorProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssContents: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssContents/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssFontFamilyProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssFontFamilyProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssFontSizeProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssFontSizeProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssFontStyleProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssFontStyleProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssFontWeightProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssFontWeightProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssPropertyTypes: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssPropertyTypes/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssPropertyValuesColor: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssPropertyValuesColor/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssPropertyValuesInherit: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssPropertyValuesInherit/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssPropertyValuesInitial: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssPropertyValuesInitial/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssPropertyValuesLength: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssPropertyValuesLength/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssTextDecorationColorProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssTextDecorationColorProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssTextDecorationLineProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssTextDecorationLineProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  cssTextDecorationStyleProperty: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/cssTextDecorationStyleProperty/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  descendantCombinator: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/descendantCombinator/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  exactMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/exactMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  firstWordMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/firstWordMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  followingSiblingCombinator: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/followingSiblingCombinator/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  idSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/idSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  lastWordMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/lastWordMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  nextSiblingCombinator: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/nextSiblingCombinator/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  priorityRules: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/priorityRules/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  properties: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/properties/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  pseudoClassSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/pseudoClassSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  pseudoElements: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/pseudoElements/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  pseudoElementSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/pseudoElementSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  selectors: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/selectors/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  startsWithWordMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/startsWithWordMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  style: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/style/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  stylesheet: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/stylesheet/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  typeSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/typeSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  universalSelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/universalSelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  wordContainsMatch: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/wordContainsMatch/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

}
`;