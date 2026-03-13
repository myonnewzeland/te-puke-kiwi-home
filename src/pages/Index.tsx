import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Home, Briefcase, Users, Camera,
  X, ChevronLeft, ChevronRight,
} from "lucide-react";
import Layout from "@/components/Layout";

/* ── navigation cards ── */
const cards = [
  { icon: Home, title: "Accommodation", desc: "Pods, caravans & cabins — comfortable and affordable stays.", to: "/accommodation" },
  { icon: Briefcase, title: "Seasonal Work", desc: "Find kiwifruit picking & pruning work in the Bay of Plenty.", to: "/seasonal-work" },
  { icon: Users, title: "RSE Workers", desc: "Dedicated accommodation solutions for RSE employers.", to: "/rse-accommodation" },
];

/* ── images ── */
const B = "https://im.tepukeholidaypark.co.nz/WhatsApp%20Image%202026-03-13%20at%2016.17";
const heroImage = `${B}.16%20(2).webp`;
/* Featured = outdoor grounds — visually appealing first impression */
const featuredImg = `${B}.16.webp`;
const featuredLabel = "Park Grounds & Green Spaces";

type Photo = { src: string; label: string; cat: string };

/* Ordered: Accommodation → Outdoors → Amenities */
const galleryPhotos: Photo[] = [
  /* Accommodation */
  { src: `${B}.15%20(2).webp`, label: "TV Lounge — shared community area", cat: "Amenities" },
  { src: `${B}.15.webp`, label: "Caravans — room for groups", cat: "Accommodation" },
  { src: `${B}.16%20(1).webp`, label: "Cabins — comfort for small groups", cat: "Accommodation" },
  { src: `${B}.15%20(1).webp`, label: "Caravan Interior", cat: "Accommodation" },
  /* Outdoors */
  { src: `${B}.17.webp`, label: "Relax outdoor area", cat: "Outdoors" },
  { src: `${B}.18%20(2).webp`, label: "Evening atmosphere", cat: "Outdoors" },
  { src: `${B}.18.webp`, label: "Surroundings — kiwifruit country", cat: "Outdoors" },
  { src: `${B}.16%20(2).webp`, label: "Beautiful green views", cat: "Outdoors" },
  /* Amenities */
  { src: `${B}.17%20(1).webp`, label: "Shared facilities", cat: "Amenities" },
  { src: `${B}.17%20(2).webp`, label: "Shared kitchen", cat: "Amenities" },
  { src: `${B}.18%20(1).webp`, label: "Recreation & basketball court", cat: "Amenities" },
];

const CATS = ["All", "Accommodation", "Outdoors", "Amenities"] as const;

