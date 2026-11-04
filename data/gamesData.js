/**
 * xx88 - Core Data Store
 * Games, Live Casino, Sports Matches, Providers, VIP Tiers, Promotions & Banking
 */

export const PROVIDERS = [
  { id: 'all', name: 'Semua Provider', count: 1250, icon: 'fa-globe' },
  { id: 'pragmatic', name: 'Pragmatic Play', count: 320, icon: 'fa-crown', badge: 'Top Hot' },
  { id: 'pgsoft', name: 'PG Soft', count: 160, icon: 'fa-mobile-screen', badge: 'Popular' },
  { id: 'jili', name: 'JILI Games', count: 140, icon: 'fa-fire', badge: 'High RTP' },
  { id: 'spribe', name: 'Spribe Aviator', count: 18, icon: 'fa-plane', badge: 'Crash' },
  { id: 'evolution', name: 'Evolution Gaming', count: 110, icon: 'fa-dice', badge: 'Live Casino' },
  { id: 'sexy', name: 'Sexy Baccarat', count: 45, icon: 'fa-gem', badge: 'VIP Live' },
  { id: 'habanero', name: 'Habanero', count: 180, icon: 'fa-pepper-hot', badge: 'Jackpot' }
];

export const SLOTS_DATA = [
  {
    id: 'slot-1',
    name: 'Gates of Olympus 1000',
    provider: 'Pragmatic Play',
    providerId: 'pragmatic',
    rtp: '96.50%',
    volatility: 'Very High',
    jackpot: 'RM 3,890,200',
    theme: 'Greek Mythology',
    icon: '⚡',
    badge: 'Jackpot',
    color: '#3a2105',
    maxWin: '15,000x',
    featured: true
  },
  {
    id: 'slot-2',
    name: 'Super Ace',
    provider: 'JILI Games',
    providerId: 'jili',
    rtp: '97.20%',
    volatility: 'Medium-High',
    jackpot: 'RM 1,450,000',
    theme: 'Cards / Poker',
    icon: '🃏',
    badge: 'Hot',
    color: '#2c1e4a',
    maxWin: '1,500x',
    featured: true
  },
  {
    id: 'slot-3',
    name: 'Mahjong Ways 2',
    provider: 'PG Soft',
    providerId: 'pgsoft',
    rtp: '96.95%',
    volatility: 'Medium',
    jackpot: 'RM 2,120,000',
    theme: 'Oriental Tiles',
    icon: '🀄',
    badge: 'Popular',
    color: '#3b1820',
    maxWin: '100,000x',
    featured: true
  },
  {
    id: 'slot-4',
    name: 'Sweet Bonanza 1000',
    provider: 'Pragmatic Play',
    providerId: 'pragmatic',
    rtp: '96.53%',
    volatility: 'High',
    jackpot: 'RM 4,500,000',
    theme: 'Candy & Fruits',
    icon: '🍬',
    badge: 'Multiplier',
    color: '#3f1a39',
    maxWin: '25,000x',
    featured: true
  },
  {
    id: 'slot-5',
    name: 'Fortune Gems 2',
    provider: 'JILI Games',
    providerId: 'jili',
    rtp: '97.00%',
    volatility: 'Medium',
    jackpot: 'RM 850,000',
    theme: 'Gems & Aztec',
    icon: '💎',
    badge: 'Wheel Bonus',
    color: '#103b30',
    maxWin: '1,000x',
    featured: true
  },
  {
    id: 'slot-6',
    name: 'Aviator (Crash)',
    provider: 'Spribe Aviator',
    providerId: 'spribe',
    rtp: '97.00%',
    volatility: 'Adjustable',
    jackpot: 'RM 5,000,000',
    theme: 'Crash Plane',
    icon: '✈️',
    badge: 'Trending',
    color: '#380a0a',
    maxWin: '1,000,000x',
    featured: true
  },
  {
    id: 'slot-7',
    name: 'Starlight Princess',
    provider: 'Pragmatic Play',
    providerId: 'pragmatic',
    rtp: '96.50%',
    volatility: 'Very High',
    jackpot: 'RM 2,750,000',
    theme: 'Anime Fantasy',
    icon: '👑',
    badge: 'New',
    color: '#1e293b',
    maxWin: '5,000x',
    featured: false
  },
  {
    id: 'slot-8',
    name: 'Boxing King',
    provider: 'JILI Games',
    providerId: 'jili',
    rtp: '96.80%',
    volatility: 'Medium-High',
    jackpot: 'RM 920,000',
    theme: 'Combat Sports',
    icon: '🥊',
    badge: 'Free Spins',
    color: '#1c2438',
    maxWin: '2,000x',
    featured: false
  },
  {
    id: 'slot-9',
    name: 'Wild Bounty Showdown',
    provider: 'PG Soft',
    providerId: 'pgsoft',
    rtp: '96.75%',
    volatility: 'High',
    jackpot: 'RM 1,880,000',
    theme: 'Wild West',
    icon: '🤠',
    badge: 'Hot',
    color: '#331f13',
    maxWin: '5,000x',
    featured: false
  },
  {
    id: 'slot-10',
    name: 'Money Coming',
    provider: 'JILI Games',
    providerId: 'jili',
    rtp: '97.50%',
    volatility: 'Low-Medium',
    jackpot: 'RM 3,200,000',
    theme: 'Classic Cash',
    icon: '💰',
    badge: 'Instant Win',
    color: '#0e3328',
    maxWin: '10,000x',
    featured: false
  },
  {
    id: 'slot-11',
    name: 'Koi Gate',
    provider: 'Habanero',
    providerId: 'habanero',
    rtp: '96.60%',
    volatility: 'Medium',
    jackpot: 'RM 1,600,000',
    theme: 'Lucky Asian Carp',
    icon: '🐟',
    badge: 'Respin',
    color: '#0f323a',
    maxWin: '8,640x',
    featured: false
  },
  {
    id: 'slot-12',
    name: 'Wild Bandito',
    provider: 'PG Soft',
    providerId: 'pgsoft',
    rtp: '96.73%',
    volatility: 'Medium',
    jackpot: 'RM 1,350,000',
    theme: 'Day of the Dead',
    icon: '💀',
    badge: 'Multiplier',
    color: '#2b1b11',
    maxWin: '25,000x',
    featured: false
  }
];

