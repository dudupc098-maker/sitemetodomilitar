export type BonusItem = {
  title: string;
  description: string;
  price: string;
};

export const bonusData: BonusItem[] = [
  {
    title: '50 Áudios Premium Relaxantes',
    description: 'Sons da natureza, ruído branco e frequências que acalmam o cérebro e preparam seu corpo para dormir.',
    price: '29,90',
  },
  {
    title: 'Checklist Diário do Sono',
    description: 'Um passo a passo simples para você seguir todos os dias e garantir que seu ambiente de sono está 100% otimizado.',
    price: '27,90',
  },
  {
    title: 'Planilha Semanal do Sono',
    description: 'Monitore seu progresso e identifique padrões para entender o que funciona melhor para o seu corpo.',
    price: '19,90',
  },
  {
    title: 'Guia de Ajustes Para Quem Dorme Tarde',
    description: 'Estratégias específicas para quem tem uma rotina noturna e precisa adaptar o sono.',
    price: '19,90',
  },
  {
    title: 'Rotina Noturna Guiada',
    description: 'Um áudio de 10 minutos para guiar você em um relaxamento profundo antes de dormir, sem precisar pensar.',
    price: '14,90',
  },
];
