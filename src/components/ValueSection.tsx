import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Zap } from "lucide-react";

const cards = [
  {
    icon: Shield,
    title: "Zero Legal Risk",
    description:
      "We assume 100% of employment liabilities, including payroll taxes, pension, and insurance. No local labor law exposure.",
  },
  {
    icon: Users,
    title: "No HR Burden",
    description:
      "We eliminate the heavy lifting of recruitment, onboarding, and training. You receive fully supported, KPI-driven operators.",
  },
  {
    icon: Zap,
    title: "Elastic Scaling",
    description:
      "Whether you need 1 agent or 100, we scale with you instantly. No infrastructure overhead or IT headaches.",
  },
];

const ValueSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Total Liability Absorption
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The Value Proposition
          </h2>
          <div className="glow-line w-16 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Our clients typically see a 3× to 6× return value per agent. Transparent, 
            deliverable-based pricing without hidden domestic markups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card p-8 text-left hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
