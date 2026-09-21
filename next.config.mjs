/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // LinuxHub was renamed to LinuxBit.
    return [{ source: '/linuxhub', destination: '/linuxbit', permanent: true }];
  },
};

export default nextConfig;
