import { Suspense, lazy, ElementType } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import DashboardLayout from '@layouts/dashboard';
import NoLayout from '@layouts/NoLayout';
import GuestGuard from '@guards/GuestGuard';
// import AuthGuard from '@guards/AuthGuard';
// import RoleBasedGuard from '@guards/RoleBasedGuard';
import { PATH_AFTER_LOGIN } from '@config';
import LoadingScreen from '@components/LoadingScreen';

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();

  const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

  return (
    <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },

        { path: 'login-unprotected', element: <Login /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> },
      ],
    },

    {
      path: '/',
      element: (
        // <AuthGuard>
        <DashboardLayout />
        // </AuthGuard>
      ),
      children: [{ element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true }],
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        // <AuthGuard>
        <DashboardLayout />
        // </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'accounts', element: <EmptyPage /> },
        { path: 'admin', element: <EmptyPage /> },
        { path: 'content1', element: <EmptyPage /> },
        { path: 'content2', element: <EmptyPage /> },
        { path: 'accounts/:update', element: <EmptyPage /> },
        {
          path: 'adminapp',
          children: [
            { element: <Navigate to="/dashboard/adminapp/content1" replace />, index: true },
            { path: 'content1', element: <EmptyPage /> },
            { path: 'content2', element: <EmptyPage /> },
            { path: 'contentA', element: <EmptyPage /> },
            { path: 'contentB', element: <EmptyPage /> },
          ],
        },
        {
          path: 'mainapp',
          children: [
            { element: <Navigate to="/dashboard/mainapp/content1" replace />, index: true },
            { path: 'content1', element: <EmptyPage /> },
            { path: 'content2', element: <EmptyPage /> },
          ],
        },
      ],
    },

    // Main Routes
    {
      path: '*',
      element: <NoLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')));
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')));

// GENERAL
const EmptyPage = Loadable(lazy(() => import('../pages/dashboard/EmptyPage')));

// MAIN
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
