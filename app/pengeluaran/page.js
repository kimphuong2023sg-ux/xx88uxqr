'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { PAYMENT_METHODS } from '@/data/gamesData';

export default function PengeluaranPage() {
  const { lang, openAuth, triggerToast } = useApp();
  const [activeTab, setActiveTab] = useState('withdraw'); // 'withdraw' | 'deposit'

  const stepsWithdraw = [
    { step: 1, title: 'Log Masuk ke Akaun', desc: 'Akses akaun xx88 anda dan tekan butang "Dompet" atau "Pengeluaran" pada navigasi.' },
    { step: 2, title: 'Pilih Kaedah Bank Anda', desc: 'Pilih bank tempatan pilihan anda (Maybank, CIMB, Public Bank, RHB, Hong Leong, dll) atau DuitNow.' },
    { step: 3, title: 'Masukkan Jumlah & Sahkan', desc: 'Nyatakan jumlah pengeluaran (min RM 50). Sistem akan memproses dan mengesahkan transaksi secara automatik.' },
    { step: 4, title: 'Dana Dikreditkan Serta-merta', desc: 'Wang anda akan masuk terus ke dalam akaun bank dalam masa 5 hingga 15 minit tanpa sebarang caj.' }
  ];

  const stepsDeposit = [
    { step: 1, title: 'Tekan Butang Deposit', desc: 'Buka dompet anda dan pilih menu "Deposit".' },
    { step: 2, title: 'Pilih DuitNow / FPX / TNG', desc: 'Pilih saluran pembayaran kegemaran anda untuk transaksi segera tanpa yuran.' },
    { step: 3, title: 'Imbas QR atau Masuk Perbankan', desc: 'Gunakan aplikasi bank atau e-wallet anda untuk mengimbas kod DuitNow QR yang dipaparkan.' },
    { step: 4, title: 'Kredit Masuk Secara Automatik', desc: 'Baki akaun xx88 anda akan dikemas kini dalam masa 1 hingga 3 minit.' }
  ];

  return (
    <>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-wallet"></i> {lang === 'ms' ? 'Pusat Kewangan & Perbankan' : 'Banking & Payments Hub'}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Sistem Deposit &amp; <span style={{ color: '#22c55e' }}>Pengeluaran Pantas</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            {lang === 'ms'
              ? 'xx88 menjamin transaksi selamat, pantas dan telus dengan sokongan penuh sistem pembayaran tempatan Malaysia (DuitNow, FPX, eWallet).'
              : 'Fast, automated payouts within 5-15 minutes directly to all major Malaysian banking institutions.'}
          </p>
        </div>
      </section>

      {/* Mode Selector */}
      <section style={{ background: '#011a15', padding: '20px 0', borderBottom: '1px solid #145a3c' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', background: '#072a1e', borderRadius: '50px', padding: '6px', border: '1px solid #145a3c' }}>
            <button
              onClick={() => setActiveTab('withdraw')}
              style={{
                background: activeTab === 'withdraw' ? '#22c55e' : 'transparent',
                color: activeTab === 'withdraw' ? '#ffffff' : '#86efac',
                padding: '10px 28px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              <i className="fa-solid fa-arrow-up-from-bracket me-2"></i>
              {lang === 'ms' ? 'Panduan Pengeluaran' : 'Withdrawal Guide'}
            </button>
            <button
              onClick={() => setActiveTab('deposit')}
              style={{
                background: activeTab === 'deposit' ? '#22c55e' : 'transparent',
                color: activeTab === 'deposit' ? '#ffffff' : '#86efac',
                padding: '10px 28px',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
            >
              <i className="fa-solid fa-arrow-down-to-bracket me-2"></i>
              {lang === 'ms' ? 'Panduan Deposit' : 'Deposit Guide'}
            </button>
          </div>
        </div>
      </section>

      {/* Step by Step Flow */}
      <section style={{ background: '#022c22' }}>
        <div className="container">
          <div className="section-title">
            <h2>
              {activeTab === 'withdraw' ? 'Langkah Mudah ' : 'Cara Mudah Melakukan '}
              <span className="title-accent">
                {activeTab === 'withdraw' ? 'Pengeluaran Wang' : 'Deposit Pantas'}
              </span>
            </h2>
            <p>
              {activeTab === 'withdraw'
                ? 'Ikuti 4 langkah mudah ini untuk mengeluarkan wang kemenangan anda terus ke akaun bank.'
                : 'Tambah baki akaun xx88 anda dalam beberapa saat sahaja.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {(activeTab === 'withdraw' ? stepsWithdraw : stepsDeposit).map((s) => (
              <div
                key={s.step}
                style={{
                  background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                  border: '1px solid #145a3c',
                  borderRadius: '14px',
                  padding: '24px 20px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    color: '#011a15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    marginBottom: '14px'
                  }}
                >
                  {s.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#ffffff', marginBottom: '8px' }}>
                  {s.title}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              href="/login"
              className="btn-primary-green"
              style={{ padding: '12px 36px', fontSize: '1rem', display: 'inline-flex' }}
            >
              <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
              {lang === 'ms' ? 'Log Masuk & Buat Transaksi' : 'Login & Transact'}
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Channels Table */}
      <section style={{ background: '#011a15' }}>
        <div className="container">
          <div className="section-title">
            <h2>Saluran Pembayaran yang Disokong di <span className="title-accent">xx88</span></h2>
            <p>Ketelusan penuh mengenai masa pemprosesan dan had setiap saluran transaksi.</p>
            <div className="divider-green"></div>
          </div>

          <div className="table-responsive">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Kaedah Transaksi</th>
                  <th>Jenis Pembayaran</th>
                  <th>Masa Pemprosesan</th>
                  <th>Had Minimum / Maksimum</th>
                  <th>Caj Transaksi</th>
                </tr>
              </thead>
              <tbody>
                {PAYMENT_METHODS.map((method, idx) => (
                  <tr key={idx}>
                    <td>
                      <i className={`fa-solid ${method.icon} me-2`} style={{ color: '#22c55e' }}></i>
                      {method.name}
                    </td>
                    <td>{method.type}</td>
                    <td><span className="check">{method.time}</span></td>
                    <td>RM 20 / RM 50,000 setiap transaksi</td>
                    <td><span className="badge-tag">PERCUMA 0%</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
