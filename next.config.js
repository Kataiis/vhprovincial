/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['profile.line-scdn.net'],
    },
    env: {
        pathUrl: `https://hyggemedicalservice.com/phpapi/api`,

        // vhprovincialliff: '2003919676-yBLDE8PR',
        vhprovincialliff: '2003826482-JZxe4b0A',


    }

};

module.exports = nextConfig