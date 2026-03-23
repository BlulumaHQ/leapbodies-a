import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle, Dumbbell, Clock, Users, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

const classes = [
  {
    title: "Wake up and Go",
    schedule: "Monday & Wednesday 6AM",
    description:
      "Join us bright and early at 6am on Monday's and Wednesday's for a workout designed to energize your body and mind. Get ready to jumpstart your mornings and tackle the day ahead!",
    icon: Clock,
  },
  {
    title: "TT Power Hour",
    schedule: "Tuesday & Thursday",
    description:
      "Get stronger and leaner by developing your functional lifts and movements in this full-body workout. This class is focused on slow movements and longer holds to turn up the burn, get those muscles fired up and build strength and mobility.",
    icon: Dumbbell,
  },
  {
    title: "Leap Challenge",
    schedule: "Monday Evening",
    description:
      "Come explore movement through combinations of strength, plyometric, body weight, core, conditioning, and other training techniques. Every class will help you improve your fitness while having fun with your peers.",
    icon: Users,
  },
  {
    title: "The Weekender",
    schedule: "Saturday & Every Other Sunday",
    description:
      "Step into the weekend with a full-body workout that will help you burn fat and increase your heart rate. With a new workout every week, these classes are designed to refresh and rejuvenate your mind and body.",
    icon: CheckCircle,
  },
];

const benefits = [
  "NASM Certified Trainers",
  "Private Studio Environment",
  "New Workouts Every Session",
  "Supportive Community",
  "Flexible Schedule Options",
  "Personalized Attention",
];

const steps = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Contact us to learn about our programs and find the right class for your goals.",
  },
  {
    num: "02",
    title: "Try a Class",
    desc: "Come experience a session at our private studio inside Richmond Sports & Fitness.",
  },
  {
    num: "03",
    title: "Transform",
    desc: "Train consistently with our community and watch your body and mind get stronger.",
  },
];

