import { Link } from "react-router-dom";
import { Home, Briefcase, Users } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-kiwifruit.jpg";

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
    {/* Hero */}
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Kiwifruit orchards in Bay of Plenty, New Zealand"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          Your Home Away From Home in the Kiwifruit Capital of the World
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
          Affordable accommodation in Te Puke — the perfect base for seasonal workers, backpackers and adventurers exploring New Zealand's Bay of Plenty.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-secondary text-secondary-foreground font-semibold px-8 py-3.5 rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          Book Your Stay
        </Link>
      </div>
    </section>

    {/* Quick Access Cards */}
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group bg-card rounded-lg p-8 text-center transition-all hover:shadow-[var(--shadow-elevated)] border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground mb-4">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">{card.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
