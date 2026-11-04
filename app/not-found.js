import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: '404 - Halaman Tidak Ditemui | xx88 Malaysia',
  description: 'Halaman yang anda cari tidak wujud atau telah dipindahkan.'
};

export default function NotFound() {
  return (
    <section style={{ minHeight: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#022c22', padding: '60px 0' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '580px' }}>
        <div style={{ fontSize: '6rem', fontWeight: 900, color: '#22c55e', lineHeight: 1, fontFamily: 'var(--font-poppins)' }}>
          404
        </div>
        <h2 style={{ fontSize: '1.8rem', color: '#ffffff', margin: '14px 0 10px' }}>
          Halaman Tidak Ditemui
        </h2>
        <p style={{ color: '#86efac', fontSize: '0.95rem', marginBottom: '28px' }}>
          Maaf, pautan yang anda akses mungkin telah luput atau dipindahkan ke destinasi baharu. Sila pilih pautan di bawah untuk meneruskan.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary-green">
            <i className="fa-solid fa-house me-2"></i> Laman Utama
          </Link>
          <Link href="/slot" className="btn-outline-green">
            <i className="fa-solid fa-gamepad me-2"></i> Permainan Slot
          </Link>
          <Link href="/promosi" className="btn-outline-green">
            <i className="fa-solid fa-gift me-2"></i> Promosi VIP
          </Link>
        </div>
      </div>
    </section>
  );
}
