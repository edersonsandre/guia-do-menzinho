"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { perfumes } from '@/lib/perfumes_data';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, RefreshCcw, Sparkles, Globe, Crown, History } from 'lucide-react';
import Link from 'next/link';

interface QuizStep {
  question: string;
  options: { label: string; value: string; icon?: any }[];
  key: string;
}

// Fluxo Normal (Consultoria Completa)
const standardSteps: QuizStep[] = [
  {
    question: "Qual a ocasião principal?",
    key: 'occasion',
    options: [
      { label: 'Dia a Dia / Trabalho', value: 'Trabalho' },
      { label: 'Encontro Romântico', value: 'Encontro' },
      { label: 'Festa / Balada', value: 'Festa' },
      { label: 'Ocasião Especial / Formal', value: 'Formal' },
      { label: 'Dias Quentes / Verão', value: 'Verão' },
      { label: 'Dias Frios / Inverno', value: 'Inverno' }
    ]
  },
  {
    question: "Qual vibe você quer passar?",
    key: 'vibe',
    options: [
      { label: 'Elegante e Sofisticado', value: 'Elegante' },
      { label: 'Sedutor e Misterioso', value: 'Sedutor' },
      { label: 'Energético e Vibrante', value: 'Alegre' },
      { label: 'Limpo e Fresco', value: 'Limpo' },
      { label: 'Poderoso e Marcante', value: 'Assinatura' }
    ]
  },
  {
    question: "Qual seu orçamento hoje?",
    key: 'budget',
    options: [
      { label: 'Quero o melhor do Nicho (Sem limites)', value: 'Niche' },
      { label: 'Quero o melhor Custo-Benefício (Contratipo)', value: 'Clone' }
    ]
  }
];

// Fluxo Árabe (Focado em Potência e Hype)
const arabSteps: QuizStep[] = [
  {
    question: "O que você busca em um perfume árabe?",
    key: 'arab_goal',
    options: [
      { label: 'Performance Nuclear (Projeta muito)', value: 'Nuclear' },
      { label: 'Frasco Luxuoso (Para colecionar)', value: 'Luxo' },
      { label: 'Cheiro de Rico (Elegância)', value: 'Rico' },
      { label: 'Clone Perfeito (Igual ao nicho)', value: 'Clone' }
    ]
  },
  {
    question: "Qual família olfativa você prefere?",
    key: 'arab_family',
    options: [
      { label: 'Oud e Madeiras (Intenso)', value: 'Oud' },
      { label: 'Especiarias e Tabaco (Quente)', value: 'Spicy' },
      { label: 'Cítrico e Fresco (Versátil)', value: 'Fresh' },
      { label: 'Doce e Baunilha (Sedutor)', value: 'Sweet' }
    ]
  }
];

