'use client';

import React, { useState, useEffect } from 'react';

export default function JackpotTicker() {
  const [jackpot, setJackpot] = useState(8888420.75);

  useEffect(() => {
    const timer = setInterval(() => {
      setJackpot((prev) => prev + (Math.random() * 3.5 + 0.8));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const formatted = new Intl.NumberFormat('en-MY', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(jackpot);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #011a15, #083424, #011a15)',
        border: '1px solid #22c55e',
        borderRadius: '12px',
        padding: '12px 20px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '14px',
        boxShadow: '0 0 25px rgba(34, 197, 94, 0.25)'
      }}
    >
      <div
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '50%',
          background: 'rgba(34,197,94,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#22c55e',
          fontSize: '1.2rem'
        }}
      >
        <i className="fa-solid fa-trophy"></i>
      </div>
      <div>
        <div style={{ color: '#86efac', fontSize: '0.74rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>
          PROGRESIF JACKPOT TERKINI
        </div>
        <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.45rem', fontFamily: 'var(--font-poppins)', lineHeight: 1.1 }}>
          <span style={{ color: '#22c55e', marginRight: '4px' }}>MYR</span>
          {formatted}
        </div>
      </div>
    </div>
  );
}
