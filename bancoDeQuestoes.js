const { v4: uuid } = require("uuid");

const bancoFisicaTermodinamica = [
  {
    id: uuid(),
    enunciado:
      "Para a instalação de um aparelho de ar-condicionado, é sugerido que ele seja colocado na parte superior da parede do cômodo, pois a maioria dos fluidos (líquidos e gases), quando aquecidos, sofrem expansão, tendo sua densidade diminuída e sofrendo um deslocamento ascendente. Por sua vez, quando são resfriados, tornam-se mais densos e sofrem um deslocamento descendente.",
    comando:
      "A sugestão apresentada no texto minimiza o consumo de energia, porque",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2016",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "diminui a umidade do ar dentro do cômodo.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "aumenta a taxa de condução térmica para fora do cômodo.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "torna mais fácil o escoamento de água para fora do cômodo.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto:
          "facilita a circulação das correntes de ar frio e quente dentro do cômodo.",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto:
          "diminui a taxa de emissão de calor por parte do aparelho para dentro do cômodo.",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "94",
    nivelDaQuestao: "fácil",
    gabarito: "D",
    comentario:
      "O aparelho de ar-condicionado funciona a partir de convecção e sua posição na parte superior do cômodo facilita as trocas de ar. O ar frio é denso e desce, enquanto o quente sobe.",
    legenda: "ENEM 2ª aplicação 2016",
  },
  {
    id: uuid(),
    enunciado:
      "Em 1962, um jingle (vinheta musical) criado por Heitor Carillo fez tanto sucesso que extrapolou as fronteiras do rádio e chegou à televisão ilustrado por um desenho animado. Nele, uma pessoa respondia ao fantasma que batia em sua porta, personificando o “frio”, que não o deixaria entrar, pois não abriria a porta e compraria lãs e cobertores para aquecer sua casa. Apesar de memorável, tal comercial televisivo continha incorreções a respeito de conceitos físicos relativos à calorimetria.",
    comando:
      "Para solucionar essas incorreções, deve-se associar à porta e aos cobertores, respectivamente, as funções de:",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2019",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "aquecer a casa e os corpos.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "evitar a entrada do frio na casa e nos corpos.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "minimizar a perda de calor pela casa e pelos corpos.",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "diminuir a entrada do frio na casa e aquecer os corpos.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "aquecer a casa e reduzir a perda de calor pelos corpos.",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "90",
    nivelDaQuestao: "fácil",
    gabarito: "C",
    comentario:
      "A porta e o cobertor não esquentam nem esfriam nada, mas apenas minimizam a perda de calor, neste caso da casa e dos corpos. Gabarito letra C.",
    legenda:
      "DUARTE, M. Jingle é a alma do negócio: livro revela os bastidores das músicas de propagandas. Disponível em: https://guiadoscuriosos.uol.com.br. Acesso em: 24 abr. 2019 adaptado).",
  },
  {
    id: uuid(),
    enunciado:
      "Em dias com baixas temperaturas, as pessoas utilizam casacos ou blusas de lã com o intuito de minimizar a sensação de frio. Fisicamente, esta sensação ocorre pelo fato de o corpo humano liberar calor, que é a energia transferida de um corpo para outro em virtude da diferença de temperatura entre eles,",
    comando:
      "A utilização de vestimenta de lã diminui a sensação de frio, porque",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2012",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "possui a propriedade de gerar calor.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto:
          "é constituída de material denso, o que não permite a entrada do ar frio.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto:
          "diminui a taxa de transferência de calor do corpo humano para o meio externo.",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto:
          "tem como principal característica a absorção de calor, facilitando o equilíbrio térmico.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto:
          "está em contato direto com o corpo humano, facilitando a trasnferência de calor por condução.",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "87",
    nivelDaQuestao: "fácil",
    gabarito: "C",
    comentario:
      "A lã é um isolante térmico dificultando o fluxo de calor do corpo humano para o ambiente.",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Na cidade de São Paulo, as ilhas de calor são responsáveis pela alteração da direção do fluxo da brisa marítima que deveria atingir a região de mananciais. Mas, ao cruzar a ilha de calor, a brisa marítima agora encontra um fluxo de ar vertical, que transfere para ela energia térmica absorvida das superfícies quentes da cidade, deslocando-a para altas altitudes. Dessa maneira, há condensação e chuvas fortes no centro da cidade, em vez de na região de mananciais. A imagem apresenta os três subsistemas que trocam energia nesse fenômeno. No processo de fortes chuvas no centro da cidade de São Paulo, há dois mecanismos dominantes de transferência de calor: entre o Sol e a ilha de calor, e entre a ilha de calor e a brisa marítima.",
    comando: "Esses mecanismos são, respectivamente,",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2021",
    estaAdaptada: false,
    imagens: [
      "https://storage.aprovatotal.com.br/admin-storage-prod/exercises/61b78ab7777dbd1bd425f0d8/captura%20146.PNG",
    ],
    alternativas: [
      {
        letra: "A",
        texto: "irradiação e convecção",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto: "irradiação e irradiação",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "condução e irradiação",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "convecção e irradiação",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "convecção e convecção",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "86",
    nivelDaQuestao: "fácil",
    gabarito: "A",
    comentario:
      "O sol emite energia através de irradiação. Já a ilha de calor se relaciona com a brisa marítma através das massas de ar cujos comportamentos se dão através da convecção. As massas de ar sobem quando aquecidas e descem quando resfriadas.",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Na cidade de São Paulo, as ilhas de calor são responsáveis pela alteração da direção do fluxo da brisa marítima que deveria atingir a região de mananciais. Mas, ao cruzar a ilha de calor, a brisa marítima agora encontra um fluxo de ar vertical, que transfere para ela energia térmica absorvida das superfícies quentes da cidade, deslocando-a para altas altitudes. Dessa maneira, há condensação e chuvas fortes no centro da cidade, em vez de na região de mananciais. A imagem apresenta os três subsistemas que trocam energia nesse fenômeno. No processo de fortes chuvas no centro da cidade de São Paulo, há dois mecanismos dominantes de transferência de calor: entre o Sol e a ilha de calor, e entre a ilha de calor e a brisa marítima.",
    comando:
      "A tirinha faz referência a uma propriedade de uma grandeza Física, em que a função do jornal utilizado pelo homem é a de",
    banca: "INEP",
    orgao: "ENEM PPL",
    ano: "2021",
    estaAdaptada: false,
    imagens: [
      "https://storage.aprovatotal.com.br/admin-storage-prod/exercises/5fc14227f433900ed4511178/ENEM2011-5.png",
    ],
    alternativas: [
      {
        letra: "A",
        texto: "absorver a umidade que dissipa calor.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "impedir que o frio do ambiente penetre.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "manter o calor do homem concentrado.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "restringir a perda de calor para o ambiente.",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto: "bloquear o vento que sopra trazendo frio.",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "85",
    nivelDaQuestao: "fácil",
    gabarito: "D",
    comentario:
      "O jornal tem o efeito de restringir entrada de frio, e não de esquentar.",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "O aproveitamento da luz solar como fonte de energia renovável tem aumentado significativamente nos últimos anos. Uma das aplicações é o aquecimento de água (ρ água = 1 kg/L) para uso residencial. Em um local, a intensidade da radiação solar efetivamente captada por um painel solar com área de 1 m2 é de 0,03 kW/m2. O valor do calor específico da água é igual 4,2 kJ/(kgºC).",
    comando:
      "Nessa situação, em quanto tempo é possível aquecer 1 litro de água de 20 ºC até 70 ºC?",
    banca: "INEP",
    orgao: "ENEM PPL",
    ano: "2017",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "490 s",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "2800 s",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "6300 s",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "7000 s",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto: "9800 s",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "73",
    nivelDaQuestao: "médio",
    gabarito: "D",
    comentario: "",
    legenda: "",
  },

  {
    id: uuid(),
    enunciado:
      "Para diminuir os efeitos da perda de calor pela pele em uma região muito “fria” do país, Gabrielle realizou vários procedimentos.",
    comando:
      "Assinale abaixo aquele que, ao ser realizado, minimizou os efeitos da perda de calor por irradiação térmica.",
    banca: "UNIFOR",
    orgao: "UNIFOR",
    ano: "2014",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "Fechou os botões das mangas e do colarinho da blusa que usava.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "Usou uma outra blusa por cima daquela que usava.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto:
          "Colocou um gorro, cruzou os braços e dobrou o corpo sobre as pernas.",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto:
          "Colocou um cachecol de lã no pescoço e o enrolou com duas voltas.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "Vestiu uma jaqueta jeans sobre a blusa que usava.",
        estaCorreta: false,
      },
    ],
    disciplina: "Física",
    assuntos: ["Termodinâmica"],
    percentualDeAcerto: "47",
    nivelDaQuestao: "média",
    gabarito: "C",
    comentario:
      "A irradiação tem seu efeito restringido pela menor área causada pela posição de Gabrielle em cruzar os braços.",
    legenda: "",
  },
];

const bancoHistoriaColonialismo = [
  {
    id: uuid(),
    enunciado:
      "Quando os espanhóis chegaram à América, estava em seu apogeu o império teocrático dos Incas, que estendia seu poder sobre o que hoje chamamos Peru, Bolívia e Equador, abarcava parte da Colômbia e do Chile e alcançava até o norte argentino e a selva brasileira; a confederação dos Astecas tinha conquistado um alto nível de eficiência no vale do México, e no Yucatán, na América Central, a esplêndida civilização dos Maias persistia nos povos herdeiros, organizados para o trabalho e para a guerra. O Maias tinham sido grandes astrônomos, mediram o tempo e o espaço com assombrosa precisão, e tinham descoberto o valor do número zero antes de qualquer povo da história. No museu de Lima, podem ser vistos centenas de crânios que receberam placas de ouro e prata por parte dos cirurgiões Incas. ",
    comando:
      "As sociedades mencionadas deixaram como legado uma diversidade de",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "Bens religiosos inspirados na matriz cristã.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "Materiais bélicos pilhados em batalhas coloniais",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "Heranças culturais constituídas em saberes próprios.",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "Costumes laborais moldados em estilos estrangeiros.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "Práticas medicinais alicerçadas no conhecimento científico.",
        estaCorreta: false,
      },
    ],
    disciplina: "História",
    assuntos: ["História da América Latina", "Colonialismo Espanhol"],
    percentualDeAcerto: "78",
    nivelDaQuestao: "fácil",
    gabarito: "C",
    comentario:
      "O texto da questão aborda os Incas, Astecas e Maias, destacando sua cultura e legado histórico. A proposta do texto é trazer à luz estas heranças históricas distante do olhar Europeu eurocêntrico. Logo, a resposta que mais se adequa é a alternativa C",
    legenda:
      "GALEANO, E. As veias abertas da América Latina. Porto Alegre: L&PM,2012.",
  },
];

