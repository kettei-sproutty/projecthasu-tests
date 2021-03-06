import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import '@hasu/design/styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name='application-name' content='PWA App' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-styfale' content='default' />
        <meta name='apple-mobile-web-app-title' content='PWA App' />
        <meta name='description' content='Best PWA App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='apple-touch-icon' sizes='57x57' href='/icons/favicon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/icons/favicon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/icons/favicon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/icons/favicon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/icons/favicon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/icons/favicon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/icons/favicon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icons/favicon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/favicon-180x180.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/icons/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icons/favicon-192x192.png' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />

        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/icons/favicon-144x144.png' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#ffffff'></meta>

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://www.projecthasu.com' />
        <meta name='twitter:title' content='PWA App' />
        <meta name='twitter:description' content='Best PWA App in the world' />
        <meta name='twitter:image' content='https://www.projecthasu.com/icons/android-chrome-192x192.png' />
        <meta name='twitter:creator' content='@DavidWShadow' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='PWA App' />
        <meta property='og:description' content='Best PWA App in the world' />
        <meta property='og:site_name' content='PWA App' />
        <meta property='og:url' content='https://www.projecthasu.com' />
        <meta property='og:image' content='https://www.projecthasu.com/icons/favicon-192x192.png' />

        <title>Project Hasu</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
