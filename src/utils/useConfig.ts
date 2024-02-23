export function getConfig() {
  const u = new URL(location.href);
  u.pathname = '/';
  const defaultUrl = localStorage.getItem('url') ?? u.toString();
  const defaultToken = localStorage.getItem('token') ?? '';

  return { url: defaultUrl, token: defaultToken };
}
