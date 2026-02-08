import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art5 from "@/assets/art5.jpg";

const shopItems = [
  { src: art1, title: "Gilded Horizon", price: "€1,200", status: "Available" },
  { src: art2, title: "Terra Firma", price: "€1,800", status: "Available" },
  { src: art3, title: "Midnight Reverie", price: "€2,400", status: "Sold" },
  { src: art5, title: "Golden Dusk", price: "€1,500", status: "Available" },
];

const ShopSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="shop" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Acquire Original Art</p>
        <h2 className="font-display text-4xl md:text-6xl font-light text-foreground">The Shop</h2>
        <div className="art-divider mx-auto mt-6" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {shopItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="group"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative overflow-hidden mb-4">
              <img
                src={item.src}
                alt={`${item.title} by Abida - original artwork for sale`}
                className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {item.status === "Sold" && (
                <div className="absolute top-4 right-4 bg-foreground/80 text-primary-foreground font-body text-xs tracking-[0.2em] uppercase px-3 py-1.5">
                  Sold
                </div>
              )}
              <motion.div
                initial={false}
                animate={{ opacity: hoveredIndex === i && item.status !== "Sold" ? 1 : 0 }}
                className="absolute inset-0 bg-foreground/30 flex items-center justify-center"
              >
                <button className="font-body text-sm tracking-[0.2em] uppercase px-8 py-3 border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300">
                  Inquire
                </button>
              </motion.div>
            </div>
            <h3 className="font-display text-lg text-foreground">{item.title}</h3>
            <div className="flex justify-between items-center mt-1">
              <p className="font-body text-muted-foreground">{item.price}</p>
              <p className={`font-body text-sm ${item.status === "Sold" ? "text-muted-foreground line-through" : "text-primary"}`}>
                {item.status}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
