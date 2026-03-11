import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Home, Briefcase, Users } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-kiwifruit.jpg";
import heroImgWebp from "@/assets/hero-kiwifruit.webp";

const cards = [
  {
    icon: Home,
    title: "Accommodation",
    desc: "Pods, caravans & cabins — comfortable and affordable stays.",
    to: "/accommodation",
  },
  {
    icon: Briefcase,
    title: "Seasonal Work",
    desc: "Find kiwifruit picking & pruning work in the Bay of Plenty.",
    to: "/seasonal-work",
  },
  {
    icon: Users,
    title: "RSE Workers",
    desc: "Dedicated accommodation solutions for RSE employers.",
    to: "/rse-accommodation",
  },
];

const Index = () => (
  <Layout>
    <Helmet>
      <title>Te Puke Holiday Park — Affordable Accommodation in the Kiwifruit Capital</title>
      <meta name="description" content="Budget-friendly accommodation for seasonal workers, RSE workers and backpackers in Te Puke, Bay of Plenty, New Zealand. Book your stay today." />
      <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/" />
    </Helmet>

    {/* Hero */}
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden" aria-label="Hero section with kiwifruit orchards background">
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={heroImgWebp} type="image/webp" />
        <img
          src={heroImg}
          alt="Beautiful kiwifruit orchards in Bay of Plenty, New Zealand - the perfect setting for your holiday accommodation"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
      </picture>
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight opacity-0 animate-fade-in-up">
          Your Home Away From Home in the Kiwifruit Capital of the World
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body opacity-0 animate-fade-in-up [animation-delay:200ms]">
          Affordable accommodation in Te Puke — the perfect base for seasonal workers, backpackers and adventurers exploring New Zealand's Bay of Plenty.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg shadow-lg opacity-0 animate-scale-in [animation-delay:400ms] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        >
          Book Your Stay
        </Link>
      </div>
    </section>

    {/* Quick Access Cards */}
    <section className="section-padding" aria-label="Quick access to accommodation and services">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <Link
              key={card.to}
              to={card.to}
              className={`group bg-card rounded-lg p-8 text-center border border-border opacity-0 animate-fade-in-up hover:shadow-[var(--shadow-elevated)] hover:scale-[1.03] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {card.title}
              </h2>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
