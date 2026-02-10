import { CheckCircle, ShieldCheck, RefreshCw } from 'lucide-react';

export type MultipleChoiceQuestion = {
  id: string;
  type: 'multiple-choice';
  question: string;
  options: { text: string; value: string }[];
};

export type SliderQuestion = {
  id: string;
  type: 'slider';
  question: string;
  min: number;
  max: number;
  defaultValue: number;
  step: number;
  unit: string;
};

export type Question = MultipleChoiceQuestion | SliderQuestion;


export const quizData: {
  totalQuestions: number;
  questions: Question[];
  authorityArticles: {id: string, title: string, source: string, imageUrlId: string}[];
  loadingMessages: string[];
  testimonials: {id: string, text: string, name: string, tag: string, imageUrlId: string}[];
  pricing: any;
  guarantees: any[];
} = {
  totalQuestions: 6,
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'Quando você acorda de manhã, como você sente que está fisicamente e mentalmente?',
      options: [
        { text: '⚡ Cheio de energia', value: 'A' },
        { text: '😐 Cansado, mas funcional', value: 'B' },
        { text: '😴 Muito cansado', value: 'C' },
        { text: '🥀 Exausto / destruído', value: 'D' },
      ],
    },
    {
      id: 'q2',
      type: 'multiple-choice',
      question: 'Quanto tempo você normalmente leva para pegar no sono depois de deitar?',
      options: [
        { text: '🌙 Menos de 10 min', value: 'A' },
        { text: '⏳ 10–30 min', value: 'B' },
        { text: '😣 30–60 min', value: 'C' },
        { text: '🕒 Mais de 1 hora', value: 'D' },
      ],
    },
    {
      id: 'q3',
      type: 'multiple-choice',
      question: 'Com que frequência você acorda já sentindo que o descanso não foi suficiente?',
      options: [
        { text: '🙂 Raramente', value: 'A' },
        { text: '😕 Às vezes', value: 'B' },
        { text: '😩 Quase todos os dias', value: 'C' },
        { text: '🥱 Todos os dias', value: 'D' },
      ],
    },
    {
      id: 'q4',
      type: 'multiple-choice',
      question: 'O cansaço já fez você perder produtividade, foco ou disposição durante o dia?',
      options: [
        { text: '👍 Nunca', value: 'A' },
        { text: '🤏 Algumas vezes', value: 'B' },
        { text: '📉 Frequentemente', value: 'C' },
        { text: '🚨 Quase sempre', value: 'D' },
      ],
    },
    {
      id: 'q5',
      type: 'slider',
      question: '⏱️ Quantos minutos você leva para pegar no sono?',
      min: 0,
      max: 120,
      defaultValue: 30,
      step: 1,
      unit: 'minutos',
    },
    {
      id: 'q6',
      type: 'multiple-choice',
      question: 'Você estaria disposto a acordar com energia, sem parecer destruído todas as manhãs, igual a maioria das pessoas que já aplicam este método?',
      options: [
        { text: '✅ SIM', value: 'A' },
        { text: '❌ NÃO', value: 'B' },
      ],
    },
  ],
  authorityArticles: [
    {
      id: 'article-1',
      title: 'Técnica militar para dormir em 2 minutos vira trend',
      source: 'Portal G1',
      imageUrlId: 'authority-1',
    },
    {
      id: 'article-2',
      title: 'O segredo dos pilotos de combate para apagar em 120s',
      source: 'Revista Superinteressante',
      imageUrlId: 'authority-2',
    },
    {
      id: 'article-3',
      title: 'Ciência comprova: método do exército funciona contra insônia',
      source: 'CNN Brasil',
      imageUrlId: 'authority-3',
    },
    {
      id: 'article-4',
      title: 'Como a elite militar treina o cérebro para o descanso imediato',
      source: 'The New York Times',
      imageUrlId: 'authority-4',
    },
  ],
  loadingMessages: [
    'Analisando suas respostas...',
    'Cruzando dados com padrões de sono profundo...',
    'Identificando seus principais bloqueadores de sono...',
    'Preparando o diagnóstico que coloca você no 1% que dorme profundamente...',
    'Seu plano personalizado está quase pronto!',
  ],
  testimonials: [
    {
      id: 'testimonial-1',
      text: 'Em 4 dias minha mente parou de rodar à noite; agora eu apago com calma e acordo menos cansado.',
      name: 'Mariana',
      tag: '34, professora (SP)',
      imageUrlId: 'testimonial-avatar-1',
    },
    {
      id: 'testimonial-2',
      text: 'Segui a rotina guiada e já na primeira semana percebi diferença: menos tempo para pegar no sono.',
      name: 'Ricardo',
      tag: '39, analista (RJ)',
      imageUrlId: 'testimonial-avatar-2',
    },
    {
      id: 'testimonial-3',
      text: 'Trabalho em turnos e pensei que não funcionaria — mas o ajuste pro meu horário fez a diferença.',
      name: 'Carla',
      tag: '28, enfermeira (BH)',
      imageUrlId: 'testimonial-avatar-3',
    },
  ],
  pricing: {
    main: {
      name: 'Método Sono Militar',
      price: '37,00',
      originalPrice: '97,00',
      ctaText: 'QUERO DORMIR BEM POR R$37',
      features: [
        'Área de Membros Premium Estilo Netflix',
        '+15 Aulas em Vídeo',
        'Ebook "O Código do Sono"',
        'Todos os 5 Bônus Exclusivos (Disponíveis Hoje)',
        'Comunidade de Membros',
        'Suporte Personalizado',
        'Acesso Imediato Pelo Email'
      ]
    }
  },
  guarantees: [
      { icon: ShieldCheck, text: '7 Dias de Garantia' },
      { icon: CheckCircle, text: 'Compra Segura' },
      { icon: RefreshCw, text: 'Acesso Imediato' }
  ]
};
