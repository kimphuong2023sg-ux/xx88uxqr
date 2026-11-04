'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function Betslip() {
  const { bets, removeBet, clearBets, isBetslipOpen, setIsBetslipOpen, triggerToast, lang } = useApp();
  const [stake, setStake] = useState('20');

  if (bets.length === 0) return null;

  // Calculate total odds (accumulator multiplier if multi-bets)
  const totalOdds = bets.reduce((acc, b) => acc * parseFloat(b.odd || 1), 1);
  const stakeNum = parseFloat(stake) || 0;
  const potentialWin = stakeNum * totalOdds;

  const handlePlaceBet = () => {
    if (stakeNum <= 0) {
      triggerToast(
        lang === 'ms' ? 'Sila masukkan jumlah taruhan yang sah!' : 'Please enter a valid stake amount!',
        'error'
      );
      return;
    }
    const ticketId = 'TX' + Math.floor(100000 + Math.random() * 900000);
    triggerToast(
      lang === 'ms'
        ? `Tiket ${ticketId} berjaya dipasang! Potensi Kemenangan: RM ${potentialWin.toFixed(2)}`
        : `Bet ${ticketId} confirmed! Potential Return: RM ${potentialWin.toFixed(2)}`,
      'success'
    );
    clearBets();
    setIsBetslipOpen(false);
  };

  return (
    <div className="betslip-drawer">
      {!isBetslipOpen ? (
        <div
          onClick={() => setIsBetslipOpen(true)}
          className="betslip-bubble"
          role="button"
          aria-label="Buka Betslip"
        >
          <i className="fa-solid fa-receipt"></i>
          <span>{lang === 'ms' ? 'Phiếu Cược' : 'Betslip'} ({bets.length})</span>
          <span style={{ background: '#022c22', padding: '2px 8px', borderRadius: '50px', fontSize: '0.8rem' }}>
            {totalOdds.toFixed(2)}x
          </span>
        </div>
      ) : (
        <div className="betslip-card">
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(90deg, #0d3d28, #022c22)',
              borderBottom: '1px solid #145a3c',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700 }}>
              <i className="fa-solid fa-receipt" style={{ color: '#22c55e' }}></i>
              <span>{lang === 'ms' ? 'Phiếu Cược Sukan' : 'Sports Betslip'} ({bets.length})</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button
                onClick={clearBets}
                title="Kosongkan Semua"
                style={{ color: '#f87171', fontSize: '0.78rem' }}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              <button
                onClick={() => setIsBetslipOpen(false)}
                style={{ color: '#94a3b8', fontSize: '1rem' }}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
            </div>
          </div>

          {/* List of Bets */}
          <div style={{ maxHeight: '240px', overflowY: 'auto', padding: '12px' }}>
            {bets.map((b) => (
              <div
                key={b.matchId}
                style={{
                  background: '#042217',
                  border: '1px solid #145a3c',
                  borderRadius: '8px',
                  padding: '10px',
                  marginBottom: '8px',
                  position: 'relative'
                }}
              >
                <button
                  onClick={() => removeBet(b.matchId)}
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    color: '#94a3b8',
                    fontSize: '0.8rem'
                  }}
                  title="Padam pilihan ini"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div style={{ color: '#86efac', fontSize: '0.74rem', marginBottom: '2px' }}>
                  {b.league}
                </div>
                <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.85rem' }}>
                  {b.matchTitle}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, fontSize: '0.88rem' }}>
                    {b.selection}
                  </span>
                  <span style={{ color: '#ffffff', fontWeight: 800, background: '#0a3d2a', padding: '2px 8px', borderRadius: '4px', fontSize: '0.85rem' }}>
                    @{b.odd}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stake Input & Summary */}
          <div style={{ background: '#072a1e', borderTop: '1px solid #145a3c', padding: '14px' }}>
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: '0.8rem', marginBottom: '4px' }}>
                <span>{lang === 'ms' ? 'Jumlah Taruhan (MYR)' : 'Stake Amount (MYR)'}</span>
                <span>Odds: <strong>{totalOdds.toFixed(2)}</strong></span>
              </div>
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', left: '10px', top: '9px', color: '#22c55e', fontWeight: 700, fontSize: '0.85rem' }}>
                  RM
                </span>
                <input
                  type="number"
                  min="5"
                  max="10000"
                  value={stake}
                  onChange={(e) => setStake(e.target.value)}
                  style={{
                    width: '100%',
                    background: '#011a15',
                    border: '1px solid #145a3c',
                    borderRadius: '6px',
                    padding: '8px 10px 8px 38px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    fontWeight: 700
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                {['10', '50', '100', '500'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setStake(amt)}
                    style={{
                      flex: 1,
                      background: '#042217',
                      border: '1px solid #145a3c',
                      color: '#86efac',
                      fontSize: '0.72rem',
                      padding: '4px 0',
                      borderRadius: '4px'
                    }}
                  >
                    +{amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Payout Display */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderTop: '1px dashed #145a3c',
                marginBottom: '12px'
              }}
            >
              <span style={{ color: '#cbd5e1', fontSize: '0.82rem' }}>
                {lang === 'ms' ? 'Potensi Pulangan:' : 'Potential Payout:'}
              </span>
              <span style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.1rem' }}>
                RM {potentialWin.toFixed(2)}
              </span>
            </div>

            {/* Place Bet Button */}
            <button
              onClick={handlePlaceBet}
              className="btn-primary-green"
              style={{ width: '100%', padding: '10px', fontSize: '0.95rem' }}
            >
              <i className="fa-solid fa-check me-2"></i>
              {lang === 'ms' ? 'Sahkan Taruhan' : 'Confirm Bet'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
