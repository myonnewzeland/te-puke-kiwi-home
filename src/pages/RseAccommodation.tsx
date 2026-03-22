import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { CheckCircle, Gift } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const RseAccommodation = () => {
  const { t } = useLanguage();

  const facilities = [
    t(translations.rse.fac1),
    t(translations.rse.fac2),
    t(translations.rse.fac3),
    t(translations.rse.fac4),
    t(translations.rse.fac5),
    t(translations.rse.fac6),
    t(translations.rse.fac7),
    t(translations.rse.fac8),
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t(translations.rse.metaTitle)}</title>
        <meta name="description" content={t(translations.rse.metaDesc)} />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/rse-accommodation" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2 opacity-0 animate-fade-in">{t(translations.rse.forEmployers)}</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:100ms]">{t(translations.rse.heroTitle)}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-up [animation-delay:200ms]">{t(translations.rse.intro)}</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:300ms]">{t(translations.rse.housingTitle)}</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:400ms]">{t(translations.rse.housingDesc)}</p>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6 opacity-0 animate-slide-in-left [animation-delay:500ms]">{t(translations.rse.facilitiesTitle)}</h2>
          <ul className="space-y-3 mb-10">
            {facilities.map((f, i) => (
              <li key={f} className="flex items-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: `${600 + i * 80}ms` }}>
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:1200ms]">{t(translations.rse.welcomeTitle)}</h2>
          <div className="bg-accent rounded-lg p-6 border border-border mb-10 opacity-0 animate-scale-in [animation-delay:1300ms]">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="h-5 w-5 text-secondary" />
              <h3 className="font-heading text-lg font-bold text-foreground">{t(translations.rse.welcomeSubtitle)}</h3>
            </div>
            <p className="text-sm text-muted-foreground">{t(translations.rse.welcomeDesc)}</p>
          </div>

          <div className="text-center opacity-0 animate-scale-in [animation-delay:1400ms]">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">{t(translations.rse.bookTitle)}</h3>
            <a href="/contact" className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg shadow-lg hover:scale-105 transition-transform">{t(translations.rse.bookCta)}</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RseAccommodation;
