'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function MuatTurunPage() {
  const { lang, triggerToast } = useApp();

  const handleDownloadApk = () => {
    triggerToast(
      lang === 'ms'
        ? 'Memulakan muat turun APK xx88 v3.2.4 (Android)...'
        : 'Downloading xx88 v3.2.4 APK (Android)...',
      'success'
    );
  };

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-mobile-screen"></i> {lang === 'ms' ? 'Aplikasi Rasmi xx88' : 'Official xx88 Mobile App'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Muat Turun Aplikasi <span style={{ color: '#22c55e' }}>xx88 Android &amp; iOS</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Nikmati akses pantas ke 1,000+ permainan slot dan kasino langsung di hujung jari anda. Muat turun APK percuma untuk Android dan pasang Web App untuk iOS.'
              : 'Download the official xx88 mobile app for zero lag, enhanced security, instant push notifications, and biometric login.'}
          </p>
        </div>
      </section>

      {/* Main Download Options */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {/* Android APK Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                border: '2px solid #22c55e',
                borderRadius: '18px',
                padding: '32px 28px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'rgba(34,197,94,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22c55e',
                      fontSize: '2rem',
                      border: '1px solid #22c55e'
                    }}
                  >
                    <i className="fa-brands fa-android"></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>Android APK</h3>
                    <span style={{ color: '#86efac', fontSize: '0.85rem' }}>Versi 3.2.4 • 24.5 MB</span>
                  </div>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Pemasangan fail APK rasmi secara langsung untuk semua peranti Android (Samsung, Xiaomi, Oppo, Vivo, Realme, dll).
                </p>

                <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                  <li style={{ color: '#cbd5e1', fontSize: '0.88rem', padding: '6px 0' }}>
                    <i className="fa-solid fa-circle-check me-2" style={{ color: '#22c55e' }}></i>
                    Sokongan Android 8.0 ke atas
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.88rem', padding: '6px 0' }}>
                    <i className="fa-solid fa-circle-check me-2" style={{ color: '#22c55e' }}></i>
                    Log Masuk Cap Jari / Biometrik
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.88rem', padding: '6px 0' }}>
                    <i className="fa-solid fa-circle-check me-2" style={{ color: '#22c55e' }}></i>
                    Pemberitahuan Promosi Terpantas
                  </li>
                </ul>
              </div>

              <button
                onClick={handleDownloadApk}
                className="btn-primary-green"
                style={{ width: '100%', padding: '14px', fontSize: '1.05rem' }}
              >
                <i className="fa-solid fa-download me-2"></i>
                Muat Turun Fail APK (Android)
              </button>
            </div>

            {/* iOS Web App Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                border: '1px solid #145a3c',
                borderRadius: '18px',
                padding: '32px 28px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      background: 'rgba(34,197,94,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '2rem',
                      border: '1px solid #145a3c'
                    }}
                  >
                    <i className="fa-brands fa-apple"></i>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.35rem', color: '#ffffff', margin: 0 }}>iOS (iPhone / iPad)</h3>
                    <span style={{ color: '#86efac', fontSize: '0.85rem' }}>PWA Web App • Tiada Saiz Storan</span>
                  </div>
                </div>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  Akses lancar melalui Safari iOS tanpa perlu muat turun App Store. Jimat bateri dan tidak menggunakan ruang memori telefon.
                </p>

                <div style={{ background: '#011a15', border: '1px solid #145a3c', borderRadius: '10px', padding: '14px', marginBottom: '20px' }}>
                  <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.88rem', marginBottom: '8px' }}>
                    3 Langkah Pasang pada iPhone:
                  </div>
                  <ol style={{ paddingLeft: '20px', color: '#cbd5e1', fontSize: '0.84rem', lineHeight: 1.6 }}>
                    <li>Buka <strong>xx88.uno</strong> di pelayar Safari.</li>
                    <li>Tekan ikon <strong>Kongsi (Share)</strong> di bawah skrin.</li>
                    <li>Pilih <strong>&quot;Tambah ke Skrin Utama&quot; (Add to Home Screen)</strong>.</li>
                  </ol>
                </div>
              </div>

              <Link
                href="/"
                className="btn-outline-green"
                style={{ width: '100%', padding: '14px', fontSize: '1rem', textAlign: 'center', display: 'block' }}
              >
                <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                Buka di Safari &amp; Pasang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* App Features & Showcase */}
      <section style={{ background: '#011a15' }}>
        <div className="container">
          <div className="section-title">
            <h2>Kelebihan Menggunakan <span className="title-accent">Aplikasi xx88</span></h2>
            <p>Pengalaman bertaraf kasino sebenar dengan keselamatan tahap tertinggi.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-fingerprint"></i></div>
              <h5>Log Masuk Biometrik</h5>
              <p>Akses akaun anda dengan selamat menggunakan Touch ID atau Face ID tanpa perlu menaip kata laluan setiap kali.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-bell"></i></div>
              <h5>Notifikasi Masa Nyata</h5>
              <p>Dapatkan pemberitahuan segera mengenai bonus baharu, keputusan perlawanan sukan, dan pengesahan deposit.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-shield-virus"></i></div>
              <h5>Anti-Sekatan Domain</h5>
              <p>Aplikasi dilengkapi dengan sistem laluan pintar (smart-routing) automatik agar sambungan anda tidak terjejas.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
