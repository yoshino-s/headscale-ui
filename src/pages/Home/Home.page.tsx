import { useEffect } from 'react';

import {
  Center,
  Container,
  RingProgress,
  Skeleton,
  Stack,
  Text,
  rem,
} from '@mantine/core';

import {
  Icon,
  IconDevices2,
  IconKey,
  IconRouter,
  IconUser,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';

import classes from './Home.module.css';

import {
  V1ApiKey,
  headscaleServiceListApiKeys,
  headscaleServiceListMachines,
  headscaleServiceListUsers,
} from '@/request';
import { headscaleServiceListRoutes } from '@/request/api/headscaleServiceListRoutes';
import { useMetadata } from '@/utils/useMetadata';
import { useSwrQuery } from '@/utils/useQuery';

interface StatusProps {
  title: string;
  icon: Icon;
  all: number;
  active: number;
  isLoading: boolean;
  to: string;
}

function isExpire(apiKeys: V1ApiKey) {
  return new Date(apiKeys.expiration!) < new Date();
}

function Status({
  to,
  isLoading,
  all,
  active,
  title,
  icon: Icon,
}: StatusProps) {
  return (
    <Text component={Link} className={classes.stat} to={to}>
      <Skeleton visible={isLoading}>
        <Stack>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: (active / all) * 100, color: 'green' }]}
            label={
              <Center>
                {
                  <Icon
                    style={{ width: rem(20), height: rem(20) }}
                    stroke={2}
                    className={classes.icon}
                  />
                }
              </Center>
            }
          />

          <div>
            <Text className={classes.count}>
              {active} / {all}
            </Text>
            <Text className={classes.title}>{title}</Text>
          </div>
        </Stack>
      </Skeleton>
    </Text>
  );
}

export default function HomePage() {
  const [, setMeta] = useMetadata();

  useEffect(() => {
    setMeta({
      title: 'Dashboard',
      description: 'Dashboard for headscale',
    });
  }, [setMeta]);

  const { data: users, isLoading: isLoadingUsers } = useSwrQuery(
    headscaleServiceListUsers,
  );
  const { data: apiKeys, isLoading: isLoadingApiKeys } = useSwrQuery(
    headscaleServiceListApiKeys,
  );
  const { data: machines, isLoading: isLoadingMachines } = useSwrQuery(
    headscaleServiceListMachines,
    {},
  );
  const { data: routes, isLoading: isLoadingRoutes } = useSwrQuery(
    headscaleServiceListRoutes,
    {},
  );

  return (
    <Container pt="md">
      <div className={classes.root}>
        <Status
          title="Machines"
          icon={IconDevices2}
          all={machines?.machines?.length ?? 0}
          active={machines?.machines?.filter((m) => m.online).length ?? 0}
          isLoading={isLoadingMachines}
          to="/machines"
        />
        <Status
          title="Routes"
          icon={IconRouter}
          all={routes?.routes?.length ?? 0}
          active={routes?.routes?.filter((r) => r.enabled).length ?? 0}
          isLoading={isLoadingRoutes}
          to="/routes"
        />
        <Status
          title="Users"
          icon={IconUser}
          all={users?.users?.length ?? 0}
          active={users?.users?.length ?? 0}
          isLoading={isLoadingUsers}
          to="/users"
        />
        <Status
          title="Api Keys"
          icon={IconKey}
          all={apiKeys?.apiKeys?.length ?? 0}
          active={apiKeys?.apiKeys?.filter(isExpire).length ?? 0}
          isLoading={isLoadingApiKeys}
          to="/apikeys"
        />
      </div>
    </Container>
  );
}
