import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import { Provider } from './Provider';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <Provider theme={theme}>
      <Notifications />
      <Router />
    </Provider>
  );
}
