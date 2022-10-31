import { Image, VStack } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import refresh from '../assets/icons/reload.png'
import briefcase from '../assets/icons/briefcase.png'
import order from '../assets/icons/order.png'
import calendar from '../assets/icons/calendar.png'
import message from '../assets/icons/messages.png'
import profile from '../assets/icons/profiles.png'
import card from '../assets/icons/card.png'

const LeftBar = () => {
    return (
        <VStack background='#2c273d' padding='0' height='100%'>
           <Image src={logo} alt="logo" marginTop='4' marginBottom='8' />

           <VStack spacing='30px'>
                <Image src={refresh} alt="menu-icon" />
                <Image src={briefcase} alt="menu-icon" />
                <Image src={order} alt="menu-icon"/>
                <Image src={calendar} alt="menu-icon" />
                <Image src={message} alt="menu-icon" />
                <Image src={profile} alt="menu-icon"/>
                <Image src={card} alt="menu-icon"/>
           </VStack>

        </VStack>
    )
}

export default LeftBar

