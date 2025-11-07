import { Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>

      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para sua próxima <span className="text-accent">tatuagem?</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Entre em contato conosco para agendar uma consulta e discutir seu projeto de tatuagem. Estamos prontos para transformar suas ideias em arte permanente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors animate-slideInLeft">
              <Phone className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-1">Telefone</p>
                <p className="text-xl font-semibold text-white">(44) 9999-9999</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors animate-slideInRight">
              <Mail className="w-8 h-8 text-accent flex-shrink-0" />
              <div className="text-left">
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-xl font-semibold text-white">contato@tanabetattoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
