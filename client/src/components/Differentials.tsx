import { Sparkles, Palette, Trophy } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Sparkles,
      title: 'Materiais de Qualidade',
      description: 'Trabalhamos somente com materiais premium de altíssima qualidade, garantindo durabilidade e segurança em cada tatuagem.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Palette,
      title: 'Desenhos Exclusivos',
      description: 'Desenvolvimento de projetos exclusivos e personalizados, criados especialmente para você e sua história.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Trophy,
      title: 'Trabalhos Premiados',
      description: 'Eleito 2 vezes seguidas "o melhor do ano regional". Premiado em convenções nacionais nas categorias colorido, aquarela e minimalista.',
      color: 'from-amber-400 to-amber-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher <span className="text-gradient">Tanabe Tattoo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade, criatividade e excelência em cada projeto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

                {/* Card content */}
                <div className="relative p-8 bg-card border border-border rounded-2xl h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {item.description}
                  </p>

                  {/* Decorative line */}
                  <div className="mt-6 h-1 w-12 bg-gradient-to-r from-accent to-accent/30 rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
