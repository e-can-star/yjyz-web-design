import React from 'react';

const LeaderCard = ({ name, title, img }: {name: string, title: string, img: string}) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:scale-[1.02] cursor-default flex flex-col items-center">
    <div className="aspect-[3/4] w-full overflow-hidden rounded-[12px] mb-6 border border-slate-100 bg-slate-50">
      <img alt={name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={img} />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-1">{name}</h3>
    <p className="text-slate-500 text-sm font-medium">{title}</p>
  </div>
);

export const Leadership: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-10 lg:p-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight font-serif">学校领导</h1>
        <p className="text-forest font-bold tracking-[0.3em] uppercase text-sm">SCHOOL LEADERSHIP</p>
        <div className="w-20 h-1 bg-forest mx-auto mt-6 rounded-full"></div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
        <LeaderCard name="梁峻荣" title="[ 党委副书记、校长 ]" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_GEkQk0wOhHlDXP11b3bV3XYpSmqwWyrWYeuBCaAAag24_iTvaLUd8d3cKXPEpFCHoMEsp5nRY0_8Hl5jL2ivGhwfxmdTgp6txx4nSkiUFzWx6h9nDX_NdFdRa46MHVn2-uLXklgdkgWQNLHmHWlxeXd-mtpIc5dXAezJEFigjFuzLtqfDcIOGQe00grNh46Sfe4RuszNqE_u2h9Sb9w5-kvEDlCkEqDSSeOIcKiffSS2Nql2RNlLGkHBVA0kpMdEbODJj80l3Po" />
        <LeaderCard name="莫介健" title="[ 学校党委书记 ]" img="https://lh3.googleusercontent.com/aida-public/AB6AXuCo2QMjj3X7PiTNUXRdNERhh_UVb3YJh7fMbeRR2XhAoozDUUICGIXx-RN0M5h9aZdxsZz75rZ5RRWF9PVh9Gt9aczEvAk9Xe3wYNG80FqGUQcN0qvJirSoX5RnWcQVALKkkgdfNVqmSVbI-lPOMqCvSN_hRb2uHAyFcnAVQwVUETJemyzPJh4pwsPUrC-0NFMeUhNhE4xnjN-oUkDFKBEE9LD3OC5EnD_XmgBxBALmj6qlfxq_g6laBN56W8HL6CRcfb5OS82zjlzl" />
      </div>
      
      <div className="h-px bg-slate-100 w-full mb-16"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <LeaderCard name="冯锦霞" title="[ 副校长 ]" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDok7NGuj64teldUtD1rughxBSBKp7xFFi6XTbMovzIcovibPw0eKzdDIOIX78K8E4PeRMVgp7bIGwfz50JPn62w1Dst56p3XQOAxHz3tlXFjXuCzVwDv-rb1ruVqBajWFwvbVFbkz4Y5_jNNuX8frvk7HCTkPd_khXabKMY4DUsjtb7AWEMZKbTNsXBySDSz6hHOXC3b7ffT38VTxkzYlJ73Eme9qr-KQOAi6IVCRwQbo5JMsXFWq6g9jLH91Ka7dHypKlLL32DmvE" />
        <LeaderCard name="黄广才" title="[ 副校长 ]" img="https://lh3.googleusercontent.com/aida-public/AB6AXuDrZFYSjU5h8R_avh1MO0NCmirRKvCxxrCPgdk-SAmjtZXblOqJSld3GrEBGlIgsAod1qeXP95N24mSCS0tEVNRxzqh2zKdxzd_F4s9VYsKvV6uUItixV-E7ucso7L-MHZeGv6BkIIDNCA78GuOWn6FNlClOc7_OBxybMv5_9ieJ4GT-OnU2Ka5vlbF_P2hGFcnyn2onJ0ru3YI-xsB4FaLMF1C6W6b9IjaM8LylaIAdWGxQ3LMlgozkAkpCqZOu3QHRtHwJOBh2JF6" />
        <LeaderCard name="叶秀荡" title="[ 党委委员、副校长 ]" img="https://lh3.googleusercontent.com/aida-public/AB6AXuAh-fiHMkqjRKlD9upB9tEs3tVSH0Whc7u7bVR59b25XNwzmfcLaV5U2tpjm3wiyPbrs2wlK54VNlmwjYpCke4lrl0vgkqBWVovKZaVUc6kH1YNhk2uER4IpItBkxGlVfgDdF-W4wc_FaYmCu3OZXVS8_1O066KeOpRtfdIKtJ9yFI-FVeWacS4iVwkP4_0g_6h6lmV1Pvg-LRRMZl96M8MdqXP1n_hWdvZL5NQylRCB-FGOk74hgG8bQ9cjaRLiy9-IWIoYTNEbZPY" />
      </div>
    </div>
  );
};