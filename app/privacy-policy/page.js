import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dasar Privasi | xx88 Malaysia',
  description: 'Dasar privasi dan perlindungan data peribadi ahli platform xx88.'
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-user-shield"></i> Perlindungan Data Peribadi
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Dasar Privasi <span style={{ color: '#22c55e' }}>xx88</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Komitmen teguh kami terhadap kerahsiaan dan keselamatan maklumat peribadi anda.
          </p>
        </div>
      </section>

      <section style={{ background: '#022c22', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#0a3d2a', border: '1px solid #145a3c', borderRadius: '16px', padding: '36px 30px', color: '#cbd5e1', lineHeight: 1.8 }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>1. Maklumat yang Kami Kumpul</h3>
            <p style={{ marginBottom: '20px' }}>
              Semasa pendaftaran, kami mengumpul maklumat asas seperti nama pengguna, nombor telefon, dan alamat e-mel. Maklumat perbankan hanya digunakan secara selamat untuk tujuan pengesahan deposit dan pemprosesan pengeluaran wang tunai.
            </p>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>2. Penggunaan Maklumat</h3>
            <p style={{ marginBottom: '20px' }}>
              Maklumat anda digunakan untuk:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '20px' }}>
              <li>Menguruskan akaun dan memproses transaksi taruhan serta pembayaran.</li>
              <li>Menyediakan perkhidmatan pelanggan 24/7 dan bantuan teknikal.</li>
              <li>Menghantar notifikasi promosi eksklusif sekiranya anda bersetuju.</li>
              <li>Mencegah sebarang aktiviti penipuan atau penyalahgunaan platform.</li>
            </ul>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>3. Piawaian Penyulitan SSL 256-Bit</h3>
            <p style={{ marginBottom: '24px' }}>
              Semua data yang dihantar antara peranti anda dan pelayan xx88 dilindungi dengan teknologi penyulitan gred ketenteraan SSL 256-bit. Kami tidak akan sekali-kali menjual atau menyewakan maklumat anda kepada pihak ketiga.
            </p>

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
