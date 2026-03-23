import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";

const team = [
  {
    name: "Rowena",
    image: "/images/rowena.jpg",
    bio: "Currently a lululemon ambassador and co-owner of LeapBodies, Rowena is a lover of movement – whether it be from functional strength or interval training, running for distance or on the trails, or even getting sweaty on the dance floor. With more than 10 years of experience in the health and fitness industry, Rowena has been involved in competitions like Tough Mudder and Spartan Race, while completing over a dozen half marathons.",
    quote: "My goal is to empower you for a happier, healthier life!",
    credentials: ["NASM Certified Personal Trainer", "CPR/AED Certified", "lululemon Ambassador"],
  },
  {
    name: "Chewy",
    image: "/images/chewy.jpg",
    bio: "Fitness is movement! It can create lasting health, happiness and confidence. Looking back 20 years ago, I was shy, underweight, and lethargic with very low self-esteem. By adding health and movement in my day to day enabled me to better myself. Today, I am here confident, happy and energetic. I am co-owner and coach of LeapBodies and an Ambassador for Lululemon.",
    quote: "To encourage and empower you through movement.",
    credentials: ["NASM Certified Personal Trainer", "CPR/AED Certified", "lululemon Ambassador"],
  },
  {
    name: "Pirabu",
    image: "/images/pirabu.jpg",
    bio: "I'm a certified Health & Fitness Coach and very passionate about helping others find happiness in life. When you feel good about yourself, you excel in life. For me, a healthy lifestyle is much more than just lifting weights. It's about stretching, warming up, eating healthy, timing necessary rest and having enough sleep.",
    quote: "",
    credentials: ["Certified Health & Fitness Coach"],
  },
  {
    name: "Kuleba",
    image: "/images/kuleba.jpg",
    bio: "I struggled with my weight all my life. The process of changing my life, going through my own physical transformation led me to my purpose of helping others. My passion is to help others on their journey to being the best version of themselves and help them achieve overall wellness through fitness.",
    quote: "",
    credentials: ["Certified Health & Fitness Coach"],
  },
];

const About = () => {
  useEffect(() => {
    document.title = "About | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src="/images/team.jpg" alt="The LeapBodies team together" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-main section-padding text-primary-foreground">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 max-w-2xl">The LeapBodies Team</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mb-8">
            Meet the coaches who are passionate about helping you become the strongest, healthiest and most confident version of yourself.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded-lg hover:brightness-110 transition"
          >
            Train With Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">How It Started</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-6">About LeapBodies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chewy and Rowena had both been in the fitness industry long before meeting each other and before LeapBodies was founded. Both had become accustomed to different, but effective styles of training. It was their love and passion for fitness that ultimately brought them together. Fitness has not only helped shape their bodies but it has completely taken over their lifestyle. They now lead much healthier and happier lifestyles both physically and mentally.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With their passion, they want to change lives as they have done with their own and set others to be successful in the fitness industry. That passion, that love, and the desire to help others become successful ultimately led to the creation of LeapBodies.
              </p>
            </div>
            <img
              src="/images/community-run.jpg"
              alt="LeapBodies community running together"
              className="w-full rounded-2xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      {/* Team members */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Your Coaches</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Meet the Team</h2>
          </div>
          <div className="space-y-16">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center bg-card rounded-2xl overflow-hidden shadow-sm"
              >
                <div className={`lg:col-span-2 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={member.image}
                    alt={`Coach ${member.name}`}
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className={`lg:col-span-3 p-8 lg:p-12 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-3xl font-bold mb-4">{member.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{member.bio}</p>
                  {member.quote && (
                    <blockquote className="border-l-4 border-secondary pl-4 italic text-primary mb-5">
                      "{member.quote}"
                    </blockquote>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1.5 text-xs font-bold bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                        <CheckCircle size={12} /> {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container-main section-padding">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Join Our Community?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Start your fitness journey with certified coaches who care about your progress.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:brightness-110 transition shadow-lg"
          >
            Book Your Free Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
