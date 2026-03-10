import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const classes = [
  {
    title: "Wake up and Go",
    schedule: "Monday & Wednesday 6AM",
    description:
      "Join us bright and early at 6am on Monday's and Wednesday's for a workout designed to energize your body and mind. Get ready to jumpstart your mornings and tackle the day ahead!",
  },
  {
    title: "TT Power Hour",
    schedule: "Tuesday & Thursday",
    description:
      "Get stronger and leaner by developing your functional lifts and movements in this full-body workout. This class is focused on slow movements and longer holds to turn up the burn, get those muscles fired up and build strength and mobility.",
  },
  {
    title: "Leap Challenge",
    schedule: "Monday Evening",
    description:
      "Come explore movement through combinations of strength, plyometric, body weight, core, conditioning, and other training techniques. Every class will help you improve your fitness while having fun with your peers.",
  },
  {
    title: "The Weekender",
    schedule: "Saturday & Every Other Sunday",
    description:
      "Step into the weekend with a full-body workout that will help you burn fat and increase your heart rate. With a new workout every week, these classes are designed to refresh and rejuvenate your mind and body.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "Home | LeapBodies";
  }, []);

  return (
    <Layout>

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="LeapBodies trainer performing kettlebell exercise outdoors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative container-main section-padding pb-16 lg:pb-24 text-primary-foreground">
          <p className="text-sm uppercase tracking-widest mb-3 text-secondary font-bold">Personal Training & Group Fitness</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-2xl">
            Mind Sharp, Body Strong
          </h1>
          <p className="text-lg lg:text-xl max-w-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Every day is a new day that gives you the chance to be better than you were yesterday. Seek growth, not perfection.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/class-schedule"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition"
            >
              Take the Leap
            </Link>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary-foreground/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding text-center max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">Our Fitness Philosophy</p>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            We strive for progress, not perfection.
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Whatever goals you have in life, the key is to work hard and to be consistent and everything will fall into place. It is about trusting the process and understanding that your success will not follow a straight path. You will have ups and downs but just focus on what your body can do and keep a clear mind and positive attitude.
          </p>
        </div>
      </section>

      {/* Classes */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-3 text-center">What We Offer</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">The Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((cls) => (
              <div key={cls.title} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-1">{cls.title}</h3>
                <p className="text-sm text-primary font-bold uppercase tracking-wide mb-3">{cls.schedule}</p>
                <p className="text-muted-foreground leading-relaxed text-sm">{cls.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/class-schedule"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition"
            >
              View Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Community */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/chewy-rowena.jpg"
                alt="Chewy and Rowena, founders of LeapBodies"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">Meet the Community</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Chewy & Rowena</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Power couple, Chewy and Rowena had both been in the fitness industry long before meeting each other and before LeapBodies was founded. Both had become accustomed to different, but effective styles of training. Together, this dynamic duo put their hearts into training their clients and creating group classes that are full of energy!
              </p>
              <Link
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <img
            src="/images/row-leap.jpg"
            alt="LeapBodies training session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-main section-padding text-center text-primary-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Take the Leap</h2>
          <p className="text-lg max-w-xl mx-auto mb-8 text-primary-foreground/90">
            We want to keep you guessing. Each class is designed to be different and push you out of your comfort zone! We offer encouragement rather than intimidation.
          </p>
          <Link
            to="/class-schedule"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded hover:brightness-110 transition"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding text-center">
          <p className="text-sm uppercase tracking-widest text-primary font-bold mb-3">Come Join Us At</p>
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">The Leap</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We're a private studio located within Richmond Sport & Fitness. Mention "Leap" at the front desk for access.
          </p>
          <p className="text-foreground font-bold mb-6">
            Richmond Sports & Fitness Center — 150 - 2251 No 5 Rd, Richmond, BC V6X 2S8
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg max-w-3xl mx-auto">
            <iframe
              title="LeapBodies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d-123.1!3d49.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548674d8a3c9a7e3%3A0x1234567890!2s2251+No+5+Rd%2C+Richmond%2C+BC+V6X+2S8!5e0!3m2!1sen!2sca!4v1700000000000"
              width="100%"
              height="350"
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

export default Index;
