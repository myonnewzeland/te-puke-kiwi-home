import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Te Puke Holiday Park | Book Your Stay</title>
        <meta name="description" content="Contact Te Puke Holiday Park to book affordable worker and backpacker accommodation in Te Puke, Bay of Plenty. Call 021 0891 7258 or send us a message today." />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/contact" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-5xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Contact Te Puke Holiday Park</h1>

          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
            Book Te Puke Accommodation for Workers and Backpackers
          </h2>
          <p className="text-muted-foreground mb-10">
            Whether you're a seasonal worker, backpacker or RSE employer — get in touch to book your stay. Fill out the form below or contact us directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input id="name" name="name" required maxLength={100} className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input id="email" name="email" type="email" required maxLength={255} className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <input id="subject" name="subject" required maxLength={200} className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea id="message" name="message" rows={5} required maxLength={2000} className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </button>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> We aim to reply within 24 hours.
              </p>
            </form>

            {/* Contact Info + Map */}
            <div className="space-y-6">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Find Us in Te Puke, Bay of Plenty
              </h2>

              <div className="bg-accent rounded-lg p-6 border border-border space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Te Puke Holiday Park</p>
                    <p className="text-sm text-muted-foreground">581 Jellicoe Street, Te Puke<br />PO BOX 10</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <a href="tel:02108917258" className="text-sm text-primary hover:underline">021 0891 7258</a>
                  </div>
                </div>
              </div>

              {/* Map & Directions */}
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3">Map & Directions</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Find us easily in Te Puke, Bay of Plenty – tap the map or the link below to open directions in Google Maps on your phone.
                </p>
                <div className="rounded-lg overflow-hidden border border-border h-64 md:h-80">
                  <iframe
                    title="Te Puke Holiday Park Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5!2d176.325!3d-37.783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e574df79a5455%3A0x5e38324ef1ef71a3!2s581%20Jellicoe%20Street%2C%20Te%20Puke%203119%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary font-semibold mt-3 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
