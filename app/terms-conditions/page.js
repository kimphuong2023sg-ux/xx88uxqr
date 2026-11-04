import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terma dan Syarat | xx88 Malaysia',
  description: 'Terma dan syarat rasmi penggunaan platform pertaruhan xx88.'
};

export default function TermsConditionsPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-file-contract"></i> Perundangan &amp; Syarat
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Terma dan Syarat <span style={{ color: '#22c55e' }}>xx88</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Sila baca dan fahami syarat-syarat penggunaan perkhidmatan sebelum mendaftar akaun.
          </p>
        </div>
      </section>

      <section style={{ background: '#022c22', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#0a3d2a', border: '1px solid #145a3c', borderRadius: '16px', padding: '36px 30px', color: '#cbd5e1', lineHeight: 1.8 }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>1. Kelayakan Ahli (18+ Sahaja)</h3>
            <p style={{ marginBottom: '20px' }}>
              Pendaftaran akaun di xx88 hanya terbuka kepada individu yang berumur 18 tahun ke atas. Kami berhak meminta bukti pengenalan diri pada bila-bila masa bagi mengesahkan umur dan identiti pengguna.
            </p>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>2. Keselamatan Akaun</h3>
            <p style={{ marginBottom: '20px' }}>
              Setiap ahli bertanggungjawab sepenuhnya terhadap kerahsiaan nama pengguna dan kata laluan akaun mereka. Sebarang aktiviti pertaruhan yang dilakukan menggunakan kelayakan sah anda akan dianggap sah.
            </p>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>3. Deposit &amp; Pengeluaran</h3>
            <p style={{ marginBottom: '20px' }}>
              Nama pada akaun bank yang digunakan untuk deposit dan pengeluaran mestilah sepadan dengan nama penuh yang didaftarkan pada akaun xx88 anda. Pihak kami tidak membenarkan transaksi pihak ketiga bagi mengelakkan penipuan dan pengubahan wang haram.
            </p>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>4. Peraturan Promosi &amp; Bonus</h3>
            <p style={{ marginBottom: '24px' }}>
              Setiap promosi mempunyai syarat perolehan (turnover) tertentu sebelum pengeluaran boleh dibuat. Sebarang percubaan memanipulasi atau menyalahgunakan bonus boleh mengakibatkan penggantungan akaun.
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
