import { 
    Text, 
    Flex, 
    IconButton, 
    InputGroup, 
    Input,
    InputRightElement,
    Stack,
    Button,
    Box,
    Textarea,
    Avatar,
    AvatarGroup
} from "@chakra-ui/react"
import ExpandIcon from "../../assets/icons/ExpandIcon"
import benImage from "../../assets/icons/man.png"
import { CopyIcon, EventCancelIcon, TimerIcon, CalendarIcon } from "../../assets/icons/Icons"

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
                <Flex alignItems='center'>
                    <IconButton bg={"transparent"} icon={<CalendarIcon />} />
                    <Text>Tue 03/29/2022 </Text>
                </Flex>

                <Text fontSize='14px' fontWeight='500'>Interview link</Text>
                <Flex justifyContent='space-between'>
                    <InputGroup width='unset'>
                        <Input type='text' value='https://us0212...' width='157px' fontSize='14px' fontWeight='400' borderRadius='4px' />
                        <InputRightElement cursor='pointer' children={<IconButton bg={"transparent"} icon={<CopyIcon/>} />} />
                    </InputGroup>

                    <Button bg='#0580a4' color='#fff' fontSize='md' _hover='none '>Go to callroom</Button>
                </Flex>

                <Box >
                    <Flex width='100%' border='1px solid #e1eaed' p='5px' justifyContent='space-between'>
                        <Flex>
                            <Avatar name="Benendict" src={benImage} />
                            <Flex direction='column' ml='4px'>
                                <Text fontSize='14px' fontWeight='500'>Benedict Swan</Text>
                                <Text fontSize='12px' fontWeight='400'>ben10@gmail.com</Text>
                            </Flex>
                        </Flex>
                        <Flex direction='column'>
                            <Text fontSize='12px'>Interview Panel</Text>
                            <AvatarGroup size='sm' max={4}>
                                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                            </AvatarGroup>
                        </Flex>
                    </Flex>
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