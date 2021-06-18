/* eslint-disable no-undef */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://flolu.de',
  generateRobotsTxt: true,
  exclude: ['/404', '/500', '/de/400', '/en/400', '/de/500', '/en/500'],
  transform: async (config, path) => {
    let changefreq = 'weekly'
    if (path === '/' || path === '/de' || path === '/en') {
      changefreq = 'daily'
    }

    return {
      loc: path,
      changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