const bancoHistoriaGeral = [
  {
    id: uuid(),
    enunciado:
      "A história do Primeiro de Maio de 1890 — na França e na Europa, o primeiro de todos os Primeiros de Maio — é, sob vários aspectos, exemplar. Resultante de um ato político deliberado, essa manifestação ilustra o lado voluntário da construção de uma classe — a classe operária — à qual os socialistas tentam dar uma unidade política e cultural através daquela pedagogia da festa cujo princípio, eficácia e limites há muito tempo tinham sido experimentados pela Revolução Francesa.",
    comando:
      "Com base no texto, a fixação dessa data comemorativa tinha por objetivo",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "Valorizar um sentimento burguês.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "Afirmar uma identidade coletiva",
        estaCorreta: true,
      },
      {
        letra: "C",
        texto: "Edificar uma memória nacional.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "Criar uma comunidade cívica.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "Definir uma tradição popular.",
        estaCorreta: false,
      },
    ],
    disciplina: "História",
    assuntos: ["Revolução Francesa", "História Geral"],
    percentualDeAcerto: "78",
    nivelDaQuestao: "fácil",
    gabarito: "B",
    comentario:
      "É dito no texto a forma popular do Primeiro de Maio que se espalhou pela França com ideias que buscavam afirmar uma identidade coletiva através de ato político deliberado, bem como a sensação de eficácia há muito não vista. É um movimento popular que edifica o sentimento coletivo de uma multidão motivada politicamente.",
    legenda:
      "PEERROT, M. Os excluídos da história: operários, mulheres e prisioneiros. Rio de Janeiro: Paz e Terra, 1988.",
  },
  {
    id: uuid(),
    enunciado:
      "E venham, então, os alegres incendiários de dedos carbonizados! Vamos! Ateiem fogo às estantes das bibliotecas! Desviem o curso dos canais, para inundar os museus! Empunhem as picaretas, os machados os martelos e deitem abaixo sem piedade as cidades veneradas!",
    comando:
      "Que princípio marcante do Futurismo e comum a várias correntes artísticas e culturais das primeiras três décadas do século XX está destacado no texto?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2017",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "A tradição é uma força incontornável.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "A arte é expressão da memória coletiva.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "A modernidade é a superação decisiva da história.",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "A realidade cultural é determinada economicamente.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "A memória é um elemento crucial da identidade cultural.",
        estaCorreta: false,
      },
    ],
    disciplina: "História",
    assuntos: ["Futurismo", "História Geral"],
    percentualDeAcerto: "64",
    nivelDaQuestao: "média",
    gabarito: "C",
    comentario:
      "O futurismo é uma das ideias vanguardistas do início do século XX, motivada por uma Europa conflituosa. Isto significa que o Futurismo é só uma destas ideias dispostas a questionar a então modernidade e abrir caminho a reflexões. O texto fala de acabar com a herança e o então patrimônio a fim de encaminhar um futuro artificial. Gabarito letra C.",
    legenda:
      "MARINETTI. F. T. Manifesto futurista. Disponível em: www.sibila.com.br. Acesso em: 2 ago. 2012 (adaptado).",
  },
];

