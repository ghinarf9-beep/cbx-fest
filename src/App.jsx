import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Proposal from './pages/proposal';
import logoCbx from './assets/logo-cbx.png';
import imgCewek from './assets/elemen_cewek_1.png';
import imgCowok1 from './assets/elemen_cowok_1.png';
import imgCowok2 from './assets/elemen_cowok_2.png';
import imgCowok3 from './assets/elemen_cowok_3.png';
import imgLayanganPot from './assets/elemen_layangan_dan_pot.png';
import imgPintuKrucut from './assets/elemen_pintu_dan_krucut.png';
import blackHorsesImg from './assets/Black Horses.png';
import westwewImg from './assets/Westwew.png';

function App() {
  // State untuk mengatur halaman aktif (bisa 'home', 'about', 'lineup')
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi pembantu untuk pindah halaman sekaligus scroll ke atas otomatis
 const navigateTo = (page, anchor = null) => {
  setCurrentPage(page);
  
  // Kasih jeda sedikit (100ms) biar React sempat render halaman 'home' dulu
  // sebelum dia nyari ID 'tenant' untuk di-scroll
  setTimeout(() => {
    if (anchor) {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, 100);
  
  setIsMenuOpen(false);
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
<div className="w-full min-h-screen bg-gradient-to-br from-cbxOren via-white to-cbxHijau font-sans text-cbxHitam">
      <div className="bg-cbxHitam text-cbxHijau font-black py-2 uppercase tracking-widest text-xs sm:text-sm flex gap-8 whitespace-nowrap overflow-hidden border-b-4 border-cbxHitam">
        <div className="animate-marquee flex gap-12 shrink-0">
          <span>⚡ LIVE MUSIC PERFORMANCE ⚡</span>
          <span>🎪 OPEN REGISTRATION FOR TENANT UMKM 🎪</span>
          <span>🛹 COMMUNITY ACTIVITY 🛹</span>
          <span>🔥 AGUSTUS 2026 IN JAKARTA BARAT 🔥</span>
        </div>
        <div className="animate-marquee flex gap-12 shrink-0" aria-hidden="true">
          <span>⚡ LIVE MUSIC PERFORMANCE ⚡</span>
          <span>🎪 OPEN REGISTRATION FOR TENANT UMKM 🎪</span>
          <span>🛹 COMMUNITY ACTIVITY 🛹</span>
          <span>🔥 AGUSTUS 2026 IN JAKARTA BARAT 🔥</span>
        </div>
      </div>

      {/* 2. DYNAMIC NAVBAR */}
     <nav className="bg-white border-b-4 border-cbxHitam sticky top-0 z-50 py-3 shadow-[4px_4px_0px_0px_#0B0B0B]">
  {/* Kita hilangkan max-w-6xl biar dia full lebar layar, terus atur px-nya */}
  <div className="w-full px-2 sm:px-4 flex justify-between items-center">
    
    {/* KIRI: Logo & CBXFEST (Mepet Kiri) */}
    <div className="flex items-center gap-2">
      <img src={logoCbx} alt="CBX Logo" className="h-12 w-auto object-contain" />
      <button 
        onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} 
        className="bg-cbxOren text-white px-4 py-2 border-2 border-cbxHitam rounded-xl -rotate-2 shadow-[2px_2px_0px_0px_#0B0B0B] font-black text-lg tracking-tighter"
      >
        CBXFEST
      </button>
    </div>

    {/* KANAN: Menu Desktop (Mepet Kanan) */}
    <div className="hidden md:flex items-center gap-6 font-black text-sm uppercase tracking-wider pr-2">
      <button onClick={() => navigateTo('about')} className="hover:text-cbxOren transition-colors">About</button>
      <button onClick={() => navigateTo('lineup')} className="hover:text-cbxBiru transition-colors">Line-Up</button>
      {/* Tombol Proposal Baru */}
      <button onClick={() => navigateTo('proposal')} className="hover:text-cbxKuning transition-colors">Proposal</button>
      <button 
        onClick={() => navigateTo('home', 'tenant')} 
        className="bg-cbxHijau px-5 py-2 border-2 border-cbxHitam rounded-lg shadow-[3px_3px_0px_0px_#0B0B0B] hover:bg-opacity-90 transition-all"
      >
        Daftar Tenant!
      </button>
    </div>

    {/* Hamburger Mobile */}
    <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <div className="w-6 h-1 bg-cbxHitam mb-1"></div>
      <div className="w-6 h-1 bg-cbxHitam mb-1"></div>
      <div className="w-6 h-1 bg-cbxHitam"></div>
    </button>
  </div>
  
  {/* Dropdown Mobile */}
  {isMenuOpen && (
    <div className="md:hidden flex flex-col gap-4 py-6 border-t-2 border-cbxHitam mt-3 text-center font-black uppercase">
      <button onClick={() => { navigateTo('about'); setIsMenuOpen(false); }}>About</button>
      <button onClick={() => { navigateTo('lineup'); setIsMenuOpen(false); }}>Line-Up</button>
      {/* Tombol Proposal Baru di Mobile */}
      <button onClick={() => { navigateTo('proposal'); setIsMenuOpen(false); }}>Proposal</button>
      <button onClick={() => navigateTo('home', 'tenant')} className="bg-cbxHijau w-40 mx-auto py-2 border-2 border-cbxHitam rounded-lg font-black">Daftar Tenant!</button>
    </div>
  )}
</nav>

      {/* RENDER HALAMAN BERDASARKAN STATE */}
      
      {/* RENDER HALAMAN BERDASARKAN STATE */}

{/* === HALAMAN PROPOSAL (TAMBAHAN) === */}
{currentPage === 'proposal' && (
  <div className="p-10 max-w-5xl mx-auto min-h-screen bg-[#FDFBF7]">
    <h1 className="text-3xl font-black mb-6 text-[#0B0B0B]">PROPOSAL CBX FEST 2026</h1>
    <div className="w-full h-[800px] border-4 border-[#0B0B0B] bg-gray-200">
      <object data="/proposal.pdf" type="application/pdf" width="100%" height="100%">
        <p>Browser kamu tidak bisa menampilkan PDF. <a href="/proposal.pdf" target="_blank" className="text-blue-600 underline">Klik di sini untuk download PDF</a></p>
      </object>
    </div>
    <button onClick={() => navigateTo('home')} className="mt-6 bg-[#FFB763] px-6 py-2 font-bold border-2 border-[#0B0B0B] hover:bg-[#ffaa40]">
      KEMBALI KE BERANDA
    </button>
  </div>
)}

{/* === HALAMAN HOME === */}
{currentPage === 'home' && (
        <>
          {/* HERO EXPLOSION SECTION */}
<header className="fade-in relative py-20 px-6 text-center overflow-hidden border-b-4 border-cbxHitam w-full max-w-[100vw]">
  
  {/* Dekorasi lainnya tetap di bawahnya */}
  <div className="absolute top-10 left-[-20px] bg-cbxKuning text-white font-black px-6 py-2 border-4 border-cbxHitam rounded-2xl uppercase -rotate-12 shadow-[4px_4px_0px_0px_#0B0B0B] hidden lg:block text-sm">
    #BERPESTARIADARIKAMPUNG
  </div>
  
  <div className="absolute bottom-12 right-[-20px] bg-cbxHijau text-white font-cbxHitam px-6 py-2 border-4 border-cbxHitam rounded-2xl uppercase rotate-12 shadow-[4px_4px_0px_0px_#0B0B0B] hidden lg:block text-sm">
    FESTIVALNYA WONG PUSAT & KAMPUNG
  </div>

  <div className="max-w-4xl mx-auto">
{/* LOGO TANPA BINGKAI, TAPI BISA GOYANG */}
<div className="relative inline-block mb-4 transition-transform duration-300 hover:-rotate-3 hover:scale-105 cursor-pointer">
  <img 
    src={logoCbx} 
    alt="CBX Fest Logo" 
    className="h-50 sm:h-70 w-auto object-contain drop-shadow-[8px_8px_0px_rgba(11,11,11,1)]" 
  />
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
          <section className="bg-cbxOren py-16 px-6 border-b-4 border-cbxHitam text-center text-white">
            <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8 drop-shadow-[3px_3px_0px_rgba(11,11,11,1)]">Bakal Meledak Di Panggung!</h2>
            <button 
              onClick={() => navigateTo('lineup')}
              className="bg-cbxKuning text-white font-black uppercase px-6 py-3 border-4 border-cbxHitam rounded-xl shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-pointer"
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
              <div className="bg-cbxOren border-2 border-cbxHitam rounded-2xl p-4 mb-8 inline-block text-left font-bold text-sm sm:text-base space-y-1 shadow-[4px_4px_0px_0px_#0B0B0B]">
                <p>✅ Fasilitas Lapak Premium + Listrik Aman</p>
                <p>✅ Promosi Brand di Media Sosial CBX Fest</p>
                <p>✅ Tiket Masuk Eksklusif untuk Crew Tenant</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="https://forms.gle/9YEagwiiyunijxHj8" className="bg-cbxHijau text-white font-black uppercase text-base tracking-wider px-8 py-4 rounded-xl border-2 border-cbxHitam shadow-[4px_4px_0px_0px_#0B0B0B] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
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
          <span className="text-cbxOren font-black">CBX (Collaboration Build Xpression) Festival</span> hadir sebagai ruang kolaborasi, hiburan, dan ekspresi masyarakat yang lahir di tengah hiruk pikuk metropolitan Jakarta. Kami percaya bahwa di balik padatnya pembangunan kota, ada potensi besar dari warga, komunitas kreatif, dan pelaku UMKM lokal yang perlu wadah untuk berkembang.
        </p>

        <div className="bg-cbxKuning border-2 border-cbxHitam p-6 rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B] rotate-1 my-6 text-cbxHitam">
          <h4 className="font-black uppercase text-xl mb-2">🎯 VISI & MISI KITA</h4>
          <p>
            Visi kami adalah menciptakan <em>the new pop culture</em> pesta rakyat dari kampung ke kampung. Kami hadir untuk menghadirkan ruang hiburan di tengah kampung, menjadi wadah bagi talenta lokal untuk berkarya, serta memastikan acara ini terus tumbuh dan dikenal luas di berbagai wilayah.
          </p>
        </div>

        <p>
          Bukan sekadar festival musik, CBX FEST adalah perayaan semangat kebersamaan khas perayaan kampung dengan tema <span className="italic">"Berpesta Ria Dari Kampung"</span>. Kami ingin menghadirkan ruang di mana warga tidak lagi hanya menjadi penikmat, tetapi menjadi bagian aktif dalam perkembangan budaya lokal yang inspiratif, berdampak, dan mampu memberikan nilai positif bagi banyak orang.
        </p>
      </div>
                
            <button 
              onClick={() => navigateTo('home')}
              className="mt-10 bg-cbxHijau text-white font-black uppercase px-6 py-3 rounded-xl border-2 border-cbxHitam hover:bg-cbxOren transition-colors cursor-pointer"
            >
              ⬅️ Kembali Ke Beranda
            </button>
          </div>
        </main>
      )}

{/* --- HALAMAN LINE-UP --- */}
{currentPage === 'lineup' && (
  <main className="fade-in max-w-4xl mx-auto py-16 px-6 text-center">
    <div className="bg-cbxHijau border-4 border-cbxHitam rounded-[36px] p-8 md:p-12 shadow-[8px_8px_0px_0px_#0B0B0B] text-white">
      <h2 className="text-4xl md:text-6xl font-black uppercase mb-10">OFFICIAL LINE-UP</h2>
      
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Band 1 */}
        <div className="bg-white text-cbxHitam p-6 rounded-2xl border-4 border-cbxHitam shadow-[6px_6px_0px_0px_#0B0B0B]">
          <img src={blackHorsesImg} alt="Black Horses" className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-cbxHitam" />
          <h3 className="text-2xl font-black uppercase mb-2">Black Horses</h3>
          <p className="text-sm font-bold">Band rock asal Jakarta (est. 2015). Nuansa classic rock dengan sentuhan modern.</p>
        </div>
        
        {/* Band 2 */}
        <div className="bg-white text-cbxHitam p-6 rounded-2xl border-4 border-cbxHitam shadow-[6px_6px_0px_0px_#0B0B0B]">
          <img src={westwewImg} alt="Westwew" className="w-full h-48 object-cover rounded-xl mb-4 border-2 border-cbxHitam" />
          <h3 className="text-2xl font-black uppercase mb-2">Westwew</h3>
          <p className="text-sm font-bold">Kolektif musik hip-hop dan R&B asal Jakarta yang berdiri sejak tahun 2012.</p>
        </div>
      </div>

      <button onClick={() => navigateTo('home')} className="bg-cbxOren text-white font-black uppercase px-8 py-4 rounded-xl border-4 border-cbxHitam shadow-[4px_4px_0px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
        ⬅️ Kembali Ke Beranda
      </button>
    </div>
  </main>
)}

    <section className="py-16 px-4 max-w-5xl mx-auto">
  <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-12 -rotate-2">
    <span className="bg-cbxHitam text-cbxKuning px-6 py-2">STREET VIBE</span>
  </h2>

  {/* Layout Grid Responsive: 2 kolom di HP, 4 kolom di Laptop */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center">
    
    {/* Foto 1 */}
    <div className="rotate-[-6deg] hover:rotate-0 transition-all duration-300">
      <div className="bg-cbxOren p-2 border-4 border-cbxHitam rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B]">
        <img src={imgCewek} className="w-full" alt="Person" />
      </div>
    </div>

    {/* Foto 2 */}
    <div className="rotate-[4deg] hover:rotate-0 transition-all duration-300 translate-y-4">
      <div className="bg-cbxBiru p-2 border-4 border-cbxHitam rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B]">
        <img src={imgCowok1} className="w-full" alt="Person" />
      </div>
    </div>

    {/* Foto 3 */}
    <div className="rotate-[-3deg] hover:rotate-0 transition-all duration-300">
      <div className="bg-cbxHijau p-2 border-4 border-cbxHitam rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B]">
        <img src={imgCowok2} className="w-full" alt="Person" />
      </div>
    </div>

    {/* Foto 4 */}
    <div className="rotate-[6deg] hover:rotate-0 transition-all duration-300 translate-y-4">
      <div className="bg-cbxKuning p-2 border-4 border-cbxHitam rounded-2xl shadow-[4px_4px_0px_0px_#0B0B0B]">
        <img src={imgCowok3} className="w-full" alt="Person" />
      </div>
    </div>
  </div>

  {/* Dekorasi di bawah biar nggak numpuk */}
  <div className="flex justify-center gap-8 mt-12">
    <img src={imgLayanganPot} className="w-20 md:w-32 rotate-[10deg]" alt="decor" />
    <img src={imgPintuKrucut} className="w-20 md:w-32 rotate-[-10deg]" alt="decor" />
  </div>
</section>

      {/* 6. OUTRO & FOOTER */}
<footer className="bg-[#FFB54F] border-t-4 border-[#0B0B0B] py-8 px-6 mt-16 text-[#0B0B0B]">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    
    {/* Kiri: Logo & Nama */}
    <div className="flex items-center gap-4 mt-4">
      <img src={logoCbx} alt="Logo" className="w-12 h-12 object-contain" />
      <span className="font-black text-xl uppercase">CBX FEST 2026</span>
    </div>

    {/* Tengah: Karakter (Muncul di layar laptop saja) */}
    <div className="hidden md:flex justify-center items-center gap-2">
       <img src={imgCewek} alt="Cewek" className="h-16 object-contain" />
       <img src={imgCowok1} alt="Cowok 1" className="h-16 object-contain" />
       <img src={imgCowok2} alt="Cowok 2" className="h-16 object-contain" />
       <img src={imgCowok3} alt="Cowok 3" className="h-16 object-contain" />
    </div>

    {/* Kanan: Copyright & Sosmed */}
    <div className="flex flex-col items-end gap-2">
      <div className="font-black text-sm">© 2026 CBX FEST.</div>
      <div className="flex flex-col items-end gap-1 text-xs font-bold underline">
        <a href="https://instagram.com/cbxfestival" target="_blank" rel="noreferrer">IG: @CBXFESTIVAL</a>
        <a href="mailto:cbxfest7@gmail.com">EMAIL: CBXFEST7@GMAIL.COM</a>
      </div>
    </div>
    
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