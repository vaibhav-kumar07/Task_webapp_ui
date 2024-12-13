/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.fnp.ae",
            },
        ],
    },
};

export default nextConfig;