const bancoHistoriaPrimeiraGuerra = [
  {
    id: uuid(),
    enunciado:
      "A década que se segue ao fim da guerra constitui praticamente uma continuação destacom a acomodação difícil de seus resultados. A ruptura do sistema internacional com aRevolução Soviética, a ascensão dos Estados Unidos, o recuo da Europa e o início dacontestação anticolonial marcam uma década que para muitos foi de pessimismo e paraalguns de ilusão, que bruscamente se encerra com a quebra da bolsa de Nova Iorque. Com acrise de 1929 terá início a preparação de uma nova guerra mundial.",
    comando:
      "Os eventos mencionados no texto contribuíram fortemente para a ascensão de regimespropensos a um novo conflito armado, pois",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2020",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "perturbaram a dinâmica de equilíbrio demográfico.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "dificultaram a adesão a ideologias de viés socialista.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "favoreceram a ascensão de grupos anarquistas ao poder.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "corroeram a crença na legitimidade das democracias liberais.",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto:
          "deterioraram a confiança no salvacionismo dos exércitos nacionais.",
        estaCorreta: false,
      },
    ],
    disciplina: "História",
    assuntos: ["Primeira Guerra Mundial"],
    percentualDeAcerto: "42",
    nivelDaQuestao: "média",
    gabarito: "D",
    comentario:
      "A descrença da democracia motivou grupos nazifascistas a investirem no poder nos anos seguintes ao término da Primeira Grande Guerra. Gabarito letra D.",
    legenda:
      "VIZENTINI, P. G. F. Primeira Guerra Mundial. Porto Alegre: UFRGS, 2006 (adaptado).",
  },
  {
    id: uuid(),
    enunciado: "",
    comando:
      "Uma complexa trama de alianças distribuiu os principais Estados europeus nas duas grandes guerras do século XX. A esse respeito é correto afirmar",
    banca: "FGV",
    orgao: "FGV",
    ano: "2020",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto:
          "França, Inglaterra e Estados Unidos estiveram do mesmo lado nos dois conflitos mundiais.",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto:
          "Nas duas guerras, a característica principal foi a polarização entre Estados capitalistas e Estados socialistas.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto:
          "A Itália foi aliada da Alemanha durante as duas guerras, apesar de suas vinculações históricas com o Estado francês.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto:
          "A Espanha manteve-se neutra na Primeira Guerra mas participou ativamente da Segunda Guerra, aliada à Alemanha nazista.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto:
          "A exaltação dos sentimentos nacionalistas motivou a Primeira Guerra mas foi substituída por motivações econômicas na Segunda Guerra.",
        estaCorreta: false,
      },
    ],
    disciplina: "História",
    assuntos: ["Primeira Guerra Mundial"],
    percentualDeAcerto: "62",
    nivelDaQuestao: "média",
    gabarito: "A",
    comentario:
      "Apesar da rivalidade histórica, Inglaterra e França lutaram juntas, recebendo apoio dos EUA nos dois conflitos.",
    legenda: "",
  },
];

