import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { translations } from "@/i18n/translations";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{t(translations.contact.metaTitle)}</title>
        <meta name="description" content={t(translations.contact.metaDesc)} />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/contact" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">{t(translations.contact.title)}</h1>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:100ms]">{t(translations.contact.subtitle)}</h2>
            <p className="text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:200ms] max-w-2xl mx-auto">{t(translations.contact.desc)}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 opacity-0 animate-fade-in-up [animation-delay:300ms]">
            <div className="space-y-8">
              <div className="bg-accent rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6" id="contact-details-heading">{t(translations.contact.getInTouch)}</h2>
                <div className="space-y-4">
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t(translations.contact.address)}</p>
                      <p className="text-sm text-muted-foreground">581 Jellicoe Street, Te Puke 3119</p>
                      <p className="text-xs text-primary mt-1">{t(translations.contact.getDirections)}</p>
                    </div>
                  </a>
                  <a href="tel:02108917258" className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t(translations.contact.phone)}</p>
                      <p className="text-sm text-primary font-medium">021 0891 7258</p>
                      <p className="text-xs text-muted-foreground">{t(translations.contact.callDirectly)}</p>
                    </div>
                  </a>
                  <a href="https://wa.me/642108917258?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20at%20Te%20Puke%20Holiday%20Park" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t(translations.contact.whatsapp)}</p>
                      <p className="text-sm text-green-600 font-medium">{t(translations.contact.chatNow)}</p>
                      <p className="text-xs text-muted-foreground">{t(translations.contact.quickResponses)}</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t(translations.contact.responseTime)}</h3>
                    <p className="text-sm text-muted-foreground">{t(translations.contact.responseDesc)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
              <div className="p-6 md:p-8 border-b border-border">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t(translations.contact.ourLocation)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t(translations.contact.locationDesc)}</p>
                <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {t(translations.contact.getDirectionsBtn)}
                </a>
              </div>
              <div className="h-64 sm:h-80 w-full">
                <iframe title="Te Puke Holiday Park location map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5!2d176.325!3d-37.783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e574df79a5455%3A0x5e38324ef1ef71a3!2s581%20Jellicoe%20Street%2C%20Te%20Puke%203119%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
