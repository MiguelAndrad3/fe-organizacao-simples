
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sua igreja organizada, sem complicação
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Crie sua conta grátis e comece a usar em menos de 2 minutos.
          Não precisa cartão de crédito.
        </p>
        <Button className="bg-white text-primary-500 hover:bg-gray-100 text-lg px-8 py-6 font-semibold shadow-lg">
          Começar agora <ArrowRight size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;
