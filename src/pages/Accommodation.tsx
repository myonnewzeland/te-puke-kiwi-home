import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { AlertTriangle, UtensilsCrossed, Bath, WashingMachine, Wifi, Car, TreePine, MapPin, DollarSign, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import podsImg from "@/assets/pods.jpg";
import caravansImg from "@/assets/caravans.jpg";
import cabinsImg from "@/assets/cabins.jpg";

const accommodations = [
  {
    img: podsImg,
    imgWebp: "/assets/pods.webp",
    name: "Pods",
    badge: "Most Popular",
    desc: "Perfect for solo travellers or couples who want a cosy, private space at an affordable price. Pods typically include a bed, power, lighting and access to shared facilities such as bathrooms, kitchen and lounge.",
  },
  {
    img: caravansImg,
    imgWebp: "/assets/caravans.webp",
    name: "Caravans",
    desc: "Ideal for workers or friends travelling together. Our caravans offer more space and storage, with comfortable beds and access to all shared park facilities.",
  },
  {
    img: cabinsImg,
    imgWebp: "/assets/cabins.webp",
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

      <section className="section-padding" aria-labelledby="accommodation-heading">
        <div className="container-narrow">
          <h1 id="accommodation-heading" className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in-up">
            Accommodation at Te Puke Holiday Park
          </h1>

          <p className="text-lg text-foreground/80 mb-8 max-w-3xl opacity-0 animate-fade-in-up [animation-delay:100ms]">
            Te Puke Holiday Park offers simple, comfortable and affordable accommodation in the kiwifruit capital of New Zealand.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list" aria-label="Accommodation options">
              {accommodations.map((a, i) => (
                <article
                  key={a.name}
                  className="bg-card rounded-lg overflow-hidden border border-border shadow-[var(--shadow-card)] opacity-0 animate-scale-in hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)] hover:border-primary/30 transition-all duration-300 flex flex-col focus-within:ring-2 focus-within:ring-primary"
                  style={{ animationDelay: `${300 + i * 150}ms` }}
                  role="listitem"
                >
                  <div className="relative overflow-hidden shrink-0">
                    <picture className="block w-full h-full">
                      <source srcSet={a.imgWebp} type="image/webp" />
                      <img
                        src={a.img}
                        alt={`${a.name} accommodation at Te Puke Holiday Park`}
                        loading="lazy"
                        className="w-full h-52 object-cover hover:scale-110 transition-transform duration-500"
                        width="400"
                        height="300"
                      />
                    </picture>
                    {a.badge && (
                      <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full" aria-label="Most popular choice">
                        {a.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">{a.name}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">{a.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-16 bg-accent/30 rounded-2xl p-6 md:p-10 border border-border/50">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">Facilities Included</h2>
            <p className="text-foreground/80 mb-8 max-w-2xl opacity-0 animate-fade-in-up [animation-delay:650ms]">
              When you stay at Te Puke Holiday Park, you get access to practical facilities that make long stays easier. These facilities are designed for seasonal workers, backpackers and RSE crews who need a reliable place to come home to each day.
            </p>
            <ul ref={facilitiesRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6" role="list" aria-label="Park facilities">
              {facilities.map((f, i) => (
                <li
                  key={f.label}
                  data-reveal
                  className="facility-card group flex items-center gap-4 bg-background rounded-xl p-4 md:p-5 border border-border/50 hover:border-primary/30 transition-colors"
                  style={{ "--i": i } as React.CSSProperties}
                  role="listitem"
                >
                  <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors" aria-hidden="true">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm md:text-base font-medium text-foreground">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Two Column Section for RSE & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm opacity-0 animate-fade-in-up [animation-delay:800ms]">
              <div className="bg-secondary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-secondary-foreground" />
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

            <div className="bg-card p-6 md:p-8 rounded-2xl border border-border/50 shadow-sm opacity-0 animate-fade-in-up [animation-delay:900ms]">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-primary" />
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
