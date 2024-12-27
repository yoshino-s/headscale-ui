import { Suspense, useCallback } from 'react';

import {
  AppShell,
  Box,
  Burger,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  rem,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import {
  Icon,
  IconArrowsCross,
  IconBook,
  IconDevices2,
  IconFingerprint,
  IconHome2,
  IconMoon,
  IconRefresh,
  IconRouter,
  IconSun,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { NavLink, Outlet } from 'react-router-dom';

import classes from './Main.module.css';

import { useMetadata } from '@/utils/useMetadata';

interface NavbarLinkProps {
  icon: Icon;
  label: string;
  to?: string;
  onClick?: () => void;
}

function NavbarLink({ icon: Icon, label, to, onClick }: NavbarLinkProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const inner = (
    <Group w="100%" ml="md">
      <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      {isMobile ? <Text>{label}</Text> : null}
    </Group>
  );

  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      {to ? (
        <NavLink
          className={({ isActive }) => {
            return `${classes.link} ${isActive ? classes['link-active'] : ''} {}`;
          }}
          to={to}
        >
          {inner}
        </NavLink>
      ) : (
        <UnstyledButton className={classes.link} onClick={onClick}>
          {inner}
        </UnstyledButton>
      )}
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home', to: '/' },
  { icon: IconDevices2, label: 'Nodes', to: '/machine' },
  { icon: IconRouter, label: 'Routes', to: '/routes' },
  { icon: IconUser, label: 'Users', to: '/users' },
  { icon: IconFingerprint, label: 'Api Keys', to: '/apikeys' },
  { icon: IconArrowsCross, label: 'Policy', to: '/policy' },
  { icon: IconBook, label: 'Documents', to: '/docs' },
];

export function MainLayout() {
  const [meta] = useMetadata();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const toggleColorScheme = useCallback(() => {
    if (colorScheme === 'light') setColorScheme('dark');
    else if (colorScheme === 'dark') setColorScheme('auto');
    else setColorScheme('light');
  }, [colorScheme, setColorScheme]);

  const links = mockdata.map((link) => (
    <NavbarLink {...link} key={link.label} />
  ));

  const [opened, { toggle }] = useDisclosure(false);
  return (
    <AppShell
      header={{
        height: 60,
        collapsed: !isMobile,
      }}
      navbar={{
        width: 50,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack
          gap="0"
          style={{
            flexGrow: 1,
          }}
          onClick={isMobile ? toggle : undefined}
        >
          {links}
        </Stack>
        <Stack justify="center" gap={0}>
          <NavbarLink
            icon={
              colorScheme === 'light'
                ? IconSun
                : colorScheme === 'auto'
                  ? IconRefresh
                  : IconMoon
            }
            onClick={toggleColorScheme}
            label={colorScheme[0].toUpperCase() + colorScheme.slice(1)}
          />
          <NavbarLink
            icon={IconSwitchHorizontal}
            label="Change account"
            to="/login"
          />
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className={classes.wrapper}>
          <Box className={classes.header} mod={{ 'with-tabs': meta.withTabs }}>
            <Title className={classes.title}>{meta.title}</Title>
            <Text className={classes.description}>{meta.description}</Text>
          </Box>
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </AppShell.Main>
    </AppShell>
  );
}
