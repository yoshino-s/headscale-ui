import { lazy, useCallback, useEffect } from 'react';

import { Container, Skeleton, rem } from '@mantine/core';

import { headscaleServiceGetPolicy, headscaleServiceSetPolicy } from '@/request';
import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';
import { OnMount } from '@monaco-editor/react';

import schema from "./schema.json";
import { notifications } from '@mantine/notifications';

const MonacoEditor = lazy(() => import('@/components/MonacoEditor/MonacoEditor'));

export default function PolicyPage() {
  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Policy',
      description: 'Manage policy',
    });
  }, [setMeta]);

  const { data: policy, isLoading: isLoadPolicy } = useSwrQuery(
    headscaleServiceGetPolicy,
  );

  const onMount: OnMount = useCallback((editor, monaco) => {
    editor.layout();
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'https://json.schemastore.org/tailscale_acls',
          fileMatch: ['*'],
          schema: schema,
        },
      ],
    });
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      console.log(editor.getValue());
      callQuery(headscaleServiceSetPolicy, {
        policy: editor.getValue(),
      }).then(() => {
        notifications.show({
          title: 'Policy updated',
          message: 'Policy updated successfully',
          color: 'green',
        });
      })
    });
  }, []);

  return (
    <>
      <Container
        flex={1}
        w="100%"
        h="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MonacoEditor
          language="json"
          height="100%"
          value={policy?.policy}
          onMount={onMount}
        />
      </Container>
    </>
  );
}
