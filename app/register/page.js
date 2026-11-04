'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function RegisterPage() {
  const { lang, triggerToast } = useApp();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referral: '',
    agreeTerms: true
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      triggerToast(
        lang === 'ms'
          ? 'Sila tandakan persetujuan Terma & Syarat (18+).'
          : 'Please accept Terms & Conditions (18+).',
        'error'
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      triggerToast(
        lang === 'ms'
          ? 'Kata laluan dan pengesahan kata laluan tidak sepadan!'
          : 'Passwords do not match!',
        'error'
      );
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      triggerToast(
        lang === 'ms'
          ? `Tahniah ${formData.username}! Pendaftaran akaun xx88 berjaya. Sila nikmati Bonus 100% anda!`
          : `Congratulations ${formData.username}! Registration complete. Enjoy your 100% Welcome Bonus!`,
        'success'
      );
    }, 1000);
  };

  const registerFaqs = [
    {
      q: 'Berapakah kos untuk mendaftar akaun di xx88?',
      a: 'Pendaftaran akaun di xx88 adalah 100% PERCUMA. Tiada sebarang yuran pendaftaran atau caj tersembunyi.'
    },
    {
      q: 'Apakah dokumen yang diperlukan untuk pendaftaran?',
      a: 'Anda hanya memerlukan nama pengguna pilihan dan nombor telefon aktif Malaysia (+60). Tiada dokumen rumit diperlukan untuk mula bermain.'
    },
    {
      q: 'Bolehkah saya mendaftar lebih daripada satu akaun?',
      a: 'Untuk tujuan keselamatan dan mematuhi polisi permainan adil, setiap individu hanya dibenarkan memiliki satu (1) akaun xx88 yang sah.'
    },
    {
      q: 'Bagaimanakah cara untuk menuntut Bonus Selamat Datang 100%?',
      a: 'Selepas melengkapkan pendaftaran, lakukan deposit pertama serendah RM 20 melalui DuitNow atau FPX dan pilih pilihan Bonus Selamat Datang 100% pada halaman Promosi.'
    }
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: 'rgba(2,44,34,0.6)', borderBottom: '1px solid #145a3c', padding: '10px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', fontSize: '0.84rem', color: '#94a3b8' }}>
            <Link href="/" style={{ color: '#22c55e' }}>Laman Utama</Link>
            <span>/</span>
            <span style={{ color: '#cbd5e1' }}>Daftar Akaun</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 55%, #020617 100%)', padding: '48px 0 38px', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          <div style={{ maxWidth: '780px' }}>
            <div className="badge-tag" style={{ marginBottom: '14px' }}>
              <i className="fa-solid fa-gift"></i> Bonus Alu-aluan 100% Menanti Anda
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.7rem)', marginBottom: '14px' }}>
              Daftar Akaun <span style={{ color: '#22c55e' }}>xx88 Malaysia</span> – Mudah, Pantas &amp; Selamat
            </h1>
            <p style={{ color: '#86efac', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Sertai lebih 500,000 ahli di platform hiburan digital terkemuka Malaysia. Nikmati 1,000+ slot berlesen, kasino langsung definisi tinggi, dan pengeluaran pantas 24/7 dengan DuitNow.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-bolt"></i> Siap dalam 2 Minit
              </span>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-wallet"></i> Deposit Min RM 20
              </span>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-shield-halved"></i> SSL 256-Bit Encrypted
              </span>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-rotate-left"></i> Cashback Mingguan 15%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Registration & Steps Layout */}
      <section style={{ background: '#020617', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
            {/* Left: Registration Form Card */}
            <div
              style={{
                background: 'linear-gradient(145deg, #072a1e, #011a15)',
                border: '1.5px solid #22c55e',
                borderRadius: '20px',
                padding: '36px 30px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.7), 0 0 30px rgba(34,197,94,0.2)'
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <img
                  src="/mainlogo.png"
                  alt="xx88"
                  style={{ height: '38px', margin: '0 auto 10px', objectFit: 'contain' }}
                />
                <h2 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '4px' }}>
                  Borang Pendaftaran Ahli Baharu
                </h2>
                <p style={{ color: '#86efac', fontSize: '0.85rem' }}>
                  Lengkapkan butiran ringkas di bawah untuk memulakan
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: '#d1fae5', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Nama Pengguna (Username) <span style={{ color: '#22c55e' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i
                      className="fa-solid fa-user"
                      style={{ position: 'absolute', left: '14px', top: '14px', color: '#22c55e', fontSize: '0.88rem' }}
                    ></i>
                    <input
                      type="text"
                      name="username"
                      required
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="cth: pemain88 / bertuah88"
                      style={{
                        width: '100%',
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 14px 12px 40px',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.74rem', marginTop: '4px' }}>
                    Gunakan 4-16 aksara huruf dan nombor
                  </div>
                </div>

                {/* Mobile Phone (Malaysia +60) */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: '#d1fae5', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Nombor Telefon Malaysia <span style={{ color: '#22c55e' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div
                      style={{
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        color: '#22c55e',
                        fontWeight: 700,
                        fontSize: '0.92rem'
                      }}
                    >
                      🇲🇾 +60
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="12 345 6789"
                      style={{
                        flex: 1,
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 14px',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.74rem', marginTop: '4px' }}>
                    Untuk tujuan keselamatan dan pengesahan deposit DuitNow
                  </div>
                </div>

                {/* Password */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: '#d1fae5', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Kata Laluan <span style={{ color: '#22c55e' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i
                      className="fa-solid fa-lock"
                      style={{ position: 'absolute', left: '14px', top: '14px', color: '#22c55e', fontSize: '0.88rem' }}
                    ></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Minimum 6 aksara"
                      style={{
                        width: '100%',
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 40px 12px 40px',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '14px',
                        top: '14px',
                        color: '#64748b',
                        fontSize: '0.9rem'
                      }}
                    >
                      <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', color: '#d1fae5', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Sahkan Kata Laluan <span style={{ color: '#22c55e' }}>*</span>
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i
                      className="fa-solid fa-lock-open"
                      style={{ position: 'absolute', left: '14px', top: '14px', color: '#22c55e', fontSize: '0.88rem' }}
                    ></i>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Ulang kata laluan"
                      style={{
                        width: '100%',
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 14px 12px 40px',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Referral Code (Optional) */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '6px' }}>
                    Kod Rujukan / Referral (Pilihan)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <i
                      className="fa-solid fa-ticket"
                      style={{ position: 'absolute', left: '14px', top: '14px', color: '#22c55e', fontSize: '0.88rem' }}
                    ></i>
                    <input
                      type="text"
                      name="referral"
                      value={formData.referral}
                      onChange={handleChange}
                      placeholder="Masukkan kod jemputan kawan jika ada"
                      style={{
                        width: '100%',
                        background: '#042217',
                        border: '1px solid #145a3c',
                        borderRadius: '10px',
                        padding: '12px 14px 12px 40px',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Terms agreement checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '22px' }}>
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: '#22c55e' }}
                  />
                  <label htmlFor="agreeTerms" style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.6 }}>
                    Saya mengesahkan bahawa saya berumur <strong>18 tahun ke atas</strong> dan bersetuju dengan{' '}
                    <Link href="/terms-conditions" style={{ color: '#22c55e', textDecoration: 'underline' }}>
                      Terma &amp; Syarat
                    </Link>{' '}
                    serta{' '}
                    <Link href="/privacy-policy" style={{ color: '#22c55e', textDecoration: 'underline' }}>
                      Dasar Privasi
                    </Link>{' '}
                    xx88.
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-green"
                  style={{ width: '100%', padding: '14px', fontSize: '1.05rem', borderRadius: '10px' }}
                >
                  {loading ? (
                    <span><i className="fa-solid fa-spinner fa-spin me-2"></i> Mendaftarkan Akaun...</span>
                  ) : (
                    <span><i className="fa-solid fa-user-plus me-2"></i> Daftar Akaun Sekarang</span>
                  )}
                </button>
              </form>

              {/* Already have an account nudge */}
              <div style={{ textAlign: 'center', marginTop: '20px', color: '#94a3b8', fontSize: '0.88rem' }}>
                Sudah mempunyai akaun?{' '}
                <Link href="/login" style={{ color: '#22c55e', fontWeight: 700, textDecoration: 'underline' }}>
                  Log Masuk di sini
                </Link>
              </div>

              {/* Security info */}
              <div style={{ marginTop: '22px', borderTop: '1px solid #145a3c', paddingTop: '16px', textAlign: 'center', color: '#64748b', fontSize: '0.78rem' }}>
                <i className="fa-solid fa-lock me-1" style={{ color: '#22c55e' }}></i>
                Data anda dilindungi sepenuhnya dengan standard penyulitan SSL 256-Bit.
              </div>
            </div>

            {/* Right: Steps, Perks & Live Benefits */}
            <div>
              {/* Bonus Card */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(34,197,94,0.08))',
                  border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: '16px',
                  padding: '24px',
                  marginBottom: '28px',
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '12px',
                    background: 'rgba(245,158,11,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#f59e0b',
                    fontSize: '1.6rem',
                    flexShrink: 0
                  }}
                >
                  <i className="fa-solid fa-gift"></i>
                </div>
                <div>
                  <h4 style={{ color: '#fde68a', fontSize: '1.1rem', margin: '0 0 4px' }}>
                    Bonus Selamat Datang 100% Sehingga RM 888
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>
                    Khas untuk semua ahli baharu yang mendaftar hari ini. Gandakan deposit pertama anda serta-merta!
                  </p>
                </div>
              </div>

              {/* 3 Simple Steps */}
              <div
                style={{
                  background: '#0a3d2a',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '28px'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '20px' }}>
                  <i className="fa-solid fa-list-check me-2" style={{ color: '#22c55e' }}></i>
                  3 Langkah Mudah Memulakan Perjalanan di xx88
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        color: '#011a15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        flexShrink: 0
                      }}
                    >
                      1
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                        Isi Maklumat &amp; Daftar
                      </strong>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem', margin: 0, lineHeight: 1.6 }}>
                        Hanya ambil masa 2 minit dengan mengisi nama pengguna, telefon, dan kata laluan pilihan.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        color: '#011a15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        flexShrink: 0
                      }}
                    >
                      2
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                        Deposit Pantas Melalui DuitNow / FPX
                      </strong>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem', margin: 0, lineHeight: 1.6 }}>
                        Imbas kod DuitNow QR atau pindahan perbankan internet bermula serendah RM 20 tanpa caj.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#22c55e',
                        color: '#011a15',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        flexShrink: 0
                      }}
                    >
                      3
                    </div>
                    <div>
                      <strong style={{ color: '#ffffff', fontSize: '0.95rem', display: 'block', marginBottom: '2px' }}>
                        Menang &amp; Keluarkan Wang Tunai
                      </strong>
                      <p style={{ color: '#94a3b8', fontSize: '0.84rem', margin: 0, lineHeight: 1.6 }}>
                        Main ribuan game slot, kasino live atau sukan. Wang kemenangan diproses dalam masa 10 minit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Register at xx88 */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #0d3526, #011a15)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  padding: '24px'
                }}
              >
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px' }}>
                  <i className="fa-solid fa-star me-2" style={{ color: '#22c55e' }}></i>
                  Kelebihan Eksklusif Ahli xx88
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Akses 1,000+ Permainan Slot Pragmatic, PG Soft, JILI &amp; Habanero
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Penstriman Langsung Kasino Meja Baccarat &amp; Roulette Resolusi 4K
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Rebat &amp; Cashback Mingguan sehingga 15% tanpa had siling
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Sokongan Pelanggan 24 Jam Sehari dalam Bahasa Malaysia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration FAQ Section */}
      <section style={{ background: '#011a15', padding: '56px 0', borderTop: '1px solid #145a3c' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-title">
            <h2>Soalan Lazim <span className="title-accent">Pendaftaran Akaun</span></h2>
            <p>Segala maklumat yang anda perlu tahu sebelum mendaftar di xx88.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {registerFaqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: '#0a3d2a',
                  border: '1px solid #145a3c',
                  borderRadius: '12px',
                  padding: '20px 24px'
                }}
              >
                <h5 style={{ color: '#22c55e', fontSize: '1rem', marginBottom: '8px' }}>
                  <i className="fa-solid fa-circle-question me-2"></i> {faq.q}
                </h5>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
