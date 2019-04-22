import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { Flex } from "rebass";

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

export function StyledTabList(props) {

    return (
        <Flex {...props} fontSize={[1,2,3]} flexDirection={"row"} justifyContent={"center"} style={{overflowX:"auto"}}>
          <StyledTabListContent {...props}>
            {props.children}
          </StyledTabListContent>
        </Flex>
    )
}

StyledTabList.tabsRole = 'TabList';

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
        background: #eee;
    }

    &:focus, &:hover {
        outline: none;
        background: #eee;
    }
`;
StyledTab.tabsRole = 'Tab';

export const StyledTabPanel = styled(TabPanel)`
  display: none;
  padding: 4px;
    margin-top: 15px;

  &.is-selected {
    display: block;
  }
`;
StyledTabPanel.tabsRole = 'TabPanel';