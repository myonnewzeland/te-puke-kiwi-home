import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/WsMF2bGoUd5vLcfm9?g_st=aw";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [messageLength, setMessageLength] = useState(0);

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'from_name':
        if (!value.trim()) error = 'Name is required';
        else if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'reply_to':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
        break;
      case 'subject':
        if (!value.trim()) error = 'Subject is required';
        else if (value.trim().length < 3) error = 'Subject must be at least 3 characters';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
        break;
    }

    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFormErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'message') {
      setMessageLength(value.length);
    }
    if (touched[name]) {
      const error = validateField(name, value);
      setFormErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Validate all fields
    const errors: { [key: string]: string } = {};
    let hasErrors = false;

    ['from_name', 'reply_to', 'subject', 'message'].forEach(fieldName => {
      const value = formData.get(fieldName) as string;
      const error = validateField(fieldName, value);
      if (error) {
        errors[fieldName] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setFormErrors(errors);
      setTouched({
        from_name: true,
        reply_to: true,
        subject: true,
        message: true
      });
      setSending(false);
      toast.error("Please fix the errors in the form and try again.");
      return;
    }

    try {
      await emailjs.sendForm(
        'service_vsteji2',
        'template_mctrp0o',
        form,
        'rr7GRl2yAz-lkyzdC'
      );
      toast.success("Message sent! We'll get back to you within 24 hours.");
      form.reset();
      setFormErrors({});
      setTouched({});
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Failed to send message. Please try again or call us directly.");
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
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Send us a Message</h3>
              <p className="text-sm text-muted-foreground mb-6">We typically respond within 24 hours during business days.</p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="from_name" className="block text-sm font-semibold text-foreground mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="John Smith"
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${formErrors.from_name ? 'border-destructive focus:ring-destructive/50' : 'border-input'
                      }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.from_name && !!formErrors.from_name}
                    aria-describedby={formErrors.from_name ? 'from_name-error' : undefined}
                  />
                  {touched.from_name && formErrors.from_name && (
                    <p id="from_name-error" className="text-xs text-destructive mt-1.5" role="alert">
                      {formErrors.from_name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reply_to" className="block text-sm font-semibold text-foreground mb-1.5">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="john.smith@example.com"
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${formErrors.reply_to ? 'border-destructive focus:ring-destructive/50' : 'border-input'
                      }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.reply_to && !!formErrors.reply_to}
                    aria-describedby={formErrors.reply_to ? 'reply_to-error' : undefined}
                  />
                  {touched.reply_to && formErrors.reply_to && (
                    <p id="reply_to-error" className="text-xs text-destructive mt-1.5" role="alert">
                      {formErrors.reply_to}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-1.5">
                    Subject <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    placeholder="Accommodation inquiry"
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow ${formErrors.subject ? 'border-destructive focus:ring-destructive/50' : 'border-input'
                      }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.subject && !!formErrors.subject}
                    aria-describedby={formErrors.subject ? 'subject-error' : undefined}
                  />
                  {touched.subject && formErrors.subject && (
                    <p id="subject-error" className="text-xs text-destructive mt-1.5" role="alert">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1.5">
                    Your Message <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={2000}
                    placeholder="Tell us about your dates, group size, and room requirements..."
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-shadow ${formErrors.message ? 'border-destructive focus:ring-destructive/50' : 'border-input'
                      }`}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    aria-invalid={touched.message && !!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                  />
                  {touched.message && formErrors.message && (
                    <p id="message-error" className="text-xs text-destructive mt-1.5" role="alert">
                      {formErrors.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground text-right mt-1">
                    {messageLength} / 2000 characters
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <button
                    type="submit"
                    disabled={sending}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>

                <div className="flex items-start gap-2 bg-accent/30 rounded-lg p-3 border border-accent/50">
                  <Clock className="h-4 w-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-foreground">
                    <strong>Response time:</strong> We aim to reply to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info Right Column */}
            <div className="space-y-8">
              <div className="bg-accent rounded-xl p-6 md:p-8 border border-border shadow-sm">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  {/* Location */}
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">581 Jellicoe Street, Te Puke 3119</p>
                      <p className="text-xs text-primary mt-1">Get directions →</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:02108917258"
                    className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-sm text-primary font-medium">021 0891 7258</p>
                      <p className="text-xs text-muted-foreground">Call us directly</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/642108917258?text=Hi%2C%20I%27m%20interested%20in%20accommodation%20at%20Te%20Puke%20Holiday%20Park"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-sm text-green-600 font-medium">Chat now</p>
                      <p className="text-xs text-muted-foreground">Quick responses</p>
                    </div>
                  </a>

                </div>
              </div>

              {/* Map & Directions */}
              <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                <div className="p-6 md:p-8 border-b border-border">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Our Location</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Easy access from State Highway 2. Click below for GPS navigation.
                  </p>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                </div>
                <div className="h-64 sm:h-80 w-full">
                  <iframe
                    title="Te Puke Holiday Park location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.5!2d176.325!3d-37.783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6e574df79a5455%3A0x5e38324ef1ef71a3!2s581%20Jellicoe%20Street%2C%20Te%20Puke%203119%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
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