const bancoFilosofiaModerna = [
  {
    id: uuid(),
    enunciado:
      "Até hoje admitia-se que nosso conhecimento se devia regular pelos objetos; porém todas as tentativas para descobrir, mediante conceitos, algo que ampliasse nosso conhecimento, malogravam-se com esse pressuposto. Tentemos, pois, uma vez, experimentar se não se resolverão melhor as tarefas da metafísica, admitindo que os objetos se deveriam regular pelo nosso conhecimento.",
    comando:
      "O trecho em questão é uma referência ao que ficou conhecido como revolução copernicana na filosofia. Nele, confrontam-se duas posições filosóficas que",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2013",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto:
          "assumem pontos de vista opostos acerca da natureza do conhecimento.",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto:
          "defendem que o conhecimento é impossível, restando-nos somente o ceticismo.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto:
          "revelam a relação de interdependência entre os dados da experiência e a reflexão filosófica.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto:
          "apostam, no que diz respeito às tarefas da filosofia, na primazia das ideias em relação aos objetos.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto:
          "refutam-se mutuamente quanto à natureza do nosso conhecimento e são ambas recusadas por Kant.",
        estaCorreta: false,
      },
    ],
    disciplina: "Filosofia",
    assuntos: ["Kantismo", "Filosofia Moderna"],
    percentualDeAcerto: "79",
    nivelDaQuestao: "média",
    gabarito: "A",
    comentario:
      "A questão aborda duas linhas de pensamento que se divergem. Gabarito letra A.",
    legenda:
      "KANT, I. Crítica da razão pura. Lisboa: Calouste-Gulbenkian, 1994 (adaptado).",
  },
];

