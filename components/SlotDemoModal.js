'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

const SYMBOLS = ['👑', '💎', '7️⃣', '🍀', '🔔', '🍒', '⭐'];

export default function SlotDemoModal() {
  const { demoModal, closeDemo, openAuth, triggerToast, lang } = useApp();
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(10);
  const [reels, setReels] = useState(['👑', '💎', '7️⃣']);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winMessage, setWinMessage] = useState(null);

  if (!demoModal.isOpen) return null;

  const slot = demoModal.slot || {
    name: 'Super Ace',
    provider: 'JILI Games',
    rtp: '97.2%'
  };

  const handleSpin = () => {
    if (balance < bet) {
      triggerToast(
        lang === 'ms'
          ? 'Kredit demo tidak mencukupi. Sila tambah semula!'
          : 'Insufficient demo credits. Reset balance to continue!',
        'error'
      );
      return;
    }

    setIsSpinning(true);
    setWinMessage(null);
    setBalance((prev) => prev - bet);

    // Reel spin interval simulation
    let count = 0;
    const interval = setInterval(() => {
      setReels([
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      ]);
      count++;
      if (count > 12) {
        clearInterval(interval);
        // Final outcomes
        const finalReels = [
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        ];
        // 35% chance to force a matching pair for fun demo win
        if (Math.random() < 0.35) {
          finalReels[1] = finalReels[0];
        }
        // 15% chance for jackpot triple
        if (Math.random() < 0.15) {
          finalReels[2] = finalReels[0];
        }

        setReels(finalReels);
        setIsSpinning(false);

        // Calculate payout
        if (finalReels[0] === finalReels[1] && finalReels[1] === finalReels[2]) {
          const winAmount = bet * 25;
          setBalance((prev) => prev + winAmount);
          setWinMessage(`🎉 JACKPOT WIN! RM ${winAmount.toFixed(2)} (x25)`);
          triggerToast(`BIG WIN! Anda menang RM ${winAmount.toFixed(2)}!`, 'success');
        } else if (finalReels[0] === finalReels[1] || finalReels[1] === finalReels[2] || finalReels[0] === finalReels[2]) {
          const winAmount = bet * 3;
          setBalance((prev) => prev + winAmount);
          setWinMessage(`✨ MINI WIN! RM ${winAmount.toFixed(2)} (x3)`);
        }
      }
    }, 80);
  };

  return (
    <div className="modal-overlay" onClick={closeDemo}>
      <div
        className="modal-card"
        style={{ maxWidth: '520px', padding: '24px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeDemo}
          className="modal-close-btn"
          aria-label="Tutup Slot Demo"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '18px' }}>
          <span className="badge-tag" style={{ marginBottom: '6px' }}>
            <i className="fa-solid fa-gamepad"></i> {lang === 'ms' ? 'Mod Demo Percuma' : 'Free Demo Mode'}
          </span>
          <h4 style={{ fontSize: '1.35rem', color: '#ffffff', margin: '4px 0' }}>
            {slot.name}
          </h4>
          <p style={{ color: '#86efac', fontSize: '0.85rem' }}>
            {slot.provider} • RTP: <strong>{slot.rtp}</strong>
          </p>
        </div>

        {/* Slot Machine Machine Frame */}
        <div
          style={{
            background: 'linear-gradient(180deg, #051f15 0%, #010f0a 100%)',
            border: '2px solid #22c55e',
            borderRadius: '16px',
            padding: '24px 16px',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8), 0 0 20px rgba(34,197,94,0.2)',
            marginBottom: '18px'
          }}
        >
          {/* Reel Display */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              background: '#02130e',
              border: '2px solid #145a3c',
              borderRadius: '12px',
              padding: '20px 10px',
              marginBottom: '16px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {reels.map((symbol, i) => (
              <div
                key={i}
                style={{
                  width: '90px',
                  height: '90px',
                  background: 'linear-gradient(180deg, #0a3d2a 0%, #062b1d 100%)',
                  border: '2px solid #22c55e',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.8rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
                  transform: isSpinning ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.1s'
                }}
              >
                {symbol}
              </div>
            ))}
          </div>

          {/* Win Message Banner */}
          {winMessage && (
            <div
              style={{
                textAlign: 'center',
                background: 'rgba(34,197,94,0.2)',
                border: '1px solid #22c55e',
                borderRadius: '8px',
                padding: '8px',
                color: '#86efac',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '12px',
                animation: 'pulse 1s infinite'
              }}
            >
              {winMessage}
            </div>
          )}

          {/* Balance & Bet Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#042217',
              borderRadius: '10px',
              padding: '10px 16px',
              marginBottom: '16px',
              border: '1px solid #145a3c'
            }}
          >
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.72rem', textTransform: 'uppercase' }}>
                {lang === 'ms' ? 'Baki Demo' : 'Demo Balance'}
              </div>
              <div style={{ color: '#22c55e', fontWeight: 800, fontSize: '1.15rem' }}>
                RM {balance.toFixed(2)}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setBet((b) => Math.max(5, b - 5))}
                disabled={isSpinning}
                style={{
                  background: '#0d3d28',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}
              >
                -
              </button>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.7rem' }}>TARUHAN</div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.95rem' }}>
                  RM {bet}
                </div>
              </div>
              <button
                onClick={() => setBet((b) => Math.min(200, b + 5))}
                disabled={isSpinning}
                style={{
                  background: '#0d3d28',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Spin Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="btn-primary-green"
            style={{
              width: '100%',
              padding: '14px',
              fontSize: '1.15rem',
              letterSpacing: '1px',
              borderRadius: '12px'
            }}
          >
            {isSpinning ? (
              <span><i className="fa-solid fa-spinner fa-spin me-2"></i> SPINNING...</span>
            ) : (
              <span><i className="fa-solid fa-rotate me-2"></i> PUSING / SPIN</span>
            )}
          </button>
        </div>

        {/* CTA to Real Play */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: '10px',
            padding: '12px 16px'
          }}
        >
          <div>
            <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
              {lang === 'ms' ? 'Sedia Menang Wang Sebenar?' : 'Ready to Win Real Money?'}
            </div>
            <div style={{ color: '#86efac', fontSize: '0.78rem' }}>
              {lang === 'ms' ? 'Deposit serendah RM 20 + Bonus 100%' : 'Deposit from RM 20 + 100% Bonus'}
            </div>
          </div>
          <button
            onClick={() => {
              closeDemo();
              openAuth('register');
            }}
            className="btn-primary-green"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            {lang === 'ms' ? 'Main Sebenar' : 'Play Real'}
          </button>
        </div>
      </div>
    </div>
  );
}
