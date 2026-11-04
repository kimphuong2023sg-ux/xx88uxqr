'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { LIVE_CASINO_DATA } from '@/data/gamesData';

export default function KasinoLangsungPage() {
  const { lang, openAuth } = useApp();
  const [selectedType, setSelectedType] = useState('all');

  const types = [
    { id: 'all', name: 'Semua Meja' },
    { id: 'Baccarat', name: 'Baccarat' },
    { id: 'Roulette', name: 'Roulette' },
    { id: 'Blackjack', name: 'Blackjack' },
    { id: 'Game Show', name: 'Game Shows' },
    { id: 'Dragon Tiger', name: 'Dragon Tiger' }
  ];

  const filteredTables = selectedType === 'all'
    ? LIVE_CASINO_DATA
    : LIVE_CASINO_DATA.filter((t) => t.type === selectedType);

  return (
    <>
      {/* Banner */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-gem"></i> {lang === 'ms' ? 'Kasino Langsung VIP' : 'Live Dealer Casino'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Kasino Langsung <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Penstriman langsung resolusi tinggi 4K bersama dealer sebenar. Rasai suasana kasino mewah antarabangsa di rumah anda.'
              : 'Immersive 4K live table streaming with real professional dealers, high limits, and zero latency.'}
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: '#011a15', padding: '16px 0', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                style={{
                  background: selectedType === t.id ? '#22c55e' : '#0a3d2a',
                  color: selectedType === t.id ? '#ffffff' : '#86efac',
                  border: '1px solid #145a3c',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer'
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tables Grid */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '22px' }}>
            {filteredTables.map((table) => (
              <div
                key={table.id}
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
                {/* Visual Header */}
                <div
                  style={{
                    height: '130px',
                    background: 'linear-gradient(135deg, #083d28, #011a15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative',
                    borderBottom: '1px solid #145a3c'
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      background: 'rgba(239,68,68,0.2)',
                      border: '1px solid #ef4444',
                      color: '#f87171',
                      padding: '2px 8px',
                      borderRadius: '50px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
                    LIVE
                  </span>

                  <span
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      color: '#cbd5e1',
                      fontSize: '0.74rem'
                    }}
                  >
                    <i className="fa-solid fa-users me-1" style={{ color: '#22c55e' }}></i>
                    {table.viewers} Pemain
                  </span>

                  <span>{table.icon}</span>
                </div>

                {/* Table Info */}
                <div style={{ padding: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#86efac', fontSize: '0.78rem', textTransform: 'uppercase' }}>
                      {table.provider}
                    </span>
                    <span className="badge-tag" style={{ fontSize: '0.7rem' }}>
                      {table.type}
                    </span>
                  </div>

                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', margin: '8px 0 4px' }}>
                    {table.name}
                  </h4>

                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                    Dealer: <strong style={{ color: '#ffffff' }}>{table.dealer}</strong>
                  </p>

                  <div
                    style={{
                      background: '#042217',
                      border: '1px solid #145a3c',
                      borderRadius: '8px',
                      padding: '8px 12px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      marginBottom: '16px'
                    }}
                  >
                    <span style={{ color: '#64748b' }}>Had Taruhan:</span>
                    <span style={{ color: '#22c55e', fontWeight: 700 }}>
                      {table.minBet} - {table.maxBet}
                    </span>
                  </div>

                  <Link
                    href="/login"
                    className="btn-primary-green"
                    style={{ width: '100%', padding: '10px', fontSize: '0.9rem', textAlign: 'center', display: 'block' }}
                  >
                    <i className="fa-solid fa-door-open me-2"></i>
                    {lang === 'ms' ? 'Masuk Meja Live' : 'Join Table'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
