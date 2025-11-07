import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Quanto tempo demora para cicatrizar minha tatuagem?',
      answer: 'O processo de cicatrização de uma tatuagem geralmente leva de 2 a 4 semanas. Durante este período, é importante seguir as instruções de cuidado pós-tatuagem para garantir uma cicatrização adequada e evitar infecções. A pele pode ficar vermelha, inchada e sensível nos primeiros dias, o que é completamente normal.',
    },
    {
      question: 'Estou em dúvida sobre o que desenhar, qual conselho você daria?',
      answer: 'Adoramos ajudar nossos clientes a encontrar o design perfeito! Recomendamos trazer referências visuais, fotos ou ideias do que você gostaria. Podemos fazer uma consulta inicial para discutir seu conceito, estilo preferido e localização no corpo. Tanabe é especialista em criar designs personalizados que refletem sua personalidade e história.',
    },
    {
      question: 'Preciso pagar antecipado para reservar agenda?',
      answer: 'Sim, solicitamos um depósito para confirmar sua data. Este valor é creditado no total da tatuagem. Isso garante que sua vaga seja reservada e que ambos estamos comprometidos com o projeto. Entre em contato para discutir as opções de pagamento.',
    },
    {
      question: 'A tinta colorida desbota?',
      answer: 'Como qualquer tatuagem, as cores podem desbotar com o tempo, especialmente com exposição ao sol. No entanto, usando materiais premium de alta qualidade como fazemos, o desbotamento é mínimo. Recomendamos usar protetor solar (SPF 50+) nas áreas tatuadas e evitar exposição solar prolongada para manter as cores vibrantes por mais tempo.',
    },
    {
      question: 'Qual os cuidados do pós tatuagem?',
      answer: 'Os cuidados pós-tatuagem são essenciais: (1) Mantenha a área limpa e seca; (2) Use pomada cicatrizante conforme recomendado; (3) Evite água quente, piscinas e mar por 2 semanas; (4) Não exponha ao sol direto; (5) Não coce ou pele a tatuagem; (6) Use roupas limpas e confortáveis; (7) Se notar sinais de infecção, procure um médico. Forneceremos instruções detalhadas após sua tatuagem.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre tatuagens e nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-fadeInUp border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-accent"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border animate-slideInDown">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
}
