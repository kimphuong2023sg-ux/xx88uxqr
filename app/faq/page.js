'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { FAQS } from '@/data/gamesData';

export default function FAQPage() {
  const { lang, openAuth } = useApp();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-circle-question"></i> Bantuan &amp; Jawapan
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Soalan Lazim <span style={{ color: '#22c55e' }}>(FAQ) xx88</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Jawapan pantas kepada pertanyaan umum mengenai pendaftaran, bonus, slot, dan pengeluaran wang.
          </p>
        </div>
      </section>

      <section style={{ background: '#022c22', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#0a3d2a',
                    border: `1px solid ${isOpen ? '#22c55e' : '#145a3c'}`,
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.2s'
                  }}
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: isOpen ? '#22c55e' : '#ffffff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <i
                      className={`fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                      style={{ fontSize: '0.85rem', color: '#22c55e', marginLeft: '12px' }}
                    ></i>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 20px 20px',
                        color: '#cbd5e1',
                        fontSize: '0.92rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: '14px'
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div
            style={{
              textAlign: 'center',
              marginTop: '45px',
              background: '#011a15',
              border: '1px solid #145a3c',
              borderRadius: '14px',
              padding: '28px'
            }}
          >
            <h4 style={{ color: '#ffffff', marginBottom: '8px' }}>Masih mempunyai soalan?</h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '20px' }}>
              Pasukan Khidmat Pelanggan kami sedia berkhidmat 24 jam sehari untuk membantu anda.
            </p>
            <Link
              href="/register"
              className="btn-primary-green"
              style={{ padding: '10px 26px', display: 'inline-block' }}
            >
              Daftar Sekarang &amp; Mula Bermain
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
