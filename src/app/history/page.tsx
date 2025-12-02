"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Trash2, Search } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

interface HistoryItem {
  date: string;
  mode: 'standard' | 'arab';
  resultId: string;
  resultName: string;
  answers: Record<string, string>;
}

export default function History() {
  const router = useRouter();
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = JSON.parse(localStorage.getItem('quiz_history') || '[]');
      setHistory(savedHistory);
    }
  }, []);

  const clearHistory = () => {
    if (confirm('Tem certeza que deseja limpar todo o histórico?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('quiz_history');
      }
      setHistory([]);
    }
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
          <Calendar className="h-5 w-5" /> Histórico de Consultoria
        </div>
        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 hover:bg-red-900/20" onClick={clearHistory}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="container max-w-3xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Suas Descobertas</h1>
          <p className="text-muted-foreground">Relembre as recomendações personalizadas que o Menzinho fez para você.</p>
        </div>

        {history.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-xl border border-white/10">
            <Search className="h-16 w-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Nenhum histórico encontrado</h3>
            <p className="text-muted-foreground mb-6">Faça o Quiz para descobrir sua assinatura olfativa.</p>
            <Link href="/home">
              <Button className="bg-primary text-black hover:bg-primary/90">Iniciar Consultoria</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer mb-4"
                onClick={() => router.push(`/perfume/${item.resultId}`)}
              >
                <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={item.mode === 'arab' ? 'text-purple-400 border-purple-500/30' : 'text-primary border-primary/30'}>
                        {item.mode === 'arab' ? 'Consultoria Árabe' : 'Consultoria Padrão'}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(item.date).toLocaleDateString('pt-BR')} às {new Date(item.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.resultName}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {Object.entries(item.answers).map(([key, value]) => (
                        <span key={key} className="text-xs text-white/60 bg-black/30 px-2 py-1 rounded">
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowLeft className="h-5 w-5 text-white/20 rotate-180" />
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

