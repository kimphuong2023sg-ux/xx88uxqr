import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami | xx88 Malaysia',
  description: 'Mengenai xx88, platform kasino online, slot dan pertaruhan sukan paling dipercayai di Malaysia.'
};

export default function AboutUsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-building"></i> Profil Syarikat &amp; Platform
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Tentang <span style={{ color: '#22c55e' }}>xx88 Malaysia</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Menerajui inovasi hiburan kasino digital dengan integriti, keselamatan data dan sokongan tempatan terbaik.
          </p>
        </div>
      </section>

      <section style={{ background: '#022c22', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#0a3d2a', border: '1px solid #145a3c', borderRadius: '16px', padding: '36px 30px' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '16px' }}>Visi &amp; Misi Kami</h2>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '20px' }}>
              <strong>xx88</strong> diasaskan dengan satu matlamat jelas: menyediakan persekitaran pertaruhan dalam talian yang telus, selamat dan menyeronokkan untuk pemain di Malaysia. Kami menggabungkan perisian berlesen bertaraf dunia, infrastruktur pelayan kelajuan tinggi, dan sokongan perbankan tempatan (DuitNow &amp; FPX) bagi mewujudkan standard baharu dalam industri.
            </p>

            <h3 style={{ fontSize: '1.3rem', color: '#22c55e', marginTop: '28px', marginBottom: '12px' }}>Nilai Utama Kami</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '24px' }}>
              <li style={{ padding: '8px 0', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#22c55e' }}></i>
                <span><strong>Keselamatan Tanpa Kompromi:</strong> Perlindungan data peribadi dan transaksi kewangan dengan penyulitan SSL 256-bit.</span>
              </li>
              <li style={{ padding: '8px 0', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#22c55e' }}></i>
                <span><strong>Keadilan Permainan (Fair Play):</strong> Semua permainan slot dan meja RNG diperakui secara bebas untuk menjamin keputusan rawak tanpa manipulasi.</span>
              </li>
              <li style={{ padding: '8px 0', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fa-solid fa-circle-check" style={{ color: '#22c55e' }}></i>
                <span><strong>Kepantasan Transaksi:</strong> Sistem pengeluaran wang automatik yang mengkreditkan kemenangan dalam masa 5 hingga 15 minit.</span>
              </li>
            </ul>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <Link href="/" className="btn-primary-green">
                Kembali ke Laman Utama
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