const bancoFilosofia = [...bancoFilosofiaModerna];

const bancoBiologiaDoencas = [
  {
    id: uuid(),
    enunciado:
      "Os resultados de um ensaio clínico randomizado na Indonésia apontaram uma redução de 77% dos casos de dengue nas áreas que receberam o mosquito Aedes aegypti infectado com a bactéria Wolbachia. Trata-se da mesma técnica utilizada no Brasil pelo Método Wolbachia, iniciativa conduzida pela Fundação Oswaldo Cruz — Fiocruz. Essa bactéria induz a redução da carga viral no mosquito e, consequentemente, o número de casos de dengue na área, sendo repassada por meio do cruzamento entre os insetos. Como essa bactéria é um organismo intracelular e o vírus também precisa entrar nas células para se reproduzir, ambos necessitarão de recursos comuns.",
    comando: "Essa tecnologia utilizada no combate à dengue consiste na ",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "predação do virus pela bactéria",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "esterilização de mosquitos infectados.",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "alteração no genótipo do mosquito pela bactéria.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "competição do vírus e da bactéria no hospedeiro.",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto: "inserção de material genético do vírus na bactéria.",
        estaCorreta: false,
      },
    ],
    disciplina: "Biologia",
    assuntos: ["Doenças Endêmicas"],
    percentualDeAcerto: "54",
    nivelDaQuestao: "média",
    gabarito: "D",
    comentario:
      "A questão aborda duas linhas de pensamento que se divergem. Gabarito letra A.",
    legenda:
      "COSTA, G. Agência Fiocruz de Notícias. Estudo confirma eficácia do Método Wolbachia para dengue. Disponivel em: https:Jiportal.fiocruz br. Acesso em: 3 jun. 2022 (adaptado).",
  },
];

const bancoBiologia = [...bancoBiologiaDoencas];

