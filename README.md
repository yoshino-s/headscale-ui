# Headscale-UI

![alt text](./screenshots/dashboard.png)

## Features

- Light/Dark/Auto theme
- Responsive design
- TypeScript

## Installation

### Docker

```bash
docker run -d -p 8080:80 headscale-ui
```

And goto http://localhost:8080/web/ to see the UI.

### Manual

Download the static assets from https://github.com/Yoshino-s/headscale-ui/releases and serve them with your favorite web server. Example with nginx: [nginx.conf](./nginx.conf)