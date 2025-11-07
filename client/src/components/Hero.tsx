import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
        {/* Left Content */}
        <div className="animate-slideInLeft">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Tatuador Premiado</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transforme Suas Ideias em <span className="text-gradient">Arte Permanente</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Tanabe é tatuador e design artístico, premiado em convenções de nível nacional, principalmente nas categorias <strong>"colorido"</strong>, <strong>"aquarela"</strong> e <strong>"minimalista"</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base px-8"
              onClick={() => scrollToSection('contact')}
            >
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold text-base px-8"
              onClick={() => scrollToSection('styles')}
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-accent">2x</p>
              <p className="text-sm text-muted-foreground">Melhor do Ano</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">+500</p>
              <p className="text-sm text-muted-foreground">Tatuagens</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground">Anos Exp.</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-slideInRight">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl blur-2xl"></div>
            
            {/* Image container with animation */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/tanabe_hero_image.webp"
                alt="Tanabe Tattoo - Tatuador Premiado"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold shadow-lg animate-float">
              Premium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
