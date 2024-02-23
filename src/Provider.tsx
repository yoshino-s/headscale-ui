import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';

import { useState } from 'react';

import { MantineProvider, type MantineProviderProps } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { Spotlight } from '@mantine/spotlight';

import { MetaContext, Metadata } from '@/utils/useMetadata';

export function Provider({ children, ...props }: MantineProviderProps) {
  const [metadata, setMetadata] = useState<Metadata>({
    title: 'Mantine App',
  });
  useDocumentTitle(metadata.title ?? 'Mantine App');

  return (
    <MantineProvider withCssVariables {...props}>
      <MetaContext.Provider value={[metadata, setMetadata]}>
        <ModalsProvider>
          <Notifications />
          <Spotlight shortcut="mod + k" actions={[]} />
          {children}
        </ModalsProvider>
      </MetaContext.Provider>
    </MantineProvider>
  );
}
