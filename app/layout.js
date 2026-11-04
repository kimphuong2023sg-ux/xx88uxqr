import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';
import AuthModal from '@/components/AuthModal';
import SlotDemoModal from '@/components/SlotDemoModal';
import Betslip from '@/components/Betslip';
import LiveChatWidget from '@/components/LiveChatWidget';
import Toast from '@/components/Toast';

export const metadata = {
  metadataBase: new URL('https://xx88.uno'),
  title: {
    default: 'XX88 – Platform Kasino dan Pertaruhan Sukan Malaysia',
    template: '%s | XX88 Malaysia'
  },
  description:
    'Terokai XX88, platform permainan dalam talian di Malaysia yang menawarkan slot, kasino langsung dan pertaruhan sukan serta kemudahan transaksi melalui DuitNow.',
  authors: [{ name: 'XX88', url: 'https://xx88.uno' }],
  creator: 'XX88',
  publisher: 'XX88',
  openGraph: {
    title: 'XX88 – Platform Kasino dan Pertaruhan Sukan Malaysia',
    description:
      'Terokai XX88, platform permainan dalam talian di Malaysia yang menawarkan slot, kasino langsung dan pertaruhan sukan serta kemudahan transaksi melalui DuitNow.',
    url: 'https://xx88.uno/',
    siteName: 'XX88',
    images: [
      {
        url: '/img/1d0r967u5x.jpg',
        width: 1200,
        height: 630,
        alt: 'XX88 Platform Malaysia'
      }
    ],
    locale: 'ms_MY',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XX88 – Platform Kasino dan Pertaruhan Sukan Malaysia',
    description:
      'Terokai XX88, platform permainan dalam talian di Malaysia yang menawarkan slot, kasino langsung dan pertaruhan sukan serta kemudahan transaksi melalui DuitNow.',
    images: ['/img/1d0r967u5x.jpg']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/mainlogo.png'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://xx88.uno/#website',
      url: 'https://xx88.uno/',
      name: 'XX88',
      inLanguage: 'ms-MY',
      publisher: {
        '@id': 'https://xx88.uno/#organization'
      }
    },
    {
      '@type': 'Organization',
      '@id': 'https://xx88.uno/#organization',
      name: 'XX88',
      url: 'https://xx88.uno/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://xx88.uno/mainlogo.png',
        width: 512,
        height: 512
      },
      description:
        'Terokai XX88, platform permainan dalam talian di Malaysia yang menawarkan slot, kasino langsung dan pertaruhan sukan serta kemudahan transaksi melalui DuitNow.',
      areaServed: {
        '@type': 'Country',
        name: 'Malaysia'
      },
      knowsAbout: [
        'Permainan Slot Dalam Talian',
        'Kasino Langsung',
        'Pasaran Pertaruhan Sukan',
        'Pendaftaran Akaun',
        'Sokongan Pemain 24/7',
        'DuitNow & FPX Banking'
      ]
    },
    {
      '@type': 'WebPage',
      '@id': 'https://xx88.uno/#webpage',
      url: 'https://xx88.uno/',
      name: 'XX88 – Platform Kasino dan Pertaruhan Sukan Malaysia',
      description:
        'Terokai XX88, platform permainan dalam talian di Malaysia yang menawarkan slot, kasino langsung dan pertaruhan sukan serta kemudahan transaksi melalui DuitNow.',
      inLanguage: 'ms-MY',
      isPartOf: {
        '@id': 'https://xx88.uno/#website'
      },
      about: {
        '@id': 'https://xx88.uno/#organization'
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="ms-MY">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        <script
          id="seo-canonical-sync"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var p = window.location.pathname || '/';
                  var clean = p === '/' ? '/' : p.replace(/\\/+$/, '');
                  var cur = 'https://xx88.uno' + clean;
                  var msP = clean.replace(/^\\/en(\\/|$)/, '/').replace(/\\/+$/, '') || '/';
                  var msUrl = 'https://xx88.uno' + msP;
                  var enUrl = msP === '/' ? 'https://xx88.uno/en' : 'https://xx88.uno/en' + msP;

                  function setL(rel, hr, lang) {
                    var sel = 'link[rel="' + rel + '"]' + (lang ? '[hreflang="' + lang + '"]' : ':not([hreflang])');
                    var el = document.querySelector(sel);
                    if (!el) {
                      el = document.createElement('link');
                      el.setAttribute('rel', rel);
                      if (lang) el.setAttribute('hreflang', lang);
                      document.head.appendChild(el);
                    }
                    el.setAttribute('href', hr);
                  }

                  setL('canonical', cur);
                  setL('alternate', msUrl, 'ms-MY');
                  setL('alternate', enUrl, 'en-MY');
                  setL('alternate', msUrl, 'x-default');
                } catch(e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <AppProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
          <AuthModal />
          <SlotDemoModal />
          <Betslip />
          <LiveChatWidget />
          <Toast />
        </AppProvider>
      </body>
    </html>
  );
}
