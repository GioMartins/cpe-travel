import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from 'react-bootstrap/Carousel';
//import initialImages from "../../constantes/Images";

import './Carousel.css';

function SliderCarousel({ images }) {
  const initialImages = [
    {
      carousel: '/img/Pontos_Turisticos/rj.png',
      key: 'RioDeJaneiro',
      cards: '/img/Pontos_Turisticos/rj_media.png',
      title: 'Rio de Janeiro',
      subtitle: 'Brasil',
      capa: '/img/Pontos_Turisticos/capaRIO.png',
      descricao: 'Cercada pela Mata Atlântica e com vista para o mar, a cidade do Rio de Janeiro já foi tema de muitas canções que exaltaram sua beleza. E a Cidade Maravilhosa continua linda, com seus cenários de cartão-postal, monumentos, excelente gastronomia e uma vida noturna bem animada. Alguns de seus pontos turísticos são tão famosos que viraram símbolos do Brasil lá fora, como o Cristo Redentor, o Pão de Açúcar e a praia de Copacabana.',
      titulo1: 'Cristo Redentor',
      texto1: 'Eleita uma das Sete Novas Maravilhas do Mundo, a estátua do Cristo Redentor reina majestosa sobre a cidade. Fica no alto do Morro do Corcovado e pode ser acessado de van, por uma estrada panorâmica; de trem turístico, que também passa pelo meio da mata; ou de helicóptero, observando a linda vista aérea da cidade. A estátua tem 38 metros de altura e foi inaugurada em 1931.',
      imagem1: '/img/Pontos_Turisticos/cardCristo.jpg',
      titulo2: 'Pão de Açúcar',
      texto2: 'Embarque no famoso bondinho construído há mais de um século, rodeado de janelões de vidro. São duas paradas: no Morro da Urca, a 220 metros de altitude, e no Pão de Açúcar, a 396 metros. Lá do alto, é inesquecível a vista da Baía de Guanabara, com suas curvas e barcos ancorados nas marinas. O Morro da Urca também costuma ser palco de shows noturnos.',
      imagem2: '/img/Pontos_Turisticos/cardPao.jpg',
      titulo3: 'Estádio do Maracanã',
      texto3: 'Totalmente reformado para a Copa de 2014, o estádio conta com visitas guiadas e impressiona até quando está vazio. Não pode faltar no roteiro dos fanáticos por futebol!',
      imagem3: '/img/Pontos_Turisticos/cardMaraca.jpg',
      titulo4: 'Porto Maravilha',
      texto4: 'A região portuária do Centro foi totalmente revitalizada e se tornou a nova sensação do Rio. Além do Museu do Amanhã e do AquaRio, ali ficam o Boulevard Olímpico, com aros olímpicos, e o grafite de Eduardo Kobra, maior painel do mundo segundo o “Guinness Book".',
      imagem4: '/img/Pontos_Turisticos/cardPMaravilha.jpg',
      info: '/img/Pontos_Turisticos/InfoRJ.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/pelourinho.png',
      key: 'Salvador',
      cards: '/img/Pontos_Turisticos/salvador.png',
      title: 'Salvador',
      subtitle: 'Brasil',
      capa: '/img/Pontos_Turisticos/farolSalvador.png',
      descricao: 'Terra de todos os santos, com muito axé, sol e mar. Essa é Salvador, que ostentou o título de capital do Brasil por mais de 200 anos. Seja nas ruas de pedra do Pelourinho, no alto do Elevador Lacerda ou nas diversas praias da cidade, a capital da Bahia encanta com seu visual histórico. E durante o Carnaval, não existe lugar no país mais animado do que esta cidade. Veja o nosso pacote de viagem e se divirta como nunca!',
      titulo1: 'Pelourinho e Elevador Lacerda',
      texto1: 'Com belas construções barrocas dos séculos 17 e 18, o Centro Histórico de Salvador, na Cidade Alta, é Patrimônio da Humanidade pela UNESCO. Suas ladeiras contam com restaurantes, lojas e bares atrás das fachadas de casarões coloridos. As festas noturnas agitam o Pelourinho, especialmente na terça-feira, com a festa da Benção do Pelô. Uma maneira de chegar ao bairro é pegando o Elevador Lacerda, que liga a Cidade Baixa ao Centro Histórico.',
      imagem1: '/img/Pontos_Turisticos/cardpelourinho.jpg',
      titulo2: 'Fortes de Santa Maria e São Diogo',
      texto2: 'Localizados na Barra, os fortes de Santa Maria e São Diogo foram revitalizados e hoje abrigam exposições, um café e uma loja de suvenir. Construídos para proteger a cidade, atualmente são museus audiovisuais. O forte Santa Maria homenageia o fotógrafo francês Pierre Verge, e o Forte São Diogo o artista plástico argentino Carybé. O ingresso é único para as duas atrações e as visitas podem ser feitas a pé. A entrada é gratuita às  quartas-feiras.',
      imagem2: '/img/Pontos_Turisticos/cardForteSanta.jpg',
      titulo3: 'Igreja do Bonfim',
      texto3: 'Construída em 1754 para abrigar a imagem do Senhor Bom Jesus trazida de Lisboa em 1745, a igreja tem arquitetura neoclássica com fachada rococó. O santuário é um ícone da fé baiana, atraindo muitos devotos, turistas e peregrinos. As famosas fitinhas são confeccionadas desde o início do século 19 e têm a medida do comprimento do braço direito até o peito da imagem do Senhor do Bonfim.',
      imagem3: '/img/Pontos_Turisticos/cardIgreja.jpg',
      titulo4: 'Morro de São Paulo',
      texto4: 'O povoado de Morro de São Paulo não permite a circulação de carros – apenas tratores, jardineiras e os veículos das pousadas. Conheça a badalada Segunda Praia, frequentada por gente jovem e bonita. A praia conta com barracas com música.',
      imagem4: '/img/Pontos_Turisticos/cardMorroSP.jpg',
      info: '/img/Pontos_Turisticos/InfoSalvador.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/olinda_certa.png',
      key: 'Olinda',
      cards: '/img/Pontos_Turisticos/Olinda.png',
      title: 'Olinda',
      subtitle: 'Brasil',
      capa: '/img/Pontos_Turisticos/capaOlinda.png',
      descricao: 'Vizinha ao Recife, a cidade é conhecida pela animação do frevo e pelos bonecos gigantes do Carnaval. No Centro Histórico estão um conjunto de casarios coloniais, igrejas barrocas dos séculos 16 e 17, museus, ateliês e restaurantes. Outro destaque da cidade é a Basílica de São Bento, com altar de madeira em estilo barroco, totalmente revestido de ouro. Visite ainda o Convento de São Francisco, decorado com azulejos portugueses e pinturas sacras.',
      titulo1: 'Recife Antigo',
      texto1: 'Bares, restaurantes, centros culturais e museus instalados em coloridos edifícios históricos movimentam o bairro que deu origem à cidade de Recife no século 16. Para ver a região do alto, basta visitar o Marco Zero, à beira do Rio Capibaripe, ou subir ao topo da Torre Malakoµ, que data de 1855. Alguns pontos turísticos do bairro do Recife, ou Recife Antigo, são a Sinagoga Kahal Zur Israel, o Forte do Brum, a Embaixada dosBonecos Gigantes e o Paço do Frevo.',
      imagem1: '/img/Pontos_Turisticos/cardRecAntigo.jpg',
      titulo2: 'Sé de Olinda',
      texto2: 'A Igreja da Sé, ou simplesmente Sé de Olinda, é uma das igrejas mais famosas da vizinha do Recife. Seu exterior é imponente e em seu interior poderão ser observados alguns detalhes em ouro e azulejos portugueses, entretanto não se vê a mesma riqueza de detalhes de outras igrejas da região. O ponto forte do lugar é a vista belíssima que se tem da cidade, especialmente se admirada no pôr do sol. Não deixe de conhecer a parte externa da igreja, pois vale a pena!',
      imagem2: '/img/Pontos_Turisticos/cardSeOlinda.jpg',
      titulo3: 'Mosteiro de São Bento',
      texto3: 'A Igreja e Mosteiro de São Bento é uma das mais ricas de Olinda, pois foi construída no auge do barroco e guarda este estilo nas suas paredes de cedro talhado e coberto com ouro, nos painéis do teto, nas colunas e púlpitos detalhados e na sua sacristia imponente. Dentre os destaques está o altar, que possui 14 metros de altura e é totalmente folheado a ouro!',
      imagem3: '/img/Pontos_Turisticos/cardMosteiroSB.jpg',
      titulo4: 'Carnavrau de Olinda',
      texto4: 'O Carnaval de Olinda não é apenas a principal festa típica da cidade, como também do Brasil inteiro. Não é à toa que a festa é considerada o mais conhecido e o mais bonito carnaval de rua do país. Aqui não há luxo. Não tem ninguém em cima do trio elétrico, nem arquibancada no sambódromo – o carnaval de Olinda sequer conta com sambódromo. O povo cai na folia no meio da rua mesmo.',
      imagem4: '/img/Pontos_Turisticos/cardCarnavrauOlinda.jpg',
      info: '/img/Pontos_Turisticos/infoOlinda.png',
  
    },
    {
      carousel: '/img/Pontos_Turisticos/amsterdam_certa.png',
      key: 'Amsterdam',
      cards: '/img/Pontos_Turisticos/Amsterdam.png',
      title: 'Amsterdam',
      subtitle: 'Holanda',
      capa: '/img/Pontos_Turisticos/capaAmsterdam.png',
      descricao: 'Cidade cheia de histórias e opções culturais, Amsterdã é um destino para você se divertir em pubs, bares e festas, além de visitar museus e se deslumbrar pelos canais charmosos que cortam a capital da Holanda. Conheça pontos turísticos famosos, como a Casa de Anne Frank e o Museu Van Gogh. Não deixe de passear de bicicleta, meio de transporte mais utilizado na região, de barco ou mesmo caminhar para ver a arquitetura com estilo medieval. Visite também o Parque das Tulipas, lugar naturalmente colorido por essas flores. Um lugar ótimo também para fazer compras e experimentar pratos deliciosos nos restaurantes.',
      titulo1: 'Casa de Anne Frank',
      texto1: 'Confira de perto a casa em que a Anne Frank viveu, hoje um dos museus mais visitados de Amsterdã. A adolescente ficou conhecida depois da publicação de seu diário, repleto de histórias sobre a luta contra a perseguição nazista, durante a segunda guerra mundial. Por lá você conhecerá a famosa estante de livros que dava acesso ao seu esconderijo, um cômodo secreto em que ela e sua família se refugiaram.',
      imagem1: '/img/Pontos_Turisticos/cardAnne.jpg',
      titulo2: 'Praça Nieuwmarkt',
      texto2: 'A capital da Holanda é cheia de construções medievais. O lugar que tem tudo isso e muito mais é a praça Nieuwmarkt, tombada como patrimônio da humanidade pela UNESCO. Por lá você vai ver bastante edificações bem conservadas, como a De Waag, antiga edificação do século XV que já serviu como portão de Amsterdã. Ao redor vale muito conferir também pontes e canais, erguidos no século XVI.',
      imagem2: '/img/Pontos_Turisticos/cardNieuwmarkt.jpg',
      titulo3: 'Museu Van Gogh',
      texto3: 'Um dos pontos turísticos mais famosos da Holanda, o Museu Van Gogh possui um acervo bastante rico de obras do famoso pintor. O melhor de tudo é que o espaço disponibiliza áudio em português com explicações sobre suas pinturas, além de conhecer mais sobre a vida do artista holandês. No final do passeio não deixe de visitar as lojas de souvenirs e a biblioteca especializada em publicações de arte.',
      imagem3: '/img/Pontos_Turisticos/cardVan.jpg',
      titulo4: 'Ponte Magere Brug',
      texto4: 'Na sua viagem para Amsterdã confira a ponte Magere Brug, que fica muito bonita por conta da iluminação noturna. Para chegar lá pode ser a pé ou mesmo de barco. Depois de conhecê-la, uma dica é ir nos restaurantes para experimentar comidas típicas ou mesmo ir em museus.',
      imagem4: '/img/Pontos_Turisticos/cardMagere.jpg',
      info: '/img/Pontos_Turisticos/InfoAmsterdan.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/paris_certa.png',
      key: 'Paris',
      cards: '/img/Pontos_Turisticos/Paris.png',
      title: 'Paris',
      subtitle: 'França',
      capa: '/img/Pontos_Turisticos/capaParis.png',
      descricao: 'Um dos destinos mais românticos do mundo, Paris atrai muitos turistas por conta de seus museus, gastronomia ímpar, monumentos importantes e por todas as histórias que cercam a capital da França. Entre os cartões-postais mais importantes que você verá estão a Torre Eiffel, o Museu do Louvre, o Arco do Triunfo e a Catedral de Notre-Dame. Aproveite também para ver espetáculos na Ópera Garnier e shows de cabarés no Moulin Rouge, além de experimentar pratos deliciosos em restaurantes consagrados.',
      titulo1: 'Torre Eiffel',
      texto1: 'Maior símbolo de Paris, a Torre Eiffel é um monumento histórico que possui mais de 320 metros de altura e recebe mais de 6 milhões de pessoas ao ano. A obra foi construída em 1889 e projetada pelo engenheiro Gustave Eiffel, daí o nome da construção. Lá você terá 3 andares diferentes para apreciar a vista da capital da França. Aproveite também e jante no conceituado restaurante Jules Verne, localizado no segundo andar.',
      imagem1: '/img/Pontos_Turisticos/cardEiffel.jpg',
      titulo2: 'Palácio de Versalhes',
      texto2: 'Visitar o Palácio de Versalhes é uma das paradas obrigatórias para quem vai viajar para Paris, com uma imponente arquitetura e jardins encantadores. Lá destacam-se os aposentos reais e a Galeria dos Espelhos.',
      imagem2: '/img/Pontos_Turisticos/cardVersalhes.jpg',
      titulo3: 'Arco do Triunfo',
      texto3: 'Um dos monumentos mais imponentes de Paris, o Arco do Triunfo conta com 50 metros de altura e 45 metros de largura. Localizado na famosa avenida Champs-Élisées, logo no alto da construção você terá uma das vistas mais bonitas de Paris. Aproveite e tire altas fotos. Não irá se arrepender!',
      imagem3: '/img/Pontos_Turisticos/cardArcoTriunfo.jpg',
      titulo4: 'Catedral de Notre-Dame',
      texto4: 'A Catedral de Notre-Dame é uma parada obrigatória em Paris e um dos exemplares mais imponentes da arquitetura gótica. A igreja é composta por vitrais, esculturas e gárgulas, além de abrigar fragmentos da coroa de espinhos de Jesus. Ali aconteceram muitos momentos importantes, como a beatificação de Joana D’Arc, ocorrido em 1909.',
      imagem4: '/img/Pontos_Turisticos/cardNotreDame.jpg',
      info: '/img/Pontos_Turisticos/InfoParis.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/porto_certa.png',
      key: 'Porto',
      cards: '/img/Pontos_Turisticos/Porto.png',
      title: 'Porto',
      subtitle: 'Portugal',
      capa: '/img/Pontos_Turisticos/capaPorto.png',
      descricao: 'A cerca de 300 quilômetros de distância de Lisboa, ao Norte de Portugal, está o Porto, a segunda maior cidade e também uma das mais antigas do país. Situada à margem direita do Rio Douro, o destino encanta à primeira vista pela mistura do concreto das construções antigas com paisagens naturais de tirar o fôlego, pela história, gastronomia de primeira, atrações para todos os públicos e também pela receptividade com o turista.',
      titulo1: 'Ponte Dom Luís I',
      texto1: 'Datada de 1886, a icônica ponte de ferro é, sem dúvida alguma, um dos símbolos do Porto. A belíssima estrutura foi finalizada por um estudante de Gustave Eiffel - que criou a Torre Eiffel de Paris - e liga a cidade à Vila Nova de Gaia, o município vizinho, onde ficam as famosas caves do Vinho do Porto. Enquanto a parte de cima da ponte é reservada para o metrô - e também para pedestres, de onde se tem vistas muito bonitas do Rio Douro -, a parte de baixo é exclusiva para o trânsito de carros, entretanto, também tem uma passagem, bem mais estreita, para aqueles que estão a pé. Aproveite para explorar as duas passagens, você não irá se arrepender! As paisagens são de tirar o fôlego!',
      imagem1: '/img/Pontos_Turisticos/cardPonteLuis.jpg',
      titulo2: 'Sé Catedral do Porto',
      texto2: 'Eis aqui um dos pontos imperdíveis da cidade do Porto: a bela catedral em estilo românico, erguida no século XII. O edifício se apresenta com uma rosácea na fachada, além de duas torres laterais com cúpulas, que dão ao local uma aparência de fortaleza. No interior estão três naves - sendo a do meio a mais alta delas - onde o visitante verá de perto capelas como a do Santíssimo Sacramento, com altar em prata e retábulo-mor em talha de ouro, uma verdadeira preciosidade. Mas também não pode deixar de conhecer o claustro gótico e o tesouro-museu, onde está exposta uma série de objetos de ourivesaria.',
      imagem2: '/img/Pontos_Turisticos/cardSePorto.jpg',
      titulo3: 'Praça da Liberdade',
      texto3: 'À primeira vista, chama a atenção do visitante o amplo espaço da praça e também a bela estátua do rei de Portugal e imperador do Brasil, Dom Pedro IV, bem no centro. A escultura foi inaugurada em 1866 e é de autoria do francês Anatole Calmels. Depois de admirar a estátua, dirija-se até a parte sul do local, onde está o edifício das Cardosas, erguido no final do século XVIII. Já a oeste, você vai ver o suntuoso prédio do Banco de Portugal, todo em estilo neoclássico. Um verdadeiro deslumbre!',
      imagem3: '/img/Pontos_Turisticos/cardPracaLiberdade.jpg',
      titulo4: 'Porto Maravilha',
      texto4: 'Bem próximo à Estação de Trens São Bento - na Praça da Batalha - está o prédio que abriga uma das casas de espetáculos mais importantes do Porto. Uma bela construção do arquiteto Marques da Silva, que substituiu o edifício antigo, destruído por um incêndio em 1908. Para os que amam arquitetura e teatro, a dica é a visita guiada pelas dependências internas, que acontece às terças e sábados ao meio dia.',
      imagem4: '/img/Pontos_Turisticos/cardTeatroPorto.jpg',
      info: '/img/Pontos_Turisticos/infoPorto.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/ny.png',
      key: 'NovaYork',
      cards: '/img/Pontos_Turisticos/NovaYork.png',
      title: 'Nova York',
      subtitle: 'Estados Unidos',
      capa: '/img/Pontos_Turisticos/capaNY.png',
      descricao: 'Seja bem-vindo à Nova York! Uma das cidades mais famosas do mundo, a Big Apple é uma gigante. São 8,5 milhões de habitantes, mais de 400 estações de metrô, milhares de restaurantes, hotéis, teatros, museus e parques. Para todos que procuram por diversão, compras e cultural, esse é o destino ideal! Dividida em cinco regiões: Bronx, Queens, Brooklyn, StatenIsland e Manhattan – a famosa ilha e parte mais rica da cidade - Nova York possui alguns dos pontos turísticos mais conhecidos dos Estados Unidos, como a Estátua da Liberdade, o Central Park e a Times Square. Embarque nessa aventura com a CP& TRAVEL e viva momentos inesquecíveis!',
      titulo1: 'Estátua da Liberdade',
      texto1: 'Presente da França aos norte-americanos, o monumento de 93m de altura fica na Ellis Island. Para visitá-la, é preciso pegar uma balsa no Battery Park. A estátua é um símbolo de liberdade e da imigração aos EUA que buscavam uma vida melhor.',
      imagem1: '/img/Pontos_Turisticos/cardLiberdade.jpg',
      titulo2: 'Empire State Building',
      texto2: 'Inaugurado em 1929, esse enorme edifício exibe uma bela vista da cidade desde o seu observatório. Por muitos anos foi o edifício mais alto do mundo e ficou famoso por ser cenário do filme “King Kong”.',
      imagem2: '/img/Pontos_Turisticos/cardEmpState.jpg',
      titulo3: 'Central Park',
      texto3: 'O parque mais famoso de Nova York está sempre repleto de turistas e nova-iorquinos. No verão, abriga concertos e sessões de cinema ao ar livre. O parque tem playgrounds, prédios históricos e monumentos, como o Strawberry Fields, mosaico em homenagem a John Lennon.',
      imagem3: '/img/Pontos_Turisticos/cardCentralPark.jpg',
      titulo4: 'Rockefeller Center',
      texto4: 'O edifício art déco abriga várias lojas, jardins, as estátuas de Prometeu e Atlas, além do mirante Top of The Rock, no alto do prédio. No inverno, as sensações do local são uma pista de patinação no gelo e a famosa árvore de Natal.',
      imagem4: '/img/Pontos_Turisticos/cardRockefeller.jpg',
      info: '/img/Pontos_Turisticos/InfoNY.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/phiphi.png',
      key: 'IPhiPhi',
      cards: '/img/Pontos_Turisticos/Tailandia.png',
      title: 'Ilhas Phi Phi',
      subtitle: 'Tailândia',
      capa: '/img/Pontos_Turisticos/capaPHIPHI.png',
      descricao: 'Águas em um tom de azul-turquesa que só vendo de perto para acreditar, vida marinha em abundância, areias brancas, penhascos de calcário e muito verde ao redor completam o cenário paradisíaco de Phi Phi (pronuncia-se Pi Pi), a famosa ilha do sul da Tailândia, que serviu de cenário para o filme "A Praia", com o ator Leonardo DiCaprio.',
      titulo1: 'Haad Yao',
      texto1: 'Long Beach, ou Had Yao, é uma praia simplesmente paradisíaca: mar calmo, de cor impressionante, excelente para o nado e para a prática do snorkeling, por conta dos recifes de corais; para completar o cenário, areia branca e uma atmosfera de muito relaxamento, nesse paraíso que pode ser acessado a pé (uns 20 minutos de caminhada) ou de barco, partindo do porto de Phi Phi Don.',
      imagem1: '/img/Pontos_Turisticos/cardHaadYao.jpg',
      titulo2: 'Maya Bay',
      texto2: 'À medida que o barco vai se aproximando da Baía de Maya, em Phi Phi Leh, um cenário estonteante vai surgindo diante dos olhos e deixando o visitante boquiaberto: mar em tons de azul impressionantes, entre falésias de calcário de 100 metros de altura e uma bela natureza ao redor - a verdadeira visão do paraíso.',
      imagem2: '/img/Pontos_Turisticos/cardMayaBay.jpg',
      titulo3: 'Loh Moo Dee Beach',
      texto3: 'A praia supercalma, ao sul de Phi Phi Don, é excelente para quem busca áreas menos badaladas, ideal para o nado e também para a prática do snorkeling. No local há certa estrutura, com uma ou duas barracas que vendem bebidas, porém, a recepção não costuma ser das melhores, principalmente para visitantes israelitas, devido à placa “No Israelis” (não aceitamos israelitas, em tradução livre), logo na entrada. ',
      imagem3: '/img/Pontos_Turisticos/cardLohMooDeeBeach.jpg',
      titulo4: 'Tonsai Beach',
      texto4: 'Tonsai Beach é a primeira visão do turista que chega em Phi Phi Don, de barco. Águas claras - cercadas por rochas - e uma grande quantidade de barcos chamam a atenção no local que, ao abrigar um píer de mesmo nome, não é dos mais apropriados para banho.Na alta temporada, as ruas da vila de Tonsai, destinadas para pedestres, unicamente, ficam lotadas de turistas tanto durante o dia quanto à noite. A área é uma das mais vibrantes da ilha e lá estão vários hotéis, restaurantes, casas de sucos e lanches rápidos, lojinhas e minifeiras que vendem de tudo um pouco: roupas, acessórios para mergulho, suvenires, entre outros.',
      imagem4: '/img/Pontos_Turisticos/cardTonsaiBeach.jpg',
      info: '/img/Pontos_Turisticos/infoPHIPHI.png',
    },
    {
      carousel: '/img/Pontos_Turisticos/mlake.png',
      key: 'MLake',
      cards: '/img/Pontos_Turisticos/Banff.png',
      title: 'Moraine Lake',
      subtitle: 'Canadá',
      capa: '/img/Pontos_Turisticos/capaMLake.png',
      descricao: 'Moraine Lake, ou o Lago Moraine, é um dos diversos lagos situados no Parque Nacional de Banff e um dos mais bonitos da região. Sua água azul turquesa e cristalina é quase inacreditável nos primeiros segundos em que nossos olhos miram o lago, mas basta algum tempo admirando seu visual para se convencer de que o lago é realmente daquele jeito e entender o porquê de esse ser um dos lugares mais incríveis das montanhas rochosas. Seu vizinho, Lake Louise, é quem ganha a maior parte da fama, mas se você for a Lake Louise, é imperdível estender a visita e incluir no roteiro uma parada, ainda que rápida, ao Moraine Lake.',
      titulo1: 'Banff Gondola',
      texto1: 'Inaugurada em 1981, a Banff Gondola é um teleférico fechado que vai ao alto da Sulphur Mountain, uma montanha em Banff a 2.281 metros. A subida ao alto da montanha leva em torno de 8 minutos e ascende 698 metros. O lugar tem uma vista incrível e é uma excelente oportunidade para ter um visual panorâmico das Montanhas Rochosas Canadenses. O passeio já tira suspiros dos visitantes antes mesmo de chegar ao seu ponto final, pois conforme o teleférico vai subindo, a vista de Banff e das montanhas ao seu redor fica cada vez mais impressionante. ',
      imagem1: '/img/Pontos_Turisticos/cardGondola.jpg',
      titulo2: 'Columbia Icefield',
      texto2: 'Columbia Icefield é um campo de gelo de grandes proporções que está localizado no Parque Nacional de Jasper. Esse é um dos pontos de maior sucesso na região das Montanhas Rochosas por causa da enorme concentração de gelo que pode ser vista das geleiras do campo de gelo, entre elas as geleiras Castleguard, Columbia, Domee e Stutfield e Athabasca. ',
      imagem2: '/img/Pontos_Turisticos/cardColumbiaIcefield.jpg',
      titulo3: 'Passeios de bicicleta',
      texto3: 'Que tal conhecer Banff sobre duas rodas? A cidade é ótima para praticar atividades ao ar livre, principalmente durante o verão, quando o tempo é mais agradável e não há neve nas estradas (algo frequente durante o inverno). No Canadá, as atividades em bicicleta são bastante difundidas, então é natural que além da bicicleta ser um veículo frequente de transporte, seja também uma atividade procurada para momentos de lazer. É comum ver pessoas fazendo trilhas de bike no Parque Nacional de Banff, cruzando rodovias ou indo a algum ponto turístico pedalando. ',
      imagem3: '/img/Pontos_Turisticos/cardBikeBanff.jpg',
      titulo4: 'Passeios de Canoa e Caiaque',
      texto4: 'Os lagos das Montanhas Rochosas quando descongelados oferecem uma oportunidade perfeita para fazer um passeio de caiaque ou canoa. O cenário das canoas coloridas atravessando os lagos cristalinos e calmos com montanhas e árvores ao redor é um dos cartões-postais mais emblemáticos da região e um clique imperdível a qualquer um que tenha um smartphone na mão.',
      imagem4: '/img/Pontos_Turisticos/cardCanoaBanff.jpg',
      info: '/img/Pontos_Turisticos/infoMlake.png',
    },
  ];

  const [show, setShow] = useState('hidden');

  const getPrevArrowIcon = () => (
    <div className="divPrevArrow">
      <IoIosArrowBack
        style={{ visibility: show }}
        className="arrowsCarousel"
      />
    </div>
  );
  const getNextArrowIcon = () => (
    <div className="divNextArrow">
      <IoIosArrowForward
        style={{ visibility: show }}
        className="arrowsCarousel"
      />
    </div>
  );
  return (
    <Carousel
      indicators={false}
      nextIcon={getNextArrowIcon()}
      prevIcon={getPrevArrowIcon()}
      onMouseOver={() => (setShow('visible'))}
      onMouseOut={() => (setShow('hidden'))}
      className="boxCarousel"
    >
      {
        initialImages.map((fotos) => (
          <Carousel.Item
            key={fotos.key}
            interval={3000}
          >
            <div className="imageCarousel" style={{ backgroundImage: `url(${fotos.carousel})` }} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default SliderCarousel;
