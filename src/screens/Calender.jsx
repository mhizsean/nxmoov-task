import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import arrowLeft from "../assets/icons/arrow_down.png";
import arrowRight from "../assets/icons/arrow_right.png";
import arrow from "../assets/icons/arrowDown.svg";
import CalendarBody from "./partials/CalendarCells";

const Calendar = () => {

  return (
    <Container maxW="90%" mt="8" height='100vh'>
      <HStack justifyContent="space-between">
        <Flex alignItems="center">
          <Text fontSize="2xl" fontWeight="semibold">
            Calendar
          </Text>

          <Flex ml="10" alignItems="center">
            <Button bg="transparent" border="1px solid #d0d2d6" mr="3">
              <Image src={arrowLeft} />
            </Button>

            <Text fontSize="md" fontWeight="medium">
              17-11 March 2022
            </Text>
            <Button bg="transparent" border="1px solid #d0d2d6" ml="3">
              <Image src={arrowRight} />
            </Button>
          </Flex>
        </Flex>

        <Stack>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                px="4"
                py="2"
                transition="all 0.2s"
                border="none"
                bg="transparent"
              >
                GMT +7:30{" "}
                <IconButton bg="transparent" icon={<Image src={arrow} />} />
              </MenuButton>
              <MenuList>
                <MenuItem>+1:00</MenuItem>
                <MenuItem>-4:00</MenuItem>
              </MenuList>
            </Menu>

            <Center height="20px" px="7">
              <Divider orientation="vertical" />
            </Center>

            <Menu>
              <MenuButton
                px="4"
                py="2"
                transition="all 0.2s"
                border="none"
                bg="transparent"
              >
                Work week{" "}
                <IconButton bg="transparent" icon={<Image src={arrow} />} />
              </MenuButton>
              <MenuList>
                <MenuItem>Work Month</MenuItem>
              </MenuList>
            </Menu>

            <Button
              bg="#0580a4"
              color="#fff"
              fontSize="md"
              borderRadius="4px"
              p="6px 8px 6p 8px"
              _hover='none'
            >
              + Add new
            </Button>
          </Flex>
        </Stack>
      </HStack>
        <Box >
            <CalendarBody />
        </Box>

    </Container>
  );
};

export default Calendar;
