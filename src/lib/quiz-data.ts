import { CheckCircle, Zap, Moon, Rocket, Award, Shield } from 'lucide-react';

export const quizData = {
  totalQuestions: 6,
  headlines: [
    '🚨 A Verdade: Você Não Dorme Mal Por Acaso. Descubra o MÉTODO MILITAR Que Faz Você Dormir Em 2 MINUTOS!',
  ],
  benefits: [
    { icon: Zap, text: '⚡ Adormeça mesmo com a mente acelerada' },
    { icon: Moon, text: '🌙 Pare de acordar cansado, mesmo dormindo “horas”' },
    { icon: Rocket, text: '🚀 Acorde sem peso no corpo e sem neblina mental' },
  ],
  questions: [
    {
      id: 'q1',
      question: 'Quando alguém olha para você de manhã, que imagem você acha que transmite?',
      options: [
        { text: '😎 Pessoa forte, descansada e confiante', value: 'A' },
        { text: '🙂 Ok… mas dá pra notar um leve cansaço', value: 'B' },
        { text: '😩 Pareço sempre cansado(a), mesmo quando tento disfarçar', value: 'C' },
        { text: '😬 Claramente esgotado(a) e sem energia', value: 'D' },
      ],
    },
    {
      id: 'q2',
      question: 'Com que frequência você sente que seu cansaço está fazendo você “ficar pra trás” dos outros?',
      options: [
        { text: '💪 Nunca, me sinto produtivo e no controle', value: 'A' },
        { text: '⏱️ Às vezes, em dias mais cansativos', value: 'B' },
        { text: '😥 Frequentemente, sinto que não estou no meu melhor', value: 'C' },
        { text: '💔 Constantemente, sinto que o cansaço está me limitando', value: 'D' },
      ],
    },
    {
      id: 'q3',
      question: 'O que acontece quando você tenta se concentrar em uma tarefa importante?',
      options: [
        { text: '😞 Foco total, sem problemas', value: 'A' },
        { text: '🌙 Leva um tempo para engrenar', value: 'B' },
        { text: '🤔 Minha mente vaga e cometo erros bobos', value: 'C' },
        { text: '💔 É quase impossível, sinto uma névoa mental', value: 'D' },
      ],
    },
    {
      id: 'q4',
      question: 'Quanto tempo, em média, você leva para adormecer depois de deitar?',
      options: [
        { text: 'Menos de 15 minutos', value: 'A' },
        { text: 'Entre 15 e 30 minutos', value: 'B' },
        { text: 'Entre 30 minutos e 1 hora', value: 'C' },
        { text: 'Mais de 1 hora, uma verdadeira luta', value: 'D' },
      ],
    },
    {
      id: 'q5',
      question: 'Quantas noites por semana você tem sono insatisfatório?',
      options: [
        { text: 'Raramente (0–1 noite)', value: 'A' },
        { text: 'Algumas vezes (2–3 noites)', value: 'B' },
        { text: 'Frequentemente (4–5 noites)', value: 'C' },
        { text: 'Quase sempre (6–7 noites)', value: 'D' },
      ],
    },
    {
      id: 'q6',
      question: 'O que você já tentou para resolver seu problema de sono?',
      options: [
        { text: 'Nada, estou começando a pesquisar agora', value: 'A' },
        { text: 'Chás e técnicas de relaxamento', value: 'B' },
        { text: 'Apps de meditação e ruído branco', value: 'C' },
        { text: 'Remédios e suplementos, sem muito sucesso', value: 'D' },
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
  salesPoints: [
    {
      icon: CheckCircle,
      text: 'Criar um ritual noturno poderoso que sinaliza ao seu corpo que é hora de dormir.',
    },
    {
      icon: CheckCircle,
      text: 'Dominar estratégias cognitivas para vencer a insônia e acalmar a mente.',
    },
    {
      icon: CheckCircle,
      text: 'Aprender técnicas avançadas de relaxamento mental e físico usadas por militares.',
    },
    {
      icon: CheckCircle,
      text: 'Desenvolver um plano de sono 100% personalizado para sua rotina.',
    },
    {
      icon: CheckCircle,
      text: 'Entender como usar a alimentação e o ambiente a seu favor.',
    },
    {
      icon: CheckCircle,
      text: 'Receber um guia para lidar com despertares noturnos e voltar a dormir rápido.',
    },
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Juliana P.',
      location: 'São Paulo, SP',
      text: 'Eu levava 2h para dormir. Com o método, apago em minutos. De 4h de sono por noite para 7h em menos de uma semana. Mudou minha vida!',
      imageUrlId: 'testimonial-1',
    },
    {
      id: 't2',
      name: 'Marcos A.',
      location: 'Rio de Janeiro, RJ',
      text: 'Achei que era exagero, mas a técnica de respiração e relaxamento é surreal. Acordo outra pessoa, com energia de verdade.',
      imageUrlId: 'testimonial-2',
    },
    {
      id: 't3',
      name: 'Carla S.',
      location: 'Belo Horizonte, MG',
      text: 'Meu problema era a ansiedade na hora de deitar. O método me deu o controle que eu precisava. Indispensável para quem tem a mente a mil.',
      imageUrlId: 'testimonial-3',
    },
  ],
  plans: {
    pro: {
      priceVariants: [37, 47],
      originalPrice: 127,
      features: [
        'Ebook Completo "O Código do Sono"',
        'Área de Membros Exclusiva',
        '15 Aulas em Vídeo Passo a Passo',
        '3 Bônus: Guia de Nutrição, Diário do Sono e Playlist de Relaxamento',
        'Acesso Vitalício à Comunidade de Alunos',
      ],
    },
    basic: {
      price: 12.90,
      features: ['Apenas o Ebook "O Código do Sono"'],
    },
  },
  guarantees: [
    { icon: Award, text: '7 Dias de Garantia de Satisfação Total' },
    { icon: Shield, text: 'Compra 100% Segura e Protegida' },
  ],
};
