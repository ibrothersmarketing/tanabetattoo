import { useState } from 'react';

export default function Styles() {
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);

  const styles = [
    {
      id: 'colorida',
      name: 'Colorida',
      hashtag: '#Colorida',
      description: 'Tatuagens vibrantes e cheias de cor, com detalhes precisos e acabamento impecável.',
      gradient: 'from-red-400 via-pink-400 to-purple-400',
      icon: '🎨',
    },
    {
      id: 'delicada',
      name: 'Delicada',
      hashtag: '#Delicada',
      description: 'Trabalhos finos e elegantes, perfeitos para quem busca sutileza e sofisticação.',
      gradient: 'from-pink-300 via-rose-300 to-red-300',
      icon: '✨',
    },
    {
      id: 'pretoecinza',
      name: 'Preto e Cinza',
      hashtag: '#PretoeCinza',
      description: 'Clássico e atemporal, com profundidade e contraste impressionantes.',
      gradient: 'from-gray-400 via-gray-600 to-gray-800',
      icon: '🖤',
    },
  ];

  return (
    <section id="styles" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Estilos de <span className="text-gradient">Tatuagem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça os estilos especializados do Studio Tanabe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {styles.map((style, index) => (
            <div
              key={style.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredStyle(style.id)}
              onMouseLeave={() => setHoveredStyle(null)}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-80`}></div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
                  {/* Icon */}
                  <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {style.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold mb-2">
                    {style.name}
                  </h3>

                  {/* Hashtag */}
                  <p className="text-sm font-semibold text-white/80 mb-4">
                    {style.hashtag}
                  </p>

                  {/* Description - appears on hover */}
                  <div className={`transition-all duration-300 ${hoveredStyle === style.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-sm leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                </div>

                {/* Border animation */}
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 animate-fadeInUp">
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Além de eleito 2 vezes seguidas <strong>"o melhor do ano regional"</strong>, os trabalhos do Studio Tanabe Tattoo também já foram premiados em convenções de nível nacional, principalmente nas categorias <strong>"colorido"</strong>, <strong>"aquarela"</strong> e <strong>"minimalista"</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
