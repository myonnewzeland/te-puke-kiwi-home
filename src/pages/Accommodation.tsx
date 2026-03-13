import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, UtensilsCrossed, Bath, WashingMachine, Wifi, Car, TreePine, MapPin, DollarSign, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";


const IMG_BASE = "https://im.tepukeholidaypark.co.nz/WhatsApp%20Image%202026-03-13%20at%2016.17";

const heroImg = `${IMG_BASE}.15%20(1).webp`;

const accommodations = [
  {
    img: "https://im.tepukeholidaypark.co.nz/pods.webp",
    name: "Pods",
    badge: "Most Popular",
    desc: "Perfect for solo travellers or couples who want a cosy, private space at an affordable price. Pods typically include a bed, power, lighting and access to shared facilities such as bathrooms, kitchen and lounge.",
  },
  {
    img: "https://im.tepukeholidaypark.co.nz/WhatsApp%20Image%202026-03-13%20at%2016.17.15%20(1).webp",
    name: "Caravans",
    desc: "Ideal for workers or friends travelling together. Our caravans offer more space and storage, with comfortable beds and access to all shared park facilities.",
  },
  {
    img: `${IMG_BASE}.16%20(1).webp`,
    name: "Cabins",
    desc: "Great for small groups, families or long-stay workers who want extra comfort. Cabins may include basic furnishings such as beds, a small table and chairs, with easy access to facilities.",
  },
];

const facilities = [
  { icon: UtensilsCrossed, label: "Shared Kitchens" },
  { icon: Bath, label: "Hot Showers" },
  { icon: WashingMachine, label: "Laundry" },
  { icon: Wifi, label: "WiFi Access" },
  { icon: Car, label: "On-site Parking" },
  { icon: TreePine, label: "Outdoor Areas" },
];

