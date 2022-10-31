import {Box, 
        Flex,
        HStack, 
        Text, 
        Image, 
        Select,
        InputGroup, 
        Divider, 
        Center, 
        InputLeftElement, 
        Input,  
        Avatar,
        IconButton
    } from "@chakra-ui/react"
import search from "../assets/icons/Search.png"
import profileImg from '../assets/profileImg.png'
import arrow from '../assets/icons/arrowDown.svg'
import bell from '../assets/icons/notification.png'
import plus from '../assets/icons/plus.png'
import { ToggleICon } from "../assets/icons/Icons"

const TopBar = () => {
    return (
        <HStack as="nav" justifyContent='space-between' background='#fff' borderBottom='1px solid #e1eaed' alignItems='center' height='72px' px='3'>

                <Box>
                    <Flex alignItems='center'>
                        <IconButton icon={<ToggleICon />} bg="transparent" alt="menu-icon" marginLeft='5' marginRight='6'/>
                        <Select placeholder="Advanced Micro Devices, Inc." width='fit-content' fontWeight='500' /> 

                        <Text background='#eeeef0' borderRadius='4' marginLeft={'8px'} padding='0px 4px' height='fit-content' fontWeight='bold'>130</Text>
                        <Text color='#046f8f' fontWeight='bold' marginLeft='3'>Credits</Text>
                    </Flex>
                </Box>

                <Box >
                    <Flex alignItems='center' gap='24px'>
                        <InputGroup width='unset'>
                            <InputLeftElement pointerEvents='none' children={<Image src={search} />} paddingLeft='4' />
                            <Input type='text'  placeholder="Search" width='300px' borderRadius='68px' marginLeft='4' />
                        </InputGroup>

                            <Text fontSize='lg' color='gray.900' whiteSpace='nowrap'>William smith</Text>
                            <Avatar src={profileImg} name="William" />
                            <Image src={arrow} />

                            <Center height='40px' px='7'>
                                <Divider orientation='vertical' />
                            </Center>

                            <Image src={bell} alt='notify' border='1px solid gray' borderRadius='52px' px='5px' py='5px' />
                            <Image src={plus} alt='add' bgColor='#0580a4' borderRadius='52px' mx='3' px='3' py='3' />
                    </Flex>
                </Box>


        </HStack>
    )
}

export default TopBar