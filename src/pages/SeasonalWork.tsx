import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import seasonalImg from "@/assets/seasonal-work.jpg";

const SeasonalWork = () => (
  <Layout>
    {/* Banner */}
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img src={seasonalImg} alt="Kiwifruit picking in Bay of Plenty" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
          Te Puke: Kiwifruit Capital of the World
        </h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
          Te Puke and the wider Bay of Plenty region offer year-round seasonal work in the kiwifruit industry. Whether you're here for the harvest or the pruning season, there's always an opportunity to earn while enjoying life in beautiful New Zealand.
        </p>

        {/* Work Cycle */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">The Work Cycle</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="bg-accent rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-body font-semibold text-foreground">Harvest Season</h3>
            </div>
            <p className="text-sm text-muted-foreground">April – June. The busiest time, with high demand for pickers across orchards and packhouses.</p>
          </div>
          <div className="bg-accent rounded-lg p-6 border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-body font-semibold text-foreground">Pruning Season</h3>
            </div>
            <p className="text-sm text-muted-foreground">July – March. Steady work thinning and pruning vines to prepare for the next season's crop.</p>
          </div>
        </div>

        {/* Visa Notice */}
        <div className="bg-muted rounded-lg p-5 mb-10 border border-border">
          <p className="text-sm text-foreground">
            <strong>Visa requirement:</strong> You must hold a valid New Zealand work visa to be employed in seasonal work. Check the{" "}
            <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-primary underline">
              Immigration NZ
            </a>{" "}
            website for details.
          </p>
        </div>

        {/* PickNZ */}
        <div className="flex items-center gap-3 mb-10">
          <ExternalLink className="h-5 w-5 text-primary shrink-0" />
          <p className="text-sm text-foreground">
            Looking for job listings? Visit{" "}
            <a href="https://www.picknz.co.nz" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline">
              PickNZ.co.nz
            </a>{" "}
            to find seasonal employment opportunities.
          </p>
        </div>

        {/* Location advantage */}
        <div className="bg-card rounded-lg p-6 border border-border shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="h-5 w-5 text-secondary" />
            <h3 className="font-heading text-lg font-bold text-foreground">Prime Location</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            Te Puke Holiday Park is ideally situated close to the major kiwifruit packhouses and orchards. Many of our guests walk or bike to work — saving time and money on their daily commute.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Book Your Stay
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default SeasonalWork;
