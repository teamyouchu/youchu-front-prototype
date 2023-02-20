import { getCookie } from '@/lib/cookies';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== 'undefined') {
      const router = useRouter();

      const refreshToken = getCookie('refreshToken');

      // If there is no refresh token we redirect to "/login" page.
      if (!refreshToken) {
        router.push('/login?from=withAuth', '/login');
      }

      // If this is an refreshToken we just render the component that was passed with all its props
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
