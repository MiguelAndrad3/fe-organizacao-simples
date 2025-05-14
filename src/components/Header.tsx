
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
            <div className="text-white font-bold">G</div>
          </div>
          <span className="font-display text-xl font-bold text-gray-800">GestorFé</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#recursos" className="font-medium text-gray-600 hover:text-primary-500 transition">Recursos</a>
          <a href="#porque" className="font-medium text-gray-600 hover:text-primary-500 transition">Por quê</a>
          <a href="#planos" className="font-medium text-gray-600 hover:text-primary-500 transition">Planos</a>
          <a href="#faq" className="font-medium text-gray-600 hover:text-primary-500 transition">FAQ</a>
          <Button className="bg-primary-500 hover:bg-primary-600 text-white">Começar grátis</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-primary-500 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 px-4 mt-2 bg-white rounded-lg shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#recursos" className="font-medium text-gray-600 hover:text-primary-500 transition" onClick={() => setMobileMenuOpen(false)}>Recursos</a>
            <a href="#porque" className="font-medium text-gray-600 hover:text-primary-500 transition" onClick={() => setMobileMenuOpen(false)}>Por quê</a>
            <a href="#planos" className="font-medium text-gray-600 hover:text-primary-500 transition" onClick={() => setMobileMenuOpen(false)}>Planos</a>
            <a href="#faq" className="font-medium text-gray-600 hover:text-primary-500 transition" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white w-full" onClick={() => setMobileMenuOpen(false)}>Começar grátis</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