export default function Quiz() {
  const [mode, setMode] = useState<'initial' | 'standard' | 'arab'>('initial');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<typeof perfumes[0] | null>(null);
  const [secondaryResult, setSecondaryResult] = useState<typeof perfumes[0] | null>(null);

  const activeSteps = mode === 'standard' ? standardSteps : arabSteps;

  const handleModeSelect = (selectedMode: 'standard' | 'arab') => {
    setMode(selectedMode);
    setCurrentStep(0);
  };

  const handleOptionClick = (value: string) => {
    const currentKey = activeSteps[currentStep].key;
    const newAnswers = { ...answers, [currentKey]: value };
    setAnswers(newAnswers);

    if (currentStep < activeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<string, string>) => {
    let scoredPerfumes = perfumes.map(perfume => {
      let score = 0;
      
      if (mode === 'standard') {
        // Lógica Padrão
        if (perfume.occasions.includes(finalAnswers.occasion)) score += 3;
        const vibeKeywords = finalAnswers.vibe.toLowerCase().split(' ');
        const descriptionLower = perfume.description.toLowerCase();
        if (vibeKeywords.some(k => descriptionLower.includes(k))) score += 2;
        if (perfume.occasions.some(o => vibeKeywords.some(k => o.toLowerCase().includes(k)))) score += 1;
      } else {
        // Lógica Árabe
        if (!perfume.arabName) return { ...perfume, score: -1 }; // Só considera quem tem versão árabe

        // Peso para Performance/Luxo (Baseado em palavras-chave na descrição)
        const desc = perfume.description.toLowerCase();
        if (finalAnswers.arab_goal === 'Nuclear' && (desc.includes('bomba') || desc.includes('projeta'))) score += 3;
        if (finalAnswers.arab_goal === 'Luxo' && (desc.includes('elegante') || desc.includes('sofisticado'))) score += 3;
        if (finalAnswers.arab_goal === 'Rico' && (desc.includes('rico') || desc.includes('poder'))) score += 3;
        if (finalAnswers.arab_goal === 'Clone' && (desc.includes('igual') || desc.includes('idêntico'))) score += 3;

        // Peso para Família Olfativa (Baseado nas notas)
        const notes = JSON.stringify(perfume.notes).toLowerCase();
        if (finalAnswers.arab_family === 'Oud' && (notes.includes('oud') || notes.includes('madeira'))) score += 3;
        if (finalAnswers.arab_family === 'Spicy' && (notes.includes('tabaco') || notes.includes('pimenta'))) score += 3;
        if (finalAnswers.arab_family === 'Fresh' && (notes.includes('limão') || notes.includes('bergamota'))) score += 3;
        if (finalAnswers.arab_family === 'Sweet' && (notes.includes('baunilha') || notes.includes('fava tonka'))) score += 3;
      }
      
      return { ...perfume, score };
    });

    // Filtrar e Ordenar
    const validPerfumes = scoredPerfumes.filter(p => p.score >= 0);
    const sortedPerfumes = validPerfumes.sort((a, b) => b.score - a.score);
    
    const bestMatch = sortedPerfumes[0];
    const alternatives = sortedPerfumes.slice(1, 5);
    const secondMatch = alternatives.length > 0 
      ? alternatives[Math.floor(Math.random() * alternatives.length)] 
      : null;

    setResult(bestMatch);
    setSecondaryResult(secondMatch);

    // Salvar no Histórico
    const historyItem = {
      date: new Date().toISOString(),
      mode: mode,
      resultId: bestMatch.id,
      resultName: bestMatch.name,
      answers: finalAnswers
    };
    
    if (typeof window !== 'undefined') {
      const currentHistory = JSON.parse(localStorage.getItem('quiz_history') || '[]');
      localStorage.setItem('quiz_history', JSON.stringify([historyItem, ...currentHistory].slice(0, 10))); // Manter apenas os últimos 10
    }
  };

  const resetQuiz = () => {
    setMode('initial');
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
    setSecondaryResult(null);
  };

  const tryAnother = () => {
    if (secondaryResult) {
      setResult(secondaryResult);
      setSecondaryResult(null);
    } else {
      resetQuiz();
    }
  };

  // Tela Inicial de Seleção de Modo
  if (mode === 'initial') {
    return (
      <Card className="w-full max-w-2xl mx-auto border-none bg-transparent shadow-none">
        <CardHeader className="text-center pb-8">
          <CardTitle className="text-3xl font-serif text-white tracking-wide mb-2">
            O que você busca hoje?
          </CardTitle>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-4" />
          <Link href="/history">
            <Button variant="link" className="text-muted-foreground hover:text-primary">
              <History className="mr-2 h-4 w-4" /> Ver meu histórico
            </Button>
          </Link>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button 
            variant="outline" 
            className="h-40 flex flex-col gap-4 border-white/10 bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 group rounded-xl"
            onClick={() => handleModeSelect('standard')}
          >
            <Crown className="h-10 w-10 text-primary group-hover:text-black transition-colors" />
            <div className="text-center">
              <span className="block text-lg font-bold uppercase tracking-widest mb-1">Consultoria Completa</span>
              <span className="text-xs opacity-70 font-light">Descubra o perfume ideal para qualquer ocasião</span>
            </div>
          </Button>

          <Button 
            variant="outline" 
            className="h-40 flex flex-col gap-4 border-purple-500/30 bg-purple-900/10 hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 group rounded-xl"
            onClick={() => handleModeSelect('arab')}
          >
            <Globe className="h-10 w-10 text-purple-500 group-hover:text-white transition-colors" />
            <div className="text-center">
              <span className="block text-lg font-bold uppercase tracking-widest mb-1">Descobrir meu Árabe</span>
              <span className="text-xs opacity-70 font-light">Focado em potência, luxo e hype internacional</span>
            </div>
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Tela de Resultado
  if (result) {
    const showClone = answers.budget === 'Clone';
    const showArab = mode === 'arab';
    
    // Determinar qual versão mostrar no resultado
    let displayData = {
      name: result.name,
      brand: result.brand,
      image: result.image,
      title: "Escolha de Nicho Suprema",
      desc: "Você pediu exclusividade? Toma essa obra-prima, meu kiridu!",
      badge: "Perfumaço!"
    };

    if (showClone) {
      displayData = {
        name: result.cloneName || result.name,
        brand: result.cloneBrand || result.brand,
        image: result.cloneImage || result.image,
        title: "Achado do Menzinho!",
        desc: "BORA, BORA! Economiza essa grana e cheira igual a um rei!",
        badge: "Custo-Benefício 10/10"
      };
    } else if (showArab) {
      displayData = {
        name: result.arabName || result.name,
        brand: result.arabBrand || result.brand,
        image: result.arabImage || '/images/clones/arabian_placeholder.jpg',
        title: "O Hype Árabe Definitivo",
        desc: "Prepare-se para ser notado. Isso aqui projeta até na alma!",
        badge: "Modo Besta 🦁"
      };
    }
    
    return (
      <Card className="w-full max-w-3xl mx-auto border-primary/20 bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/10">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-primary font-serif">
            {displayData.title}
          </CardTitle>
          <CardDescription className="text-lg">
            {displayData.desc}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2 relative group">
            <div className={`absolute inset-0 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity ${showArab ? 'bg-purple-600/30' : 'bg-primary/20'}`} />
            <img 
              src={displayData.image} 
              alt={displayData.name} 
              className="relative w-full h-auto rounded-lg shadow-lg border border-white/10 transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className={`absolute -top-4 -right-4 px-4 py-2 rounded-full font-bold shadow-lg rotate-12 z-10 ${showArab ? 'bg-purple-600 text-white' : 'bg-primary text-primary-foreground'}`}>
              {displayData.badge}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <div>
              <h3 className="text-3xl font-bold text-foreground font-serif">{displayData.name}</h3>
              <p className={`text-xl font-medium ${showArab ? 'text-purple-400' : 'text-primary'}`}>{displayData.brand}</p>
            </div>
            
            <div className="space-y-4">
              <div className={`p-4 bg-white/5 rounded-lg border-l-4 ${showArab ? 'border-purple-500' : 'border-primary'}`}>
                <p className="text-muted-foreground italic text-lg">
                  &quot;{result.description}&quot;
                </p>
                <p className={`text-right text-sm font-bold mt-2 ${showArab ? 'text-purple-500' : 'text-primary'}`}>- O Menzinho</p>
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg border border-white/10">
                <p className="text-sm font-semibold mb-2">
                  {showArab ? "Quer ver a inspiração original?" : "Quer ver outras versões?"}
                </p>
                <Link href={`/perfume/${result.id}`}>
                  <div className="flex items-center gap-3 cursor-pointer hover:bg-white/5 p-2 rounded transition-colors">
                    <div className="w-12 h-12 bg-white rounded overflow-hidden flex-shrink-0">
                      <img src={result.image} alt={result.name} className="w-full h-full object-cover opacity-80" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{result.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Ver todas as opções (Nicho, BR, Árabe)
                      </p>
                    </div>
                    <ArrowRight className="ml-auto h-4 w-4 text-primary" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {result.occasions.slice(0, 3).map(occ => (
                <span key={occ} className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider border ${showArab ? 'bg-purple-900/20 text-purple-400 border-purple-500/30' : 'bg-primary/20 text-primary border-primary/20'}`}>
                  {occ}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className={`w-full h-12 text-lg font-bold shadow-[0_0_15px_rgba(191,155,48,0.4)] ${showArab ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/30' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}>
            <Link href={`/perfume/${result.id}`}>
              VER ONDE COMPRAR
            </Link>
          </Button>
          <div className="flex gap-2 w-full">
            <Button variant="outline" onClick={resetQuiz} className="flex-1 border-white/20 text-muted-foreground hover:text-foreground hover:bg-white/5">
              <RefreshCcw className="mr-2 h-4 w-4" /> Refazer Quiz
            </Button>
            {secondaryResult && (
              <Button variant="outline" onClick={tryAnother} className="flex-1 border-primary/50 text-primary hover:bg-primary/10 hover:text-primary">
                <Sparkles className="mr-2 h-4 w-4" /> Tentar Outro
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Tela de Perguntas (Padrão ou Árabe)
  return (
      <Card className="w-full max-w-xl mx-auto border-none bg-transparent shadow-none">
        <CardHeader className="text-center pb-12">
          <CardTitle className="text-4xl font-serif text-white tracking-wide mb-2">
            {mode === 'arab' ? 'Consultoria Árabe' : 'Sua Assinatura'}
          </CardTitle>
          <div className={`w-16 h-[1px] mx-auto mb-4 ${mode === 'arab' ? 'bg-purple-500' : 'bg-primary'}`} />
          <CardDescription className={`uppercase tracking-[0.2em] text-xs ${mode === 'arab' ? 'text-purple-400' : 'text-primary/80'}`}>
            Passo {currentStep + 1} / {activeSteps.length}
          </CardDescription>
        </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-medium text-center mb-6">{activeSteps[currentStep].question}</h3>
            <div className="grid grid-cols-1 gap-3">
              {activeSteps[currentStep].options.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  className={`h-16 text-lg justify-between border-white/10 bg-white/5 transition-all duration-300 group rounded-none uppercase tracking-wide font-light ${mode === 'arab' ? 'hover:bg-purple-600 hover:text-white hover:border-purple-500' : 'hover:bg-primary hover:text-black hover:border-primary'}`}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.label}
                  <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity text-current" />
                </Button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="justify-center pb-6">
        <div className="flex gap-2">
          {activeSteps.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === currentStep ? (mode === 'arab' ? 'bg-purple-500' : 'bg-primary') : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}

