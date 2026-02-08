const Footer = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-4">Atelier Abida</h3>
            <p className="font-body text-primary-foreground/60 leading-relaxed">
              Contemporary fine art born from emotion, texture, and the beauty of imperfection.
            </p>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-[0.2em] uppercase mb-4 text-primary-foreground/40">Navigate</h4>
            <div className="flex flex-col gap-2">
              {["Gallery", "About", "Shop", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="font-body text-primary-foreground/60 hover:text-primary-foreground transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body text-sm tracking-[0.2em] uppercase mb-4 text-primary-foreground/40">Connect</h4>
            <div className="flex flex-col gap-2 font-body text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Pinterest</a>
              <a href="mailto:hello@atelierabida.com" className="hover:text-primary-foreground transition-colors">hello@atelierabida.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-sm text-primary-foreground/30">
            © 2026 Atelier Abida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
