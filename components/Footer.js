'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function Footer() {
  const { lang, getLocalizedHref } = useApp();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div>
            <div className="footer-logo">
              <img
                src="/mainlogo.png"
                alt="XX88 Malaysia"
                width={130}
                height={38}
              />
            </div>
            <p className="footer-desc">
              {lang === 'ms'
                ? 'XX88 ialah platform hiburan dalam talian terkemuka di Malaysia yang menawarkan pengalaman permainan berkualiti tinggi, selamat dan dipercayai untuk semua ahli berumur 18 tahun ke atas.'
                : 'XX88 is Malaysia\'s premier online entertainment platform, delivering high-quality, trusted, and secure gaming experiences for all registered members aged 18 and above.'}
            </p>
            <div className="footer-email">
              <i className="fa-solid fa-envelope"></i>
              <span>support@xx88.uno</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
              <span className="badge-tag" style={{ fontSize: '0.7rem' }}>
                <i className="fa-solid fa-shield-halved"></i> SSL 256-Bit
              </span>
              <span className="badge-tag" style={{ fontSize: '0.7rem' }}>
                <i className="fa-solid fa-certificate"></i> RNG Certified
              </span>
            </div>
          </div>

          {/* Navigation Col */}
          <div>
            <h6>{lang === 'ms' ? 'Navigasi' : 'Navigation'}</h6>
            <ul>
              <li><Link href={getLocalizedHref('/')}>{lang === 'ms' ? 'Laman Utama' : 'Home'}</Link></li>
              <li><Link href={getLocalizedHref('/promosi')}>{lang === 'ms' ? 'Promosi & VIP' : 'Promotions'}</Link></li>
              <li><Link href={getLocalizedHref('/pengeluaran')}>{lang === 'ms' ? 'Pengeluaran' : 'Withdrawals'}</Link></li>
              <li><Link href={getLocalizedHref('/muat-turun')}>{lang === 'ms' ? 'Muat Turun App' : 'Download App'}</Link></li>
              <li><Link href={getLocalizedHref('/slot')}>{lang === 'ms' ? 'Slot Online' : 'Slots'}</Link></li>
              <li><Link href={getLocalizedHref('/sukan')}>{lang === 'ms' ? 'Pertaruhan Sukan' : 'Sports'}</Link></li>
              <li><Link href={getLocalizedHref('/kasino-langsung')}>{lang === 'ms' ? 'Kasino Langsung' : 'Live Casino'}</Link></li>
              <li><Link href={getLocalizedHref('/permainan-slot')}>{lang === 'ms' ? 'Permainan Slot' : 'Featured Slots'}</Link></li>
            </ul>
          </div>

          {/* Legal / Maklumat Col */}
          <div>
            <h6>{lang === 'ms' ? 'Maklumat' : 'Information'}</h6>
            <ul>
              <li><Link href={getLocalizedHref('/about-us')}>{lang === 'ms' ? 'Tentang Kami' : 'About Us'}</Link></li>
              <li><Link href={getLocalizedHref('/terms-conditions')}>{lang === 'ms' ? 'Terma dan Syarat' : 'Terms & Conditions'}</Link></li>
              <li><Link href={getLocalizedHref('/privacy-policy')}>{lang === 'ms' ? 'Dasar Privasi' : 'Privacy Policy'}</Link></li>
              <li><Link href={getLocalizedHref('/responsible-gaming')}>{lang === 'ms' ? 'Permainan Bertanggungjawab' : 'Responsible Gaming'}</Link></li>
              <li><Link href={getLocalizedHref('/faq')}>{lang === 'ms' ? 'Soalan Lazim (FAQ)' : 'FAQ'}</Link></li>
              <li><a href="/sitemap.xml">{lang === 'ms' ? 'Peta Laman (Sitemap)' : 'Sitemap'}</a></li>
            </ul>
          </div>

          {/* Account Col */}
          <div>
            <h6>{lang === 'ms' ? 'Akaun' : 'Account'}</h6>
            <ul>
              <li>
                <Link
                  href={getLocalizedHref('/register')}
                  style={{ color: '#64748b', fontSize: '0.86rem', display: 'inline-block' }}
                >
                  {lang === 'ms' ? 'Daftar Akaun Baharu' : 'Register New Account'}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedHref('/login')}
                  style={{ color: '#64748b', fontSize: '0.86rem', display: 'inline-block', marginTop: '8px' }}
                >
                  {lang === 'ms' ? 'Log Masuk Ahli' : 'Member Login'}
                </Link>
              </li>
              <li>
                <Link href={getLocalizedHref('/pengeluaran')} style={{ marginTop: '8px', display: 'inline-block' }}>
                  {lang === 'ms' ? 'Deposit & Pengeluaran' : 'Deposit & Payout'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods Col */}
          <div>
            <h6>{lang === 'ms' ? 'Pembayaran' : 'Payments'}</h6>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['DuitNow', 'FPX', 'Touch \'n Go', 'Boost', 'GrabPay', 'Kad Bank', 'MYR'].map((p) => (
                <span
                  key={p}
                  style={{
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: '6px',
                    padding: '4px 8px',
                    fontSize: '0.74rem',
                    color: '#86efac'
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
            <p style={{ color: '#64748b', fontSize: '0.78rem', marginTop: '12px' }}>
              {lang === 'ms'
                ? 'Transaksi pantas tanpa caj tersembunyi.'
                : 'Instant transactions with 0% hidden fees.'}
            </p>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>
            © 2026 xx88. {lang === 'ms' ? 'Hak Cipta Terpelihara. Platform ini hanya untuk pengguna berumur 18 tahun ke atas.' : 'All Rights Reserved. 18+ Only.'}
          </p>
          <div>
            <Link href={getLocalizedHref('/terms-conditions')}>{lang === 'ms' ? 'Terma & Syarat' : 'Terms'}</Link>
            <Link href={getLocalizedHref('/privacy-policy')}>{lang === 'ms' ? 'Dasar Privasi' : 'Privacy'}</Link>
            <Link href={getLocalizedHref('/responsible-gaming')}>{lang === 'ms' ? 'Bermain Bertanggungjawab' : 'Responsible Gaming'}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
