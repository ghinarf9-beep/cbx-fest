import React, { useState, useEffect } from 'react';
import logoCbx from './assets/logo-cbx.png';
import imgCewek from './assets/elemen_cewek_1.png';
import imgCowok1 from './assets/elemen_cowok_1.png';
import imgCowok2 from './assets/elemen_cowok_2.png';
import imgCowok3 from './assets/elemen_cowok_3.png';
import imgLayanganPot from './assets/elemen_layangan_dan_pot.png';
import imgPintuKrucut from './assets/elemen_pintu_dan_krucut.png';

function App() {
  // State untuk mengatur halaman aktif (bisa 'home', 'about', 'lineup')
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi pembantu untuk pindah halaman sekaligus scroll ke atas otomatis
  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Logic Countdown Timer
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-08-17") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearTimeout(timer);
  });

  return (
<div className="w-full min-h-screen bg-cbxKuning font-sans text-cbxHitam selection:bg-cbxOren selection:text-white overflow-x-hidden">      
      {/* 1. STIKER BERJALAN (MARQUEE EFFECT) */}
      <div className="bg-cbxHitam text-cbxHijau font-black py-2 uppercase tracking-widest text-xs sm:text-sm flex gap-8 whitespace-nowrap overflow-hidden border-b-4 border-cbxHitam">
        <div className="animate-marquee flex gap-12 shrink-0">
          <span>⚡ LIVE MUSIC PERFORMANCE ⚡</span>
          <span>🎪 OPEN REGISTRATION FOR TENANT UMKM 🎪</span>
          <span>🎨 GRAFFITI EXHIBITION 🎨</span>
          <span>🔥 AGUSTUS 2026 IN JAKARTA BARAT 🔥</span>
        </div>
        <div className="animate-marquee flex gap-12 shrink-0" aria-hidden="true">
          <span>⚡ LIVE MUSIC PERFORMANCE ⚡</span>
          <span>🎪 OPEN REGISTRATION FOR TENANT UMKM 🎪</span>
          <span>🎨 GRAFFITI EXHIBITION 🎨</span>
          <span>🔥 AGUSTUS 2026 IN JAKARTA BARAT 🔥</span>
        </div>
      </div>

      {/* 2. DYNAMIC NAVBAR */}
      <nav className="bg-white border-b-4 border-cbxHitam sticky top-0 z-50 px-6 py-3 shadow-[4px_4px_0px_0px_#0B0B0B]">
  <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
    <button 
      onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} 
      className="flex items-center gap-2 bg-cbxOren text-white px-3 py-1.5 border-2 border-cbxHitam rounded-xl -rotate-2 shadow-[2px_2px_0px_0px_#0B0B0B]"
    >
      <img src={logoCbx} alt="CBX Fest Logo" className="h-8 w-auto object-contain invert brightness-0" />
      <span className="font-black text-xl tracking-tighter">CBXFEST</span>
    </button>

    {/* Tombol Hamburger (Hanya muncul di HP) */}
<button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {/* Ini kodingan hamburger icon kamu */}
  <div className="w-6 h-1 bg-cbxHitam mb-1"></div>
  <div className="w-6 h-1 bg-cbxHitam mb-1"></div>
  <div className="w-6 h-1 bg-cbxHitam"></div>
</button>

    {/* Menu Desktop */}
    <div className="hidden md:flex items-center gap-6 font-black text-xs uppercase tracking-wider">
      <button onClick={() => navigateTo('about')} className="hover:text-cbxOren">About</button>
      <button onClick={() => navigateTo('lineup')} className="hover:text-cbxBiru">Line-Up</button>
      <a href="#tenant" className="bg-cbxHijau px-4 py-2 border-2 border-cbxHitam rounded-lg">Daftar Tenant!</a>
    </div>
  </div>

  {/* Menu Dropdown HP */}
  {isMenuOpen && (
    <div className="md:hidden flex flex-col gap-4 py-6 border-t-2 border-cbxHitam mt-3 text-center font-black uppercase">
      <button onClick={() => { navigateTo('about'); setIsMenuOpen(false); }}>About</button>
      <button onClick={() => { navigateTo('lineup'); setIsMenuOpen(false); }}>Line-Up</button>
      <a href="#tenant" onClick={() => setIsMenuOpen(false)} className="bg-cbxHijau w-40 mx-auto py-2 border-2 border-cbxHitam rounded-lg">Daftar Tenant!</a>
    </div>
  )}
