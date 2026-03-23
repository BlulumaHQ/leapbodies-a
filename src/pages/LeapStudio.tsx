import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const studioImages = [
  { src: "/images/studio-1.jpg", alt: "Leap Studio colorful wall mural" },
  { src: "/images/studio-2.jpg", alt: "Leap Studio training area" },
  { src: "/images/studio-3.jpg", alt: "Leap Studio equipment" },
  { src: "/images/studio-4.jpg", alt: "Leap Studio interior" },
  { src: "/images/studio-5.jpg", alt: "Leap Studio space" },
  { src: "/images/leap-family.jpg", alt: "The LeapBodies family" },
];

const LeapStudio = () => {
  useEffect(() => {
    document.title = "Leap Studio | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src="/images/studio-1.jpg" alt="Leap Studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-main section-padding text-primary-foreground">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Space
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">Richmond's First Speakeasy Fitness Studio</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mb-8">
            Take the Leap! Our private studio is designed to push your limits in a supportive, energetic environment.
          </p>
          <Link
            to="/class-schedule"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded-lg hover:brightness-110 transition"
          >
            Book Your Class Today! <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Take a Look</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Our Space</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-main section-padding text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Find Us</h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-4 max-w-xl mx-auto">
            We're a private studio located within Richmond Sport & Fitness. Mention "Leap" at the front desk for access.
          </p>
          <p className="font-bold text-primary-foreground mb-8">
            Richmond Sports & Fitness Center — 150 - 2251 No 5 Rd, Richmond, BC V6X 2S8
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:brightness-110 transition shadow-lg"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LeapStudio;
