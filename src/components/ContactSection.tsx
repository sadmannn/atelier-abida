import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center px-6"
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Stay Connected</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
          Join the <span className="italic">Atelier</span>
        </h2>
        <div className="art-divider mx-auto mb-8" />
        <p className="font-body text-lg text-muted-foreground mb-10">
          Be the first to see new collections, exclusive previews, and studio insights.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3.5 bg-background border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            required
          />
          <button
            type="submit"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
