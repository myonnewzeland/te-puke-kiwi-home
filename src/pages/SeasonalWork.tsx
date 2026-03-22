import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Calendar, ExternalLink, MapPin, FileText } from "lucide-react";
import seasonalImg from "@/assets/seasonal-work.jpg";
import seasonalImgWebp from "@/assets/seasonal-work.webp";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const SeasonalWork = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{t(translations.work.metaTitle)}</title>
        <meta name="description" content={t(translations.work.metaDesc)} />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/seasonal-work" />
      </Helmet>

      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source srcSet={seasonalImgWebp} type="image/webp" />
          <img src={seasonalImg} alt="Kiwifruit picking in Bay of Plenty" className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 text-center px-4">
          <p className="text-primary-foreground/90 text-lg mb-2 font-body opacity-0 animate-fade-in [animation-delay:200ms]">{t(translations.work.subtitle)}</p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground opacity-0 animate-fade-in-up">{t(translations.work.heroTitle)}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <p className="text-muted-foreground mb-10 text-lg leading-relaxed opacity-0 animate-fade-in-up [animation-delay:100ms]">{t(translations.work.intro)}</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:200ms]">{t(translations.work.harvestTitle)}</h2>
          <div className="bg-accent rounded-lg p-6 border border-border mb-8 opacity-0 animate-fade-in-up [animation-delay:300ms]">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-body font-semibold text-foreground">{t(translations.work.peakDemand)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(translations.work.harvestDesc)}</p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:400ms]">{t(translations.work.pruningTitle)}</h2>
          <div className="bg-accent rounded-lg p-6 border border-border mb-8 opacity-0 animate-fade-in-up [animation-delay:500ms]">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-body font-semibold text-foreground">{t(translations.work.yearRound)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(translations.work.pruningDesc)}</p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:600ms]">{t(translations.work.visaTitle)}</h2>
          <div className="bg-muted rounded-lg p-5 mb-8 border border-border opacity-0 animate-fade-in-up [animation-delay:700ms]">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                {t(translations.work.visaDesc)}{" "}
                <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-primary underline">{t(translations.work.immigrationNz)}</a>{" "}
                {t(translations.work.visaEnd)}
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:800ms]">{t(translations.work.findJobsTitle)}</h2>
          <div className="flex items-center gap-3 mb-4 opacity-0 animate-fade-in-up [animation-delay:900ms]">
            <ExternalLink className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-foreground">
              {t(translations.work.findJobsDesc)}{" "}
              <a href="https://www.picknz.co.nz" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">PickNZ.co.nz</a>{" "}
              {t(translations.work.findJobsEnd)}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-[var(--shadow-card)] mb-4 opacity-0 animate-scale-in [animation-delay:1000ms] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="h-5 w-5 text-secondary" />
              <h3 className="font-heading text-lg font-bold text-foreground">{t(translations.work.locationTitle)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(translations.work.locationDesc)}</p>
          </div>

          <div className="text-center mt-12 opacity-0 animate-scale-in [animation-delay:1100ms]">
            <a href="/contact" className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform">{t(translations.work.bookYourStay)}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeasonalWork;
