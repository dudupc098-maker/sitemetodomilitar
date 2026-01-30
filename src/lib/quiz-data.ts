import { CheckCircle, Zap, Moon, Rocket, Award, Shield } from 'lucide-react';

export const quizData = {
  totalQuestions: 6,
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
        { text: '💪 Quase nunca — me mantenho no ritmo', value: 'A' },
        { text: '⏱️ Às vezes eu percebo que os outros avançam mais rápido que eu', value: 'B' },
        { text: '😥 Frequentemente sinto que minha energia atrapalha meu crescimento', value: 'C' },
        { text: '💔 Direto — meu cansaço já me custou oportunidades reais', value: 'D' },
      ],
    },
    {
      id: 'q3',
      question: 'Quando foi a última vez que você acordou e percebeu que, mesmo dormindo, continuava exausto(a)?',
      options: [
        { text: '🤔 Quase todos os dias. Eu durmo, mas nunca descanso.', value: 'A' },
        { text: '🌙 Acontece com frequência. Meu corpo não desliga à noite', value: 'B' },
        { text: '😞 Não é sempre, mas já sei que meu sono não é normal', value: 'C' },
        { text: '💔 Ultimamente acordo cansado(a) e passo o dia só sobrevivendo.', value: 'D' },
      ],
    },
    {
      id: 'q4',
      question: 'Quando você promete a si mesmo que vai “melhorar sua rotina de sono”… o que realmente acontece?',
      options: [
        { text: '🏆 Eu cumpro', value: 'A' },
        { text: '🗓️ Faço por alguns dias, depois desando', value: 'B' },
        { text: '😔 Sempre volto aos velhos hábitos', value: 'C' },
        { text: '😖 Nem começo, já sinto que vou falhar', value: 'D' },
      ],
    },
    {
      id: 'q5',
      question: 'Se existisse um método rápido e comprovado capaz de fazer você dormir em poucos minutos todas as noites, você gostaria de ter acesso a ele ainda hoje?',
      options: [
        { text: '✅ SIM', value: 'A' },
        { text: '❌ NÃO', value: 'B' },
      ],
    },
    {
      id: 'q6',
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
