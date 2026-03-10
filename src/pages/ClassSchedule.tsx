import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const schedule = [
  { day: "Monday", classes: ["Wake up and Go — 6:00 AM", "Leap Challenge — Evening"] },
  { day: "Tuesday", classes: ["TT Power Hour"] },
  { day: "Wednesday", classes: ["Wake up and Go — 6:00 AM"] },
  { day: "Thursday", classes: ["TT Power Hour"] },
  { day: "Friday", classes: ["Rest Day"] },
  { day: "Saturday", classes: ["The Weekender"] },
  { day: "Sunday", classes: ["The Weekender (Every Other Sunday)"] },
];

const ClassSchedule = () => {
  useEffect(() => {
    document.title = "Class Schedule | LeapBodies";
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container-main section-padding text-center text-primary-foreground">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Class Schedule</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Find the perfect class for your schedule. Each session is designed to challenge your body and sharpen your mind.
          </p>
        </div>
      </section>

      {/* Schedule table */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-main section-padding">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-tl-lg">
                    Day
                  </th>
                  <th className="text-left p-4 bg-primary text-primary-foreground text-sm uppercase tracking-wider rounded-tr-lg">
                    Classes
                  </th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((row, idx) => (
                  <tr
                    key={row.day}
                    className={idx % 2 === 0 ? "bg-card" : "bg-muted"}
                  >
                    <td className="p-4 font-bold text-sm border-b border-border w-1/4">{row.day}</td>
                    <td className="p-4 text-sm text-muted-foreground border-b border-border">
                      {row.classes.map((c) => (
                        <div key={c} className="py-1">{c}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-accent rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us to book your first class or learn more about our programs.
            </p>
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-bold text-sm rounded hover:bg-primary/80 transition"
            >
              Book a Class
            </Link>
          </div>
        </div>
      </section>

      {/* Classes detail */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container-main section-padding">
          <h2 className="text-3xl font-bold text-center mb-12">Our Classes</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Wake up and Go",
                time: "Monday & Wednesday, 6:00 AM",
                desc: "Join us bright and early for a workout designed to energize your body and mind. Get ready to jumpstart your mornings and tackle the day ahead!",
              },
              {
                title: "TT Power Hour",
                time: "Tuesday & Thursday",
                desc: "Get stronger and leaner by developing your functional lifts and movements in this full-body workout. Focused on slow movements and longer holds to build strength and mobility.",
              },
              {
                title: "Leap Challenge",
                time: "Monday Evening",
                desc: "Explore movement through combinations of strength, plyometric, body weight, core, conditioning, and other training techniques.",
              },
              {
                title: "The Weekender",
                time: "Saturday & Every Other Sunday",
                desc: "Step into the weekend with a full-body workout that will help you burn fat and increase your heart rate. A new workout every week!",
              },
            ].map((cls) => (
              <div key={cls.title} className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-1">{cls.title}</h3>
                <p className="text-sm text-primary font-bold mb-2">{cls.time}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClassSchedule;
