import '@/styles/Global.scss';
import '@/utils/aws/Amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Authenticator.Provider>
            <Component {...pageProps} />
        </Authenticator.Provider>
    );
}
