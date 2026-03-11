import { Helmet } from "react-helmet-async";
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
    <Helmet>
      <title>RSE Worker Accommodation Te Puke | Group Housing in Bay of Plenty</title>
      <meta name="description" content="Comfortable, competitive RSE worker accommodation in Te Puke. Group housing with kitchen, laundry, WiFi, pool and gardens – ideal for employers and coordinators." />
      <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/rse-accommodation" />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">For Employers & Coordinators</p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          RSE Worker Accommodation in Te Puke, Bay of Plenty
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Te Puke Holiday Park provides reliable, comfortable accommodation for RSE (Recognised Seasonal Employer) workers. We work directly with employers and coordinators to ensure your team has a safe, well-equipped home base during their time in New Zealand.
        </p>

        {/* Short and Long-Term Housing */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Short and Long-Term Housing for RSE Teams</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Whether your team needs accommodation for a few weeks or an entire season, we offer flexible stays with predictable weekly costs and simple group bookings. Contact us directly to arrange housing for your workers — we'll handle the rest.
        </p>

        {/* Facilities */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Facilities Designed for Seasonal Worker Groups</h2>
        <ul className="space-y-3 mb-10">
          {facilities.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground">{f}</span>
            </li>
          ))}
        </ul>

        {/* Welcome Packs */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Welcome Packs for New Employees</h2>
        <div className="bg-accent rounded-lg p-6 border border-border mb-10">
          <div className="flex items-center gap-3 mb-3">
            <Gift className="h-5 w-5 text-secondary" />
            <h3 className="font-heading text-lg font-bold text-foreground">Essential Starter Kits</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            We can prepare Welcome Packs for new arrivals, including basic essentials and local information to help your workers settle in quickly and feel at home from day one.
          </p>
        </div>

        <div className="text-center">
          <h3 className="font-heading text-lg font-bold text-foreground mb-4">Book Workers In</h3>
          <Link
            to="/contact"
            className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Contact Us to Book
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default RseAccommodation;
