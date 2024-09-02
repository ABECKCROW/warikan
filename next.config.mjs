/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/your-repo-name', // リポジトリ名に置き換えてください
    trailingSlash: true,
    output: 'export',
    distDir: 'out',
};

export default nextConfig;