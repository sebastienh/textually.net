import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { Flex, Box, Text, Container, Provider, Header } from "rebass";

export const StyledTabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
`;

export const StyledTabListContent = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  font-family: HurmeGeometricSans3-Regular, -apple-sans-serif, "Avenir Next", sans-serif;
`;
StyledTabListContent.tabsRole = 'TabList';

export function StyledTabList(props) {

    return (
        <Flex fontSize={[1,2,3]} flexDirection={"row"} justifyContent={"center"}>
          <StyledTabListContent>
            {props.children}
          </StyledTabListContent>
        </Flex>
    )
}


export const StyledTab = styled(Tab)`
  margin-right: 4px;
  border: 1px solid black; 
  border-radius: 4px;
  margin-left: 12px;
  margin-right: 12px;
  padding-left: 4px;
  padding-right: 4px;
  margin-bottom: 0px;
  margin-top: 20px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    // color: white;
    // background: black;
    /* border-bottom: 1px solid blue; */
    box-shadow: 0 1px 0px 0px rgba(0, 0, 255, .5)
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
`;
StyledTab.tabsRole = 'Tab';

export const StyledTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  /* border: 1px solid black; */
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
StyledTabPanel.tabsRole = 'TabPanel';