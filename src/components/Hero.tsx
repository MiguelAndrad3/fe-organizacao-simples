
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white z-0"></div>
      
      {/* Church illustration - abstract shape */}
      <div className="absolute right-0 bottom-0 transform translate-x-1/3 opacity-20 z-0">
        <div className="w-64 h-64 md:w-96 md:h-96 bg-primary-100 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
              Organize sua igreja ou ONG
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Organização <span className="text-primary-500">simples</span>, prática e acessível
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              O GestorFé é a plataforma completa para gerenciar membros, escalas, eventos e finanças com facilidade — tudo em um só lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white text-lg px-8 py-6">Começar grátis</Button>
              <Button variant="outline" className="text-primary-500 border-primary-500 hover:bg-primary-50 text-lg px-8 py-6">Ver demonstração</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Não precisa de cartão de crédito. Comece em 2 minutos.</p>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in-slow">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-primary-100 rounded-full animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-12 h-12 bg-primary-100 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="aspect-[4/3] bg-white p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <img 
                  src="/lovable-uploads/3b5f585b-90f2-4cdd-b82c-2ebff5e54fdf.png"
                  alt="Interface do GestorFé" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
