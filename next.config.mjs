/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        minimumCacheTTL: 60,
        remotePatterns:[
            { hostname: "picsum.photos", protocol: "https" },
        ]
    }
};

export default nextConfig;
