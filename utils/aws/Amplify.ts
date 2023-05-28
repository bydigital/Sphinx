import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: process.env.AWS_COGNITO_REGION,
        userPoolId: process.env.AWS_COGNITO_POOL_ID,
        userPoolWebClientId: process.env.AWS_COGNITO_APP_CLIENT_ID,
    },
});
