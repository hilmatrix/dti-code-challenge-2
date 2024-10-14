/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ["randomuser.me"]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
