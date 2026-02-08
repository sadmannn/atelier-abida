import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

const artworks = [
  { src: art1, title: "Gilded Horizon", medium: "Oil & Gold Leaf on Canvas", size: "40 × 50 cm" },
  { src: art2, title: "Terra Firma", medium: "Acrylic on Canvas", size: "60 × 80 cm" },
  { src: art3, title: "Midnight Reverie", medium: "Mixed Media on Canvas", size: "50 × 70 cm" },
  { src: art4, title: "Bloom & Whisper", medium: "Watercolor on Paper", size: "30 × 40 cm" },
  { src: art5, title: "Golden Dusk", medium: "Oil on Canvas", size: "70 × 50 cm" },
  { src: art6, title: "Emerald Fracture", medium: "Acrylic & Gold Leaf", size: "50 × 60 cm" },
];

const GalleryItem = ({ artwork, index }: { artwork: typeof artworks[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={artwork.src}
          alt={`${artwork.title} - ${artwork.medium} by Abida`}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-500 flex items-end">
          <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <p className="font-display text-xl text-primary-foreground">{artwork.title}</p>
            <p className="font-body text-sm text-primary-foreground/70 tracking-wide">{artwork.medium}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-foreground">{artwork.title}</h3>
        <p className="font-body text-sm text-muted-foreground tracking-wide">{artwork.medium} — {artwork.size}</p>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Selected Works</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">The Collection</h2>
        <div className="art-divider mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {artworks.map((artwork, i) => (
          <GalleryItem key={artwork.title} artwork={artwork} index={i} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
