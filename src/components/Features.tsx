
import { Check } from "lucide-react";

const features = [
  {
    title: "Cadastro de membros",
    description: "Gerencie dados completos de membros e visitantes com histórico e campos personalizados.",
    icon: "👥"
  },
  {
    title: "Controle de ministérios",
    description: "Organize departamentos e escalas automatizadas para voluntários.",
    icon: "📋"
  },
  {
    title: "Gestão de eventos",
    description: "Crie e acompanhe eventos com confirmação de presença online.",
    icon: "🗓️"
  },
  {
    title: "Controle financeiro",
    description: "Registre dízimos, ofertas e despesas com relatórios detalhados.",
    icon: "💰"
  },
  {
    title: "Relatórios automáticos",
    description: "Gere relatórios em PDF e Excel com gráficos e estatísticas.",
    icon: "📊"
  },
  {
    title: "Comunicação integrada",
    description: "Envie avisos por WhatsApp e e-mail diretamente da plataforma.",
    icon: "📱"
  }
];

const Features = () => {
  return (
    <section id="recursos" className="py-20 px-4 md:px-8 bg-gradient-to-br from-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Funcionalidades pensadas para sua missão</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ferramentas práticas que facilitam a gestão do dia a dia no ministério
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-primary-500">
                <Check size={16} className="mr-1" />
                <span className="text-sm font-medium">Incluído em todos os planos</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
