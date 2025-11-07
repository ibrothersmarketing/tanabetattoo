import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3 animate-fadeInDown">
          <img
            src="/tanabe_logo.webp"
            alt="Tanabe Tattoo Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-foreground">Tanabe</h1>
            <p className="text-xs text-muted-foreground">Tattoo Studio</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-foreground hover:text-accent transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('styles')}
            className="text-foreground hover:text-accent transition-colors"
          >
            Estilos
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-accent transition-colors"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
            onClick={() => scrollToSection('contact')}
          >
            Solicitar Orçamento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fadeInDown">
          <nav className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('styles')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Estilos
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              FAQ
            </button>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
              onClick={() => scrollToSection('contact')}
            >
              Solicitar Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
