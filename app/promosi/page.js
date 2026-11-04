'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { PROMOTIONS_DATA, VIP_TIERS } from '@/data/gamesData';

export default function PromosiPage() {
  const { lang, openAuth, triggerToast } = useApp();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', labelMs: 'Semua Promosi', labelEn: 'All Promos' },
    { id: 'welcome', labelMs: 'Bonus Selamat Datang', labelEn: 'Welcome Bonus' },
    { id: 'cashback', labelMs: 'Cashback & Rebat', labelEn: 'Cashback & Rebate' },
    { id: 'reload', labelMs: 'Bonus Reload Harian', labelEn: 'Daily Reload' },
    { id: 'vip', labelMs: 'VIP Eksklusif', labelEn: 'VIP Exclusive' }
  ];

  const filteredPromos = filter === 'all'
    ? PROMOTIONS_DATA
    : PROMOTIONS_DATA.filter((p) => p.category === filter);

  const handleClaim = (promoTitle) => {
    triggerToast(
      lang === 'ms'
        ? `Permohonan untuk "${promoTitle}" diterima! Sila log masuk atau daftar untuk menuntut.`
        : `Claim for "${promoTitle}" registered! Please log in to complete your claim.`,
      'info'
    );
    openAuth('register');
  };

  return (
    <>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-gift"></i> {lang === 'ms' ? 'Promosi & Ganjaran 2026' : 'Promotions & Rewards 2026'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Promosi &amp; Bonus <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Tingkatkan peluang kemenangan anda dengan tawaran bonus terbesar, rebat tunai harian, dan program VIP eksklusif.'
              : 'Maximize your play with the most generous welcome offers, unlimited weekly cashbacks, and tailored VIP rewards.'}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#011a15', padding: '24px 0', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                style={{
                  background: filter === c.id ? '#22c55e' : '#0a3d2a',
                  color: filter === c.id ? '#ffffff' : '#86efac',
                  border: '1px solid #145a3c',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {lang === 'ms' ? c.labelMs : c.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Cards Grid */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {filteredPromos.map((p) => (
              <div
                key={p.id}
                style={{
                  background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  position: 'relative'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span className="badge-tag">{p.badge}</span>
                    <span style={{ color: '#86efac', fontSize: '0.8rem' }}>
                      <i className="fa-solid fa-clock me-1"></i> {p.validUntil}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px' }}>
                    {p.title}
                  </h3>

                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22c55e', margin: '8px 0 12px' }}>
                    {p.bonus}
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '18px' }}>
                    {p.desc}
                  </p>

                  <div
                    style={{
                      background: '#011a15',
                      border: '1px solid #145a3c',
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.82rem',
                      marginBottom: '20px'
                    }}
                  >
                    <div>
                      <span style={{ color: '#64748b' }}>Deposit Min: </span>
                      <strong style={{ color: '#ffffff' }}>{p.minDeposit}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#64748b' }}>Syarat: </span>
                      <strong style={{ color: '#22c55e' }}>{p.turnover}</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <Link
                    href="/register"
                    className="btn-primary-green"
                    style={{ flex: 1, padding: '10px', textAlign: 'center' }}
                  >
                    <i className="fa-solid fa-gift me-1"></i>
                    {lang === 'ms' ? 'Tuntut Bonus' : 'Claim Bonus'}
                  </Link>
                  <button
                    onClick={() => triggerToast(`Terma & Syarat: Deposit min ${p.minDeposit}, Turnover ${p.turnover}. Bermain secara bertanggungjawab.`, 'info')}
                    className="btn-outline-green"
                    style={{ padding: '10px 14px', fontSize: '0.85rem' }}
                    title="Syarat & Terma"
                  >
                    T&amp;C
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Program Overview */}
      <section style={{ background: '#011a15', borderTop: '1px solid #145a3c' }}>
        <div className="container">
          <div className="section-title">
            <h2>Kelebihan Keahlian <span className="title-accent">VIP xx88</span></h2>
            <p>Setiap pertaruhan membawa anda lebih dekat kepada ganjaran eksklusif dan had pengeluaran tanpa had.</p>
            <div className="divider-green"></div>
          </div>

          <div className="vip-grid">
            {VIP_TIERS.map((tier) => (
              <div key={tier.tier} className={`vip-card ${tier.isFeatured ? 'featured' : ''}`}>
                {tier.isFeatured && <div className="vip-badge-top">Paling Popular</div>}
                <div className="tier-name">Ahli {tier.tier}</div>
                <div className="tier-bonus">{tier.cashback} Cashback</div>
                <div className="tier-desc">{tier.depositReq}</div>
                <ul>
                  {tier.perks.map((perk, i) => (
                    <li key={i}><i className="fa-solid fa-circle-check"></i> {perk}</li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  className={tier.isFeatured ? 'btn-primary-green' : 'btn-outline-green'}
                  style={{ width: '100%', padding: '10px', textAlign: 'center', display: 'block' }}
                >
                  Sertai VIP {tier.tier}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
