'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Headphones, PlayCircle, Rocket, ShieldCheck, Smartphone, Users, Video, ListVideo } from 'lucide-react';

export default function MembersAreaMockup() {
  return (
    <section className="w-full animate-fade-in-up py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-headline text-xl font-semibold md:text-3xl">
          Veja exatamente como você vai acessar a Área de Membros
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-sm md:text-base">
          Acesso imediato pelo celular, tablet ou computador — tudo organizado para resultados rápidos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
        {/* Mockup Section */}
        <div className="lg:col-span-3 relative h-[400px] sm:h-[500px] lg:h-[450px] flex items-center justify-center group">
          {/* Laptop */}
          <div className="relative w-full max-w-2xl aspect-[16/10] bg-slate-900 rounded-t-lg shadow-2xl border-4 border-slate-700 transition-transform duration-300 lg:group-hover:scale-105">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-500 rounded-full"></div>
            <div className="h-full w-full bg-white dark:bg-slate-800 rounded-sm p-2 sm:p-4 overflow-hidden">
                {/* Dashboard content */}
                <div className="flex h-full">
                    {/* Main content */}
                    <div className="flex-grow flex flex-col">
                        <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">Bem-vindo(a), Alex!</p>
                        <div className="mt-2 sm:mt-4">
                            <h3 className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">Seu progresso: 12%</h3>
                            <Progress value={12} className="h-2 mt-1"/>
                            <Button size="sm" className="mt-2 text-xs h-7">Continuar a Aula</Button>
                        </div>

                        <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-4 flex-grow">
                             <Card className="bg-slate-50 dark:bg-slate-700/50 p-2 sm:p-3">
                                <BookOpen className="w-4 h-4 text-primary" />
                                <h4 className="text-xs sm:text-sm font-bold mt-1 text-slate-800 dark:text-white">O Código do Sono</h4>
                                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">6 módulos - 45m</p>
                            </Card>
                             <Card className="bg-slate-50 dark:bg-slate-700/50 p-2 sm:p-3">
                                <PlayCircle className="w-4 h-4 text-primary" />
                                <h4 className="text-xs sm:text-sm font-bold mt-1 text-slate-800 dark:text-white">Entendendo o Sono</h4>
                                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">4 módulos - 28m</p>
                            </Card>
                             <Card className="bg-slate-50 dark:bg-slate-700/50 p-2 sm:p-3">
                                <Headphones className="w-4 h-4 text-primary" />
                                <h4 className="text-xs sm:text-sm font-bold mt-1 text-slate-800 dark:text-white">Técnicas de Relax.</h4>
                                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">6 áudios + 3 vídeos</p>
                            </Card>
                            <Card className="bg-slate-50 dark:bg-slate-700/50 p-2 sm:p-3">
                                <ListVideo className="w-4 h-4 text-primary" />
                                <h4 className="text-xs sm:text-sm font-bold mt-1 text-slate-800 dark:text-white">Rotina Noturna 5min</h4>
                                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Áudio guiado</p>
                            </Card>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="hidden sm:block w-1/3 ml-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg p-3">
                        <h4 className="text-sm font-bold text-slate-800 dark:text-white">Bônus inclusos</h4>
                        <ul className="text-xs mt-2 space-y-1 text-slate-600 dark:text-slate-400">
                            <li>- Áudios premium (50)</li>
                            <li>- Planilha semanal</li>
                            <li>- Checklist diário</li>
                            <li>- Suporte exclusivo</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-slate-900 rounded-b-lg border-x-4 border-b-4 border-slate-700"></div>
          </div>

          {/* Phone */}
          <div className="absolute -bottom-10 -right-4 sm:bottom-0 sm:right-0 w-32 sm:w-40 aspect-[9/19] bg-slate-900 rounded-2xl shadow-2xl border-4 border-slate-700 p-1.5 -rotate-12 transition-transform duration-300 lg:group-hover:rotate-[-8deg] lg:group-hover:scale-110">
            <div className="h-full w-full bg-white dark:bg-slate-800 rounded-lg flex flex-col p-2 items-center">
                <p className="font-bold text-xs text-primary">Sono Militar</p>
                <div className="flex-grow w-full space-y-2 mt-2">
                    <div className="bg-slate-200 dark:bg-slate-700 h-6 w-full rounded"></div>
                    <div className="bg-slate-200 dark:bg-slate-700 h-6 w-full rounded"></div>
                    <div className="bg-slate-200 dark:bg-slate-700 h-6 w-full rounded"></div>
                </div>
                <Button size="sm" className="w-full h-8 text-xs mt-2">Começar</Button>
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-slate-900 rounded-full"></div>
          </div>
        </div>

        {/* Value Points Section */}
        <div className="lg:col-span-2 space-y-6">
            <ul className="space-y-4 text-left">
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Aulas práticas e curtas</h3>
                        <p className="text-muted-foreground text-sm">Aplique em minutos o que aprendeu, sem enrolação.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Smartphone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Acesso imediato no celular</h3>
                        <p className="text-muted-foreground text-sm">Aprenda onde e quando quiser, na palma da sua mão.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-full">
                        <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-foreground">Suporte e comunidade exclusiva</h3>
                        <p className="text-muted-foreground text-sm">Tire suas dúvidas e conecte-se com outros membros.</p>
                    </div>
                </li>
            </ul>

            <div className="space-y-3">
                 <div className="flex items-center gap-4 p-3 border border-green-500/30 bg-green-500/10 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-green-700 dark:text-green-300">Garantia de 7 Dias</h4>
                        <p className="text-xs text-green-800/80 dark:text-green-300/80">Reembolso total, sem burocracia.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-3 border border-primary/20 bg-primary/10 rounded-lg">
                    <Rocket className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-bold text-sm text-primary">Acesso Imediato</h4>
                        <p className="text-xs text-primary/80">Comece a usar assim que o pagamento for aprovado.</p>
                    </div>
                </div>
            </div>

             <div className="text-center lg:text-left">
                <Button variant="outline" className="w-full max-w-xs mx-auto lg:mx-0">
                    VER A ÁREA
                </Button>
            </div>
        </div>

      </div>
    </section>
  );
}
