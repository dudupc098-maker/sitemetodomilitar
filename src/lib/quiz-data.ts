import { CheckCircle, ShieldCheck, RefreshCw } from 'lucide-react';

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
        '15+ Aulas em Vídeo (Acesso Imediato)',
        'Ebook "O Código do Sono"',
        'Todos os 5 Bônus Exclusivos (Disponíveis Hoje)',
        'Comunidade de Membros',
        'Suporte Personalizado',
        'Acesso Imediato Pelo Celular'
      ]
    }
  },
  guarantees: [
      { icon: ShieldCheck, text: '7 Dias de Garantia' },
      { icon: CheckCircle, text: 'Compra Segura' },
      { icon: RefreshCw, text: 'Acesso Imediato' }
  ]
};