/* ── component ── */
const Index = () => {
  const [filter, setFilter] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All"
    ? galleryPhotos
    : galleryPhotos.filter(p => p.cat === filter);

  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prev = useCallback(() =>
    setLightboxIdx(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null),
    [filtered.length]);
  const next = useCallback(() =>
    setLightboxIdx(i => i !== null ? (i + 1) % filtered.length : null),
    [filtered.length]);

  /* keyboard navigation */
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

  /* prevent body scroll when lightbox open */
  useEffect(() => {
    document.body.style.overflow = lightboxIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIdx]);

  return (
    <Layout>
      <Helmet>
        <title>Te Puke Holiday Park — Affordable Accommodation in the Kiwifruit Capital</title>
        <meta name="description" content="Budget-friendly accommodation for seasonal workers, RSE workers and backpackers in Te Puke, Bay of Plenty, New Zealand. Book your stay today." />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="Hero">
        <img src={heroImage} alt="Te Puke Holiday Park, New Zealand"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager" fetchPriority="high" width="1920" height="1080" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight opacity-0 animate-fade-in-up">
            Your Home Away From Home in the Kiwifruit Capital of the World
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body opacity-0 animate-fade-in-up [animation-delay:200ms]">
            Affordable accommodation in Te Puke — the perfect base for seasonal workers, backpackers and adventurers exploring New Zealand's Bay of Plenty.
          </p>
          <Link to="/contact"
            className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg shadow-lg opacity-0 animate-scale-in [animation-delay:400ms] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2">
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* ── Quick Access Cards ── */}
      <section className="section-padding" aria-label="Quick access">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <Link key={card.to} to={card.to}
                className="group bg-card rounded-lg p-8 text-center border border-border opacity-0 animate-fade-in-up hover:shadow-[var(--shadow-elevated)] hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ animationDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{card.title}</h2>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="pt-10 pb-20 bg-accent/20" aria-label="Photo gallery">
        <div className="container-narrow">

          {/* Header row — reduced top spacing */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-4">
            <div className="opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                <Camera className="h-4 w-4" />
                <span>Photo Gallery</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Life at Te Puke<br className="hidden md:block" /> Holiday Park
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-base opacity-0 animate-fade-in-up [animation-delay:100ms]">
              A real glimpse of your new home — comfortable, welcoming, surrounded by the beauty of Te Puke.
            </p>
          </div>

          {/* Featured full-width photo (outdoor grounds) */}
          <div
            className="relative group overflow-hidden rounded-3xl h-[50vh] min-h-[320px] mb-6 shadow-xl opacity-0 animate-fade-in-up [animation-delay:150ms] cursor-pointer"
            onClick={() => setLightboxIdx(-1)}   // -1 = featured
          >
            <img src={featuredImg} alt={featuredLabel}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 text-white flex items-end gap-3">
              <span className="bg-primary/90 backdrop-blur-sm text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                Park Grounds
              </span>
              <p className="font-heading text-xl font-bold drop-shadow-lg">{featuredLabel}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-black/40 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
                Click to enlarge
              </span>
            </div>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {CATS.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${filter === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-background text-foreground border-border hover:border-primary/50 hover:text-primary"
                  }`}>
                {cat}
              </button>
            ))}
            <span className="ml-auto text-xs text-muted-foreground self-center">
              {filtered.length} photos
            </span>
          </div>

          {/* True CSS columns masonry — images at natural ratio, captions on hover */}
          <div className="[column-count:1] sm:[column-count:2] md:[column-count:3] [column-gap:1rem]">
            {filtered.map((photo, i) => (
              <div key={`${filter}-${i}`}
                className="group relative overflow-hidden rounded-2xl break-inside-avoid mb-4 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setLightboxIdx(i)}>
                <img src={photo.src} alt={photo.label}
                  className="w-full block transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={i < 4 ? "eager" : "lazy"} />
                {/* Caption overlay — always visible at bottom, brighter on hover */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-10 pb-4 px-4
                               translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-semibold leading-snug">{photo.label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{photo.cat}</p>
                </div>
                {/* Enlarge hint */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Strip — brand green, prominent */}
          <div className="mt-14 rounded-3xl overflow-hidden shadow-xl">
            <div className="bg-primary px-8 py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Ready to call this home?
                </p>
                <p className="text-primary-foreground/80 text-lg">
                  Contact us for availability, weekly rates and group bookings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link to="/contact"
                  className="inline-block bg-secondary text-secondary-foreground font-bold px-10 py-4 rounded-xl text-lg shadow-lg hover:scale-105 hover:bg-secondary/90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 text-center">
                  Get in Touch →
                </Link>
                <a href="tel:02108917258"
                  className="inline-block bg-white/10 border border-white/30 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white/20 transition-all duration-200 text-center">
                  📞 021 089 17258
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (() => {
        const isFeatured = lightboxIdx === -1;
        const photo = isFeatured
          ? { src: featuredImg, label: featuredLabel, cat: "Outdoors" }
          : filtered[lightboxIdx];
        if (!photo) return null;
        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
            role="dialog" aria-modal="true" aria-label="Image lightbox">
            {/* Close */}
            <button onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close lightbox">
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            {!isFeatured && (
              <button onClick={e => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous photo">
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <div className="max-w-5xl max-h-full flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
              <img src={photo.src} alt={photo.label}
                className="max-h-[80vh] max-w-full object-contain rounded-2xl shadow-2xl"
                loading="eager" />
              <div className="text-center">
                <p className="text-white font-semibold text-lg">{photo.label}</p>
                <p className="text-white/50 text-sm">{photo.cat}</p>
                {!isFeatured && (
                  <p className="text-white/40 text-xs mt-1">
                    {lightboxIdx + 1} / {filtered.length} — use ← → or arrow buttons to navigate
                  </p>
                )}
              </div>
            </div>

            {/* Next */}
            {!isFeatured && (
              <button onClick={e => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next photo">
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
