declare module 'next-pwa' {
  import type { NextConfig } from 'next'

  export default function withPWA(config: NextConfig): NextConfig
}
