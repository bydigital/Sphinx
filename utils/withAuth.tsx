import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => {
    const WrapperComponent = (props: any) => {
        const router = useRouter();
        const { user } = useAuthenticator((context) => [context.user]);

        useEffect(() => {
            const checkAuth = async () => {
                try {
                    await Auth.currentAuthenticatedUser();
                } catch (err) {
                    router.push('/login');
                }
            };

            checkAuth();
        }, [router, user]);

        return <WrappedComponent {...props} />;
    };

    return WrapperComponent;
};

export default withAuth;
