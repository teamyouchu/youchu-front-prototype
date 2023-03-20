import { NextPage } from 'next';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: NextPage) => {
  return (props: JSX.IntrinsicAttributes) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const router = useRouter();
      const refreshToken = localStorage.getItem('refreshToken');

      // If there is no refresh token we redirect to "/login" page.
      if (!refreshToken) {
        router.push('/login?from=withAuth', '/login');
      }

      // If this is an refreshToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
