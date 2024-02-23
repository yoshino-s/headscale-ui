import { Dispatch, SetStateAction, createContext, useContext } from 'react';

export interface Metadata {
  title?: string;
  description?: string;
  withTabs?: boolean;
}

export const MetaContext = createContext<
  [Metadata, Dispatch<SetStateAction<Metadata>>]
>([{}, () => {}]);

export function useMetadata(): [Metadata, Dispatch<SetStateAction<Metadata>>] {
  const [meta, setMeta] = useContext(MetaContext);

  return [meta, setMeta];
}
