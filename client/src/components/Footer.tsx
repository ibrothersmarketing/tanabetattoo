import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold">T</span>
              </div>
              Tanabe Tattoo
            </h3>
            <p className="text-background/80 leading-relaxed">
              Studio especializado em tatuagens de alta qualidade, com foco em design artístico e excelência em cada projeto.
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold mb-6">Informações</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Localização</p>
                  <p className="text-background/80 text-sm">
                    Av. 19 de Dezembro, 369 - sala 16<br />
                    Zona 04, Maringá - PR, 87015-610
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-background/80 text-sm">(44) 9999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-background/80 text-sm">contato@tanabetattoo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
            <p className="text-background/80 mb-6">
              Acompanhe nossos trabalhos e fique por dentro das novidades
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-accent text-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-accent text-foreground rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-background/60 text-sm">
              © 2017 - 2025 Tanabe Tattoo Ltda. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-background/60">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