const bancoMatematicaProbabilidade = [
  {
    id: uuid(),
    enunciado:
      "Em uma população de homens e mulheres, 60% são mulheres, sendo 10% delas vegetarianas. Sabe-se, ainda, que 5% dos homens dessa população também são vegetarianos.",
    comando:
      "Dessa forma, selecionando-se uma pessoa dessa população ao acaso e verificando-se que ela é vegetariana, qual é a probabilidade de que seja mulher?",
    banca: "ESPCEX",
    orgao: "ESPCEX",
    ano: "2018",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "20%",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "70%",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "75%",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "80%",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "85%",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Probabilidade"],
    percentualDeAcerto: "81",
    nivelDaQuestao: "fácil",
    gabarito: "C",
    comentario:
      "Imaginando-se um grupo de 100 pessoas: 60 são mulheres, logo 40 são homens. 10% das mulheres são vegetarianas, ou seja,  (10/100)*60 que resulta em 6. Para os homens, 5% de 40 resulta em 2. Somando-se 6+2 tem-se 8 que é o número de vegetarianos totais. Para saber a probabilidade de se pegar uma pessoa vegetarina e que seja mulher é pegar o 6 (o que se deseja, mulheres vegetarianas) e dividir pelo total de vegetarianos que é 8. Resta-nos 6/8 cujo resultado é 0.75 ou 75%. Gabarito letra C",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Um morador de uma região metropolitana tem 50% de probabilidade de atrasar-se para o trabalho quando chove na região; caso não chova, sua probabilidade de atraso é de 25%. Para um determinado dia, o serviço de meteorologia estima em 30% a probabilidade da ocorrência de chuva nessa região.",
    comando:
      "Qual é a probabilidade de esse morador se atrasar para o serviço no dia para o qual foi dada a estimativa de chuva?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2017",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "0,075",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "0,150",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "0,325",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "0,600",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "0,800",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Probabilidade"],
    percentualDeAcerto: "23",
    nivelDaQuestao: "médio",
    gabarito: "C",
    comentario:
      "Chover e atrasar ou não chover e atrasar, ou seja, (30% * 50%) + (70% * 25%). Gabarito letra C",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Em uma central de atendimento, cem pessoas receberam senhas numeradas de 1 até 100. Uma das senhas é sorteada ao acaso.",
    comando:
      "Qual a probabilidade de a senha sorteada ser um número de 1 a 20?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2015",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "1/100",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "19/100",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "20/100",
        estaCorreta: true,
      },
      {
        letra: "D",
        texto: "21/100",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "80/100",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Probabilidade"],
    percentualDeAcerto: "58",
    nivelDaQuestao: "fácil",
    gabarito: "C",
    comentario:
      "São 20 senhas almejadas dentre 100, logo 20/100. Gabarito letra C",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Numa escola com 1 200 alunos foi realizada uma pesquisa sobre o conhecimento desses em duas línguas estrangeiras, inglês e espanhol. Nessa pesquisa constatou-se que 600 alunos falam inglês, 500 falam espanhol e 300 não falam qualquer um desses idiomas.",
    comando:
      "Escolhendo-se um aluno dessa escola ao acaso e sabendo-se que ele não fala inglês, qual a probabilidade de que esse aluno fale espanhol?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2013",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "1/2",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto: "5/8",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "1/4",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "5/6",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "5/14",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Probabilidade"],
    percentualDeAcerto: "28",
    nivelDaQuestao: "média",
    gabarito: "A",
    comentario:
      "Não se sabe quantas falam as duas línguas. Basta somar 600 + 500 + 300, resultando em 1400. Como existem 1200 alunos, 1400 - 1200 nos dá os que falam as duas línguas. No entanto, entre os 600 estão também os que falam espanhol. Basta tirar 600 - 200, logo os que so falam ingles são 400. No mesmo reciocínio, os que só falam espanhol são 300. Como se deseja os que falam espanhol sabendo-se que não fala inglês, basta pegar os que só falam espanhol e dividir por 600 que são os que falam espanhol + os que não falam nenhum. Ficamos com 300/600 => 1/2 => 50%. Gabarito letra A.",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Amigo secreto é uma brincadeira tradicional nas festas de fim de ano. Um grupo de amigos se reúne e cada um deles sorteia o nome da pessoa que irá presentear. No dia da troca de presentes, uma primeira pessoa presenteia seu amigo secreto. Em seguida, o presenteado revela seu amigo secreto e o presenteia. A brincadeira continua até que todos sejam presenteados, mesmo no caso em que o ciclo se fecha. Dez funcionários de uma empresa, entre eles um casal, participarão de um amigo secreto. A primeira pessoa a revelar será definida por sorteio.",
    comando:
      "Qual é a probabilidade de que a primeira pessoa a revelar o seu amigo secreto e a última presenteada sejam as duas pessoas do casal?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2020",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "1/15",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "1/45",
        estaCorreta: true,
      },
      {
        letra: "C",
        texto: "1/50",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "1/90",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "1/100",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Probabilidade"],
    percentualDeAcerto: "",
    nivelDaQuestao: "média",
    gabarito: "B",
    comentario:
      "O fatorial de 8 seria os casos favoráveis pois seriam o casal no começo e no final, permutando eles por 2 pois pode ser pessoa1 depois pessoa2 ou pessoa2 depois pessoa1. Divide-se pelo total de casos 10!, e tem-se 1/45. Questão anulada, mas o gabarito é letra B.",
    legenda: "",
  },
];

