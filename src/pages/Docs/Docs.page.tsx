import { useEffect } from 'react';

import { Paper, Tabs } from '@mantine/core';

import { IconBrandApple, IconBrandWindows } from '@tabler/icons-react';

import ApplePage from './Apple.page';
import classes from './Docs.module.css';
import WindowsPage from './Windows.page';

import { useMetadata } from '@/utils/useMetadata';

export default function DocsPage() {
  const [, setMetadata] = useMetadata();

  useEffect(() => {
    setMetadata({
      title: 'Configurations',
      description: 'Configure your headscale',
    });
  }, [setMetadata]);

  return (
    <Paper radius="0">
      <Tabs defaultValue="windows" variant="outline" classNames={classes}>
        <Tabs.List>
          <Tabs.Tab value="windows" leftSection={<IconBrandWindows />}>
            Windows
          </Tabs.Tab>
          <Tabs.Tab value="apple" leftSection={<IconBrandApple />}>
            Apple
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="windows">
          <WindowsPage />
        </Tabs.Panel>

        <Tabs.Panel value="apple">
          <ApplePage />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
}
