import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "100% US-Standard English Fluency",
  "Highly Trained Specialists",
  "Modern Operations & Tools",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Strategic Partner
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h2>
            <div className="glow-line w-16 mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              BlueHarbor is a premium Business Process Outsourcing (BPO) firm headquartered in 
              Prishtina, Kosovo. We provide institutional-grade talent solutions that remove the 
              operational friction of scaling for the New York market.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Proven Performance
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We've empowered firms to scale from boutique setups to major operations, managing 
              over <span className="text-foreground font-semibold">250 fully vetted professionals</span>.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-display text-4xl font-bold text-primary">250+</p>
                <p className="text-muted-foreground text-sm mt-1">Vetted Professionals</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">6x</p>
                <p className="text-muted-foreground text-sm mt-1">Capacity Multiplier</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">0%</p>
                <p className="text-muted-foreground text-sm mt-1">Legal Liability</p>
              </div>
              <div>
                <p className="font-display text-4xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground text-sm mt-1">English Fluency</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
