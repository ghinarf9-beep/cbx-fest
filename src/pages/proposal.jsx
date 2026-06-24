import React from 'react';

const Proposal = () => {
  return (
    <div className="p-10 max-w-4xl mx-auto bg-white min-h-screen">
      <h1 className="text-3xl font-black mb-6">PROPOSAL CBX FEST 2026</h1>
      
      {/* PDF muncul di sini */}
      <div className="w-full h-[800px] border-4 border-[#0B0B0B]">
        <iframe 
          src="/proposal.pdf" 
          width="100%" 
          height="100%" 
          title="Proposal PDF"
        />
      </div>

      <div className="mt-6">
        <a href="/" className="bg-[#FFB763] px-6 py-2 font-bold border-2 border-[#0B0B0B] hover:bg-[#ffaa40]">
          KEMBALI KE BERANDA
        </a>
      </div>
    </div>
  );
};

export default Proposal;