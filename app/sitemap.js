export default function sitemap() {
  const baseUrl = 'https://xx88.uno';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/promosi', priority: 0.9, changeFrequency: 'daily' },
    { path: '/pengeluaran', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/muat-turun', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/slot', priority: 0.9, changeFrequency: 'daily' },
    { path: '/sukan', priority: 0.9, changeFrequency: 'hourly' },
    { path: '/kasino-langsung', priority: 0.9, changeFrequency: 'daily' },
    { path: '/permainan-slot', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/register', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/login', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about-us', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/terms-conditions', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/responsible-gaming', priority: 0.6, changeFrequency: 'monthly' }
  ];

  const allEntries = [];

  routes.forEach((r) => {
    // Malay version (default)
    allEntries.push({
      url: `${baseUrl}${r.path}`,
      lastModified: currentDate,
      changeFrequency: r.changeFrequency,
      priority: r.priority
    });
    // English version (/en)
    allEntries.push({
      url: `${baseUrl}/en${r.path}`,
      lastModified: currentDate,
      changeFrequency: r.changeFrequency,
      priority: Math.max(0.4, Number((r.priority - 0.05).toFixed(2)))
    });
  });

  return allEntries;
}
