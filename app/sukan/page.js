'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { SPORTS_MATCHES } from '@/data/gamesData';

export default function SukanPage() {
  const { lang, addBet, bets } = useApp();
  const [selectedSport, setSelectedSport] = useState('all');

  const sportsFilters = [
    { id: 'all', name: 'Semua Sukan', icon: 'fa-globe' },
    { id: 'football', name: 'Bola Sepak', icon: 'fa-futbol' },
    { id: 'badminton', name: 'Badminton', icon: 'fa-table-tennis-paddle-ball' },
    { id: 'basketball', name: 'Bola Keranjang', icon: 'fa-basketball' },
    { id: 'esports', name: 'E-Sukan', icon: 'fa-gamepad' }
  ];

  const filteredMatches = selectedSport === 'all'
    ? SPORTS_MATCHES
    : SPORTS_MATCHES.filter((m) => m.sportKey === selectedSport);

  const handleSelectOdd = (match, selectionLabel, oddValue) => {
    if (!oddValue) return;
    addBet({
      matchId: match.id,
      matchTitle: `${match.teamA} vs ${match.teamB}`,
      league: match.league,
      selection: selectionLabel,
      odd: oddValue
    });
  };

  const isSelected = (matchId, selectionLabel) => {
    return bets.some((b) => b.matchId === matchId && b.selection === selectionLabel);
  };

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-trophy"></i> {lang === 'ms' ? 'Sukan & Pasaran Pertaruhan' : 'Sports & Odds Exchange'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Pertaruhan Sukan <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'Nikmati pasaran pertaruhan sukan paling kompetitif. Bola sepak Liga Perdana Inggeris, Liga Super Malaysia, Badminton BWF, dan E-Sukan.'
              : 'Bet live on EPL, UEFA Champions League, BWF Badminton and MPL Malaysia with instant betslip calculation.'}
          </p>
        </div>
      </section>

      {/* Sport Category Bar */}
      <section style={{ background: '#011a15', padding: '16px 0', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {sportsFilters.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSport(s.id)}
                style={{
                  background: selectedSport === s.id ? '#22c55e' : '#0a3d2a',
                  color: selectedSport === s.id ? '#ffffff' : '#86efac',
                  border: '1px solid #145a3c',
                  padding: '8px 18px',
                  borderRadius: '50px',
                  fontWeight: 600,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className={`fa-solid ${s.icon}`}></i>
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Matches Grid */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div className="section-title">
            <h2>Perlawanan <span className="title-accent">Masa Nyata &amp; Akan Datang</span></h2>
            <p>Tekan pada mana-mana nilai odds untuk memasukkan pilihan ke dalam Slip Pertaruhan anda.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '960px', margin: '0 auto' }}>
            {filteredMatches.map((m) => (
              <div
                key={m.id}
                style={{
                  background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                  border: '1px solid #145a3c',
                  borderRadius: '14px',
                  padding: '20px 24px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                }}
              >
                {/* League & Time Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="badge-tag">{m.sport}</span>
                    <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem' }}>{m.league}</span>
                  </div>
                  <div>
                    {m.isLive ? (
                      <span
                        style={{
                          background: 'rgba(239, 68, 68, 0.2)',
                          border: '1px solid #ef4444',
                          color: '#f87171',
                          padding: '4px 12px',
                          borderRadius: '50px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></span>
                        {m.time}
                      </span>
                    ) : (
                      <span style={{ color: '#86efac', fontSize: '0.82rem' }}>
                        <i className="fa-solid fa-clock me-1"></i> {m.score}
                      </span>
                    )}
                  </div>
                </div>

                {/* Teams & Scores */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '20px', margin: '14px 0 20px' }}>
                  <div style={{ textAlign: 'right' }}>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>{m.teamA}</h4>
                  </div>
                  <div
                    style={{
                      background: '#011a15',
                      border: '1px solid #145a3c',
                      padding: '6px 18px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      color: m.isLive ? '#22c55e' : '#94a3b8'
                    }}
                  >
                    {m.isLive ? m.score : 'VS'}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0 }}>{m.teamB}</h4>
                  </div>
                </div>

                {/* Odds Selection Buttons (1 X 2) */}
                <div style={{ display: 'grid', gridTemplateColumns: m.odds.draw.value ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)', gap: '10px' }}>
                  {/* Home Odds */}
                  <button
                    onClick={() => handleSelectOdd(m, m.odds.home.label, m.odds.home.value)}
                    style={{
                      background: isSelected(m.id, m.odds.home.label) ? '#22c55e' : '#011a15',
                      color: isSelected(m.id, m.odds.home.label) ? '#011a15' : '#ffffff',
                      border: `1.5px solid ${isSelected(m.id, m.odds.home.label) ? '#22c55e' : '#145a3c'}`,
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: '0.86rem' }}>{m.odds.home.label}</span>
                    <span style={{ color: isSelected(m.id, m.odds.home.label) ? '#011a15' : '#22c55e', fontSize: '1rem' }}>
                      {m.odds.home.value}
                    </span>
                  </button>

                  {/* Draw Odds (if available) */}
                  {m.odds.draw.value && (
                    <button
                      onClick={() => handleSelectOdd(m, m.odds.draw.label, m.odds.draw.value)}
                      style={{
                        background: isSelected(m.id, m.odds.draw.label) ? '#22c55e' : '#011a15',
                        color: isSelected(m.id, m.odds.draw.label) ? '#011a15' : '#ffffff',
                        border: `1.5px solid ${isSelected(m.id, m.odds.draw.label) ? '#22c55e' : '#145a3c'}`,
                        borderRadius: '8px',
                        padding: '10px 14px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <span style={{ fontSize: '0.86rem' }}>{m.odds.draw.label}</span>
                      <span style={{ color: isSelected(m.id, m.odds.draw.label) ? '#011a15' : '#22c55e', fontSize: '1rem' }}>
                        {m.odds.draw.value}
                      </span>
                    </button>
                  )}

                  {/* Away Odds */}
                  <button
                    onClick={() => handleSelectOdd(m, m.odds.away.label, m.odds.away.value)}
                    style={{
                      background: isSelected(m.id, m.odds.away.label) ? '#22c55e' : '#011a15',
                      color: isSelected(m.id, m.odds.away.label) ? '#011a15' : '#ffffff',
                      border: `1.5px solid ${isSelected(m.id, m.odds.away.label) ? '#22c55e' : '#145a3c'}`,
                      borderRadius: '8px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{ fontSize: '0.86rem' }}>{m.odds.away.label}</span>
                    <span style={{ color: isSelected(m.id, m.odds.away.label) ? '#011a15' : '#22c55e', fontSize: '1rem' }}>
                      {m.odds.away.value}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
