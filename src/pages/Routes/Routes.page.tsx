import { useCallback, useEffect } from 'react';

import {
  Container,
  Select,
  Skeleton,
  Stack,
  Switch,
  Table,
  rem,
} from '@mantine/core';
import { useForm } from '@mantine/form';

import { useNavigate, useParams } from 'react-router-dom';

import { useMetadata } from '@/utils/useMetadata';
import { callQuery, useSwrQuery } from '@/utils/useQuery';
import type { RequestConfig } from '@kubb/plugin-client/clients/fetch';
import {
  headscaleServiceGetNode,
  headscaleServiceListNodes,
  headscaleServiceSetApprovedRoutes,
  V1Node,
} from '@/request';

interface Route {
  cidr: string;
  node: V1Node;
  approved: boolean;
}

async function headscaleServiceGetMaybeNodeRoutes(
  nodeId?: string,
  config: Partial<RequestConfig> = {},
): Promise<Route[]> {
  let nodes: V1Node[] = [];
  if (!nodeId) {
    nodes = (await headscaleServiceListNodes({}, config)).nodes ?? [];
  } else {
    const node = (await headscaleServiceGetNode(nodeId, config)).node;
    if (!node) {
      return [];
    }
    nodes = [node];
  }

  return nodes.flatMap(
    (node) =>
      node.availableRoutes?.map((route) => ({
        cidr: route,
        node,
        approved: node.approvedRoutes?.includes(route) ?? false,
      })) ?? [],
  );
}

export default function RoutesPage() {
  const params = useParams();
  const nodeId = params.nodeId ?? 'All';
  const navigate = useNavigate();

  const [, setMeta] = useMetadata();
  useEffect(() => {
    setMeta({
      title: 'Routes',
      description: `Manage routes${nodeId ? ` for ${nodeId}` : ''}`,
    });
  }, [setMeta]);

  const filterForm = useForm({
    initialValues: {
      nodeId: '',
    },
  });

  useEffect(() => {
    filterForm.setFieldValue('nodeId', nodeId);
  }, [nodeId]);

  useEffect(() => {
    const nodeId = filterForm.values.nodeId;
    if (nodeId) {
      let url = '';
      if (nodeId === 'All') {
        url = '/routes';
      } else {
        url = `/routes/${nodeId}`;
      }
      navigate(url, { replace: true });
    }
  }, [filterForm.values.nodeId]);

  const {
    data: allRoutes,
    isLoading: isLoadingRoutes,
    mutate,
  } = useSwrQuery(
    headscaleServiceGetMaybeNodeRoutes,
    filterForm.values.nodeId === 'All' ? undefined : filterForm.values.nodeId,
  );

  const { data: node } = useSwrQuery(headscaleServiceListNodes, {});

  const toggleStatus = useCallback(async (route: Route, enabled: boolean) => {
    if (enabled) {
      await callQuery(headscaleServiceSetApprovedRoutes, route.node.id!, {
        routes: route.node.approvedRoutes
          ? [...route.node.approvedRoutes, route.cidr]
          : [route.cidr],
      });
    } else {
      await callQuery(headscaleServiceSetApprovedRoutes, route.node.id!, {
        routes: route.node.approvedRoutes
          ? route.node.approvedRoutes.filter((r) => r !== route.cidr)
          : [],
      });
    }
    mutate();
  }, []);

  const routes = allRoutes;

  return (
    <>
      <Container
        flex={1}
        w="100%"
        style={{
          overflow: 'auto',
        }}
      >
        <Skeleton visible={isLoadingRoutes} height={rem(240)}>
          <Stack my="md">
            <Select
              label="Filter By Node"
              placeholder="Pick node"
              data={[
                { label: 'All', value: 'All' },
                ...(node?.nodes?.map((node) => ({
                  label: node.name!,
                  value: node.id!,
                })) ?? []),
              ]}
              {...filterForm.getInputProps('nodeId')}
            />
          </Stack>
          <Table captionSide="bottom">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>CIDR</Table.Th>
                <Table.Th>Node</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {routes
                ?.toSorted((a, b) => a.cidr.localeCompare(b.cidr))
                ?.map((route) => (
                  <Table.Tr key={route.cidr + route.node.name}>
                    <Table.Td>{route.cidr}</Table.Td>
                    <Table.Td>
                      {route.node?.givenName}(
                      {route.node?.ipAddresses?.join(' / ')} )
                    </Table.Td>
                    <Table.Td>
                      <Switch
                        checked={route.approved}
                        onChange={(e) => {
                          toggleStatus(route, e.target.checked);
                        }}
                      />
                    </Table.Td>
                  </Table.Tr>
                ))}
              <Table.Tr>
                <Table.Td colSpan={4}></Table.Td>
                <Table.Td>{routes?.length} routes</Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Skeleton>
      </Container>
    </>
  );
}
