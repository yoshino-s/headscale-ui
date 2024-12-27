import { memo, useCallback, useEffect, useRef } from 'react';

import { useComputedColorScheme } from '@mantine/core';

import Editor, { OnMount, type EditorProps } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

import styles from './MonacoEditor.module.css';
import { useResizeObserver } from '@mantine/hooks';
import "./loader";

const MonacoEditor = memo((props: EditorProps) => {
  const schema = useComputedColorScheme('light');
  const [ref, rect] = useResizeObserver();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    editorRef.current?.layout({
      height: ref.current.clientHeight,
      width: ref.current.clientWidth,
    });
  }, [rect]);

  const onMount: OnMount = useCallback((editor, monaco) => {
    editor.layout();
    editorRef.current = editor;
    props.onMount?.(editor, monaco);
  }, [editorRef]);

  return (
    <div ref={ref} style={{
      flex: 1,
    }}>
      <Editor
        className={`${styles.editor} ${props.className ?? ''}`}
        theme={schema === 'dark' ? 'vs-dark' : 'light'}
        {...props}
        onMount={onMount}
      />
    </div>
  );
});

export default MonacoEditor;