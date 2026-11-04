'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';

export default function LiveChatWidget() {
  const { isChatOpen, setIsChatOpen, lang } = useApp();
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: lang === 'ms'
        ? 'Selamat datang ke Khidmat Pelanggan xx88! Ada apa-apa yang kami boleh bantu anda hari ini?'
        : 'Welcome to xx88 24/7 Customer Care! How may we assist you today?',
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickTopics = [
    { labelMs: 'Cara Deposit DuitNow', labelEn: 'How to Deposit DuitNow', replyMs: 'Deposit DuitNow diproses serta-merta. Buka menu Pengeluaran > Pilih DuitNow QR > Imbas kod menggunakan aplikasi perbankan anda (Maybank, CIMB, TNG, dll).' },
    { labelMs: 'Tuntut Bonus 100%', labelEn: 'Claim 100% Bonus', replyMs: 'Untuk menuntut Bonus Alu-aluan 100%, sila log masuk dan pilih pilihan Bonus semasa melakukan deposit pertama anda.' },
    { labelMs: 'Tempoh Pengeluaran', labelEn: 'Withdrawal Times', replyMs: 'Semua permohonan pengeluaran diproses dalam tempoh 5 - 15 minit terus ke akaun bank tempatan Malaysia anda.' }
  ];

  const handleSend = (textToSend = inputText) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const userMsg = { sender: 'user', text: trimmed, time: 'Now' };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Bot response simulation
    setTimeout(() => {
      let botReply = lang === 'ms'
        ? 'Terima kasih atas mesej anda. Pegawai khidmat pelanggan kami sedang bersedia untuk membantu anda melalui talian langsung.'
        : 'Thank you for your message. An xx88 support specialist will assist you momentarily.';

      const lower = trimmed.toLowerCase();
      if (lower.includes('deposit') || lower.includes('duitnow')) {
        botReply = 'Deposit DuitNow & FPX kami adalah pantas (1-3 minit) dengan sifar caj transaksi. Minimum RM 20.';
      } else if (lower.includes('bonus') || lower.includes('promosi')) {
        botReply = 'Anda boleh menuntut Bonus Alu-aluan 100% sehingga RM 888 pada deposit pertama anda di halaman Promosi!';
      } else if (lower.includes('keluar') || lower.includes('withdraw') || lower.includes('pengeluaran')) {
        botReply = 'Pengeluaran wang diproses 24/7 dalam tempoh 10 minit terus ke akaun bank anda.';
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply, time: 'Now' }
      ]);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Desktop & Tablet) */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 1150,
          background: 'linear-gradient(135deg, #22c55e, #10b981)',
          color: '#ffffff',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          boxShadow: '0 8px 25px rgba(34,197,94,0.4)',
          border: '2px solid #011a15',
          cursor: 'pointer'
        }}
        aria-label="Khidmat Pelanggan 24/7"
      >
        <i className={`fa-solid ${isChatOpen ? 'fa-xmark' : 'fa-headset'}`}></i>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            left: '24px',
            width: '350px',
            maxWidth: 'calc(100vw - 48px)',
            height: '460px',
            background: '#011a15',
            border: '1px solid #22c55e',
            borderRadius: '16px',
            zIndex: 1250,
            boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(34,197,94,0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'modalFadeIn 0.2s ease-out'
          }}
        >
          {/* Top Bar */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(34,197,94,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#22c55e',
                  border: '1px solid #22c55e'
                }}
              >
                <i className="fa-solid fa-headset"></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>
                  xx88 Live Support
                </div>
                <div style={{ color: '#22c55e', fontSize: '0.74rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  24/7 Online • Bahasa Melayu & English
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              style={{ color: '#94a3b8', fontSize: '1.1rem' }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Quick FAQ Chips */}
          <div
            style={{
              padding: '8px 12px',
              background: '#042217',
              borderBottom: '1px solid #145a3c',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            {quickTopics.map((t, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(lang === 'ms' ? t.labelMs : t.labelEn)}
                style={{
                  background: 'rgba(34,197,94,0.1)',
                  border: '1px solid #145a3c',
                  color: '#86efac',
                  fontSize: '0.72rem',
                  padding: '4px 10px',
                  borderRadius: '50px'
                }}
              >
                {lang === 'ms' ? t.labelMs : t.labelEn}
              </button>
            ))}
          </div>

          {/* Message Thread */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((m, index) => {
              const isBot = m.sender === 'bot';
              return (
                <div
                  key={index}
                  style={{
                    alignSelf: isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    background: isBot ? '#072a1e' : '#22c55e',
                    color: isBot ? '#e2f5ea' : '#011a15',
                    border: isBot ? '1px solid #145a3c' : 'none',
                    borderRadius: isBot ? '14px 14px 14px 2px' : '14px 14px 2px 14px',
                    padding: '10px 14px',
                    fontSize: '0.86rem',
                    lineHeight: 1.5,
                    fontWeight: isBot ? 400 : 600
                  }}
                >
                  {m.text}
                </div>
              );
            })}
          </div>

          {/* Input Box */}
          <div
            style={{
              background: '#042217',
              borderTop: '1px solid #145a3c',
              padding: '10px 12px',
              display: 'flex',
              gap: '8px'
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'ms' ? 'Taip soalan anda di sini...' : 'Type your message...'}
              style={{
                flex: 1,
                background: '#011a15',
                border: '1px solid #145a3c',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#ffffff',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSend()}
              className="btn-primary-green"
              style={{ padding: '8px 14px', borderRadius: '8px' }}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
