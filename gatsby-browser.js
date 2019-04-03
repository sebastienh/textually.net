// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import React from "react"

import { LocationProvider } from "./src/context/LocationContext"
import { DrawerProvider } from "./src/context/DrawerContext"
import { ScrollingNumbersSidebarProvider } from "./src/context/ScrollingNumbersSidebarContext" 
import { TitledSidebarProvider } from "./src/context/TitledSidebarContext" 

export const wrapRootElement = ({ element }) => (

    <DrawerProvider>
        <LocationProvider>
            <ScrollingNumbersSidebarProvider>
                <TitledSidebarProvider>
                    {element}
                </TitledSidebarProvider>
            </ScrollingNumbersSidebarProvider>
        </LocationProvider>
    </DrawerProvider>
)