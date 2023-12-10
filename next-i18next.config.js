/* eslint-disable no-undef */
/** @type {import('next-i18next').UserConfig} */

const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    // localePath: path.resolve('./public/locales'),
    // TODO ignore i18n for blog does not work
    // ignoreRoutes: ['/blog/', 'blog', 'blog/*'],
    localeDetection: true,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
