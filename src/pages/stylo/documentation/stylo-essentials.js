import React from "react"
import { graphql } from "gatsby"
import SEO from "../../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import StyloLogo from "../../../images/svg/logo-blue.svg"
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

class StyloDocumentation extends React.Component {

  render() {

    const { data } = this.props;
    
    const addAStyle = data.addAStyle.edges[0].node;
    const applyPendingStyleChanges = data.applyPendingStyleChanges.edges[0].node;
    const blockquote = data.blockquote.edges[0].node;
    const bold = data.bold.edges[0].node;
    const bundledFonts = data.bundledFonts.edges[0].node;
    const copySelector = data.copySelector.edges[0].node;
    const distractionFree = data.distractionFree.edges[0].node;
    const editAStyle = data.editAStyle.edges[0].node;
    const enableDisableSessionTools = data.enableDisableSessionTools.edges[0].node;
    const essentials = data.essentials.edges[0].node;
    const exportDocument = data.exportDocument.edges[0].node;
    const headerLevel1 = data.headerLevel1.edges[0].node;
    const headerLevel2 = data.headerLevel2.edges[0].node;
    const headerLevel3 = data.headerLevel3.edges[0].node;
    const headerLevel4 = data.headerLevel4.edges[0].node;
    const headerLevel5 = data.headerLevel5.edges[0].node;
    const headerLevel6 = data.headerLevel6.edges[0].node;
    const htmlPreview = data.htmlPreview.edges[0].node;
    const introduction = data.introduction.edges[0].node;
    const italic = data.italic.edges[0].node;
    const keyboardShortcuts = data.keyboardShortcuts.edges[0].node;
    const link = data.link.edges[0].node;
    const markdownEditor = data.markdownEditor.edges[0].node;
    const markdownFormatting = data.markdownFormatting.edges[0].node;
    const newDocument = data.newDocument.edges[0].node;
    const openDocument = data.openDocument.edges[0].node;
    const orderedList = data.orderedList.edges[0].node;
    const printDocument = data.printDocument.edges[0].node;
    const renameAStyle = data.renameAStyle.edges[0].node;
    const renameDocument = data.renameDocument.edges[0].node;
    const revealHideHtmlPreview = data.revealHideHtmlPreview.edges[0].node;
    const revealHideSidebar = data.revealHideSidebar.edges[0].node;
    const revealSingleAllIssues = data.revealSingleAllIssues.edges[0].node;
    const saveAs = data.saveAs.edges[0].node;
    const saveDocument = data.saveDocument.edges[0].node;
    const selectAStyle = data.selectAStyle.edges[0].node;
    const session = data.session.edges[0].node;
    const showHideASession = data.showHideASession.edges[0].node;
    const showHideIssuesPanel = data.showHideIssuesPanel.edges[0].node;
    const showHideStylePicker = data.showHideStylePicker.edges[0].node;
    const showHideStylesList = data.showHideStylesList.edges[0].node;
    const showHideTools = data.showHideTools.edges[0].node;
    const sidebar = data.sidebar.edges[0].node;
    const startRestartASession = data.startRestartASession.edges[0].node;
    const strikethrough = data.strikethrough.edges[0].node;
    const styleEditor = data.styleEditor.edges[0].node;
    const stylePicker = data.stylePicker.edges[0].node;
    const stylesList = data.stylesList.edges[0].node;
    const textStatistics = data.textStatistics.edges[0].node;
    const tools = data.tools.edges[0].node;
    const totalTextStatistics = data.totalTextStatistics.edges[0].node;
    const unorderedList = data.unorderedList.edges[0].node;
    const userInterface = data.userInterface.edges[0].node;
    const textAttributes = data.textAttributes.edges[0].node;

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
        <PageLocation path={["/", "stylo", "documentation", "stylo-essentials"]}>
            <SEO
              title="Stylo App"
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
            <TitledSidebar links={[
                {
                    href: "#essentials",
                    title: "Essentials"
                },
                {
                    href: "#markdown-editor",
                    title: "Markdown Editor"
                },
                {
                    href: "#text-statistics",
                    title: "Text Statistics"
                },
                {
                    href: "#sidebar",
                    title: "Sidebar"
                },
                {
                    href: "#styles-list",
                    title: "Styles List"
                },
                {
                    href: "#edit-a-style",
                    title: "Style"
                },
                {
                    href: "#markdown-formatting",
                    title: "Markdown Formatting"
                },
                {
                    href: "#text-attributes",
                    title: "Text Attributes"
                },
                {
                    href: "#bundled-fonts",
                    title: "Bundled Fonts"
                },
                {
                    href: "#keyboard-shortcuts",
                    title: "Keyboard shortcuts"
                }
            ]}>            
            <PageHeaderSection  id={"header"}>
                <ContentResizer>
                    <Flex mt={80} justifyContent={"center"} flexDirection={"row"}>
                        <StyloLogo />
                    </Flex>
                    <Flex justifyContent={"center"} flexDirection={"row"}>
                        <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                        Stylo UI
                        </Text>
                    </Flex>
                </ContentResizer>
            </PageHeaderSection>  
            <DocumentationPageTemplate>
                <Flex flexDirection={"column"}>
                    <Box>
                        <MarkdownContent post={introduction} />
                    </Box>  
                    <TitledSection id={"essentials"} number={1}>    
                        <Box>
                            <MarkdownContent post={essentials} />
                        </Box>  
                        <Box id={"new-document"} number={2}>
                            <MarkdownContent post={newDocument}/>
                        </Box>
                        <Box id={"save-document"} number={3}>
                            <MarkdownContent post={saveDocument}/>
                        </Box>
                        <Box id={"open-document"} number={4}>
                            <MarkdownContent post={openDocument}/>
                        </Box>
                        <Box id={"save-as"} number={5}>
                            <MarkdownContent post={saveAs}/>
                        </Box>
                        <Box id={"rename-document"} number={6}>
                            <MarkdownContent post={renameDocument}/>
                        </Box>
                        <Box id={"export-document"} number={7}>
                            <MarkdownContent post={exportDocument}/>
                        </Box>
                        <Box id={"print-document"} number={8}>
                            <MarkdownContent post={printDocument}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"markdown-editor"} number={2}>
                        <Box number={11}>
                            <MarkdownContent post={markdownEditor}/>
                        </Box>
                        <Box id={"html-preview"} number={12}>
                            <MarkdownContent post={htmlPreview}/>
                        </Box>
                        <Box id={"reveal-hide-html-preview"} number={13}>
                            <MarkdownContent post={revealHideHtmlPreview}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"text-statistics"} number={3}>
                        <Box number={14}>
                            <MarkdownContent post={textStatistics}/>
                        </Box>
                        <Box id={"total-text-statistics"} number={15}>
                            <MarkdownContent post={totalTextStatistics}/>
                        </Box>
                        <Box id={"session"} number={16}>
                            <MarkdownContent post={session}/>
                        </Box>
                        <Box id={"start-restart-a-session"} number={17}>
                            <MarkdownContent post={startRestartASession}/>
                        </Box>
                        <Box id={"show-hide-a-session"} number={18}>
                            <MarkdownContent post={showHideASession}/>
                        </Box>
                        <Box id={"enable-disable-session-tools"} number={19}>
                            <MarkdownContent post={enableDisableSessionTools}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"sidebar"} number={4}>
                        <Box number={20}>
                            <MarkdownContent post={sidebar}/>
                        </Box>
                        <Box id={"reveal-hide-sidebar"} number={21}>
                            <MarkdownContent post={revealHideSidebar}/>
                        </Box>
                        <Box id={"tools"} number={22}>
                            <MarkdownContent post={tools}/>
                        </Box>
                        <Box id={"show-hide-tools"} number={23}>
                            <MarkdownContent post={showHideTools}/>
                        </Box>
                        <Box id={"style-picker"} number={24}>
                            <MarkdownContent post={stylePicker}/>
                        </Box>
                        <Box id={"show-hide-style-picker"} number={25}>
                            <MarkdownContent post={showHideStylePicker}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"styles-list"} number={5}>
                        <Box number={26}>
                            <MarkdownContent post={stylesList}/>
                        </Box>
                        <Box id={"show-hide-styles-list"} number={27}>
                            <MarkdownContent post={showHideStylesList}/>
                        </Box>
                        <Box id={"select-a-style"} number={28}>
                            <MarkdownContent post={selectAStyle}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"edit-a-style"} number={6}>
                        <Box number={29}>
                            <MarkdownContent post={editAStyle}/>
                        </Box>
                        <Box id={"copy-selector"} number={30}>
                            <MarkdownContent post={copySelector}/>
                        </Box>
                        <Box id={"add-a-style"} number={31}>
                            <MarkdownContent post={addAStyle}/>
                        </Box>
                        <Box id={"rename-a-style"} number={32}>
                            <MarkdownContent post={renameAStyle}/>
                        </Box>
                        <Box id={"style-editor"} number={33}>
                            <MarkdownContent post={styleEditor}/>
                        </Box>                    
                        <Box id={"show-hide-issues-panel"} number={34}>
                            <MarkdownContent post={showHideIssuesPanel}/>
                        </Box>
                        <Box id={"reveal-single-all-issues"} number={35}>
                            <MarkdownContent post={revealSingleAllIssues}/>
                        </Box>
                        <Box id={"apply-pending-style-changes"} number={36}>
                            <MarkdownContent post={applyPendingStyleChanges}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"markdown-formatting"} number={7}>
                        <Box number={37}>
                            <MarkdownContent post={markdownFormatting}/>
                        </Box>
                        <Box id={"header-level-1"} number={38}>
                            <MarkdownContent post={headerLevel1}/>
                        </Box>
                        <Box id={"header-level-2"} number={39}>
                            <MarkdownContent post={headerLevel2}/>
                        </Box>
                        <Box id={"header-level-3"} number={40}>
                            <MarkdownContent post={headerLevel3}/>
                        </Box>
                        <Box id={"header-level-4"} number={41}>
                            <MarkdownContent post={headerLevel4}/>
                        </Box>
                        <Box id={"header-level-5"} number={42}>
                            <MarkdownContent post={headerLevel5}/>
                        </Box>
                        <Box id={"header-level-6"} number={43}>
                            <MarkdownContent post={headerLevel6}/>
                        </Box>
                        <Box id={"blockquote"} number={44}>
                            <MarkdownContent post={blockquote}/>
                        </Box>
                        <Box id={"unordered-list"} number={45}>
                            <MarkdownContent post={unorderedList}/>
                        </Box>
                        <Box id={"ordered-list"} number={46}>
                            <MarkdownContent post={orderedList}/>
                        </Box>
                        <Box id={"bold"} number={47}>
                            <MarkdownContent post={bold}/>
                        </Box>
                        <Box id={"italic"} number={48}>
                            <MarkdownContent post={italic}/>
                        </Box>
                        <Box id={"strikethrough"} number={49}>
                            <MarkdownContent post={strikethrough}/>
                        </Box>
                        <Box id={"link"} number={50}>
                            <MarkdownContent post={link}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"text-attributes"} number={8}>
                        <Box number={51}>
                            <MarkdownContent post={textAttributes}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"bundled-fonts"} number={9}>
                        <Box number={52}>
                            <MarkdownContent post={bundledFonts}/>
                        </Box>
                    </TitledSection>
                    <TitledSection id={"keyboard-shortcuts"} number={10}>
                        <Box number={53}>
                            <MarkdownContent post={keyboardShortcuts}/>
                        </Box>
                    </TitledSection>
                </Flex>
            </DocumentationPageTemplate>
            </TitledSidebar>
        </PageLocation>
    )
  }
}
export default StyloDocumentation