</nav>

      {/* RENDER HALAMAN BERDASARKAN STATE */}
      
      {/* === HALAMAN HOME === */}
      {currentPage === 'home' && (
        <>
          {/* HERO EXPLOSION SECTION */}
<header className="fade-in relative py-20 px-6 text-center overflow-hidden border-b-4 border-cbxHitam w-full max-w-[100vw]">  <div className="absolute top-10 left-[-20px] bg-cbxBiru text-white font-black px-6 py-2 border-4 border-cbxHitam rounded-2xl uppercase -rotate-12 shadow-[4px_4px_0px_0px_#0B0B0B] hidden lg:block text-sm">
    #BERPESTARIADARIKAMPUNG
  </div>
  <div className="absolute bottom-12 right-[-20px] bg-cbxOren text-white font-black px-6 py-2 border-4 border-cbxHitam rounded-2xl uppercase rotate-12 shadow-[4px_4px_0px_0px_#0B0B0B] hidden lg:block text-sm">
    FESTIVALNYA WONG PUSAT & KAMPUNG
  </div>

  <div className="max-w-4xl mx-auto">
    <div className="inline-block bg-white p-6 border-4 border-cbxHitam rounded-[32px] shadow-[8px_8px_0px_0px_#0B0B0B] mb-8 rotate-3 hover:rotate-0 transition-transform duration-300">
      <img src={logoCbx} alt="CBX Logo Besar" className="h-32 sm:h-44 w-auto object-contain" />
    </div>

    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
      SAATNYA KAMPUNG <br />
      <span className="bg-cbxBiru text-white px-6 py-2 inline-block my-3 border-4 border-cbxHitam rounded-3xl shadow-[6px_6px_0px_0px_#0B0B0B] -rotate-1">
        PUNYA PANGGUNG
      </span>
    </h1>
    
    {/* --- SISIPAN COUNTDOWN --- */}
<div className="flex gap-4 justify-center my-8 font-black text-lg sm:text-2xl uppercase">
  <div className="bg-white border-4 border-cbxHitam p-4 rounded-2xl shadow-[6px_6px_0px_0px_#0B0B0B] rotate-[-2deg]">
    {timeLeft.days || 0} <span className="block text-xs font-bold text-cbxHitam/60">HARI</span>
  </div>
  <div className="bg-white border-4 border-cbxHitam p-4 rounded-2xl shadow-[6px_6px_0px_0px_#0B0B0B]">
    {timeLeft.hours || 0} <span className="block text-xs font-bold text-cbxHitam/60">JAM</span>
  </div>
  <div className="bg-white border-4 border-cbxHitam p-4 rounded-2xl shadow-[6px_6px_0px_0px_#0B0B0B] rotate-[2deg]">
    {timeLeft.minutes || 0} <span className="block text-xs font-bold text-cbxHitam/60">MENIT</span>
  </div>
</div>

    {/* BAGIAN INFO ACARA BARU */}
    <div className="bg-cbxKuning border-4 border-cbxHitam rounded-2xl p-6 mb-10 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_#0B0B0B]">
      <p className="text-xl sm:text-2xl font-black uppercase tracking-tight">
        📅 17 Agustus 2026 | 07.00 - 23.00 WIB
      </p>
      <p className="text-lg sm:text-xl font-bold mt-2">
        📍 Jl. Keadilan Raya, Jakarta Barat
      </p>
    </div>

    <p className="text-lg sm:text-xl font-bold max-w-2xl mx-auto mb-10 text-cbxHitam/80 leading-snug">
      Bukan sekadar festival musik biasa! Ini pergerakan masif seni grafiti, hentakan distorsi lokal, dan pestanya para pelaku UMKM kampung halaman.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
      <a 
        href="#tenant" 
        className="w-full bg-cbxHijau border-4 border-cbxHitam px-8 py-4 font-black text-xl uppercase rounded-2xl shadow-[6px_6px_0px_0px_#0B0B0B] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center animate-bounce"
      >
        🎪 AMBIL SLOT TENANTMU!
      </a>
      <button 
        onClick={() => navigateTo('about')}
        className="w-full bg-white border-4 border-cbxHitam px-8 py-4 font-black text-base uppercase rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all text-center cursor-pointer"
      >
        📄 Jelajahi Cerita CBX
      </button>
    </div>
  </div>
</header>

          {/* TEASER LINE-UP */}
          <section className="bg-cbxBiru py-16 px-6 border-b-4 border-cbxHitam text-center text-white">
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 drop-shadow-[3px_3px_0px_rgba(11,11,11,1)]">Bakal Meledak Di Panggung!</h2>
            <button 
              onClick={() => navigateTo('lineup')}
              className="bg-cbxOren text-white font-black uppercase px-6 py-3 border-4 border-cbxHitam rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
            >
              🔥 LIHAT LINE-UP LENGKAP
            </button>
          </section>

          {/* HERO CALL TO ACTION (UMKM / TENANT FOCUS) */}
          <section id="tenant" className="max-w-5xl mx-auto py-20 px-6">
            <div className="bg-white border-4 border-cbxHitam rounded-[36px] p-8 sm:p-12 shadow-[12px_12px_0px_0px_#0B0B0B] text-center relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-cbxOren text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md rotate-6 border-2 border-cbxHitam">
                SLOT TERBATAS!
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4">JANGAN CUMA JADI PENONTON!</h2>
              <p className="text-lg font-bold text-slate-700 max-w-xl mx-auto mb-8">
                Kesempatan emas buat warung, kedai kopi, industri kreatif rumahan, dan UMKM sekitar buat pamer produk di hadapan ribuan audiens festival musik!
              </p>
              <div className="bg-cbxKuning border-2 border-cbxHitam rounded-2xl p-4 mb-8 inline-block text-left font-bold text-sm sm:text-base space-y-1 shadow-[4px_4px_0px_0px_#0B0B0B]">
                <p>✅ Fasilitas Lapak Premium + Listrik Aman</p>
                <p>✅ Promosi Brand di Media Sosial CBX Fest</p>
                <p>✅ Tiket Masuk Eksklusif untuk Crew Tenant</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://forms.gle/9YEagwiiyunijxHj8" className="bg-cbxOren text-white font-black uppercase text-base tracking-wider px-8 py-4 rounded-xl border-2 border-cbxHitam shadow-[4px_4px_0px_0px_#0B0B0B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                  🎪 Isi Formulir Tenant (Google Form)
                </a>
                <a href="https://wa.me/6285135595053" target="_blank" rel="noreferrer" className="bg-white text-cbxHitam font-black uppercase text-base tracking-wider px-8 py-4 rounded-xl border-2 border-cbxHitam shadow-[4px_4px_0px_0px_#0B0B0B] hover:bg-cbxHitam hover:text-white transition-colors">
                  💬 Tanya Admin via WhatsApp
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* === HALAMAN ABOUT === */}
      {currentPage === 'about' && (
        <main className="fade-in max-w-4xl mx-auto py-16 px-6">
          <div className="bg-white border-4 border-cbxHitam rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#0B0B0B] relative">
            <span className="absolute -top-5 -right-2 bg-cbxBiru text-white font-black px-4 py-1.5 border-2 border-cbxHitam rounded-lg rotate-6 text-xs uppercase">
              #ABOUT US
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              APA ITU <span className="bg-cbxOren text-white px-4 py-1 inline-block -rotate-1 border-2 border-cbxHitam rounded-xl shadow-[3px_3px_0px_0px_#0B0B0B]">CBX FEST?</span>
            </h2>
            <div className="space-y-6 font-bold text-base sm:text-lg leading-relaxed text-slate-800">
              <p>
                <span className="text-cbxOren font-black">CBX (Collaboration Build Xpression) Festival</span> lahir dari sebuah kegelisahan sederhana: ruang berekspresi yang otentik di era modern jakarta semakin hari semakin terpinggirkan.
              </p>
              <div className="bg-cbxKuning border-2 border-cbxHitam p-6 rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B] rotate-1 my-6 text-cbxHitam">
                <h4 className="font-black uppercase text-xl mb-2">🎯 MISI UTAMA KITA</h4>
                <p>Menjadi wadah kolektif yang menjembatani talenta kreatif lokal, musisi independen, komunitas jalanan, dan pelaku UMKM akar rumput untuk saling berkolaborasi, bertukar energi, hingga menciptakan ekosistem industri kreatif yang mandiri.</p>
              </div>
              <p>
                Di sini, tembok jalanan disulap jadi galeri grafiti hidup, riuhnya obrolan warung kopi bersatu dengan dentuman distorsi panggung, dan semua orang—baik dari pusat kota maupun pinggiran kampung—melebur menjadi satu tanpa sekat.
              </p>
            </div>
            
            <button 
              onClick={() => navigateTo('home')}
              className="mt-10 bg-cbxHitam text-white font-black uppercase px-6 py-3 rounded-xl border-2 border-cbxHitam hover:bg-cbxOren transition-colors cursor-pointer"
            >
              ⬅️ Kembali Ke Beranda
            </button>
          </div>
        </main>
      )}

      {/* === HALAMAN LINE-UP === */}
{currentPage === 'lineup' && (
  <main className="fade-in max-w-4xl mx-auto py-16 px-6 text-center">
    <div className="bg-cbxBiru border-4 border-cbxHitam rounded-[36px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#0B0B0B] text-white">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-2">OFFICIAL LINE-UP</h2>
      <p className="font-bold text-lg mb-10 text-white/80">17 Agustus 2026 | Jakarta Barat</p>

      {/* RUNDOWN LIST */}
      <div className="bg-white text-cbxHitam rounded-2xl p-6 border-4 border-cbxHitam mb-10 shadow-[4px_4px_0px_0px_#0B0B0B] text-left">
        <h3 className="font-black text-2xl uppercase mb-4 border-b-2 border-cbxHitam pb-2">Jadwal Tampil</h3>
        <div className="space-y-4 font-bold">
          <div className="flex justify-between border-b border-dashed border-cbxHitam pb-2">
            <span>19.00 - 19.45</span>
            <span className="font-black text-cbxOren">THE ADAMS</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-cbxHitam pb-2">
            <span>20.00 - 20.45</span>
            <span className="font-black text-cbxBiru">REALITY CLUB</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-cbxHitam pb-2">
            <span>21.00 - 21.45</span>
            <span className="font-black text-cbxHijau">HINDIA</span>
          </div>
          <div className="flex justify-between border-b border-dashed border-cbxHitam pb-2">
            <span>22.00 - 22.45</span>
            <span className="font-black text-cbxHitam">.FEAST</span>
          </div>
          <div className="flex justify-between pt-2">
            <span>23.00</span>
            <span className="font-black italic">CLOSING CEREMONY</span>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigateTo('home')}
        className="bg-cbxOren text-white font-black uppercase px-8 py-4 rounded-xl border-4 border-cbxHitam shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
      >
        ⬅️ Kembali Ke Beranda
      </button>
    </div>
  </main>
)}

    <section className="py-20 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-black uppercase mb-12 -rotate-2">
      <span className="bg-cbxHitam text-cbxKuning px-4 py-2">STREET VIBE</span>
    </h2>

    {/* Susunan Foto & Elemen */}
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-10">
  {[imgCewek, imgCowok1, imgCowok2, imgCowok3].map((img, i) => (
    <div key={i} className="group relative w-32 h-32 md:w-40 md:h-40 transition-transform duration-500 hover:-translate-y-4">
      {/* Background Frame (Stiker) */}
      <div className="absolute inset-0 bg-cbxOren rotate-3 rounded-2xl border-2 border-cbxHitam"></div>
      
      {/* Gambar Utama */}
      <img 
        src={img} 
        className="relative w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-300" 
        alt={`Person ${i + 1}`} 
      />
    </div>
  ))}
</div>

    {/* Elemen Dekoratif Pintu/Layangan */}
    <div className="flex justify-center gap-12 mt-16 opacity-90">
      <img src={imgLayanganPot} className="w-40 h-auto hover:rotate-12 transition-transform duration-300" alt="decor" />
      <img src={imgPintuKrucut} className="w-40 h-auto hover:-rotate-12 transition-transform duration-300" alt="decor" />
    </div>
  </div>
</section>

      {/* 6. OUTRO & FOOTER */}
      <footer className="bg-cbxHitam text-white py-12 px-6 border-t-4 border-cbxHitam">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 border border-white rounded-lg">
              <img src={logoCbx} alt="CBX Fest Logo Footer" className="h-6 w-auto object-contain" />
            </div>
            <span className="font-black text-xl tracking-tight text-cbxKuning">CBX FEST 2026</span>
          </div>
          <p className="text-xs text-slate-400 font-bold text-center md:text-right">
            &copy; 2026 CBX FEST. Powered with 🔥 by Ghina. All Rights Reserved.
          </p>
        </div>
      </footer>

    <style>
  {`
    .fade-in {
      animation: fadeIn 0.4s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}
</style>

    </div>
  );
}

export default App;