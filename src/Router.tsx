import { lazy } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layout/Main.layout';

const HomePage = lazy(() => import('./pages/Home/Home.page'));
const ApiKeysPage = lazy(() => import('./pages/ApiKeys/ApiKeys.page'));
const LoginPage = lazy(() => import('./pages/Login/Login.page'));
const PreAuthKeysPage = lazy(
  () => import('./pages/PreAuthKeys/PreAuthKeys.page'),
);
const UsersPage = lazy(() => import('./pages/Users/Users.page'));
const DocsPage = lazy(() => import('./pages/Docs/Docs.page'));
const MachinesPage = lazy(() => import('./pages/Machines/Machines.page'));
const RoutesPage = lazy(() => import('./pages/Routes/Routes.page'));

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/users',
          element: <UsersPage />,
        },
        {
          path: '/apikeys',
          element: <ApiKeysPage />,
        },
        {
          path: '/preauthkeys/:user',
          element: <PreAuthKeysPage />,
        },
        {
          path: '/machines',
          element: <MachinesPage />,
        },
        {
          path: '/machines/:user',
          element: <MachinesPage />,
        },
        {
          path: '/routes',
          element: <RoutesPage />,
        },
        {
          path: '/routes/:machineId',
          element: <RoutesPage />,
        },
        {
          path: '/docs',
          element: <DocsPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ],
  {
    basename: '/web/',
  },
);

export function Router() {
  return <RouterProvider router={router} />;
}
