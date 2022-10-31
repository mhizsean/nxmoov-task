import { Box, Flex } from "@chakra-ui/react"
import LeftBar from "./LeftNavBar"
import RightBar from "./RightBar"
import TopBar from "./TopBar"

const Layout = ({children}) => {
    return (
        <>
            <Flex>
                <Box w='80px' h='100vh'>
                    <LeftBar />
                </Box>
                
                <Box w={'full'}>
                    <TopBar/>
                    {children}
                </Box>

                <Box w='72px'>
                        <RightBar/>
                </Box>
            </Flex>
        </>
    )
}

export default Layout