export const LIVE_CASINO_DATA = [
  {
    id: 'lc-1',
    name: 'Lightning Roulette Live',
    provider: 'Evolution Gaming',
    dealer: 'Sophia L.',
    type: 'Roulette',
    minBet: 'RM 2',
    maxBet: 'RM 50,000',
    viewers: 1840,
    status: 'Live',
    lightningMultiplier: '500x',
    icon: '🎡'
  },
  {
    id: 'lc-2',
    name: 'Speed Baccarat 1',
    provider: 'Evolution Gaming',
    dealer: 'Elena R.',
    type: 'Baccarat',
    minBet: 'RM 10',
    maxBet: 'RM 100,000',
    viewers: 2450,
    status: 'Live',
    lightningMultiplier: null,
    icon: '🎴'
  },
  {
    id: 'lc-3',
    name: 'Sexy Baccarat Premier',
    provider: 'Sexy Baccarat',
    dealer: 'Mei Ling & Cherry',
    type: 'Baccarat',
    minBet: 'RM 20',
    maxBet: 'RM 80,000',
    viewers: 3890,
    status: 'Live',
    lightningMultiplier: 'Lucky 6 (12x)',
    icon: '💃'
  },
  {
    id: 'lc-4',
    name: 'Crazy Time Game Show',
    provider: 'Evolution Gaming',
    dealer: 'Marcus J.',
    type: 'Game Show',
    minBet: 'RM 1',
    maxBet: 'RM 25,000',
    viewers: 5120,
    status: 'Live',
    lightningMultiplier: '20,000x',
    icon: '🎪'
  },
  {
    id: 'lc-5',
    name: 'Mega Sic Bo',
    provider: 'Pragmatic Live',
    dealer: 'Chloe T.',
    type: 'Dice / Sic Bo',
    minBet: 'RM 5',
    maxBet: 'RM 30,000',
    viewers: 1320,
    status: 'Live',
    lightningMultiplier: '1000x',
    icon: '🎲'
  },
  {
    id: 'lc-6',
    name: 'VIP Blackjack Diamond',
    provider: 'Evolution Gaming',
    dealer: 'Alexander K.',
    type: 'Blackjack',
    minBet: 'RM 100',
    maxBet: 'RM 200,000',
    viewers: 760,
    status: 'Live',
    lightningMultiplier: null,
    icon: '♠️'
  },
  {
    id: 'lc-7',
    name: 'Dragon Tiger Super',
    provider: 'Sexy Baccarat',
    dealer: 'Kimberly P.',
    type: 'Dragon Tiger',
    minBet: 'RM 10',
    maxBet: 'RM 50,000',
    viewers: 1980,
    status: 'Live',
    lightningMultiplier: 'Tie 8x / Suited Tie 50x',
    icon: '🐉'
  },
  {
    id: 'lc-8',
    name: 'Sweet Bonanza Candyland',
    provider: 'Pragmatic Live',
    dealer: 'Hannah B.',
    type: 'Game Show',
    minBet: 'RM 1',
    maxBet: 'RM 20,000',
    viewers: 2780,
    status: 'Live',
    lightningMultiplier: 'Candy Drop 1,000x',
    icon: '🍭'
  }
];

