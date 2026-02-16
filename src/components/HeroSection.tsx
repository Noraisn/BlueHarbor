import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nyc.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="New York City skyline" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
    </div>

    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
      >
        Prishtina // New York
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6"
      >
        Outsourcing
        <br />
        <span className="text-gradient">Reimagined</span>
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="glow-line w-24 mx-auto mb-8"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
      >
        Flexible scaling within your reach — multiply the output at lower cost.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity text-base"
        >
          Schedule a Call
        </a>
        <a
          href="#about"
          className="inline-flex items-center justify-center border border-border text-foreground font-medium px-8 py-3.5 rounded-md hover:bg-secondary transition-colors text-base"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
