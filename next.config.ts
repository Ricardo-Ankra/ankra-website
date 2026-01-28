import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // needed for static HTML export
  images: {
    // required for static export if you use next/image
    unoptimized: true,
  },
}

export default nextConfig
