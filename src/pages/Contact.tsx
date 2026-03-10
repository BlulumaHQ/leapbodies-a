import { useEffect, useState, FormEvent } from "react";
import Layout from "@/components/Layout";

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
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-main section-padding text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have a question? Want to join LeapBodies? Looking for personal training? Don't hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  <span className="font-bold text-foreground">Email:</span>{" "}
                  <a href="mailto:yes@leapbodies.com" className="text-primary hover:text-primary/80 transition-colors">
                    yes@leapbodies.com
                  </a>
                </p>
                <p>
                  <span className="font-bold text-foreground">Phone:</span>{" "}
                  <a href="tel:6047198887" className="text-primary hover:text-primary/80 transition-colors">
                    (604) 719-8887
                  </a>
                </p>
                <p>
                  <span className="font-bold text-foreground">Location:</span><br />
                  Richmond Sports & Fitness Center<br />
                  150 - 2251 No 5 Rd, Richmond, BC V6X 2S8
                </p>
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
                <div className="bg-accent rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">Thank you!</h3>
                  <p className="text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="w-full border border-input rounded px-4 py-3 text-sm bg-card focus:ring-2 focus:ring-ring focus:outline-none"
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
                        className="w-full border border-input rounded px-4 py-3 text-sm bg-card focus:ring-2 focus:ring-ring focus:outline-none"
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
                      className="w-full border border-input rounded px-4 py-3 text-sm bg-card focus:ring-2 focus:ring-ring focus:outline-none"
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
                      className="w-full border border-input rounded px-4 py-3 text-sm bg-card focus:ring-2 focus:ring-ring focus:outline-none resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition w-full sm:w-auto"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <h2 className="text-2xl font-bold text-center mb-8">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto">
            <iframe
              title="LeapBodies Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.1!3d49.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674d8a3c9a7e3%3A0x1234567890!2s2251+No+5+Rd%2C+Richmond%2C+BC+V6X+2S8!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
