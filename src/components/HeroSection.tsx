
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/95 to-primary min-h-screen flex items-center text-white pt-16">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transformamos <span className="text-accent">ideias</span> em resultados digitais
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              Estratégias personalizadas de marketing digital para impulsionar o crescimento do seu negócio e conquistar clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato">
                <Button className="btn-accent text-lg px-8 py-6 w-full sm:w-auto">
                  Solicite seu Orçamento <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 w-full sm:w-auto">
                  Conheça Nossos Serviços
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-accent/30 blur-xl"></div>
              <img
                src="/hero-image.png" 
                alt="Marketing Digital"
                className="relative z-10 rounded-lg shadow-2xl max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
