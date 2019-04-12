import React from 'react'
import PageLocation from "../components/PageLocation"
import PageTemplate from "../components/PageTemplate"
import SEO from "../components/seo"
import { Flex, Text, Heading } from "rebass";

const ContactFormSuccess = (props) => (
    <PageLocation path={["/", "contact"]}>
        <SEO
        title="Thank you for contacting us "
        keywords={[`contact`, `success`, `textually`, `email`]}
        />
        <PageTemplate>
            <div id="main" className="alt">
                <section id="one">
                    <Flex mt={120} flexDirection={"row"} justifyContent={"center"}> 
                        <Heading  color={"#D74E09"} fontSize={[5]}>Request received!</Heading>
                    </Flex>
                    <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
                        <Text>Thank you for contacting us! We will handle your request as soon as possible...</Text>
                    </Flex>
                    <Flex mt={60} flexDirection={"row"} justifyContent={"center"}> 
                        <Text>Textually team</Text>
                    </Flex>
                </section>
            </div>
        </PageTemplate>
    </PageLocation>
)

export default ContactFormSuccess