
import { ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Estratégias de SEO para Pequenas Empresas",
      excerpt: "Confira as melhores práticas de otimização para buscadores que podem impulsionar seu negócio",
      image: "/blog-1.jpg",
      date: "10 Jan 2023",
      category: "SEO",
      url: "#"
    },
    {
      id: 2,
      title: "Como Criar Conteúdos que Convertem nas Redes Sociais",
      excerpt: "Descubra técnicas para desenvolver publicações que geram engajamento e conversões",
      image: "/blog-2.jpg",
      date: "05 Fev 2023",
      category: "Redes Sociais",
      url: "#"
    },
    {
      id: 3,
      title: "Guia Completo de Google Ads para Iniciantes",
      excerpt: "Tudo o que você precisa saber para começar a anunciar no Google e obter resultados",
      image: "/blog-3.jpg",
      date: "22 Mar 2023",
      category: "Tráfego Pago",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-2 flex justify-center items-center">
            <div className="h-1 w-12 bg-accent mr-4"></div>
            <span className="text-primary font-medium uppercase tracking-wider">Blog</span>
            <div className="h-1 w-12 bg-accent ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Dicas e <span className="text-primary">insights</span> de marketing
          </h2>
          <p className="text-gray-700 text-lg">
            Conteúdo relevante para ajudar sua empresa a se destacar no mundo digital.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <a href={post.url} className="block">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 text-sm font-medium rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-3">{post.date}</div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-medium hover:text-accent transition-colors">
                    <span>Leia mais</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary border-b-2 border-primary px-1 py-1 font-semibold hover:text-accent hover:border-accent transition-colors"
          >
            Ver mais artigos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
