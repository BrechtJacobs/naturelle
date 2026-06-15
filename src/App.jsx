import React from 'react';

const BotanicalSprig = ({ className = "" }) => (
  <svg viewBox="0 0 120 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 30 Q30 10 60 20 Q90 30 110 10" stroke="#C9A882" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M40 20 Q45 10 55 15" stroke="#C9A882" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M60 20 Q65 8 75 12" stroke="#C9A882" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M30 22 Q28 12 38 14" stroke="#C9A882" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 20 20" className="w-5 h-5 fill-[#C9A882]" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 1l2.39 4.84 5.34.78-3.86 3.76.91 5.32L10 13.27l-4.78 2.43.91-5.32L2.27 6.62l5.34-.78z"/>
  </svg>
);

export default function Naturelle() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [visible, setVisible] = React.useState({});

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setVisible(v => ({ ...v, [e.target.id]: true }))),
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const reveal = (id) => visible[id] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4';

  const services = [
    { icon: "✦", name: "Gezichtsbehandelingen", desc: "Een behandeling afgestemd op jouw huid — zichtbaar resultaat, voelt meteen goed." },
    { icon: "◇", name: "Huidverzorging", desc: "Zachte zorg die jouw huid de aandacht geeft die ze verdient." },
    { icon: "○", name: "Ontharing", desc: "Snel, grondig en aangenaam — precies wat jij nodig hebt." },
    { icon: "✦", name: "Massages", desc: "Op jouw ritme ontspannen, met aandacht voor elk detail." },
    { icon: "◇", name: "Make-up", desc: "Natuurlijk en precies — je ziet er fris uit, niet opgemaakt." },
    { icon: "○", name: "Wenkbrauw- & wimperverzorging", desc: "Kleine ingreep, groot verschil. In goed handen." }
  ];

  return (
    <div className="bg-[#FAF7F4] text-[#2E2520] min-h-screen overflow-x-hidden">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FAF7F4]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl italic text-[#2E2520] font-medium">Naturelle</a>
          <div className="hidden md:flex gap-8 items-center">
            {['diensten','over','werkwijze','contact'].map(s => (
              <a key={s} href={`#${s}`} className="font-inter text-sm text-[#8C7B72] hover:text-[#2E2520] transition-colors duration-200 capitalize">{s}</a>
            ))}
          </div>
          <a href="#boeking" className="hidden md:inline-flex bg-[#A0785A] hover:bg-[#8A6449] text-white font-medium text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#A0785A]/20 hover:-translate-y-0.5">Afspraak maken</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className={`block w-6 h-px bg-[#2E2520] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}/>
            <span className={`block w-6 h-px bg-[#2E2520] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-6 h-px bg-[#2E2520] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}/>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#FAF7F4] px-6 pb-6 flex flex-col gap-4">
            {['diensten','over','werkwijze','contact'].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)} className="text-sm text-[#8C7B72] capitalize py-1">{s}</a>
            ))}
            <a href="#boeking" onClick={() => setMenuOpen(false)} className="bg-[#A0785A] text-white text-sm px-6 py-3 rounded-full text-center">Afspraak maken</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1920&q=85" alt="Naturelle salon" className="absolute inset-0 w-full h-full object-cover hover:scale-[1.02] transition-all duration-700"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E2520]/60 via-[#2E2520]/25 to-transparent"/>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-5xl md:text-7xl font-light leading-tight mb-6">
            Jouw huid,<br/><em>in de beste handen</em>
          </h1>
          <p className="font-light text-white/80 text-lg mb-10 max-w-md">Persoonlijke huidzorg in het hart van Oostende — voelt meteen vertrouwd.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#boeking" className="bg-[#A0785A] hover:bg-[#8A6449] text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#A0785A]/20 hover:-translate-y-0.5">Maak een afspraak</a>
            <a href="#diensten" className="bg-transparent border border-white/70 text-white hover:bg-white hover:text-[#2E2520] font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 ease-out">Bekijk diensten</a>
          </div>
        </div>
        <a href="#intro" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C9A882] animate-bounce">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </a>
      </section>

      {/* INTRO */}
      <section id="intro" className="py-24 px-6">
        <div id="intro-block" data-reveal className={`max-w-2xl mx-auto text-center transition-all duration-700 ${reveal('intro-block')}`}>
          <BotanicalSprig className="w-32 mx-auto mb-8"/>
          <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl md:text-3xl font-light text-[#2E2520] leading-relaxed">
            Bij Naturelle draait het om jouw huid — niet om een behandeling van de lijst. Iedere afspraak begint met een eerlijk gesprek. Zo weet ik precies wat jij nodig hebt, en voelt de zorg als iets wat voor jou is gemaakt.
          </p>
          <p className="mt-6 text-[#8C7B72] font-light leading-relaxed">Gelegen aan de Ieperstraat in Oostende — een rustige plek midden in de stad.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="diensten" className="py-24 px-6 bg-[#F2EDE7]">
        <div className="max-w-6xl mx-auto">
          <div id="sv-head" data-reveal className={`text-center mb-16 transition-all duration-700 ${reveal('sv-head')}`}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-light mb-3">Wat ik voor je doe</h2>
            <p className="text-[#8C7B72] font-light">Zachte zorg, zichtbaar resultaat</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} id={`sv-${i}`} data-reveal className={`bg-[#F2EDE7] rounded-2xl p-8 hover:shadow-md hover:shadow-[#C9A882]/15 transition-all duration-300 ease-out hover:-translate-y-1 border border-[#E8DED4] ${reveal(`sv-${i}`)}`}>
                <span className="text-[#C9A882] text-2xl block mb-4">{s.icon}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-xl font-medium mb-3 italic">{s.name}</h3>
                <p className="text-[#8C7B72] font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="over" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div id="ab-img" data-reveal className={`transition-all duration-700 ${reveal('ab-img')}`}>
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=85" alt="Naturelle behandeling" className="rounded-3xl aspect-[4/5] object-cover w-full hover:scale-[1.02] transition-all duration-500"/>
          </div>
          <div id="ab-txt" data-reveal className={`transition-all duration-700 delay-150 ${reveal('ab-txt')}`}>
            <BotanicalSprig className="w-24 mb-6"/>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-light leading-tight mb-8">Zorg met aandacht,<br/><em>op jouw tempo</em></h2>
            <p className="text-[#8C7B72] font-light leading-relaxed mb-5">Bij Naturelle werk ik alleen — en dat is bewust zo. Jij krijgt mijn volledige aandacht, van begin tot einde. Geen wachtkamer, geen haast.</p>
            <p className="text-[#8C7B72] font-light leading-relaxed mb-5">Ik werk met producten die goed zijn voor de huid en prettig aanvoelen. Niet overdreven, maar precies wat nodig is. Zo ga je hier weg met een huid die er rustig en verzorgd uitziet.</p>
            <p className="text-[#8C7B72] font-light leading-relaxed mb-8">Elke behandeling begint met een goed gesprek. Want pas als ik weet hoe jouw huid zich voelt, kan ik echt helpen.</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="italic text-[#A0785A] text-xl mb-8">— Naturelle, Oostende</p>
            <a href="#boeking" className="inline-flex bg-transparent border border-[#A0785A] text-[#A0785A] hover:bg-[#A0785A] hover:text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 ease-out">Maak kennis</a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="werkwijze" className="py-24 px-6 bg-[#F2EDE7]">
        <div className="max-w-5xl mx-auto">
          <div id="pr-head" data-reveal className={`text-center mb-16 transition-all duration-700 ${reveal('pr-head')}`}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-light">Zo werkt het bij Naturelle</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[['01','Kennismaking','We beginnen met een kort gesprek over jouw huid en wat je zoekt. Geen formulieren, gewoon een eerlijk praatje.'],['02','Behandeling','Ik werk rustig en zorgvuldig — volledig afgestemd op wat jouw huid op dit moment nodig heeft.'],['03','Nazorg','Na de behandeling geef ik je eerlijk advies mee. Wat werkt thuis, wat niet — precies wat jij nodig hebt.']].map(([num, title, desc], i) => (
              <div key={i} id={`pr-${i}`} data-reveal className={`transition-all duration-700 ${reveal(`pr-${i}`)}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-8xl font-light text-[#C9A882]/20 block leading-none mb-2">{num}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl font-medium mb-3">{title}</h3>
                <p className="text-[#8C7B72] font-light text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80" className="rounded-2xl aspect-[3/4] object-cover hover:scale-[1.02] transition-all duration-500 col-span-1 md:col-span-2" alt=""/>
          <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=600&q=80" className="rounded-2xl aspect-square object-cover hover:scale-[1.02] transition-all duration-500" alt=""/>
          <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80" className="rounded-2xl aspect-square object-cover hover:scale-[1.02] transition-all duration-500" alt=""/>
          <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80" className="rounded-2xl aspect-[4/3] object-cover hover:scale-[1.02] transition-all duration-500 col-span-2" alt=""/>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#F2EDE7]">
        <div id="test" data-reveal className={`max-w-3xl mx-auto text-center transition-all duration-700 ${reveal('test')}`}>
          <div className="flex justify-center gap-1 mb-8">{[...Array(5)].map((_, i) => <StarIcon key={i}/>)}</div>
          <blockquote style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl md:text-3xl italic font-light text-[#2E2520] leading-relaxed mb-8">
            "Ik ben zo blij dat ik hier terechtgekomen ben. De behandeling was precies wat ik nodig had — rustig, persoonlijk en met zichtbaar resultaat. Ik kom zeker terug."
          </blockquote>
          <p className="font-medium text-sm text-[#2E2520]">Google Review</p>
          <p className="text-[#8C7B72] text-sm">5/5 ✦ Verified</p>
        </div>
      </section>

      {/* BOOKING */}
      <section id="boeking" className="py-24 px-6">
        <div id="bk-block" data-reveal className={`max-w-2xl mx-auto text-center transition-all duration-700 ${reveal('bk-block')}`}>
          <BotanicalSprig className="w-28 mx-auto mb-8"/>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl md:text-5xl font-light mb-5">Klaar voor een afspraak?</h2>
          <p className="text-[#8C7B72] font-light mb-10">Je bent van harte welkom. Bel gerust of stuur een berichtje — ik antwoord persoonlijk en snel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="tel:0476472809" className="bg-[#A0785A] hover:bg-[#8A6449] text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#A0785A]/20 hover:-translate-y-0.5">Bel 0476 47 28 09</a>
          </div>
          <div className="bg-[#F2EDE7] rounded-2xl p-8 border border-[#E8DED4] text-left">
            <div className="grid gap-4">
              <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Jouw naam" className="w-full bg-white border border-[#E8DED4] rounded-2xl px-5 py-4 text-[#2E2520] placeholder-[#8C7B72] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A882]/50 focus:border-[#C9A882] transition-all duration-200"/>
              <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="E-mailadres" className="w-full bg-white border border-[#E8DED4] rounded-2xl px-5 py-4 text-[#2E2520] placeholder-[#8C7B72] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A882]/50 focus:border-[#C9A882] transition-all duration-200"/>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Waarmee kan ik je helpen?" rows={4} className="w-full bg-white border border-[#E8DED4] rounded-2xl px-5 py-4 text-[#2E2520] placeholder-[#8C7B72] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A882]/50 focus:border-[#C9A882] transition-all duration-200 resize-none"/>
              <button className="bg-[#A0785A] hover:bg-[#8A6449] text-white font-medium text-sm tracking-wide px-8 py-4 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:shadow-[#A0785A]/20 hover:-translate-y-0.5 w-full">Verstuur bericht</button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 bg-[#F2EDE7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div id="ct-info" data-reveal className={`transition-all duration-700 ${reveal('ct-info')}`}>
            <BotanicalSprig className="w-24 mb-6"/>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-4xl font-light mb-8">Je vindt ons hier</h2>
            <div className="space-y-6">
              <div>
                <p className="font-medium text-sm text-[#2E2520] mb-1">Adres</p>
                <p className="text-[#8C7B72] font-light">Ieperstraat 46<br/>8400 Oostende, België</p>
              </div>
              <div>
                <p className="font-medium text-sm text-[#2E2520] mb-1">Openingsuren</p>
                <p className="text-[#8C7B72] font-light">Maandag – vrijdag: 9:00 – 18:00<br/>Zaterdag: op afspraak<br/>Zondag: gesloten</p>
              </div>
              <div>
                <p className="font-medium text-sm text-[#2E2520] mb-1">Telefoon</p>
                <a href="tel:0476472809" className="text-[#A0785A] hover:text-[#8A6449] transition-colors duration-200 font-light">0476 47 28 09</a>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-[#8C7B72] hover:text-[#A0785A] transition-colors duration-200 text-sm font-medium">Instagram</a>
                <a href="#" className="text-[#8C7B72] hover:text-[#A0785A] transition-colors duration-200 text-sm font-medium">Facebook</a>
              </div>
            </div>
          </div>
          <div id="ct-map" data-reveal className={`transition-all duration-700 delay-150 ${reveal('ct-map')}`}>
            <div className="rounded-2xl overflow-hidden h-80 md:h-96">
              <iframe
                title="Naturelle locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.7!2d2.9149!3d51.2295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcca5e5f4bba77%3A0x7e52f48b1a6d3e51!2sIeperstraat%2046%2C%208400%20Oostende!5e0!3m2!1snl!2sbe!4v1700000000000"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2E2520] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-2xl italic text-[#FAF7F4]">Naturelle</span>
          <div className="flex gap-8">
            {['diensten','over','werkwijze','contact'].map(s => (
              <a key={s} href={`#${s}`} className="text-[#8C7B72] hover:text-[#FAF7F4] transition-colors duration-200 text-sm capitalize">{s}</a>
            ))}
          </div>
          <p className="text-[#8C7B72] text-sm">© 2025 Naturelle, Oostende</p>
        </div>
      </footer>

    </div>
  );
}