const Accommodation = () => {
  const facilitiesRef = useScrollReveal<HTMLUListElement>();
  const faqRef = useScrollReveal<HTMLDivElement>();

  return (
    <Layout>
      <Helmet>
        <title>Accommodation in Te Puke Holiday Park – Affordable Pods, Caravans & Cabins</title>
        <meta name="description" content="Stay at Te Puke Holiday Park in the kiwifruit capital of New Zealand. Affordable pods, caravans and cabins for seasonal workers, RSE crews and backpackers, close to Te Puke orchards." />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/accommodation" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden" aria-labelledby="accommodation-heading">
        <picture className="absolute inset-0 w-full h-full">
          <img
            src={heroImg}
            alt="Beautiful view at Te Puke Holiday Park"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} aria-hidden="true" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 id="accommodation-heading" className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight opacity-0 animate-fade-in-up">
            Accommodation at Te Puke Holiday Park
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 font-body opacity-0 animate-fade-in-up [animation-delay:200ms]">
            Simple, comfortable and affordable stays in the kiwifruit capital of New Zealand.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">

          <p className="text-lg text-foreground/80 mb-10 max-w-3xl opacity-0 animate-fade-in-up [animation-delay:300ms] mx-auto text-center">
            Whether you are here for seasonal work, travelling in a group, or exploring the Bay of Plenty, we provide a safe and friendly base with everything you need.
          </p>

          {/* Notice */}
          <div className="flex items-start gap-3 bg-accent rounded-lg p-4 mb-12 border border-border opacity-0 animate-fade-in-up [animation-delay:150ms]" role="alert">
            <AlertTriangle className="h-5 w-5 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-foreground">
              <strong>Please note:</strong> Guests are required to bring their own bedding, linen, and cooking utensils. We provide the space — you bring the comfort!
            </p>
          </div>

          {/* Accommodation Cards */}
          <div className="mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:200ms]">
              Pods, Caravans and Cabins
            </h2>
            <p className="text-foreground/80 mb-8 opacity-0 animate-fade-in-up [animation-delay:250ms]">
              We offer a mix of pods, caravans and cabins so you can choose the option that suits your budget and style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list" aria-label="Accommodation options">
              {accommodations.map((a, i) => (
                <article
                  key={a.name}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-2xl opacity-0 animate-scale-in transition-all duration-500 flex flex-col focus-within:ring-2 focus-within:ring-primary"
                  style={{ animationDelay: `${400 + i * 150}ms` }}
                  role="listitem"
                >
                  <div className="relative overflow-hidden shrink-0 h-64">
                    <img
                      src={a.img}
                      alt={`${a.name} accommodation at Te Puke Holiday Park`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      width="400"
                      height="300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    {a.badge && (
                      <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg" aria-label="Most popular choice">
                        {a.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-8 flex-grow flex flex-col bg-card z-10 relative group-hover:-translate-y-2 transition-transform duration-500 rounded-b-2xl">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{a.name}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">{a.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-20 bg-accent/20 rounded-3xl p-8 md:p-12 border border-border/50 shadow-inner">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 text-center opacity-0 animate-fade-in-up [animation-delay:600ms]">Facilities Included</h2>
            <p className="text-foreground/80 mb-12 max-w-2xl mx-auto text-center text-lg opacity-0 animate-fade-in-up [animation-delay:650ms]">
              When you stay at Te Puke Holiday Park, you get access to practical facilities that make long stays easier. These facilities are designed for seasonal workers, backpackers and RSE crews who need a reliable home base.
            </p>
            <ul ref={facilitiesRef} className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" role="list" aria-label="Park facilities">
              {facilities.map((f, i) => (
                <li
                  key={f.label}
                  data-reveal
                  className="facility-card group flex flex-col items-center gap-4 bg-background rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ "--i": i } as React.CSSProperties}
                  role="listitem"
                >
                  <div className="bg-primary/10 p-5 rounded-full shrink-0 group-hover:bg-primary group-hover:text-primary-foreground text-primary transition-colors duration-300" aria-hidden="true">
                    <f.icon className="h-8 w-8" />
                  </div>
                  <span className="text-base md:text-lg font-bold text-foreground text-center">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two Column Section for RSE & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg opacity-0 animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "800ms" }}>
              <div className="bg-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md transform -rotate-6">
                <Users className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Perfect for Seasonal Work and RSE Crews</h2>
              <p className="text-foreground/80 mb-4">
                Our location in Te Puke makes it easy to get to kiwifruit orchards and packhouses across the Bay of Plenty.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-2 items-start text-foreground/80">
                  <span className="text-primary mt-1">•</span> Short drive to many local orchards and employers
                </li>
                <li className="flex gap-2 items-start text-foreground/80">
                  <span className="text-primary mt-1">•</span> Weekly and long-stay options available
                </li>
                <li className="flex gap-2 items-start text-foreground/80">
                  <span className="text-primary mt-1">•</span> Flexible arrangements for RSE employers managing larger groups
                </li>
              </ul>
              <p className="text-sm text-foreground/70 italic">
                If you are an RSE employer looking for safe and consistent accommodation for your team, visit our <Link to="/rse-accommodation" className="text-primary hover:underline font-medium">RSE Accommodation</Link> page or contact us.
              </p>
            </div>

            <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg opacity-0 animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "900ms" }}>
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-md transform rotate-6">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Location – Your Base in the Kiwifruit Capital</h2>
              <p className="text-foreground/80 mb-4">
                Te Puke Holiday Park is located at <strong>581 Jellicoe Street, Te Puke</strong> – on State Highway 2, right here in the heart of the kiwifruit capital and close to local shops and services.
              </p>
              <p className="text-foreground/80">
                From here you can easily travel to Tauranga, Papamoa and other beautiful Bay of Plenty destinations on your days off.
              </p>
            </div>
          </div>

          {/* Prices & Booking */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-3xl border border-primary/10 text-center mb-20 opacity-0 animate-scale-in [animation-delay:1000ms]">
            <DollarSign className="h-10 w-10 text-primary mx-auto mb-4 opacity-80" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Prices and Booking</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
              We keep our prices affordable for workers and travellers. Rates depend on room type, length of stay and season, so please contact us for current weekly and nightly prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">Weekly rates available</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">Short & long-term welcome</span>
              <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border/50 shadow-sm">Group arrangements</span>
            </div>

            <p className="text-foreground mb-8 text-lg">
              Click the <strong>Contact</strong> button below or call us on <a href="tel:02108917258" className="text-primary font-bold hover:underline">021 0891 7258</a> to ask about availability and rates.
            </p>

            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-md"
            >
              Book Your Stay →
            </Link>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10 opacity-0 animate-fade-in-up [animation-delay:1100ms]">Frequently Asked Questions</h2>
            <div ref={faqRef} className="space-y-6">
              {[
                { q: "What type of guests do you usually host?", a: "We mainly host seasonal workers, RSE workers and backpackers working or travelling around Te Puke and the Bay of Plenty." },
                { q: "Is there parking available?", a: "Yes, there is parking available on site for guests. Please let us know what kind of vehicle you have when you book." },
                { q: "Do you offer weekly rates for workers?", a: "Yes. We can offer weekly rates for seasonal workers and RSE crews. Contact us and tell us how many people and how long you plan to stay." },
                { q: "How far are you from kiwifruit orchards and packhouses?", a: "We are close to many orchards and packhouses around Te Puke, and just a short drive from other Bay of Plenty locations." },
                { q: "Can RSE employers book for a group?", a: "Yes. We regularly work with RSE employers to host groups of workers. Visit our RSE Accommodation page or contact us to discuss your needs." },
                { q: "Do you have Wi‑Fi?", a: "Yes, Wi‑Fi is available in the park. Details and conditions are provided when you check in." }
              ].map((faq, i) => (
                <div
                  key={i}
                  data-reveal
                  className="facility-card bg-card p-6 rounded-xl border border-border/50 shadow-sm text-left"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 flex gap-3 items-start">
                    <span className="text-secondary">Q.</span> {faq.q}
                  </h3>
                  <p className="text-foreground/80 flex gap-3 items-start">
                    <span className="text-primary/70 font-bold shrink-0">A.</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Accommodation;
