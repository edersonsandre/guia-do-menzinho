"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Droplets, Sun, Cloud, Snowflake, Briefcase, Heart, Music, Trees, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Calculator() {
  const [type, setType] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [result, setResult] = useState<{ sprays: number, message: string } | null>(null);

  const calculateSprays = () => {
    if (!type || !weather || !occasion) return;

    let baseSprays = 0;
    let multiplier = 1;
    let message = "";

    // Base baseada no tipo
    switch (type) {
      case 'fresh': baseSprays = 10; break; // Cítricos precisam de banho
      case 'woody': baseSprays = 6; break;
      case 'sweet': baseSprays = 4; break;
      case 'arab': baseSprays = 2; break; // Árabe é nuclear
    }

    // Ajuste pelo clima
    switch (weather) {
      case 'hot': multiplier *= 0.7; break; // Calor projeta mais, diminui borrifadas
      case 'mild': multiplier *= 1; break;
      case 'cold': multiplier *= 1.5; break; // Frio segura o perfume, aumenta borrifadas
    }

    // Ajuste pela ocasião
    switch (occasion) {
      case 'office': multiplier *= 0.5; break; // Escritório tem que ser discreto
      case 'date': multiplier *= 0.8; break; // Encontro é pra quem chega perto
      case 'party': multiplier *= 1.5; break; // Balada tem que competir com fumaça
      case 'outdoor': multiplier *= 1.2; break; // Ar livre dissipa rápido
    }

    // Aumentando em 50% conforme solicitado
    const finalSprays = Math.max(1, Math.round((baseSprays * multiplier) * 1.5));

    // Mensagens personalizadas
    if (type === 'arab' && finalSprays > 3) {
      message = "Cuidado guerreiro! Isso é uma arma química. Se passar disso, o IBAMA te multa.";
    } else if (occasion === 'office' && finalSprays > 5) {
      message = "Vai sufocar o RH desse jeito. Diminui a mão ou prepara a carta de demissão.";
    } else if (occasion === 'party') {
      message = "Modo Besta ativado! Hoje ninguém te ignora. Vai na fé!";
    } else if (type === 'fresh' && weather === 'hot') {
      message = "Pode sentar o dedo! Nesse calor, até água evapora rápido. Refresque-se!";
    } else {
      message = "Equilíbrio perfeito. Você vai ser notado, mas não odiado.";
    }

    setResult({ sprays: finalSprays, message });
  };

  const reset = () => {
    setType('');
    setWeather('');
    setOccasion('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/home">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Home
          </Button>
        </Link>
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest">
          <Droplets className="h-5 w-5" /> Calculadora de Borrifadas
        </div>
        <div className="w-20"></div>
      </div>

      <div className="container max-w-2xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Quantas Borrifadas?</h1>
          <p className="text-muted-foreground">A ciência exata para não ser o &quot;tio do perfume&quot; no escritório.</p>
        </div>

        {!result ? (
          <div className="space-y-8">
            {/* Tipo de Perfume */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">1. Qual o tipo do perfume?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant={type === 'fresh' ? 'default' : 'outline'} onClick={() => setType('fresh')} className="h-20 flex flex-col gap-2">
                  <Droplets className="h-6 w-6" /> Fresco/Cítrico
                </Button>
                <Button variant={type === 'woody' ? 'default' : 'outline'} onClick={() => setType('woody')} className="h-20 flex flex-col gap-2">
                  <Trees className="h-6 w-6" /> Amadeirado
                </Button>
                <Button variant={type === 'sweet' ? 'default' : 'outline'} onClick={() => setType('sweet')} className="h-20 flex flex-col gap-2">
                  <Heart className="h-6 w-6" /> Doce/Gourmand
                </Button>
                <Button variant={type === 'arab' ? 'default' : 'outline'} onClick={() => setType('arab')} className="h-20 flex flex-col gap-2 border-purple-500/50 text-purple-400">
                  <Globe className="h-6 w-6" /> Árabe Nuclear
                </Button>
              </div>
            </div>

            {/* Clima */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">2. Como está o clima?</h3>
              <div className="grid grid-cols-3 gap-3">
                <Button variant={weather === 'hot' ? 'default' : 'outline'} onClick={() => setWeather('hot')} className="h-20 flex flex-col gap-2">
                  <Sun className="h-6 w-6 text-yellow-500" /> Calor 40°C
                </Button>
                <Button variant={weather === 'mild' ? 'default' : 'outline'} onClick={() => setWeather('mild')} className="h-20 flex flex-col gap-2">
                  <Cloud className="h-6 w-6 text-gray-400" /> Ameno
                </Button>
                <Button variant={weather === 'cold' ? 'default' : 'outline'} onClick={() => setWeather('cold')} className="h-20 flex flex-col gap-2">
                  <Snowflake className="h-6 w-6 text-blue-400" /> Frio
                </Button>
              </div>
            </div>

            {/* Ocasião */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">3. Onde você vai?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button variant={occasion === 'office' ? 'default' : 'outline'} onClick={() => setOccasion('office')} className="h-20 flex flex-col gap-2">
                  <Briefcase className="h-6 w-6" /> Trabalho
                </Button>
                <Button variant={occasion === 'date' ? 'default' : 'outline'} onClick={() => setOccasion('date')} className="h-20 flex flex-col gap-2">
                  <Heart className="h-6 w-6 text-red-500" /> Encontro
                </Button>
                <Button variant={occasion === 'party' ? 'default' : 'outline'} onClick={() => setOccasion('party')} className="h-20 flex flex-col gap-2">
                  <Music className="h-6 w-6 text-purple-500" /> Balada
                </Button>
                <Button variant={occasion === 'outdoor' ? 'default' : 'outline'} onClick={() => setOccasion('outdoor')} className="h-20 flex flex-col gap-2">
                  <Sun className="h-6 w-6" /> Ar Livre
                </Button>
              </div>
            </div>

            <Button 
              className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-primary text-black hover:bg-primary/90"
              disabled={!type || !weather || !occasion}
              onClick={calculateSprays}
            >
              Calcular Dose
            </Button>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <Card className="bg-white/5 border-primary/50 border-2">
              <CardContent className="p-12">
                <h2 className="text-2xl font-light text-muted-foreground mb-4">A dose recomendada é:</h2>
                <div className="text-9xl font-bold text-primary mb-6 drop-shadow-[0_0_30px_rgba(209,176,115,0.5)]">
                  {result.sprays}
                </div>
                <p className="text-xl text-white font-medium italic">
                  &quot;{result.message}&quot;
                </p>
              </CardContent>
            </Card>
            
            <Button variant="outline" onClick={reset} className="border-white/20 text-muted-foreground hover:text-white">
              Calcular Novamente
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

