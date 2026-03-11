import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, UtensilsCrossed, Bath, WashingMachine, Wifi, Car, Tv, TreePine } from "lucide-react";
import podsImg from "@/assets/pods.jpg";
import caravansImg from "@/assets/caravans.jpg";
import cabinsImg from "@/assets/cabins.jpg";

const accommodations = [
  {
    img: podsImg,
    name: "Two Person Pods",
    badge: "Most Popular",
    desc: "Cosy and compact pods ideal for couples or solo travellers. A simple, affordable option with everything you need for a comfortable stay.",
  },
  {
    img: caravansImg,
    name: "Caravans",
    desc: "Spacious caravans sleeping up to 3 people. We also offer powered and non-powered sites if you're bringing your own caravan.",
  },
  {
    img: cabinsImg,
    name: "Large Cabins",
    desc: "Our largest option, sleeping up to 4 people — perfect for groups or families looking for more space and comfort.",
  },
];

const facilities = [
  { icon: UtensilsCrossed, label: "Modern Kitchen" },
  { icon: Bath, label: "Clean Bathrooms" },
  { icon: WashingMachine, label: "Laundry" },
  { icon: Wifi, label: "WiFi" },
  { icon: Car, label: "Free Secure Parking" },
  { icon: Tv, label: "TV Lounge" },
  { icon: TreePine, label: "Spacious Gardens" },
];

const Accommodation = () => (
  <Layout>
    <Helmet>
      <title>Accommodation Te Puke | Pods, Caravans & Cabins at Te Puke Holiday Park</title>
      <meta name="description" content="Affordable accommodation in Te Puke, Bay of Plenty. Choose from two-person pods, caravans or large cabins. Ideal for seasonal workers and backpackers." />
      <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/accommodation" />
    </Helmet>

    <section className="section-padding">
      <div className="container-narrow">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Accommodation at Te Puke Holiday Park
        </h1>

        {/* Notice */}
        <div className="flex items-start gap-3 bg-accent rounded-lg p-4 mb-10 border border-border">
          <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
          <p className="text-sm text-foreground">
            <strong>Please note:</strong> Guests are required to bring their own bedding, linen, and cooking utensils. We provide the space — you bring the comfort!
          </p>
        </div>

        {/* Accommodation Cards */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Choose Your Stay</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {accommodations.map((a) => (
            <div key={a.name} className="bg-card rounded-lg overflow-hidden border border-border shadow-[var(--shadow-card)]">
              <div className="relative">
                <img src={a.img} alt={a.name} className="w-full h-52 object-cover" />
                {a.badge && (
                  <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {a.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{a.name}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Communal Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {facilities.map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2 bg-accent rounded-lg p-5 text-center">
              <f.icon className="h-7 w-7 text-primary" />
              <span className="text-sm font-medium text-foreground">{f.label}</span>
            </div>
          ))}
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

export default Accommodation;
