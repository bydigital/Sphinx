/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env: {
        AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
        AWS_COGNITO_POOL_ID: process.env.AWS_COGNITO_POOL_ID,
        AWS_COGNITO_APP_CLIENT_ID: process.env.AWS_COGNITO_APP_CLIENT_ID,
    },
};

module.exports = nextConfig;
