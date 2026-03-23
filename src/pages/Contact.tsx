import { useEffect, useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact | LeapBodies";
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/mbdabbql", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src="/images/chewy-rowena.jpg" alt="LeapBodies founders" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-main section-padding text-primary-foreground">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Get Started
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl">
            Have a question? Want to join LeapBodies? Looking for personal training? Don't hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                <a href="mailto:yes@leapbodies.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">Email</p>
                    <p className="font-bold text-foreground">yes@leapbodies.com</p>
                  </div>
                </a>
                <a href="tel:6047198887" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">Phone</p>
                    <p className="font-bold text-foreground">(604) 719-8887</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">Location</p>
                    <p className="font-bold text-foreground">Richmond Sports & Fitness Center</p>
                    <p className="text-muted-foreground text-sm">150 - 2251 No 5 Rd, Richmond, BC V6X 2S8</p>
                  </div>
                </div>
              </div>

              <h3 className="font-bold mb-3">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bodybyrow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-bold transition-colors"
                >
                  @bodybyrow
                </a>
                <a
                  href="https://www.instagram.com/coach.chew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 text-sm font-bold transition-colors"
                >
                  @coach.chew
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-primary rounded-xl p-10 text-center">
                  <CheckCircle size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Thank you!</h3>
                  <p className="text-primary-foreground/80">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-5">
                  <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold mb-1">
                        First Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold mb-1">
                        Last Name <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-1">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-1">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-1">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 font-bold text-sm rounded-lg hover:bg-primary/80 transition shadow-md inline-flex items-center justify-center gap-2"
                  >
                    Send Message <ArrowRight size={18} />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">We'll respond within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px]">
        <iframe
          title="LeapBodies Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.1!3d49.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674d8a3c9a7e3%3A0x1234567890!2s2251+No+5+Rd%2C+Richmond%2C+BC+V6X+2S8!5e0!3m2!1sen!2sca!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Layout>
  );
};

export default Contact;
