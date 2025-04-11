/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn-icons-png.flaticon.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
            },
            {
                protocol: 'https',
                hostname: "media.licdn.com",
            },
            {
                protocol: 'https',
                hostname: "cdn.universitykart.com",
            },
            {
                protocol: 'https',
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default nextConfig;
