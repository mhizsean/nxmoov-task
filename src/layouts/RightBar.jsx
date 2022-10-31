import { Box, Image, Text, VStack } from "@chakra-ui/react"
import check from '../assets/icons/check.png'
import notes from '../assets/icons/notes.png'
import folder from '../assets/icons/folder.png'


const RightBar = () => {
    return (
        <VStack direction='column' background='white' borderLeft='1px solid #e1eaed' height='100%'>
            <Box marginBottom='5px' paddingTop='4'>
                <Image src={check} alt='task' margin='3' />
                <Text align='center' fontSize='sm'>Tasks</Text>
            </Box>
            <Box marginBottom='5px'>
                <Image src={notes} alt='task' margin='3' />
                <Text align='center' fontSize='sm'>Notes</Text>
            </Box>
            <Box >
                <Image src={folder} alt='task' margin='3' />
                <Text align='center' fontSize='sm'>Folders</Text>
            </Box>
        </VStack>
    )
}

export default RightBar