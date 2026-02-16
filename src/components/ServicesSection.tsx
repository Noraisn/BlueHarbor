import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calculator, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Briefcase,
    title: "Commercial",
    items: [
      { name: "Support & Success", desc: "Omnichannel retention focus" },
      { name: "Onboarding", desc: "Systematic client integration" },
      { name: "Professional Services", desc: "Workflow consultancy" },
      { name: "Account Management", desc: "Proactive portfolio growth" },
    ],
  },
  {
    icon: Calculator,
    title: "Financial",
    items: [
      { name: "Accounting & Recon", desc: "Bookkeeping & reconciliation" },
      { name: "General Ledger", desc: "Institutional ledger maintenance" },
      { name: "FP&A Support", desc: "Strategic planning & analysis" },
      { name: "Tax & Regulatory", desc: "Tax prep, KYC & back-office" },
    ],
  },
  {
    icon: Cpu,
    title: "Tech & AI",
    items: [
      { name: "AI-Agent Integration", desc: "Intelligent agent deployment" },
      { name: "Workflow Engineering", desc: "Custom automation for legacy systems" },
      { name: "Data Security", desc: "Institutional-grade safety protocols" },
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Core Service Pillars
          </h2>
          <div className="glow-line w-16 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
              </div>
              <div className="space-y-5">
                {pillar.items.map((item) => (
                  <div key={item.name} className="border-l-2 border-primary/30 pl-4">
                    <p className="font-medium text-foreground text-sm">{item.name}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
