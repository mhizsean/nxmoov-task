import { 
    Box, 
    HStack, 
    Popover, 
    PopoverContent, 
    PopoverTrigger, 
    Stack, 
    Text, 
    useDisclosure
} from "@chakra-ui/react";
import ScheduleTask from "./ScheduleTask";
import styles from "../Calendar.module.css";
import { addHours, differenceInMinutes, getDay, startOfDay } from "date-fns";

const CalendarBody = () => {
    const { onOpen } = useDisclosure();

  return (
    <HStack spacing={0} position="relative" w='100%' mt='20px'>
        <Event start={new Date("2022-10-25T06:30:00")} duration={90}>
            <Popover placement="right" matchWidth="200px" >
              <PopoverTrigger>
                <Box onClick={onOpen} cursor='pointer'>
                    <TestEvent desc={'describ'} />
                </Box>
              </PopoverTrigger>

              <PopoverContent width="320px">
                <ScheduleTask />
              </PopoverContent>
            </Popover>
        </Event>
        <Event start={new Date("2022-10-27T13:00:00")} duration={90} >
            <Popover placement="right" matchWidth="200px" >
              <PopoverTrigger>
                <Box onClick={onOpen} cursor='pointer'>
                    <TestEvent />
                </Box>
              </PopoverTrigger>

              <PopoverContent width="320px">
                <ScheduleTask />
              </PopoverContent>
            </Popover>
        </Event>
        <Stack spacing={0} className={styles.CalendarColumn}>
        <Cell></Cell>
        {times.map((t) => (
            <Cell className={styles.CalendarCells}  
            key={t}>{t}:00</Cell>
        ))}
        </Stack>
        {nth(columns).map((_, c) => (
        <Stack
            className={styles.CalendarColumn}
            key={`column-${c}`}
            spacing={0}
            
        >
            <Cell><Text className={styles.Text} >{days[c]} </Text></Cell>
            {nth(rows).map((_, r) => (
            <Cell key={`column-${c}-row-${r}`}> </Cell>
            ))}
        </Stack>
        ))}
    </HStack>
  );
}

const nth = (n) => [...Array(n)];
const days = ["mon", "tue", "wed", "thu", "fri"];
const columns = days.length;

const times = [];

for (let t = 6; t <= 15; t += 0.5) {
  console.log(t);
  times.push(t);
}

const rows = times.length;

const Cell = ({ children, className }) => {
  return (
    <Box className={`${styles.CalendarCell} ${className}`} height="34px" width="221px">
      {children}
    </Box>
  );
};

const Event = ({ start, duration, children }) => {
  const day = getDay(start) - 1;

  const diffMinutes = differenceInMinutes(
    start,
    addHours(startOfDay(start), 6)
  );

  return (
    <div
      className={styles.Event}
      style={{
        "--day": day,
        "--start": diffMinutes,
        "--duration": duration,
      }}
    >
      {children}
    </div>
  );
};

    const eventDetails = [
        {
            title: 'Interview with hr',
            time: '10:00 - 13:00',
            desc: 'Welcoming new memeber to the Product team'
        },
    
     
    ]

export const TestEvent = ({title, desc, time}) =>  {
    return (
        <>
        {eventDetails?.map((ed, i) => (
                <Stack p='6px' key={i}>
                    <Text fontSize='12px' fontWeight='500'>{ed.title}</Text>

                    <Text fontSize='12px'>{ed.desc}</Text>

                    <Text fontSize='12px'>{ed.time}</Text>
                </Stack>
        ))
        }
    </>

    )
}

export default CalendarBody;