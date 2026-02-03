import {
  ClipboardList,
  LayoutGrid,
  Clapperboard,
  BookOpen,
  Users,
  MailQuestion,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';

export type WhatYouGetItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whatYouGetData: WhatYouGetItem[] = [
  {
    icon: ClipboardList,
    title: 'Diagnóstico personalizado do seu sono',
    description: 'Entenda exatamente o que está impedindo você de dormir com um relatório claro e objetivo.',
  },
  {
    icon: LayoutGrid,
    title: 'Área de membros premium estilo Netflix',
    description: 'Acesse todo o conteúdo de forma organizada e intuitiva, como você já está acostumado.',
  },
  {
    icon: Clapperboard,
    title: '15 aulas gravadas em vídeo',
    description: 'Aulas curtas e práticas (5-10 min) para você aplicar o método sem perder tempo.',
  },
  {
    icon: BookOpen,
    title: 'Ebook: O Código do Sono',
    description: 'O método completo em um guia PDF para consultar sempre que precisar, direto no seu celular.',
  },
  {
    icon: Users,
    title: 'Comunidade exclusiva',
    description: 'Conecte-se com pessoas que entendem o que você passa e acelere seus resultados.',
  },
  {
    icon: MailQuestion,
    title: 'Suporte personalizado',
    description: 'Tire suas dúvidas diretamente com nossa equipe de especialistas e não fique travado.',
  },
  {
    icon: Smartphone,
    title: 'Acesso imediato pelo celular',
    description: 'Receba seu login na hora e comece a estudar pelo celular, tablet ou computador.',
  },
];
