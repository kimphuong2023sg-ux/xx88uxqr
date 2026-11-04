'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const AppContext = createContext();

export function AppProvider({ children }) {
  const pathname = usePathname() || '/';
  const router = useRouter();

  // Directly derive lang from URL route to guarantee synchronization
  const isEnRoute = pathname === '/en' || pathname.startsWith('/en/');
  const lang = isEnRoute ? 'en' : 'ms';

  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });
  const [demoModal, setDemoModal] = useState({ isOpen: false, slot: null });
  const [bets, setBets] = useState([]);
  const [isBetslipOpen, setIsBetslipOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync document attributes (HTML lang, meta, canonical & hreflang) on route / language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlLang = lang === 'en' ? 'en-MY' : 'ms-MY';
      document.documentElement.lang = htmlLang;
      console.log("source moi");
      // Ensure meta content-language is set for Google Translate and search engines
      let metaLang = document.querySelector('meta[http-equiv="content-language"]');
      if (!metaLang) {
        metaLang = document.createElement('meta');
        metaLang.setAttribute('http-equiv', 'content-language');
        document.head.appendChild(metaLang);
      }
      metaLang.setAttribute('content', htmlLang);

      // Compute exact canonical and hreflang URLs for the active page
      const baseUrl = 'https://xx88.uno';
      const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
      const currentCanonical = `${baseUrl}${cleanPath}`;

      const msPath = cleanPath.replace(/^\/en(\/|$)/, '/').replace(/\/+$/, '') || '/';
      const msUrl = `${baseUrl}${msPath}`;
      const enUrl = msPath === '/' ? `${baseUrl}/en` : `${baseUrl}/en${msPath}`;

      const setLinkTag = (rel, href, hreflang) => {
        const selector = hreflang
          ? `link[rel="${rel}"][hreflang="${hreflang}"]`
          : `link[rel="${rel}"]:not([hreflang])`;
        let linkEl = document.querySelector(selector);
        if (!linkEl) {
          linkEl = document.createElement('link');
          linkEl.setAttribute('rel', rel);
          if (hreflang) linkEl.setAttribute('hreflang', hreflang);
          document.head.appendChild(linkEl);
        }
        linkEl.setAttribute('href', href);
      };

      setLinkTag('canonical', currentCanonical);
      setLinkTag('alternate', msUrl, 'ms-MY');
      setLinkTag('alternate', enUrl, 'en-MY');
      setLinkTag('alternate', msUrl, 'x-default');
    }
  }, [lang, pathname]);

  const switchLanguage = useCallback(
    (targetLang) => {
      if (targetLang === 'en') {
        if (!pathname.startsWith('/en')) {
          const targetUrl = pathname === '/' ? '/en' : `/en${pathname}`;
          router.push(targetUrl);
        }
      } else {
        if (pathname.startsWith('/en')) {
          const targetUrl = pathname.replace(/^\/en/, '') || '/';
          router.push(targetUrl);
        }
      }
    },
    [pathname, router]
  );

  const getLocalizedHref = useCallback(
    (href) => {
      if (lang === 'en') {
        if (href === '/') return '/en';
        if (href.startsWith('/en')) return href;
        return `/en${href}`;
      } else {
        if (href.startsWith('/en')) {
          return href.replace(/^\/en/, '') || '/';
        }
        return href;
      }
    },
    [lang]
  );

  const openAuth = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const closeAuth = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  const openDemo = (slot) => {
    setDemoModal({ isOpen: true, slot });
  };

  const closeDemo = () => {
    setDemoModal({ isOpen: false, slot: null });
  };

  const addBet = (betItem) => {
    setBets((prev) => {
      // Check if match already in betslip
      const existing = prev.filter((b) => b.matchId !== betItem.matchId);
      const updated = [...existing, betItem];
      return updated;
    });
    setIsBetslipOpen(true);
    triggerToast(`Ditambah ke Betslip: ${betItem.selection} (${betItem.odd})`, 'info');
  };

  const removeBet = (matchId) => {
    setBets((prev) => prev.filter((b) => b.matchId !== matchId));
  };

  const clearBets = () => {
    setBets([]);
  };

  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        switchLanguage,
        getLocalizedHref,
        authModal,
        openAuth,
        closeAuth,
        demoModal,
        openDemo,
        closeDemo,
        bets,
        addBet,
        removeBet,
        clearBets,
        isBetslipOpen,
        setIsBetslipOpen,
        isChatOpen,
        setIsChatOpen,
        toast,
        triggerToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
