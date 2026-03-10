import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const team = [
  {
    name: "Rowena",
    image: "/images/rowena.jpg",
    bio: "Currently a lululemon ambassador and co-owner of LeapBodies, Rowena is a lover of movement – whether it be from functional strength or interval training, running for distance or on the trails, or even getting sweaty on the dance floor. With more than 10 years of experience in the health and fitness industry, Rowena has been involved in competitions like Tough Mudder and Spartan Race, while completing over a dozen half marathons.",
    quote: "My goal is to empower you for a happier, healthier life!",
    credentials: "NASM Certified Personal Trainer, CPR/AED Certified",
  },
  {
    name: "Chewy",
    image: "/images/chewy.jpg",
    bio: "Fitness is movement! It can create lasting health, happiness and confidence. Looking back 20 years ago, I was shy, underweight, and lethargic with very low self-esteem. By adding health and movement in my day to day enabled me to better myself. Today, I am here confident, happy and energetic. I am co-owner and coach of LeapBodies and an Ambassador for Lululemon.",
    quote: "To encourage and empower you through movement.",
    credentials: "NASM Certified Personal Trainer, CPR/AED Certified",
  },
  {
    name: "Pirabu",
    image: "/images/pirabu.jpg",
    bio: "I'm a certified Health & Fitness Coach and very passionate about helping others find happiness in life. When you feel good about yourself, you excel in life. For me, a healthy lifestyle is much more than just lifting weights. It's about stretching, warming up, eating healthy, timing necessary rest and having enough sleep.",
    quote: "",
    credentials: "Certified Health & Fitness Coach",
  },
  {
    name: "Kuleba",
    image: "/images/kuleba.jpg",
    bio: "I struggled with my weight all my life. The process of changing my life, going through my own physical transformation led me to my purpose of helping others. My passion is to help others on their journey to being the best version of themselves and help them achieve overall wellness through fitness.",
    quote: "",
    credentials: "Certified Health & Fitness Coach",
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-main section-padding text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">The LeapBodies Team</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Meet the coaches who are passionate about helping you become the strongest, healthiest and most confident version of yourself.
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="py-0">
        <img
          src="/images/team.jpg"
          alt="The LeapBodies team together"
          className="w-full max-h-[500px] object-cover"
        />
      </section>

      {/* Team members */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding space-y-20">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={member.image}
                  alt={`Meet ${member.name}`}
                  className="w-full rounded-lg shadow-lg object-cover aspect-[3/4] max-w-md mx-auto"
                />
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Meet</p>
                <h2 className="text-3xl font-bold mb-4">{member.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{member.bio}</p>
                {member.quote && (
                  <p className="italic text-primary mb-4">"{member.quote}"</p>
                )}
                <p className="text-sm text-muted-foreground font-bold">{member.credentials}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About LeapBodies */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">About LeapBodies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chewy and Rowena had both been in the fitness industry long before meeting each other and before LeapBodies was founded. Both had become accustomed to different, but effective styles of training. It was their love and passion for fitness that ultimately brought them together. Fitness has not only helped shape their bodies but it has completely taken over their lifestyle. They now lead much healthier and happier lifestyles both physically and mentally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With their passion, they want to change lives as they have done with their own and set others to be successful in the fitness industry. That passion, that love, and the desire to help others become successful ultimately led to the creation of LeapBodies.
              </p>
            </div>
            <div>
              <img
                src="/images/community-run.jpg"
                alt="LeapBodies community running together"
                className="w-full rounded-lg shadow-lg object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="container-main section-padding">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">Inspired by our Community</h2>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded hover:brightness-110 transition"
          >
            Join Us Today
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
