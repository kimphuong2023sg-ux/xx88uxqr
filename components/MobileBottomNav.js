'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function MobileBottomNav() {
  const pathname = usePathname();
  const { lang, getLocalizedHref, setIsChatOpen } = useApp();
  const normalizedCurrentPath = pathname ? (pathname.replace(/^\/en/, '') || '/') : '/';

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation Bar">
      <div className="mobile-bottom-grid">
        {/* Home */}
        <Link
          href={getLocalizedHref('/')}
          className={`mobile-nav-item ${normalizedCurrentPath === '/' ? 'active' : ''}`}
        >
          <i className="fa-solid fa-house"></i>
          <span>{lang === 'ms' ? 'Utama' : 'Home'}</span>
        </Link>

        {/* Promosi */}
        <Link
          href={getLocalizedHref('/promosi')}
          className={`mobile-nav-item ${normalizedCurrentPath === '/promosi' ? 'active' : ''}`}
        >
          <i className="fa-solid fa-gift"></i>
          <span>{lang === 'ms' ? 'Promosi' : 'Promo'}</span>
        </Link>

        {/* Special Center Button: Deposit / Pengeluaran */}
        <Link
          href={getLocalizedHref('/pengeluaran')}
          className="mobile-nav-item special-btn"
          aria-label="Deposit & Pengeluaran"
        >
          <div className="icon-circle">
            <i className="fa-solid fa-wallet"></i>
          </div>
          <span style={{ color: '#22c55e', fontWeight: 700 }}>
            {lang === 'ms' ? 'Dompet' : 'Wallet'}
          </span>
        </Link>

        {/* Live Chat */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="mobile-nav-item"
          aria-label="Bantuan Langsung 24/7"
        >
          <i className="fa-solid fa-headset"></i>
          <span>{lang === 'ms' ? 'Bantuan' : 'Support'}</span>
        </button>

        {/* Account / Register */}
        <Link
          href={getLocalizedHref('/register')}
          className={`mobile-nav-item ${normalizedCurrentPath === '/register' ? 'active' : ''}`}
          aria-label="Daftar Akaun"
        >
          <i className="fa-solid fa-user-plus"></i>
          <span>{lang === 'ms' ? 'Daftar' : 'Join'}</span>
        </Link>
      </div>
    </nav>
  );
}
