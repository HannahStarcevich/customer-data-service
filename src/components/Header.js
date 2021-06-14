import { Heading } from "@chakra-ui/react"

function Header(){

    return(
        <header className="container mx-auto">
             <Heading as="h2" size="3xl" isTruncated>
                 Customer Data Service
            </Heading>
        </header>
    )

}

export default Header