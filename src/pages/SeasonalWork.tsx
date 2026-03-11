import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calendar, ExternalLink, MapPin, FileText } from "lucide-react";
import seasonalImg from "@/assets/seasonal-work.jpg";

const SeasonalWork = () => (
  <Layout>
    <Helmet>
      <title>Seasonal Kiwifruit Work Te Puke | Stay at Te Puke Holiday Park</title>
      <meta name="description" content="Working kiwifruit harvest or pruning in Te Puke? Stay at Te Puke Holiday Park – affordable accommodation close to orchards, packhouses and Bay of Plenty attractions." />
      <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/seasonal-work" />
    </Helmet>

    {/* Banner */}
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={seasonalImg} alt="Kiwifruit picking in Bay of Plenty" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 text-center px-4">
        <p className="text-primary-foreground/90 text-lg mb-2 font-body opacity-0 animate-fade-in [animation-delay:200ms]">Te Puke: Kiwifruit Capital of the World</p>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground opacity-0 animate-fade-in-up">
          Seasonal Kiwifruit Work in Te Puke, Bay of Plenty
        </h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed opacity-0 animate-fade-in-up [animation-delay:100ms]">
          Te Puke and the wider Bay of Plenty region offer year-round seasonal work in the kiwifruit industry. Whether you're here for the harvest or the pruning season, there's always an opportunity to earn while enjoying life in beautiful New Zealand.
        </p>

        {/* Harvest Season */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:200ms]">Kiwifruit Harvest Season: April to June</h2>
        <div className="bg-accent rounded-lg p-6 border border-border mb-8 opacity-0 animate-fade-in-up [animation-delay:300ms]">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-body font-semibold text-foreground">Peak Demand Period</h3>
          </div>
          <p className="text-sm text-muted-foreground">The busiest time of year, with high demand for pickers across orchards and packhouses throughout the Bay of Plenty. Most seasonal workers arrive in March to secure positions before the harvest begins in April.</p>
        </div>

        {/* Pruning Season */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:400ms]">Kiwifruit Pruning Season: July to March</h2>
        <div className="bg-accent rounded-lg p-6 border border-border mb-8 opacity-0 animate-fade-in-up [animation-delay:500ms]">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="font-body font-semibold text-foreground">Year-Round Opportunity</h3>
          </div>
          <p className="text-sm text-muted-foreground">Steady work thinning and pruning vines to prepare for the next season's crop. Pruning work runs for most of the year, making it ideal for longer stays.</p>
        </div>

        {/* Visa Requirements */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:600ms]">Work Visa Requirements for Seasonal Jobs</h2>
        <div className="bg-muted rounded-lg p-5 mb-8 border border-border opacity-0 animate-fade-in-up [animation-delay:700ms]">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              You must hold a valid New Zealand work visa to be employed in seasonal work. Working Holiday Visas, Recognised Seasonal Employer (RSE) work visas and other valid permits are accepted. Check the{" "}
              <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Immigration New Zealand
              </a>{" "}
              website for full details and eligibility.
            </p>
          </div>
        </div>

        {/* Where to Find Jobs */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4 opacity-0 animate-slide-in-left [animation-delay:800ms]">Where to Find Seasonal Kiwifruit Jobs</h2>
        <div className="flex items-center gap-3 mb-4 opacity-0 animate-fade-in-up [animation-delay:900ms]">
          <ExternalLink className="h-5 w-5 text-primary shrink-0" />
          <p className="text-sm text-foreground">
            Visit{" "}
            <a href="https://www.picknz.co.nz" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">
              PickNZ.co.nz
            </a>{" "}
            to browse current seasonal employment opportunities in the Bay of Plenty region.
          </p>
        </div>

        {/* Location advantage */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-[var(--shadow-card)] mb-4 opacity-0 animate-scale-in [animation-delay:1000ms] hover:shadow-[var(--shadow-elevated)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-5 w-5 text-secondary" />
            <h3 className="font-heading text-lg font-bold text-foreground">Prime Location for Workers</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Te Puke Holiday Park is ideally situated close to the major kiwifruit packhouses and orchards. Many of our guests walk or bike to work — saving time and money on their daily commute.
          </p>
        </div>

        <div className="text-center mt-12 opacity-0 animate-scale-in [animation-delay:1100ms]">
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:scale-105 transition-transform"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default SeasonalWork;
