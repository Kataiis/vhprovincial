/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    basePath: '/vhprovincial',
    images: {
        domains: ['profile.line-scdn.net'],
        unoptimized: true,
    },
    env: {
        pathUrl: `https://hyggemedicalservice.com/phpapi/api`,

        vhprovincialliff: '2003919676-yBLDE8PR',
        
        //test
        // vhprovincialliff: '2003826482-JZxe4b0A',


    }

};

module.exports = nextConfig