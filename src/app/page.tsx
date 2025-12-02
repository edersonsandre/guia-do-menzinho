"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createUser, login, ApiError } from "@/services/userService";

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isSignUp) {
        // Cadastro
        if (!name.trim() || !email.trim() || !password.trim()) {
          toast.error("Por favor, preencha todos os campos.");
          setIsLoading(false);
          return;
        }

        await createUser({ name: name.trim(), email: email.trim(), password });
        toast.success("Cadastro realizado com sucesso! Faça login para continuar.");
        setIsSignUp(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        // Login
        if (!email.trim() || !password.trim()) {
          toast.error("Por favor, preencha todos os campos para entrar.");
          setIsLoading(false);
          return;
        }

        await login({ email: email.trim(), password });
        toast.success("Login realizado com sucesso!");
        setTimeout(() => router.push("/home"), 500);
      }
    } catch (error: any) {
      const apiError = error as ApiError;
      toast.error(apiError.error || "Erro ao processar solicitação");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="text-center mb-8">
          <img src="/logo.png" alt="Miguel Alencar" className="h-24 mx-auto mb-6 drop-shadow-[0_0_15px_rgba(209,176,115,0.5)]" />
          <h1 className="text-3xl font-serif text-primary tracking-widest uppercase">Curadoria Exclusiva</h1>
          <p className="text-muted-foreground mt-2 font-light tracking-wide">Acesse o universo da alta perfumaria</p>
        </div>

        <Card className="bg-black/40 border border-primary/20 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center font-serif text-white">
              {isSignUp ? "Criar Conta" : "Bem-vindo"}
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              {isSignUp
                ? "Preencha os dados para se cadastrar"
                : "Entre com suas credenciais para continuar"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-primary/50" />
                    <Input 
                      type="text" 
                      placeholder="Seu nome" 
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 h-12"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-primary/50" />
                  <Input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-primary/50" />
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary/50 focus:ring-primary/20 h-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-primary text-black hover:bg-primary/90 font-bold h-12 text-lg shadow-[0_0_15px_rgba(209,176,115,0.3)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Processando..." : isSignUp ? "CADASTRAR" : "ENTRAR"}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground pt-4">
                {isSignUp ? (
                  <span>
                    Já tem uma conta?{" "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="hover:text-primary transition-colors underline"
                      disabled={isLoading}
                    >
                      Fazer login
                    </button>
                  </span>
                ) : (
                  <>
                    <a href="#" className="hover:text-primary transition-colors block mb-2">
                      Esqueceu a senha?
                    </a>
                    <span>
                      Não tem uma conta?{" "}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="hover:text-primary transition-colors underline"
                        disabled={isLoading}
                      >
                        Cadastre-se
                      </button>
                    </span>
                  </>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
        
        <p className="text-center text-xs text-white/20 mt-8 tracking-widest">
          GUIA DO MENZINHO © 2025
        </p>
      </motion.div>
    </div>
  );
}
