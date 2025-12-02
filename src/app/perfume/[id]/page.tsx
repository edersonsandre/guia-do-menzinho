"use client";

import { useParams, useRouter } from 'next/navigation';
import { perfumes } from '@/lib/perfumes_data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Star, ShoppingBag, Globe, Flag, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { getRandomPhrase } from "@/lib/miguel_phrases";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function PerfumeDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const perfume = perfumes.find(p => p.id === id);
  
  // Estado para controlar qual versão está selecionada (niche, br, arab)
  const [selectedVersion, setSelectedVersion] = useState<'niche' | 'br' | 'arab'>('niche');

  const phrases = useMemo(() => ({
    economize: getRandomPhrase('economize'),
    similaridade: getRandomPhrase('similaridade'),
    cta: getRandomPhrase('cta')
  }), [perfume?.id]);

  if (!perfume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Perfume não encontrado</h2>
          <Button variant="outline" onClick={() => router.push('/home')}>Voltar para Home</Button>
        </div>
      </div>
    );
  }

  // Dados dinâmicos baseados na seleção
  const currentData = useMemo(() => {
    if (selectedVersion === 'br') {
      return {
        name: perfume.cloneName || 'Opção Nacional',
        brand: perfume.cloneBrand || 'Marca BR',
        image: perfume.cloneImage || perfume.image,
        price: 'R$ 180,00 - R$ 250,00', // Estimativa média
        description: `A opção inteligente do Menzinho! ${phrases.similaridade} Economize muito sem perder a elegância.`,
        tag: 'Custo-Benefício BR 🇧🇷',
        buyLink: 'https://www.nuancielo.com.br/?cupom=MIGUEL'
      };
    }
    if (selectedVersion === 'arab') {
      return {
        name: perfume.arabName || 'Opção Árabe',
        brand: perfume.arabBrand || 'Marca Árabe',
        image: perfume.arabImage || '/images/clones/arabian_placeholder.jpg',
        price: 'R$ 300,00 - R$ 600,00', // Estimativa média
        description: 'O Hype Internacional! Performance nuclear e frascos luxuosos. A escolha de quem quer status e potência.',
        tag: 'Hype Árabe 🇦🇪',
        buyLink: 'https://www.thekingofparfums.com.br/'
      };
    }
    return {
      name: perfume.name,
      brand: perfume.brand,
      image: perfume.image,
      price: perfume.price,
      description: perfume.description,
      tag: 'A Referência Mundial 🌍',
      buyLink: null
    };
  }, [selectedVersion, perfume, phrases]);

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 transition-all duration-700"
          style={{ backgroundImage: `url(${currentData.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        
        <div className="container relative h-full flex items-end pb-8">
          <Button 
            variant="ghost" 
            className="absolute top-4 left-4 text-white hover:bg-white/10"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
          </Button>
        </div>
      </div>

      <div className="container -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Coluna da Imagem Principal */}
          <div className="md:col-span-4 lg:col-span-3">
            <motion.div 
              key={selectedVersion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black relative group"
            >
              <img 
                src={currentData.image} 
                alt={currentData.name} 
                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 right-2">
                <Badge className={cn(
                  "text-xs font-bold px-3 py-1 shadow-lg",
                  selectedVersion === 'niche' ? "bg-yellow-500 text-black" :
                  selectedVersion === 'br' ? "bg-green-600 text-white" :
                  "bg-purple-600 text-white"
                )}>
                  {currentData.tag}
                </Badge>
              </div>
            </motion.div>

            {/* Seletor de Versão (Mobile - Abaixo da imagem) */}
            <div className="flex md:hidden gap-2 mt-4 justify-center flex-wrap">
              <Button 
                size="sm" 
                variant={selectedVersion === 'niche' ? 'default' : 'outline'}
                onClick={() => setSelectedVersion('niche')}
                className="flex-1 min-w-[80px] text-xs px-2"
              >
                Original
              </Button>
              {perfume.cloneName && (
                <Button 
                  size="sm" 
                  variant={selectedVersion === 'br' ? 'default' : 'outline'}
                  onClick={() => setSelectedVersion('br')}
                  className="flex-1 min-w-[80px] text-xs px-2 border-green-600/50 text-green-500 hover:text-green-400"
                >
                  BR 🇧🇷
                </Button>
              )}
              {perfume.arabName && (
                <Button 
                  size="sm" 
                  variant={selectedVersion === 'arab' ? 'default' : 'outline'}
                  onClick={() => setSelectedVersion('arab')}
                  className="flex-1 min-w-[80px] text-xs px-2 border-purple-600/50 text-purple-500 hover:text-purple-400"
                >
                  Árabe 🇦🇪
                </Button>
              )}
            </div>
          </div>

          {/* Coluna de Informações */}
          <div className="md:col-span-8 lg:col-span-9 space-y-6 pt-4">
            
            {/* Cabeçalho com Seletor Desktop */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-primary border-primary/50 uppercase tracking-widest text-xs">
                    {perfume.type}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-bold">{perfume.rating}/5</span>
                  </div>
                </div>
                <motion.h1 
                  key={currentData.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-4xl md:text-5xl font-bold mb-1 font-serif"
                >
                  {currentData.name}
                </motion.h1>
                <motion.p 
                  key={currentData.brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl text-muted-foreground font-light"
                >
                  {currentData.brand}
                </motion.p>
              </div>

              {/* Seletor Desktop */}
              <div className="hidden md:flex bg-card/50 p-1 rounded-lg border border-white/10">
                <button
                  onClick={() => setSelectedVersion('niche')}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                    selectedVersion === 'niche' ? "bg-primary text-primary-foreground shadow-md" : "hover:bg-white/5 text-muted-foreground"
                  )}
                >
                  <Crown className="w-4 h-4" /> Original
                </button>
                {perfume.cloneName && (
                  <button
                    onClick={() => setSelectedVersion('br')}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                      selectedVersion === 'br' ? "bg-green-600 text-white shadow-md" : "hover:bg-white/5 text-muted-foreground"
                    )}
                  >
                    <Flag className="w-4 h-4" /> Nacional (BR)
                  </button>
                )}
                {perfume.arabName && (
                  <button
                    onClick={() => setSelectedVersion('arab')}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                      selectedVersion === 'arab' ? "bg-purple-600 text-white shadow-md" : "hover:bg-white/5 text-muted-foreground"
                    )}
                  >
                    <Globe className="w-4 h-4" /> Árabe (Hype)
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-card/50 border-white/5 overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
                      {selectedVersion === 'niche' ? 'A Resenha do Menzinho' : 
                       selectedVersion === 'br' ? 'Por que escolher o Nacional?' : 
                       'Por que escolher o Árabe?'}
                    </h3>
                    <span className="text-xl font-bold text-white">{currentData.price}</span>
                  </div>
                  
                  <motion.p 
                    key={currentData.description}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    "{currentData.description}"
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {perfume.occasions.map(occ => (
                      <Badge key={occ} variant="secondary" className="bg-secondary/50">
                        {occ}
                      </Badge>
                    ))}
                  </div>

                  {currentData.buyLink && (
                    <div className="pt-4 mt-4 border-t border-white/10">
                      <Button 
                        className={cn(
                          "w-full md:w-auto gap-2 font-bold shadow-lg uppercase text-white",
                          selectedVersion === 'br' ? "bg-green-600 hover:bg-green-700 shadow-green-900/20" :
                          "bg-purple-600 hover:bg-purple-700 shadow-purple-900/20"
                        )}
                        onClick={() => window.open(currentData.buyLink!, '_blank')}
                      >
                        <ShoppingBag className="h-4 w-4" />
                        {selectedVersion === 'br' ? 'Comprar com Cupom MIGUEL' : 'Ver Oferta na King of Parfums'}
                      </Button>
                      {selectedVersion === 'br' && (
                        <p className="text-xs text-muted-foreground mt-2">Use o cupom: <span className="text-green-500 font-bold">MIGUEL</span> para desconto extra.</p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Pirâmide Olfativa (Sempre do Original para referência) */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-serif">Pirâmide Olfativa (Referência)</h3>
                {selectedVersion === 'arab' && perfume.arabNotes && (
                  <Badge variant="outline" className="text-purple-400 border-purple-400/30">
                    Notas do Árabe: {perfume.arabNotes}
                  </Badge>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Notas de Topo</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.top.map(note => (
                      <span key={note} className="text-sm font-medium">{note}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Notas de Coração</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.heart.map(note => (
                      <span key={note} className="text-sm font-medium">{note}</span>
                    ))}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                  <h4 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Notas de Base</h4>
                  <div className="flex flex-wrap gap-2">
                    {perfume.notes.base.map(note => (
                      <span key={note} className="text-sm font-medium">{note}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

