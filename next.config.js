/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/static-site-lab',
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
