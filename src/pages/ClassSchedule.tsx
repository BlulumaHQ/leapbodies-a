import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowRight, Clock, Dumbbell, Users, CheckCircle } from "lucide-react";

const schedule = [
  { day: "Monday", classes: ["Wake up and Go — 6:00 AM", "Leap Challenge — Evening"] },
  { day: "Tuesday", classes: ["TT Power Hour"] },
  { day: "Wednesday", classes: ["Wake up and Go — 6:00 AM"] },
  { day: "Thursday", classes: ["TT Power Hour"] },
  { day: "Friday", classes: ["Rest Day"] },
  { day: "Saturday", classes: ["The Weekender"] },
  { day: "Sunday", classes: ["The Weekender (Every Other Sunday)"] },
];

const classDetails = [
  {
    title: "Wake up and Go",
    time: "Monday & Wednesday, 6:00 AM",
    desc: "Join us bright and early for a workout designed to energize your body and mind. Get ready to jumpstart your mornings and tackle the day ahead!",
    icon: Clock,
  },
  {
    title: "TT Power Hour",
    time: "Tuesday & Thursday",
    desc: "Get stronger and leaner by developing your functional lifts and movements in this full-body workout. Focused on slow movements and longer holds to build strength and mobility.",
    icon: Dumbbell,
  },
  {
    title: "Leap Challenge",
    time: "Monday Evening",
    desc: "Explore movement through combinations of strength, plyometric, body weight, core, conditioning, and other training techniques.",
    icon: Users,
  },
  {
    title: "The Weekender",
    time: "Saturday & Every Other Sunday",
    desc: "Step into the weekend with a full-body workout that will help you burn fat and increase your heart rate. A new workout every week!",
    icon: CheckCircle,
  },
];

const ClassSchedule = () => {
  useEffect(() => {
    document.title = "Class Schedule | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0">
          <img src="/images/row-leap.jpg" alt="LeapBodies training" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 to-foreground/50" />
        </div>
        <div className="relative container-main section-padding text-primary-foreground">
          <span className="inline-block bg-secondary text-secondary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Weekly Schedule
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Class Schedule</h1>
          <p className="text-lg text-primary-foreground/80 max-w-xl mb-8">
            Find the perfect class for your schedule. Each session is designed to challenge your body and sharpen your mind.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 font-bold text-sm rounded-lg hover:brightness-110 transition"
          >
            Book Your First Class Free <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Schedule table */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="overflow-x-auto rounded-xl shadow-md">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-5 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-tl-xl">Day</th>
                  <th className="text-left p-5 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-tr-xl">Classes</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, idx) => (
                  <tr key={row.day} className={idx % 2 === 0 ? "bg-card" : "bg-muted"}>
                    <td className="p-5 font-bold text-sm border-b border-border w-1/4">{row.day}</td>
                    <td className="p-5 text-sm text-muted-foreground border-b border-border">
                      {row.classes.map((c) => (
                        <div key={c} className="py-1">{c}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Class details */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <div className="text-center mb-14">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Class Details</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2">Our Classes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classDetails.map((cls) => (
              <div key={cls.title} className="bg-card rounded-xl p-8 shadow-sm border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                  <cls.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{cls.title}</h3>
                <p className="text-sm text-primary font-bold mb-3">{cls.time}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container-main section-padding">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us to book your first class or learn more about our programs.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-10 py-4 font-bold text-sm rounded-lg hover:brightness-110 transition shadow-lg"
          >
            Book a Class <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ClassSchedule;
