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
  tickStep: number;
  labelStep: number;
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
  totalQuestions: 11,
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
      question: '⏱️ Quantos minutos exatamente você leva para pegar no sono?',
      min: 0,
      max: 120,
      defaultValue: 30,
      step: 1,
      unit: 'minutos',
      tickStep: 10,
      labelStep: 30,
    },
    {
      id: 'q6',
      type: 'slider',
      question: '😴 Quantas horas você dorme por noite?',
      min: 0,
      max: 12,
      defaultValue: 6,
      step: 0.5,
      unit: 'horas',
      tickStep: 1,
      labelStep: 3,
    },
    {
      id: 'q7',
      type: 'multiple-choice',
      question: 'O que mais te impede de dormir rápido?',
      options: [
        { text: '🧠 Mente acelerada', value: 'A' },
        { text: '📱 Celular / estímulos', value: 'B' },
        { text: '😰 Ansiedade / preocupação', value: 'C' },
        { text: '🔁 Acordo várias vezes', value: 'D' },
      ],
    },
    {
      id: 'q8',
      type: 'multiple-choice',
      question: 'Como a falta de sono afeta sua vida hoje?',
      options: [
        { text: '💼 Produtividade baixa', value: 'A' },
        { text: '😡 Irritação / humor ruim', value: 'B' },
        { text: '🧠 Falta de foco', value: 'C' },
        { text: '😴 Cansaço constante', value: 'D' },
      ],
    },
    {
      id: 'q9',
      type: 'multiple-choice',
      question: 'Se nada mudar, como você acha que estará daqui 6 meses?',
      options: [
        { text: '😟 Igual ou pior', value: 'A' },
        { text: '😞 Muito cansado ainda', value: 'B' },
        { text: '😐 Talvez igual', value: 'C' },
        { text: '😴 Não quero nem pensar', value: 'D' },
      ],
    },
    {
      id: 'q10',
      type: 'multiple-choice',
      question: 'Se existisse um método simples que te fizesse dormir rápido todas as noites, você testaria?',
      options: [
        { text: '✅ Sim', value: 'A' },
        { text: '❌ Não', value: 'B' },
      ],
    },
    {
      id: 'q11',
      type: 'multiple-choice',
      question: 'Faz sentido pra você que dormir bem muda energia, foco e disposição?',
      options: [
        { text: '✅ Sim', value: 'A' },
        { text: '❌ Não', value: 'B' },
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
      text: 'Minha mente não desligava por nada. No 3º dia usando o método, dormi rápido sem perceber. Fazia anos que isso não acontecia.',
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
