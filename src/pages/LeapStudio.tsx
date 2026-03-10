import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const studioImages = [
  { src: "/images/studio-1.jpg", alt: "Leap Studio colorful wall mural" },
  { src: "/images/studio-2.jpg", alt: "Leap Studio training area" },
  { src: "/images/studio-3.jpg", alt: "Leap Studio equipment" },
  { src: "/images/studio-4.jpg", alt: "Leap Studio interior" },
  { src: "/images/studio-5.jpg", alt: "Leap Studio space" },
];

const LeapStudio = () => {
  useEffect(() => {
    document.title = "Leap Studio | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-main section-padding text-center text-primary-foreground">
          <p className="text-sm uppercase tracking-widest text-secondary font-bold mb-3">Leap Studio</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Richmond's First Speakeasy Fitness Studio</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Take the Leap! Our private studio is designed to push your limits in a supportive, energetic environment.
          </p>
          <Link
            to="/class-schedule"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded hover:brightness-110 transition"
          >
            Book Your Class Today!
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Space</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
            <div className="overflow-hidden rounded-lg shadow-md">
              <img
                src="/images/leap-family.jpg"
                alt="The LeapBodies family"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">Find Us</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We're a private studio located within Richmond Sport & Fitness. Mention "Leap" at the front desk for access.
          </p>
          <p className="font-bold text-foreground mb-8">
            Richmond Sports & Fitness Center — 150 - 2251 No 5 Rd, Richmond, BC V6X 2S8
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LeapStudio;
