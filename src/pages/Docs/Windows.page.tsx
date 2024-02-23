/* eslint-disable react/no-unescaped-entities */

import { Container, TypographyStylesProvider } from '@mantine/core';

import { useConfig } from '@/utils/useConfig';

export default function WindowsPage() {
  const { url } = useConfig();

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
        <p>Use Tailscale's login command to add your profile:</p>
        <pre>
          <code>tailscale login --login-server {url}</code>
        </pre>

        <h2>Windows registry configuration (1.32.0 and lower)</h2>
        <p>
          This page provides Windows registry information for the official
          Windows Tailscale client.
        </p>

        <p></p>
        <p>
          The registry file will configure Tailscale to use <code>{url}</code>{' '}
          as its control server.
        </p>

        <p></p>
        <h3>Caution</h3>
        <p>
          You should always download and inspect the registry file before
          installing it:
        </p>
        <pre>
          <code>curl {url}/windows/tailscale.reg</code>
        </pre>

        <h2>Installation</h2>
        <p>
          Headscale can be set to the default server by running the registry
          file:
        </p>

        <p>
          <a href="/windows/tailscale.reg" download="tailscale.reg">
            Windows registry file
          </a>
        </p>

        <ol>
          <li>Download the registry file, then run it</li>
          <li>Follow the prompts</li>
          <li>Install and run the official windows Tailscale client</li>
          <li>
            When the installation has finished, start Tailscale, and log in by
            clicking the icon in the system tray
          </li>
        </ol>
        <p>Or using REG:</p>
        <p>
          Open command prompt with Administrator rights. Issue the following
          commands to add the required registry entries:
        </p>
        <pre>
          <code>
            REG ADD "HKLM\Software\Tailscale IPN" /v UnattendedMode /t REG_SZ /d
            always REG ADD "HKLM\Software\Tailscale IPN" /v LoginURL /t REG_SZ
            /d "{url}"
          </code>
        </pre>
        <p>Or using Powershell</p>
        <p>
          Open Powershell with Administrator rights. Issue the following
          commands to add the required registry entries:
        </p>
        <pre>
          <code>
            New-ItemProperty -Path 'HKLM:\Software\Tailscale IPN' -Name
            UnattendedMode -PropertyType String -Value always New-ItemProperty
            -Path 'HKLM:\Software\Tailscale IPN' -Name LoginURL -PropertyType
            String -Value "{url}"
          </code>
        </pre>
        <p>Finally, restart Tailscale and log in.</p>
      </TypographyStylesProvider>
    </Container>
  );
}
