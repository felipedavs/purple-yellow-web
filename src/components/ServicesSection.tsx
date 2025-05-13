
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "/icon-web.svg",
      title: "Criação e Manutenção de Sites",
      description: "Sites responsivos, otimizados para SEO e focados em conversão, com designs modernos e funcionais."
    },
    {
      icon: "/icon-social.svg",
      title: "Gestão de Redes Sociais",
      description: "Estratégias de conteúdo, criação de posts, gerenciamento de comunidade e análise de resultados."
    },
    {
      icon: "/icon-ads.svg",
      title: "Tráfego Pago no Google e Meta",
      description: "Campanhas de anúncios otimizadas para Google Ads, Facebook e Instagram com foco em ROI."
    },
    {
      icon: "/icon-whatsapp.svg",
      title: "Automação de WhatsApp",
      description: "Chatbots e fluxos automatizados para atendimento, vendas e suporte aos clientes."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex justify-center items-center">
            <div className="h-1 w-12 bg-accent mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider">Serviços</span>
            <div className="h-1 w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas para seu <span className="text-primary">negócio digital</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Oferecemos serviços integrados de marketing digital para impulsionar sua presença online e aumentar suas vendas, com estratégias personalizadas para cada objetivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-b-4 border-accent hover:border-primary"
            >
              <div className="bg-primary/5 p-4 rounded-full inline-block mb-6">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
              </div>
              <h3 className="font-bold text-xl mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#contato" className="text-primary font-semibold hover:text-accent flex items-center">
                <span>Saiba mais</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contato">
            <Button className="btn-accent text-lg px-8 py-6">
              Solicite um Orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
