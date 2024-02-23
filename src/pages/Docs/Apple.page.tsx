/* eslint-disable react/no-unescaped-entities */

import { Container, TypographyStylesProvider } from '@mantine/core';

import { getConfig } from '@/utils/useConfig';

export default function ApplePage() {
  const { url } = getConfig();

  return (
    <Container mt="md">
      <TypographyStylesProvider>
        <h2>Recent Tailscale versions (1.34.0 and higher)</h2>
        <p>
          Tailscale added Fast User Switching in version 1.34 and you can now
          use the new login command to connect to one or more headscale (and
          Tailscale) servers. The previously used profiles does not have an
          effect anymore.
        </p>
        <h3>Command line</h3>
        <p>Use Tailscale's login command to add your profile:</p>
        <pre>
          <code>tailscale login --login-server {url}</code>
        </pre>
        <h3>GUI</h3>
        <ol>
          <li>
            ALT + Click the Tailscale icon in the menu and hover over the Debug
            menu
          </li>
          <li>Under "Custom Login Server", select "Add Account..."</li>
          <li>
            Enter "{url}" of the headscale instance and press "Add Account"
          </li>
          <li>Follow the login procedure in the browser</li>
        </ol>
        <h2>Apple configuration profiles (1.32.0 and lower)</h2>
        <p>
          This page provides
          <a href="https://support.apple.com/guide/mdm/mdm-overview-mdmbf9e668/web">
            configuration profiles
          </a>
          for the official Tailscale clients for
        </p>
        <ul>
          <li>
            <a href="https://apps.apple.com/app/tailscale/id1475387142">
              macOS - AppStore Client
            </a>
            .
          </li>
          <li>
            <a href="https://pkgs.tailscale.com/stable/#macos">
              macOS - Standalone Client
            </a>
            .
          </li>
        </ul>
        <p>
          The profiles will configure Tailscale.app to use <code>{url}</code> as
          its control server.
        </p>
        <h3>Caution</h3>
        <p>
          You should always download and inspect the profile before installing
          it:
        </p>
        <ul>
          <li>
            for app store client: <code>curl {url}/apple/macos-app-store</code>
          </li>
          <li>
            for standalone client:{' '}
            <code>curl {url}/apple/macos-standalone</code>
          </li>
        </ul>
        <h2>Profiles</h2>
        <h3>macOS</h3>
        <p>
          Headscale can be set to the default server by installing a Headscale
          configuration profile:
        </p>
        <p>
          <a
            href="/apple/macos-app-store"
            download="headscale_macos.mobileconfig"
          >
            macOS AppStore profile
          </a>
          <a
            href="/apple/macos-standalone"
            download="headscale_macos.mobileconfig"
          >
            macOS Standalone profile
          </a>
        </p>
        <ol>
          <li>
            Download the profile, then open it. When it has been opened, there
            should be a notification that a profile can be installed
          </li>
          <li>Open System Preferences and go to "Profiles"</li>
          <li>Find and install the Headscale profile</li>
          <li>Restart Tailscale.app and log in</li>
        </ol>
        <p>Or</p>
        <p>
          Use your terminal to configure the default setting for Tailscale by
          issuing:
        </p>
        <ul>
          <li>
            for app store client:
            <code>defaults write io.tailscale.ipn.macos ControlURL {url}</code>
          </li>
          <li>
            for standalone client:
            <code>defaults write io.tailscale.ipn.macsys ControlURL {url}</code>
          </li>
        </ul>
        <p>Restart Tailscale.app and log in.</p>
        <h1>headscale: iOS configuration</h1>
        <h2>Recent Tailscale versions (1.38.1 and higher)</h2>
        <p>
          Tailscale 1.38.1 on{' '}
          <a href="https://apps.apple.com/app/tailscale/id1470499037">iOS</a>{' '}
          added a configuration option to allow user to set an "Alternate
          Coordination server". This can be used to connect to your headscale
          server.
        </p>
        <h3>GUI</h3>
        <ol>
          <li>
            Install the official Tailscale iOS client from the{' '}
            <a href="https://apps.apple.com/app/tailscale/id1470499037">
              App store
            </a>{' '}
          </li>
          <li>
            Open Tailscale and make sure you are <i>not</i> logged in to any
            account
          </li>
          <li>Open Settings on the iOS device</li>
          <li>
            Scroll down to the "third party apps" section, under "Game Center"
            or "TV Provider"
          </li>
          <li>
            Find Tailscale and select it
            <ul>
              <li>
                If the iOS device was previously logged into Tailscale, switch
                the "Reset Keychain" toggle to "on"
              </li>
            </ul>
          </li>
          <li>Enter "{url}" under "Alternate Coordination Server URL"</li>
          <li>
            Restart the app by closing it from the iOS app switcher, open the
            app and select the regular sign in option <i>(non-SSO)</i>. It
            should open up to the headscale authentication page.
          </li>
          <li>
            Enter your credentials and log in. Headscale should now be working
            on your iOS device
          </li>
        </ol>
      </TypographyStylesProvider>
    </Container>
  );
}
