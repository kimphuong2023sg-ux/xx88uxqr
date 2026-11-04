'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import JackpotTicker from '@/components/JackpotTicker';

export default function HomePage() {
  const { lang, openAuth } = useApp();

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="badge-tag">
                <i className="fa-solid fa-circle-check"></i>
                <span>{lang === 'ms' ? 'Dipercayai Pemain Malaysia' : 'Trusted Malaysian Platform'}</span>
              </div>
              <h1>
                xx88 – <span>Platform Taruhan Online Terbaik</span> &amp; Paling Dipercayai di Malaysia
              </h1>
              <p className="hero-lead">
                {lang === 'ms'
                  ? 'Selamat datang ke xx88, destinasi hiburan digital nombor satu untuk pemain Malaysia. Daripada slot premium hingga kasino langsung dan pertaruhan sukan, semua ada di satu tempat.'
                  : 'Welcome to xx88, Malaysia\'s #1 destination for digital casino entertainment. Experience world-class slots, real live dealers, and competitive sports odds.'}
              </p>

              {/* Action Buttons */}
              <div className="hero-actions">
                <Link
                  href="/register"
                  className="btn-primary-green"
                  style={{ padding: '12px 28px', fontSize: '1rem' }}
                >
                  <i className="fa-solid fa-user-plus"></i>
                  <span>{lang === 'ms' ? 'Daftar Sekarang' : 'Register Now'}</span>
                </Link>
                <Link
                  href="/promosi"
                  className="btn-outline-green"
                  style={{ padding: '11px 26px', fontSize: '1rem' }}
                >
                  <i className="fa-solid fa-gift"></i>
                  <span>{lang === 'ms' ? 'Lihat Promosi' : 'View Promos'}</span>
                </Link>
              </div>

              {/* Real-time Jackpot Ticker */}
              <div style={{ marginTop: '28px' }}>
                <JackpotTicker />
              </div>
            </div>

            {/* Hero Visual Image */}
            <div className="hero-img-wrap">
              <img
                src="/img/1d0r967u5x.jpg"
                alt="xx88 Platform Kasino Malaysia"
                width={500}
                height={350}
                priority="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="num">500K+</div>
              <div className="lbl">{lang === 'ms' ? 'Ahli Berdaftar' : 'Registered Members'}</div>
            </div>
            <div className="stat-item">
              <div className="num">1000+</div>
              <div className="lbl">{lang === 'ms' ? 'Permainan Aktif' : 'Active Games'}</div>
            </div>
            <div className="stat-item">
              <div className="num">24/7</div>
              <div className="lbl">{lang === 'ms' ? 'Sokongan Pelanggan' : 'Customer Support'}</div>
            </div>
            <div className="stat-item">
              <div className="num">MYR</div>
              <div className="lbl">{lang === 'ms' ? 'Mata Wang Rasmi (Ringgit)' : 'Official Currency'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE CARDS (Mengapa Pilih xx88) */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>
              {lang === 'ms' ? 'Mengapa Pilih ' : 'Why Choose '}
              <span className="title-accent">xx88</span>?
            </h2>
            <p>
              {lang === 'ms'
                ? 'Platform kami direka khusus untuk memenuhi keperluan pemain Malaysia dengan pengalaman yang lancar, pantas dan selamat.'
                : 'Engineered specifically for Malaysian players with ultra-low latency, bank-grade encryption, and seamless local banking.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-bolt"></i></div>
              <h5>{lang === 'ms' ? 'Pantas & Stabil' : 'Fast & Stable'}</h5>
              <p>{lang === 'ms' ? 'Server berkelajuan tinggi memastikan pengalaman tanpa gangguan setiap masa.' : 'High-speed cloud servers guarantee smooth uninterrupted gameplay.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h5>{lang === 'ms' ? 'Selamat & Terjamin' : 'Safe & Encrypted'}</h5>
              <p>{lang === 'ms' ? 'Penyulitan SSL 256-bit melindungi setiap transaksi dan data peribadi anda.' : 'Military-grade 256-bit SSL safeguards every payment and account detail.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-mobile-screen"></i></div>
              <h5>{lang === 'ms' ? 'Mobile Friendly' : 'Mobile Optimized'}</h5>
              <p>{lang === 'ms' ? 'Akses penuh melalui Android, iOS atau pelayar web tanpa kehilangan fungsi.' : 'Full responsive mobile experience for iOS, Android and tablets.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-gamepad"></i></div>
              <h5>{lang === 'ms' ? '1000+ Permainan' : '1000+ Games'}</h5>
              <p>{lang === 'ms' ? 'Slot, kasino langsung, sukan, poker dan banyak lagi pilihan hiburan.' : 'Massive library from Pragmatic Play, JILI, PG Soft and Evolution.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-wallet"></i></div>
              <h5>{lang === 'ms' ? 'Deposit Mudah' : 'Easy Deposit'}</h5>
              <p>{lang === 'ms' ? 'Sokong DuitNow QR, FPX, Touch \'n Go, Boost, GrabPay dan kad bank.' : 'Instant funding via DuitNow QR, FPX, TNG eWallet, Boost and GrabPay.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
              <h5>{lang === 'ms' ? 'Sokongan 24/7' : '24/7 Support'}</h5>
              <p>{lang === 'ms' ? 'Pasukan khidmat pelanggan tempatan sedia membantu bila-bila masa.' : 'Dedicated customer care team available around the clock.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-trophy"></i></div>
              <h5>{lang === 'ms' ? 'Program VIP' : 'VIP Program'}</h5>
              <p>{lang === 'ms' ? 'Nikmati ganjaran eksklusif, cashback sehingga 15% dan bonus istimewa.' : 'Exclusive tiers with weekly cashback rebates and personalized perks.'}</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-flag"></i></div>
              <h5>{lang === 'ms' ? 'Untuk Malaysia' : 'Made for Malaysia'}</h5>
              <p>{lang === 'ms' ? 'Antara muka dwi-bahasa (BM/EN), transaksi MYR dan sokongan tempatan.' : 'Native MYR settlements, local language support, and zero exchange fees.'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GAME CATEGORIES */}
      <section className="game-cat-section">
        <div className="container">
          <div className="section-title">
            <h2>
              {lang === 'ms' ? 'Kategori ' : 'Explore '}
              <span className="title-accent">{lang === 'ms' ? 'Permainan' : 'Games'}</span>
              {lang === 'ms' ? ' Pilihan' : ' Lobby'}
            </h2>
            <p>
              {lang === 'ms'
                ? 'Terokai pelbagai kategori permainan yang tersedia di xx88 untuk pengalaman hiburan terlengkap.'
                : 'Immerse yourself in top-tier casino gaming, live dealer tables and real-time sports.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="game-cat-grid">
            <Link href="/slot" className="game-cat-card">
              <img src="/img/ig49q5h5.jpg" alt="Slot Online xx88" />
              <div className="game-cat-body">
                <span className="badge-tag" style={{ marginBottom: '8px' }}>Popular</span>
                <h5>{lang === 'ms' ? 'Slot Online' : 'Online Slots'}</h5>
                <p>{lang === 'ms' ? 'Ratusan tajuk slot dari penyedia terkemuka dengan jackpot lumayan.' : 'Top video slots with high RTP, free spins, and megaways.'}</p>
              </div>
            </Link>

            <Link href="/kasino-langsung" className="game-cat-card">
              <img src="/img/9sysg0k.jpg" alt="Kasino Langsung xx88" />
              <div className="game-cat-body">
                <span className="badge-tag" style={{ marginBottom: '8px' }}>Live</span>
                <h5>{lang === 'ms' ? 'Kasino Langsung' : 'Live Casino'}</h5>
                <p>{lang === 'ms' ? 'Dealer profesional secara langsung – Baccarat, Roulette, Blackjack.' : 'Stream real dealers in 4K resolution with multiple betting tables.'}</p>
              </div>
            </Link>

            <Link href="/sukan" className="game-cat-card">
              <img src="/img/xlhyoot.jpg" alt="Pertaruhan Sukan xx88" />
              <div className="game-cat-body">
                <span className="badge-tag" style={{ marginBottom: '8px' }}>Sukan</span>
                <h5>{lang === 'ms' ? 'Pertaruhan Sukan' : 'Sportsbook'}</h5>
                <p>{lang === 'ms' ? 'Pasaran sukan global: bola sepak EPL, badminton, bola keranjang, e-sukan.' : 'Competitive live odds for Premier League, Champions League & BWF.'}</p>
              </div>
            </Link>

            <Link href="/permainan-slot" className="game-cat-card">
              <img src="/img/eu15vju8jxu.jpg" alt="Permainan Slot Terkini xx88" />
              <div className="game-cat-body">
                <span className="badge-tag" style={{ marginBottom: '8px' }}>Baru</span>
                <h5>{lang === 'ms' ? 'Permainan Slot' : 'Featured Slots'}</h5>
                <p>{lang === 'ms' ? 'Koleksi slot terkini dengan grafik HD dan mekanik bonus menarik.' : 'Fresh releases with bonus buy features and cascading reels.'}</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* VIP & PROMOS */}
      <section className="vip-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Program <span className="title-accent">VIP &amp; Promosi</span> xx88
            </h2>
            <p>
              {lang === 'ms'
                ? 'Sertai program keahlian xx88 dan nikmati ganjaran eksklusif pada setiap peringkat.'
                : 'Elevate your membership tier for larger cashbacks, higher withdrawal caps, and VIP bonuses.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="vip-grid">
            {/* Silver */}
            <div className="vip-card">
              <div className="tier-name">Ahli Silver</div>
              <div className="tier-bonus">5% Cashback</div>
              <div className="tier-desc">Untuk ahli baharu yang baru memulakan perjalanan</div>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> Bonus Alu-aluan 100%</li>
                <li><i className="fa-solid fa-circle-check"></i> Promosi Mingguan</li>
                <li><i className="fa-solid fa-circle-check"></i> Sokongan Khidmat 24/7</li>
                <li><i className="fa-solid fa-circle-check"></i> Akses Semua 1000+ Game</li>
              </ul>
              <Link
                href="/register"
                className="btn-outline-green"
                style={{ width: '100%', padding: '10px', textAlign: 'center' }}
              >
                {lang === 'ms' ? 'Mulakan Sekarang' : 'Join Silver'}
              </Link>
            </div>

            {/* Gold */}
            <div className="vip-card featured">
              <div className="vip-badge-top">Paling Popular</div>
              <div className="tier-name">Ahli Gold</div>
              <div className="tier-bonus">10% Cashback</div>
              <div className="tier-desc">Untuk pemain aktif yang bermain kerap</div>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> Semua faedah Silver</li>
                <li><i className="fa-solid fa-circle-check"></i> Bonus Reload Harian Lebih Tinggi</li>
                <li><i className="fa-solid fa-circle-check"></i> Pengeluaran Diutamakan (Under 10 Min)</li>
                <li><i className="fa-solid fa-circle-check"></i> Sokongan Keutamaan WhatsApp VIP</li>
              </ul>
              <Link
                href="/register"
                className="btn-primary-green"
                style={{ width: '100%', padding: '11px', textAlign: 'center' }}
              >
                {lang === 'ms' ? 'Daftar Gold' : 'Upgrade to Gold'}
              </Link>
            </div>

            {/* Platinum */}
            <div className="vip-card">
              <div className="tier-name">Ahli Platinum</div>
              <div className="tier-bonus">15% Cashback</div>
              <div className="tier-desc">Tahap tertinggi untuk pemain VIP eksklusif</div>
              <ul>
                <li><i className="fa-solid fa-circle-check"></i> Semua faedah Gold</li>
                <li><i className="fa-solid fa-circle-check"></i> Pengurus Akaun Peribadi 1-on-1</li>
                <li><i className="fa-solid fa-circle-check"></i> Hadiah Hari Jadi RM 1,888</li>
                <li><i className="fa-solid fa-circle-check"></i> Jemputan Acara VIP Eksklusif</li>
              </ul>
              <Link
                href="/register"
                className="btn-outline-green"
                style={{ width: '100%', padding: '10px', textAlign: 'center' }}
              >
                {lang === 'ms' ? 'Capai Platinum' : 'Achieve Platinum'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE BANNERS */}
      <section style={{ background: '#011a15', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <img
              src="/img/urbfe4ryvq3y.jpg"
              alt="xx88 Promosi & Kempen Kasino"
              style={{ width: '100%', borderRadius: '14px', border: '1px solid #145a3c' }}
            />
            <img
              src="/img/h70xml.jpg"
              alt="xx88 Ganjaran Eksklusif"
              style={{ width: '100%', borderRadius: '14px', border: '1px solid #145a3c' }}
            />
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="payment-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Kaedah <span className="title-accent">Pembayaran</span> Malaysia
            </h2>
            <p>
              {lang === 'ms'
                ? 'xx88 menyokong pelbagai kaedah pembayaran popular Malaysia untuk kemudahan deposit dan pengeluaran pantas anda.'
                : 'Fast, secure deposits and automated withdrawals powered by Malaysia’s primary payment gateways.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="payment-badges-grid">
            <div className="payment-badge"><i className="fa-solid fa-money-bill-wave"></i> MYR Ringgit</div>
            <div className="payment-badge"><i className="fa-solid fa-qrcode"></i> DuitNow QR</div>
            <div className="payment-badge"><i className="fa-solid fa-building-columns"></i> FPX Online Banking</div>
            <div className="payment-badge"><i className="fa-solid fa-mobile-screen"></i> Touch &apos;n Go eWallet</div>
            <div className="payment-badge"><i className="fa-solid fa-bolt"></i> Boost eWallet</div>
            <div className="payment-badge"><i className="fa-solid fa-hand-holding-dollar"></i> GrabPay</div>
            <div className="payment-badge"><i className="fa-solid fa-credit-card"></i> Kad Bank Visa / MC</div>
            <div className="payment-badge"><i className="fa-solid fa-wallet"></i> eWallet Malaysia</div>
          </div>

          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.86rem', marginTop: '14px' }}>
            {lang === 'ms'
              ? 'Semua transaksi diproses dengan penyulitan penuh SSL. Pengeluaran diproses dalam masa 5 hingga 15 minit.'
              : 'All transactions are protected by end-to-end encryption. Payouts processed within 5 - 15 minutes.'}
          </p>
        </div>
      </section>

      {/* MOBILE APP SHOWCASE */}
      <section className="app-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Akses <span className="title-accent">Mobile &amp; App</span> xx88
            </h2>
            <p>
              {lang === 'ms'
                ? 'Bawa pengalaman xx88 ke mana sahaja anda pergi dengan aplikasi mudah alih kami yang dioptimumkan.'
                : 'Experience flawless mobile gaming on any smartphone without compromising speed or graphics.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="app-grid">
            <div>
              <img
                src="/img/y7swak.jpg"
                alt="Aplikasi Mudah Alih xx88"
                style={{ width: '100%', borderRadius: '16px', border: '1px solid #145a3c' }}
              />
            </div>

            <div className="app-features-list">
              <div className="app-feature-item">
                <div className="app-feature-icon"><i className="fa-brands fa-android"></i></div>
                <div className="app-feature-text">
                  <h6>Android APK Langsung</h6>
                  <p>{lang === 'ms' ? 'Muat turun fail APK terus dari laman web xx88 tanpa sekatan Google Play Store.' : 'Install the official APK directly from xx88 for rapid updates.'}</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon"><i className="fa-brands fa-apple"></i></div>
                <div className="app-feature-text">
                  <h6>iOS Web App (PWA)</h6>
                  <p>{lang === 'ms' ? 'Pengguna iPhone dan iPad boleh menambah pintasan skrin utama untuk akses sepantas kilat.' : 'Pin xx88 to your iOS home screen for instant one-tap native app feeling.'}</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon"><i className="fa-solid fa-globe"></i></div>
                <div className="app-feature-text">
                  <h6>Akses Melalui Pelayar Web</h6>
                  <p>{lang === 'ms' ? 'Tiada app? Lawati xx88.uno dari mana-mana pelayar untuk pengalaman penuh tanpa muat turun.' : 'Zero installation required. Access all features directly via modern web browsers.'}</p>
                </div>
              </div>

              <div className="app-feature-item">
                <div className="app-feature-icon"><i className="fa-solid fa-gauge-high"></i></div>
                <div className="app-feature-text">
                  <h6>Prestasi Optimum Mobile</h6>
                  <p>{lang === 'ms' ? 'Antara muka responsif untuk skrin sentuh dengan navigasi lancar dan masa muat segera.' : 'Smooth 60fps gameplay with touch gestures and battery-efficient rendering.'}</p>
                </div>
              </div>

              <div className="app-store-btns">
                <Link href="/muat-turun" className="app-store-btn">
                  <i className="fa-brands fa-android"></i>
                  <span>Muat Turun Android</span>
                </Link>
                <Link href="/muat-turun" className="app-store-btn">
                  <i className="fa-brands fa-apple"></i>
                  <span>Muat Turun iOS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="compare-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Perbandingan <span className="title-accent">Cara Bermain</span>
            </h2>
            <p>
              {lang === 'ms'
                ? 'Fahami perbezaan antara cara mengakses dan bermain di xx88 untuk memilih kaedah terbaik bagi anda.'
                : 'Compare mobile app vs browser access to decide what suits your gaming lifestyle best.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="table-responsive">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Ciri-ciri Utama</th>
                  <th><i className="fa-brands fa-android me-1"></i> App Mobile (Android / iOS)</th>
                  <th><i className="fa-solid fa-globe me-1"></i> Pelayar Web (Browser)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Muat Turun Diperlukan</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Ya (APK / PWA)</span></td>
                  <td><span className="cross"><i className="fa-solid fa-xmark me-1"></i> Tidak Perlu</span></td>
                </tr>
                <tr>
                  <td>Notifikasi Promosi &amp; Bonus</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sokong Pemberitahuan Tolak</span></td>
                  <td><span className="cross"><i className="fa-solid fa-xmark me-1"></i> Terhad Dalam Pelayar</span></td>
                </tr>
                <tr>
                  <td>Kelajuan Muatan Permainan</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sangat Pantas (Cache Tempatan)</span></td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Pantas</span></td>
                </tr>
                <tr>
                  <td>Akses Semua 1000+ Permainan</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Penuh</span></td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Penuh</span></td>
                </tr>
                <tr>
                  <td>Deposit &amp; Pengeluaran Pantas</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sokong Penuh DuitNow / FPX</span></td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sokong Penuh DuitNow / FPX</span></td>
                </tr>
                <tr>
                  <td>Kemas Kini Automatik</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Ya (Auto In-App)</span></td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sentiasa Terkini</span></td>
                </tr>
                <tr>
                  <td>Log Masuk Biometrik (Cap Jari)</td>
                  <td><span className="check"><i className="fa-solid fa-check me-1"></i> Sokong Face ID / Cap Jari</span></td>
                  <td><span className="cross"><i className="fa-solid fa-xmark me-1"></i> Bergantung Pada Pelayar</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEO PROSE ARTICLE & SIDEBAR */}
      <section className="prose-section">
        <div className="container">
          <div className="prose-grid">
            <div className="prose-content">
              <h2>xx88 – Platform Hiburan Digital Terbaik untuk Pemain Malaysia</h2>
              <p>
                Dalam dunia hiburan digital yang semakin berkembang pesat, <strong>xx88</strong> telah menjadi nama yang dikenali ramai di kalangan peminat permainan dalam talian di Malaysia. Sejak kehadirannya, platform ini telah menarik perhatian meluas kerana pendekatannya yang mesra pengguna, koleksi permainan yang amat kaya, serta integrasi sistem perbankan tempatan seperti DuitNow QR, FPX, dan Touch &apos;n Go eWallet yang disesuaikan secara khusus untuk rakyat Malaysia.
              </p>
              <p>
                Apa yang membezakan xx88 berbanding platform lain ialah komitmen jitu terhadap kualiti perkhidmatan dan keselamatan data peribadi. Platform ini tidak sekadar menyediakan permainan slot dan kasino langsung – ia membina sebuah ekosistem komprehensif yang menjamin ketelusan pembayaran, kelajuan pemprosesan pengeluaran wang tunai dalam tempoh beberapa minit, dan khidmat pelanggan dwi-bahasa yang sedia membantu 24 jam sehari.
              </p>

              <img
                src="/img/9sysg0k.jpg"
                alt="Kasino Langsung xx88 dengan Dealer Sebenar"
                className="prose-img"
              />

              <h2>Koleksi Permainan yang Luas dan Pelbagai</h2>
              <p>
                Salah satu tonggak kekuatan xx88 terletak pada himpunan permainannya yang melebihi 1,000 tajuk berlesen daripada penyedia perisian bertaraf antarabangsa. Antaranya termasuk <strong>Pragmatic Play</strong>, <strong>JILI Games</strong>, <strong>PG Soft</strong>, <strong>Evolution Gaming</strong>, <strong>Sexy Baccarat</strong>, dan <strong>Spribe Aviator</strong>. Setiap kategori dikemas kini secara berterusan bagi memastikan pemain sentiasa menikmati variasi permainan baharu dengan ciri jackpot progresif.
              </p>
              <p>
                Bagi peminat slot video, tajuk-tajuk seperti <em>Gates of Olympus 1000</em>, <em>Super Ace</em>, <em>Sweet Bonanza</em>, dan <em>Mahjong Ways 2</em> menawarkan mekanik putaran bertingkat (cascading reels), pengganda liar tanpa had, dan kadar Return to Player (RTP) tinggi yang melepasi purata industri.
              </p>
              <p>
                Untuk pemain yang menggemari suasana kasino fizikal bertaraf dunia, lobi Kasino Langsung xx88 menstrim meja <em>Baccarat</em>, <em>Roulette</em>, <em>Blackjack</em>, dan <em>Dragon Tiger</em> dalam definisi tinggi (HD) secara langsung bersama dealer profesional yang ramah dan cekap.
              </p>

              <h2>Sistem Deposit dan Pengeluaran yang Pantas</h2>
              <p>
                xx88 mengutamakan kemudahan transaksi para ahli dengan menyokong pelbagai kaedah pembayaran tempatan. Anda boleh melakukan transaksi deposit pantas bermula dari RM 20 menggunakan <strong>DuitNow QR</strong>, <strong>FPX</strong> melalui bank utama Malaysia (Maybank, CIMB, Public Bank, RHB, Hong Leong), serta dompet elektronik seperti Touch &apos;n Go, Boost, dan GrabPay.
              </p>
              <p>
                Proses pengeluaran (withdrawal) di xx88 direka untuk kecekapan maksimum. Setiap permintaan pengeluaran disahkan dan dikreditkan terus ke dalam akaun bank tempatan ahli dalam purata masa antara 5 hingga 15 minit tanpa sebarang caj tersembunyi.
              </p>

              {/* Privacy Callout */}
              <div className="privacy-note">
                <h6><i className="fa-solid fa-lock me-2"></i>Dasar Privasi &amp; Keselamatan xx88</h6>
                <p>
                  xx88 komited melindungi integriti data peribadi anda. Segala maklumat pendaftaran dan rekod kewangan disimpan rapi di bawah protokol penyulitan SSL 256-bit dan tidak akan dikongsi kepada pihak ketiga tanpa keizinan. Untuk maklumat lanjut, sila rujuk <Link href="/privacy-policy">Dasar Privasi</Link> rasmi kami.
                </p>
              </div>

              <h2>Promosi dan Bonus yang Menguntungkan</h2>
              <p>
                xx88 menghargai kesetiaan ahli dengan memperkenalkan struktur promosi telus. Pemain baharu layak menikmati <strong>Bonus Alu-aluan 100%</strong> pada deposit pertama mereka, disusuli bonus reload harian 20%, dan pulangan tunai (cashback) mingguan sehingga 15% tanpa had siling.
              </p>

              <img
                src="/img/xlhyoot.jpg"
                alt="Pertaruhan Sukan xx88 Pasaran Global"
                className="prose-img"
              />

              <h2>Pengalaman Bermain di Peranti Mudah Alih</h2>
              <p>
                Sama ada anda menggunakan telefon pintar Android mahupun iOS, xx88 memastikan pengalaman navigasi yang lancar. Aplikasi mudah alih kami dioptimumkan untuk penggunaan data yang jimat, kawalan sentuh responsif, dan keselamatan biometrik seperti imbasan cap jari dan Face ID.
              </p>
            </div>

            {/* Prose Sidebar */}
            <div className="prose-sidebar">
              {/* Quick Links Widget */}
              <div className="sidebar-widget">
                <h5 style={{ color: '#ffffff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-link" style={{ color: '#22c55e' }}></i>
                  Pautan Pantas
                </h5>
                <ul style={{ listStyle: 'none' }}>
                  <li style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 0' }}>
                    <Link href="/promosi" style={{ color: '#86efac', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Semua Promosi &amp; Rebat</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </li>
                  <li style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 0' }}>
                    <Link href="/pengeluaran" style={{ color: '#86efac', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Panduan Pengeluaran Pantas</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </li>
                  <li style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 0' }}>
                    <Link href="/muat-turun" style={{ color: '#86efac', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Muat Turun Android &amp; iOS</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </li>
                  <li style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 0' }}>
                    <Link href="/slot" style={{ color: '#86efac', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Koleksi Slot Pragmatic &amp; JILI</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </li>
                  <li style={{ padding: '10px 0' }}>
                    <Link href="/sukan" style={{ color: '#86efac', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span>Pertaruhan Sukan EPL &amp; BWF</span>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bonus Promo Highlight Widget */}
              <div className="sidebar-widget highlight">
                <div className="badge-tag" style={{ marginBottom: '10px' }}>Tawaran Terhad</div>
                <h5 style={{ color: '#ffffff', marginBottom: '8px' }}>Bonus Alu-aluan 100%</h5>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#22c55e', lineHeight: 1, margin: '8px 0' }}>
                  RM 888
                </div>
                <p style={{ color: '#86efac', fontSize: '0.86rem', marginBottom: '18px' }}>
                  Daftar akaun pertama anda dan nikmati penggandaan kredit segera.
                </p>
                <Link
                  href="/register"
                  className="btn-primary-green"
                  style={{ width: '100%', padding: '10px', textAlign: 'center', display: 'block' }}
                >
                  Tuntut Bonus Sekarang
                </Link>
              </div>

              {/* Security Widget */}
              <div className="sidebar-widget">
                <h5 style={{ color: '#ffffff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-shield-halved" style={{ color: '#22c55e' }}></i>
                  Keselamatan Terjamin
                </h5>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  xx88 menggunakan teknologi keselamatan tercanggih untuk memastikan persekitaran taruhan yang adil dan telus bagi setiap ahli.
                </p>
                <Link href="/privacy-policy" style={{ color: '#22c55e', fontSize: '0.85rem', textDecoration: 'underline' }}>
                  Ketahui Dasar Privasi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMING */}
      <section className="rg-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Permainan <span className="title-accent">Bertanggungjawab</span>
            </h2>
            <p>
              {lang === 'ms'
                ? 'xx88 komited untuk mempromosikan budaya bermain yang sihat, selamat dan terkawal di kalangan semua ahli kami.'
                : 'We prioritize player protection and responsible gambling entertainment.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <div className="rg-grid">
            <div className="rg-card">
              <i className="fa-solid fa-piggy-bank"></i>
              <h6>Kawalan Bajet</h6>
              <p>Tetapkan had deposit harian atau mingguan agar perbelanjaan kekal dalam kemampuan anda.</p>
            </div>

            <div className="rg-card">
              <i className="fa-solid fa-clock"></i>
              <h6>Had Masa Bermain</h6>
              <p>Gunakan penggera masa untuk berehat secara berkala dan elakkan bermain terlalu lama.</p>
            </div>

            <div className="rg-card">
              <i className="fa-solid fa-user-shield"></i>
              <h6>Pengurusan Diri</h6>
              <p>Ahli boleh memohon rehat bermain sementara (cool-off) atau pengecualian diri bila-bila masa.</p>
            </div>

            <div className="rg-card">
              <i className="fa-solid fa-person-circle-check"></i>
              <h6>Hanya Dewasa 18+</h6>
              <p>Platform xx88 terhad kepada individu berumur 18 tahun ke atas. Pengesahan umur dijalankan.</p>
            </div>
          </div>

          <div className="rg-alert">
            <p>
              <strong>Peringatan Penting:</strong> Taruhan adalah untuk tujuan hiburan semata-mata dan bukan sebagai instrumen pendapatan. Hanya gunakan wang yang anda bersedia untuk melepaskan. Untuk bantuan, sila layari halaman <Link href="/responsible-gaming" style={{ color: '#22c55e', textDecoration: 'underline' }}>Permainan Bertanggungjawab</Link> kami.
            </p>
          </div>
        </div>
      </section>

      {/* GOOGLE MAPS SECTION */}
      <section className="map-section">
        <div className="container">
          <div className="section-title">
            <h2>
              Kami <span className="title-accent">Hadir</span> untuk Malaysia
            </h2>
            <p>
              {lang === 'ms'
                ? 'xx88 berkhidmat untuk pemain di seluruh Malaysia, dari Kuala Lumpur hingga Sabah & Sarawak.'
                : 'Serving players nationwide across Peninsular and East Malaysia with localized high-speed routing.'}
            </p>
            <div className="divider-green"></div>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=Kuala+Lumpur,Malaysia&hl=ms&z=11&output=embed"
            title="xx88 Malaysia Support Network"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
