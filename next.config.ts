import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // Enable build caching for faster rebuilds
  compiler: {
    // Enable SWC compiler optimizations
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Configure build directory (improves caching)
  distDir: '.next',
  
  // Enable experimental features for better performance
  experimental: {
    // Enable build worker for faster builds
    webpackBuildWorker: true,
  },
};

export default nextConfig;
