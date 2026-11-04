'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function AuthModal() {
  const { authModal, closeAuth, openAuth, triggerToast, lang } = useApp();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referral: ''
  });
  const [loading, setLoading] = useState(false);

  if (!authModal.isOpen) return null;

  const isLogin = authModal.mode === 'login';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      closeAuth();
      if (isLogin) {
        triggerToast(
          lang === 'ms'
            ? 'Selamat kembali! Anda telah berjaya log masuk ke xx88.'
            : 'Welcome back! You have logged in successfully to xx88.',
          'success'
        );
      } else {
        triggerToast(
          lang === 'ms'
            ? 'Tahniah! Pendaftaran akaun xx88 berjaya. Sila nikmati bonus alu-aluan anda!'
            : 'Congratulations! xx88 registration complete. Enjoy your welcome bonus!',
          'success'
        );
      }
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={closeAuth}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={closeAuth}
          className="modal-close-btn"
          aria-label="Tutup Modal"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: '22px' }}>
          <img
            src="/mainlogo.png"
            alt="xx88"
            style={{ height: '36px', margin: '0 auto 10px', objectFit: 'contain' }}
          />
          <h4 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
            {isLogin
              ? lang === 'ms' ? 'Log Masuk Ahli xx88' : 'xx88 Member Login'
              : lang === 'ms' ? 'Daftar Akaun Baharu' : 'Register New Account'}
          </h4>
          <p style={{ color: '#86efac', fontSize: '0.82rem', marginTop: '4px' }}>
            {isLogin
              ? lang === 'ms' ? 'Akses segera ke slot, kasino & sukan' : 'Instant access to slots, casino & sports'
              : lang === 'ms' ? 'Daftar percuma & dapatkan Bonus Alu-aluan 100%' : 'Free sign-up with 100% Welcome Bonus'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div
          style={{
            display: 'flex',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '10px',
            padding: '4px',
            marginBottom: '20px',
            border: '1px solid #145a3c'
          }}
        >
          <button
            type="button"
            onClick={() => openAuth('login')}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: isLogin ? '#22c55e' : 'transparent',
              color: isLogin ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s'
            }}
          >
            {lang === 'ms' ? 'Log Masuk' : 'Login'}
          </button>
          <button
            type="button"
            onClick={() => openAuth('register')}
            style={{
              flex: 1,
              padding: '8px 0',
              borderRadius: '8px',
              fontSize: '0.88rem',
              fontWeight: 600,
              background: !isLogin ? '#22c55e' : 'transparent',
              color: !isLogin ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s'
            }}
          >
            {lang === 'ms' ? 'Daftar' : 'Register'}
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit}>
          {/* Username / Phone */}
          <div style={{ marginBottom: '14px' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '6px' }}>
              {lang === 'ms' ? 'Nama Pengguna / Nombor Telefon' : 'Username / Mobile Number'}
            </label>
            <div style={{ position: 'relative' }}>
              <i
                className="fa-solid fa-user"
                style={{ position: 'absolute', left: '14px', top: '13px', color: '#22c55e', fontSize: '0.9rem' }}
              ></i>
              <input
                type="text"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder={lang === 'ms' ? 'Contoh: ali88 / 0123456789' : 'e.g. user88 / 0123456789'}
                style={{
                  width: '100%',
                  background: '#042217',
                  border: '1px solid #145a3c',
                  borderRadius: '8px',
                  padding: '10px 14px 10px 38px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Additional fields for register */}
          {!isLogin && (
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '6px' }}>
                {lang === 'ms' ? 'Nombor WhatsApp / Telefon (MY)' : 'WhatsApp / Mobile (Malaysia)'}
              </label>
              <div style={{ position: 'relative' }}>
                <i
                  className="fa-brands fa-whatsapp"
                  style={{ position: 'absolute', left: '14px', top: '13px', color: '#22c55e', fontSize: '0.95rem' }}
                ></i>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+60 1x-xxxxxxx"
                  style={{
                    width: '100%',
                    background: '#042217',
                    border: '1px solid #145a3c',
                    borderRadius: '8px',
                    padding: '10px 14px 10px 38px',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          )}

          {/* Password */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', color: '#cbd5e1', fontSize: '0.82rem', marginBottom: '6px' }}>
              {lang === 'ms' ? 'Kata Laluan' : 'Password'}
            </label>
            <div style={{ position: 'relative' }}>
              <i
                className="fa-solid fa-lock"
                style={{ position: 'absolute', left: '14px', top: '13px', color: '#22c55e', fontSize: '0.9rem' }}
              ></i>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  background: '#042217',
                  border: '1px solid #145a3c',
                  borderRadius: '8px',
                  padding: '10px 14px 10px 38px',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary-green"
            style={{ width: '100%', padding: '12px', fontSize: '1rem', marginTop: '6px' }}
          >
            {loading ? (
              <span><i className="fa-solid fa-spinner fa-spin me-2"></i> Memproses...</span>
            ) : isLogin ? (
              <span><i className="fa-solid fa-right-to-bracket me-2"></i> {lang === 'ms' ? 'Log Masuk Sekarang' : 'Login Now'}</span>
            ) : (
              <span><i className="fa-solid fa-user-check me-2"></i> {lang === 'ms' ? 'Sahkan Pendaftaran' : 'Complete Registration'}</span>
            )}
          </button>
        </form>

        {/* Security Notice */}
        <div style={{ textAlign: 'center', marginTop: '16px', color: '#64748b', fontSize: '0.78rem' }}>
          <i className="fa-solid fa-shield-halved me-1" style={{ color: '#22c55e' }}></i>
          {lang === 'ms'
            ? 'Maklumat anda dilindungi dengan penyulitan gred keselamatan SSL 256-bit.'
            : 'Your data is encrypted with enterprise 256-bit SSL protection.'}
        </div>
      </div>
    </div>
  );
}
