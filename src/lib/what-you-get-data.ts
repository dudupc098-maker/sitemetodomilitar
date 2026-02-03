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
};

export const whatYouGetData: WhatYouGetItem[] = [
  {
    icon: ClipboardList,
    title: 'Diagnóstico personalizado do seu sono',
  },
  {
    icon: LayoutGrid,
    title: 'Área de membros premium estilo Netflix',
  },
  {
    icon: Clapperboard,
    title: '15 aulas gravadas em vídeo',
  },
  {
    icon: BookOpen,
    title: 'Ebook: O Código do Sono',
  },
  {
    icon: Users,
    title: 'Comunidade exclusiva',
  },
  {
    icon: MailQuestion,
    title: 'Suporte personalizado',
  },
  {
    icon: Smartphone,
    title: 'Acesso imediato pelo celular',
  },
];
