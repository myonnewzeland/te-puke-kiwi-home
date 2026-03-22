import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { AlertTriangle, UtensilsCrossed, Bath, WashingMachine, Wifi, Car, TreePine, MapPin, DollarSign, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

// Helper function to properly encode image URLs
const encodeImageUrl = (url: string) => {
  // Only encode if not already encoded
  if (url.includes('%20') || url.includes('%28') || url.includes('%29')) {
    return url; // Already encoded
  }
  return url.replace(/ /g, '%20').replace(/\(/g, '%28').replace(/\)/g, '%29');
};

const IMG_BASE = "https://im.tepukeholidaypark.co.nz/WhatsApp Image 2026-03-13 at 16.17";
const heroImg = encodeImageUrl(`${IMG_BASE}.15 (1).webp`);

const Accommodation = () => {
  const facilitiesRef = useScrollReveal<HTMLUListElement>();
  const faqRef = useScrollReveal<HTMLDivElement>();
  const { t } = useLanguage();

  const accommodations = [
    {
      img: encodeImageUrl("https://im.tepukeholidaypark.co.nz/pods.webp"),
      name: t(translations.acc.pods),
      badge: t(translations.acc.mostPopular),
      desc: t(translations.acc.podsDesc),
    },
    {
      img: encodeImageUrl("https://im.tepukeholidaypark.co.nz/WhatsApp Image 2026-03-13 at 16.17.15 (1).webp"),
      name: t(translations.acc.caravans),
      desc: t(translations.acc.caravansDesc),
    },
    {
      img: encodeImageUrl(`${IMG_BASE}.16 (1).webp`),
      name: t(translations.acc.cabins),
      desc: t(translations.acc.cabinsDesc),
    },
  ];

  const facilities = [
    { icon: UtensilsCrossed, label: t(translations.acc.sharedKitchens) },
    { icon: Bath, label: t(translations.acc.hotShowers) },
    { icon: WashingMachine, label: t(translations.acc.laundry) },
    { icon: Wifi, label: t(translations.acc.wifiAccess) },
    { icon: Car, label: t(translations.acc.parking) },
    { icon: TreePine, label: t(translations.acc.outdoorAreas) },
  ];

  const faqs = [
    { q: t(translations.acc.faq1q), a: t(translations.acc.faq1a) },
    { q: t(translations.acc.faq2q), a: t(translations.acc.faq2a) },
    { q: t(translations.acc.faq3q), a: t(translations.acc.faq3a) },
    { q: t(translations.acc.faq4q), a: t(translations.acc.faq4a) },
    { q: t(translations.acc.faq5q), a: t(translations.acc.faq5a) },
    { q: t(translations.acc.faq6q), a: t(translations.acc.faq6a) },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t(translations.acc.metaTitle)}</title>
        <meta name="description" content={t(translations.acc.metaDesc)} />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/accommodation" />
      </Helmet>

      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden" aria-labelledby="accommodation-heading">
        <picture className="absolute inset-0 w-full h-full">
          <img 
            src={heroImg} 
            alt="Beautiful view at Te Puke Holiday Park" 
            className="absolute inset-0 w-full h-full object-cover" 
            loading="eager" 
            fetchPriority="high"
            onError={(e) => {
              console.error(`Failed to load hero image: ${heroImg}`);
              e.currentTarget.src = '/placeholder.svg';
            }}
          />
        </picture>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 id="accommodation-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight opacity-0 animate-fade-in-up">{t(translations.acc.heroTitle)}</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-body opacity-0 animate-fade-in-up [animation-delay:200ms]">{t(translations.acc.heroDesc)}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <p className="text-lg text-foreground/80 mb-10 max-w-3xl opacity-0 animate-fade-in-up [animation-delay:300ms] mx-auto text-center">{t(translations.acc.introText)}</p>

          <div className="flex items-start gap-3 bg-accent rounded-lg p-4 mb-12 border border-border opacity-0 animate-fade-in-up [animation-delay:150ms]" role="alert">
            <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-foreground"><strong>{t(translations.acc.pleaseNote)}</strong> {t(translations.acc.notice)}</p>
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:200ms]">{t(translations.acc.typesTitle)}</h2>
            <p className="text-foreground/80 mb-8 opacity-0 animate-fade-in-up [animation-delay:250ms]">{t(translations.acc.typesDesc)}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Accommodation options">
              {accommodations.map((a, i) => (
                 <article key={a.name} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl opacity-0 animate-scale-in transition-all duration-500 flex flex-col" style={{ animationDelay: `${400 + i * 150}ms` }} role="listitem">
                  <div className="relative overflow-hidden shrink-0 h-64">
                    <img 
                      src={a.img} 
                      alt={`${a.name} - Te Puke Holiday Park`} 
                      loading="lazy" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                      width="400" 
                      height="300"
                      onError={(e) => {
                        console.error(`Failed to load accommodation image: ${a.img}`);
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    {a.badge && <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">{a.badge}</span>}
                  </div>
                  <div className="p-8 flex-grow flex flex-col bg-card z-10 relative group-hover:-translate-y-2 transition-transform duration-500 rounded-b-2xl">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{a.name}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">{a.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mb-20 bg-accent/20 rounded-3xl p-8 md:p-12 border border-border/50 shadow-inner">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center opacity-0 animate-fade-in-up [animation-delay:600ms]">{t(translations.acc.facilitiesTitle)}</h2>
            <p className="text-foreground/80 mb-12 max-w-2xl mx-auto text-center text-lg opacity-0 animate-fade-in-up [animation-delay:650ms]">{t(translations.acc.facilitiesDesc)}</p>
            <ul ref={facilitiesRef} className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list">
              {facilities.map((f, i) => (
                <li key={f.label} data-reveal className="facility-card group flex flex-col items-center gap-4 bg-background rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" style={{ "--i": i } as React.CSSProperties} role="listitem">
                  <div className="bg-primary/10 p-5 rounded-full shrink-0 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300" aria-hidden="true">
                    <f.icon className="h-8 w-8" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-foreground text-center">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg opacity-0 animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "800ms" }}>
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md transform -rotate-6">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t(translations.acc.rseTitle)}</h2>
              <p className="text-foreground/80 mb-4">{t(translations.acc.rseDesc)}</p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start text-foreground/80"><span className="text-primary mt-1">•</span> {t(translations.acc.rseBullet1)}</li>
                <li className="flex gap-2 items-start text-foreground/80"><span className="text-primary mt-1">•</span> {t(translations.acc.rseBullet2)}</li>
                <li className="flex gap-2 items-start text-foreground/80"><span className="text-primary mt-1">•</span> {t(translations.acc.rseBullet3)}</li>
              </ul>
              <p className="text-sm text-foreground/70 italic">
                {t(translations.acc.rseNote)} <a href="/rse-accommodation" className="text-primary hover:underline font-medium">{t(translations.acc.rsePageLink)}</a> {t(translations.acc.rseNoteEnd)}
              </p>
            </div>
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg opacity-0 animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "900ms" }}>
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md transform rotate-6">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t(translations.acc.locationTitle)}</h2>
              <p className="text-foreground/80 mb-4">{t(translations.acc.locationDesc1)} <strong>{t(translations.acc.locationAddress)}</strong> {t(translations.acc.locationDesc2)}</p>
              <p className="text-foreground/80">{t(translations.acc.locationDesc3)}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl border border-primary/10 text-center mb-20 opacity-0 animate-scale-in [animation-delay:1000ms]">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4 opacity-80" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{t(translations.acc.pricesTitle)}</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">{t(translations.acc.pricesDesc)}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">{t(translations.acc.weeklyRates)}</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">{t(translations.acc.shortLong)}</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">{t(translations.acc.groupArr)}</span>
            </div>
            <p className="text-foreground mb-8 text-lg">{t(translations.acc.pricesCta)} <a href="tel:02108917258" className="text-primary font-bold hover:underline">021 0891 7258</a> {t(translations.acc.pricesCtaEnd)}</p>
            <a href="/contact" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-md">{t(translations.acc.bookYourStay)}</a>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:1100ms]">{t(translations.acc.faqTitle)}</h2>
            <div ref={faqRef} className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} data-reveal className="facility-card bg-card p-6 rounded-xl border border-border/50 shadow-sm text-left" style={{ "--i": i } as React.CSSProperties}>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 flex gap-3 items-start"><span className="text-secondary">Q.</span> {faq.q}</h3>
                  <p className="text-foreground/80 flex gap-3 items-start"><span className="text-primary/70 font-bold shrink-0">A.</span> {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accommodation;
