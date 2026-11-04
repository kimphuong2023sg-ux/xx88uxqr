'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { SLOTS_DATA, PROVIDERS } from '@/data/gamesData';
import JackpotTicker from '@/components/JackpotTicker';

export default function SlotPage() {
  const { lang, openDemo, openAuth } = useApp();
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('hot');

  const filteredSlots = SLOTS_DATA.filter((s) => {
    const matchesProvider = selectedProvider === 'all' || s.providerId === selectedProvider;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.provider.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesProvider && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rtp') {
      return parseFloat(b.rtp) - parseFloat(a.rtp);
    }
    return 0;
  });

  return (
    <>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-gamepad"></i> {lang === 'ms' ? 'Lobi Slot Dalam Talian' : 'Online Slot Portal'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Koleksi Slot Online <span style={{ color: '#22c55e' }}>Terbaik Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto 24px', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Terokai lebih 1,000 pilihan permainan slot video dengan kadar RTP tinggi, jackpot mega harian, dan mod demo percuma.'
              : 'Discover hundreds of certified video slots from top developers with free demo simulator and huge jackpots.'}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <JackpotTicker />
          </div>
        </div>
      </section>

      {/* Provider Chips & Search Bar */}
      <section style={{ background: '#011a15', padding: '20px 0', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          {/* Search & Sort Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
            {/* Search Input */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ position: 'absolute', left: '14px', top: '12px', color: '#22c55e' }}
              ></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'ms' ? 'Cari slot (cth: Olympus, Ace, Candy)...' : 'Search slot name or provider...'}
                style={{
                  width: '100%',
                  background: '#042217',
                  border: '1px solid #145a3c',
                  borderRadius: '50px',
                  padding: '9px 14px 9px 38px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Sort Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Susun mengikut:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  background: '#042217',
                  border: '1px solid #145a3c',
                  color: '#86efac',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  outline: 'none',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <option value="hot">Paling Popular / Hot</option>
                <option value="rtp">RTP Tertinggi</option>
              </select>
            </div>
          </div>

          {/* Provider Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {PROVIDERS.filter((p) => p.id !== 'evolution' && p.id !== 'sexy').map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProvider(p.id)}
                style={{
                  background: selectedProvider === p.id ? '#22c55e' : '#0a3d2a',
                  color: selectedProvider === p.id ? '#ffffff' : '#86efac',
                  border: '1px solid #145a3c',
                  padding: '8px 16px',
                  borderRadius: '50px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className={`fa-solid ${p.icon}`}></i>
                <span>{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Slots Grid */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {filteredSlots.map((slot) => (
              <div
                key={slot.id}
                style={{
                  background: 'linear-gradient(145deg, #0d3526, #011a15)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                className="slot-card-hover"
              >
                {/* Visual Header */}
                <div
                  style={{
                    height: '140px',
                    background: slot.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4.5rem',
                    position: 'relative',
                    borderBottom: '1px solid #145a3c'
                  }}
                >
                  <span className="badge-tag" style={{ position: 'absolute', top: '10px', left: '10px' }}>
                    {slot.badge}
                  </span>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: '4px', color: '#22c55e', fontSize: '0.75rem', fontWeight: 700 }}>
                    RTP {slot.rtp}
                  </div>
                  <span>{slot.icon}</span>
                </div>

                {/* Body Content */}
                <div style={{ padding: '16px' }}>
                  <div style={{ color: '#86efac', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {slot.provider}
                  </div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', margin: '4px 0 8px' }}>
                    {slot.name}
                  </h4>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '14px' }}>
                    <span>Max Win: <strong style={{ color: '#ffffff' }}>{slot.maxWin}</strong></span>
                    <span>Volatiliti: <strong style={{ color: '#86efac' }}>{slot.volatility}</strong></span>
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => openDemo(slot)}
                      className="btn-outline-green"
                      style={{ flex: 1, padding: '8px 10px', fontSize: '0.82rem' }}
                    >
                      <i className="fa-solid fa-play me-1"></i> Demo
                    </button>
                    <Link
                      href="/register"
                      className="btn-primary-green"
                      style={{ flex: 1, padding: '8px 10px', fontSize: '0.82rem', textAlign: 'center' }}
                    >
                      <i className="fa-solid fa-coins me-1"></i> Main
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSlots.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#94a3b8' }}>
              <i className="fa-solid fa-gamepad" style={{ fontSize: '3rem', color: '#145a3c', marginBottom: '12px' }}></i>
              <h4>Tiada permainan ditemui untuk carian &quot;{searchQuery}&quot;</h4>
              <p>Cuba gunakan kata kunci lain atau pilih &quot;Semua Provider&quot;.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
