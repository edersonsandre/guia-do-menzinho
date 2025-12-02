"use client";

import { Button } from "@/components/ui/button";
import Quiz from "@/components/Quiz";
import { motion } from "framer-motion";
import { ArrowDown, Search, Droplets, History } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { perfumes } from "@/lib/perfumes_data";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Home() {
  const router = useRouter();
  const scrollToQuiz = () => {
    const quizSection = document.getElementById('quiz-section');
    quizSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const found = perfumes.find(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.cloneName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.arabName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      router.push(`/perfume/${found.id}`);
    } else {
      const partialMatch = perfumes.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchTerm.toLowerCase())
      )[0];
      
      if (partialMatch) {
        router.push(`/perfume/${partialMatch.id}`);
      } else {
        alert("Perfume não encontrado na base do Menzinho!");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url(/hero-bg.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background z-10" />

        <div className="container relative z-20 text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/logo.png" alt="Miguel Alencar" className="h-32 md:h-48 mx-auto mb-8 drop-shadow-[0_0_25px_rgba(209,176,115,0.6)]" />
            <h2 className="text-primary text-sm md:text-lg uppercase tracking-[0.5em] mb-6 font-light border-b border-primary/30 pb-4 inline-block">
              Curadoria Exclusiva
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-wide">
              ALTA PERFUMARIA <br/><span className="text-primary italic font-light">&</span> CONTRATIPOS
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Descubra sua assinatura olfativa através da seleção definitiva de perfumes de nicho e seus contratipos perfeitos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col items-center gap-6 w-full max-w-md mx-auto"
          >
            <form onSubmit={handleSearch} className="relative w-full group">
              <Input 
                type="text" 
                placeholder="Pesquisar perfume (ex: Aventus, Asad, 9pm)..." 
                className="w-full bg-black/40 border-white/20 text-white placeholder:text-white/40 h-12 pl-12 pr-4 rounded-none focus:border-primary transition-all duration-300 backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors duration-300 h-5 w-5" />
              <Button 
                type="submit"
                variant="ghost"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80 hover:bg-transparent p-2 h-auto"
              >
                IR
              </Button>
            </form>

            <div className="grid grid-cols-1 gap-4 w-full">
              <Button 
                size="lg" 
                className="w-full bg-primary text-black hover:bg-primary/90 text-sm md:text-base py-6 rounded-none uppercase tracking-widest font-bold"
                onClick={scrollToQuiz}
              >
                Consultoria
              </Button>
            </div>

            {/* Ferramentas Extras */}
            <div className="flex gap-4 w-full justify-center">
              <Link href="/calculator">
                <Button variant="link" className="text-white/60 hover:text-primary text-xs uppercase tracking-wider">
                  <Droplets className="w-3 h-3 mr-1" /> Calc. Borrifadas
                </Button>
              </Link>
              <Link href="/history">
                <Button variant="link" className="text-white/60 hover:text-primary text-xs uppercase tracking-wider">
                  <History className="w-3 h-3 mr-1" /> Meu Histórico
                </Button>
              </Link>
            </div>

          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* Quiz Section */}
      <section id="quiz-section" className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-[url('/quiz-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
              Consultoria Olfativa
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Responda a 3 perguntas rápidas e nossa inteligência encontrará a fragrância exata para o seu momento.
            </p>
          </div>

          <Quiz />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="container text-center space-y-4">
          <h3 className="text-2xl font-serif text-primary">Guia do Menzinho</h3>
          <p className="text-sm text-muted-foreground">
            Curadoria independente baseada nas análises de Miguel Palencar.
            <br />
            Não possuímos afiliação oficial com as marcas citadas.
          </p>
          <p className="text-xs text-white/20 mt-8">
            © 2025 Guia do Menzinho. Design by Manus.
          </p>
        </div>
      </footer>
    </div>
  );
}

