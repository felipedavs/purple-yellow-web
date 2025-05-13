
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      position: "Diretor, TechSolutions",
      image: "/testimonial-1.jpg",
      content: "A parceria com a Agência Digital transformou completamente nossa presença online. Nosso tráfego aumentou em 300% e as conversões duplicaram em apenas três meses."
    },
    {
      id: 2,
      name: "Ana Ferreira",
      position: "CEO, Moda Express",
      image: "/testimonial-2.jpg",
      content: "A gestão de redes sociais realizada pela equipe é simplesmente excepcional. Nosso engajamento cresceu significativamente e as vendas pelo Instagram aumentaram em 70%."
    },
    {
      id: 3,
      name: "Roberto Mendes",
      position: "Gerente, FitLife Academia",
      image: "/testimonial-3.jpg",
      content: "O novo site desenvolvido pela Agência Digital não só ficou visualmente incrível como também melhorou drasticamente nossa taxa de conversão de visitantes em matrículas."
    },
    {
      id: 4,
      name: "Juliana Costa",
      position: "Proprietária, Restaurante Sabor Especial",
      image: "/testimonial-4.jpg",
      content: "As campanhas de tráfego pago geraram um retorno sobre investimento extraordinário. O atendimento personalizado e o comprometimento com resultados fazem toda a diferença."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesToShow = 1;
  const totalSlides = Math.ceil(testimonials.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex justify-center items-center">
            <div className="h-1 w-12 bg-accent mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider">Depoimentos</span>
            <div className="h-1 w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que nossos <span className="text-primary">clientes dizem</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Confira os depoimentos de quem já transformou seu negócio com nossas soluções digitais.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-lg"></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="relative w-32 h-32 md:w-48 md:h-48 object-cover rounded-full border-4 border-accent"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="text-accent text-6xl font-serif mb-4">"</div>
                      <p className="text-gray-700 text-lg md:text-xl mb-6 italic">
                        {testimonial.content}
                      </p>
                      <div className="flex items-center">
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              onClick={prevSlide}
              className="rounded-full p-3 border-primary text-primary hover:bg-primary hover:text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              onClick={nextSlide}
              className="rounded-full p-3 border-primary text-primary hover:bg-primary hover:text-white"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