export const query = graphql`
query {
  addAStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/addAStyle/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  applyPendingStyleChanges: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/applyPendingStyleChanges/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  blockquote: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/blockquote/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  bold: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/bold/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  bundledFonts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/bundledFonts/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  

  copySelector: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/copySelector/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  distractionFree: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/distractionFree/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  editAStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/editAStyle/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  enableDisableSessionTools: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/enableDisableSessionTools/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }   
  }

  essentials: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/essentials/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  exportDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/exportDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel1: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel1/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel2: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel2/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel3: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel3/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel4: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel4/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel5: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel5/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  headerLevel6: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/headerLevel6/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  htmlPreview: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/htmlPreview/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  introduction: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/introduction/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  italic: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/italic/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  keyboardShortcuts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/keyboardShortcuts/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  link: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/link/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  markdownEditor: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/markdownEditor/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  markdownFormatting: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/markdownFormatting/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  newDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/newDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  openDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/openDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  orderedList: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/orderedList/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  printDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/printDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  renameAStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/renameAStyle/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  renameDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/renameDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  revealHideHtmlPreview: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/revealHideHtmlPreview/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  revealHideSidebar: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/revealHideSidebar/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  revealSingleAllIssues: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/revealSingleAllIssues/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  saveAs: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/saveAs/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  saveDocument: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/saveDocument/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  selectAStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/selectAStyle/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  session: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/session/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  showHideASession: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideASession/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  showHideIssuesPanel: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideIssuesPanel/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  showHideStylePicker: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideStylePicker/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  showHideStylesList: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideStylesList/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  showHideTools: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideTools/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  sidebar: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/sidebar/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  startRestartASession: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/startRestartASession/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  strikethrough: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/strikethrough/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  styleEditor: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/styleEditor/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  stylePicker: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/stylePicker/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  stylesList: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/stylesList/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  textStatistics: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/textStatistics/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  tools: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/tools/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  totalTextStatistics: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/totalTextStatistics/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  unorderedList: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/unorderedList/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  userInterface: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/userInterface/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  textAttributes: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/textAttributesAndHighlight/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  bgDesktop: file(relativePath: { eq: "colored-four-screens.png" }) {
    childImageSharp {
      fixed(width: 1200, height: 750) {
        ...GatsbyImageSharpFixed
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