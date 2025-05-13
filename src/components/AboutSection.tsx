
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      title: "Compromisso",
      description: "Entregamos resultados reais com prazos respeitados"
    },
    {
      title: "Integridade",
      description: "Transparência em todos os processos e relacionamentos"
    },
    {
      title: "Respeito",
      description: "Valorizamos cada cliente e suas necessidades únicas"
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"></div>
              <img
                src="/about-image.jpg"
                alt="Nossa equipe"
                className="relative rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent rounded-lg p-4 shadow-lg">
                <p className="font-poppins font-bold text-3xl">+10</p>
                <p className="text-sm">Anos de experiência</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="mb-2 flex items-center">
              <div className="h-1 w-12 bg-accent mr-4"></div>
              <span className="text-primary font-medium uppercase tracking-wider">Sobre nós</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uma agência focada em <span className="text-primary">resultados</span>
            </h2>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Somos uma agência de marketing digital completa, desenvolvendo soluções criativas e estratégicas para empresas que desejam crescer no ambiente online. Nossa missão é transformar a presença digital de nossos clientes através de estratégias personalizadas e resultados mensuráveis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-accent" />
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
