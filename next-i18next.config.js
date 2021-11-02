/* eslint-disable no-undef */

const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: path.resolve('./public/locales'),
    // TODO ignore i18n for blog does not work
    // ignoreRoutes: ['/blog/', 'blog', 'blog/*'],
  },
}
