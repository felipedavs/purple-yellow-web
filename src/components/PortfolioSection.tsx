
import { useState } from "react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const categories = ["Todos", "Sites", "Redes Sociais", "E-commerce", "Campanhas"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const projects = [
    {
      id: 1,
      title: "Site Institucional TechCorp",
      category: "Sites",
      image: "/portfolio-1.jpg",
      description: "Redesign completo de site institucional com foco em UX e conversão"
    },
    {
      id: 2,
      title: "E-commerce Moda Express",
      category: "E-commerce",
      image: "/portfolio-2.jpg",
      description: "Desenvolvimento de loja virtual com integração de pagamentos"
    },
    {
      id: 3,
      title: "Campanha Black Friday",
      category: "Campanhas",
      image: "/portfolio-3.jpg",
      description: "Estratégia e execução de campanha de tráfego pago para Black Friday"
    },
    {
      id: 4,
      title: "Gestão de Instagram Sabor Especial",
      category: "Redes Sociais",
      image: "/portfolio-4.jpg",
      description: "Criação de conteúdo e gestão de Instagram para restaurante"
    },
    {
      id: 5,
      title: "Site Fitness Club",
      category: "Sites",
      image: "/portfolio-5.jpg",
      description: "Site responsivo com sistema de agendamento integrado"
    },
    {
      id: 6,
      title: "E-commerce PetShop Online",
      category: "E-commerce",
      image: "/portfolio-6.jpg",
      description: "Desenvolvimento de plataforma de vendas para produtos pet"
    }
  ];

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex justify-center items-center">
            <div className="h-1 w-12 bg-accent mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider">Portfólio</span>
            <div className="h-1 w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Conheça nossos <span className="text-primary">projetos</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Uma seleção dos melhores trabalhos desenvolvidos para nossos clientes em diferentes segmentos.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-900">{project.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary text-lg px-8 py-6">
            Ver mais projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
