import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, Gift } from "lucide-react";

const facilities = [
  "Competitively priced accommodation",
  "Fully equipped communal kitchen",
  "Laundry facilities",
  "Comfortable lounge area",
  "WiFi access",
  "Swimming pool (summer)",
  "Spacious gardens and outdoor areas",
];

const RseAccommodation = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">For Employers & Coordinators</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Short or Long Term Accommodation for Your Workers
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Te Puke Holiday Park provides reliable, comfortable accommodation for RSE (Recognised Seasonal Employer) workers. We work directly with employers and coordinators to ensure your team has a safe, well-equipped home base during their time in New Zealand.
        </p>

        {/* Facilities */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What We Offer</h2>
        <ul className="space-y-3 mb-10">
          {facilities.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        {/* Welcome Packs */}
        <div className="bg-accent rounded-lg p-6 border border-border mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="h-5 w-5 text-secondary" />
            <h3 className="font-heading text-lg font-bold text-foreground">Welcome Packs Available</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We can prepare Welcome Packs for new arrivals, including essential items to help your workers settle in quickly and feel at home from day one.
          </p>
        </div>

        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Book Workers In
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default RseAccommodation;
