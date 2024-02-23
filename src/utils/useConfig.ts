import { useLocalStorage } from '@mantine/hooks';

export function useConfig() {
  const u = new URL(location.href);
  u.pathname = '/';
  const defaultUrl = localStorage.getItem('url') ?? u.toString();

  const [url, setUrl] = useLocalStorage({
    key: 'url',
    defaultValue: defaultUrl,
  });
  const [token, setToken] = useLocalStorage({
    key: 'token',
  });

  return { url, setUrl, token, setToken };
}

export function getConfig() {
  const u = new URL(location.href);
  u.pathname = '/';
  let v = localStorage.getItem('url');
  const defaultUrl = v ? JSON.parse(v) : u.toString();
  v = localStorage.getItem('token');
  const defaultToken = v ? JSON.parse(v) : '';

  return { url: defaultUrl, token: defaultToken };
}
