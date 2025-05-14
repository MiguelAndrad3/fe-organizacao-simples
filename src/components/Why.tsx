
const reasons = [
  {
    title: "Acesso de qualquer lugar",
    description: "Use no celular, tablet ou computador, com sincronia em tempo real.",
    icon: "📱"
  },
  {
    title: "Segurança garantida",
    description: "Seus dados são protegidos e criptografados com padrões de segurança.",
    icon: "🔒"
  },
  {
    title: "Ideal para qualquer tamanho",
    description: "Perfeito para igrejas pequenas, médias ou em crescimento.",
    icon: "👨‍👩‍👧‍👦"
  },
  {
    title: "Foco em praticidade",
    description: "Interface intuitiva projetada para simplificar o dia a dia do ministério.",
    icon: "🎯"
  }
];

const Why = () => {
  return (
    <section id="porque" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que usar o GestorFé?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvido especialmente para atender as necessidades de igrejas e organizações sem fins lucrativos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex gap-6 p-6 bg-primary-50 rounded-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
            Depoimento
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-gray-800 max-w-3xl mx-auto mb-6">
            "Organizamos nossas escalas e transmissões como nunca antes. O time agora sabe exatamente o que fazer."
          </blockquote>
          <div className="flex items-center justify-center">
            <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div className="ml-4 text-left">
              <div className="font-bold">Pr. Lucas</div>
              <div className="text-gray-600 text-sm">Igreja Cristã de Aliança</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