const Index = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Home | LeapBodies";
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
      setFormSubmitted(true);
      form.reset();
    } catch {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>

      {/* ═══════ 1. HERO — Full viewport, single focused CTA ═══════ */}
      <section className="relative min-h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="LeapBodies trainer performing kettlebell exercise outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
        </div>
        <div className="relative container-main section-padding text-center py-20">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Richmond's First Speakeasy Fitness Studio
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 max-w-4xl mx-auto">
            Mind Sharp,<br />Body Strong
          </h1>
          <p className="text-lg lg:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every day is a new day that gives you the chance to be better than you were yesterday. Seek growth, not perfection.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:brightness-110 transition inline-flex items-center gap-2 shadow-lg"
            >
              Start Your Free Trial <ArrowRight size={18} />
            </Link>
            <a
              href="tel:6047198887"
              className="border-2 border-primary-foreground/50 text-primary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:bg-primary-foreground/10 transition inline-flex items-center gap-2"
            >
              <Phone size={16} /> (604) 719-8887
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ SOCIAL PROOF BAR ═══════ */}
      <section className="bg-primary py-5">
        <div className="container-main section-padding flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-primary-foreground text-sm">
          {benefits.map((b) => (
            <span key={b} className="flex items-center gap-2 whitespace-nowrap">
              <CheckCircle size={16} className="text-secondary flex-shrink-0" />
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════ 2. VALUE PROPOSITION — Split layout ═══════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/chewy-rowena.jpg"
                alt="Chewy and Rowena, founders of LeapBodies"
                className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold text-sm shadow-lg hidden sm:block">
                10+ Years Experience
              </div>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Fitness Philosophy</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6 leading-tight">
                We strive for progress,<br />not perfection.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Whatever goals you have in life, the key is to work hard and to be consistent and everything will fall into place. It is about trusting the process and understanding that your success will not follow a straight path.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                You will have ups and downs but just focus on what your body can do and keep a clear mind and positive attitude.
              </p>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Meet the Team <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 3. SERVICES / OFFER — Cards with icons ═══════ */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">What We Offer</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Classes Designed to Challenge You</h2>
            <p className="text-muted-foreground">
              We want to keep you guessing. Each class is designed to be different and push you out of your comfort zone! We offer encouragement rather than intimidation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((cls) => (
              <div
                key={cls.title}
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <cls.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{cls.title}</h3>
                <p className="text-sm text-primary font-bold uppercase tracking-wide mb-3">{cls.schedule}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{cls.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/class-schedule"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:bg-primary/80 transition shadow-md"
            >
              View Full Schedule <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ SECONDARY CTA BAND ═══════ */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/row-leap.jpg"
            alt="LeapBodies training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="relative container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Take the Leap</h2>
              <p className="text-primary-foreground/85 text-lg leading-relaxed">
                Power couple, Chewy and Rowena had both been in the fitness industry long before meeting each other and before LeapBodies was founded. Both had become accustomed to different, but effective styles of training. Together, this dynamic duo put their hearts into training their clients and creating group classes that are full of energy!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col items-start gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:brightness-110 transition inline-flex items-center gap-2 shadow-lg w-full sm:w-auto justify-center"
              >
                Book Your Free Class <ArrowRight size={18} />
              </Link>
              <Link
                to="/leap-studio"
                onClick={() => window.scrollTo(0, 0)}
                className="border-2 border-primary-foreground/50 text-primary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:bg-primary-foreground/10 transition inline-flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Tour Our Studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 4. TRUST / CREDIBILITY ═══════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Your Coaches</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Certified. Experienced. Passionate.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rowena", image: "/images/rowena.jpg", cred: "NASM CPT • lululemon Ambassador" },
              { name: "Chewy", image: "/images/chewy.jpg", cred: "NASM CPT • lululemon Ambassador" },
              { name: "Pirabu", image: "/images/pirabu.jpg", cred: "Certified Health & Fitness Coach" },
              { name: "Kuleba", image: "/images/kuleba.jpg", cred: "Certified Health & Fitness Coach" },
            ].map((coach) => (
              <div key={coach.name} className="text-center group">
                <div className="overflow-hidden rounded-xl shadow-md mb-4">
                  <img
                    src={coach.image}
                    alt={`Coach ${coach.name}`}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-lg">{coach.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{coach.cred}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/about"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              Learn About Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 5. PROCESS — How It Works ═══════ */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Getting Started</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative text-center bg-card rounded-xl p-8 shadow-sm border border-border">
                <span className="text-5xl font-bold text-primary/15 absolute top-4 right-6">{step.num}</span>
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-primary-foreground font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ STUDIO PREVIEW ═══════ */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Our Space</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">The Leap Studio</h2>
            <p className="text-muted-foreground">
              We're a private studio located within Richmond Sport & Fitness. Mention "Leap" at the front desk for access.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { src: "/images/studio-1.jpg", alt: "Leap Studio wall mural" },
              { src: "/images/studio-2.jpg", alt: "Training area" },
              { src: "/images/studio-3.jpg", alt: "Equipment" },
              { src: "/images/leap-family.jpg", alt: "The LeapBodies family" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl">
                <img src={img.src} alt={img.alt} className="w-full h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/leap-studio"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
            >
              See More of Our Space <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ 7. FINAL CTA — Contact form inline ═══════ */}
      <section className="py-20 lg:py-28 bg-foreground">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="text-background">
              <span className="text-xs uppercase tracking-widest text-secondary font-bold">Ready to Start?</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">
                Take the First Step Today
              </h2>
              <p className="text-background/70 leading-relaxed mb-8 text-lg">
                Have a question? Want to join LeapBodies? Looking for personal training? Don't hesitate to reach out.
              </p>
              <div className="space-y-4">
                <a href="mailto:yes@leapbodies.com" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors">
                  <Mail size={20} className="text-secondary flex-shrink-0" />
                  yes@leapbodies.com
                </a>
                <a href="tel:6047198887" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors">
                  <Phone size={20} className="text-secondary flex-shrink-0" />
                  (604) 719-8887
                </a>
                <div className="flex items-start gap-3 text-background/70">
                  <MapPin size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span>Richmond Sports & Fitness Center<br />150 - 2251 No 5 Rd, Richmond, BC V6X 2S8</span>
                </div>
              </div>
            </div>

            <div>
              {formSubmitted ? (
                <div className="bg-primary rounded-xl p-10 text-center">
                  <CheckCircle size={48} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">Thank you!</h3>
                  <p className="text-primary-foreground/80">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-2xl space-y-5">
                  <h3 className="text-xl font-bold mb-2">Get Started — It's Free</h3>
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
                    <label htmlFor="phone" className="block text-sm font-bold mb-1">
                      Phone
                    </label>
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
                      rows={4}
                      className="w-full border border-input rounded-lg px-4 py-3 text-sm bg-background focus:ring-2 focus:ring-ring focus:outline-none resize-vertical"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-4 font-bold text-sm rounded-lg hover:bg-primary/80 transition shadow-md"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-muted-foreground text-center">No commitment required. We'll respond within 24 hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MAP ═══════ */}
      <section className="h-[350px]">
        <iframe
          title="LeapBodies Location"
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

export default Index;
