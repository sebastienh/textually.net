// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import React from "react"

import { LocationProvider } from "./src/context/LocationContext"
import { DrawerProvider } from "./src/context/DrawerContext"
import { ScrollingNumbersSidebarProvider } from "./src/context/ScrollingNumbersSidebarContext" 

export const wrapRootElement = ({ element }) => (

    <DrawerProvider>
        <LocationProvider>
            <ScrollingNumbersSidebarProvider>
                {element}
            </ScrollingNumbersSidebarProvider>
        </LocationProvider>
    </DrawerProvider>
)