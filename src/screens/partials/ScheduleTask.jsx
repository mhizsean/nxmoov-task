import { 
    VStack, 
    Text, 
    Flex, 
    IconButton, 
    InputGroup, 
    Input,
    InputRightElement,
    Image,
    Stack,
    Button,
    Box,
    Textarea
} from "@chakra-ui/react"
import ExpandIcon from "../../assets/icons/ExpandIcon"
import { CopyIcon, EventCancelIcon, TimerIcon } from "../../assets/icons/Icons"

const ScheduleTask = () => {
    return (
        <>
            <Stack p='8px 10px' spacing='10px'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Text fontSize='sm' textTransform='uppercase'>meeting</Text>
                    <IconButton bg={"transparent"} icon={<ExpandIcon />} />
                </Flex>

                <Text>Interview for HR Manager role</Text>

                <Flex alignItems='center'>
                    <IconButton bg={"transparent"} icon={<TimerIcon />} />
                    <Text>10:00 -12:00 pm</Text>
                </Flex>

                <Text fontSize='14px' fontWeight='500'>Interview link</Text>
                <Flex justifyContent='space-between'>
                    <InputGroup width='unset'>
                        <Input type='text' value='https://us0212...' width='157px' fontSize='14px' fontWeight='400' borderRadius='4px' />
                        <InputRightElement cursor='pointer' children={<IconButton bg={"transparent"} icon={<CopyIcon/>} />} />
                    </InputGroup>

                    <Button bg='#0580a4' color='#fff' fontSize='md' _hover='none '>Go to callroom</Button>
                </Flex>

                <Box>
                    
                </Box>

                {/* textarea */}
                <Box bg='#F8FAFB' border='1px solid #DAE1E3' p='6px'>
                    <Flex alignItems='center'>
                        <IconButton bg="transparent" icon={<EventCancelIcon />} />
                        <Text color='#0580a4'>Cancel event and notify attendees</Text>
                    </Flex>

                    <Textarea bg='#fff' value='Hi, Canceling event' />

                    <Flex alignItems='flex-end' mt='6px' justifyContent='flex-end'>
                        <Button bg='#fff' border='1px solid #DAE1E3'>Discard</Button>
                        <Button ml='6px' bg='#0580a4' color='#fff'>Send</Button>
                    </Flex>
                </Box>
            </Stack>

        </>
    )
}

export default ScheduleTask