export const SPORTS_MATCHES = [
  {
    id: 'sp-1',
    sport: 'Bola Sepak',
    sportKey: 'football',
    league: 'English Premier League',
    teamA: 'Arsenal',
    teamB: 'Manchester City',
    score: '1 - 1',
    time: "67' Live 2nd Half",
    isLive: true,
    odds: {
      home: { label: 'Arsenal', value: 2.65 },
      draw: { label: 'Seri (Draw)', value: 3.20 },
      away: { label: 'Man City', value: 2.70 }
    }
  },
  {
    id: 'sp-2',
    sport: 'Bola Sepak',
    sportKey: 'football',
    league: 'UEFA Champions League',
    teamA: 'Real Madrid',
    teamB: 'Bayern Munich',
    score: 'Malam Ini 03:00 AM',
    time: 'Akan Datang',
    isLive: false,
    odds: {
      home: { label: 'Real Madrid', value: 2.10 },
      draw: { label: 'Seri (Draw)', value: 3.45 },
      away: { label: 'Bayern Munich', value: 3.30 }
    }
  },
  {
    id: 'sp-3',
    sport: 'Bola Sepak',
    sportKey: 'football',
    league: 'Liga Super Malaysia',
    teamA: 'Johor Darul Ta\'zim (JDT)',
    teamB: 'Selangor FC',
    score: '2 - 0',
    time: "41' Live 1st Half",
    isLive: true,
    odds: {
      home: { label: 'JDT', value: 1.35 },
      draw: { label: 'Seri (Draw)', value: 4.80 },
      away: { label: 'Selangor FC', value: 8.50 }
    }
  },
  {
    id: 'sp-4',
    sport: 'Badminton',
    sportKey: 'badminton',
    league: 'BWF Malaysia Open (Semi-Final)',
    teamA: 'Lee Zii Jia (MAS)',
    teamB: 'Viktor Axelsen (DEN)',
    score: 'Set 2 [21-19, 14-16]',
    time: 'LIVE Match in Progress',
    isLive: true,
    odds: {
      home: { label: 'Lee Zii Jia', value: 2.25 },
      draw: { label: 'N/A', value: null },
      away: { label: 'Viktor Axelsen', value: 1.62 }
    }
  },
  {
    id: 'sp-5',
    sport: 'Bola Keranjang',
    sportKey: 'basketball',
    league: 'NBA Regular Season',
    teamA: 'Los Angeles Lakers',
    teamB: 'Golden State Warriors',
    score: 'Esok 10:30 AM',
    time: 'Akan Datang',
    isLive: false,
    odds: {
      home: { label: 'LA Lakers', value: 1.88 },
      draw: { label: 'N/A', value: null },
      away: { label: 'GS Warriors', value: 1.92 }
    }
  },
  {
    id: 'sp-6',
    sport: 'E-Sukan',
    sportKey: 'esports',
    league: 'MPL Malaysia Season 14',
    teamA: 'HomeBois',
    teamB: 'Todak',
    score: 'Game 3 [1 - 1]',
    time: 'LIVE Bo5 Series',
    isLive: true,
    odds: {
      home: { label: 'HomeBois', value: 1.75 },
      draw: { label: 'N/A', value: null },
      away: { label: 'Todak', value: 2.05 }
    }
  }
];

