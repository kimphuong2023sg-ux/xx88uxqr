'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';

export default function Navbar() {
  const pathname = usePathname();
  const { lang, switchLanguage, getLocalizedHref } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', labelMs: 'Laman Utama', labelEn: 'Home' },
    { href: '/promosi', labelMs: 'Promosi', labelEn: 'Promotions' },
    { href: '/pengeluaran', labelMs: 'Pengeluaran', labelEn: 'Banking' },
    { href: '/muat-turun', labelMs: 'Muat Turun', labelEn: 'Download App' },
    { href: '/slot', labelMs: 'Slot', labelEn: 'Slots' },
    { href: '/sukan', labelMs: 'Sukan', labelEn: 'Sports' },
    { href: '/kasino-langsung', labelMs: 'Kasino Langsung', labelEn: 'Live Casino' },
    { href: '/permainan-slot', labelMs: 'Permainan Slot', labelEn: 'Top Slots' },
  ];

  const toggleLanguage = () => {
    switchLanguage(lang === 'ms' ? 'en' : 'ms');
  };

  const normalizedCurrentPath = pathname ? (pathname.replace(/^\/en/, '') || '/') : '/';

  return (
    <header className="site-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link href={getLocalizedHref('/')} className="navbar-brand-link" aria-label="XX88 Laman Utama">
          <img
            src="/mainlogo.png"
            alt="XX88 - Platform Kasino & Sukan Online Malaysia"
            className="navbar-logo"
            width={140}
            height={42}
          />
        </Link>

        {/* Desktop Menu */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-menu">
            {navLinks.map((item) => {
              const isActive = normalizedCurrentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={getLocalizedHref(item.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {lang === 'ms' ? item.labelMs : item.labelEn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="lang-btn"
            title={lang === 'ms' ? 'Tukar ke English (/en)' : 'Tukar ke Bahasa Melayu'}
            aria-label="Language Selector"
          >
            <span>🌐</span>
            <span>{lang === 'ms' ? 'English' : 'Bahasa Melayu'}</span>
          </button>

          {/* Login / Register Buttons */}
          <Link
            href={getLocalizedHref('/login')}
            className="btn-outline-green"
            style={{ padding: '7px 16px', fontSize: '0.86rem' }}
          >
            {lang === 'ms' ? 'Log Masuk' : 'Login'}
          </Link>
          <Link
            href={getLocalizedHref('/register')}
            className="btn-primary-green"
            style={{ padding: '7px 18px', fontSize: '0.86rem' }}
          >
            {lang === 'ms' ? 'Daftar' : 'Register'}
          </Link>

          {/* Mobile Drawer Trigger */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#011a15',
            borderBottom: '2px solid #22c55e',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {navLinks.map((item) => {
            const isActive = normalizedCurrentPath === item.href;
            return (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: isActive ? '#22c55e' : '#e2f5ea',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(34,197,94,0.15)' : 'transparent',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}
              >
                {lang === 'ms' ? item.labelMs : item.labelEn}
              </Link>
            );
          })}
          <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
            <Link
              href={getLocalizedHref('/login')}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-outline-green"
              style={{ flex: 1, padding: '10px', textAlign: 'center' }}
            >
              {lang === 'ms' ? 'Log Masuk' : 'Login'}
            </Link>
            <Link
              href={getLocalizedHref('/register')}
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-green"
              style={{ flex: 1, padding: '10px', textAlign: 'center' }}
            >
              {lang === 'ms' ? 'Daftar' : 'Register'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
