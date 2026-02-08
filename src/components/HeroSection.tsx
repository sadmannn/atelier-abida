import { motion } from "framer-motion";
import heroArt from "@/assets/hero-art.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroArt}
          alt="Abstract artwork by Abida featuring warm terracotta and gold tones"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-lg md:text-xl tracking-[0.3em] uppercase text-primary-foreground/80 mb-6"
        >
          Contemporary Fine Art
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light text-primary-foreground mb-8 leading-[0.9] tracking-tight"
        >
          Atelier
          <br />
          <span className="italic font-normal">Abida</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center mb-10"
        >
          <div className="w-24 h-px bg-primary-foreground/40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-body text-xl md:text-2xl text-primary-foreground/70 font-light italic max-w-xl mx-auto"
        >
          Where emotion meets canvas — original paintings that speak to the soul
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("gallery")}
            className="font-body text-lg tracking-[0.15em] uppercase px-10 py-4 border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-500"
          >
            View Collection
          </button>
          <button
            onClick={() => scrollTo("shop")}
            className="font-body text-lg tracking-[0.15em] uppercase px-10 py-4 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-500"
          >
            Shop Originals
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-primary-foreground/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
