const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPage = repositoryName.endsWith('.github.io');
const shouldUseBasePath = Boolean(process.env.GITHUB_ACTIONS) && !isUserOrOrgPage;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: shouldUseBasePath ? `/${repositoryName}` : '',
  assetPrefix: shouldUseBasePath ? `/${repositoryName}/` : ''
};

export default nextConfig;
