/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: true,
  // Nginx ingress already handles compression
  compress: false,
  poweredByHeader: false,
  i18n,
  output: 'standalone',
  images: {
    domains: ['storage.googleapis.com', 'img.youtube.com'],
  },
}

module.exports = nextConfig
