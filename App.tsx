
import React from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import { SERVICES, PACKAGES, BENEFITS, WHATSAPP_LINK, OWNER_NAME, EMAIL, WHATSAPP_NUMBER } from './constants';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-56 md:pb-52 px-5 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Optimized Background Elements for Mobile */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[1000px] h-[400px] md:h-[600px] bg-blue-100/40 rounded-full blur-[80px] md:blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto space-y-6 md:space-y-10 relative">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 md:px-5 md:py-2 bg-white/80 glass border border-blue-100 text-blue-700 rounded-full text-[10px] md:text-sm font-bold tracking-wide shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>Tersedia untuk Sesi Konsultasi Baru</span>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-5xl md:text-[10rem] font-black tracking-tighter text-gradient leading-none">
              JAbd Tech
            </h2>
            <h1 className="text-3xl md:text-7xl font-extrabold text-slate-900 leading-[1.2] md:leading-[1.1] max-w-5xl mx-auto tracking-tight">
              Website Profesional Untuk <br className="hidden md:block"/> <span className="text-blue-600">Semua Kebutuhan.</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium px-2">
            Membangun kehadiran digital yang <span className="text-slate-900 font-bold">Sederhana & Amanah</span>. 
            Solusi tepat bagi UMKM, Sekolah, dan Personal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-10 w-full max-w-md mx-auto sm:max-w-none">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-blue-600 text-white rounded-2xl md:rounded-full font-extrabold text-lg md:text-xl shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 text-center"
            >
              Konsultasi WhatsApp
            </a>
            <button 
              onClick={() => scrollToSection('layanan')}
              className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl md:rounded-full font-bold text-lg md:text-xl hover:bg-slate-50 hover:border-slate-300 transition-all cursor-pointer text-center"
            >
              Lihat Layanan
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-32 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {BENEFITS.map((benefit, idx) => (
              <div key={idx} className="group bg-white p-8 md:p-12 rounded-3xl md:rounded-[3rem] border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-xl">
                <div className="mb-6 md:mb-8 w-14 h-14 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-slate-900 tracking-tight">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base md:text-lg font-medium">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 md:py-32 px-5 scroll-mt-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter">Layanan Unggulan</h2>
            <p className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium px-4">Website siap pakai dengan fitur yang Anda butuhkan tanpa ribet.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-white border border-slate-100 rounded-3xl md:rounded-[3rem] p-8 md:p-12 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl flex flex-col">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-lg shadow-blue-100">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-1.5 text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-[10px] md:text-sm font-black text-blue-600 mb-4 md:mb-6 uppercase tracking-widest">{service.target}</p>
                <p className="text-slate-500 mb-6 md:mb-10 text-base md:text-lg leading-relaxed font-medium">{service.description}</p>
                
                <div className="space-y-4 mb-8 md:mb-10 flex-grow">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center text-slate-700 font-bold text-sm md:text-base">
                      <div className="w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-50">
                   <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-900 font-black flex items-center group/btn hover:text-blue-600 transition-colors text-sm md:text-base">
                      Pilih Paket Ini <svg className="w-5 h-5 ml-2 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="harga" className="py-20 md:py-32 bg-[#0f172a] text-white relative scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter">Investasi Transparan</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-xl font-medium px-4">Tidak ada biaya tersembunyi. Semua paket bisa dinegosiasikan sesuai budget Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-5xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`rounded-3xl md:rounded-[4rem] p-8 md:p-16 transition-all duration-700 hover:-translate-y-2 ${pkg.isFeatured ? 'bg-blue-600 text-white shadow-2xl' : 'bg-slate-800/50 border border-slate-700 text-white'}`}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-base md:text-2xl font-black uppercase tracking-widest opacity-80">{pkg.name}</h3>
                  {pkg.isFeatured && <span className="bg-white text-blue-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Terpopuler</span>}
                </div>
                <div className="flex items-baseline mb-8 md:mb-12">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter">{pkg.price}</span>
                  {pkg.price !== 'Nego' && <span className="ml-2 md:ml-3 opacity-60 font-bold text-sm md:text-lg">/ Proyek</span>}
                </div>
                
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-16">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm md:text-xl">
                      <div className={`w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center mr-3 md:mr-5 mt-0.5 flex-shrink-0 ${pkg.isFeatured ? 'bg-blue-500 text-white' : 'bg-slate-700 text-blue-400'}`}>
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="font-bold opacity-90">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-5 md:py-7 rounded-2xl md:rounded-full font-black text-lg md:text-2xl transition-all shadow-xl active:scale-95 ${pkg.isFeatured ? 'bg-white text-blue-600 hover:bg-slate-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                >
                  Mulai Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 md:py-40 px-5 bg-white relative scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-50 rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 text-center border border-slate-100 relative overflow-hidden">
             <div className="relative z-10 space-y-8 md:space-y-12">
               <div className="inline-block relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-10"></div>
                  <div className="w-32 h-32 md:w-52 md:h-52 bg-white rounded-full border-[6px] md:border-[10px] border-white shadow-xl relative z-10 flex items-center justify-center overflow-hidden group animate-bounce-slow">
                    <Logo className="w-20 h-20 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110" />
                  </div>
               </div>
               
               <div className="space-y-4 md:space-y-6">
                 <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter">Bicara Dengan Owner</h2>
                 <p className="text-slate-500 text-lg md:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto font-medium leading-relaxed px-2">
                    Hubungi <strong>{OWNER_NAME}</strong> secara langsung untuk konsultasi yang lebih personal dan solusi yang tepat.
                 </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center p-6 md:p-8 bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      </div>
                      <div className="text-left">
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">WhatsApp</p>
                          <p className="text-slate-900 font-black text-sm md:text-xl">{WHATSAPP_NUMBER}</p>
                      </div>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center p-6 md:p-8 bg-white rounded-2xl md:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-lg transition-all group">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div className="text-left">
                          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-0.5">Email Inquiry</p>
                          <p className="text-slate-900 font-black text-sm md:text-xl break-all">{EMAIL}</p>
                      </div>
                  </a>
               </div>

               <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center w-full sm:w-auto justify-center px-10 py-5 md:px-14 md:py-7 bg-slate-900 text-white rounded-2xl md:rounded-full font-black text-lg md:text-2xl hover:bg-blue-600 transition-all shadow-xl active:scale-95 group"
               >
                  Mulai Diskusi
                  <svg className="w-6 h-6 md:w-8 md:h-8 ml-3 md:ml-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
               </a>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-24 px-5 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="transition-transform hover:rotate-6">
                <Logo className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <span className="font-black text-2xl md:text-3xl text-slate-900 tracking-tighter">JAbd Tech</span>
            </div>
            <p className="text-center md:text-left max-w-sm text-slate-500 font-bold leading-relaxed text-sm md:text-base">
              Mewujudkan kehadiran digital yang profesional, sederhana, dan terpercaya bagi bisnis Anda.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] md:text-sm font-black uppercase tracking-widest text-slate-400">
            {['layanan', 'harga', 'kontak'].map(item => (
              <button key={item} onClick={() => scrollToSection(item)} className="hover:text-blue-600 transition-colors cursor-pointer">{item}</button>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end space-y-6">
             <p className="text-[10px] md:text-sm font-black text-slate-900 tracking-widest uppercase">© {new Date().getFullYear()} JAbd Tech.</p>
             <div className="flex space-x-4">
                {[
                  { link: WHATSAPP_LINK, icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /> },
                  { link: `mailto:${EMAIL}`, icon: <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" /> }
                ].map((social, si) => (
                  <a key={si} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">{social.icon}</svg>
                  </a>
                ))}
             </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button - Mobile Optimized Size */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-green-500 text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-all active:scale-95 flex items-center justify-center"
      >
        <svg className="w-8 h-8 md:w-9 md:h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
      </a>
    </div>
  );
};

export default App;
