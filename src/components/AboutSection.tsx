import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={artistPortrait}
            alt="Portrait of Abida, contemporary fine artist"
            className="w-full max-w-md mx-auto lg:mx-0 object-cover shadow-2xl"
          />
          <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border border-primary/30 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">The Artist</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            About <span className="italic">Abida</span>
          </h2>
          <div className="art-divider mb-8" />

          <div className="space-y-5 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              Abida is a contemporary artist whose work explores the intersection of emotion,
              texture, and color. Working primarily with oils, acrylics, and gold leaf, she
              creates pieces that invite viewers into moments of quiet contemplation.
            </p>
            <p>
              Drawing inspiration from the natural world and the human experience, each canvas
              becomes a dialogue between light and shadow, movement and stillness. Her distinctive
              use of warm earth tones and metallic accents has garnered recognition in galleries
              across Europe and the Middle East.
            </p>
            <p className="italic text-foreground">
              "Art is the language my soul speaks when words are not enough."
            </p>
          </div>

          <div className="mt-10 flex gap-12">
            {[
              { number: "50+", label: "Original Works" },
              { number: "12", label: "Exhibitions" },
              { number: "8", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-primary">{stat.number}</p>
                <p className="font-body text-sm text-muted-foreground tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
