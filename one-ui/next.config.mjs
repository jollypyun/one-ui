/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        
    },
    reactStrictMode: true,
    async rewrites() {
        return [
            {
            source: '/:path*',
            destination: 'http://localhost:9010/:path*'
        }
    ]
    }
};

export default nextConfig;