const bancoMatematicaGeometria = [
  {
    id: uuid(),
    enunciado:
      "A caixa-d’água de um edifício terá a forma de um paralelepípedo retângulo reto com volume igual a \\(28 080\\) litros. Em uma maquete que representa o edifício, a caixa-d’água tem dimensões \\(2  \\text{cm} \\times 3,51\\text{cm} \\times 4 \\text{cm}\\).</br> Dado: \\(1 \\text{dm}^3 = 1 \\text{L}\\). ",
    comando: "A escala usada pelo arquiteto foi",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2020",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "1:10",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "1:100",
        estaCorreta: true,
      },
      {
        letra: "C",
        texto: "1:1000",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "1:10000",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "1:100000",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Geometria Espacial"],
    percentualDeAcerto: "42",
    nivelDaQuestao: "média",
    gabarito: "B",
    comentario:
      "O volume de um paralelepípedo é dado pelo produto de suas dimensões, neste caso: \\(3,51 \\times 4 \\times 2\\). O volume real da caixa d'água é: </br> \\(V = 2x \\times 3,51x \\times 4x = 28080 \\text{dm}^3   \\)",
    legenda: "",
  },
];
const bancoMatematicaProjecaoOrtogonal = [
  {
    id: uuid(),
    enunciado:
      "Dentre  as diversas planificações possíveis para o cubo, uma delas é a que se encontra apresentada na Figura 1. Em um cubo, foram pintados, em três de suas faces, quadrados de cor cinza escura, que ocupam um quarto dessas faces, tendo esses três quadrados um vértice em comum, conforme ilustrado na Figura 2.",
    comando:
      "A planificação do cubo da Figura 2, conforme o tipo de planificação apresentada na Figura 1, é",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [
      "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71-1.png",
      "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71-2.png",
    ],
    alternativas: [
      {
        letra: "A",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71_A.png",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71B.png",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71C.png",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/72D.png",
        estaCorreta: true,
      },
      {
        letra: "E",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/71E.png",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Projeção Ortogonal"],
    percentualDeAcerto: "49",
    nivelDaQuestao: "média",
    gabarito: "D",
    comentario: "",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      "Um robô, que tem um imã em sua base, se desloca sobre a superfície externa de um cubo metálico, ao longo de segmentos de reta cujas extremidades são pontos médios de arestas  e centros de faces. Ele inicia seu deslocamento no ponto P, centro da face superior do cubo, segue para o centro da próxima face, converte à esquerda e segue para o centro da face seguinte, converte à direita e continua sua movimentação, sempre altemando entre conversões à esquerda e à direita quando alcança o centro de uma face. O robô só termina sua movimentação quando retorna ao ponto P. A figura apresenta os deslocamentos iniciais desse robô. ",
    comando:
      "A projeção ortogonal do trajeto descrito por esse robô sobre o plano da base, após terminada sua movimentação, visualizada da posição em que se está enxergando esse cubo, é",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [
      "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73.png",
    ],
    alternativas: [
      {
        letra: "A",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73_A.png",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73_B.png",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73_C.png",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73_D.png",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "",
        imagem:
          "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/73_E.png",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Projeção Ortogonal"],
    percentualDeAcerto: "54",
    nivelDaQuestao: "média",
    gabarito: "A",
    comentario: "",
    legenda: "",
  },
];

const bancoMatematicaAritmetica = [
  {
    id: uuid(),
    enunciado:
      "Ao escutar à notícia de que um filme recém-lançado arrecadou, no primeiro mês de lançamento, R$ 1,35 bilhão em bilheteria, um estudante escreveu corretamente o número que representa essa quantia, com todos os seus algarismos.",
    comando: "O número escrito pelo estudante foi",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "135 000,00",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "1 350 000,00",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "13 500 000,00",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "135 000 000,00",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "1 350 000 000,00",
        estaCorreta: true,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Aritmética", "Sistema de Unidades"],
    percentualDeAcerto: "78",
    nivelDaQuestao: "fácil",
    gabarito: "E",
    comentario:
      "1,35 bilhão significa um bilhao (1 000 000 000) adicionado a 350 milhões (350 000 000). Isso resulta em 1 350 000 000. Gabarito letra E.",
    legenda: "",
  },
  {
    id: uuid(),
    enunciado:
      " Em uma competição de velocidade, diz-se que há uma ultrapassagem quando um veículo que está atrás de outro passa à sua frente, com ambos se deslocando no mesmo sentido. Considere uma competição automobilística entre cinco carros em uma pista com 100 m de comprimento, onde todos largam no mesmo instante e da mesma linha. O gráfico mostra a variação da distância percorrida por cada veículo, em função do tempo, durante toda a competição.",
    comando:
      "Qual o número de ultrapassagens, após o início da competição, efetuadas pelo veículo que chegou em último lugar?",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2022",
    estaAdaptada: false,
    imagens: [
      "https://qcon-assets-production.s3.amazonaws.com/images/provas/89648/85.png",
    ],
    alternativas: [
      {
        letra: "A",
        texto: "0",
        estaCorreta: true,
      },
      {
        letra: "B",
        texto: "1",
        estaCorreta: false,
      },
      {
        letra: "C",
        texto: "2",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "3",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "4",
        estaCorreta: false,
      },
    ],
    disciplina: "Matemática",
    assuntos: ["Análise de Tabelas e Gráficos"],
    percentualDeAcerto: "51",
    nivelDaQuestao: "média",
    gabarito: "A",
    comentario:
      "O último a chegar é o que demorou mais a chegar. O carro que chegou por último fez o percurso em ultrapassar nenhum outro veículo, até porque sua velocidade é uniforme de acordo com a sua linha reta no gráfico, e para ultrapassar é necessário um aumento de velocidade. Portanto, houve 0 ultrapassagens para o último colocado. Gabarito letra A",
    legenda: "",
  },
];

const bancoLinguagensInterpretacao = [
  {
    id: uuid(),
    enunciado: "",
    comando:
      "Essa propaganda defende a transformação social e a diminuição da violência por meio da palavra. Isso se evidencia pela",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2014",
    estaAdaptada: false,
    imagens: [
      "https://d2q576s0wzfxtl.cloudfront.net/2017/08/08150012/questao135.enem2014.png",
    ],
    alternativas: [
      {
        letra: "A",
        texto:
          "predominância de tons claros na composição da peça publicitária.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "associação entre uma arma de fogo e um megafone.",
        estaCorreta: true,
      },
      {
        letra: "C",
        texto: "grafia com inicial maiúscula da palavra “voz” no slogan.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "imagem de uma mão segurando um megafone.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto: "representação gráfica da propagação do som.",
        estaCorreta: false,
      },
    ],
    disciplina: "Linguagens",
    assuntos: ["Interpretação Textual", "Propaganda"],
    percentualDeAcerto: "",
    nivelDaQuestao: "média",
    gabarito: "B",
    comentario:
      "A imagem de uma megafone ilustrado como arma de fogo indica que a voz da comunidade é de grande importância de modo que associa o megafone (expandir uma mensagem) a arma (solucionando a problemática).Portanto, gabarito letra B",
    legenda:
      "Disponível em: www.portaldapropaganda.com.br. Acesso em: 28 jul. 2013.",
  },
];

const bancoGeografiaGeografiaHumana = [
  {
    id: uuid(),
    enunciado:
      "A economia moderna depende da disponibilidade de muita energia em diferentes formas, para funcionar e crescer. No Brasil, o consumo total de energia pelas indústrias cresceu mais de quatro vezes no período entre 1970 e 2005. Enquanto os investimentos em energias limpas e renováveis, como solar e eólica, ainda são incipientes, ao se avaliar a possibilidade de instalação de usinas geradoras de energia elétrica, diversos fatores devem ser levados em consideração, tais como os impactos causados ao ambiente e às populações locais.",
    comando:
      "Em uma situação hipotética, optou-se por construir uma usina hidrelétrica em região que abrange diversas quedas d’água em rios cercados por mata, alegando-se que causaria impacto ambiental muito menor que uma usina termelétrica. Entre os possíveis impactos da instalação de uma usina hidrelétrica nessa região, inclui-se",
    banca: "INEP",
    orgao: "ENEM",
    ano: "2009",
    estaAdaptada: true,
    imagens: [],
    alternativas: [
      {
        letra: "A",
        texto: "A poluição da água por metais da usina.",
        estaCorreta: false,
      },
      {
        letra: "B",
        texto: "A destruição do habitat de animais terrestres.",
        estaCorreta: true,
      },
      {
        letra: "C",
        texto: "O aumento expressivo na liberação de CO2 para a atmosfera.",
        estaCorreta: false,
      },
      {
        letra: "D",
        texto: "O consumo não renovável de toda água que passa pelas turbinas.",
        estaCorreta: false,
      },
      {
        letra: "E",
        texto:
          "O aprofundamento no leito do rio, com a menor deposição de resíduos no trecho de rio anterior à represa.",
        estaCorreta: false,
      },
    ],
    disciplina: "Geografia",
    assuntos: [
      "Impacto do Homem na natureza",
      "Meio Ambiente",
      "Geografia Humana",
    ],
    percentualDeAcerto: "78",
    nivelDaQuestao: "fácil",
    gabarito: "B",
    comentario:
      "É dito no texto a forma popular do Primeiro de Maio que se espalhou pela França com ideias que buscavam afirmar uma identidade coletiva através de ato político deliberado, bem como a sensação de eficácia há muito não vista. É um movimento popular que edifica o sentimento coletivo de uma multidão motivada politicamente.",
    legenda:
      "RICARDO, B.; CAMPANILI, M. Almanaque Brasil Socioambiental. São Paulo: Instituto Socioambiental, 2007.",
  },
];

const bancoHistoria = [...bancoHistoriaColonialismo, ...bancoHistoriaGeral];
const bancoFisica = [...bancoFisicaTermodinamica];
const bancoGeografia = [...bancoGeografiaGeografiaHumana];
const bancoMatematica = [
  ...bancoMatematicaProbabilidade,
  ...bancoMatematicaGeometria,
  ...bancoMatematicaProjecaoOrtogonal,
  ...bancoMatematicaAritmetica,
];

const bancoLinguagens = [...bancoLinguagensInterpretacao];

module.exports = banco = [
  ...bancoFisica,
  ...bancoGeografia,
  ...bancoHistoria,
  ...bancoMatematica,
  ...bancoLinguagens,
];
