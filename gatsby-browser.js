// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import React from "react"

import { LocationProvider } from "./src/context/LocationContext"
import { DrawerProvider } from "./src/context/DrawerContext"

export const wrapRootElement = ({ element }) => (
    <DrawerProvider>
        <LocationProvider>
            {element}
        </LocationProvider>
    </DrawerProvider>
)