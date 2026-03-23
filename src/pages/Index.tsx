import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Briefcase, Users, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const IMG = "/images";
const heroImage = `${IMG}/te-puke-hostel-park-cabins-caravans.webp`;
const featuredImg = `${IMG}/te-puke-hostel-park-cabins-caravans.webp`;

/** Images that have an 800w responsive variant in /public/images/ */
const HAS_800W = new Set([
  "te-puke-hostel-cabin-accommodation",
  "te-puke-hostel-caravan-interior",
  "te-puke-hostel-caravans-group-accommodation",
  "te-puke-hostel-tv-lounge-common-area",
  "te-puke-hostel-premium-pods-accommodation",
  "te-puke-hostel-park-cabins-caravans",
  "te-puke-hostel-outdoor-relaxation-area",
  "te-puke-hostel-evening-atmosphere",
]);

/** Images that also have a 400w variant */
const HAS_400W = new Set([
  "te-puke-hostel-outdoor-relaxation-area",
]);

/** Return srcSet for gallery images that have a pre-generated 800w variant */
function galleryImgSrcSet(src: string): string | undefined {
  const match = src.match(/\/images\/(.+)\.webp$/);
  if (!match) return undefined;
  const name = match[1];
  if (HAS_800W.has(name)) {
    const prefix = HAS_400W.has(name) ? `${IMG}/${name}-400w.webp 400w, ` : "";
    return `${prefix}${IMG}/${name}-800w.webp 800w, ${IMG}/${name}.webp 1200w`;
  }
  return undefined;
}

const CATS_EN = ["All", "Accommodation", "Outdoors", "Amenities"] as const;

