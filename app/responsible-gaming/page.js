import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Permainan Bertanggungjawab | xx88 Malaysia',
  description: 'Garis panduan dan sokongan permainan bertanggungjawab di platform xx88.'
};

export default function ResponsibleGamingPage() {
  return (
    <>
      <section style={{ background: 'linear-gradient(135deg, #011a15 0%, #022c22 50%, #020617 100%)', padding: '50px 0 35px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge-tag" style={{ marginBottom: '12px' }}>
            <i className="fa-solid fa-heart-pulse"></i> Perlindungan Pemain
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '14px' }}>
            Permainan <span style={{ color: '#22c55e' }}>Bertanggungjawab</span>
          </h1>
          <p style={{ color: '#86efac', maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
            Komitmen kami untuk memastikan aktiviti perjudian kekal selamat, terkawal dan semata-mata untuk hiburan.
          </p>
        </div>
      </section>

      <section style={{ background: '#022c22', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ background: '#0a3d2a', border: '1px solid #145a3c', borderRadius: '16px', padding: '36px 30px', color: '#cbd5e1', lineHeight: 1.8 }}>
            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>Prinsip Utama Bermain Bertanggungjawab</h3>
            <p style={{ marginBottom: '20px' }}>
              Di xx88, kami percaya bahawa permainan dalam talian haruslah menjadi aktiviti riadah yang menyeronokkan. Jangan sesekali menganggap judi sebagai cara menjana wang atau melunaskan hutang piutang.
            </p>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>Panduan Mengawal Diri:</h3>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li><strong>Tetapkan Had Bajet:</strong> Hanya pertaruhkan jumlah yang anda mampu untuk rugi tanpa menjejaskan keperluan harian.</li>
              <li><strong>Tetapkan Had Masa:</strong> Hadkan jam bermain dan jangan biarkan ia mengganggu waktu bersama keluarga dan kerjaya.</li>
              <li><strong>Jangan Kejar Kerugian (Chase Losses):</strong> Menerima kekalahan sebagai sebahagian daripada permainan adalah kunci pemain bijak.</li>
              <li><strong>Elakkan Bermain Ketika Emosi:</strong> Jangan bermain ketika sedang marah, tertekan atau di bawah pengaruh alkohol.</li>
            </ul>

            <h3 style={{ color: '#22c55e', fontSize: '1.3rem', marginBottom: '10px' }}>Pengecualian Diri (Self-Exclusion)</h3>
            <p style={{ marginBottom: '24px' }}>
              Jika anda merasakan aktiviti taruhan anda tidak lagi terkawal, anda boleh menghubungi pasukan Khidmat Pelanggan 24/7 kami untuk memohon penggantungan akaun sementara atau pengecualian diri kekal.
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
