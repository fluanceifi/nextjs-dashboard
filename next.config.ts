import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 1. ESLint 에러 무시 (안 쓰는 변수 등)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. TypeScript 타입 에러 무시 (형식 불일치 등)
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;