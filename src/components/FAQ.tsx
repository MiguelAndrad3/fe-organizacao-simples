
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Posso usar no celular?",
    answer: "Sim! O GestorFé funciona em qualquer dispositivo com internet. Nossa interface se adapta perfeitamente a smartphones, tablets e computadores."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Claro! Você não fica preso em nenhum contrato. Você pode cancelar a qualquer momento sem custos adicionais ou compromisso de longo prazo."
  },
  {
    question: "É possível exportar relatórios?",
    answer: "Sim! Oferecemos exportação para PDF e Excel em todos os planos. Nos planos Pro e Plus, você pode personalizar os relatórios com o logo da sua igreja."
  },
  {
    question: "Tem limite de usuários?",
    answer: "Depende do plano. No plano Básico, você tem 1 usuário administrador. No plano Pro, são 3 administradores. No Plus, você tem acesso total e ilimitado."
  },
  {
    question: "Como funciona o envio de mensagens?",
    answer: "Através da plataforma, você pode enviar mensagens diretamente para o WhatsApp ou e-mail dos seus membros. Cada plano tem um limite mensal de mensagens."
  },
  {
    question: "O sistema é seguro para meus dados?",
    answer: "Absolutamente! Utilizamos criptografia de ponta a ponta e seguimos os mais rigorosos padrões de segurança para proteger todas as suas informações."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium text-sm mb-6">
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">
            Esclarecemos as dúvidas mais comuns sobre o GestorFé
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="animate-fade-in bg-gray-50 rounded-lg border border-gray-100 px-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="text-lg font-medium text-gray-800 py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center bg-primary-50 p-6 rounded-xl border border-primary-100 animate-fade-in-slow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-4">
            Entre em contato com nossa equipe para obter ajuda personalizada.
          </p>
          <div className="text-primary-500 font-medium">
            suporte@gestorfe.com.br
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
