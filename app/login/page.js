'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';

export default function LoginPage() {
  const { lang, triggerToast } = useApp();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: true
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      triggerToast(
        lang === 'ms'
          ? `Selamat kembali ${formData.username}! Anda telah berjaya log masuk ke xx88.`
          : `Welcome back ${formData.username}! Logged in successfully.`,
        'success'
      );
    }, 800);
  };

  const loginFaqs = [
    {
      q: 'Apakah yang perlu saya lakukan jika terlupa kata laluan?',
      a: 'Jika anda terlupa kata laluan akaun, sila klik pautan "Lupa Kata Laluan?" atau hubungi Khidmat Pelanggan Live Chat 24/7 kami dengan memberikan nombor telefon yang didaftarkan untuk penetapan semula segera.'
    },
    {
      q: 'Mengapa akaun saya tertera sebagai disekat atau gagal log masuk?',
      a: 'Akaun mungkin terkunci secara automatik jika percubaan kata laluan yang salah melebihi 5 kali berturut-turut demi melindungi keselamatan baki anda. Sila hubungi pegawai khidmat pelanggan kami untuk bantuan membuka kunci.'
    },
    {
      q: 'Bolehkah saya log masuk menggunakan nombor telefon?',
      a: 'Ya, sistem xx88 membolehkan anda log masuk menggunakan sama ada Nama Pengguna (Username) atau Nombor Telefon Malaysia yang didaftarkan semasa pembukaan akaun.'
    },
    {
      q: 'Adakah selamat untuk log masuk dari telefon pintar atau pelayar awam?',
      a: 'xx88 menggunakan penyulitan SSL 256-Bit bertaraf perbankan. Namun, kami mengesyorkan anda tidak memilih pilihan "Ingat Saya" sekiranya menggunakan komputer atau peranti awam.'
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
            <span style={{ color: '#cbd5e1' }}>Log Masuk</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 55%, #020617 100%)', padding: '48px 0 38px', borderBottom: '1px solid #145a3c' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div className="badge-tag" style={{ marginBottom: '14px' }}>
              <i className="fa-solid fa-lock"></i> Portal Ahli Selamat
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '14px' }}>
              Log Masuk ke Akaun <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
            </h1>
            <p style={{ color: '#86efac', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
              Akses segera ke baki dompet anda, promosi harian, jackpot slot progresif, dan meja kasino langsung kegemaran anda.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-shield-halved"></i> SSL 256-Bit Encrypted
              </span>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-bolt"></i> Log Masuk Sepantas Kilat
              </span>
              <span className="badge-tag" style={{ background: 'rgba(34,197,94,0.12)', fontSize: '0.8rem' }}>
                <i className="fa-solid fa-headset"></i> Bantuan 24/7 Sedia Ada
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Login Form & Troubleshooting Layout */}
      <section style={{ background: '#020617', padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', alignItems: 'start' }}>
            {/* Left: Login Form Card */}
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
                  Log Masuk Ahli xx88
                </h2>
                <p style={{ color: '#86efac', fontSize: '0.85rem' }}>
                  Masukkan nama pengguna dan kata laluan anda
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Username / Phone */}
                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', color: '#d1fae5', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Nama Pengguna / Nombor Telefon <span style={{ color: '#22c55e' }}>*</span>
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
                      placeholder="Nama pengguna atau 01xxxxxxxx"
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

                {/* Password */}
                <div style={{ marginBottom: '14px' }}>
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
                      placeholder="Masukkan kata laluan anda"
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

                {/* Remember me & Forgot Password */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      style={{ width: '15px', height: '15px', accentColor: '#22c55e' }}
                    />
                    <label htmlFor="rememberMe" style={{ color: '#cbd5e1', fontSize: '0.82rem', cursor: 'pointer' }}>
                      Ingat Saya
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={() => triggerToast('Sila hubungi Live Chat 24/7 kami di bawah untuk menetapkan semula kata laluan anda.', 'info')}
                    style={{ color: '#22c55e', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Lupa Kata Laluan?
                  </button>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary-green"
                  style={{ width: '100%', padding: '14px', fontSize: '1.05rem', borderRadius: '10px' }}
                >
                  {loading ? (
                    <span><i className="fa-solid fa-spinner fa-spin me-2"></i> Mengesahkan Akaun...</span>
                  ) : (
                    <span><i className="fa-solid fa-right-to-bracket me-2"></i> Log Masuk Sekarang</span>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '22px 0' }}>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
                <span style={{ color: '#64748b', fontSize: '0.78rem' }}>atau</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }}></div>
              </div>

              {/* Direct Demo play option */}
              <Link
                href="/slot"
                className="btn-outline-green"
                style={{ width: '100%', padding: '11px', textAlign: 'center', display: 'block', fontSize: '0.9rem' }}
              >
                <i className="fa-solid fa-gamepad me-2"></i>
                Cuba Mod Demo Percuma Tanpa Akaun
              </Link>

              {/* Register nudge */}
              <div style={{ textAlign: 'center', marginTop: '22px', color: '#94a3b8', fontSize: '0.88rem' }}>
                Belum mempunyai akaun xx88?{' '}
                <Link href="/register" style={{ color: '#22c55e', fontWeight: 700, textDecoration: 'underline' }}>
                  Daftar Sekarang (Percuma)
                </Link>
              </div>

              {/* SSL badge */}
              <div style={{ marginTop: '22px', borderTop: '1px solid #145a3c', paddingTop: '16px', textAlign: 'center', color: '#64748b', fontSize: '0.78rem' }}>
                <i className="fa-solid fa-shield-halved me-1" style={{ color: '#22c55e' }}></i>
                Disulitkan dengan teknologi keselamatan SSL 256-Bit.
              </div>
            </div>

            {/* Right: Security & Trouble Guide */}
            <div>
              {/* Help & Support Card */}
              <div
                style={{
                  background: 'linear-gradient(145deg, #0a3d2a, #042217)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  padding: '28px',
                  marginBottom: '26px'
                }}
              >
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '14px' }}>
                  <i className="fa-solid fa-circle-info me-2" style={{ color: '#22c55e' }}></i>
                  Menghadapi Masalah Semasa Log Masuk?
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Berikut adalah beberapa panduan pantas untuk membantu anda mengakses semula akaun:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ background: '#011a15', border: '1px solid #145a3c', borderRadius: '10px', padding: '14px' }}>
                    <strong style={{ color: '#22c55e', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                      1. Semak Huruf Besar / Kecil (Caps Lock)
                    </strong>
                    <span style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      Kata laluan di xx88 sensitif terhadap huruf besar dan kecil. Pastikan kekunci Caps Lock tidak diaktifkan tanpa disedari.
                    </span>
                  </div>

                  <div style={{ background: '#011a15', border: '1px solid #145a3c', borderRadius: '10px', padding: '14px' }}>
                    <strong style={{ color: '#22c55e', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                      2. Reset Kata Laluan Segera
                    </strong>
                    <span style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      Jika anda terlupa kata laluan, jangan bimbang. Sila hubungi Live Chat 24/7 kami untuk mendapatkan pautan kata laluan baharu dalam masa 1 minit.
                    </span>
                  </div>

                  <div style={{ background: '#011a15', border: '1px solid #145a3c', borderRadius: '10px', padding: '14px' }}>
                    <strong style={{ color: '#22c55e', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                      3. Log Masuk dari Aplikasi Mudah Alih
                    </strong>
                    <span style={{ color: '#cbd5e1', fontSize: '0.82rem', lineHeight: 1.6 }}>
                      Muat turun Aplikasi Android APK atau iOS PWA kami untuk menikmati log masuk biometrik (Cap Jari / Face ID) yang lebih selamat dan pantas.
                    </span>
                  </div>
                </div>
              </div>

              {/* Exclusive Member Perks Reminder */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #0d3526, #011a15)',
                  border: '1px solid #145a3c',
                  borderRadius: '16px',
                  padding: '24px'
                }}
              >
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '14px' }}>
                  <i className="fa-solid fa-gift me-2" style={{ color: '#22c55e' }}></i>
                  Ganjaran Menanti Anda Selepas Log Masuk
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Rebat Harian 20% bagi setiap tambah nilai pertama
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Cashback Mingguan sehingga 15% dikreditkan secara automatik
                  </li>
                  <li style={{ color: '#cbd5e1', fontSize: '0.86rem', padding: '6px 0' }}>
                    <i className="fa-solid fa-check me-2" style={{ color: '#22c55e' }}></i>
                    Pengeluaran pantas dalam masa 5 - 15 minit ke akaun bank anda
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login FAQs Section */}
      <section style={{ background: '#011a15', padding: '56px 0', borderTop: '1px solid #145a3c' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-title">
            <h2>Soalan Lazim <span className="title-accent">Log Masuk</span></h2>
            <p>Pertanyaan umum mengenai akses dan keselamatan akaun anda.</p>
            <div className="divider-green"></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {loginFaqs.map((faq, index) => (
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
