import withPWA from 'next-pwa'
import nextTranslate from 'next-translate'
import withPlugins from 'next-compose-plugins'

const nextConfig = () => {
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    compiler: {
      reactRemoveProperties: { properties: ['^data-testid$'] },
    },
    pwa: {
      dest: 'public',
    },
  }

  return config
}

export default withPlugins([withPWA, nextTranslate], nextConfig)
