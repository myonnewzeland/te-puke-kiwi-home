import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, Send, ExternalLink, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;

    try {
      // Reemplaza estos valores con tus credenciales reales de EmailJS (https://www.emailjs.com/)
      // Service ID, Template ID, Public Key
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // <-- INGRESA TU SERVICE ID AQUÍ
        'YOUR_TEMPLATE_ID', // <-- INGRESA TU TEMPLATE ID AQUÍ
        form,
        'rr7GRl2yAz-lkyzdC' // <-- USER PUBLIC KEY
      );
      toast.success("Message sent! We'll get back to you within 24 hours.");
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please check the EmailJS configuration or try a different contact method.");
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Te Puke Holiday Park | Book Your Stay</title>
        <meta name="description" content="Contact Te Puke Holiday Park to book affordable worker and backpacker accommodation in Te Puke, Bay of Plenty. Call 021 0891 7258 or send us a message today." />
        <link rel="canonical" href="https://www.tepukeholidaypark.co.nz/contact" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow max-w-6xl">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up">Contact Te Puke Holiday Park</h1>
            <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:100ms]">
              Book Te Puke Accommodation for Workers and Backpackers
            </h2>
            <p className="text-muted-foreground opacity-0 animate-fade-in-up [animation-delay:200ms] max-w-2xl mx-auto">
              Whether you're a seasonal worker, backpacker or RSE employer — get in touch to book your stay. Fill out the form below or contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 opacity-0 animate-fade-in-up [animation-delay:300ms]">

            {/* Native Contact Form */}
            <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8 flex flex-col justify-center">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input id="user_name" name="user_name" required maxLength={100} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input id="user_email" name="user_email" type="email" required maxLength={255} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                  <input id="subject" name="subject" required maxLength={200} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="What are you inquiring about?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea id="message" name="message" rows={5} required maxLength={2000} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow" placeholder="Tell us about your dates, group size, and room requirements..." />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 mt-2"
                >
                  <Send className="h-4 w-4" />
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5 mt-4">
                  <Clock className="h-3.5 w-3.5" /> We aim to reply to all inquiries within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Info Right Column */}
            <div className="space-y-8">
              <div className="bg-accent rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                  Find Us in Te Puke, Bay of Plenty
                </h2>
                <div className="space-y-6">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Te Puke Holiday Park</p>
                      <p className="text-muted-foreground">581 Jellicoe Street, Te Puke<br />PO BOX 10</p>
                    </div>
                  </a>

                  <a
                    href="tel:02108917258"
                    className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Phone</p>
                      <p className="text-primary font-medium">021 0891 7258</p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/642108917258?text=Hi%2C%20I%27m%20interested%20in%20your%20accommodation%20at%20Te%20Puke%20Holiday%20Park.%20Could%20you%20please%20send%20me%20more%20information%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all group"
                  >
                    <div className="bg-primary/10 p-3 rounded-full shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">WhatsApp</p>
                      <p className="text-primary font-medium">Chat with us</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Map & Directions */}
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm flex flex-col h-full">
                <div className="p-6 md:p-8 border-b border-border">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Map & Directions</h3>
                  <p className="text-muted-foreground">
                    Find us easily in Te Puke, Bay of Plenty – tap the map or the link below to open directions in Google Maps on your phone.
                  </p>
                </div>
                <div className="h-64 sm:h-80 w-full flex-grow">
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
                <div className="p-4 bg-muted/50 text-center">
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
