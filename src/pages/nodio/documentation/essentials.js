import React from "react"
import { graphql } from "gatsby"
import SEO from "../../../components/seo"
import styled from "styled-components";
import { Flex, Box } from '@rebass/grid'
import { Text } from 'rebass'
import NodioEssentialLogo from "../../../images/svg/nodio-essential-logo.svg"
import PageHeaderSection from "../../../components/PageHeaderSection"
import PageLocation from "../../../components/PageLocation"
import TitledSidebar from "../../../components/TitledSidebar"
import MarkdownContent from "../../../components/MarkdownContent";
import DocumentationPageTemplate from "../../../components/DocumentationPageTemplate"
import TitledSection from "../../../components/TitledSection"

export const HeaderDivider = styled.hr`
  background-color: #D6E5E3;
  height: 10px;
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

class NodioDocumentation extends React.Component {

    render() {

        const { data } = this.props;

        const addStyle = data.addStyle.edges[0].node;
        const applyPendingStyleChanges = data.applyPendingStyleChanges.edges[0].node;
        const blockquote = data.blockquote.edges[0].node;
        const bold = data.bold.edges[0].node;
        const bundledFonts = data.bundledFonts.edges[0].node;
        const copySelector = data.copySelector.edges[0].node;
        const distractionFree = data.distractionFree.edges[0].node;
        const editStyle = data.editStyle.edges[0].node;
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
        const italic = data.italic.edges[0].node;
        const keyboardShortcuts = data.keyboardShortcuts.edges[0].node;
        const link = data.link.edges[0].node;
        const markdownEditor = data.markdownEditor.edges[0].node;
        const markdownFormatting = data.markdownFormatting.edges[0].node;
        const newDocument = data.newDocument.edges[0].node;
        const openDocument = data.openDocument.edges[0].node;
        const orderedList = data.orderedList.edges[0].node;
        const printDocument = data.printDocument.edges[0].node;
        const renameStyle = data.renameStyle.edges[0].node;
        const revealHideHtmlPreview = data.revealHideHtmlPreview.edges[0].node;
        const revealHideSidebar = data.revealHideSidebar.edges[0].node;
        const revealSingleAllIssues = data.revealSingleAllIssues.edges[0].node;
        const saveAs = data.saveAs.edges[0].node;
        const saveDocument = data.saveDocument.edges[0].node;
        const selectStyle = data.selectStyle.edges[0].node;
        const session = data.session.edges[0].node;
        const showHideSession = data.showHideSession.edges[0].node;
        const showHideIssuesPanel = data.showHideIssuesPanel.edges[0].node;
        const showHideStylePicker = data.showHideStylePicker.edges[0].node;
        const showHideStylesList = data.showHideStylesList.edges[0].node;
        const showHideTools = data.showHideTools.edges[0].node;
        const sidebar = data.sidebar.edges[0].node;
        const startRestartSession = data.startRestartSession.edges[0].node;
        const strikethrough = data.strikethrough.edges[0].node;
        const styleEditor = data.styleEditor.edges[0].node;
        const stylePicker = data.stylePicker.edges[0].node;
        const stylesList = data.stylesList.edges[0].node;
        const textStatistics = data.textStatistics.edges[0].node;
        const tools = data.tools.edges[0].node;
        const totalTextStatistics = data.totalTextStatistics.edges[0].node;
        const unorderedList = data.unorderedList.edges[0].node;
        const userInterface = data.userInterface.edges[0].node;
        const textAttributesAndHighlight = data.textAttributesAndHighlight.edges[0].node;
        const filesOutline = data.filesOutline.edges[0].node;
        const editorsPanel = data.editorsPanel.edges[0].node;
        const nodioEditorSidebar = data.nodioEditorSidebar.edges[0].node;
        const audioTools = data.audioTools.edges[0].node;
        const startStopRecording = data.startStopRecording.edges[0].node;
        const startPausePlaying = data.startPausePlaying.edges[0].node;
        const deleteRecording = data.deleteRecording.edges[0].node;
        const renameRecording = data.renameRecording.edges[0].node;

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
            <PageLocation path={["/", "nodio", "documentation", "essentials"]}>
                <SEO
                    title="Nodio App"
                    keywords={[
                        `textually`,
                        `text editor`,
                        `nodio`,
                        `markdown`,
                        `md`,
                        `commonmark`]}
                />
                <TitledSidebar links={[
                    {
                        href: "#essentials",
                        title: "Essentials"
                    },
                    {
                        href: "#usingNodio",
                        title: "Nodio Fundamentals"
                    },
                    {
                        href: "#textStatistics",
                        title: "Text Statistics"
                    },
                    {
                        href: "#sidebar",
                        title: "Sidebar"
                    },
                    {
                        href: "#markdownFormatting",
                        title: "Markdown Formatting"
                    },
                    {
                        href: "#keyboardShortcuts",
                        title: "Keyboard shortcuts"
                    }
                ]}>
                    <PageHeaderSection  id={"header"}>
                        <ContentResizer>
                            <Flex mt={80} justifyContent={"center"} flexDirection={"row"}>
                                <NodioEssentialLogo />
                            </Flex>
                            <Flex justifyContent={"center"} flexDirection={"row"}>
                                <Text fontSize={[ 40, 80, 110 ]} fontFamily={"HurmeGeometricSans3-Regular"}>
                                    Essentials
                                </Text>
                            </Flex>
                        </ContentResizer>
                    </PageHeaderSection>
                    <DocumentationPageTemplate>
                        <Flex flexDirection={"column"}>
                            <TitledSection id={"essentials"} number={1}>
                                <Box>
                                    <MarkdownContent post={essentials} />
                                </Box>
                                <Box id={"newDocument"} number={2}>
                                    <MarkdownContent post={newDocument}/>
                                </Box>
                                <Box id={"saveDocument"} number={3}>
                                    <MarkdownContent post={saveDocument}/>
                                </Box>
                                <Box id={"openDocument"} number={4}>
                                    <MarkdownContent post={openDocument}/>
                                </Box>
                                <Box id={"saveAs"} number={5}>
                                    <MarkdownContent post={saveAs}/>
                                </Box>
                                <Box id={"exportDocument"} number={7}>
                                    <MarkdownContent post={exportDocument}/>
                                </Box>
                                <Box id={"printDocument"} number={8}>
                                    <MarkdownContent post={printDocument}/>
                                </Box>
                            </TitledSection>
                            <TitledSection id={"usingNodio"} number={2}>
                                <Box>
                                    <MarkdownContent post={filesOutline} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={editorsPanel} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={nodioEditorSidebar} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={audioTools} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={startStopRecording} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={startPausePlaying} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={deleteRecording} />
                                </Box>
                                <Box>
                                    <MarkdownContent post={renameRecording} />
                                </Box>
                            </TitledSection>
                            <TitledSection id={"textStatistics"} number={3}>
                                <Box number={14}>
                                    <MarkdownContent post={textStatistics}/>
                                </Box>
                                <Box id={"totalTextStatistics"} number={15}>
                                    <MarkdownContent post={totalTextStatistics}/>
                                </Box>
                                <Box id={"session"} number={16}>
                                    <MarkdownContent post={session}/>
                                </Box>
                                <Box id={"startRestartSession"} number={17}>
                                    <MarkdownContent post={startRestartSession}/>
                                </Box>
                                <Box id={"showHideSession"} number={18}>
                                    <MarkdownContent post={showHideSession}/>
                                </Box>
                                <Box id={"enableDisableSessionTools"} number={19}>
                                    <MarkdownContent post={enableDisableSessionTools}/>
                                </Box>
                            </TitledSection>
                            <TitledSection id={"sidebar"} number={4}>
                                <Box number={20}>
                                    <MarkdownContent post={sidebar}/>
                                </Box>
                                <Box id={"revealHideSidebar"} number={21}>
                                    <MarkdownContent post={revealHideSidebar}/>
                                </Box>
                                <Box id={"tools"} number={22}>
                                    <MarkdownContent post={tools}/>
                                </Box>
                                <Box id={"showHideTools"} number={23}>
                                    <MarkdownContent post={showHideTools}/>
                                </Box>
                                <Box id={"stylePicker"} number={24}>
                                    <MarkdownContent post={stylePicker}/>
                                </Box>
                                <Box id={"showHideStylePicker"} number={25}>
                                    <MarkdownContent post={showHideStylePicker}/>
                                </Box>
                            </TitledSection>
                            <TitledSection id={"markdownFormatting"} number={5}>
                                <Box number={37}>
                                    <MarkdownContent post={markdownFormatting}/>
                                </Box>
                                <Box id={"headerLevel1"} number={38}>
                                    <MarkdownContent post={headerLevel1}/>
                                </Box>
                                <Box id={"headerLevel2"} number={39}>
                                    <MarkdownContent post={headerLevel2}/>
                                </Box>
                                <Box id={"headerLevel3"} number={40}>
                                    <MarkdownContent post={headerLevel3}/>
                                </Box>
                                <Box id={"headerLevel4"} number={41}>
                                    <MarkdownContent post={headerLevel4}/>
                                </Box>
                                <Box id={"headerLevel5"} number={42}>
                                    <MarkdownContent post={headerLevel5}/>
                                </Box>
                                <Box id={"headerLevel6"} number={43}>
                                    <MarkdownContent post={headerLevel6}/>
                                </Box>
                                <Box id={"blockquote"} number={44}>
                                    <MarkdownContent post={blockquote}/>
                                </Box>
                                <Box id={"unorderedList"} number={45}>
                                    <MarkdownContent post={unorderedList}/>
                                </Box>
                                <Box id={"orderedList"} number={46}>
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
                            <TitledSection id={"keyboardShortcuts"} number={6}>
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
export default NodioDocumentation

export const query = graphql`
query {
  addStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/addStyle/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  filesOutline: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/filesOutline/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  editorsPanel: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/nodioEditorsPanel/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  nodioEditorSidebar: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/nodioEditorSidebar/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  audioTools: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/audioTools/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  startStopRecording: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/startStopRecording/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  startPausePlaying: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/startPausePlaying/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  deleteRecording: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/deleteRecording/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }
  renameRecording: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/renameRecording/" } 
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

  editStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/editStyle/" } 
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
        slug: { eq: "/nodioEssentials/" } 
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
        slug: { eq: "/nodioKeyboardShortcuts/" } 
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

  renameStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/renameStyle/" } 
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

  selectStyle: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/selectStyle/" } 
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

  showHideSession: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/showHideSession/" } 
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
        slug: { eq: "/nodioEditorSidebar/" } 
      } 
    }) {
    edges {
      node {
        htmlAst
      }
    }
  }

  startRestartSession: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }, 
    filter: { 
      fields: { 
        slug: { eq: "/startRestartSession/" } 
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

  textAttributesAndHighlight: allMarkdownRemark(
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