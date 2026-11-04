'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { SLOTS_DATA } from '@/data/gamesData';

export default function PermainanSlotPage() {
  const { lang, openDemo, openAuth } = useApp();
  const featured = SLOTS_DATA.filter((s) => s.featured);

  return (
    <>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-crown"></i> {lang === 'ms' ? 'Pilihan Slot Terhangat' : 'Featured Slot Showcase'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Permainan Slot Pilihan <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Himpunan tajuk slot paling popular dengan rekod kemenangan tertinggi, grafik sinematik, dan mekanik putaran inovatif.'
              : 'Spotlight on high-RTP slots with bonus buy features and massive jackpot potentials.'}
          </p>
        </div>
      </section>

      {/* Featured Slots Grid */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div className="section-title">
            <h2>Tajuk Slot Paling Digemari <span className="title-accent">Pemain Malaysia</span></h2>
            <p>Pilih mana-mana permainan di bawah untuk mencuba mod demo percuma atau mulakan taruhan sebenar.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {featured.map((slot) => (
              <div
                key={slot.id}
                style={{
                  background: 'linear-gradient(145deg, #0d3526, #011a15)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div
                  style={{
                    height: '150px',
                    background: slot.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4.8rem',
                    position: 'relative'
                  }}
                >
                  <span className="badge-tag" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    {slot.badge}
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.7)',
                      padding: '3px 10px',
                      borderRadius: '50px',
                      color: '#22c55e',
                      fontSize: '0.78rem',
                      fontWeight: 800
                    }}
                  >
                    RTP {slot.rtp}
                  </span>
                  <span>{slot.icon}</span>
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ color: '#86efac', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    {slot.provider}
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.2rem', margin: '6px 0 10px' }}>
                    {slot.name}
                  </h4>

                  <div
                    style={{
                      background: '#042217',
                      border: '1px solid #145a3c',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      marginBottom: '16px'
                    }}
                  >
                    <span>Kemenangan Max: <strong style={{ color: '#ffffff' }}>{slot.maxWin}</strong></span>
                    <span>Tema: <strong style={{ color: '#86efac' }}>{slot.theme}</strong></span>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => openDemo(slot)}
                      className="btn-outline-green"
                      style={{ flex: 1, padding: '10px' }}
                    >
                      <i className="fa-solid fa-play me-1"></i> Main Demo
                    </button>
                    <Link
                      href="/register"
                      className="btn-primary-green"
                      style={{ flex: 1, padding: '10px', textAlign: 'center' }}
                    >
                      <i className="fa-solid fa-fire me-1"></i> Main Wang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/slot" className="btn-primary-green" style={{ padding: '12px 32px' }}>
              <i className="fa-solid fa-gamepad me-2"></i>
              Lihat Semua 1,000+ Permainan Slot
            </Link>
          </div>
        </div>
      </section>

      {/* Guide to RTP & Slot Volatility */}
      <section style={{ background: '#011a15', borderTop: '1px solid #145a3c' }}>
        <div className="container">
          <div className="section-title">
            <h2>Panduan Memahami <span className="title-accent">RTP &amp; Volatiliti Slot</span></h2>
            <p>Ketahui cara memilih permainan slot yang bersesuaian dengan strategi dan bajet modal anda.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#22c55e', fontSize: '1.2rem', marginBottom: '10px' }}>
                <i className="fa-solid fa-percent me-2"></i> Apakah itu RTP (Return to Player)?
              </h5>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                RTP ialah peratusan purata pulangan wang taruhan kepada pemain dalam jangka panjang. Di xx88, sebahagian besar permainan slot mempunyai kadar RTP di antara <strong>96.5% hingga 97.5%</strong>, jauh lebih kompetitif berbanding standard industri.
              </p>
            </div>

            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h5 style={{ color: '#22c55e', fontSize: '1.2rem', marginBottom: '10px' }}>
                <i className="fa-solid fa-chart-line me-2"></i> Volatiliti Tinggi vs Rendah
              </h5>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7 }}>
                Slot volatiliti tinggi (seperti Gates of Olympus) memberi kekerapan menang lebih rendah tetapi saiz kemenangan yang besar (sehingga 15,000x taruhan). Slot volatiliti rendah memberi kemenangan kecil tetapi kerap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