export const PROMOTIONS_DATA = [
  {
    id: 'p-welcome',
    title: 'Bonus Alu-aluan 100% Slot & Kasino',
    category: 'welcome',
    badge: 'Ahli Baharu',
    bonus: 'Sehingga RM 888',
    turnover: '15x Turnover',
    desc: 'Gandakan deposit pertama anda serta-merta! Sesuai untuk semua pemain baharu yang ingin meneroka ribuan permainan slot dan kasino langsung di xx88.',
    minDeposit: 'RM 30',
    validUntil: 'Sepanjang Tahun 2026',
    icon: 'fa-gift',
    featured: true
  },
  {
    id: 'p-cashback',
    title: 'Cashback Mingguan Tanpa Had Sehingga 15%',
    category: 'cashback',
    badge: 'Automatik Setiap Isnin',
    bonus: '5% - 15% Rebate',
    turnover: '1x Turnover Sahaja',
    desc: 'Kalah bukan pengakhiran di xx88. Dapatkan kembali peratusan daripada jumlah kerugian bersih mingguan anda terus ke dalam dompet utama.',
    minDeposit: 'RM 50',
    validUntil: 'Kitaran Mingguan',
    icon: 'fa-rotate-left',
    featured: true
  },
  {
    id: 'p-daily-reload',
    title: 'Bonus Reload Harian 20% Tanpa Had',
    category: 'reload',
    badge: 'Harian',
    bonus: 'Sehingga RM 300 / Hari',
    turnover: '8x Turnover',
    desc: 'Tambah nilai akaun anda setiap hari dan nikmati tambahan kredit 20% bagi setiap transaksi deposit pertama setiap hari.',
    minDeposit: 'RM 50',
    validUntil: 'Setiap Hari',
    icon: 'fa-calendar-check',
    featured: false
  },
  {
    id: 'p-duitnow-instant',
    title: 'Ganjaran Tambahan 3% Deposit DuitNow / TNG',
    category: 'banking',
    badge: 'E-Wallet Eksklusif',
    bonus: 'Extra 3% Setiap Deposit',
    turnover: '3x Turnover',
    desc: 'Lakukan deposit melalui DuitNow QR, FPX atau Touch n Go eWallet untuk menerima 3% rebat tunai ekstra tanpa had kekerapan.',
    minDeposit: 'RM 20',
    validUntil: 'Disember 2026',
    icon: 'fa-qrcode',
    featured: false
  },
  {
    id: 'p-vip-birthday',
    title: 'Bonus Hari Jadi Ahli VIP',
    category: 'vip',
    badge: 'VIP Eksklusif',
    bonus: 'Sehingga RM 1,888 Hadiah Tunai',
    turnover: 'Tiada Had Turnover',
    desc: 'Sambut hari istimewa anda bersama xx88. Tuntut angpao tunai percuma mengikut tahap keahlian VIP anda.',
    minDeposit: 'Ahli Aktif 30 Hari',
    validUntil: 'Bulan Hari Jadi',
    icon: 'fa-cake-candles',
    featured: false
  }
];

