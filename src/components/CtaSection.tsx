import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";

const CtaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Strategic Partnership
          </h2>
          <div className="glow-line w-16 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground italic mb-10">
            "Remove the Burden. Retain the Quality."
          </p>

          <a
            href="mailto:partner@blueharbor.com"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-10 py-4 rounded-md hover:opacity-90 transition-opacity text-lg mb-12"
          >
            Partner With Us
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>partner@blueharbor.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Prishtina, Kosovo // New York, NY</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
