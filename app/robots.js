export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/']
      }
    ],
    sitemap: 'https://xx88.uno/sitemap.xml',
    host: 'https://xx88.uno'
  };
}
