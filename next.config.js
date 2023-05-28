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
        AWS_COGNITO_CLIENTID: process.env.AWS_COGNITO_CLIENTID,
        AWS_COGNITO_POOLID: process.env.AWS_COGNITO_POOLID,
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/homepage',
            },
        ];
    },
};

module.exports = nextConfig;
