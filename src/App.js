import { Stack } from '@chakra-ui/react';
import Layout from './layouts/Content';
import Calendar from './screens/Calender';

function App() {
  return (
    <Stack background='#f8fafb'>
      <Layout>
        <Calendar />
      </Layout>
    </Stack>
  );
}

export default App;
