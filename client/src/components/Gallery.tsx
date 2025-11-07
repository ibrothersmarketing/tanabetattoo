import { useState } from 'react';

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    { id: 1, style: 'Colorida', category: 'colorida', image: '/portfolio_1_colorida_joker.webp' },
    { id: 2, style: 'Delicada', category: 'delicada', image: '/portfolio_2_delicada_borboleta.webp' },
    { id: 3, style: 'Preto e Cinza', category: 'pretoecinza', image: '/portfolio_3_pretoecinza_religiao.webp' },
    { id: 4, style: 'Colorida', category: 'colorida', image: '/portfolio_4_colorida_mario.webp' },
    { id: 5, style: 'Delicada', category: 'delicada', image: '/portfolio_6_delicada_anjos.webp' },
    { id: 6, style: 'Preto e Cinza', category: 'pretoecinza', image: '/portfolio_5_pretoecinza_leao.webp' },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfólio de <span className="text-gradient">Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="animate-fadeInUp group relative overflow-hidden rounded-xl"
              style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image container */}
              <div className="relative h-80 overflow-hidden rounded-xl">
                {/* Image */}
                <img
                  src={image.image}
                  alt={`${image.style} - ${image.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"></div>

                {/* Overlay info */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <p className="text-xl font-bold">{image.style}</p>
                    <p className="text-sm mt-2 opacity-80">Tatuagem Premium</p>
                  </div>
                </div>
              </div>

              {/* Border animation */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
