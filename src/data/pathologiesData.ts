import { PathologyDetail } from '../types';

export const DETAILED_PATHOLOGIES: Record<string, PathologyDetail> = {
  'unha-encravada': {
    slug: 'unha-encravada',
    name: 'Unha Encravada',
    scientificName: 'Onicocriptose',
    badge: 'Urgência Clínica',
    tagline: 'Alívio imediato da dor e desobstrução rápida com laserterapia DMC.',
    description:
      'A unha encravada ocorre quando a borda lateral da lâmina ungueal penetra na pele ao redor, causando inflamação severa, dor pulsante, edema e, frequentemente, infecção com secreção purulenta e formação de granuloma piogênico (carne esponjosa). Na Clínica Liana Gonçalves, tratamos o problema na raiz sem arrancar a unha e sem sofrimento desnecessário.',
    symptoms: [
      'Dor aguda e contínua ao caminhar ou ao menor toque do lençol/calçado',
      'Inchaço, vermelhidão e calor na lateral do dedo afetado (geralmente hálux)',
      'Presença de secreção amarelada, sangramento ou odor característico',
      'Formação de granuloma ("carne esponjosa" hipervascularizada)',
      'Dificuldade para calçar sapatos fechados e exercer atividades diárias',
    ],
    risksOfWaiting: [
      'Tentativas de cortar o canto em casa com alicates inadequados pioram a espícula e aumentam a lesão',
      'Disseminação de bactérias (risco de erisipela e celulite infecciosa em membros inferiores)',
      'Agravamento crítico em pessoas com diabetes ou circulação periférica comprometida',
      'Risco de deformação permanente no leito da unha e na matriz ungueal',
    ],
    ourProtocol: {
      title: 'Protocolo Clínico Atraumático com Laserterapia',
      description:
        'Não arrancamos a sua unha. O procedimento é estritamente técnico, cirurgicamente limpo e focado no alívio da dor desde o primeiro momento.',
      steps: [
        {
          title: '1. Antissepsia e Analgesia Tópica com Laser',
          desc: 'Higienização estéril completa e aplicação do Laser DMC para redução imediata da dor e da inflamação local antes do procedimento.',
        },
        {
          title: '2. Remoção Técnica da Espícula (Espículaectomia)',
          desc: 'Retirada milimétrica apenas do fragmento de unha que está cravado na pele, preservando a matriz e o leito natural da unha.',
        },
        {
          title: '3. Cauterização e Desinfecção do Granuloma',
          desc: 'Tratamento do tecido granulomatoso inflamado com ativos bactericidas e laserterapia para acelerar o fechamento tecidual.',
        },
        {
          title: '4. Curativo Especializado e Acompanhamento',
          desc: 'Curativo oclusivo estéril com retorno de revisão já incluso para garantir a cicatrização 100% segura e definitiva.',
        },
      ],
      technology: [
        'Laser DMC Therapy XT (fotobiomodulação e analgesia potente)',
        'Instrumental cirúrgico esterilizado em autoclave hospitalar com rastreabilidade biológica',
        'Órteses de correção ungueal (fibra de memória molecular) quando necessário',
      ],
      whatIsIncluded: [
        'Avaliação clínica detalhada da lâmina',
        'Analgesia tópica e aplicação de laserterapia',
        'Remoção técnica e higiênica da espícula',
        'Curativo estéril inicial de proteção',
        'Todos os retornos de revisão e alta clínica inclusos',
      ],
    },
    priceReference: 'R$ 150,00*',
    priceNote: '*O valor da consulta não é cobrado caso o procedimento seja realizado no mesmo dia.',
    faqs: [
      {
        q: 'Vai doer para tirar a unha encravada?',
        a: 'Utilizamos analgesia com laser DMC de alta tecnologia e anestésicos tópicos prévios. O procedimento é muito rápido e a sensação imediata que os pacientes relatam ao sair da maca é de imenso alívio da dor que vinham sofrendo há dias ou semanas.',
      },
      {
        q: 'É preciso arrancar a unha inteira?',
        a: 'Não! Arrancar a unha inteira é uma prática ultrapassada que costuma agravar o problema quando ela volta a nascer. Nosso protocolo remove estritamente a ponta (espícula) causadora do atrito, mantendo o restante da unha sadio.',
      },
      {
        q: 'Atendem casos de urgência com pus e carne esponjosa (granuloma)?',
        a: 'Sim, atendemos diariamente casos em estágio avançado. Temos protocolos hospitalares específicos para drenagem, controle infeccioso e regressão do granuloma.',
      },
    ],
    image: '/images/original/treatment_unha_encravada.webp',
    tone: 'sand',
  },

  'fungos-micose': {
    slug: 'fungos-micose',
    name: 'Fungos nas Unhas e Micose',
    scientificName: 'Onicomicose',
    badge: 'Carro-Chefe Clínico',
    tagline: 'Diagnóstico com exame micológico laboratorial antes de prescrever o tratamento.',
    description:
      'A onicomicose é uma infecção fúngica crônica que atinge a queratina da lâmina ungueal. A maioria das pessoas passa anos usando esmaltes e pomadas de farmácia sem sucesso porque não sabe qual é a espécie exata de fungo presente. Na nossa clínica, não trabalhamos com achismos: realizamos a coleta e o exame micológico em laboratório credenciado para direcionar o tratamento correto.',
    symptoms: [
      'Unhas espessas, grossas e difíceis de cortar com tesouras comuns',
      'Coloração amarelada, esbranquiçada, amarronzada ou acinzentada',
      'Esfarelamento da queratina ou descolamento da unha do leito (onicólise)',
      'Acúmulo de massa córnea de odor forte sob a placa ungueal',
      'Desconforto estético crônico e vergonha de expor os pés em calçados abertos',
    ],
    risksOfWaiting: [
      'Destruição progressiva e irreversível do leito ungueal',
      'Contaminação das unhas vizinhas e infecção na pele (Tinea pedis / pé de atleta)',
      'Transmissão para membros da família que compartilham banheiros e toalhas',
      'Porta de entrada grave para bactérias (risco elevado para pessoas diabéticas)',
    ],
    ourProtocol: {
      title: 'Protocolo Científico de Erradicação Fúngica',
      description:
        'Combinamos análise micológica laboratorial, desbaste mecânico estéril e terapia fotodinâmica a laser para eliminar a colônia fúngica em profundidade.',
      steps: [
        {
          title: '1. Coleta Micológica Rigorosa para Laboratório',
          desc: 'Raspagem técnica estéril do material subungueal e envio para laboratório de análises clínicas especializado para isolamento da cepa.',
        },
        {
          title: '2. Primeira Limpeza e Desbaste Terapêutico Completo',
          desc: 'Remoção de toda a massa infectada e queratina morta sem dor, permitindo que os antifúngicos penetrem de verdade no leito.',
        },
        {
          title: '3. Aplicação de Terapia Fotodinâmica e Laser DMC',
          desc: 'O laser medicinal atua diretamente sobre a membrana celular dos dermatófitos e leveduras, inviabilizando sua proliferação.',
        },
        {
          title: '4. Plano de Tratamento e Acompanhamento do Crescimento',
          desc: 'Prescrição personalizada de ativos tópicos e acompanhamento periódico da unha nova saudável até a completa renovação.',
        },
      ],
      technology: [
        'Exame Micológico Direto e Cultura Fúngica Laboratorial',
        'Laser DMC com Terapia Fotodinâmica (PDT)',
        'Micromotores podológicos de precisão com fresas diamantadas esterilizadas',
      ],
      whatIsIncluded: [
        'Consulta podológica diagnóstica',
        'Coleta de material para exame micológico',
        'Envio e processamento em laboratório de análises clínicas',
        '1ª limpeza minuciosa e desbastamento completo da unha',
        'Plano de tratamento personalizado por escrito',
      ],
    },
    priceReference: 'R$ 370,00',
    priceNote: 'Valor com tudo incluso: consulta clínica, coleta, análise laboratorial credenciada e 1ª limpeza profunda.',
    faqs: [
      {
        q: 'Por que pomadas de farmácia não funcionaram no meu caso?',
        a: 'A queratina da unha doente é espessa e funciona como uma carcaça que impede pomadas e esmaltes de atingirem o fundo da colônia. Sem o desbaste clínico regular e sem saber qual é a espécie fúngica, o medicamento atinge apenas a superfície.',
      },
      {
        q: 'Quanto tempo dura o tratamento de micose?',
        a: 'Uma unha do pé leva de 8 a 14 meses para se renovar por completo da raiz à ponta. O protocolo clínico acompanha essa velocidade biológica, mantendo a unha livre de fungos enquanto a lâmina saudável avança.',
      },
      {
        q: 'Posso usar esmalte durante o tratamento?',
        a: 'Recomendamos evitar esmaltes comuns oclusivos nas primeiras etapas, pois eles retêm umidade favorável ao fungo. Indicamos bases terapêuticas com ativos antifúngicos que não prejudicam o tratamento.',
      },
    ],
    image: '/images/original/treatment_fungos.webp',
    tone: 'peach',
  },

  'olho-de-peixe': {
    slug: 'olho-de-peixe',
    name: 'Olho de Peixe e Verruga Plantar',
    scientificName: 'Papilomavírus Humano (HPV Cutâneo)',
    badge: 'Tratamento Preciso',
    tagline: 'Eliminação da lesão viral sem agredir os tecidos sadios e sem cortes traumáticos.',
    description:
      'A verruga plantar, popularmente chamada de "olho de peixe", é uma infecção viral benigna causada por cepas do HPV cutâneo. Costuma ser confundida com calos, mas possui pequenos pontos escuros centrais (capilares trombosados) e provoca dor aguda ao ser comprimida lateralmente ao pisar.',
    symptoms: [
      'Lesão arredondada com aspecto de couve-flor ou placa hiperqueratótica na planta dos pés',
      'Pequenos pontinhos pretos no centro da lesão (microvasos sanguíneos)',
      'Dor ao pisar, sensação de ter uma pedra dentro do sapato',
      'Dor muito intensa ao pinçar a lesão pelas laterais',
      'Aparecimento de lesões satélites próximas se houver manipulação incorreta',
    ],
    risksOfWaiting: [
      'Disseminação do vírus para outros dedos e para o outro pé (verrugas em mosaico)',
      'Contágio para outros membros da família através de pisos de chuveiro e piscinas',
      'Alteração postural e da marcha devido à dor crônica ao pisar',
      'Uso de ácidos caseiros perigosos que causam queimaduras graves na pele sadia',
    ],
    ourProtocol: {
      title: 'Protocolo Cauterizante e Imunomodulador',
      description:
        'Diferenciação correta entre calo e verruga viral, seguida de desbaste milimétrico e aplicação de substâncias controladas e laserterapia.',
      steps: [
        {
          title: '1. Diagnóstico Diferencial Clínico',
          desc: 'Diferenciação exata de calo com núcleo através da dermatoscopia podológica e teste de pinçamento doloroso.',
        },
        {
          title: '2. Desbastamento Atraumático da Camada Córnea',
          desc: 'Remoção cirurgicamente limpa da hiperqueratose que protege o vírus, expondo o leito da lesão para ação imediata.',
        },
        {
          title: '3. Aplicação de Ativos Cauterizantes Específicos',
          desc: 'Substâncias queratolíticas e antivirais de uso exclusivamente profissional que destroem a colônia viral sem queimar o tecido são.',
        },
        {
          title: '4. Fototerapia com Laser DMC',
          desc: 'Estimulação da resposta imunológica celular local para que o próprio organismo elimine os resquícios do vírus.',
        },
      ],
      technology: [
        'Laser DMC com protocolo imunoestimulante',
        'Substâncias queratolíticas de grau clínico rigoroso',
        'Instrumental de desbaste estéril e descartável para prevenir autocontaminação',
      ],
      whatIsIncluded: [
        'Diagnóstico podológico preciso',
        'Desbaste técnico das camadas queratinizadas',
        'Aplicação de substâncias clínicas específicas',
        'Fotobiomodulação com laserterapia',
        'Orientações rigorosas de biossegurança doméstica',
      ],
    },
    priceReference: 'A partir de R$ 180,00',
    priceNote: 'Valor da sessão conforme o número de lesões e diâmetro.',
    faqs: [
      {
        q: 'Como diferenciar olho de peixe de um calo comum?',
        a: 'O calo dói principalmente quando pressionado diretamente para dentro; a verruga plantar dói muito mais quando pinçada pelas laterais e costuma apresentar pequenos pontinhos escuros no centro.',
      },
      {
        q: 'Posso queimar com remédios de farmácia?',
        a: 'Medicamentos vendidos sem receita têm concentrações genéricas que muitas vezes queimam a pele sadia ao redor sem atingir o vírus no fundo, provocando úlceras dolorosas e infecções bacterianas secundárias.',
      },
      {
        q: 'Quantas sessões são necessárias?',
        a: 'Geralmente entre 2 a 5 sessões, dependendo do tempo em que a lesão está instalada e da resposta imunológica do paciente.',
      },
    ],
    image: '/images/original/treatment_laser.webp',
    tone: 'peach',
  },

  'pes-diabetico': {
    slug: 'pes-diabetico',
    name: 'Pés do Diabético e Cuidados Preventivos',
    scientificName: 'Pé Diabético & Neuropatia Periférica',
    badge: 'Especialidade com Pós-Graduação',
    tagline: 'Prevenção ativa de feridas, semiologia de sensibilidade e conduta clínica especializada.',
    description:
      'O paciente com diabetes necessita de um olhar clínico muito além do convencional. A alteração na circulação e a perda progressiva da sensibilidade (neuropatia) fazem com que pequenas feridas, calos ou unhas mal cortadas passem despercebidas e evoluam rapidamente para úlceras complexas. Liana Gonçalves possui pós-graduação em Diabetes e Complicações Crônicas, atuando na linha de frente da preservação e integridade dos membros inferiores.',
    symptoms: [
      'Diminuição ou perda total da sensibilidade tátil, térmica e dolorosa nos pés',
      'Sensação constante de dormência, formigamento, queimação ou "alfinetadas"',
      'Pele excessivamente seca, com rachaduras profundas e descamações',
      'Pulsos pediosos fracos ou membros frios devido à má circulação',
      'Aparecimento de bolhas, manchas escuras ou feridas indolores',
    ],
    risksOfWaiting: [
      'Desenvolvimento de úlceras de difícil cicatrização (mal perfurante plantar)',
      'Infecções bacterianas graves profundas (osteomielite)',
      'Evolução silenciosa que pode levar à necessidade de amputação',
      'Corte de unhas feito por manicures comuns ou em casa com lesões acidentais',
    ],
    ourProtocol: {
      title: 'Protocolo Hospitalar de Semiologia e Preservação',
      description:
        'Avaliação neurológica, corte anatômico com instrumentais não cortantes e protocolos de cicatrização avançada com ozonioterapia Philozon.',
      steps: [
        {
          title: '1. Semiologia Completa do Pé Diabético',
          desc: 'Teste de sensibilidade com monofilamento de Semmes-Weinstein, palpação dos pulsos pediosos e tibial posterior, e inspeção dermatológica.',
        },
        {
          title: '2. Corte Anatômico Atraumático',
          desc: 'Corte reto e seguro com instrumental cirúrgico estéril de bordas arredondadas que elimina o risco de microfissuras e encravamentos.',
        },
        {
          title: '3. Desbastamento Suave de Áreas de Hiperpressão',
          desc: 'Remoção cautelosa de calosidades e queratoses que funcionam como pontos focais de pressão causadores de úlceras.',
        },
        {
          title: '4. Ozonioterapia Medicinal e Hidratação de Barreira',
          desc: 'Aplicação de ozônio medicinal para estimulação da microcirculação e hidratação com uréia e ativos dermatológicos de alta penetração.',
        },
      ],
      technology: [
        'Monofilamento de Semmes-Weinstein para rastreio de neuropatia',
        'Aparelho Philozon de Ozonioterapia Medicinal homologado',
        'Laser DMC com iLib para melhora da oxigenação vascular sistêmica',
      ],
      whatIsIncluded: [
        'Exame físico completo e semiologia podológica',
        'Corte preventivo e desbaste estéril atraumático',
        'Aplicação de ozonioterapia ou fototerapia conforme a indicação',
        'Relatório preventivo para o médico endocrinologista',
        'Orientações personalizadas para escolha de meias e calçados ideais',
      ],
    },
    priceReference: 'R$ 150,00*',
    priceNote: '*Valor da consulta isento se contratado o acompanhamento ou procedimento no mesmo dia.',
    faqs: [
      {
        q: 'Por que o diabético não pode ir a um salão de beleza comum?',
        a: 'No salão, alicates afiados que retiram cutículas e lixas manuais representam um risco inaceitável de microlesões que o paciente muitas vezes não sente. Na nossa clínica, todos os instrumentais passam por autoclave hospitalar com rastreabilidade e a conduta é puramente médica.',
      },
      {
        q: 'Com que frequência a pessoa diabética deve ir ao podólogo?',
        a: 'Em geral, a cada 25 a 30 dias para manutenção do corte preventivo e verificação da sensibilidade, ou imediatamente se notar qualquer vermelhidão, bolha ou calo.',
      },
      {
        q: 'A clínica trata feridas já abertas?',
        a: 'Sim, atuamos no tratamento coadjuvante de feridas e úlceras em conjunto com o médico assistente e com protocolos avançados de ozonioterapia medicinal Philozon.',
      },
    ],
    image: '/images/original/treatment_diabetico.webp',
    tone: 'sage',
  },

  'podopediatria': {
    slug: 'podopediatria',
    name: 'Podopediatria e Podologia Infantil',
    scientificName: 'Podologia Infantil & Neonatal',
    badge: 'Referência em MS',
    tagline: 'Atendimento afetuoso, lúdico e 100% não traumático para bebês e crianças.',
    description:
      'Bebês e crianças têm anatomia ungueal e sensibilidade cutânea muito diferentes das dos adultos. Na Clínica Liana Gonçalves, somos referência no atendimento podopediátrico em Campo Grande, tratando desde recém-nascidos com unhas encravadas congênitas até crianças em idade escolar com verrugas ou alterações de marcha, sempre com um ambiente acolhedor e paciência infinita.',
    symptoms: [
      'Bebê com cantinho do dedo inchado, vermelho e choroso ao tocar',
      'Unhas finas que dobram, lascam ou crescem para dentro da carne',
      'Crianças que reclamam de dor nos dedinhos após brincar ou usar tênis',
      'Aparecimento de pontinhos duros na planta do pé (verrugas infantis)',
      'Corte incorreto feito pelos pais com tesourinhas ou cortadores comuns',
    ],
    risksOfWaiting: [
      'Instalação de processo infeccioso agudo com febre e sofrimento desnecessário para a criança',
      'Trauma psicológico severo se levado a profissionais não preparados para o público infantil',
      'Deformidade permanente na matriz ungueal durante a fase de crescimento',
      'Dificuldade para andar e brincar com tênis da escola',
    ],
    ourProtocol: {
      title: 'Protocolo Lúdico e Livre de Traumas',
      description:
        'Respeito ao tempo da criança, linguagem adaptada, instrumentais infantis miniaturizados e apoio constante aos pais.',
      steps: [
        {
          title: '1. Acolhimento e Adaptação Lúdica',
          desc: 'Apresentação amigável do espaço, conversando e brincando para que a criança se sinta totalmente segura e relaxada.',
        },
        {
          title: '2. Inspeção Suave e Anestésico Tópico Pediátrico',
          desc: 'Aplicação de anestésico tópico dermatológico suave para garantir total conforto durante o procedimento.',
        },
        {
          title: '3. Procedimento Rápido e Atraumático',
          desc: 'Retirada rápida e precisa da espícula com instrumentais delicados, sem forçar e sem cortes na pele.',
        },
        {
          title: '4. Orientações Educativas aos Pais',
          desc: 'Demonstração prática de como cortar as unhas em casa corretamente e recomendações de calçados adequados.',
        },
      ],
      technology: [
        'Instrumental pediátrico microcirúrgico específico',
        'Laser DMC em parâmetros infantis suaves de baixa intensidade',
        'Ambiente climatizado, silencioso e afetuoso',
      ],
      whatIsIncluded: [
        'Consulta de avaliação podopediátrica completa',
        'Procedimento atraumático com alívio imediato',
        'Curativo lúdico com adesivos divertidos',
        'Manual de orientações para os pais',
        'Retorno de acompanhamento se necessário',
      ],
    },
    priceReference: 'R$ 150,00*',
    priceNote: '*Consulta isenta se o procedimento for realizado no mesmo dia.',
    faqs: [
      {
        q: 'Bebê recém-nascido pode ter unha encravada?',
        a: 'Sim, é muito comum! Muitas vezes a própria pressão intrauterina ou a dobra cutânea exuberante do recém-nascido faz a lâmina nascer cravada na pele. Tratamos com facilidade e sem dor.',
      },
      {
        q: 'Meu filho tem medo de médico. Ele vai chorar?',
        a: 'Nosso diferencial é justamente a paciência e a empatia. A podóloga Liana Gonçalves tem anos de prática infantil, trabalhando de maneira lúdica para que a experiência seja positiva e tranquila.',
      },
      {
        q: 'Qual é o calçado ideal para crianças em fase de crescimento?',
        a: 'Recomendamos calçados flexíveis, com biqueira ampla que não comprima os dedos e materiais transpiráveis. Na consulta avaliamos individualmente.',
      },
    ],
    image: '/images/original/treatment_podopediatria.png',
    tone: 'sand',
  },

  'podogeriatria': {
    slug: 'podogeriatria',
    name: 'Podogeriatria e Cuidados na Terceira Idade',
    scientificName: 'Podogeriatria Clínica',
    badge: 'Cuidado Humanizado',
    tagline: 'Acessibilidade, carinho e técnica especializada para a saúde dos pés dos idosos.',
    description:
      'Com o passar dos anos, os pés sofrem perda progressiva do coxim gorduroso plantar, diminuição da flexibilidade para alcançar os pés, engrossamento severo das lâminas (onicogrifose) e problemas circulatórios. Nossa clínica conta com espaço térreo acessível, macas confortáveis e atendimento humanizado para devolver o conforto de caminhar na terceira idade.',
    symptoms: [
      'Unhas extremamente grossas, endurecidas e escuras (onicogrifose)',
      'Impossibilidade de alcançar os pés para cortar as unhas com segurança',
      'Dor ao pisar causada pela perda de gordura na sola do pé e calos profundos',
      'Pele muito fina, ressecada, descamativa e suscetível a fissuras',
      'Dificuldade para calçar sapatos normais e risco de quedas',
    ],
    risksOfWaiting: [
      'Tentativas arriscadas de cortar unhas grossas com tesouras caseiras que provocam cortes profundos',
      'Aumento expressivo do risco de quedas por perda de equilíbrio ao evitar a dor',
      'Infecções que evoluem silenciosamente devido à resposta inflamatória mais lenta',
      'Isolamento social e sedentarismo causados pela dificuldade de caminhar',
    ],
    ourProtocol: {
      title: 'Protocolo de Conforto e Reabilitação Geriátrica',
      description:
        'Desbaste mecânico especializado de unhas hipertróficas, hidratação profunda e remoção suave de calosidades.',
      steps: [
        {
          title: '1. Acolhimento e Anamnese de Comorbidades',
          desc: 'Revisão cuidadosa de medicamentos de uso contínuo (anticoagulantes, anti-hipertensivos) e estado circulatório.',
        },
        {
          title: '2. Desbaste e Afinamento de Unhas Espessas',
          desc: 'Uso de micromotores de precisão com aspiração e fresas especiais para desbastar unhas de espessura elevada sem causar dor.',
        },
        {
          title: '3. Remoção de Calosidades Plantares e Fissuras',
          desc: 'Eliminação da hiperqueratose dolorosa na sola e nos calcanhares com bisturis estéreis e lâminas descartáveis.',
        },
        {
          title: '4. Massagem Terapêutica Estimulante da Circulação',
          desc: 'Finalização com creme podológico de alta emoliência e manobras suaves para ativação do retorno venoso.',
        },
      ],
      technology: [
        'Consultório térreo com total acessibilidade para cadeirantes e pessoas com andador',
        'Micromotores podológicos silenciosos com controle de rotação',
        'Emolientes de grau farmacêutico para unhas hipertróficas',
      ],
      whatIsIncluded: [
        'Avaliação geriátrica podológica completa',
        'Desbaste e corte técnico de todas as unhas',
        'Remoção de calosidades e lixamento técnico',
        'Hidratação profunda restauradora de barreira',
        'Acompanhamento contínuo agendado',
      ],
    },
    priceReference: 'A partir de R$ 180,00',
    priceNote: 'Sessão completa adaptada ao grau de complexidade ungueal.',
    faqs: [
      {
        q: 'A clínica possui acessibilidade para idosos?',
        a: 'Sim! Nosso consultório é térreo, com corredores amplos, portas largas, banheiros adaptados e fácil estacionamento na frente.',
      },
      {
        q: 'Meu pai toma anticoagulante. Pode fazer o procedimento?',
        a: 'Sim. Nossos protocolos são minuciosos e não invasivos, utilizando técnicas que não causam sangramento nem machucam a pele frágil do idoso.',
      },
      {
        q: 'O atendimento pode ser acompanhado por familiares?',
        a: 'Com certeza! Nosso consultório é espaçoso e os acompanhantes são muito bem-vindos durante toda a consulta.',
      },
    ],
    image: '/images/original/clinic_room_1.webp',
    tone: 'sage',
  },

  'calos-e-calosidades': {
    slug: 'calos-e-calosidades',
    name: 'Calos, Calosidades e Calo com Núcleo',
    scientificName: 'Hiperqueratose Plantar & Heloma',
    badge: 'Alívio Imediato ao Pisar',
    tagline: 'Extração segura do núcleo profundo e desbaste estéril sem agredir a pele sadia.',
    description:
      'Calos e calosidades são respostas defensivas do organismo a um atrito mecânico constante ou pressão excessiva de calçados e sobrecarga na pisada. Quando essa queratina se aprofunda e forma um cone invertido com ponta que comprime terminações nervosas, surge o calo com núcleo (heloma), provocando pontadas agudas que impedem uma caminhada natural.',
    symptoms: [
      'Dor em pontada ao pisar, parecendo que há um prego ou caco de vidro na sola do pé',
      'Pele espessada, amarelada e ressecada nas bordas dos calcanhares ou sob as cabeças dos metatarsos',
      'Fissuras e rachaduras profundas que sangram ao esticar a pele',
      'Calos interdigitais (entre os dedos) dolorosos causados pelo aperto dos sapatos',
      'Necessidade de mancar para desviar a pisada do ponto de dor',
    ],
    risksOfWaiting: [
      'Corte caseiro com lâminas de barbear ou giletes que provocam cortes profundos e hemorragias',
      'Infecção bacteriana das fissuras que pode evoluir para celulite infecciosa',
      'Uso de calicidas líquidos que queimam quimicamente a pele sadia sem remover o núcleo',
      'Desvios biomecânicos graves na coluna, joelhos e quadris por vício de pisada',
    ],
    ourProtocol: {
      title: 'Protocolo de Descompressão e Enucleação Atraumática',
      description:
        'Trabalho de escultura podológica com bisturis cirúrgicos de precisão, desbastamento milimétrico e extração do núcleo com alívio instantâneo.',
      steps: [
        {
          title: '1. Emoliência Terapêutica Estéril',
          desc: 'Aplicação de substâncias emolientes biocompatíveis para amolecer a queratina densa sem ferir a derme viva.',
        },
        {
          title: '2. Desbastamento Laminar da Calosidade',
          desc: 'Remoção com bisturi anatômico esterilizado das placas de queratina morta, devolvendo a flexibilidade à pele.',
        },
        {
          title: '3. Enucleação Minuciosa do Núcleo',
          desc: 'Extração completa do ápice córneo que pressiona os nervos, eliminando imediatamente o ponto focal da dor.',
        },
        {
          title: '4. Polimento Podológico e Oclusão Hidratante',
          desc: 'Lixamento rotatório suave para fechar as bordas da pele e aplicação de creme regenerador intensivo.',
        },
      ],
      technology: [
        'Lâminas cirúrgicas descartáveis de uso único',
        'Micromotores podológicos de acabamento suave',
        'Silicones e protetores ortopédicos de alívio biomecânico',
      ],
      whatIsIncluded: [
        'Inspeção podológica da pisada e dos pontos de atrito',
        'Desbaste técnico das calosidades',
        'Remoção completa dos núcleos dolorosos',
        'Hidratação e emoliência profunda',
        'Orientações sobre calçados e protetores adequados',
      ],
    },
    priceReference: 'A partir de R$ 180,00',
    priceNote: 'Investimento conforme a profundidade e quantidade de lesões.',
    faqs: [
      {
        q: 'A remoção do calo dói?',
        a: 'A queratina do calo não possui vasos nem nervos; a dor ocorre apenas quando ela aperta a carne por baixo. Ao desbastar com a técnica correta, o procedimento não dói e o alívio ao colocar o pé no chão é instantâneo.',
      },
      {
        q: 'Posso lixar o pé com lixas comuns de lixa-pé em casa?',
        a: 'Lixar com força em casa estimula o efeito rebote: o corpo entende a agressão como um ataque e produz ainda mais queratina, tornando a pele cada vez mais grossa. O ideal é hidratação diária e desbaste clínico profissional.',
      },
      {
        q: 'O calo pode voltar?',
        a: 'Se a causa mecânica (como um sapato muito apertado ou desvio na pisada) continuar ocorrendo, o corpo voltará a produzir queratina no local. Durante a consulta, ensinamos como proteger a área com órteses e calçados adequados.',
      },
    ],
    image: '/images/original/treatment_calos.jpg',
    tone: 'sand',
  },

  'podoprofilaxia': {
    slug: 'podoprofilaxia',
    name: 'Podoprofilaxia Clínica e Corte Preventivo',
    scientificName: 'Podoprofilaxia & Assepsia Hospitalar',
    badge: 'Saúde & Prevenção Contínua',
    tagline: 'Higienização profunda, corte anatômico e prevenção de todas as patologias podológicas.',
    description:
      'A podoprofilaxia é o tratamento preventivo fundamental da podologia clínica. Muito superior a qualquer procedimento estético de pedicure, ela combina assepsia hospitalar com autoclave, corte técnico milimétrico que respeita a curvatura natural da unha, desbastamento de queratoses iniciais e revitalização da pele dos pés, prevenindo ativamente encravamentos, micoses e calos.',
    symptoms: [
      'Dificuldade para cortar as unhas no formato correto sem deixar pontas',
      'Unhas que começam a incomodar nos cantos dos dedos após o corte caseiro',
      'Sensação de ressecamento, cansaço e peso nos pés ao final do dia',
      'Desejo de manter a saúde e a estética dos pés com rigor de biossegurança médica',
      'Prevenção de complicações antes de viagens, corridas ou eventos importantes',
    ],
    risksOfWaiting: [
      'Corte incorreto nos cantos que gera espículas silenciosas e futuras unhas encravadas',
      'Uso de alicates não esterilizados em salões que transmitem hepatite e fungos',
      'Evolução de pequenos ressecamentos para fissuras dolorosas no calcanhar',
      'Desconforto diário por falta de hidratação profissional de barreira',
    ],
    ourProtocol: {
      title: 'Protocolo de Higienização e Preservação da Saúde',
      description:
        'Cuidado completo com padrão de centro cirúrgico para relaxar e manter seus pés impecavelmente saudáveis.',
      steps: [
        {
          title: '1. Assepsia e Higienização Antisséptica Estéril',
          desc: 'Desinfecção completa dos pés com formulação antisséptica de amplo espectro para eliminar bactérias e fungos superficiais.',
        },
        {
          title: '2. Corte Técnico Anatômico Reto',
          desc: 'Corte anatômico correto que guia o crescimento da unha para fora da carne, prevenindo encravamentos futuros.',
        },
        {
          title: '3. Limpeza dos Sulcos Ungueais e Desbaste Suave',
          desc: 'Remoção delicada de resíduos acumulados sob as dobras laterais e remoção da hiperqueratose fisiológica.',
        },
        {
          title: '4. Polimento, Hidratação Profunda e Massagem Relaxante',
          desc: 'Polimento superficial da lâmina, hidratação terapêutica profunda e massagem nos pés com estímulo reflexológico.',
        },
      ],
      technology: [
        'Instrumental cirúrgico 100% esterilizado em autoclave hospitalar com teste químico e biológico',
        'Embalagens de grau cirúrgico abertas estritamente na frente do paciente',
        'Ativos podológicos dermoprotetores de alta hidratação',
      ],
      whatIsIncluded: [
        'Higienização antisséptica profunda',
        'Corte técnico correto e seguro das lâminas',
        'Limpeza minuciosa dos sulcos ungueais',
        'Desbaste suave de queratose superficial',
        'Hidratação terapêutica e massagem relaxante',
      ],
    },
    priceReference: 'A partir de R$ 200,00',
    priceNote: 'Valor definido conforme o grau de hidratação e cuidados necessários.',
    faqs: [
      {
        q: 'Qual a diferença entre a podoprofilaxia e a pedicure tradicional?',
        a: 'A pedicure foca em estética superficial e esmaltação, frequentemente retirando cutículas vitais com alicates que podem transmitir infecções. A podoprofilaxia é um procedimento de saúde executado com normas hospitalares da Anvisa, bisturis estéreis e foco na anatomia biológica dos seus pés.',
      },
      {
        q: 'Com que frequência devo fazer a podoprofilaxia?',
        a: 'O intervalo recomendado é de 30 a 45 dias, acompanhando o ciclo natural de crescimento das unhas e de renovação celular da pele.',
      },
      {
        q: 'Homens também podem e devem fazer podoprofilaxia?',
        a: 'Com certeza! Uma grande parcela dos nossos pacientes é masculina. A saúde dos pés não tem gênero e homens que praticam esportes ou usam calçados fechados o dia todo se beneficiam enormemente do protocolo.',
      },
    ],
    image: '/images/original/clinic_room_1.webp',
    tone: 'sage',
  },
};
