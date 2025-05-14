
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "0",
    description: "Ideal para igrejas que estão começando.",
    features: [
      "Até 100 membros",
      "Até 2 ministérios",
      "Cadastro de eventos e escalas",
      "Relatórios simples",
      "Até 10 mensagens por mês",
      "1 usuário administrador"
    ],
    buttonText: "Começar grátis",
    popular: false,
    color: "bg-white"
  },
  {
    name: "Pro",
    price: "39,90",
    description: "Mais recursos para quem precisa de controle.",
    features: [
      "Até 500 membros",
      "Até 10 ministérios",
      "Relatórios em PDF e Excel",
      "Até 100 mensagens por mês",
      "3 usuários administradores",
      "Suporte por e-mail"
    ],
    buttonText: "Assinar Pro",
    popular: true,
    color: "bg-primary-50"
  },
  {
    name: "Plus",
    price: "69,90",
    description: "Para igrejas em crescimento e líderes mais exigentes.",
    features: [
      "Membros ilimitados",
      "Ministérios ilimitados",
      "Relatórios completos",
      "Até 1.000 mensagens por mês",
      "Suporte prioritário",
      "Integração com Google Agenda"
    ],
    buttonText: "Assinar Plus",
    popular: false,
    color: "bg-white"
  }
];

const Pricing = () => {
  return (
    <section id="planos" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
            Planos e Preços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Planos feitos para sua missão</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para as necessidades da sua organização
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl shadow-lg border border-gray-100 overflow-hidden animate-fade-in ${plan.popular ? 'lg:scale-105 lg:-translate-y-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="bg-primary-500 text-white text-center py-2 font-medium">
                  Mais popular
                </div>
              )}
              <div className={`p-8 ${plan.color}`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plano {plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">R$ {plan.price}</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <Button 
                  className={`w-full py-6 ${plan.popular ? 'bg-primary-500 hover:bg-primary-600 text-white' : 'bg-white border border-primary-500 text-primary-500 hover:bg-primary-50'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
              <div className="p-8 bg-white border-t border-gray-100">
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check size={20} className="text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Todos os planos incluem:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm">Sem taxas ocultas</span>
            <span className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm">Cancele quando quiser</span>
            <span className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm">Suporte em português</span>
            <span className="bg-white text-gray-600 px-4 py-2 rounded-full text-sm">Atualizações constantes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
