
import { Lightbulb, Users, Award, Settings } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Users className="h-12 w-12 text-accent" />,
      title: "Atendimento Personalizado",
      description: "Oferecemos um atendimento exclusivo para cada cliente, compreendendo suas necessidades específicas."
    },
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "Foco em Resultados",
      description: "Trabalhamos com metas claras e relatórios transparentes para maximizar seu retorno sobre investimento."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-accent" />,
      title: "Equipe Qualificada",
      description: "Nossa equipe é formada por especialistas certificados com ampla experiência no mercado digital."
    },
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Soluções Sob Medida",
      description: "Desenvolvemos estratégias personalizadas que se adaptam ao seu negócio, orçamento e objetivos."
    }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex justify-center items-center">
            <div className="h-1 w-12 bg-accent mr-4"></div>
            <span className="text-white font-medium uppercase tracking-wider">Diferenciais</span>
            <div className="h-1 w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a nossa <span className="text-accent">agência</span>?
          </h2>
          <p className="text-lg text-gray-100">
            Conheça os diferenciais que fazem da nossa agência a escolha ideal para impulsionar seu negócio no mundo digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all text-center hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-4">{item.title}</h3>
              <p className="text-gray-200">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-accent/20 backdrop-blur-sm rounded-lg p-8 border-l-4 border-accent">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/4 flex justify-center">
              <div className="rounded-full bg-accent/30 p-6">
                <img src="/stats-icon.svg" alt="Estatísticas" className="w-16 h-16" />
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="font-bold text-2xl mb-4 text-center md:text-left">Resultados que falam por si</h3>
              <p className="text-gray-100 mb-4">
                Mais de <span className="font-bold text-accent">200 clientes satisfeitos</span> e 
                <span className="font-bold text-accent"> 95% de taxa de retenção</span>. 
                Nossa abordagem focada em resultados já gerou mais de 
                <span className="font-bold text-accent"> 10 milhões de leads</span> para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
