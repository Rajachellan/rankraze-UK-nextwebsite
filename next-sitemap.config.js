/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://rankraze.us',   // REQUIRED: your production domain
  generateRobotsTxt: true,           // optional: also generate robots.txt
  sitemapSize: 7000,                 // optional: split if > 7000 URLs
  exclude: ['/admin/*'],             // optional: exclude private routes
};