const Index = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = useCallback((src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  }, []);

  const catLabels: Record<string, string> = {
    All: t(translations.home.all),
    Accommodation: t(translations.home.accommodationCat),
    Outdoors: t(translations.home.outdoors),
    Amenities: t(translations.home.amenities),
  };

  const cards = [
    { icon: Home, title: t(translations.home.cardAccTitle), desc: t(translations.home.cardAccDesc), to: "/accommodation" },
    { icon: Briefcase, title: t(translations.home.cardWorkTitle), desc: t(translations.home.cardWorkDesc), to: "/seasonal-work" },
    { icon: Users, title: t(translations.home.cardRseTitle), desc: t(translations.home.cardRseDesc), to: "/rse-accommodation" },
  ];

  /** One entry per unique image (deduplicated by file bytes). */
  const galleryPhotos = [
    { src: `${IMG}/te-puke-hostel-premium-pods-accommodation.webp`, label: t(translations.gallery.premiumPods), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-pod-exterior.webp`, label: t(translations.gallery.photo3_podExterior), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-cabin-accommodation.webp`, label: t(translations.gallery.cabinsSmall), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-cabin-interior-bed.webp`, label: t(translations.gallery.wp1_cabinInterior), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-caravan-interior.webp`, label: t(translations.gallery.caravanInterior), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-caravans-group-accommodation.webp`, label: t(translations.gallery.caravansGroups), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-caravan-closeup.webp`, label: t(translations.gallery.wp9_caravanCloseup), cat: "Accommodation" },
    { src: `${IMG}/te-puke-hostel-dining-area.webp`, label: t(translations.gallery.photo13_diningArea), cat: "Accommodation" },
    { src: `${IMG}/te-puke-holiday-park-entrance.webp`, label: t(translations.gallery.photo1_parkEntrance), cat: "Outdoors" },
    { src: `${IMG}/te-puke-hostel-outdoor-relaxation-area.webp`, label: t(translations.gallery.relaxOutdoor), cat: "Outdoors" },
    { src: `${IMG}/te-puke-hostel-evening-atmosphere.webp`, label: t(translations.gallery.eveningAtmosphere), cat: "Outdoors" },
    { src: `${IMG}/te-puke-hostel-sunset-golden-hour.webp`, label: t(translations.gallery.wp10_sunsetGold), cat: "Outdoors" },
    { src: `${IMG}/te-puke-hostel-path-lanterns.webp`, label: t(translations.gallery.wp17_pathLanterns), cat: "Outdoors" },
    { src: `${IMG}/te-puke-hostel-tv-lounge-common-area.webp`, label: t(translations.gallery.tvLounge), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-reception-building.webp`, label: t(translations.gallery.photo14_receptionDesk), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-common-area.webp`, label: t(translations.gallery.photo10_commonArea), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-shared-kitchen.webp`, label: t(translations.gallery.sharedKitchen), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-shared-bathroom-facilities.webp`, label: t(translations.gallery.sharedFacilities), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-ladies-bathroom-facilities.webp`, label: t(translations.gallery.ladiesBathroom), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-pool-area.webp`, label: t(translations.gallery.photo6_poolArea), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-laundry-room.webp`, label: t(translations.gallery.photo7_laundryRoom), cat: "Amenities" },
    { src: `${IMG}/te-puke-hostel-recreation-area.webp`, label: t(translations.gallery.recreation), cat: "Amenities" },
  ];

  const filtered = filter === "All" ? galleryPhotos : galleryPhotos.filter(p => p.cat === filter);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() => setLightboxIdx(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const next = useCallback(() => setLightboxIdx(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, closeLightbox, prev, next]);

  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <Layout>
      <Helmet>
        <title>{t(translations.home.metaTitle)}</title>
        <meta name="description" content={t(translations.home.metaDesc)} />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/" />
      </Helmet>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="Hero">
        <img 
          src={heroImage}
          srcSet="/images/te-puke-hostel-park-cabins-caravans-400w.webp 400w, /images/te-puke-hostel-park-cabins-caravans-800w.webp 800w, /images/te-puke-hostel-park-cabins-caravans-1080w.webp 1080w, /images/te-puke-hostel-park-cabins-caravans.webp 1200w"
          sizes="100vw"
          alt="Te Puke Holiday Park — Accommodation in Bay of Plenty, New Zealand" 
          className="absolute inset-0 w-full h-full object-cover" 
          loading="eager" 
          fetchPriority="high"
          decoding="sync"
          width="1200" 
          height="800"
          onError={(e) => {
            handleImageError(heroImage);
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight animate-fade-in-up">
            {t(translations.home.heroTitle)}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body animate-fade-in-up [animation-delay:200ms]">
            {t(translations.home.heroDesc)}
          </p>
          <a href="/contact" className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg shadow-lg animate-scale-in [animation-delay:400ms] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
            {t(translations.home.bookYourStay)}
          </a>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="section-padding" aria-label="Quick access">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <a key={card.to} href={card.to} className="group bg-card rounded-lg p-8 text-center border border-border opacity-0 animate-fade-in-up hover:shadow-[var(--shadow-elevated)] hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{card.title}</h2>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SEO — About section: visible text targeting "hostel te puke" */}
      <section className="section-padding bg-background" aria-label="About Te Puke Hostel">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">
            Te Puke Hostel &amp; Backpacker Accommodation in Bay of Plenty
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed opacity-0 animate-fade-in-up [animation-delay:100ms]">
            Te Puke Holiday Park is the go-to hostel in Te Puke for seasonal workers, RSE crews and backpackers exploring New Zealand&apos;s Bay of Plenty. Our hostel-style accommodation &mdash; pods, caravans and cabins &mdash; sits right in the heart of the kiwifruit capital, just minutes from orchards and packhouses. Whether you need a single night or a full season, we offer the most affordable and practical base in Te Puke.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pt-10 pb-20 bg-accent/20" aria-label="Photo gallery">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div className="opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                <Camera className="h-4 w-4" />
                <span>{t(translations.home.photoGallery)}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                {t(translations.home.galleryTitle)}
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-base opacity-0 animate-fade-in-up [animation-delay:100ms]">
              {t(translations.home.galleryDesc)}
            </p>
          </div>

          {/* Featured photo */}
          <div className="relative group overflow-hidden rounded-3xl h-[50vh] min-h-[320px] mb-6 shadow-xl opacity-0 animate-fade-in-up [animation-delay:150ms] cursor-pointer" onClick={() => setLightboxIdx(-1)}>
            <img 
              src="/images/te-puke-hostel-park-cabins-caravans-800w.webp"
              srcSet="/images/te-puke-hostel-park-cabins-caravans-800w.webp 800w, /images/te-puke-hostel-park-cabins-caravans.webp 1200w"
              sizes="(max-width: 768px) 100vw, 960px"
              alt={t(translations.gallery.parkGrounds)} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
              loading="eager"
              decoding="async"
              width="800"
              height="600"
              onError={(e) => {
                handleImageError(featuredImg);
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 text-white flex items-end gap-3">
              <span className="bg-primary/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">{t(translations.home.parkGrounds)}</span>
              <p className="font-heading text-xl font-bold drop-shadow-lg">{t(translations.gallery.parkGrounds)}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-black/40 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">{t(translations.home.clickToEnlarge)}</span>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATS_EN.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${filter === cat ? "bg-primary text-primary-foreground border-primary shadow-md" : "bg-background text-foreground border-border hover:border-primary/50 hover:text-primary"}`}>
                {catLabels[cat]}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground self-center">{filtered.length} {t(translations.home.photos)}</span>
          </div>

          {/* Masonry grid */}
          <div className="[column-count:1] sm:[column-count:2] md:[column-count:3] [column-gap:1rem]">
            {filtered.map((photo, i) => (
              <div key={`${filter}-${i}`} className="group relative overflow-hidden rounded-2xl break-inside-avoid mb-4 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => setLightboxIdx(i)}>
                 <img 
                   src={photo.src}
                   srcSet={galleryImgSrcSet(photo.src)}
                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                   alt={photo.label} 
                   className="w-full block transition-transform duration-700 ease-out group-hover:scale-105" 
                   loading={i < 6 ? "eager" : "lazy"}
                   decoding={i < 6 ? "sync" : "async"}
                   width="800"
                   height="600"
                   onError={(e) => {
                     handleImageError(photo.src);
                     e.currentTarget.src = '/placeholder.svg';
                   }}
                 />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-10 pb-4 px-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold leading-snug">{photo.label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{catLabels[photo.cat]}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">{t(translations.home.view)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-primary px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">{t(translations.home.ctaTitle)}</p>
                {/* contrast fix: was /80 → /95 for WCAG AA compliance */}
                <p className="text-primary-foreground/95 text-lg">{t(translations.home.ctaDesc)}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a href="/contact" className="inline-block bg-secondary text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:scale-105 hover:bg-secondary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-center">
                  {t(translations.home.getInTouch)}
                </a>
                <a href="tel:02108917258" className="inline-block bg-transparent border border-white/70 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/15 transition-all duration-200 text-center">
                  📞 021 089 17258
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (() => {
        const isFeatured = lightboxIdx === -1;
        const photo = isFeatured
          ? { src: featuredImg, label: t(translations.gallery.parkGrounds), cat: "Outdoors" }
          : filtered[lightboxIdx];
        if (!photo) return null;
        return (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={t(translations.home.closeLightbox)}>
            <button onClick={closeLightbox} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white" aria-label={t(translations.home.closeLightbox)}>
              <X className="h-5 w-5" />
            </button>
            {!isFeatured && (
              <button onClick={e => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white" aria-label={t(translations.home.previousPhoto)}>
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}
            <div className="max-w-5xl max-h-full flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
              <img 
                src={photo.src} 
                alt={photo.label} 
                className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl" 
                loading="eager"
                onError={(e) => {
                  handleImageError(photo.src);
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="text-center">
                <p className="text-white font-semibold text-lg">{photo.label}</p>
                <p className="text-white/50 text-sm">{catLabels[photo.cat]}</p>
                {!isFeatured && (
                  <p className="text-white/40 text-xs mt-1">{lightboxIdx + 1} / {filtered.length} — {t(translations.home.navigateHint)}</p>
                )}
              </div>
            </div>
            {!isFeatured && (
              <button onClick={e => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white" aria-label={t(translations.home.nextPhoto)}>
                <ChevronRight className="h-6 w-6" />
              </button>
            )}
          </div>
        );
      })()}
    </Layout>
  );
};

export default Index;