export const VIP_TIERS = [
  {
    tier: 'Silver',
    level: 1,
    cashback: '5%',
    depositReq: 'RM 0 (Pendaftaran)',
    perks: [
      'Bonus Alu-aluan 100%',
      'Cashback Mingguan 5%',
      'Sokongan Pelanggan 24/7',
      'Akses Penuh 1000+ Permainan',
      'Pengeluaran Pantas Standard'
    ],
    isFeatured: false
  },
  {
    tier: 'Gold',
    level: 2,
    cashback: '10%',
    depositReq: 'RM 10,000 / Bulan',
    perks: [
      'Semua Faedah Silver',
      'Cashback Mingguan 10%',
      'Pengeluaran Diutamakan (Under 10 Minit)',
      'Bonus Reload Harian Lebih Tinggi',
      'Talian Sokongan Khusus VIP WhatsApp'
    ],
    isFeatured: true
  },
  {
    tier: 'Platinum',
    level: 3,
    cashback: '15%',
    depositReq: 'RM 50,000 / Bulan',
    perks: [
      'Semua Faedah Gold',
      'Cashback Mingguan Maksimum 15%',
      'Pengurus Akaun Peribadi 1-on-1',
      'Had Pengeluaran Tanpa Had Harian',
      'Hadiah Hari Jadi RM 1,888 & Jemputan Eksklusif'
    ],
    isFeatured: false
  }
];

export const PAYMENT_METHODS = [
  { name: 'DuitNow QR', type: 'Instant QR Pay', time: '1 - 3 minit', fee: 'Percuma 0%', icon: 'fa-qrcode' },
  { name: 'FPX Online Banking', type: 'Maybank, CIMB, Public Bank, RHB', time: '1 - 3 minit', fee: 'Percuma 0%', icon: 'fa-building-columns' },
  { name: 'Touch \'n Go eWallet', type: 'E-Wallet Malaysia', time: 'Serta-merta', fee: 'Percuma 0%', icon: 'fa-mobile-screen' },
  { name: 'Boost eWallet', type: 'E-Wallet', time: 'Serta-merta', fee: 'Percuma 0%', icon: 'fa-bolt' },
  { name: 'GrabPay', type: 'E-Wallet', time: 'Serta-merta', fee: 'Percuma 0%', icon: 'fa-hand-holding-dollar' },
  { name: 'Pindahan Bank Tempatan', type: 'Semua Bank Malaysia (MYR)', time: '5 - 15 minit', fee: 'Percuma 0%', icon: 'fa-money-bill-transfer' }
];

export const FAQS = [
  {
    q: 'Apakah itu xx88 dan adakah ia selamat untuk pemain Malaysia?',
    a: 'xx88 ialah platform taruhan online dipercayai nombor 1 di Malaysia yang menawarkan ratusan permainan slot, kasino langsung, dan pertaruhan sukan. Platform ini dilindungi dengan penyulitan gred keselamatan SSL 256-bit dan menyokong transaksi mata wang rasmi Ringgit Malaysia (MYR).'
  },
  {
    q: 'Berapakah jumlah deposit minimum dan pengeluaran minimum di xx88?',
    a: 'Jumlah deposit minimum bermula serendah RM 20 sahaja bergantung kepada kaedah pembayaran yang dipilih. Untuk pengeluaran (withdrawal), jumlah minimum ialah RM 50 dan diproses terus ke akaun bank tempatan anda dalam tempoh 5 hingga 15 minit.'
  },
  {
    q: 'Apakah kaedah pembayaran yang disokong oleh xx88?',
    a: 'xx88 menyokong hampir semua kaedah pembayaran utama di Malaysia termasuk DuitNow QR, FPX Perbankan Internet (Maybank2u, CIMB Clicks, Public Bank, RHB Now, Hong Leong, dll), Touch \'n Go eWallet, Boost, GrabPay, dan pindahan bank manual.'
  },
  {
    q: 'Bolehkah saya mencuba permainan slot secara percuma sebelum mendepositkan wang?',
    a: 'Ya, tentu sekali! xx88 menyediakan fungsi Demo Slot Percuma untuk pelbagai permainan popular seperti Super Ace, Gates of Olympus, Fortune Gems dan Mahjong Ways. Anda boleh menguji ciri dan RTP sebelum bermain dengan wang sebenar.'
  },
  {
    q: 'Bagaimanakah cara untuk memuat turun aplikasi xx88 pada peranti Android atau iOS?',
    a: 'Anda boleh melayari halaman Muat Turun di laman web kami untuk memuat turun fail APK Android rasmi atau menambah pintasan Web App (PWA) pada skrin utama iPhone/iPad anda tanpa perlu melalui app store.'
  }
];
