// import AntDesign from '@expo/vector-icons/AntDesign';
// import { Picker } from "@react-native-picker/picker";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { PixelRatio, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from "react-native";
// import letra from '@/assets/letra.json'; letra no json

const escala = PixelRatio.getFontScale();

const body = () => {

    const scheme = useColorScheme(); // "light" ou "dark"
    const isDarkMode = scheme === 'dark';

    const [letra, setLetra] = useState([
        {
            id: 1,
            tb: 544,
            selecionado: true,
            estrofe1: 'Senhor, meu Deus, quando eu maravilhado \nParo a pensar no Teu grandioso ser,\nContemplo o céu, de estrelas pontilhado,\nA declarar ao mundo Teu poder...',
            estrofe2: 'Quando lampeja e ruge a tempestade E faz tremer a terra e o mar,\n A nuvem solta a chuva refrescante\n E o arco-íris vem-me alegrar...',
            estrofe3: ' Ao percorrer as matas e florestas,\n Eu vejo as aves e ouço seu cantar,\n Montes e rios eis também em festa,\n Por tudo isso quero a Deus louvar...',
            estrofe4: 'Quando percebo que na cruz maldita, Por Teu amor, Jesus morreu por mim,\nE me livrou do jugo do pecado\nAli vertendo o sangue carmesim...',
            estrofe5: 'E quando, enfim, for tudo esclarecido,\nO que a minha fé antecipou,\nE ao ouvir celestes harmonias\nEu louvarei melhor Quem me salvou.',
            som: '',
            coro: 'Então minha alma canta a Ti, Senhor,\n Quão grande és Tu, quão grande és Tu!  ) bis'
        },
        {
            id: 2,
            tb: 25,
            selecionado: true,
            estrofe1: 'Se há ternura neste mundo E os homens tentam perdoar, Se amor existe em muita gente Que pode compaixão mostrar...',
            estrofe2: 'Se muitos vivem para outros E dão de si a seus irmãos, Se há momentos tão sublimes Em que inimigos dão as mãos...',
            estrofe3: 'Se alegrias e tristezas Sabemos nós compartilhar, Se mesmo falhos como somos Tentamos certo amor mostrar...',
            som: '',
            coro: 'Oh! Quanto mais o Pai celeste,\nNo Seu amor, quer perdoar!\nOh! Quanto mais o Pai celeste\nSustento e bênção pode dar!'
        },
        {
            id: 3,
            tb: 562,
            selecionado: true,
            estrofe1: 'Meu Pai é Juiz e Governador, Dos reinos do mundo é supremo Senhor. Seu magno império, mais vasto que o mar; Sou filho de um Rei, Seu poder é sem par.',
            estrofe2: 'Meu Pai é monarca e dono real De lindos palácios de ouro e cristal. De jóias, bem cheios Seus cofres estão; Há tesouros imensos em Sua mansão.',
            estrofe3: 'Meu lar neste mundo por certo não é, Sou filho de um Rei, vivo aqui pela fé. Vestidos, coroa e um nome terei; Herança de glória na casa do Rei.',
            som: '',
            coro: 'Eu sou filho de um Rei, (bis)\nHerdeiro com Cristo;\nSim, sou filho de um Rei!'
        },
        {
            id: 4,
            tb: 717,
            selecionado: true,
            estrofe1: 'Ao Deus de Abraão louvai, Do vasto céu Senhor, Eterno e poderoso Pai E Deus de amor. Augusto Deus Jeová, Que terra e céu criou! Minha alma o nome exaltará Do grande Eu Sou.',
            estrofe2: 'Ao Deus de Abraão louvai.Eis, por mandado Seu, Minha alma deixa a terra e vai Gozar o céu. O mundo desprezei, Seu lucro e seu louvor. A Deus por meu quinhão tomei E protetor.',
            estrofe3: 'Meu guia Deus será; Seu infinito amor Feliz em tudo me fará Por onde eu for. Tomou-me pela mão, Nas trevas deu-me luz E dá-me a eterna salvação Por meu Jesus.',
            estrofe4: 'Meu Deus por Si jurou, E nele confiei E para o céu, que preparou, Eu subirei. Sua face eu hei de ver, Confiado em Seu amor, E para sempre engrandecer Meu Redentor!',
            som: '',
            coro: ''
        },
        {
            id: 5,
            tb: 422,
            selecionado: true,
            estrofe1: "Aleluia! entoam vozes Que jamais irão calar. Aleluia! jubilosos, Cantam anjos sem cessar, Ao Senhor sempre adorando Ante o glorioso altar.",
            estrofe2: "Aleluia! Já liberta, Vibra tu, Jerusalém! Aleluia! Já teus filhos Exilados, muito além, Nos desvios deste mundo, Ao Teu seio alegres vêm.",
            estrofe3: "Aleluia! Nós ousamos Entoar a Deus louvor. Ele aceita e perdoa O contrito pecador. Humilhados, penitentes, Nos voltemos ao Senhor.",
            estrofe4: "Suplicamos, nos concedas, Ó Trindade divinal, Termos comunhão perfeita Na mansão celestial. E cantemos, veramente, Aleluias, afinal!",
            som: "",
            coro: ''
        },
        {
            id: 6,
            tb: 766,
            selecionado: true,
            estrofe1: "Formosos são os pés de quem proclama a paz, Gloriosa paz dos céus, Que faz ouvir a salvação de ti Sião: Reina Deus! Reina Deus!",
            estrofe2: "Sem formosura nem beleza no sofrer, Varão de dor: Jesus, Foi desprezado e rejeitado, sim, por nós: Reina Deus! Reina Deus!",
            estrofe3: "Moído por nossas muitas transgressões, E nossa dor levou; Os desgarrados nos Seus ombros carregou: Reina Deus! Reina Deus!",
            estrofe4: "Como cordeiro ao matadouro foi Jesus, Sem murmurar, morreu; No chão caiu Seu sangue, fonte carmesim: Reina Deus! Reina Deus!",
            estrofe5: "Da sepultura ressurgiu com grande poder, E vivo está, por nós! O amor de Deus, ao mundo, Cristo demonstrou: Reina Deus! Reina Deus!",
            som: "",
            coro: "Reina Deus! (4x)"
        },

        {
            id: 7,
            tb: 269,
            selecionado: true,
            estrofe1: "A terra semeamos\nA fim de nos dar pão,\nMas Deus é quem a nutre\nCom benfazeja mão.\nEle é quem manda o frio,\nA calma no verão,\nA chuva e o doce orvalho,\nE a fresca viração.\nO Senhor é Fonte\nDe todo o nosso bem.\nLouvai a Deus, (2x)\nPor todo o Seu amor!",
            estrofe2: "O Criador de tudo,\nQue perto ou longe está,\nColora a flor silvestre\nE à estrela o brilho dá.\nOs ventos Lhe obedecem\nE o bravo mar também,\nAs frágeis avezinhas\nO Seu cuidado têm.",
            estrofe3: "A nós, porém, Seus filhos,\nRevela mais amor,\nMandando-nos à terra\nJesus, o Salvador.\nDotando-nos em Cristo\nDe tudo quanto tem,\nFazendo-nos herdeiros\nDe Deus, o Sumo Bem.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 8,
            tb: 752,
            selecionado: true,
            estrofe1: "A Deus cantamos nós,\nSão tantos Seus favores.\nCom voz de gratidão\nErgamos os louvores,\nPois, desde nossos pais,\nSeu braço nos cercou,\nE, pelo Seu amor,\nDe dons nos cumulou.",
            estrofe2: "Que tão bondoso Deus\nDe nós esteja perto,\nNos dando o Seu amor\nEm meio ao mundo incerto.\nGuiando os nossos pés,\nNos guarde em Sua paz\nE afaste todo o mal\nCom Seu poder veraz.\nLouvemos sempre a Deus,\nAo Pai e ao Filho amado\nE Aquele que é, também,\nCom Eles adorado.\nEterno e Trino Deus,\nTe rendem gratidão\nOs santos e anjos Teus\nE toda a criação!",
            estrofe3: "",
            estrofe4: "",
            som: ""
        },
        {
            id: 9,
            tb: 42,
            selecionado: true,
            estrofe1: "Povos que em toda a terra estão,\nA Deus bendigam com prazer!\nPois, como os anjos glória dão,\nAssim devemos nós fazer.",
            estrofe2: "Eis-nos na casa do Senhor,\nSeu nome augusto a celebrar.\nOvelhas somos do Pastor,\nA quem viemos adorar.",
            estrofe3: "O mundo inteiro O louvará,\nPois é bondoso o Criador!\nO Seu amor sem fim será;\nÉ sempre o mesmo, o Benfeitor!",
            estrofe4: "Servos sejamos de Jesus\nE bem guardemos Sua lei;\nLevemos sempre a nossa cruz,\nSeguindo a Cristo, o santo Rei.",
            som: ""
        },
        {
            id: 10,
            tb: 127,
            selecionado: true,
            estrofe1: "Ó Deus, eterno ajudador,\nConheces o porvir.\nNo temporal és protetor\nE abrigo a nos servir.",
            estrofe2: "Teu nome é sempre amparador,\nGuarida aos santos Teus.\nTeu braço é forte, acolhedor,\nDefesa certa, ó Deus!",
            estrofe3: "Estava o mundo em formação\nE os montes a fundir.\nReinavas já, ó Deus, então,\nNos tempos do porvir.",
            estrofe4: "Mil anos são aos olhos Teus\nQual luz crepuscular.\nMais breves são que a aurora, ó Deus,\nQue foge ao sol raiar.",
            estrofe5: "Ó Deus, eterno ajudador,\nSenhor do que há de vir,\nSê nosso abrigo e protetor\nAgora e no porvir.",
            som: ""
        },
        {
            id: 11,
            tb: 45,
            selecionado: true,
            estrofe1: "Vós, criaturas de Deus Pai,\nTodos, erguei a voz, cantai:\nAleluia! Aleluia!\nTu, sol dourado a refulgir,\nTu, lua em prata a reluzir,\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            estrofe2: "Tu, brisa amena a bafejar,\nVós, nuvens que pairais no ar,\nOh! louvai-O! Aleluia!\nTu, linda aurora em teu alvor,\nTu, suave ocaso multicor,\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            estrofe3: "Vós, homens sábios e de bem,\nA todos proclamai também:\nAleluia! Aleluia!\nAo Filho glória, glória ao Pai,\nE a Deus Espírito honra dai.\nOh! louvai-O! Oh! louvai-O!\nAleluia! Aleluia! Aleluia!",
            estrofe4: "",
            som: ""
        },
        {
            id: 12,
            tb: 548,
            selecionado: true,
            estrofe1: "Ó Rei sublime, em majestade e glória,\nSobre as milícias do celeste além!\nOuve o louvor, os hinos de vitória,\nDos que de Ti recebem todo o bem!",
            estrofe2: "Nos altos céus, augustos anjos cantam\nLouvor eterno ao soberano Amor,\nE em coro os salvos com fervor exaltam\nO nome ilustre do seu Benfeitor.",
            estrofe3: "Eterno Deus, Teus filhos vês prostrados\nAnte o fulgor da resplendente Luz,\nPois do pecado foram resgatados\nE agora rendem glórias a Jesus!",
            estrofe4: "",
            coro: "Vinde, ó remidos, filhos de Deus,\nGlória rendamos, que chegue até os céus!",
            som: ""
        },
        {
            id: 13,
            tb: 435,
            selecionado: true,
            estrofe1: "Admirável, neste mundo,\nÉ Teu nome, bom Senhor!\nElevaste Tua glória\nSobre os céus, ó Criador!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe2: "Lá no céu luzentes vejo\nLindas obras do Senhor;\nMultidões de estrelas brilham\nEm celeste resplendor.\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe3: "Tão pequenos são os homens!\nDeles Cristo Se lembrou\nE, na sua semelhança,\nLá da glória Se humilhou.\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe4: "Bem menor que Deus tornado,\nEle, o grande Redentor,\nQuis por nós provar a morte,\nMaravilha de favor!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            estrofe5: "Mas, agora, junto ao trono,\nReina em soberana luz\nE é de glória coroado\nNosso Salvador Jesus!\nAleluia, aleluia, ) bis\nGlória a Deus por Seu amor! )",
            som: ""
        },
        {
            id: 14,
            tb: 657,
            selecionado: true,
            estrofe1: "Tu és fiel, Senhor, meu Pai celeste;\nPleno poder aos Teus filhos darás;\nNunca mudaste, Tu nunca faltaste,\nTal como eras Tu sempre serás.",
            estrofe2: "Tu és fiel, Senhor! (bis)\nDia após dia com bênçãos sem fim,\nTua mercê me sustenta e guarda,\nTu és fiel, Senhor, fiel a mim!",
            estrofe3: "Flores e frutos, montanhas e mares,\nSol, lua, estrelas no céu a brilhar;\nTudo criaste na terra e nos ares.\nTodo o universo vem, pois, Te louvar.",
            estrofe4: "Pleno perdão Tu dás, paz, segurança;\nCada momento me guias, Senhor.\nE no porvir, oh! que doce esperança:\nDesfrutarei do Teu rico favor.",
            som: ""
        },
        {
            id: 15,
            tb: 27,
            selecionado: true,
            estrofe1: "Ao Deus de amor e de imensa bondade,\nCom voz de júbilo vinde e aclamai;\nCom coração transbordante de graça,\nSeu grande amor, todos, vinde e louvai.",
            estrofe2: "No céu, na terra, que maravilhas\nEstá operando o poder do Senhor!\nMas Seu amor aos homens perdidos,\nDas maravilhas, é sempre a maior!",
            estrofe3: "Já nossos pais nos contaram a glória\nDe Deus, falando com muito prazer,\nQue nas tristezas, nos grandes perigos,\nEle os salvou por Seu grande poder.",
            estrofe4: "Hoje também nós bem alto cantamos\nQue as orações Ele nos atendeu;\nSeu forte braço, que é tão compassivo,\nEm nosso auxílio Ele sempre estendeu.",
            estrofe5: "Como até hoje e daqui para sempre,\nEle será nosso eterno poder,\nNosso castelo bem forte e seguro\nE nossa fonte de excelso prazer.",
            som: ""
        },
        {
            id: 16,
            tb: 748,
            selecionado: true,
            estrofe1: "Santo! Santo! Santo! Deus onipotente!\nDesde o amanhecer nós cantamos com ardor.\nSanto! Santo! Santo! Bom e verdadeiro!\nÉs Deus triúno, excelso Criador!",
            estrofe2: "Santo! Santo! Santo! Todos os remidos,\nJuntos com os anjos, proclamam Teu louvor.\nAntes de formar-se o firmamento e a terra,\nEras, e sempre és, e hás de ser, Senhor.",
            estrofe3: "Santo! Santo! Santo! Nós, os pecadores,\nNão podemos ver Tua glória sem tremor.\nTu somente és santo; só Tu és perfeito,\nDeus soberano, imenso em Teu amor!",
            estrofe4: "Santo! Santo! Santo! Deus onipotente!\nTuas obras louvam Teu nome com fervor.\nSanto! Santo! Santo! Justo e compassivo!\nÉs Deus triúno, excelso Criador!",
            som: ""
        },
        {
            id: 17,
            tb: 43,
            selecionado: true,
            estrofe1: "No santo dia do Senhor\nÉ bom, com salmos de louvor,\nO grande, eterno Deus honrar\nE Sua graça proclamar.",
            estrofe2: "Bem de manhã me alegrarei\nPor muitas bênçãos que provei;\nE, vindo a noite, o coração\nTransbordará de gratidão.",
            estrofe3: "A Ti, minha alma se erguerá\nE jubilosa cantará,\nEm doces hinos, o louvor,\nDo meu benigno Salvador.",
            estrofe4: "Que sábias Tuas obras são\nE dignas de contemplação!\nOs Teus conselhos, ó Jesus,\nRefletem pura e clara luz!",
            estrofe5: "O justo fazes florescer\nE, qual palmeira, engrandecer;\nPorém os ímpios falharão\nE, como as ervas, secarão.",
            estrofe6: "Tu, Deus excelso, nos darás\nA vida plena e santa paz;\nE cantaremos com ardor:\n―És grande, justo e bom, Senhor!",
            som: ""
        },
        {
            id: 18,
            tb: 435,
            selecionado: true,
            estrofe1: "Deus eterno, Te adoramos,\nDeus da glória, Deus do amor.\nNossos corações Te damos\nGratos pelo Teu favor.\nVem, extirpa o vil pecado,\nAfugenta a tentação.\nDoador do bem sagrado,\nDá-nos Tua salvação.",
            estrofe2: "Tuas obras anunciam\nTeu imenso resplendor.\nCéus, estrelas, terra e anjos\nCantam hino ao Teu louvor.\nVales, montes e campinas,\nLindos prados, verde mar,\nAves, fontes cristalinas\nVêm conosco Te adorar.",
            estrofe3: "És perdão e dom eterno,\nSempre pronto a abençoar,\nFonte do prazer superno\nOnde vamos descansar.\nCristo és Tu, e o Pai, bendito,\nSomos Teus em Teu amor.\nTorna Teu rebanho unido,\nGuia-nos, ó bom Pastor.",
            estrofe4: "Ó mortais, cantai o hino\nQue o universo quer cantar,\nPois do Pai o amor divino\nFaz-nos mais e mais amar.\nJubilantes, esperemos\nA derrota sobre o mal;\nVinde, alegres exaltemos\nA vitória triunfal.",
            som: ""
        },
        {
            id: 19,
            tb: 333,
            selecionado: true,
            estrofe1: "Juntos cantemos em louvor: Deus é bom!\nCom alegria e fervor — Deus é bom!\nAlmas despertem do pecar,\nMudem o pranto por cantar,\nCristo Jesus nos quer salvar — Deus é bom!",
            estrofe2: "Deus é bom! Deus é bom!\nJuntos cantemos sem cessar: Deus é bom!\nGozo inefável dá Jesus — Deus é bom!\nEle concede santa luz — Deus é bom!\nÉ nosso escudo e protetor,\nSempre ajuda com amor,\nFiel companheiro e bom Pastor — Deus é bom!",
            estrofe3: "Ide ao mundo proclamar: Deus é bom!\nEle liberta do pecar — Deus é bom!\nVitorioso sobre o mal,\nDá-nos poder pentecostal,\nVida eterna celestial — Deus é bom!",
            som: ""
        },
        {
            id: 20,
            tb: 721,
            selecionado: true,
            estrofe1: "Alma, bendize ao Senhor, Rei potente de glória;\nDe Suas bênçãos está viva em ti a memória.\nOh! despertai,\nHarpa e saltério, entoai\nHinos de graça e vitória.",
            estrofe2: "Alma, bendize ao Senhor que o universo governa,\nQue em Suas asas te leva, qual águia mui terna.\nEle te ouviu\nNo que melhor te serviu;\nGuarda-te com mão paterna.",
            estrofe3: "Louva ao Senhor, que teus feitos prospera e defende;\nCom Seu amor e bondade Ele sempre te atende!\nPensa outra vez\nEm tudo o que Ele te fez\nCom Seu amor que transcende!",
            estrofe4: "Alma, por ti seja Deus, o Senhor, adorado.\nTudo o que vive bendiga o Seu nome sagrado.\nDeus, minha luz\n— Todo o meu ser o traduz —\nSê para sempre exaltado!",
            som: ""
        },
        {
            id: 21,
            tb: 205,
            selecionado: true,
            estrofe1: "Forte Deus, Conselheiro Maravilhoso,\nPai da Eternidade, Príncipe da Paz;\nUm menino nos nasceu, um Filho se nos deu;\nE o povo em densas trevas viu grande luz!",
            estrofe2: "Vero Deus é Jesus, Verbo encarnado;\nGlorioso Salvador que ressuscitou!\nPois Deus ao mundo amou, Seu Filho enviou\nE dissipou as trevas. Que grande luz!",
            estrofe3: "Rei dos reis, o Senhor alto e sublime;\nSeja exaltado o nome de Jesus!\nAo mundo voltará e sempre reinará,\nNão haverá mais trevas, só grande luz!",
            estrofe4: "",
            som: ""
        },
        {
            id: 22,
            tb: 161,
            selecionado: true,
            estrofe1: "Não sei por que o amor foi revelado\nDe um Ser a Quem os anjos culto dão;\nPor que, qual Bom Pastor, quis procurar-nos\nA fim de nos livrar da perdição.\nMas isto eu sei: nasceu qual criancinha,\nNa pobre manjedoura de Belém;\nComo homem puro e nobre andou na terra,\nO Salvador que rejeitaram com desdém.",
            estrofe2: "Não sei avaliar o preço amargo\nDa paz perene que Ele nos deixou,\nNem compreendo como, quebrantado,\nNa rude cruz, Seu coração ficou.\nMais isto eu sei: que alenta as almas tristes\nE purifica o mais vil pecador:\nAo sobrecarregado traz alívio,\nPois sempre permanece o mesmo Salvador.\nNão sei se os povos hão de recebê-lO,\nOu quando regerá seus corações,\nComo há de preencher perfeitamente,\nDe sábio e simples, as aspirações.\nMas isto eu sei: verão a Sua glória;\nDo sofrimento o fruto há de brotar,\nE, em dia alegre, a luz do céu radiante\nO Salvador trará quando Ele aqui voltar.",
            estrofe3: "Não sei prever o que nós sentiremos,\nMaravilhados ante o resplendor\nDAquele cujo mando traz bonança,\nE cuja voz inspira tanto amor.\nMas isto eu sei: que em jubiloso canto\nOs céus e a terra juntos louvarão;\nAo contemplar a majestade e glória\nDo Salvador real a Quem adorarão.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 23,
            tb: 367,
            selecionado: true,
            estrofe1: "Redentor Onipotente,\nPoderoso Salvador,\nAdvogado Onisciente\nÉ Jesus, meu bom Senhor.\nUm abrigo sempre perto\nPara todo o pecador,\nUm amigo inseparável\nÉ Jesus, meu Salvador!",
            estrofe2: "Água viva, Pão da vida,\nDoce sombra no calor,\nQue ao descanso nos convida,\nÉ Jesus, meu Salvador!\nSol que extingue densas trevas\nRefulgindo em plena luz,\nNoite eterna dissipando,\nÉ meu bom Senhor, Jesus.",
            estrofe3: "Fundamento inabalável,\nEm que posso confiar,\nInfalível, imutável,\nRocha firme e secular!\nPorta aberta, sempre aberta,\nConduzindo à salvação,\nRica fonte donde emana\nGozo, paz, consolação!",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 24,
            tb: 265,
            selecionado: true,
            estrofe1: "Conta-me a antiga história\nDo grande Salvador,\nDe Cristo e Sua vida,\nDe Cristo e Seu amor.\nFala bem claramente,\nPois quero alcançar\nA altura do mistério:\nQue Deus me pode amar.",
            estrofe2: "Conta-me a antiga história,\nQue fala ao coração,\nDe Cristo e Sua glória,\nDe Cristo e Seu perdão!",
            estrofe3: "Fala-me com doçura\nDo amado Redentor,\nA mim, que tanto sofro\nPor ser um pecador.\nSe queres consolar-me\nEm tempo de aflição,\nOh! conta a bela história\nQue alegra o coração!",
            estrofe4: "Se o brilho deste mundo\nToldar do outro a luz,\nOh! narra com ternura\nA história de Jesus!\nE, quando, enfim, a aurora\nDo mundo além raiar,\nRecorda a antiga história:\nQue Deus nos quis salvar!",
            som: "",
            coro: ""
        },
        {
            id: 25,
            tb: 216,
            selecionado: true,
            estrofe1: "Eu folgo em repeti-la,\nA história de Jesus,\nQue da suprema glória\nBaixou à amarga cruz!\nSim, folgo em divulgá-la,\nPois ela satisfaz\nO anelo da minha alma\nE tudo o que me apraz.",
            estrofe2: "Eu folgo em repeti-la,\nPois tal foi Seu amor\nQue, por Seus inimigos,\nMorreu o Salvador!\nJesus, o Cristo, ainda\nCom terna compaixão,\nProcura os pecadores\nE dá-lhes Seu perdão.",
            estrofe3: "Eu folgo em repeti-la,\nPois há quem nunca ouviu\nDa salvação de Cristo\nNem Seu amor sentiu!\nE, quando os meus louvores\nNa glória eu entoar,\nDe Deus, o amor eterno,\nEu hei de celebrar!",
            estrofe4: "",
            som: "",
            coro: "Oh! Doce e bela história\nDe Cristo, o Salvador!\nDe Sua eterna glória,\nDe Seu imenso amor!",
        },
        {
            id: 26,
            tb: 618,
            selecionado: true,
            estrofe1: "Jesus, Teu nome é santo,\nAmável Teu querer;\nLouvor real, com puro amor,\nQueremos-Te render.\nPoder e honra e glória a Ti\nNós vimos tributar,\nCom gratidão e devoção\nTeu culto celebrar.",
            estrofe2: "Jesus, Teu nome é santo,\nMerece o nosso amor;\nNos altos céus és nosso Deus,\nO nosso Protetor.\nIncomparável sempre és Tu\nEm Tua compaixão,\nPois Tu vieste ao mundo vil\nFazer-Te nosso irmão!",
            estrofe3: "Jesus, Teu nome é santo,\nAmarga foi a cruz;\nO Teu sofrer, o Teu penar\nÀ vida nos conduz.\nNa glória já sentado estás,\nAtento à adoração\nQue Teus fiéis Te vêm prestar\nCom grato coração!",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 27,
            tb: 319,
            selecionado: true,
            estrofe1: "Quem é Ele, frágil ser,\nQue os pastores querem ver?",
            estrofe2: "É o Senhor, que bela história,\nÉ o Senhor da eterna glória.\nDai-Lhe honras e louvor,\nCoroai-O Rei, Senhor!\nQuem é Ele que, ao falar,\nPode as lágrimas secar?",
            estrofe3: "Quem é Ele que, ao chegar,\nTodo o povo quer louvar?",
            estrofe4: "Quem é Ele, lá na cruz,\nQue à vida nos conduz?",
            estrofe5: "Quem é Ele que sofreu\nTriste morte e venceu?",
            estrofe6: "Quem é Ele que está\nNo Seu trono e reinará?",
            som: "",
            coro: ""
        },
        {
            id: 28,
            tb: 86,
            selecionado: true,
            estrofe1: "Em Cristo não há norte ou sul,\nNão há mais raça ou cor:\nNós todos nEle somos um,\nUnidos pelo amor.",
            estrofe2: "A todos Cristo vem trazer\nConcórdia e plena paz.\nA santa causa do Senhor\nA nossa união refaz.",
            estrofe3: "Uni-vos, todos, em Jesus\nE ao mundo proclamai\nO que Ele diz: ―É Meu irmão\nQuem serve ao Santo Pai‖.",
            estrofe4: "Jesus irmana norte e sul,\nIguala raça e cor.\nEm Cristo os homens todos são\nUnidos pelo amor.",
            som: "",
            coro: ""
        },
        {
            id: 29,
            tb: 201,
            selecionado: true,
            estrofe1: "Todos nos prostremos\nDiante de Jesus\nPara confessá-lO\nRei da glória e luz;\nDeus, o Pai, mostrou-nos\nQue Ele é Senhor\nE que, desde o início,\nFoi o Verbo e o Amor.",
            estrofe2: "Pelo Seu comando\nFez-se a criação.\nOs milhares de anjos\nDa eterna mansão,\nTronos e domínios,\nAstros a brilhar\nE a ordem celeste\nFazem-nos pasmar.",
            estrofe3: "Cristo, em forma humana,\nSua cruz tomou;\nObediente, humilde,\nEle Se entregou.\nDeus Lhe deu um nome,\nNome sem igual,\nQue Jesus manteve\nPuro até o final.",
            estrofe4: "Feito servo e homem,\nEle triunfou,\nAlto mais que todos\nEle Se elevou;\nAssentou-Se à destra\nDo Deus Criador\nPara ser, na glória,\nNosso Intercessor.\nEsse mesmo Cristo\nHá de aqui voltar\nTriunfante em glória\nPara nos buscar.\nPovos todos, dai-Lhe\nHonra e devoção.\nVinde confessá-lO\nRei do coração!",
            som: "",
            coro: ""
        },
        {
            id: 30,
            tb: 232,
            selecionado: true,
            estrofe1: "Belo e bom Jesus,\nÓ Rei da terra e céu,\nAmado Filho de Deus Pai;\nÉs todo o meu louvor,\nMinha esperança e amor;\nA Ti meu canto alegre vai.",
            estrofe2: "Se paro a contemplar\nO sol e estrelas mil\nNos altos céus a refulgir,\nSinto que tens, Jesus,\nMais resplendente luz,\nClarão divino a difundir.",
            estrofe3: "Florestas, montes, céus,\nA primavera em flor\nBelezas podem revelar;\nMais belo e puro és Tu,\nQue fazes com amor\nO triste coração cantar.",
            estrofe4: "Naquela triste cruz\nMorreste, ó bom Jesus,\nA fim de o pecador salvar;\nVivo com Deus estás,\nUm dia voltarás;\nOh! vem, Senhor, os Teus buscar!",
            som: "",
            coro: ""
        },
        {
            id: 31,
            tb: 477,
            selecionado: true,
            estrofe1: 'Amor divino, que desceste!\nJesus, que por amor morreste!\nAh! quanta dor não padeceste!\nMinha alma vieste resgatar\nE meu amor ganhar!',
            estrofe2: 'Amor, que tão fiel seguias\nmim, que sem amor Tu vias!\nOh! quanto amor por mim sentias,\nEterno Deus, Senhor Jesus,\nSofrendo sobre a cruz!',
            estrofe3: 'Amor, que tudo me perdoas,\nJesus, que até mesmo abençoas\nUm réu de quem Te afeiçoas!\nVencido, ó Salvador, por Ti,\nTeu grande amor senti!',
            estrofe4: 'Amor sublime, que perduras,\nQue em Tua graça me seguras,\nCercando-me de mil venturas!\nAceita, agora, ó Salvador,\nO meu humilde amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 32,
            tb: 1,
            selecionado: true,
            estrofe1: 'Conheces este nome admirável\nQue de Deus nos traz perdão?\nBendito, inspirado, adorável,\nBelo nome de Jesus!',
            estrofe2: 'Dá paz divina ao coração contrito,\nA perfeita salvação;\nA todos os aflitos dá consolo,\nBelo nome de Jesus!',
            estrofe3: 'Brilhando, qual estrela matutina,\nSobre as trevas terrenais,\nCoragem dá à vida, ilumina,\nBelo nome de Jesus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Nome entre todos glorioso\nJamais igual se encontrou\nPois salvação não há em nenhum outro,\nBelo nome de Jesus!'

        },
        {
            id: 33,
            tb: 526,
            selecionado: true,
            estrofe1: 'Belo Jesus, ó luzeiro de Deus,\nDoce e terno vieste dos céus;\nBelo Jesus, de humilde nascer,\nTens, no entanto, divino poder.',
            estrofe2: 'Belo Jesus, belo Jesus,\nTu és a pérola de grande preço.\nBelo Jesus, belo Jesus,\nNós Te adoramos, ó meigo Jesus.',
            estrofe3: 'Belo Jesus, quanto gozo nos dás,\nSempre na vida nos protegerás;\nBelo Jesus, o emblema do bem,\nVirtude excelsa, riqueza do além.',
            estrofe4: 'Belo Jesus, tão humilde e sem par,\nVieste ao mundo pra todos salvar;\nBelo Jesus, vem aqui redimirm\n pecador que a Ti queira vir.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 34,
            tb: 158,
            selecionado: true,
            estrofe1: 'Àquele que, de amor por nós, à morte Se entregou E,\npela mão tomando-nos, do mal nos libertou,\nQue nos levou de novo a Deus, o Deus de todo o amor,\nACristosoem, pelos céus, os ecos de louvor.',
            estrofe2: 'Louvado seja Quem nos quis de Deus aproximar E,\n em reino e sacerdotes Seus, com sangue consagrar.\nLouvado seja Quem o dom do Espírito nos deu;\nLouvado seja, pois que abriu a entrada para o céu.',
            estrofe3: 'Aos Teus ouvidos, santo Pai, eleve-se o louvor,\nQue destes fracos lábios sai, a Cristo, Salvador.\nPois muito nos apraz saber que a Ti, no santo lar\n,Louvor a Cristo, agrada ouvir na terra celebrar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 35,
            tb: 576,
            selecionado: true,
            estrofe1: 'A Deus bendizemos: por Seu grande amor\nSeu Filho bendito por nós todos deu;\nE graça concede ao mais vil pecador,\nAbrindo-lhe a porta de entrada no céu.',
            estrofe2: 'Exultai! Exultai! E louvai com fervor\nA Jesus. Exaltai a Jesus Redentor!\nA Deus bendizemos, porquanto, do céu,\nSeu Filho bendito por nós todos deu.',
            estrofe3: 'Oh! graça real! foi assim que Jesus,\nMorrendo, Seu sangue por nós derramou.\nHerança nos céus, comos salvos em luz,\nLegou-nos Aquele que o preço pagou.',
            estrofe4: 'Tal prova de amor nos persuade a confiar\nNos merecimentos do Filho de Deus;\nE quem a Jesus, pela fé, se entregar,\nVai vê-lO triunfantena glória dos céus!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 36,
            tb: 78,
            selecionado: true,
            estrofe1: 'Desperta já, meu coração,\nE louva ao Salvador,\nCantando em hino celestial\nSeu grande e eterno amor!     (bis)',
            estrofe2: 'Amor que trouxe aqui Jesus\nA fim de me salvar,\nAmor que quis na dura cruz\nMorrer em meu lugar. (bis)',
            estrofe3: 'Remido a preço tão real,\nO sangue de Jesus,\nQue tenho eu com que pagar\nA bênção dessa cruz? (bis)',
            estrofe4: 'Amor que clama: ―Vinde a Mim‖!\nQue busca ao pecador,\nAmor divino, amor sem fim,\nAmor do Salvador.     (bis)',
            estrofe5: '',
            som: '',
            coro: 'Amor sem par, preenche o vasto céu,\nA terra, o mar, também meu coração;\nOh! grande amor de Deus.'

        },
        {
            id: 37,
            tb: 118,
            selecionado: true,
            estrofe1: 'Jesus, agora, sim, eu sei\nQuão grande é Teu amor;\nPois salvação em Ti achei,\nAceita o meu louvor.',
            estrofe2: 'És Tu, Jesus, meu Salvador,\nPor Ti eu tenho paz;\nJesus, a Ti louvor darei,\nPois tudo Tu me dás.',
            estrofe3: 'Comigo, salvos, exaltai\nO grande Salvador;\nPois tudo Cristo me supriu,\nEmbora pecador.',
            estrofe4: 'Louvor e honra a Ti darei,\nÓ Cristo, meu Senhor;\nProfeta, Sacerdote e Rei,\nDo mundo, o Salvador.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 38,
            tb: 739,
            selecionado: true,
            estrofe1: 'Louvamos-Te, ó Deus,\nQue por nós, pecadores,\nMorreu numa cruz.',
            estrofe2: 'Aleluia! Toda a glória\nTe rendemos, amém!\nAleluia! Cantaremos\nNo eterno além.',
            estrofe3: 'Louvamos-Te, ó Deus!\nTu és fonte de luz,\nQue as trevas dissipa\nE a Cristo conduz.',
            estrofe4: 'Cordeiro de Deus,\nTe queremos louvar;\nMorreste, mas vives\nNo céu a reinar.',
            estrofe5: 'Transborda meu ser\nDe incansável ardor,\nFazendo-o sentir\nTeu excelso amor.',
            som: '',
            coro: ''

        },
        {
            id: 39,
            tb: 569,
            selecionado: true,
            estrofe1: 'Cantemos aqui, como os anjos de luz,\nPois eles adoram com gozo a Jesus.\nO trono cercando, Lhe dão o louvor,\nMilhares as vozes, mas um só o amor.',
            estrofe2: 'Os anjos proclamam, cantando nos céus,\nAs glórias do santo Cordeiro de Deus.\nCom eles, remidos, ergamos a voz:\n―Morreste e venceste, Cordeiro, por nós!‖',
            estrofe3: 'Morreste! querendo os rebeldes salvar;\nTu vives! nos levas conTigo a reinar!\nOh! Sê Tu bendito, querido Jesus,Senhor, nossa vida, riqueza e luz.',
            estrofe4: 'Que todos, nos céus e na terra e no mar,\nSe unam ao bom Redentor a adorar.\nA criação toda levante o louvor,\nCom grande alegria, bendiga ao Senhor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 40,
            tb: 9,
            selecionado: true,
            estrofe1: 'De toda a terra e nação\nLouvor a Cristo levantai;\nEm alta voz, do coração,\nO nome de Jesus cantai!',
            estrofe2: 'Misericórdia divinal,\nJustiça eterna e forte amor,\nDe litoral em litoral\nSerão cantados ao Senhor.',
            estrofe3: 'Com reverência e com fervor,\nO incenso de louvor levai,\nSinceros, simples, ao Senhor,\nEm regozijo exaltai.\nEm toda a língua entoai\nCanção de paz e redenção;\nEm todo o mundo proclamai\nQue reino dele os povos são.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 41,
            tb: 678,
            selecionado: true,
            estrofe1: 'É bom cantar do meu Cristo,\nQue a vida deu por mim;\nMeu ser encheu de alegria,\nDe graça e paz sem fim.',
            estrofe2: 'Como é bom cantar,\nComo é bom cantar,\nComo é bom cantar de Cristo,\nComo é bom cantar!',
            estrofe3: 'É bom cantar da beleza,\nGrandeza e amor\nQue a criação manifesta,\nDe Cristo, meu Senhor',
            estrofe4: 'É bom cantar da virtude,\nPodertransformador,\nDa salvação gloriosa\nDe Cristo, o Redentor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 42,
            tb: 7,
            selecionado: true,
            estrofe1: 'Louvemos hoje ao Salvador\nEm hinos do mais grato amor;\nA Sua graça honrar convém,\nPois meu Jesus faz tudo bem.',
            estrofe2: 'Os bem-amados de Jesus\nJá gozam da eterna luz,\nRiquezas de ternura têm,\nPois meu Jesus faz tudo bem.',
            estrofe3: 'As maravilhas do Senhor\nProclamam alto Seu amor;\nOh! corações, cantai também\nQue só Jesus faz tudo bem.',
            estrofe4: 'Jesus nos pode preservar\nDo mundo e do mal livrar.E cantaremos no além\nQue só Jesus fez tudo bem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 43,
            tb: 92,
            selecionado: true,
            estrofe1: 'Mil vozes eu quisera ter,\nPois quero dar louvor\nAo sempiterno Deus e Rei,\nPotente Salvador.',
            estrofe2: 'Aleluia a Jesus,\nQue morreu no Calvário,\nAleluia, (3x) amém!',
            estrofe3: 'Bondoso Mestre, grande Deus,\nAjuda-me a contar\nPor todo o mundo, a todo o ser,\nTeu grande amor sem par.',
            estrofe4: 'Jesus, o Teu imenso amor\nA nossa dor desfaz,\nTraz alegria ao pecador,\nSaúde, vida e paz',
            estrofe5: 'Quebranta o poder do mal,\nLiberta o transgressor.\nTeu sangue limpa o coração,\nConheço o seu valor.\nBuscai, ó povos, no Senhor,\nA vossa salvação,\nE nele, pela fé, achai\nA justificação.,',
            som: '',
            coro: ''

        },
        {
            id: 44,
            tb: 727,
            selecionado: true,
            estrofe1: 'Que cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!\nOs céus, a terra e o mar\nNão cessem de louvar\nA Cristo, o Salvador,\nNo mundo pecador!\nQue cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!',
            estrofe2: 'Que cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!\nQue a Igreja, em seu louvor,\nExalte o Redentor,\nE todo o coração\nTribute adoração!\nQue cante o mundo e toda a santa grei:\nMeu Deus! Meu Rei!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 45,
            tb: 81,
            selecionado: true,
            estrofe1: 'A Pérola celeste achei!\nExulta, ó coração,\nVem dar louvores a Jesus\nDe ardente gratidão!',
            estrofe2: 'Ele é o grande Rei dos reis,\nO Sol da retidão,\nO Príncipe da eterna paz,\nTrazendo a salvação.',
            estrofe3: 'É meu Amigo e meu Irmão,\nExcelso Redentor,\nMeu Advogado e meu Juiz,\nMeu terno e bom Pastor.',
            estrofe4: 'Meu Protetor e minha Luz,\nAuxílio em tentação.\nTesouros tenho em meu Jesus,\nDe graça e perfeição.',
            estrofe5: '',
            som: '',
            coro: 'A glória dos mais altos céus\nÉ meu fiel Senhor\nMinha alma canta e com amor\nCelebra o Seu louvor!'

        },
        {
            id: 46,
            tb: 394,
            selecionado: true,
            estrofe1: 'Santo nome, incomparável,\nTem Jesus, o amado meu,\nRei dos reis, Senhor eterno,\nDeus na terra, Deus no céu.',
            estrofe2: 'Leva tu contigo o nome\nDe Jesus, o Salvador,\nEsse nome dá conforto\nHoje, sempre e onde for.',
            estrofe3: 'Esse nome leva sempre\nPara bem te defender,\nEle é arma ao teu alcance\nQuando o mal te aparecer',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Nome bom, doce à fé, ) bis\nEsperança do porvir. )'

        },
        {
            id: 47,
            tb: 83,
            selecionado: true,
            estrofe1: 'Saudai o nome de Jesus!\nArcanjos, adorai!     (bis)\nAo Rei que Se humilhou na cruz\nCom glória coroai!    (bis)',
            estrofe2: 'Ó escolhida geração\nDe Deus, o eterno Pai, (bis)\nAo grande Autor da salvação\nCom glória coroai!     (bis)',
            estrofe3: 'Remidos todos, com fervor,\nHosanas entoai!        (bis)\nAo Verbo feito Redentor\nCom glória coroai!     (bis)',
            estrofe4: 'Ó raças, povos e nações,\nAo Rei divino honrai! (bis)\nA Quem quebrou os vis grilhões\nCom glória coroai!    (bis)',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 48,
            tb: 705,
            selecionado: true,
            estrofe1: 'Terno amigo! achei em Ti perdão,\nNunca me senti feliz assim;\nJardineiro do meu coração,\nCristo, Tu és tudo para mim!',
            estrofe2: 'Deste mundo as honras e o esplendor,\nSeus prazeres e seus bens sem fim\nNão se igualam nunca ao Teu amor,\nCristo, Tu és tudo para mim!\nAos Teus pés eu quero consagrar\nMinha vida, todo o ser, enfim;\nOuve a minha alma a segredar:\n―Cristo, Tu és tudo para mim!‖',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Tu és tudo para mim, (bis)\nPleno gozo acho sempre em Ti,\nCristo, Tu és tudo para mim.'

        },
        {
            id: 49,
            tb: 665,
            selecionado: true,
            estrofe1: 'Vibra em meu ser feliz canção\nCom acorde divinal;\nCristo me salvou, há paz em mim,\nSeu amor é sem igual!',
            estrofe2: 'Sua graça em mim vou festejar,\nPois seguro abrigo achei;\nA razão do meu louvor está\nEm Jesus, glorioso Rei!',
            estrofe3: 'Se por águas turvas eu passar\nOu se o vale conhecer,\nSei, à minha frente foi Jesus,\nOs Seus passos posso ver',
            estrofe4: 'Breve as portas santas lá do céu\nSe abrirão de par em par;\nQuero ser fiel até o fim\nE o ―bem-vindo‖ escutar\!',
            estrofe5: '',
            som: '',
            coro: 'Oh! quão doce é o nome\nDo Senhor Jesus!\nFaz vibrar minha alma,\nCantarei na Sua luz!',

        },
        {
            id: 50,
            tb: 182,
            selecionado: true,
            estrofe1: 'A Cristo coroai, Cordeiro vencedor,\nOuvi, das hostes celestiais, dos anjos, o louvor.\nDesperta a tua voz e entoa, coração,\nLouvando Aquele que morreu e deu-te a salvação.',
            estrofe2: 'A Cristo coroai. A vida nos doou\nE, a fim de dar-nos salvação, da tumba triunfou.\nCantemos Seu poder. Morreu, mas ressurgiu,\nA vida eterna nos ganhou e a morte destruiu.',
            estrofe3: 'A Cristo coroai, das eras o Senhor,\nDos mundos e astros da amplidão é eterno Criador.\nAo grande Redentor, que trouxe salvação,\nEternamente tributai louvor e adoração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 51,
            tb: 633,
            selecionado: true,
            estrofe1: 'Oh! vinde entoar louvores ao Senhor Jesus,\nQue para me salvar morreu na infame, acerba cruz.\nSeu sangue derramou, de tudo me lavou,\nMais alvo do que a neve me tornou.',
            estrofe2: 'Foi o sangue de Jesus que me lavou, me lavou,\nO sangue de Jesus que me lavou, me lavou.\nAlegre cantarei os louvores ao meu Rei,\nAo meu Senhor Jesus que me salvou.',
            estrofe3: 'Comigo vinde unir-vos nesta luta contra o mal,\nCom nosso Salvador Jesus, em marcha triunfal,\nA todos proclamar a graça singular\nDe Cristo vindo para nos salvar.\nO grande Autor da salvação é Cristo, o Redentor,\nSublime e excelso, o Rei dos reis, Jesus, o bom Senhor!\nSim, tudo vencerá, vitória nos dará,\nÀ glória, salvos, nos conduzirá',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 52,
            tb: 577,
            selecionado: true,
            estrofe1: 'Jesus, eu Te amo e sei que és meu,\nPor Ti os pecados abandonarei,\nPois Tu me remiste e és meu Salvador.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe2: 'Jesus, me amaste em primeiro lugar,\nCompraste o perdão no Calvário, na cruz,\nEspinhos na fronte sofreste por mim.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe3: 'Eu Te amo em vida ou quando morrer,\nEm todos os momentos em que respirar,\nAté que o orvalho da morte eu sentir.\nSe eu já Te amava, bem mais Te amarei.',
            estrofe4: 'Na glória, em mansões e em deleites sem fim,\nEu hei de adorar-Te e contigo estarei;\nEntão, laureado, em louvor cantarei:\nEu sempre Te amei e mais Te amarei!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 53,
            tb: 139,
            selecionado: true,
            estrofe1: 'Quão doce soa ao coração\nDo pobre pecador\nO nome que lhe traz perdão:\nJesus, o Salvador!\nPrecioso é o nome de Jesus,\n(3x) O nome sem igual.',
            estrofe2: 'Jesus, Tu és Irmão leal,\nPastor mui terno e bom,\nMeu Advogado supernal,\nDivino e excelso Dom.',
            estrofe3: 'Bendito nome de Jesus!\nComigo estás, eu sei! Por mim morreste sobre a cruz,\nEm Ti confiarei.',
            estrofe4: 'Jesus, somente em Ti pensar\nMinha aflição desfaz;\nSerá melhor o ver-Te e estar\nNo céu contigo em paz.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 54,
            tb: 754,
            selecionado: true,
            estrofe1: 'Ó meu Jesus, radiante Salvador,\nEm Teus caminhos quero sempre andar,\nQue Tua luz me guie aonde eu for,\nTuas pegadas quero imitar,\nJesus de Nazaré!',
            estrofe2: 'Jesus de Nazaré,\nVem, dá-me força e fé,\nCerca-me com mercê,\nJesus de Nazaré.',
            estrofe3: 'Mais uma vez, vem, toca-me, Senhor,\nTua vontade hei de obedecer,\nLibertador de dores e temor,\nFonte de amor, de vida e poder,\nJesus de Nazaré!\nAo navegar, Senhor, seguir-Te-ei\nEm tempestuoso ou tranquilo mar,\nPois sei, ao porto salvo chegarei\nSe guardo a fé, sem nunca vacilar,\nJesus de Nazaré!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 55,
            tb: 395,
            selecionado: true,
            estrofe1: 'Tu, que tens o nome excelso\nDe Jesus, o Salvador,\nQue morreste e agora vives\nE conosco estás, Senhor,\nOh! que bom é confiar ) bis\nSempre em Ti e descansar!       )',
            estrofe2: 'Tu, ó Deus onipotente,\nDá-me a graça \de firmar\nOs meus pés tão vacilantes\nE contigo sempre andar.\nSalvador, ó meu Jesus, ) bis\nVem guardar-me em Tua luz.      )',
            estrofe3: 'aze que, na minha vida,\nÓ Jesus, eu possa haurir\nMais do Teu poder imenso,\nTua imagem refletir;\nQue se veja em mim, Senhor,     ) bis\nTua graça, Teu amor. )',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 56,
            tb: 367,
            selecionado: true,
            estrofe1: 'Eis que Mestre precioso\nÉ Jesus, o bom Senhor,\nSoberano, vitorioso\nE glorioso Salvador!',
            estrofe2: 'Coroá-lo vinde, todos\nVós, os salvos por Jesus;\nCom amor entronizai-O\n,       Cristo, Autor da eterna luz!',
            estrofe3: 'Exaltai, com grande aplauso,\nEsse triunfante Rei;\nPotestades, santos, anjos\nReconhecem Sua lei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Aclamai-O, vós, remidos,       ) bis\nCoroai-O Rei dos reis! )',

        },
        {
            id: 57,
            tb: 61,
            selecionado: true,
            estrofe1: 'Em majestade e honras vai,\nAo som de hosana e exaltação;\nPor entre palmas, para a cruz,\nProssegue a estrada o bom Jesus.',
            estrofe2: 'Em majestade e honras vai,\nHumilde segue para a cruz;\nEle o pecado vencerá\nE a morte atroz abaterá.',
            estrofe3: 'Em majestade e honras vai;\nAs hostes de anjos pelo céu\n,Ao longe, vêm com triste olhar\nO sacrifício despontar.',
            estrofe4: 'Em majestade e honras vai,\nÉ vinda a luta pertinaz;\nNo céu o Pai O acolherá,\nSeu Filho, ungido, subirá.',
            estrofe5: 'Em majestade e honras vai,\nHumilde segue para a cruz;\nSe abate a fronte a grande dor\n,Depois triunfa o Vencedor.',
            som: '',
            coro: ''

        },
        {
            id: 58,
            tb: 255,
            selecionado: true,
            estrofe1: 'Como hei de receber-Te?\nOnde eu Te encontrarei?\nO mundo anseia ver-Te\nAdorno da alma, ó Rei.\nJesus, vem, me ilumina\n,Em mim vem acender\nA Tua luz divina,\nQue assim Te possa ver.',
            estrofe2: 'Recebe-Te com palmas\nA grande multidão,\nTambém as nossas almas\nLouvor e graças dão.Meu coração almeja\nLouvar-Te com fervor.\nTeu nome sempre seja\nBendito, Salvador.',
            estrofe3: 'Vieste para o mundo\nSó para nos salvar\n.Foi Teu amor profundo\nQue veio libertarn\nNossa alma que sofria\nDe grande privação.\nEncheste de alegria\nO nosso coração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 59,
            tb: 108,
            selecionado: true,
            estrofe1: 'Pendurado no madeiro,\nÓ Jesus, quiseste assim\nMe livrar do cativeiro\nE provar-me amor sem fim!',
            estrofe2: 'O Teu sangue foi vertido,\nExpiaste, ó meu Jesus!\nE ficou por Ti cumprido\nMeu resgate sobre a cruz!',
            estrofe3: 'Nesse sangue, que verteste,\nPurifica-me, Senhor!\nFoi por mim que Tu morreste;\nSê propício ao pecador!',
            estrofe4: 'Sê propício ao condenado\nSob a dor da maldição,\nDeste abismo do pecado\nA lutar na escuridão!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 60,
            tb: 458,
            selecionado: true,
            estrofe1: 'Conta-me a história de Cristo,\nGrava-a no meu coração,\nEssa inefável história\nCheia de paz e perdão.\nConta como Ele encarnado\nVeio no mundo morar\nE aos pecadores indignos\nGraça do céu revelar.',
            estrofe2: 'Conta-me a história de Cristo,\nGrava-a no meu coração,\nEssa inefável história\nCheia de paz e perdão.',
            estrofe3: 'Conta como Ele, bondoso,\nNunca a ninguém rejeitou;\nComo, de mãos estendidas,\nTodos a Si convidou;\nComo Jesus nunca pode,\nSeja a quem for, recusar,\nSe convencido e contrito,\nSua oferta aceitar.',
            estrofe4: 'Conta-me as duras afrontas\nQue mansamente sofreu;\nComo, na cruz levantado,\nSangue inocente verteu.\n      Dá-me o viver na certeza\nDe que foi mesmo por mim,\nPois Seu amor tão imenso\nNão tem mudança nem fim!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 61,
            tb: 138,
            selecionado: true,
            estrofe1: 'Há uma fonte sem igual\nNa cruz do meu Senhor,\nQue lava, sim, de todo o mal\nO pobre pecador.',
            estrofe2: 'Eu creio, sim, eu creio, sim:\nJesus por mim sofreu\nE sobre a cruz, em meu lugar,\nO bom Jesus morreu.',
            estrofe3: 'Agonizante, o vil ladrão,\nContrito, achou na cruz\nA mais perfeita redenção\nNa graça de Jesus.',
            estrofe4: 'Perdão na cruz Jesus me deu\nDo mal que cometi.\nE pela morte que sofreu\nA vida consegui',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 62,
            tb: 591,
            selecionado: true,
            estrofe1: 'Ó vós, que passais pela cruz do Calvário,\nPodeis contemplar, sem tristeza nem dor,\nQue, para livrar-nos do grande adversário,\nSeu sangue inocente derrama o Senhor?',
            estrofe2: 'Por nós foi Jesus, com cruel zombaria,\nVestido, por homens, do manto real;\nEspinhos, insultos, atroz gritaria\nSem queixa sofreu do furor desleal.',
            estrofe3: 'Olhai-O! Pois inda essas mãos estendidas\nOfertam amor e garantem perdão.\nTrazei pela fé vossas almas perdidas.\nEm Cristo Jesus achareis salvação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 63,
            tb: 496,
            selecionado: true,
            estrofe1: 'Será possível eu tirar\nProveito do que fez Jesus?\nSofreu por mim e quer salvar\nA mim, que O maltratei na cruz?\nIncomparável tanto amor,\nPor mim morreu o Salvador!',
            estrofe2: 'O trono e a glória o Rei deixou\nE Se vestiu de humilhação;\nAs honras todas desprezou,\nMas revelou-nos compaixão;\nPara remir o pecador,\nAo mundo veio o Salvador.',
            estrofe3: 'Não tenho mais condenação,\nPorque em Seu sangue confiei;\nEm Cristo vivo e retidão\nDivina, eterna, eu terei\nQuando eu da mão do Salvador\nDe glória coroado for.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 64,
            tb: 14,
            selecionado: true,
            estrofe1: 'Oh! como foi que meu Jesus\nAssim sofreu na triste cruz?\nNão só na cruz, mas no jardim,\nAgonizou, e foi por mim!',
            estrofe2: 'O grande horror da escuridão\nApavorou a multidão\nQue soube enfim: rasgado o véu,\nA entrada é franca para o céu.',
            estrofe3: 'Com dor cruel na cruz morreu,\nSeu sangue ali por mim verteu,\nSomente para me salvar\nE meus pecados perdoar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Ali na cruz, ali na cruz,\n Oh! sim, por mim Jesus sofreu!\n Ali na cruz, ali na cruz,\n      Oh! sim, Jesus por mim morreu!'

        },
        {
            id: 65,
            tb: 93,
            selecionado: true,
            estrofe1: 'Por meus pecados expirou\nJesus, a Vida e Luz;\nDas minhas culpas me livrou\nNa dolorosa cruz.',
            estrofe2: 'Hei de ser forte em confessar\nJesus, meu Redentor,\nE sempre firme em confiar\nNo Seu infindo amor.',
            estrofe3: 'Terei acaso débil voz,\nQue trema ao confessar\nA quem, por morte vil e atroz,\nMinha alma quis salvar?',
            estrofe4: 'Pois eu desejo bendizer\nAo grande Salvador\nE, quando, além, no céu viver,\nDar-Lhe-ei melhor louvor.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 66,
            tb: 148,
            selecionado: true,
            estrofe1: 'Morri na cruz por ti,\nMorri pra te livrar.\nMeu sangue, sim, verti,\nE posso-te salvar.',
            estrofe2: 'Vivi assim por ti,\nProvei intensa dor.\nE tudo fiz aqui,\nPor ser teu Salvador.\nSofri na cruz por ti,\nA fim de te salvar.\nA vida consegui\nE a tenho para dar.',
            estrofe3: 'Eu trouxe a salvação,\nDos altos céus favor.\nÉ certo Meu perdão,\nÉ grande Meu amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Morri, morri na cruz por ti;   ) bis\nQue fazes tu por Mim? )',

        },
        {
            id: 67,
            tb: 736,
            selecionado: true,
            estrofe1: 'Comovido eu sinto o meu coração\nQuando penso na cruz e na grande aflição\nDo Cordeiro de Deus, que tomou meu lugar\nE deu Sua vida só pra me salvar.',
            estrofe2: 'Essa cruz tem, pra mim, atração singular,\nDela emana o amor infinito e sem par.\nJesus, no Calvário, comprou meu perdão\nCom Seu sangue divino - que redenção!',
            estrofe3: 'É a fonte da graça, e aí o amor\nDá a palavra final ao mais vil pecador;\nEsse dom glorioso, além do entender,\nTransforma a vida de todo o que crer.',
            estrofe4: 'Entreguei plenamente a Jesus meu viver,\nE qualquer sacrifício tornou-se prazer;\nBem no meu coração sempre há de reinar,\nJamais algum outro terá Seu lugar.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 68,
            tb: 122,
            selecionado: true,
            estrofe1: 'Será verdade que morreu\nMeu soberano Rei\nPor mim, um miserável réu,\nQue transgrediu a lei?',
            estrofe2: 'Oh! lembra-Te de mim, Senhor,\nPor Teu sofrer na cruz.\nE, recordando o Teu amor,\nPerdoa-me, Jesus!',
            estrofe3: 'Por meus pecados foi mister\nPenar, morrer na cruz?\nOh! tão sublime amor requerQue eu siga o bom Jesus!',
            estrofe4: 'Eu nunca poderei pagar\nO grande amor de Deus;\nA Ele vou servir e amar\nNa terra e nos céus.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 69,
            tb: 108,
            selecionado: true,
            estrofe1: 'Cristo já foi imolado,\nMeus pecados já pagou;\nTendo a morte conquistado,\nVida para nós comprou.',
            estrofe2: '',
            estrofe3: 'Aceitemos, sem detença,\nSeu favor com gratidão;\nDúvidas e indiferença\nNão há mais no coração.',
            estrofe4: 'Os remidos perdoados\nAmam sempre a santa lei;\nObedecem, renovados,\nA Jesus, supremo Rei.',
            estrofe5: '',
            som: '',
            coro: 'Sobre a cruz, por meu pecado,\nQuis Jesus por mim morrer;\nSempre nele refugiado,\nNada tenho que temer.',
        },
        {
            id: 70,
            tb: 342,
            selecionado: true,
            estrofe1: 'Oh! que precioso sangue\nO Senhor verteu\nQuando, para resgatar-nos,\nPadeceu!',
            estrofe2: 'Oh! que precioso sangue,\nSangue de Jesus,\nQue por nós foi derramado\nSobre a cruz!',
            estrofe3: 'Oh! que precioso sangue,\nSangue divinal,\nPois apaga em nossa alma\nTodo o mal!',
            estrofe4: 'Oh! que precioso sangue,\nSangue eficaz!\nTudo quanto a lei exige\nSatisfaz!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 71,
            tb: 95,
            selecionado: true,
            estrofe1: 'Muito longe o monte verde está,\nBem perto de Sião,\nE o bom Jesus na cruz ali\nNos deu a salvação.',
            estrofe2: 'Quem sondará e entenderá\nA dor que O torturou?\nMas crer podemos que por nós\nNo Gólgota expirou.',
            estrofe3: 'Ninguém podia aqui pagar\nA pena universal;\nSó Cristo pôde-nos remir\nA preço divinal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! quanto, quanto nos amou!\nAmemo-lo também;\nE, confiando em Seu amor,\n          Façamos todo o bem.'

        },
        {
            id: 72,
            tb: 585,
            selecionado: true,
            estrofe1: 'Sobre o monte Calvário eu vi uma cruz,\nQual emblema de afronta e dor.\nMas eu amo essa cruz, pois morreu lá Jesus,\nEm lugar do mais vil pecador.',
            estrofe2: 'Sim, eu amo a mensagem da cruz!\nSeu triunfo meu gozo será,\nE um dia, em vez de uma cruz,\nA coroa Jesus me dará.',
            estrofe3: 'Onde Cristo Jesus o Seu sangue verteu,\nFormosura contemplo sem par.\nTriunfante ali Ele a morte venceu\nE meu ser pode santificar.',
            estrofe4: 'Sempre fiel eu serei à visão dessa cruz,\nSeu desprezo também levarei.\nE um dia feliz, com os santos na luz,\nSua glória eu sempre verei.\nEssa cruz sem igual que o mortal desprezou\nPara mim foi de grande atração.\nE o Cordeiro de Deus, que a glória deixou,\nConquistou-me na cruz salvação',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 73,
            tb: 189,
            selecionado: true,
            estrofe1: 'Deus enviou Seu Filho amado\nPara salvar e perdoar.\nNa cruz morreu por meus pecados,\nMas ressurgiu e vivo com o Pai está.',
            estrofe2: 'E quando, enfim, chegar a hora\nEm que a morte enfrentarei,\nSem medo, então, terei vitória,\nVerei na glória o meu Jesus que vivo está.',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Porque Ele vive, posso crer no amanhã,\nPorque Ele vive, temor não há.\nPois, eu bem sei, eu sei que a minha vida\nEstá nas mãos de meu Jesus que vivo está!'

        },
        {
            id: 74,
            tb: 281,
            selecionado: true,
            estrofe1: 'Cristo já ressuscitou; aleluia!\nSobre a morte triunfou; aleluia!\nTudo consumado está; aleluia!\nSalvação de graça dá; aleluia!',
            estrofe2: 'Sobre a cruz Jesus sofreu; aleluia!\nE por nós ali morreu; aleluia!\nMas agora vivo está; aleluia!\nPara sempre reinará; aleluia!\n',
            estrofe3: 'Gratos hinos hoje erguei; aleluia!\nA Jesus, o grande Rei; aleluia!\nEle à morte quis baixar; aleluia!\nPecadores resgatar; aleluia!',
            estrofe4: 'Nas alturas celestiais; aleluia!\nExaltados com Jesus; aleluia!\nRessurgimos nós também; aleluia!\nAtravés da cruz, nos céus; aleluia!',
            estrofe5: 'Ó soldados, exultai; aleluia!\nLevantai as mãos aos céus; aleluia!\nGritai alto: ―Vivo está!‖; aleluia!\nSobre a morte vencedor; aleluia!',
            som: '',
            coro: ''

        },
        {
            id: 75,
            tb: 466,
            selecionado: true,
            estrofe1: 'Oh! que vitória meu Jesus\nMostrou, vencendo a rude cruz:\nDa morte ressurgiu!\nSeu feito, alegres, entoai,\nSeu nome eterno exaltai,\nO Mestre ressurgiu!',
            estrofe2: 'A tumba não pôde reter\nO amor, a graça e o poder\nDe Cristo, o Salvador,\nQue o mundo veio resgatar\nE do pecado libertar\n.Louvemos ao Senhor!',
            estrofe3: 'A morte já não traz temor;\nEm Cristo, nosso Redentor,\nPodemos nós também\nO seu efeito derrotar\nE ter certeza de um lugar\nNa glória do além.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vive sim, (bis)\nEu sei que vive o Redentor;\nVive sim, (bis)\nEu sei que vive o meu Senhor!'

        },
        {
            id: 76,
            tb: 17,
            selecionado: true,
            estrofe1: 'Sei que vive o Redentor,\nSei que há vida em Seu favor,\nQue, se aqui na cruz morreu,\nReina em glória lá no céu!',
            estrofe2: 'Cristo vive a suplicar\nA Deus Pai em meu lugar,\nVive para me suster\nE do mal me defender.',
            estrofe3: 'Livra-me do meu temor,\nMinorando a minha dor,\nA tristeza me desfaz,\nDá-me gozo, vida e paz.',
            estrofe4: 'Vive! glórias eu Lhe dou!\nVive! reina! e salvo eu sou!\nVivo nele, o Redentor,\nBem seguro em Seu amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 77,
            tb: 681,
            selecionado: true,
            estrofe1: 'Adoro o Cristo vivo, comigo Ele está;\nEu sei que Ele vive e sempre viverá!\nEu tenho a Sua graça, eu ouço a Sua voz;\nÉ Ele quem me livra da morte atroz',
            estrofe2: 'Jesus está bem vivo no meu coração,\nConsola-me, liberta-me, em meio à tentação.\nJesus, o Rei, meus erros perdoou.Eu sei que vive o Redentor.\nJesus ressuscitou!',
            estrofe3: 'Jesus, Senhor e Mestre, por mim morreu na cruz,\nRessuscitou dos mortos e dá-me paz e luz.\nEternamente vivo, pra sempre reinará,\nE quem crer nele vive e viverá!',
            estrofe4: 'Alegra-te, ó salvo, cantando com fervor\nEternas aleluias a Cristo, Rei, Senhor.\nAuxílio dos que buscam, refúgio dos que crêem,\nÉ sempre nossa fonte de todo o bem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 78,
            tb: 839,
            selecionado: true,
            estrofe1: 'Eis morto o Salvador na sepultura,\nMas com poder, vigor, ressuscitou.',
            estrofe2: 'Tomaram precaução com o sepulcro,\nMas tudo foi em vão para O reter.',
            estrofe3: 'Sobre a morte e o mal foi vitorioso\nE vida eternal nos outorgou.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Da sepultura saiu!\n Com triunfo e glória ressurgiu!\nRessurgiu, vencendo a morte e o seu poder;\nPode agora a todos vida conceder!\n Ressurgiu! Ressurgiu! Aleluia! Ressurgiu!'

        },
        {
            id: 79,
            tb: 614,
            selecionado: true,
            estrofe1: 'Já refulge a glória eterna\nDe Jesus, o Rei dos reis;\nBreve os reinos deste mundo\nSeguirão as Suas leis!\nOs sinais da Sua vinda\nMais se mostram cada vez.\nVencendo vem Jesus!',
            estrofe2: 'Glória, glória, aleluia! (3x)\nVencendo vem Jesus!',
            estrofe3: 'O clarim que chama os crentes\nÀ batalha já soou;\nCristo, à frente do Seu povo,\nMultidões já conquistou.\nO inimigo, em retirada,\nSeu furor patenteou.\nVencendo vem Jesus!',
            estrofe4: 'Eis que em glória refulgente\nSobre as nuvens descerá\nE as nações e os reis da terra\nCom poder governará\n.Sim, em paz e santidade\nToda a terra regerá.\nVencendo vem Jesus!',
            estrofe5: 'E por fim entronizado\nAs nações há de julgar\n;Todos, grandes e pequenos,\nO Juiz hão de encarar.\nE os remidos triunfantes\nEm fulgor hão de cantar:\nVencido tem Jesus!',
            som: '',
            coro: ''

        },
        {
            id: 80,
            tb: 151,
            selecionado: true,
            estrofe1: 'O mercado está vazio,\nSeu trabalho já parou;\nDo martelo dos obreiros,\nO barulho já cessou;\nOs ceifeiros, lá no campo,\nTerminaram seu labor;\nToda a terra está em suspense:É a volta do Senhor!',
            estrofe2: 'Os vagões de trens vazios\nPassam ruas, quarteirões\nAviões, sem seus pilotos,\nVoam pra destruição;\nA cidade está deserta,\nSua agitação parou;\nSai a última notícia:\nJesus Cristo já voltou!\nEis a multidão subindo,\nOuço o coro angelical;\nTodo o céu está-se abrindo\nNum ―bem-vindo‖ sem igual.\nComo o som de muitas águas,\nNós ouvimos ecoar\nAleluia ao Cordeiro!\nNós chegamos para o lar!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O Rei está voltando!   (bis)\nA trombeta está soando,\nO meu nome a chamar.\nO Rei está voltando!   (bis)\nAleluia! Ele me vem buscar',

        },
        {
            id: 81,
            tb: 423,
            selecionado: true,
            estrofe1: 'Sobre nuvem fulgurante,\nVem do céu o Salvador.\nEm poder e majestade,\nAnjos traz ao Seu redor.\nVem glorioso, (bis)Justo, eterno Vencedor.',
            estrofe2: 'Quem, a fim de dar-nos vida,\nPor amor morreu na cruz\nRessurgiu da sepultura\nE subiu ao céu, em luz.\nAleluia!        (bis)\nOutra vez virá Jesus.',
            estrofe3: 'Para dia tão solene,\nOh! prepara-nos, Senhor,\nA fim de, vencida a morte,\nTe encontrarmos sem temor.\nE veremos       (bis)\nTua face em resplendor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 82,
            tb: 853,
            selecionado: true,
            estrofe1: 'Quando, enfim, do céu descendo,\nPara os Seus Jesus voltar\nE o clarim de Deus a todos proclamar\nQue chegou o grande dia\nDa vitória do meu Rei\n,Lá, por Sua imensa graça, estarei.',
            estrofe2: 'Quando, enfim, chegar o dia\nDa vitória do meu Rei,\nQuando, enfim, chegar o dia,\nPela graça de Jesus, lá estarei!',
            estrofe3: 'Nesse dia, quando os mortos\nHão de a voz de Cristo ouvir\nE dos seus sepulcros hão de ressurgir,\nOs remidos, junto ao trono,\nVão saudar o excelso Rei.\nLá, por Sua imensa graça, estarei.',
            estrofe4: 'Pelo mundo, rejeitado\nFoi Jesus, meu Salvador,\nDesprezaram,\n insultaram meu Senhor.\nMas faustoso vem o dia\nDo triunfo do meu Rei.\nLá, por Sua imensa graça, estarei.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 83,
            tb: 259,
            selecionado: true,
            estrofe1: 'Espírito, Verdade, em nós vem habitar,\nDifunde claridade, o mal vem afastar.\nDerrama em nossa vida do santo fogo o ardor\nE faze-nos luzeiros do Teu infindo amor.',
            estrofe2: 'Tu foste prometido por Cristo, o Salvador,\nConsolador querido, ampara-nos na dor.\nQue as bênçãos comprovadas da Tua mão, Senhor,\nAqui nos sejam dadas: firmeza, fé, vigor!',
            estrofe3: 'Espírito, concede a força divinal,\nAcende em nós a chama da fé pentecostal\n,Oh! faze que anunciemos ao mundo o Teu fulgor,\nQue testemunho demos da salvação, Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 84,
            tb: 391,
            selecionado: true,
            estrofe1: 'Sobre mim estende as asas,\nSanto Espírito de Deus!\nVem com Teu poder encher-me,\nVem, atende os rogos meus.',
            estrofe2: 'Vem encher-me desde já,\nSanto Espírito de Deus,\nCom Teu fogo vem, Senhor!\nOh! atende os rogos meus!',
            estrofe3: 'Sim, Tu podes atender-me,\nComo, eu não sei dizer,\nMas desejo, imploro, espero\nQue me venhas socorrer.',
            estrofe4: 'Quero ter, Senhor, pureza,\nA perfeita salvação;\nReina agora e para sempre\nNeste grato coração.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 85,
            tb: 391,
            selecionado: true,
            estrofe1: 'Fogo divino, clamamos por Ti,\nVem lá do alto, vem, desce aqui,\nOh! vem! desperta-nos com Teu fulgor\nE vem, inflama-nos com Teu calor.',
            estrofe2: 'Desce, Espírito consolador,\nDesce e enche-nos de santo amor,\nDesce ao mundo, revela Jesus,\nDá-nos poder, vida, graça e luz.',
            estrofe3: 'Arde em minha alma, ó chama de amor,\nArde em meu peito e dá-me valor,\nArde e queima os restos do mal,\nVem conceder-me poder divinal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Desce do alto, bendito fogo,\nDesce, poder celestial,\nDesce do alto, bendito fogo,\nVem, chama pentecostal.'

        },
        {
            id: 86,
            tb: 97,
            selecionado: true,
            estrofe1: 'Não sei por que de Deus o amor\nA mim se revelou,\nPor que razão o Salvador\nPra Si me resgatou.',
            estrofe2: 'Mas eu sei em quem tenho crido\nE estou bem certo: é poderoso\nE guarda o meu tesouro\nDesde agora até o final',
            estrofe3: 'Ignoro como o Espírito\nConvence-nos do mal,\nRevela Cristo, Verbo Seu,\nConsolador real.',
            estrofe4: 'E quando vem Jesus não sei,\nSe breve ou tarde vem,\nMas sei que meu Senhor virá\nNa glória que Ele tem.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 87,
            tb: 181,
            selecionado: true,
            estrofe1: 'Espírito de Deus,\nFiel Consolador,\nPromessa e dom do Pai dos céus,\nRevela o Teu amor!\nVem, como o vento, entrar\nEm nossa comunhão!\nVem sobre as campas assoprar\nE os mortos viverão!',
            estrofe2: 'Vem como o fogo arder\nE todo o mal queimar!\nVem almas frias aquecer,\nEnsina-nos a amar.\nComo óleo vem ungir\nUm povo só em Ti,\nConsagra e faze-nos sentir\nA Tua graça aqui.',
            estrofe3: 'Nas trevas vem brilhar\nCom verdadeira luz\nE todo o mundo encaminhar\nAo Salvador Jesus.\nComo água, Tu serás\nO Purificador\nE vivas fontes abrirás\nNos átrios do Senhor.',
            estrofe4: 'Nas flores vem cair,\nOrvalho do Senhor,\nE faze as almas produzir\nOs frutos do louvor.\nDo céu és o Penhor,\nAs vidas vem selar\nE, com a imagem do Senhor,\nFaze-as no céu entrar!',
            estrofe5: 'A obra vem cumprir,\nDivino Instruidor,\nE toda a glória descobrir\nDo grande Salvador!\nEspírito sem par,\nDe paz e de adoção,\nHabita em nós para nos dar\nPerfeita salvação!',
            som: '',
            coro: ''

        },
        {
            id: 88,
            tb: 107,
            selecionado: true,
            estrofe1: 'Ó Santo Espírito de Deus,\nIrresistível vem\nQual fogo e desce sobre os Teus\nComo em Jerusalém.',
            estrofe2: 'Em vão cantamos Teu louvor\nE oramos quase em vão,\nHosanas damos sem ardor\nE em fraca devoção.',
            estrofe3: 'Senhor, será que sempre aqui\nIremos vacilar?\nTão frio amor mostrando a Ti,\nQue deste o Teu sem par?',
            estrofe4: 'Divino Santificador,\nAgora mesmo vem,\nCom Teu amor, poder, fervor,\nBatiza-nos também!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 89,
            tb: 364,
            selecionado: true,
            estrofe1: 'Vai queimando, viva chama,\nQueima, fogo divinal!\nSatisfaz a minha alma,\nPurifica-me do mal',
            estrofe2: 'Vai queimando intensamente,\nVem, ó fogo, em mim arder!\nTeu perfeito plano eu vejo,\nVou cumprir o Teu querer.',
            estrofe3: 'Vai queimando suavemente,\nQueima, chama, queima enfim!\nDesse amor vou aprendendo,\nSinto Tua obra em mim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vai queimando sempre, sempre,\nSanto Espírito, em mim!\nConsagrado inteiramente,\nVou servir-Te até o fim.'
        },
        {
            id: 90,
            tb: 282,
            selecionado: true,
            estrofe1: 'Ó divino Preceptor,\nMostra-nos o Salvador!\nÓ Tu, bom Consolador,\nEnche-nos de santo amor!       (bis)',
            estrofe2: 'Tu, fiel Instruidor,\nCom celestial favor,\nMostra como Te adorar,\nComo culto a Deus prestar!     (bis)',
            estrofe3: 'Santo Espírito de Deus,\nEnche de fervor os Teus,\nPra cantarem o louvor\nDe Jesus, o Salvador! (bis)\nVem, Espírito veraz,\nDá-nos firme, estável paz,\nNo poder da Tua luz\nGuia as almas a Jesus! (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 91,
            tb: 503,
            selecionado: true,
            estrofe1: 'Ó Deus Consolador, convém\nAo Teu auxílio recorrer:\nManancial de todo o bem,\nAs nossas almas vem encher\nE, com celeste amor, guiar\nOs que Te querem adorar!',
            estrofe2: 'Sem Ti, ó Deus, o culto é vão\nE nulo em tudo nos será;\nSem Teu ensino e direção\nNossa alma luzes não terá;\nE sem proveito, sem valor,\nAs expressões do nosso amor.',
            estrofe3: 'Com Teu amor, eterno Deus,\nInspira as nossas petições.\nEnsina a orar e eleva aos céus\nOs nosso frágeis corações!\nDesperta, ó santo Instruidor,\nEm nossas almas, Teu louvor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 92,
            tb: 6,
            selecionado: true,
            estrofe1: 'Recorro, Deus, a Ti, com humildade e fé,\nDesejo Teu poder, escuta-me, Senhor;\nAs faltas, Salvador, a Ti confessarei,\nOh! vem, Consolador.',
            estrofe2: 'Oh! vem, Consolador,\nSim, vem, Consolador!\nConcede-me Teu dom divino, celestial.\nOh! vem e dá-me, aqui, poder pentecostal;\nSim, vem, Consolador!',
            estrofe3: 'Almejo, Redentor, contigo sempre andar,\nO Teu precioso dom eu venho aqui buscar;\ncontigo quero estar e nada temerei,\nOh! vem, Consolador.',
            estrofe4: 'Batiza-me, Senhor, com fogo divinal,\nEnvia, Salvador, poder celestial;\nTu és o grande Autor da plena salvação,\nOh! vem, Consolador.',
            estrofe5: 'Recebo, agora, aqui, o Espírito de amor,\nMinha alma cheia está de gozo sem igual;\nA voz elevarei, em canto de louvor,\nA Ti, Consolador!',
            som: '',
            coro: ''

        },
        {
            id: 93,
            tb: 646,
            selecionado: true,
            estrofe1: 'Pelo Espírito tão poderoso,\nQue inunda a mente e o coração,\nPelo Espírito de paz perfeita,\nQue conforta quando o medo vem,',
            estrofe2: 'Te adoramos, Pai celeste,\nDamos-Te graças, Pai celeste,\nE Te louvamos, Pai celeste,\nAo orar, ao orar!',
            estrofe3: 'Pelo Espírito que nos corrige\nSe buscamos nosso bem-estar,\nPela direção constante e firme,\nSua força para obedecer,',
            estrofe4: 'Pelo Espírito que nos agita\nE nos traz de volta ao Teu querer,\nPelo Espírito tão persistente,\nQue nos leva sempre a prosseguir,',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 94,
            tb: 347,
            selecionado: true,
            estrofe1: 'Vem, Espírito divino,\nGrande Ensinador;\nVem, revela às nossas almas\nCristo, o Salvador!',
            estrofe2: 'Santo Espírito,\nOuve, com favor!\nEm poder e graça insigne,\nMostra o Teu amor!',
            estrofe3: 'Vem, destrói o que é falso,\nTudo o que é vão;\nVem, aos fracos concedendo\nPlena salvação!',
            estrofe4: 'Vem, reveste a Tua Igreja\nDe energia e luz;\nVem, atrai os pecadores\nAo Senhor Jesus.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 95,
            tb: 787,
            selecionado: true,
            estrofe1: 'Santo Espírito, enche a minha vida,\nPois por Cristo eu quero brilhar.\nSanto Espírito, enche a minha vida,\nUsa-me as almas a salvar!\nAleluia (3x) dou a Cristo, o Rei!\nAleluia (3x) dou ao Rei!',
            estrofe2: 'Santo Espírito, enche a minha vida\nQuando a Tua Palavra eu ler.\nSanto Espírito, enche a minha vida,\nQuero comunhão contigo ter!',
            estrofe3: 'Santo Espírito, enche a minha vida\nQuando em nome de Cristo eu falar.\nSanto Espírito, enche a minha vida,\nPara eu com fé testemunhar!',
            estrofe4: 'Santo Espírito, enche a minha vida,\nCapacita-me mais, meu Senhor.\nSanto Espírito, enche a minha vida,\nDá-me mais do meu primeiro amor!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 96,
            tb: 33,
            selecionado: true,
            estrofe1: 'Fiel promessa Deus nos deu,\nDe visitar o povo Seu.\nOh! vem, poder pentecostal,\nDar-nos valor, livrar do mal.',
            estrofe2: 'Reunidos todos a orar,\nA bênção santa a esperar,\nVem este templo agora encher,\nConsolador, com Teu poder.',
            estrofe3: 'O que buscar irá encontrar\nA força a fim de não pecar.\nQual vento impetuoso, assim,\nManifestar-Te vem, enfim!',
            estrofe4: 'Minha alma aspira por Jesus,\nPor Sua graça, Sua luz;\nMeu coração vem aquecer\nE, entronizado, aí viver.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 97,
            tb: 335,
            selecionado: true,
            estrofe1: 'Vem, Cristo, vem-nos inflamar,\nVem, Senhor! (3x)\nCom fogo vem-nos batizar,\nVem, Senhor! (3x)\nA Ti suplicamos com ardor\nPor Teu Espírito de amor,\nO qual prometeste, ó Salvador,\nVem, Senhor! (3x)',
            estrofe2: 'Vem, fogo, e inspira-nos aqui,\nVem, Senhor! (3x)\nA sempre e só viver por Ti,\nVem, Senhor! (3x)\nExtirpa a raiz de todo o mal\nE acende, ó chama divinal,\nA tocha de amor sacrifical,\nVem, Senhor! (3x)',
            estrofe3: 'Dá força ao nosso fraco ser,\nVem, Senhor! (3x)\nPor Ti queremos combater,\nVem, Senhor! (3x)\nProstrados aqui no Teu altar\nEm santa união a implorar,\nTeu povo, oh! vem santificar!\nVem, Senhor! (3x)',
            estrofe4: 'Sem Ti é inútil o fervor,\nVem, Senhor! (3x)\nTeu fogo nos dará valor,\nVem, Senhor! (3x)\nDerrama em nós o Teu poder,\nPara um novo Pentecoste haver!\nTeu reino queremos estender.\nVem, Senhor! (3x)',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 98,
            tb: 106,
            selecionado: true,
            estrofe1: 'Oh! proclamai: ―Há salvação!‖\nQue novas de prazer!\nOs pecadores têm perdão;\nOs mortos vão viver.\n',
            estrofe2: 'Vamos, pois, a bandeira erguer,\nBandeira de amor e perdão,\nE pelejar até morrer,\nCantando a salvação.',
            estrofe3: 'Fazei o eco ressoar\nDo pelo ao equador,\nE venham multidões cantar\n divinal favor.',
            estrofe4: 'Ao bom Cordeiro, santo Deus,\nLouvor aqui rendei;\nSim, proclamai, remidos Seus,\nO amor do grande Rei.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 99,
            tb: 209,
            selecionado: true,
            estrofe1: 'Oh! que fonte transbordante,\nMais profunda que o mar!\nEsse amor de Deus, imenso,\nCristo veio revelar.',
            estrofe2: 'Eu vi pérolas preciosas\nNo portão que me abriu.\nEm Seu sangue já lavado,\nMinha vida reluziu',
            estrofe3: 'Como pomba perseguida,\nEm perigo estava eu,\nMas Jesus jamais rejeita\nQuem buscar abrigo Seu.\nMaravilha incomparável\nÉ o perdão que me ofertou;\nEste é o tema do meu canto:\nSua graça, que me achou!',
            estrofe4: 'Quando, na manhã grandiosa,\nAo portão de luz chegar,\nEle estará aberto\nPara um redimido entrar.',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 100,
            tb: 565,
            selecionado: true,
            estrofe1: 'Perdão infinito! Oceano de amor,\nRepleto da graça do bom Salvador,\nTão livre, tão vasto, qual ondas do mar,\nMinha alma redime, vem sobre mim rolar.',
            estrofe2: 'Meus erros são tantos que dentro de mim\nEu choro em tristeza e mágoas sem fim;\nMeu pranto não salva, mas esse grande mar\nMinha alma transforma se sobre mim rolar.',
            estrofe3: 'De gênio inconstante e fortes paixões,\nCativo me sinto de mil tentações,\nMas salvo me encontro se a graça, sem par,\nDas ondas divinas, minha alma inundar.',
            estrofe4: 'Cansado e abatido, no inútil viver,\nNa luta que enfrento, o mal quer vencer,\nMas grande esperança encontro, enfim,\nSe o mar forte e puro rolar sobre mim.',
            estrofe5: 'Oceano divino, detenho o olhar\nNa vida fluente do teu revoltear;\nÀs margens chegando, sequioso e sem paz,\nÀ espera da bênção, não volto atrás.',
            estrofe6: 'No som retumbante das ondas do mar\nQue atinge meu ser e o faz exultar,\nEscuto o chamado do grande ―Eu Sou‖,\nMergulho nas águas e salvo estou!\nAgora, aleluia, com Deus viverei!\nMeus dias ao santo serviço darei,\nPois é sem limite o sangue remidor\nQue emana de Cristo Jesus, o Salvador!',
            som: '',
            coro: ''

        },
        {
            id: 101,
            tb: 714,
            selecionado: true,
            estrofe1: 'Igreja do Senhor,\nProclama com fervor:\n―Quem salva é só Jesus!‖\nA todos faze ouvir,\nInsiste em repetir:\n―Quem salva é só Jesus!‖',
            estrofe2: 'Não há poder igual\nQue vença todo o mal:\n―Quem salva é só Jesus!‖\nÉ vão querer viver\nCom Deus sem renascer:\n―Quem salva é só Jesus!‖',
            estrofe3: 'A lei não dá perdão:\nTraz morte e maldição.\n―Quem salva é só Jesus!‖\nMas Cristo a todos traz\nAmor, perdão e paz:\n―Quem salva é só Jesus!‖',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 102,
            tb: 486,
            selecionado: true,
            estrofe1: 'Estou satisfeito em Cristo,\nPois Ele minha alma salvou\nE, sobre o madeiro sofrendo,\nO Seu grande amor revelou!',
            estrofe2: 'Estou satisfeito em Cristo,\nOuvindo o que Ele me diz\nE crendo no Seu evangelho,\nAgora tornei-me feliz.',
            estrofe3: 'Estou satisfeito em Cristo\nE sei que vai logo voltar;\nVirá com poder glorioso,\nA fim de Seu povo levar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 103,
            tb: 378,
            selecionado: true,
            estrofe1: 'Eu Te sigo, sim! Te sigo,\nMeu Jesus e meu Senhor,\nSê meu Guarda, vem guiar-me\nNesta vida, Salvador.',
            estrofe2: 'Aleluia! Deus, em Cristo,\nMe livrou da maldição!\nCom minha alma renovada,\nTenho alegre o coração.',
            estrofe3: 'Muito tempo andei errante,\nMas a Tua voz ouvi,\nQue tão meiga me chamava;\nSem demora eu atendi.',
            estrofe4: 'Tu vieste ao meu encontro\nE, em Teus braços, com amor,\nMe tomaste, me salvaste!\nJá não tenho mais temor!',
            estrofe5: 'Guarda-me do vil pecado,\nDá-me um puro coração,\nPois, seguindo-Te, obediente,\nProvo ter a salvação.',
            som: '',
            coro: ''

        },
        {
            id: 104,
            tb: 580,
            selecionado: true,
            estrofe1: 'Oh! quão cego andei e perdido vaguei,\nLonge, longe do meu Redentor!\nEle a vida deu e Seu sangue verteu,\nSalvou um tão pobre pecador.',
            estrofe2: 'Foi na cruz, foi na cruz\nOnde, um dia, eu vi\nMeu pecado castigado em Jesus;\nFoi ali, por fé, que os olhos abri\nE agora me alegro em Sua luz.',
            estrofe3: 'Eu ouvia falar dessa graça sem par,\nQue do céu trouxe nosso Jesus.\nSurdo eu me fiz, converter-me não quis\nA Cristo, que expirou na cruz.',
            estrofe4: 'Mas um dia senti meu pecado e vi\nSobre mim a espada da lei;\nDe temor fugi, em Jesus me escondi,\nRefúgio seguro nEle achei.',
            estrofe5: 'Quão feliz foi, então, este meu coração,\nConhecendo a grandeza do amor\nQue levou Jesus a sofrer lá na cruz,\nA fim de salvar um pecador!',
            som: '',
            coro: ''

        },
        {
            id: 105,
            tb: 158,
            selecionado: true,
            estrofe1: 'Ouvi o Salvador dizer:\n―Vem descansar em Mim\nE confiante receber\nConforto e paz sem fim.‖\nFui a Jesus e Lhe entreguei\nMeu triste coração;\nAbrigo, paz e gozo achei,\nAchei consolação.',
            estrofe2: 'Ouvi o Salvador dizer:\n―De graça Eu sempre dou\nAs águas vivas; vem beber;\nDa vida a Fonte Eu sou.‖\nFui a Jesus e me prostrei,\nDa Fonte enfim bebi;\nJamais a sede sentirei,\nEstando sempre ali.',
            estrofe3: 'Ouvi o Salvador dizer:\n―Do mundo Eu sou a Luz;\nOh! vem a Mim, pois quero ser\nTeu guia desde a cruz.‖\nFui a Jesus e nEle achei\nO sol que brilha em mim;\nE nessa luz eu andarei\nAté da vida o fim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 106,
            tb: 471,
            selecionado: true,
            estrofe1: 'De um modo tão gentil, Jesus\nMinha alma veio resgatar\nE, da vergonha do pecar,\nJesus me levantou.',
            estrofe2: 'De um poço fundo me tirou,\nCom ternas mãos me elevou\nDa escura noite à plena luz;\nLouvo a Jesus, que me salvou!',
            estrofe3: 'Por muito tempo me chamou\nNa agitação do meu viver,\nMas Seu perdão compreendi,\nA Sua paz senti.',
            estrofe4: 'Jesus, na cruz, sofrendo em dor,\nSe importou com meu viver\nE, do abandono, em aflição,\nSalvou-me por amor.\nAgora eu vivo bem melhor,\nE a paz que sinto o confirmou;\nNem mesmo sei como explicar\nPor que me transformou!',
            estrofe5: '',
            som: '',
            coro: ''

        },
        {
            id: 107,
            tb: 158,
            selecionado: true,
            estrofe1: 'Oh! maravilha! o Redentor\nAo mundo indigno amou!\nQuão admirável salvação\nJesus por nós ganhou!',
            estrofe2: 'Por isso agora, pela fé,\nVivemos sem temor;\nPureza e retidão nos traz\nA graça do Senhor.',
            estrofe3: 'Vitória Deus concede aqui,\nTriunfo sobre o mal;\nEle assegura no porvir\nA glória perenal.',
            estrofe4: 'Ó salvos! vamos para os céus,\nAlegres em Jesus!\nPorque já temos redenção,\nEterna paz e luz.',
            estrofe5: '',
            som: '',
            coro: 'Sim! foi amor, insigne amor,\nAmor do excelso Deus,\nQue à triste cruz levou Jesus,\nO Santo Rei dos céus.'

        },
        {
            id: 108,
            tb: 741,
            selecionado: true,
            estrofe1: 'Por mim sofreu meu Salvador,\nGlória, glória ao meu Jesus!\nPor isso louvo ao Redentor,\nGlória, glória ao meu Jesus!',
            estrofe2: 'Jesus, Jesus, meu Salvador!\nTeu nome é doce, ó Senhor.\nAbrase-me Teu santo amor!\nGlória, glória a Ti, Jesus!',
            estrofe3: 'Os meus pecados carregou,\nGlória, glória ao meu Jesus!\nE sobre a cruz me resgatou,\nGlória, glória ao meu Jesus!',
            estrofe4: 'Eu sei que perdoado estou,\nGlória, glória ao meu Jesus!\nÉ certo que ao céu eu vou,\nGlória, glória ao meu Jesus!',
            estrofe5: 'E, quando a guerra aqui findar,\nGlória, glória ao meu Jesus!\nNo céu, melhor irei cantar,\nGlória, glória ao meu Jesus!',
            som: '',
            coro: ''

        },
        {
            id: 109,
            tb: 666,
            selecionado: true,
            estrofe1: "Maravilhoso e sublime é pra mim,\nSim, nunca me esquecerei!\nDia glorioso em que Cristo eu vi\nE o coração Lhe entreguei.\nOh! quão precioso amigo Ele é,\nSalvou-me da perdição,\nTirando as culpas, das trevas livrando\nE trazendo-me pleno perdão.",
            estrofe2: "A paz do céu encheu meu coração\nQuando Jesus me deu a salvação.\nMinha alma, então, lavou,\nE a luz em mim raiou.\nA paz do céu encheu meu coração.",
            estrofe3: "Grande esperança Jesus já me deu,\nQue não desvanecerá,\nHá uma gloriosa morada no céu\nQue breve minha será,\nTudo porque, nesse dia feliz,\nO meu Senhor aceitei;\nGrandes riquezas e bênçãos celestes\nDas mãos divinais alcancei.",
            estrofe4: "",
            estrofe5: "",
            som: "A paz do céu encheu meu coração",
            coro: "A paz do céu encheu meu coração\nQuando Jesus me deu a salvação.\nMinha alma, então, lavou,\nE a luz em mim raiou.\nA paz do céu encheu meu coração."
        },
        {
            id: 110,
            tb: 595,
            selecionado: true,
            estrofe1: 'Salvo estou! Salvo estou!\nLiberdade achei.\nPor mercê me comprou\nMeu Jesus e meu Rei.',
            estrofe2: 'Quanto amor, quanto amor\nRevelou meu Jesus!\nTenho fé, plena fé,\nGozo, paz nesta luz.\n',
            estrofe3: 'Quis Jesus, quis Jesus\nMeus pecados lavar.\nGrande é Seu poder\nPara todos salvar.',
            estrofe4: 'Sou feliz, mui feliz,\nNovo homem que sou,\nNo meu ser brilha o sol,\nSempre alegre estou!',
            estrofe5: '',
            som: '',
            coro: 'Aleluia, aleluia,\nAleluia, glória a Cristo,\nAleluia, (3x) amém!'

        },
        {
            id: 111,
            tb: 112,
            selecionado: true,
            estrofe1: "Longe de Jesus andei, em tristeza e escuridão,\nDo pecado escravo me vi;\nNessa estrada segui sem jamais imaginar\nO fim trágico e cruel que havia aí!",
            estrofe2: "No futuro não pensei nem na minha perdição\nE o convite de Cristo ignorei;\nSó no mundo minha alma encontrava atração,\nMas, um dia, a cruz de Cristo contemplei!",
            estrofe3: "Entregando a Jesus minha vida, o meu ser,\nQue alegria e paz eu senti!\nBem depressa o Espírito Santo revelou,\nDeste mundo, os perigos que eu não vi!",
            estrofe4: "Sigo, agora, bem feliz, no caminho para o céu;\nVida eterna em Cristo alcancei!\nSalvo estou, isso eu sei, pelo sangue de Jesus;\nPronto estou para o encontro com o Rei!",
            som: "",
            coro: "Jesus, das trevas, trouxe-me pra luz,\nE eu gozo Seu perdão!\nJesus, das trevas, trouxe-me pra luz,\nGloriosa salvação!"
        },
        {
            id: 112,
            tb: 197,
            selecionado: true,
            estrofe1: 'Andava eu perdido,\nMas Cristo me achou.\nMeu coração, alegre, louva a Deus.  ) bis\nGlória a Cristo, que me salvou!',
            estrofe2: 'Estava eu caído\nJesus me levantou.\nMeu coração, alegre, louva a Deus.   )  bis\nGlória a Cristo, que me salvou!',
            estrofe3: 'Eu era um escravo,\nJesus me libertou.\nMeu coração, alegre, louva a Deus.  )bis\nGlória a Cristo, que me salvou!',
            estrofe4: 'Vivia muito triste,\nJesus me transformou.\nMeu coração, alegre, louva a Deus.  )bis\nGlória a Cristo, que me salvou!',
            estrofe5: 'Jesus também te ama,\nJesus também te chama.\nConfia nele agora, de coração,  )bis\nE tu terás a salvação',
            som: '',
            coro: ''
        },
        {
            id: 113,
            tb: 611,
            selecionado: true,
            estrofe1: 'Tempos houve em que vivi sem Deus\nNão andei nos bons caminhos seus\nNem quis dirigir os passos meus\nAo salvador',
            estrofe2: 'Sua voz, enfim, me despertou,\nSeu amor meu coração ganhou;\nPor seu sangue foi que me salvou\nMeu salvador!',
            estrofe3: 'Já confesso a Cristo, meu senhor.\nHoje nele tenho um protetor\nE me alegro no divino amor\nDo meu Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! que grande é esta redenção\nTão completa e livre a salvação.\nNo Calvário encontrei amor,\nLibertação'
        },
        {
            id: 114,
            tb: 28,
            selecionado: true,
            estrofe1: 'Quão admirável essa cruz\nEm que expirou a glória o Rei,\nDesprezo, então, a falsa luz\nA qual com tanto ardor amei',
            estrofe2: 'Na face dele, ó alma, vês\nTristeza e amor, em santa união.\nSinais profundos das mercês\nDo seu bondoso coração.',
            estrofe3: 'Se o mundo inteiro fosse meu\nNão bastaria dar\nAquele que por mim sofreu....\nA quem meu ser vou ofertar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Meu Jesus morreu, por mim, na cruz,\nO seu sangue ele derramou,\nMas ressucitou, vivo está meu Jesus;\nEu tenho paz, e salvo estou.'
        },
        {
            id: 115,
            tb: 194,
            selecionado: true,
            estrofe1: 'Gozos da terra, adeus, tenho Jesus.\nPaz e perdão são meus, tenho Jesus.\nAqui só posso ter breve, fugaz prazer\nQue ali vou esquecer.\nTenho Jesus.',
            estrofe2: 'Minha alma não tenteis, tenho Jesus.\nSirvo ao melhor dos reis, tenho Jesus.\nFestas do mundo, adeus, falsos os gozos teus,\nMeu regozijo é Deus!\nTenho Jesus.',
            estrofe3: 'Vida mortal, adeus, tenho Jesus.\nRejeito os braços teus, tenho Jesus.\nO Bem-Amado achei, meu coração lhe dei\nNele me alegrarei!\nTenho Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 116,
            tb: 357,
            selecionado: true,
            estrofe1: 'Serenamente e com amor\nJesus se aproxima\nE, ao trazer saúde e paz,\nOs corações anima.',
            estrofe2: 'Glorioso na ressureição,\nEu creio nele e vivo.\nEu amo o nome do Senhor\nE o louvo em tom altivo.',
            estrofe3: 'Não tenho mais condenação,\nEstou justificado.\nMeu coração ja goza paz,\nLiberto do pecado.',
            estrofe4: 'Os teus pecados quer perdoar,\nEscuta seu chamado\nE segue salvo para o céu,\nReinando ao seu lado.',
            estrofe5: '',
            som: '',
            coro: 'Que belo som angelical,\nÉ o mais doce canto aqui.\nGlória ao nome sem igual:\nCristo, Jesus Cristo!'
        },
        {
            id: 117,
            tb: 166,
            selecionado: true,
            estrofe1: 'Preso a um pecado fardo,\nTriste, com vergonha e dor,\nNo caminho onde andava,\nMe alcançou a mão do Senhor.',
            estrofe2: 'Desde que encontrei meu Cristo,\nVivo em paz e sem temor\nE, um dia, lá na glória,\nPra sempre cantarei Seu louvor.',
            estrofe3: 'O que fez por mim, meu Mestre\nQuer a todos conceder;\nNão importa qual o fardo,\nHá, em Seu toque, todo o poder!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Tocou-me, sim, tocou-me,\nMinha alma encheu com o seu louvor;\nNum instante me transformou\nO toque do meu salvador.'
        },
        {
            id: 118,
            tb: 819,
            selecionado: true,
            estrofe1: 'Achei um bom amigo, Jesus, o salvador,\nO escolhido dos milhares para mim\nDos vales é o Lírio, é o forte Redentor,\nPurifica-me e guarda até o fim.\nConsolo precioso, refúgio contra o mal,\n Que a minha ansiedade quer tomar.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.',
            estrofe2: 'Levou-me as dores todas, as mágoas lhe entreguei,\nFortaleza ele é na tentação\nDeixei por ele tudo, os ídolos queimei,\nEle me conserva o santo coração.\nQue o mundo me abandone, persiga o tentador,\nMeu Jesus me guia até da vida o fim.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.',
            estrofe3: 'Já mais virá a deixar-me e não me faltará,\nSe fiel obediência lhe prestar.\nMuralha é de fogo, que assim me guardará,\nDesde agora até a luta aqui findar.\nEntão, ao céu subindo, na glória O verei,\nOnde nem a dor nem a morte hão de existir.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Consolo precioso, Refúgio contra o mal\nQue a minha ansiedade quer tomar.\nDos vales é o Lírio, a Estrela da manhã,\nO escolhido dos milhares para mim.'
        },
        {
            id: 119,
            tb: 675,
            selecionado: true,
            estrofe1: 'Deixei nas mão de Cristo, meu Senhor,\nTodo o meu pecado, meu pavor;\nQuando O vi pregado sobre a cruz,\nPor amor sofrendo meu Jesus,\nO perdão a Ele eu pedi recebi\nIsenção da pena que, outrosim, mereci.',
            estrofe2: 'Entrego tudo a Cristo! Seu amor\nEm sorrisos muda a minha dor,\nTransfigura as trevas em clarão\nE de flores veste a solidão.\nNele o débil ousa confiar. Quem marchar\nCom Jesus seguro pode andar sem falhar.',
            estrofe3: 'Entrego tudo a Cristo! Pois quem crê\nFirme espera dele a mercê;\nAcolhido e salvo, o coração\nPulsa de alegria e gratidão;\nPor Jesus alcançar redenção, todo o bem,\nGraça e paz aqui, e glória vem no além!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 120,
            tb: 527,
            selecionado: true,
            estrofe1: 'Oh! maravilha do amor de Jesus,\nDesse admirável amor sem igual!\nCristo penou e morreu numa cruz,\nPara salvar-me da morte iternal.',
            estrofe2: 'Oh! eu jamais poderei duvidar\nDesse insodável amor de Jesus,\nVeio trazer-me alegria e paz,\nDando-me entrada no reino de luz.',
            estrofe3: 'Vou-me entregar a Jesus e, fiel,\nQuero fazer conhecido esse amor\nQue me salvou de uma pena cruel;\nQuero viver para o meu Salvador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, meu Mestre, veio por mim,\nVeio por mim, veio por mim;\nCristo, meu Mestre, veio por mim,\nSim, para salvar.'
        },
        {
            id: 121,
            tb: 83,
            selecionado: true,
            estrofe1: "Pecador outrora fui, porém\nGraça eu encontrei em Jesus;\nDeu-me francamente Seu perdão\nE esta paz que o céu produz!",
            estrofe2: "Ajoelhado diante de uma cruz,\nEsperei castigo de Deus,\nMas, surpreso, vi o céu se abrir\nE meu nome reluzir!",
            estrofe3: "―Pela graça salvo‖, escrito está,\nDe alegria o ser me inundou!\nTenho a salvação e agora sei:\nCidadão do céu eu sou!",
            estrofe4: "",
            som: "",
            coro: "Há um novo nome lá na glória,\nÉ o meu, oh! sim, o meu!\nE os anjos cantam esta história:\n―O pródigo volveu!‖\nHá um novo nome lá na glória,\nÉ o meu, oh! sim, o meu!\nPois que fui perdoado,\nSou ao céu levado;\nLá morar eu vou!"
        },
        {
            id: 122,
            tb: 669,
            selecionado: true,
            estrofe1: "Senti um novo toque em minha alma e coração,\nA graça e o poder de Deus, amor e compaixão.",
            estrofe2: "Agora compreendo a grandeza do Senhor,\nA maravilha divinal do Seu eterno amor.",
            estrofe3: "Palavras são inúteis quando tento explicar\nAquilo que eu sinto, mas a todos vou contar.",
            estrofe4: "",
            som: "",
            coro: "Transformação! Que mudança em mim!\nJesus me transformou, Seu Espírito enviou,\nPois tocou-me e encheu-me com amor."
        },
        {
            id: 123,
            tb: 165,
            selecionado: true,
            estrofe1: "Outrora perdido andava,\nLonge, bem longe de Deus.\nSem paz, sem perdão, sem prazer me achava,\nSem pátria, sem rumo, sem Deus.",
            estrofe2: "O amor de Jesus, meu bom Mestre,\nMeu coração transformou.\nFeliz cantarei e direi hoje e sempre\nQue meu Salvador me amou.",
            estrofe3: "E quando findar a jornada\nJunto ao Senhor hei de estar.\nNa pátria celeste, a vida esperada\nEntão fruirei sem cessar.",
            estrofe4: "Jesus hoje mesmo convida:\n―Vem, vem a Mim sem tardar.\nTeu ser gozará remissão, nova vida,\nTerás alegria sem par.",
            som: "",
            coro: "Eu sei que a vida\nÉ luta renhida,\nMas com ternura\nJesus me guia.\nCom Cristo, meu Rei,\nFeliz guardarei\nA comunhão\nE a bênção no meu coração."
        },
        {
            id: 124,
            tb: 37,
            selecionado: true,
            estrofe1: "Que dia alegre em que aceitei,\nJesus, a Tua salvação!\nO gozo do meu coração\nEu mais e mais publicarei.",
            estrofe2: "Completa a grande expiação,\nPertenço, agora, a Ti, Senhor!\nChamou-me a voz do Teu amor,\nE em Ti eu tenho paz, perdão.",
            estrofe3: "Sincero voto, ó santo Deus,\nA cada dia hei de afirmar\nE, além da morte, exultar\nPor ser dos redimidos Teus.",
            estrofe4: "",
            som: "",
            coro: "Quão feliz me tornei,\nPois Teu amor me libertou!\nTu me ensinaste a vigiar\nE, em Ti confiando, sempre orar.\nSou feliz, meu Jesus,\nPois Teu amor me libertou!"
        },
        {
            id: 125,
            tb: 60,
            selecionado: true,
            estrofe1: "Que alicerce tens para construir\nUma casa que possa resistir\nEssa tempestade que assoprará\nE a mal fundada casa abaterá?",
            estrofe2: "Nossa morada na Rocha está,\nFirme e segura ela ficará;\nQuando o temporal contra ela der,\nHá de resistir e permanecer.",
            estrofe3: "Como a areia é sempre alicerce vão,\nSão também as obras na salvação;\nPois aquele que em si mesmo crê,\nNo Senhor Jesus, decerto, não tem fé.",
            estrofe4: "Os cristãos, porém, que deveras crêem,\nPelas obras mostram a fé que têm;\nEm confiança plena no Salvador,\nNa maior procela, ei-los sem temor!",
            som: "",
            coro: ""
        },
        {
            id: 126,
            tb: 404,
            selecionado: true,
            estrofe1: "Sabes tu por que eu amo a Cristo?\nPois a mim primeiro Ele amou\nE deixou Seu trono lá na glória,\nCom os pecadores habitou.",
            estrofe2: "Sabes tu por que eu amo a Cristo?\nÉ que tantas dores suportou,\nE porque me sinto mui indigno\nDo imenso amor que me mostrou.",
            estrofe3: "Sabes tu por que eu amo a Cristo?\nEle meus pecados perdoou,\nOs temores, culpas e tristezas\nMeu amado Salvador tirou.",
            estrofe4: "Já conheces meu amor a Cristo.\nNão desejas dar teu coração\nA Jesus, que agora oferece\nInefável, plena salvação?",
            som: "",
            coro: "Eis por que eu tanto amo\nMeu bendito Salvador.\nSou por Ele redimido\nE guardado com amor."
        },
        {
            id: 127,
            tb: 162,
            selecionado: true,
            estrofe1: "Buscou-me com ternura\nJesus, o bom Pastor;\nAchou-me na miséria,\nSalvou-me com amor;\nCantaram anjos lá nos céus\nEm harmonia: ―Glória a Deus‖.",
            estrofe2: "Ferido, abandonado\nJesus me socorreu\nE disse então: ―Achei-te,\nDe agora em diante és Meu‖.\nTão meiga voz jamais ouvi,\nPrazer maior jamais senti.",
            estrofe3: "Jesus mostrou-me as chagas\nQue em meu lugar sofreu,\nOs pregos, os espinhos\nE a cruz em que morreu.\nO que O levou a Se entregar\nPor mim e afrontas suportar?",
            estrofe4: "Enquanto as horas passam,\nEu tenho gozo e paz\nE aguardo aquele dia\nQue glória infinda traz;\nVerei Jesus no céu reinar\nNo esplendor do eterno lar!",
            som: "",
            coro: "Oh! que amor glorioso!\nPreço tão grandioso\nQue Jesus por mim na cruz pagou;\nInaudita graça me mostrou."
        },
        {
            id: 128,
            tb: 203,
            selecionado: true,
            estrofe1: "Em Cristo achei o meu Salvador,\nDe amor fiel, veraz;\nNão cessarei de Lhe dar louvor,\nPois tenho a salvação e paz.",
            estrofe2: "Jesus me achou em pecado e dor,\nSem ter consolação;\nCom braço forte e real amor,\nErgueu-me e deu libertação.",
            estrofe3: "Da morte eterna me resgatou,\nDa dura escravidão;\nNa Rocha eterna seguro estou;\nCantando vou, com gratidão.",
            estrofe4: "",
            som: "",
            coro: "Salvo por Cristo sou,\nSalvo por Quem me amou;\nTão grande paz Ele agora me traz,\nPorque salvo estou."
        },
        {
            id: 129,
            tb: 164,
            selecionado: true,
            estrofe1: "Depois que Cristo me salvou,\nEm céu o mundo se tornou;\nAté em meio do sofrer,\nEu tenho paz no meu viver.",
            estrofe2: "Mui longe outrora eu via o céu,\nMas, quando Cristo me valeu,\nFeliz senti meu coração\nEntrar no céu da retidão.",
            estrofe3: "Bem pouco importa eu habitar\nEm alto monte, à beira-mar,\nEm casa ou gruta, boa ou ruim:\nÉ sempre céu com Cristo em mim!",
            estrofe4: "",
            som: "",
            coro: "Oh! Aleluia! Sim, eu sei!\nÉ céu fruir perdão sem par!\nE, com Jesus, o eterno céu\nEu desde agora irei gozar."
        },
        {
            id: 130,
            tb: 367,
            selecionado: true,
            estrofe1: "Vem, Senhor, do bem a fonte,\nVem, celeste Redentor,\nAjudar-me a entoar-Te\nDignos hinos de louvor!\nTu, Jesus, por mim morreste,\nQuero só por Ti viver;\nQuero, em todos os momentos,\nTua bênção receber.",
            estrofe2: "Era ovelha desgarrada\nQuando Cristo me buscou;\nPara me livrar da morte,\nO Seu sangue derramou;\nNo Seu grande sacrifício\nPaz, perdão e vida achei;\nRedimido, eternamente,\nSua glória fruirei.",
            estrofe3: "Dessa graça, ó Cristo amado,\nSou perpétuo devedor;\nMais e mais a Ti me prenda,\nÓ Jesus, o Teu amor.\nSou ingrato, reconheço,\nPeço, meu Senhor, perdão;\nVem livrar-me do pecado\nE reger meu coração.",
            estrofe4: "",
            som: "",
            coro: ""
        },
        {
            id: 131,
            tb: 761,
            selecionado: true,
            estrofe1: "Em noite tenebrosa\nVaguei sem salvação\nAté que Cristo me encontrou\nNesse dia feliz do perdão!",
            estrofe2: "Da carga do pecado\nLivrou meu coração,\nA graça excelsa me ofertou\nNesse dia feliz do perdão!",
            estrofe3: "Lavou-me as culpas todas,\nEu gozo a redenção,\nTornou-me alegre o coração\nNesse dia feliz do perdão.",
            som: "",
            coro: "Buscou-me, buscou-me\nQuando perdido na escuridão,\nMeu Cristo achou-me:\nDia feliz do perdão!"

        },
        {
            id: 132,
            tb: 751,
            selecionado: true,
            estrofe1: "Cristo, o Mestre, sempre há de amar-me,\nE dEle o mal não pode afastar-me;\nDeu Sua vida pra me salvar,\nDEle agora sou.",
            estrofe2: "Quando perdido e desgarrado,\nEu recebi perdão do pecado;\nVida eterna me garantiu,\nDEle agora sou.",
            estrofe3: "Que alegria, Cristo salvou-me,\nNão sou escravo, pois libertou-me;\nPelo Seu sangue me redimiu,\nDEle agora sou.",
            estrofe4: "",
            som: "",
            coro: "Eu sou de Cristo agora,\nCristo é meu também,\nNão só em meu viver aqui,\nMas para sempre, amém."
        },
        {
            id: 133,
            tb: 725,
            selecionado: true,
            estrofe1: "Eu, perdido pecador,\nLonge do meu Jesus,\nJá me achava sem vigor,\nA perecer sem luz;\nMeu estado Cristo viu,\nDando-me Sua mão,\nE salvar-me conseguiu\nDa perdição.",
            estrofe2: "Sim, Cristo, o Salvador,\nMe transformou.",
            estrofe3: "Minha vida, todo o ser,\nQuero-Lhe consagrar;\nAo Seu lado vou viver,\nO Seu amor cantar;\nA mensagem transmitir\nAos que em pecado estão.\nVenham, todos, já fruir\nA salvação.",
            som: "Deus me amou e me livrou;\nO Seu imenso amor\nMe transformou.\nFoi Seu poder, o Seu querer.",
            coro: ""
        },
        {
            id: 134,
            tb: 654,
            selecionado: true,
            estrofe1: "Junto à cruz do fiel Senhor,\nEis-me aos pés do bom Redentor,\nEle atendeu ao meu clamor;\nGlória ao meu Jesus!",
            estrofe2: "Que maravilha! De Cristo eu sou!\nTudo, de graça, me perdoou,\nFui redimido e livre estou;\nGlória ao meu Jesus!",
            estrofe3: "Junto à cruz, tenho salvação,\nGozo perfeito, real perdão,\nTenho pureza no coração;\nGlória ao meu Jesus!",
            estrofe4: "Vem sem tardar, pobre pecador,\nCristo te espera com grande amor,\nOh! não rejeites o Salvador;\nGlória ao meu Jesus!",
            som: "",
            coro: "Glória ao meu Jesus! (bis)\nSalvo estou! Isso agora eu sei.\nGlória ao meu Jesus!"
        },
        {
            id: 135,
            tb: 833,
            selecionado: true,
            estrofe1: "Eu vou contar o que meu Deus,\nEm Cristo, fez por mim na cruz:\nBuscou-me com Seu grande amor,\nAlcançou meu coração aflito;\nEu vou contar o que meu Deus\nA todo o homem pode dar:\nA paz que há em começar\nUma vida nova e mais perfeita.",
            estrofe2: "Eu vou contar do Seu amor\nQue, terno, vem-me envolver,\nDo Seu poder que me sustém,\nDo Seu sangue que me purifica.\nA todos quero transmitir\nQue Cristo já nos resgatou,\nEm homens livres nos tornou\nE nos deu o Seu perdão eterno.",
            estrofe3: "Eu vou contar o que meu Deus\nAinda quer oferecer:\nPoder em cada provação\nE fidelidade sem limites;\nEu vou falar do que há por vir\nNo dia em que O encontrar\nNo bom lugar que preparou\nNo Seu lar de alegria infinda.",
            estrofe4: "",
            som: "",
            coro: "Quero contar o que o Senhor já fez,\nO que Ele fez por mim:\nMe reergueu e me restaurou,\nDeu-me o Seu amor;\nQuero contar o que o Senhor já fez\nE o que poderá fazer:\nPela salvação que te dará,\nFazer-te viver!"
        },
        {
            id: 136,
            tb: 150,
            selecionado: true,
            estrofe1: "Sublime amor Deus tem por mim,\nPois digna-Se de ouvir\nMeu contristado coração\nE as mágoas faz sair.\nEmbora não merecedor\nDo Seu imenso amor,\nNas Suas mãos seguro estou,\nConfio no Senhor.",
            estrofe2: "Sublime amor Deus tem por mim!\nEntregue ao plano Seu,\nEu vivo em paz e bem feliz\nAté chegar ao céu.\nO Seu amor me libertou\nDo mal e do temor;\nHá doce harmonia em mim\nE um canto de louvor.",
            estrofe3: "Sublime amor Deus tem por mim,\nTransforma a noite em luz,\nE andando em Sua comunhão\nÉ leve a minha cruz.\nConhece o Pai meus poucos dons,\nQue mui humildes são,\nMas Ele quer o meu amor\nEm grata devoção.",
            estrofe4: "",
            som: "",
            coro: "Eu sei, Deus é amor!\nOh! sim, sublime amor!\nEntregou Seu Filho\nPara todos nós salvar.\nEu sei, Deus é amor."
        },
        {
            id: 137,
            tb: 440,
            selecionado: true,
            estrofe1: "Longe do Senhor andava,\nTriste e cheio de temor;\nPor Jesus não perguntava\nNem queria Seu amor.",
            estrofe2: "No juízo não pensava,\nNem na minha perdição,\nNem minha alma desejava\nA eterna salvação.",
            estrofe3: "Já cansado do pecado,\nFui aos pés do Salvador,\nE então caiu o fardo\nDe tristezas e de dor.",
            estrofe4: "Como é maravilhoso\nPertencer ao meu Jesus,\nTer a graça, o repouso,\nE ficar ao pé da cruz!",
            som: "",
            coro: "Mesmo assim Jesus me ama,\nE não posso explicar!\nEis que Cristo agora chama\nPara hoje te salvar."
        },
        {
            id: 138,
            tb: 786,
            selecionado: true,
            estrofe1: "Que mudança admirável na vida provei,\nPois Cristo minha alma salvou!\nSim, um gozo indizível em Deus eu achei,\nPois Cristo minha alma salvou!",
            estrofe2: "Eu deixei de trilhar a vereda do mal,\nPois Cristo minha alma salvou!\nJá desfruto com gozo o favor divinal,\nPois Cristo minha alma salvou.",
            estrofe3: "Sobre o vale da morte eis que brilha uma luz,\nPois Cristo minha alma salvou.\nSim, avisto meu Lar no porvir com Jesus,\nPois Ele minha alma salvou!",
            estrofe4: "",
            som: "",
            coro: "Com Cristo no meu coração, (bis)\nSou feliz com a vida que Ele me dá,\nPois vive no meu coração."
        },
        {
            id: 139,
            tb: 138,
            selecionado: true,
            estrofe1: "Quem do céu por mim desceu,\nTudo em meu lugar sofreu\nE por mim, na cruz, morreu?\nFoi Cristo! Meu Cristo!",
            estrofe2: "Quem buscou com Seu amor\nEsta ovelha sem pastor?\nQuem quis ser meu Salvador?\nFoi Cristo! Meu Cristo!",
            estrofe3: "Quem com branda compaixão\nComoveu meu coração,\nDando plena salvação?\nFoi Cristo! Meu Cristo!",
            estrofe4: "Quem é digno de louvor?\nQuem merece o meu amor?\nÉ Jesus, meu Salvador,\nMeu Cristo! Meu Cristo!",
            som: "",
            coro: "As minhas trevas dissipou!\nMinha alma enferma já sarou!\nMeu coração Ele alegrou!\nMeu Cristo! Meu Cristo!"
        },
        {
            id: 140,
            tb: 125,
            selecionado: true,
            estrofe1: "Oh! quanto fez Jesus por mim!\nSalvou-me do pecado!\nAté a morte, triste fim,\nPor Ele eu fui amado.\nCom Deus, o Pai, agora está\nJesus, meu Advogado;\nMorada eterna me dará\nMeu glorioso Amado!",
            estrofe2: "Defende como Protetor,\nAlenta o fatigado!\nE sobre mim, com terno amor,\nVigia com cuidado.\nOs rogos que humildes são\nEscuta com agrado;\nTranqüilo, o débil coração\nRepousa em meu Amado!",
            estrofe3: "Eu vou entrar qual vencedor\nTriunfante ali na glória!\nIrei cantar o Seu louvor,\nNum hino de vitória!\nA redenção exaltarei,\nLembrando a doce história\nDo meu glorioso e grande Rei,\nSenhor da eterna glória!",
            estrofe4: "",
            som: "",
            coro: "Cristo! meu Cristo!\nSeu nome é doce, amado!\nDesejo ver meu Salvador,\nPor Quem fui libertado!"
        },
        {
            id: 141,
            tb: 375,
            selecionado: true,
            estrofe1: "Eu, nas trevas, vagueava\nEm profunda solidão,\nMinha alma estava morta,\nE sem fé, meu coração.",
            estrofe2: "Triste é viver nas trevas,\nSem perdão, sem Salvador!\nBela a vida, mas a vida\nEm que há luz e paz e amor.",
            estrofe3: "Eis que, um dia, a Sua graça\nDeus mandou e a doce luz;\nVi, então, já preparado\nO caminho por Jesus.",
            estrofe4: "Minha antiga natureza\nContra a retidão lutou,\nMas Jesus comigo estava,\nSantamente me guiou.\n\nFoi um novo nascimento\nQue o Senhor me concedeu!\nE eu louvores rendo a Cristo,\nNova vida e luz me deu.",
            som: "",
            coro: ""
        },
        {
            id: 142,
            tb: 381,
            selecionado: true,
            estrofe1: "Cada coração procura\nOnde possa descansar,\nMas descanso verdadeiro\nSó Jesus lhe pode dar.",
            estrofe2: "Cristo sempre, eternamente,\nCristo, Salvador e Rei,\nMeu amigo, meu abrigo,\nTudo, tudo nEle achei!",
            estrofe3: "O meu coração Te entrego,\nÓ Jesus, meu Salvador,\nPara que Tu sempre sejas\nO seu Rei e seu Senhor!",
            estrofe4: "Em minh’alma tudo é novo\nDesde que encontrei Jesus,\nUm amigo incomparável,\nQue me guarda e me conduz!\n\nSe teu coração se inquieta,\nTens a alma em aflição,\nNão relutes, meu amigo:\nBusca em Cristo a salvação!",
            som: "",
            coro: ""
        },
        {
            id: 143,
            tb: 70,
            selecionado: true,
            estrofe1: "Que surpreendente graça é\nA graça de Jesus!\nEu cego fui, perdido, vil,\nMas dela veio a luz.",
            estrofe2: "Tal graça me levou o temor\nAssim que em Deus eu cri,\nMe fez feliz, me transformou,\nEu nunca a mereci.",
            estrofe3: "Por provas duras passarei\nNa peregrinação,\nMas pela graça irei morar\nNa eternal mansão.",
            estrofe4: "E, estando nesse Lar, no além,\nEm meio à luz sem par,\nA eternidade usarei\nPra Deus, o Pai, louvar.",
            som: "",
            coro: ""
        },
        {
            id: 144,
            tb: 381,
            selecionado: true,
            estrofe1: "Cantarei a linda história\nDe Jesus, o Salvador,\nQue deixou Seu lar na glória\nPor amar o pecador.",
            estrofe2: "Eu, perdido, Cristo achou-me\nLonge, longe do meu lar,\nAbraçou-me e tomou-me\nPara eu com Ele estar.",
            estrofe3: "Jesus Cristo encontrou-me\nQuando prestes a morrer,\nSua graça alcançou-me\nE curou-me com poder.",
            estrofe4: "Aflições ainda tenho,\nSofrimento e dissabor,\nMas a Ele eu tudo exponho,\nE me livra com amor.",
            som: "",
            coro: "Cantarei a linda história\nDe Jesus, meu Salvador;\nCantarei na Sua glória\nCom os santos, com fervor."
        },
        {
            id: 145,
            tb: 160,
            selecionado: true,
            estrofe1: "Veio Jesus a este mundo vil\nPara buscar a ti;\nFoi rejeitado por gente hostil\nPara salvar a ti,\nGlórias ali no céu deixou,\nIngratidão no mundo achou,\nTudo Ele fez porque te amou,\nPara salvar a ti.",
            estrofe2: "O teu castigo Jesus levou\nPara salvar a ti;\nTudo na cruz Ele consumou\nPara remir a ti.\nQuem dentre os homens compreendeu\nTodas as dores que sofreu,\nA condição em que morreu\nPara salvar a ti?",
            estrofe3: "Tudo isso Deus fez em teu favor\nPara salvar a ti;\nChama-te agora com terno amor\nPara perdoar a ti.\nDeves chegar em contrição,\nTendo certeza do perdão;\nCristo te estende a Sua mão\nPara salvar a ti.",
            estrofe4: "Oh! que alegria, que gozo e paz\nTer salvação de Deus\nE nova vida que satisfaz\nA alma que busca os céus!\nLivre das culpas do pecar,\nLonge da dor e do chorar,\nTendo certeza de gozar\nA redenção de Deus!",
            som: '',
            coro: "Glória, glória, demos ao Salvador!\nGlória, glória, por Seu tão grande amor!\nGlória, glória, temos a paz com Deus!\nGlória, glória, vamos cantar nos céus.",
        },
        {
            id: 146,
            tb: 703,
            selecionado: true,
            estrofe1: "A mensagem vem de Deus: Cristo é Salvador! Ó, clamai, vós, filhos Seus: Cristo é Salvador! Proclamai com grande ardor que Deus ama o pecador, Que Seu Filho ao mundo deu para ser Salvador!",
            estrofe2: "Ó vós, povos, eis o dom: Cristo é Salvador! Por Seu sangue dá perdão, Cristo é Salvador! Terras todas, exultai, Seu amor considerai; E vós, anjos, proclamai: Cristo é Salvador!",
            estrofe3: "Ó vós, santos, já bradai: Cristo é Salvador! Vós, nações, oh! jubilai; Cristo é Salvador! Salvação de graça dá, hoje, a todo o pecador. Glória! glória a Deus, Senhor, Cristo é Salvador!",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 147,
            tb: 200,
            selecionado: true,
            estrofe1: "Jesus nos diz no Calvário Que tudo está consumado. Ó salvos, olhai o mundo A perecer no pecado!",
            estrofe2: "Jesus é amigo encontrado Na hora de aflição. Jesus está sempre ao lado De quem deseja o perdão.",
            estrofe3: "Se as tuas chagas te afligem E é grande o teu dissabor, Jesus foi feito advogado Nos céus por ti, pecador.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Glória, glória, aleluia! (bis) Glória, glória ao Senhor, Glória a Cristo Jesus, Glória ao meu Salvador!"
        },
        {
            id: 148,
            tb: 163,
            selecionado: true,
            estrofe1: "Cristo Jesus me salvou, Todo o meu ser transformou; O inimigo não me quis soltar, Só me quis maltratar.",
            estrofe2: "Tu, que oprimido estás, Escravo de Satanás, Vem hoje a Cristo Jesus, o Senhor, Único Salvador!",
            estrofe3: "Vinde, cantai o louvor, Vinde, cantai sem temor, Cristo vos salva de todo o horror, Vinde ao Salvador!",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Glória a Cristo, meu Rei! (bis) Hoje sou salvo, sim, isto eu sei, Glória a Jesus, meu Rei!"
        },
        {
            id: 149,
            tb: 587,
            selecionado: true,
            estrofe1: "Jubilosos estão os que o pleno perdão Receberam da mão do Senhor; Indizível a paz e o conforto que traz Aos cristãos essa prova de amor.",
            estrofe2: "Que prazer foi o meu quando Cristo me deu, Por Seu sangue, perdão eternal. Cri, no meu coração a celeste visão Revelou Seu favor divinal.",
            estrofe3: "Dia e noite exultei e a Jesus adorei! Hei de sempre ao mundo contar Quanto a mim Deus amou, quanto Cristo penou Para assim me poder resgatar.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Aleluia! Cantemos com prazer e com fervor Junto com a excelsa grei, Dando graças sempre ao Rei, Todo o dia, no serviço do Senhor."
        },
        {
            id: 150,
            tb: 109,
            selecionado: true,
            estrofe1: "Ó Cristo amado, meu célico Rei, Tu me libertaste, e os pecados deixei. Minha alma pertence a Ti, ó Senhor, E com fé proclamo Teu grande amor.",
            estrofe2: "Antes fui perdido e vil pecador, Hoje sou remido, graças ao Senhor! A noite mais densa torna-se em luz Na santa presença de Cristo Jesus.",
            estrofe3: "Cristo, quão ditoso é o coração Que desfruta gozo, paz e salvação. Sê Tu meu amigo e guia leal, Leva-me contigo ao Teu Lar celestial.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: "Elevemos nossas vozes, Exaltemos a Jesus. Dor e morte vergonhosa Padeceu por nós na cruz."
        },
        {
            id: 151,
            tb: 423,
            selecionado: true,
            estrofe1: "Ó minha alma, sem demora, Vem a Cristo celebrar E os louvores do Seu nome Exultante publicar. Vem, minha alma, vem, minha alma, Sua graça proclamar!",
            estrofe2: "Meu viver amargo e triste Conheceste, ó Salvador, E dos céus desceste à terra Para ser meu Redentor! Oh! sublime, oh! sublime É, Jesus, o Teu amor.",
            estrofe3: "Meus pecados carregando, No madeiro, em meu lugar, Foi Jesus crucificado: Quis minha alma resgatar. Para sempre, para sempre, Teus louvores vou cantar.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 152,
            tb: 592,
            selecionado: true,
            estrofe1: 'Senhor, nós aqui Teus louvores cantamos, Tu és nosso Deus, nosso Pai, nossa luz, A vida nos deste, em que nós exultamos, Em nós resplandece o Teu sol, que é Jesus.',
            estrofe2: 'Nós éramos ímpios, e Tu nos salvaste, Teu Filho nos deste - que amor divinal! Os nossos pecados, Senhor, perdoaste, E o ser nos inundas de paz perenal.',
            estrofe3: 'É gozo excelso que assim nos congrega; Delícias celestes podemos fruir. Enquanto, aos prazeres, o mundo se entrega, Louvamos a Cristo, pois quis-nos remir.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Tu és nosso Deus, nosso Pai, nossa luz, A vida nos deste, em que nós exultamos, Em nós resplandece o Teu sol, que é Jesus. (bis)\nOs nossos pecados, Senhor, perdoaste, E o ser nos inundas de paz perenal. (bis)\nEnquanto, aos prazeres, o mundo se entrega, Louvamos a Cristo, pois quis-nos remir. (bis)'
        },
        {
            id: 153,
            tb: 221,
            selecionado: true,
            estrofe1: 'É bom louvar a Deus, ó cidadãos dos céus, A Ele glória dar e graça anunciar, Dizer a todos quanto amor Devemos nós ao Salvador!',
            estrofe2: 'Pois Ele o céu deixou e servo Se tornou, Ao mundo vil desceu e sobre a cruz morreu, Por nós quis Ele aqui penar E à morte horrenda Se entregar.',
            estrofe3: 'Assim por nós, na cruz, o fel bebeu Jesus, Foi para nos remir e a culpa extinguir; A Sua grande expiação É nossa justificação.',
            estrofe4: 'O grande Fiador, da morte vencedor Triunfante ressurgiu e ao céu caminho abriu! Ah! quem o grande amor dirá Que a Ti devemos, Jeová?',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 154,
            tb: 867,
            selecionado: true,
            estrofe1: 'Oh! repete mais uma vez Tão belas novas de amor! Vem contar o que Cristo fez! Tão belas novas de amor! Elas vêm de cima, Dão sustento e vida, Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe2: 'Cristo, hoje, a todos diz Tão belas novas de amor! Dá-Lhe ouvidos e sê feliz. Que belas novas de amor! Elas levam à fonte Onde há graça abundante; Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe3: 'Só em Cristo há salvação, Que belas novas de amor! Sim, transformam o coração, Tão belas novas de amor! Trazem paz, conforto, Gozo, vida, verdade. Falam de luz, do bom Jesus, Tão belas novas de amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 155,
            tb: 481,
            selecionado: true,
            estrofe1: 'O meu coração sofredor Descanso seguro encontrou Seguindo os conselhos de amor Do Pai que do mal me chamou.',
            estrofe2: 'Nos astros que brilham nos céus, Da lua, no brando clarão, Eu leio poemas de Deus, Que falam de amor e perdão.',
            estrofe3: 'No livro bendito encontrei Palavras de amor e de luz; E canto celeste escutei Dos anjos, saudando Jesus.',
            estrofe4: 'Os males do mundo deixei, Por isso me pus a cantar; Com Deus para sempre estarei, Irei com Jesus ao Seu lar.',
            estrofe5: '',
            som: '',
            coro: 'Cantai, cantai No templo de nosso Senhor! Cantai, cantai! Ao mundo mostrai Seu amor!'
        },
        {
            id: 156,
            tb: 865,
            selecionado: true,
            estrofe1: 'Que bela história de amor! Quão terna e grata é. Que bela história de amor! Ela desperta a fé. Anjos milhares a cantam, E os pastores a escutam, Milhares de almas a aceitam, Que bela história de amor!',
            estrofe2: 'Que bela história de amor! Cristo chamando está. Que bela história de amor! Vida e perdão nos dá. Chama-nos mui ternamente E do Calvário na fonte Lava-nos, sempre clemente, Que bela história de amor!',
            estrofe3: 'Que bela história de amor! Cristo descanso dá. Que bela história de amor! Paz eternal dará. Aos que humildes a pedem, E com fervor a recebem, E com constância O seguem, Que bela história de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! que amor! Oh! que amor! Maravilhosa É essa história de amor.'
        },
        {
            id: 157,
            tb: 156,
            selecionado: true,
            estrofe1: 'Oh! que mensagem cheia Da compaixão de Deus, A do evangelho santo Que nos conduz aos céus!',
            estrofe2: 'Incomparável graça, Cheia de santo amor, Que ao pecador perdido Trouxe o bom Salvador!',
            estrofe3: 'Pois o pecado avilta, Enche de escuridão A alma rebelde e errada Sob sua maldição!',
            estrofe4: 'Temos na cruz de Cristo Bênção e salvação, Porta da vida aberta, Única redenção!',
            estrofe5: '',
            som: '',
            coro: 'Eis a nova: Quem em Jesus confia DEle há de ter verdadeira luz, Vida, perdão e alegria!'
        },
        {
            id: 158,
            tb: 777,
            selecionado: true,
            estrofe1: 'Oh! que belos hinos hoje lá no céu! É que o pródigo ao seu lar voltou. Vede o Pai celeste pronto a abraçar Esse filho que Ele tanto amou!',
            estrofe2: 'Oh! que belos hinos hoje lá no céu! É que já se reconciliou A alma rebelada que, rendida a Deus, Renascida, para o lar voltou!',
            estrofe3: 'Esse arrependido vinde festejar, Como os anjos fazem, com fervor. Ide, pois, alegres, ide anunciar Que se resgatou um pecador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Glória, glória, os anjos cantam lá! Glória, glória, as harpas tocam já! É o santo coro dando glória a Deus Por mais um remido entrar nos céus.'
        },
        {
            id: 159,
            tb: 592,
            selecionado: true,
            estrofe1: 'É tempo que atendas a voz do Supremo, Que a ti, pecador, vida nova quer dar! Evita o suplício eterno, extremo:',
            estrofe2: 'Se, por teu desprezo, a bênção perderes, Angústia e terror te virão flagelar; Portanto, abandona os mundanos prazeres:',
            estrofe3: 'Ao Seu tribunal tens de ser conduzido, E por tua alma quem vai advogar? Oh! deixa os pecados e toma sentido:',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 160,
            tb: 31,
            selecionado: true,
            estrofe1: 'Medo tens que o adversário vá vencer? Nuvens vêm a tua alma obscurecer? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe2: 'Fraca e incerta é tua fé no Salvador? Deus não ouve as tuas preces com favor? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe3: 'Queres caminhar ao céu em plena paz, Livre da condenação que o inferno traz? Abre o coração e deixa Cristo entrar E o sol em ti raiar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Deixa a luz do céu entrar, Deixa o sol em ti nascer, Abre o coração e deixa Cristo entrar E o sol em ti nascer.'
        },
        {
            id: 161,
            tb: 819,
            selecionado: true,
            estrofe1: 'Tua alma está ferida, Magoado, o coração? A tristeza já se apoderou de ti? Escuta, meu amigo, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe2: 'Desperta, tu que dormes, A fé traz esperança, Já desponta um novo dia a teu favor; Lembra que Deus é amor, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe3: 'Se creres, meu amigo, Terás a salvação, Plena paz inundará teu coração. Escuta a voz de Cristo, Jesus nos fala assim: ―Ó cansados e oprimidos, Vinde a Mim!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Tomai sobre vós meu jugo, Eu vos aliviarei, E descanso vossas almas gozarão, Pois o meu fardo é leve, Meu jugo é suave, Paz perfeita vós tereis no coração!‖'
        },
        {
            id: 162,
            tb: 641,
            selecionado: true,
            estrofe1: 'No horizonte o sol se põe; Corre, pois, a buscar perdão. Se desejas ir ao céu, Clama logo por salvação. Oh! vem a Deus agora, Pois a morte não demora, Partiremos deste mundo Ao se pôr o sol!',
            estrofe2: 'Toda a chance irá de vez Quando o sol desaparecer, Breve é a vida, o ocaso vem De repente surpreender! Se a Cristo rejeitares, Desprezando o Seu convite, Teu destino será triste Ao se pôr o sol!',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! sim, antes de o sol se pôr, Oh! sim, antes de o sol se pôr, A Cristo vem, agora, Vida eterna obter!'
        },
        {
            id: 163,
            tb: 203,
            selecionado: true,
            estrofe1: 'Olha para Cristo, olha, pecador, Pois por ti bebeu a taça de amargor; Toda a tua culpa Cristo já pagou, Todo o teu pecado sobre Si tomou.',
            estrofe2: 'Olha para Cristo, que por ti morreu; No madeiro rude Ele padeceu. Pela dor intensa que na cruz sentiu, Por Seu sangue puro, Cristo te remiu.',
            estrofe3: 'O poder das trevas Ele conquistou, O terror da morte já aniquilou; Eis o véu rasgado, eis do céu a luz, Tudo está cumprido; olha teu Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Toda a tua culpa Cristo já pagou, Todo o teu pecado sobre Si tomou.'
        },
        {
            id: 164,
            tb: 755,
            selecionado: true,
            estrofe1: 'O que te diz o amor de Jesus? Responderás a ele? Tu não te lembras que Ele, na cruz, Salvou tua alma da morte?',
            estrofe2: 'Não te convida o amor de Jesus? Teu coração não ouve? Ele teu Mestre quer-Se tornar, Não Lhe recuses resposta.',
            estrofe3: 'Sobre Seu nome ouviste falar, Suas palavras sábias? Obedeceste quando chamou, Já Lhe entregaste a vida?',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Oh! recorda! Oh! recorda Todo o amor que Ele te deixou. Oh! recorda! Oh! recorda! Deus por ti morreu na cruz.'
        },
        {
            id: 165,
            tb: 551,
            selecionado: true,
            estrofe1: 'Quem ouvir as novas, vá proclamar: ―Salvação de graça vinde desfrutar!‖ Oh! que o mundo inteiro ouça anunciar: ―Todo o que quiser, é vir!‖',
            estrofe2: 'Quem quiser agora, venha aceitar; Eis a porta aberta, já podeis entrar; É Jesus caminho para ao céu chegar; Todo o que quiser, é vir!',
            estrofe3: 'Que fiel promessa tens, pecador! Queres tu a vida? Vem ao Salvador! Ele a todos fala com mui terno amor: ―Todo o que quiser, é vir!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Todo o que quiser, venha receber! Possam todos essa boa nova ouvir. É o Pai celeste que convida assim: ―Todo o que quiser, é vir!‖'
        },
        {
            id: 166,
            tb: 245,
            selecionado: true,
            estrofe1: 'Palavra abençoada! Convite que contém Promessa e cumprimento, com infinito bem. Eis, cheio de ternura, Jesus nos chama a Si, Escravos do pecado, e diz-nos: ―Vinde a Mim‖.',
            estrofe2: 'Por que viver tão longe dos braços de Jesus? Por que vagar nas trevas, podendo andar na luz? Da vida sem proveito, da culpa e da aflição, Corramos para a senda da eterna salvação.',
            estrofe3: 'Em tempos de amargura, de desalento e dor, Ou quando nos persegue doloso tentador, Jesus, com voz maviosa, concede abrigo em Si E, dissipando o medo, segreda: ―Vinde a Mim‖.',
            estrofe4: 'Em tudo e para sempre ouçamos ao Senhor, Achando doce alívio no Seu profundo amor. Assim conheceremos o gozo que produz, No coração submisso, o ―vinde‖ de Jesus.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 167,
            tb: 764,
            selecionado: true,
            estrofe1: 'Somente um passo a Cristo! Oh! deixa todo o mal, As seduções do mundo, E aceita a paz real.',
            estrofe2: 'Somente um passo a Cristo! Das trevas para a luz, Para inefável gozo, Ao lado de Jesus.',
            estrofe3: 'Somente um passo a Cristo! Oh! vem, decide já! Com terno amor te espera, Perdão te outorgará.',
            estrofe4: 'Somente um passo a Cristo! Não queiras hesitar, Pois corre grande risco Quem mais se demorar.',
            estrofe5: '',
            som: '',
            coro: 'Vem, pecador, vem, pecador, Vem ao Salvador, Com arrependimento, Tudo Lhe confessando! Somente um passo a Cristo! Oh! vem sem demorar!'
        },
        {
            id: 168,
            tb: 823,
            selecionado: true,
            estrofe1: 'Aos Teus pés estou, ó Salvador, Ouve tão indigno pecador Cheio de tristeza e pranto, Tendo-Te ofendido tanto, Poderei contar com Teu perdão? Eu, sem Deus, sem paz no coração, E liberto, enfim, da escravidão, Teu filho ser?',
            estrofe2: 'Meu pecado grande e carmesim Me persegue sempre aqui sem fim; Triste, aflito e em desespero, Nada mais do mundo quero, Quebrantado, agora, ao pé da cruz, Rogo por alívio, paz e luz, Vem, confirma em mim, Senhor Jesus, O Teu perdão!',
            estrofe3: 'Pela fé em Cristo salvo estou, Todas as minhas faltas perdoou. No Seu sangue achei pureza, Longe foi tão vil tristeza, Deste mundo vou ao bom país, Concedeu-me nova diretriz, Dando-me certeza tão feliz Que dEle sou!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Plena graça para me salvar, Sangue puro para me lavar E poder tem para me guardar Meu Salvador!'
        },
        {
            id: 169,
            tb: 316,
            selecionado: true,
            estrofe1: 'Cristo, Rocha eternal, Quero abrigar-me em Ti! Possa o sangue divinal, Que, na cruz, vertido vi, Do pecado me curar E minha alma libertar.',
            estrofe2: 'Bem nenhum em mim Tu vês, Quero à Tua cruz chegar; Cobre a minha desnudez, Dá-me graça salutar; Se não me vens socorrer, Salvador, vou perecer!',
            estrofe3: 'Minhas obras, eu bem sei, Mesmo feitas em temor, Não cumpriram Tua lei Nem revelam meu amor; Não mereço, pois, perdão, Mas em Ti há salvação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 170,
            tb: 259,
            selecionado: true,
            estrofe1: 'Jesus, estás à porta do aflito coração, Paciente esperas nele fazer habitação. Cristãos jamais seremos nem filhos Teus, Senhor, Se entrada nós não dermos a Ti, bom Salvador.',
            estrofe2: 'Jesus, estás batendo com traspassada mão, Espinhos tens na fronte, Teus olhos tristes são. Que amor incompreensível que espera sem cansar! Por causa do pecado não podes Tu entrar.',
            estrofe3: 'Jesus, com insistência e penetrante olhar Segredas ternamente: ―Oh! deixa-Me entrar.‖ Senhor, agora abrimos o nosso coração! Oh! entra e faze nele eterna habitação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 171,
            tb: 479,
            selecionado: true,
            estrofe1: 'Jesus, Senhor, me chego a Ti, Oh! dá-me alívio mesmo aqui, O Teu favor estende a mim, Aceita um pecador!',
            estrofe2: 'As minhas culpas grandes são, Mas Tu, que não morreste em vão, Me podes conceder perdão, Aceita um pecador!',
            estrofe3: 'Eu nada posso merecer, Jesus, a Ti me vou render, Oh! não me deixes perecer, Aceita um pecador!',
            estrofe4: 'Sim, venho agora, Redentor, Só Tu, Jesus, és meu Senhor, Oh! vem salvar-me em Teu amor, Aceita um pecador!',
            estrofe5: '',
            som: '',
            coro: 'Eu venho como estou! (bis) Porque Jesus por mim morreu, Eu venho como estou!'
        },
        {
            id: 172,
            tb: 559,
            selecionado: true,
            estrofe1: 'Vem, filho perdido! Ó pródigo, vem! Ruína te espera Nas trevas além. Tu, de medo tremendo, Tu, faminto e gemendo, Ó filho perdido, Vem, pródigo, vem!',
            estrofe2: 'Vem, filho perdido! Ó pródigo, vem! Teu Pai te convida, Querendo-te bem! Vestes há para ornar-te, Ricos dons, vem fartar-te! Ó filho perdido, Vem, pródigo, vem!',
            estrofe3: 'Vem, filho perdido! Oh! volta a Jesus! Bondade infinita Se avista na cruz. Em miséria vagando, Tuas culpas chorando, Ó filho perdido, Vem, pródigo, vem!',
            estrofe4: 'Ó pródigo, escuta A voz do Senhor! Oh! rompe as ciladas Do vil tentador! Em teu lar há bastante, E tu vagas errante! Ó filho perdido, Vem, pródigo, vem!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 173,
            tb: 423,
            selecionado: true,
            estrofe1: 'Vinde, pobres pecadores, Vinde, mesmo como estais; Cristo pronto está a salvar-vos, Oh! por que vos demorais? Cristo salva, Cristo salva, Ele quer, vós duvidais?',
            estrofe2: 'Vinde, vós, que estais cansados, Oprimidos, vinde já; Paz, perdão e santidade Vinde, todos, alcançar, Pois de graça, pois de graça Tudo Cristo vos quer dar.',
            estrofe3: 'Vinde, vós, ó redimidos, Vinde a Cristo, o Redentor. Sempre junto do madeiro Contemplai o Salvador. Redimidos, redimidos, Exultai no Seu amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 174,
            tb: 10,
            selecionado: true,
            estrofe1: 'À porta chamo, alma triste, Ansioso por te consolar, Se Minha voz, enfim, ouviste, Posso Eu entrar? Posso Eu entrar?',
            estrofe2: 'Por ti foi grande Meu castigo, Sofri sem nunca murmurar; Agora vive em paz coMigo, Posso Eu entrar? Posso Eu entrar?',
            estrofe3: 'A Minha graça poderosa O teu pecado vem lavar; Ó alma impura, pesarosa, Posso Eu entrar? Posso Eu entrar?',
            estrofe4: 'Do céu Eu trago vida e gozo Que hoje podes desfrutar E em tudo te farei ditoso, Posso Eu entrar? Posso Eu entrar?',
            estrofe5: '',
            som: '',
            coro: 'Levado à porta, por amor, Procuro já teu mal sanar; Tristonho, aflito pecador, Posso Eu entrar? Posso Eu entrar?'
        },
        {
            id: 175,
            tb: 155,
            selecionado: true,
            estrofe1: 'Há hoje alguém esperando Para Jesus encontrar? Venha sem mais demorar-se, Cristo vai hoje passar! Ei-lO de mãos estendidas, Cheio de graça sem par. Oh! que ventura inaudita, Cristo vai hoje passar!',
            estrofe2: 'Há inda alguém duvidando Do Seu poder de salvar? Pois venha experimentá-lo, Cristo vai hoje passar! O Seu poder é divino, O Seu amor é sem par. Ó coração quebrantado, Cristo vai hoje passar!',
            estrofe3: 'Há inda alguém demorando Para Jesus aceitar? Eis que o Senhor está perto, Ele vai hoje passar! Ó pecador desditoso, Não cesses, pois, de clamar! Vem, tuas culpas chorando, Cristo vai hoje passar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo vai hoje passar, passar, passar! Passa de amor transbordando, Todos a Si convidando. O Mestre vai hoje passar, Sim, hoje Ele vai passar!'
        },
        {
            id: 176,
            tb: 631,
            selecionado: true,
            estrofe1: 'Manso e suave está Cristo chamando, Chama por ti e por mim. Eis que à porta espera velando, Vela por ti e por mim.',
            estrofe2: 'Que esperamos? Jesus nos convida, Convida a ti e a mim. Não desprezemos a graça da vida Que salva a ti e a mim!',
            estrofe3: 'Que grande amor que Jesus nos tem dado, Dado a ti e a mim! Pois libertou-nos do triste pecado, Mártir por ti e por mim.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Vem já, vem já, filho, ao lar volta já!‖ Amavelmente está Cristo chamando E diz: ―Meu filho, vem já!‖'
        },
        {
            id: 177,
            tb: 812,
            selecionado: true,
            estrofe1: 'Oh! não tens ouvido do amor sem igual, Do amor que teu Deus tem por ti, O amor que O levou a Seu Filho entregar E os salvos levar para Si?',
            estrofe2: 'Não foram os santos que Cristo chamou, Nem justos veio Ele salvar; Mas pobres e fracos, culpados e maus, Mandou pelos servos chamar.',
            estrofe3: 'O homem, porém, não podia chegar À santa presença de Deus; Porque seus pecados, em grande porção, Vedavam-lhe a entrada nos céus.',
            estrofe4: 'Mas pelo Seu sangue Jesus expiou A culpa do réu lá na cruz; Tirando o pecado, caminho mostrou, O qual para o céu nos conduz.',
            estrofe5: 'E tu, pecador, não desejas, então, O amor do teu Deus conhecer? Por fé no Senhor, como teu Salvador, Irás alcançar tal prazer.',
            som: '',
            coro: 'Oh! crê nesse amor sem igual! (bis) A graça de Deus te chama dos céus; Oh! crê nesse amor sem igual!'
        },
        {
            id: 178,
            tb: 29,
            selecionado: true,
            estrofe1: 'Ó corações, considerai: Deus hoje vos conduzirá; O vosso orgulho abandonai. Quereis salvar-vos? Vinde já!',
            estrofe2: 'O amanhã incerto é, E não sabeis o que virá; Portanto, tende em Cristo fé. Quereis salvar-vos? Vinde já!',
            estrofe3: 'Do mundo nunca obtereis A paz que vos satisfará; Em Cristo tudo achareis. Quereis salvar-vos? Vinde já!',
            estrofe4: 'O bom Jesus ao pecador Perdão jamais recusará; Portanto, uni-vos ao Senhor. Quereis salvar-vos? Vinde já!',
            estrofe5: '',
            som: '',
            coro: 'Por que não já? Por que não já? (bis) Quereis salvar-vos? Vinde já!'
        },
        {
            id: 179,
            tb: 120,
            selecionado: true,
            estrofe1: 'Amigo, se oprimido estás, Em Deus há compaixão; Vem hoje a Cristo e alcançarás Conforto e salvação.',
            estrofe2: 'A ti e ao mundo Cristo amou E bênção te quer dar. Precioso sangue derramou A fim de te salvar.',
            estrofe3: 'Verdade, Luz e Vida é Que para os céus conduz; Põe nEle agora a tua fé E segue o bom Jesus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Só confia! Só confia NEle desde já. Cristo salva! Cristo salva E te guardará.'
        },
        {
            id: 180,
            tb: 253,
            selecionado: true,
            estrofe1: 'A nova do evangelho Já se fez ouvir aqui, Publicando em som alegre O que Deus já fez por ti. Pois tanto o mundo amou, Sim, a cada pecador, Que do céu lhe deu Seu Filho Para ser seu Redentor.',
            estrofe2: 'A nova do evangelho: Segurança, vida e paz, É o amor de Jesus Cristo, Que o perdão de Deus nos traz. As novas se vos dão De haver um Salvador, Poderoso e mui bondoso, Que perdoa o pecador.',
            estrofe3: 'A nova do evangelho Vem a todos avisar Do perigo grande e grave Para quem se descuidar. Salvai-vos desde já, Não vos detenhais no mal, Não volteis atrás os olhos, Pois vos pode ser fatal.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Santa paz e perdão São as novas lá dos céus! Santa paz e perdão! Bendito o nosso Deus!'
        },
        {
            id: 181,
            tb: 328,
            selecionado: true,
            estrofe1: 'Quem me poderá salvar? Cristo, que verteu Seu sangue. Onde as manchas vou limpar? Só no Seu precioso sangue.',
            estrofe2: 'Vejo a minha salvação Só no Seu precioso sangue. Deus concede o Seu perdão Por Seu tão precioso sangue.',
            estrofe3: 'Dele vem perfeita paz, Pelo Seu precioso sangue. Infalível e eficaz É o Seu precioso sangue.',
            estrofe4: 'Minha justificação Tenho no precioso sangue. Gozo traz ao coração Esse tão precioso sangue.',
            estrofe5: 'Entrarei no santo lar Pelo Seu precioso sangue. Vida eterna irei gozar Por Seu tão precioso sangue.',
            som: '',
            coro: 'Que preciosa paz Nos vem da Sua cruz, A qual me dá Jesus Pelo Seu precioso sangue!'
        },
        {
            id: 182,
            tb: 119,
            selecionado: true,
            estrofe1: 'Tu deixaste, Jesus, o Teu reino de luz E baixaste a este mundo tão vil; Um presépio em Belém, Tu, Jesus, Sumo Bem, Escolheste por berço infantil.',
            estrofe2: 'Alegraram-se os céus, com os santos de Deus, Sim, por teres nascido, Jesus, Vindo aos filhos de Adão conceder salvação Pela morte em resgate, na cruz.',
            estrofe3: 'Tu vieste, Senhor, revelar-nos amor E Te aprouve do mal nos salvar; Mas provaste do fel, do motejo cruel, Morte, ao fim, Te fizeram provar.',
            estrofe4: 'Outra vez Tu virás e por mim chamarás, Rodeado dos anjos de Deus; Oh! que gozo terei ao ouvir de meu Rei: ―Um lugar te darei Eu nos céus.',
            estrofe5: '',
            som: '',
            coro: 'Vem, Jesus, habitar comigo, Em minha alma há lugar; oh! vem já! Vem, Jesus, habitar comigo, vem! Em minha alma há lugar; oh! vem já!'
        },
        {
            id: 183,
            tb: 757,
            selecionado: true,
            estrofe1: 'Cristo é meu Salvador, eu sei, Deu-me paz em meio à aflição; Das correntes de pecado e temor Procurei libertação. Com misericórdia e amor Atendeu-me a oração; Seu precioso sangue, então, lavou Meu pobre coração.',
            estrofe2: 'Não esqueço o que me fez Jesus, Foi completa a transformação! Renasci conforme Ele ensinou; Vivo em celebração Do milagre que operou em mim, Do poder que há na cruz, Desta vida verdadeira Que é andar na Sua luz!',
            estrofe3: 'Alegria e paz conhecerás, Pois Jesus as tem para dar. Retidão, pureza, um novo viver Por Seu sangue irás gozar. Vem, ó pecador, eu te levarei Para a fonte do perdão; Alvo mais que a neve hás de ser, Gozando a salvação!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Este é o lugar onde eu quero estar, Pois maravilhas vejo aqui. Oh! vem comigo - há bênção sem par Junto à cruz de Cristo.'
        },
        {
            id: 184,
            tb: 277,
            selecionado: true,
            estrofe1: 'Cristo salva o pecador E transforma o coração; Ao contrito, com amor, Oferece salvação.',
            estrofe2: 'Cristo salva o pecador E concede-lhe perdão. Aceitai o bom Senhor, Aceitai de coração.',
            estrofe3: 'Vinde, todos, e achareis Paz e luz no Redentor; Vida eterna, o Rei dos reis Vos dará por Seu favor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Confiai em Seu poder; Confiai em Seu amor; Crede, pois, que Cristo quer Libertar o pecador.'
        },
        {
            id: 185,
            tb: 700,
            selecionado: true,
            estrofe1: 'Cristo te chama com mui terno amor; Ó pecador, vem atender! DEle não fujas com fútil temor; Vem a Jesus te render!',
            estrofe2: 'Cristo te chama a vir descansar; Ó pecador, vem atender! Teu grande peso Ele quer minorar; Vem a Jesus te render!',
            estrofe3: 'Cristo deseja, pois, te perdoar; Ó pecador, vem atender! Tudo Ele fez para te resgatar; Vem a Jesus te render!',
            estrofe4: 'Sempre esperando, Se põe a chamar; Ó pecador, vem atender! Corre depressa, sim, vem-te entregar; Nada te deve deter!',
            estrofe5: '',
            som: '',
            coro: 'Ó pecador, eis o Senhor! Vem, atende com fé a chamada de amor!'
        },
        {
            id: 186,
            tb: 572,
            selecionado: true,
            estrofe1: 'Das águas da vida sempre há de beber Quem, arrependido, no Salvador crer, Da pena da morte liberto será E sempre com Cristo o mal vencerá.',
            estrofe2: 'É Deus quem afirma que dá salvação, De todo o pecado concede perdão, E agora declara que, assim como estás, Jesus te aceita e salvo serás.',
            estrofe3: 'Por meio do sangue que Cristo verteu, Ficou consumado o resgate do réu, E o Pai lhe oferece, por Seu terno amor, Lugar em Seu lar, com o bom Salvador.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O dom é de graça, Jesus é capaz De satisfazer, com dulcíssima paz, Ao homem que aceita Seu pleno perdão, Sem outra esperança de obter salvação.'
        },
        {
            id: 187,
            tb: 573,
            selecionado: true,
            estrofe1: 'Oh! vinde a Cristo sem mais demorar, Pois Ele aos contritos perdão há de dar; Os sonhos deixai, ó escravos do mal, E, crendo em Jesus, tendes luz divinal.',
            estrofe2: 'Severa a luta, é difícil viver, Porém Deus socorre, e haveis de vencer; Jesus vos prepara morada nos céus, E em breve ganhareis do Senhor os lauréis.',
            estrofe3: 'Ao vale da morte chegados então, Vós mesmos vereis estendida essa mão Que à glória vos leva; o prêmio vos dá O Rei que para sempre convosco estará.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'O Leão de Judá romperá os grilhões, Vitória dará aos fiéis corações.'
        },
        {
            id: 188,
            tb: 648,
            selecionado: true,
            estrofe1: 'Cristo na glória, de retidão vestido, Por meu advogado Se constituiu; E sempre sustenta e defende o redimido. Oh! podes dizer que também te remiu?',
            estrofe2: 'Já gozo paz, tudo é calmo como um rio, A paz que no céu tem o seu manancial; É Deus quem a deu por Jesus, em quem confio. E tu inda não tens a paz divinal?',
            estrofe3: 'Trajes tão alvos eu tenho, já lavados No sangue tão puro do meu Redentor; Os crentes em Cristo por Deus são perdoados, Também tu serás, crendo já no Senhor!',
            estrofe4: 'Que lindo lar tenho com os redimidos, Por Cristo aprontado na casa de Deus; Ali não há morte, nem mágoa, nem gemidos, Também tu terás um lugar lá nos céus.',
            estrofe5: '',
            som: '',
            coro: 'Oh! vem a Jesus! Oh! vem a Jesus! Eterna ventura terás pela cruz!'
        },
        {
            id: 189,
            tb: 158,
            selecionado: true,
            estrofe1: 'Preciosas as palavras de Jesus, Supremo Rei: A Mim aquele que vier Eu não desprezarei. A Mim aquele que vier Eu não desprezarei',
            estrofe2: 'Preciosas as palavras de Jesus, Supremo Rei: A porta sou, por Mim entrai, Descanso vos darei. A porta sou, por Mim entrai, Descanso vos darei',
            estrofe3: 'Preciosas as palavras de Jesus, Supremo Rei: Oh! vinde, vós, cansados, pois É suave a Minha lei. Oh! vinde, vós, cansados, pois É suave a Minha lei',
            estrofe4: 'Preciosas as palavras de Jesus, Supremo Rei: Por vós o mundo Eu venci, Por vós a vida dei. Por vós o mundo Eu venci, Por vós a vida dei',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 190,
            tb: 859,
            selecionado: true,
            estrofe1: 'Quem vai seguir a Cristo, o Mestre? Quem vai a cruz de Jesus tomar? Quem está pronto e decidido? Quem vai o galardão ganhar?',
            estrofe2: 'Quem vai seguir a Cristo, o Mestre, E ajoelhar-se ante os Seus pés? Quem vai seguir o estreito caminho, Andando sempre pela fé?',
            estrofe3: 'Quem vai seguir a Cristo, o Mestre, Louvando-O aqui e além, nos céus? Quem vai unir-se aos salvos, dizendo: ―Oh! aleluia! Glória a Deus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quem vai seguir, quem vai seguir, Quem vai seguir a Cristo agora? Quem vai a cruz de meu Jesus tomar E segui-lO já?'
        },
        {
            id: 191,
            tb: 159,
            selecionado: true,
            estrofe1: 'Queres o teu vil pecado vencer? Dá teu coração a Jesus. Queres também Seu favor receber? Dá teu coração a Jesus.',
            estrofe2: 'Em santidade desejas viver? Dá teu coração a Jesus. Queres do Espírito Santo o poder? Dá teu coração a Jesus.',
            estrofe3: 'A tempestade não quer acalmar? Dá teu coração a Jesus. Queres as tuas paixões refrear? Dá teu coração a Jesus.',
            estrofe4: 'Dos teus amigos alguém te traiu? Dá teu coração a Jesus. Busca amizade de Quem te remiu. Dá teu coração a Jesus.',
            estrofe5: 'Queres a glória divina alcançar? Dá teu coração a Jesus. Queres no céu a teu Deus exaltar? Dá teu coração a Jesus.',
            som: '',
            coro: 'Já chega de hesitação! Já chega de oposição! Oh! busca em Cristo o perdão E dá-Lhe teu coração!'
        },
        {
            id: 192,
            tb: 395,
            selecionado: true,
            estrofe1: 'Ouve como à porta chama, Alma sem consolação! É Jesus que está querendo Ocupar teu coração.',
            estrofe2: 'Oh! talvez teus companheiros Desejasses receber Em lugar do bom amigo Que por ti ousou morrer!',
            estrofe3: 'Tens tu tempo para Cristo Ou a ti convida em vão? Hoje é tempo de aceitares Essa grande salvação.',
            estrofe4: 'Breve cessará a chamada Do bondoso Salvador; Vem, atende o Seu convite E desfruta o Seu amor.',
            estrofe5: '',
            som: '',
            coro: 'Dá lugar a Jesus Cristo! Abre a porta desde já! Se Lhe dás acolhimento, Sempre em ti habitará.'
        },
        {
            id: 193,
            tb: 329,
            selecionado: true,
            estrofe1: 'Cristo, a Teus pés estou, Com Teu sangue vem salvar-me! Minha vida a Ti eu dou, Com Teu sangue vem salvar-me!',
            estrofe2: 'Triste está meu coração, Com Teu sangue vem salvar-me! Oh! concede-me perdão, Com Teu sangue vem salvar-me!',
            estrofe3: 'Não mereço Teu favor, Com Teu sangue vem salvar-me! Mas recebe-me, Senhor, Com Teu sangue vem salvar-me!',
            estrofe4: 'Ouve a minha oração, Com Teu sangue vem salvar-me! Que eu não venha a Ti em vão, Com Teu sangue vem salvar-me!',
            estrofe5: 'Nada posso eu fazer, Com Teu sangue vem salvar-me! Nem as culpas remover, Com Teu sangue vem salvar-me! Venho, agora, implorar: Com Teu sangue vem salvar-me! Meus pecados perdoar, Com Teu sangue vem salvar-me!',
            som: '',
            coro: 'Nada tenho, Salvador, Mas, com fé, espero No poder da Tua cruz. Com Teu sangue vem salvar-me!'
        },
        {
            id: 194,
            tb: 836,
            selecionado: true,
            estrofe1: 'Pecador, teus pecados brancos, brancos se farão. Inda que sejam vermelhos, como lã serão; Inda que teus pecados sejam como escarlate, Brancos, brancos se farão, Como lã se tornarão.',
            estrofe2: 'Pecador, Deus te chama, Ouve já a voz dos céus! Ele é tão bom, quão amável, compassivo é. Com ardor te convida, com amor, sim, te abriga, Chega, pois, ao Salvador, Ouve já a voz de amor.',
            estrofe3: 'Desfará tuas culpas, Para não lembrá-las mais. ―Oh! vinde a Mim, vós, cansados‖, diz Jesus, Senhor. Mau embora tu sejas, mau embora tu sejas, Seu descanso te dará E feliz te tornará.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 195,
            tb: 583,
            selecionado: true,
            estrofe1: "Vida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida eterna Eu te dou!\nPois, então, pecador, considera esse amor;\nVê Jesus, que na cruz expirou.",
            estrofe2: "Vida tens ao olhar pra Jesus, o Salvador;\nNão há choro, remorso nem dor\nQue consiga remir a qualquer pecador;\nSó o sangue do bom Redentor.",
            estrofe3: "Vida tens ao olhar pra Jesus, o Salvador;\nEle tudo por ti já sofreu.\nDeus estende o convite ao maior transgressor;\nVê Jesus, que por ti padeceu.",
            estrofe4: "Vida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida eterna Eu te dou!\nNunca perecerás crendo em Cristo, o Senhor;\nSegurança em Jesus gozarás.",
            estrofe5: "",
            som: "",
            coro: "Vem, vê, viverás!\nVida tens ao olhar pra Jesus, o Salvador;\nEle diz: Vida em Mim acharás!"
        },
        {
            id: 196,
            tb: 603,
            selecionado: true,
            estrofe1: "De um milagre precisas\nQue poderás conseguir,\nQue será teu quando olhares\nCom fé a Jesus, o Senhor.",
            estrofe2: "Uns o procuram em homens\nE amigos que tampouco o têm;\nMas que amigo entenderá\nA tua silente oração?",
            estrofe3: "Muitos pretendem com ouro\nComprar alegria e amor;\nNenhum valor ou tesouro\nCompra a paz que Deus dá.",
            estrofe4: "",
            estrofe5: "",
            som: "",
            coro: ""
        },
        {
            id: 197,
            tb: 453,
            selecionado: true,
            estrofe1: "Ah! que música, toando,\nEnche os ares de dulçor!\nSão os salvos entoando\nGraças ao seu Redentor.",
            estrofe2: "Ele, o Deus excelso, amou-nos\n- Dignos, nós, da perdição -\nCom poder real salvou-nos\nDa perpétua maldição.",
            estrofe3: "Graça ilustre! Deus aceita\nOs rebeldes com favor!\nNunca o Salvador rejeita\nO contrito pecador.",
            estrofe4: "Vinde, todos, sem limite.\nDe Jesus é a compaixão!\nEis o divinal convite:\nAceitai a salvação!",
            estrofe5: "",
            som: "",
            coro: "Ouço as vozes de vitória,\nNo caminho para a glória,\nProclamando a doce história   ) bis\nDe Jesus e Seu amor!          )"
        },
        {
            id: 198,
            tb: 210,
            selecionado: true,
            estrofe1: 'O caminho estreito para o eterno Lar\nSegue por desertos e à beira-mar,\nPassa por montanhas e florestas mil,\nVence cordilheiras, rocha e alcantil.',
            estrofe2: 'Há só uma senda que aos céus conduz,\nHá só um que salva: é o Senhor Jesus!\nSegue para a pátria, teu celeste Lar,\nEis à tua espera gozo e paz sem par.',
            estrofe3: 'Se o inimigo ruge qual leão\nE quer desviar-te com a tentação,\nNunca desanimes, Deus socorro é,\nGuarda, pois, em Cristo, firme, a tua fé.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Ergue os teus olhos para o além,\nChama-te o Mestre a Jerusalém.\nOh! marcha à cidade de ouro, luz, amor.\nHá só um caminho, é o Salvador!'

        },
        {
            id: 199,
            tb: 81,
            selecionado: true,
            estrofe1: 'Sou forasteiro aqui, em terra estranha estou;\nDo reino lá do céu embaixador eu sou!\nMeu Rei e Salvador vos manda em Seu amor\nAs boas novas de perdão.',
            estrofe2: 'É ordem do meu Rei que todo o pecador,\nArrependido já, confesse ao Salvador\nTodo o pecado seu, pois Ele prometeu\nDar o perdão por Seu amor.',
            estrofe3: 'No meu eterno lar não há perturbação;\nEterno gozo e paz os salvos fruirão!\nE quem obedecer a Cristo vai viver\nNo reino eterno do meu Rei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis a mensagem que me deu\nAquele que por nós morreu:\nReconciliai-vos já, é ordem que Ele dá,\nReconciliai-vos já com Deus!'

        },
        {
            id: 200,
            tb: 337,
            selecionado: true,
            estrofe1: 'A todos vós diz o Senhor:\nVinde a Mim! (bis)\nPor que fugis do Meu amor?\nVinde a Mim! (bis)\nQuereis morrer sem salvação?\nViver assim é perdição;\nPor vós obtive redenção;\nVinde a Mim! (bis)',
            estrofe2: 'Eu não recusarei ninguém,\nVinde a Mim! (bis)\nQuem se arrepende faz o bem;\nVinde a Mim! (bis)\nEm breve a morte chegará,\nO ímpio à maldição irá,\nPois Minha oferta cessará;\nVinde a Mim! (bis)',
            estrofe3: 'Vós, que pecados carregais,\nVinde a Mim! (bis)\nE vós, que em vão vos fatigais,\nVinde a Mim! (bis)\nDescanso eterno vos darei,\nAlívio certo vos trarei,\nE aos céus, em paz, vos levarei;\nVinde a Mim! (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 250,
            tb: 261,
            selecionado: true,
            estrofe1: 'Do Salvador bendito\nSempre desejo ser;\nLivre do mundo impuro\nQuero também viver.',
            estrofe2: 'Quero ficar com Cristo,\nSempre com Ele andar,\nSeja aqui, na terra,\nSeja no eterno Lar.',
            estrofe3: 'Queres, pois, aceitar-me\nTal como sou, Senhor?\nVenho entregar-me agora,\nSou Teu, meu Redentor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quero viver com Cristo, ) bis\nTudo Lhe dedicar;       )\nTudo por Cristo, tudo   )\nQuero renunciar. )'
        },
        {
            id: 251,
            tb: 608,
            selecionado: true,
            estrofe1: 'Já achaste em Cristo plena salvação\nPelo sangue vertido na cruz?\nToda a mancha tira do teu coração\nEsse sangue eficaz de Jesus.',
            estrofe2: 'Viives sempre ao lado do teu Salvador\nPelo sangue que emana da cruz?\nDo pecado és tu sempre vencedor\nComo foi teu bendito Jesus?',
            estrofe3: 'Vestes brancas hás de ter ao vir Jesus?\nFoste limpo na fonte de amor?\nPronto estás e seguirás ao céu de luz\nPelo sangue do teu Salvador?',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Salvo estás? Limpo estás\nPelo sangue de Cristo Jesus?\nTuas vestes são mais alvas que a luz?\nFoste limpo no sangue eficaz?'
        },
        {
            id: 252,
            tb: 36,
            selecionado: true,
            estrofe1: 'Divino Mestre, venho aqui\nCom mui sincera contrição,\nEm oração, perante Ti,\nPedindo plena salvação.',
            estrofe2: 'Eu venho com o coração\nVazio e débil, sem amor,\nMas, pela Tua compaixão,\nAceita e usa-me, Senhor!',
            estrofe3: 'Ouvi a Tua voz chamar\nE, obediente, respondi;\nEstou, Senhor, no Teu altar,\nOh! santifica-me aqui.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem, santo poder! Vem, santo poder!\nE batiza-me, hoje, com fogo dos céus;\nO Teu querer eu vou cumprir,\nEntregue, humilde, aos Teus pés.'
        },
        {
            id: 253,
            tb: 21,
            selecionado: true,
            estrofe1: 'Mais de Cristo eu quero ver,\nMais do Seu amor obter,\nMais da Sua compaixão,\nMais da Sua mansidão.',
            estrofe2: 'Mais de Cristo compreender,\nQuero a Cristo obedecer,\nSempre perto dEle andar,\nSeu amor manifestar.',
            estrofe3: 'Mais de Cristo almejo ter,\nMuito mais Lhe pertencer.\nQuero ao mundo proclamar:\nCristo veio-nos salvar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Mais, mais de Cristo!\nMais, mais de Cristo!\nMais do Seu puro e santo amor,\nMais de Ti mesmo, ó Salvador!'
        },
        {
            id: 254,
            tb: 143,
            selecionado: true,
            estrofe1: 'Meu pecado resgatado\nFoi na cruz, por Teu amor,\nE da morte, triste sorte,\nMe livraste, ó Redentor.',
            estrofe2: 'Se hesitante, vacilante,\nOuço a voz do tentador,\nTu me guias, auxilias\nE me tornas vencedor.',
            estrofe3: 'Redimida, só tem vida\nA minha alma em Teu amor!\nCom apreço reconheço\nQuanto devo a Ti, Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem! inflama viva chama\nEm meu peito, ó Salvador!\nPois Te adora quem Te implora:\nVem guiar-me, bom Senhor!'
        },
        {
            id: 255,
            tb: 504,
            selecionado: true,
            estrofe1: 'Não tenho andado pelo bem\nComo desejas, ó Senhor;\nHá muitas coisas que também\nTêm esfriado meu amor.\nAbre-me os olhos para ver\nE Teus caminhos conhecer.',
            estrofe2: 'Tenho pecado contra Ti.\nOs Teus preceitos, Tua lei,\nTua vontade não cumpri.\nOh! meu bom Mestre, que farei?\nVenha amparar-me Tua mão,\nDá-me a graça do perdão.',
            estrofe3: 'Quero servir-Te, Salvador,\nSempre vivendo só por Ti.\nDá-me pureza, mais ardor,\nMais santidade eu tenha aqui.\nQuero louvar-Te, ó Senhor,\nE transbordar do Teu amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 256,
            tb: 480,
            selecionado: true,
            estrofe1: 'Oh! quando achará o meu ser\nDescanso perfeito, Senhor?\nE, em Ti crendo, há de viver\nEm paz, sem pecado, (bis)\nEm paz, sem temor?',
            estrofe2: 'Minha alma esquadrinha, Jesus,\nE vê quão instável eu sou!\nHumilde, aguardo da cruz\nPoder e firmeza         (bis)\nDe Quem me salvou.',
            estrofe3: 'Meus ídolos lanço aos Teus pés,\nOs bens que possuo são Teus.\nAnelo ser como Tu és.\nEm Ti confiando,              (bis)\nEu sigo, meu Deus!',
            estrofe4: 'Lavado em Teu sangue, Senhor,\nEu tenho pureza sem par.\nCom fé e com grato amor\nEu sigo os Teus passos (bis)\nSem mais vacilar.',
            estrofe5: 'Agora Te louvo, Senhor,\nPor Tua mercê sem igual.\nFirmado no Teu santo amor,\nTu podes guardar-me, (bis)\nGuardar-me do mal.',
            som: '',
            coro: ''
        },
        {
            id: 257,
            tb: 723,
            selecionado: true,
            estrofe1: 'Cristo, o que tenho oferto a Ti,\nFala, Jesus, eu quero-Te ouvir;\nVem, sela agora Teu servo aqui,\nMeu ser vem com Teu santo amor suprir.',
            estrofe2: 'Dá mais amor ao meu coração,\nQuero o evangelho ao mundo anunciar\nE ao que jaz na vil perdição\nDizer que Jesus pode libertar.',
            estrofe3: 'Dá-me poder, que o mundo em redor\nPossa sentir que habitas em mim.\nQuero luzir por Ti, meu Senhor,\nE outros mover a buscar-Te enfim.',
            estrofe4: 'Dá-me coragem, fé e valor\nSe no horizonte o sol declinar,\nE, vindo sombras em meu redor,\nEu sei que prometes comigo estar.',
            estrofe5: '',
            som: '',
            coro: 'Tudo por Ti, Jesus,\nTudo por Ti eu dou,\nNada do mundo quero amar,\nJesus, aos Teus pés estou.'
        },
        {
            id: 258,
            tb: 370,
            selecionado: true,
            estrofe1: 'Cristo, se meus pés erraram,\nDesviando-se da luz,\nSe o meu motivo é outro\nE não mais visar a cruz,\nNão me negues Tua bênção,\nPois, eu sei, fui desleal,\nMas corrige as minhas falhas,\nExtirpando todo o mal.',
            estrofe2: 'Fui apenas mercenário\nOu servi-Te com amor\nAo buscar a ovelha errante,\nSem medir perigo e dor?\nTudo sabes, e, por isso,\nSob Teu perscrutante olhar,\nSem temer Teu veredito,\nContinuo a trabalhar.',
            estrofe3: 'Fonte do amor eterno,\nFaze que meu coração\nDo Teu santo amor transborde\nE não sirva a Ti em vão.\nQuero amor mui paciente,\nSanto fogo e compaixão,\nMente sóbria, equilibrada,\nMais ternura e devoção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Quero só servir ao Mestre\nCom sincero e ardente amor,\nPara dEle ouvir na glória:\nFoste fiel no teu labor!'
        },
        {
            id: 259,
            tb: 283,
            selecionado: true,
            estrofe1: 'Eis-me, ó Salvador, aqui!\nAlma e corpo oferto a Ti;\nServo inútil, sem valor,\nMas pertenço a Ti, Senhor!',
            estrofe2: 'Vacilante no pensar,\nMui propenso a tropeçar,\nMas me entrego a Ti, Senhor,\nSalvo estou por Teu amor!',
            estrofe3: 'Transformado em todo o ser,\nObedeço ao Teu poder,\nPois total consagração\nDevo em vista do perdão.',
            estrofe4: 'Eu, remido pecador,\nMe dedico ao Redentor:\nTeu é este coração,\nTeu em plena sujeição.',
            estrofe5: 'Toma-me, Senhor Jesus,\nPara andar conTigo em luz,\nSem reserva, sem temor,\nTeu cativo, ó Salvador!',
            som: '',
            coro: ''
        },
        {
            id: 260,
            tb: 76,
            selecionado: true,
            estrofe1: 'Jesus, se Teu potente amor\nVencer meu coração,\nEntão meus pés de Ti, Senhor,\nJamais se afastarão.',
            estrofe2: 'Oh! que o lume divinal\nComece em mim a arder,\nCom fogo santo extirpe o mal,\nRefine o meu ser.',
            estrofe3: 'Minha alma vem, agora, encher\nDe clara e doce luz;\nQue assim Teu sopro, com poder,\nMe inspire, bom Jesus.',
            estrofe4: 'Com passos firmes andarei,\nConstante em Teu amor.\nA Ti somente servirei\nNum mundo pecador.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 261,
            tb: 242,
            selecionado: true,
            estrofe1: 'Minha alma e meu corpo,\nSenhor, entrego aqui,\nEm pleno sacrifício\nQue ofereço a Ti.',
            estrofe2: 'Por tanto amor Te cedo\nMeu renovado ser,\nPois para resgatar-me\nVieste aqui morrer.',
            estrofe3: 'É doce, assim, deixar-me\nNa Tua santa mão,\nFerida para obter-me\nCompleta salvação.',
            estrofe4: 'Sou Teu, Jesus amado,\nTeu sangue me lavou,\nO Espírito divino\nAgora me selou.',
            estrofe5: '',
            som: '',
            coro: 'Jesus, agora mesmo,\nBendito Redentor,\nTudo, para sempre,\nConsagro a Ti, Senhor!'
        },
        {
            id: 262,
            tb: 111,
            selecionado: true,
            estrofe1: 'Vem, Senhor, me guiar,\nMinha fé sustentar.\nFraco estou, débil sou, sem vigor.\nQuero as trevas deixar,\nQuero a luz alcançar,\nPela mão vem guiar-me, Senhor.',
            estrofe2: 'Quero o ego vencer,\nSanto e puro viver,\nTeu exemplo seguir onde for.\nMas instável eu sou,\nDá-me força e valor,\nPela mão vem guiar-me, Senhor.',
            estrofe3: 'Se o meu jornadear\nExigir batalhar,\nLaços mil Satanás me armar,\nSocorrer-me, oh! vem,\nMeu Senhor, Salvador,\nPela mão vem guiar-me ao Lar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vem-me guiar, (bis)\nPela mão vem guiar-me, Senhor.'
        },
        {
            id: 263,
            tb: 503,
            selecionado: true,
            estrofe1: 'A fé igual à de Jesus,\nQue os montes pode remover\nE ao mundo trouxe alegre luz,\nAnelo, ó Deus, de Ti obter,\nA fé que aos salvos dá vigor\nE que se funde em Teu amor.',
            estrofe2: 'A fé que faz dos céus chegar\nAos servos Teus poder, união,\nQue os faz valentes no lutar\nE os faz vencer o vil leão,\nQue pronta para a morte está,\nPorque em Deus confiará.',
            estrofe3: 'A fé que vence a Satanás,\nQue, afoita, enfrenta as prisões,\nQue tem em Cristo aquela paz\nQue guarda a calma em provações,\nA fé que não recusa a cruz,\nMas segue após o bom Jesus.',
            estrofe4: 'A fé que sabe distinguir\nO falso do que é real\nE quer em retidão seguir,\nFitando os olhos no imortal.\nDá-me essa fé, ó meu Senhor,\nEm Cristo, meu bom Salvador.',
            estrofe5: '',
            som: '',
            coro: ''
        }, {
            id: 264,
            tb: 501,
            selecionado: true,
            estrofe1: 'Minha alma a Rocha forte achou,\nNa qual firmeza encontrou:\nÉ Cristo, o meu Senhor Jesus,\nQue morto foi na acerba cruz.\nOs céus e a terra passarão,\nMas permanece a salvação. (bis)',
            estrofe2: 'Ó Rocha, que estável és!\nDo abismo afastas os meus pés\nE os fazes sempre procurar\nNos santos passos Teus andar.\nDeus, reto és Tu e à retidão\nConvertes todo o coração. (bis)',
            estrofe3: 'Eu nesta Rocha vou ficar\nE a dor e a morte arrostar.\nMinha alma se sustém em Deus\nAté findar os dias meus.\nE, amado pelo eterno Amor,\nVerei quão grande é Seu valor. (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 265,
            tb: 466,
            selecionado: true,
            estrofe1: 'Com fogo santo, ó Salvador,\nVem inspirar divino ardor\nNum cidadão do além.\nRevela-Te ao coração,\nFazendo-o agir com retidão,\nHonrando ao Sumo Bem.',
            estrofe2: 'Que nada possa conseguir\nA minha mente dividir\nNo meu serviço a Ti,\nAo mundo deve morta ser,\nÀ sua glória, ao seu prazer,\nE em Deus viver aqui.',
            estrofe3: 'Submisso à Tua santa lei,\nA Ti eu obedecerei\nDe todo o coração.\nGuiado pela Tua luz,\nEu provo o Teu amor, Jesus,\nEm doce comunhão!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 266,
            tb: 832,
            selecionado: true,
            estrofe1: 'Tua vontade faze, ó Senhor!\nEu sou feitura, Tu és o Autor.\nMolda e refaze todo o meu ser\nSegundo as normas do Teu querer.',
            estrofe2: 'Tua vontade faze, ó meu Deus!\nSonda e corrige os passos meus.\nTorna-me santo como Tu és,\nOuve os meu rogos, eis-me a Teus pés!',
            estrofe3: 'Tua vontade faze, ó meu Pai!\nPor ela o crente vive e não cai.\nGuia-me a vida com Tua luz,\nPoder e graça dá-me em Jesus.',
            estrofe4: 'Tua vontade, boa e sem par,\nQuero na vida realizar.\nVive, triunfa, domina, enfim,\nReina supremo, meu Deus, em mim!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 267,
            tb: 863,
            selecionado: true,
            estrofe1: 'Terno Jesus, quanto eu necessito\nQue outra vez me visites, Senhor;\nQuero sentir esse toque bendito,\nTeu poderoso toque de amor.',
            estrofe2: 'Débil na fé, muitas vezes tropeço,\nPor tantas dúvidas sinto temor;\nChego contrito a Ti e hoje peço\nTeu poderoso toque de amor.',
            estrofe3: 'Somente Tu poderás libertar-me,\nBusco poder celestial, Redentor;\nA santidade só Tu podes dar-me,\nTeu poderoso toque de amor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis-me aqui, em submissão,\nMaravilhoso, terno Jesus;\nToca, Senhor, meu coração,\nMaravilhoso, terno Jesus.'
        },
        {
            id: 268,
            tb: 189,
            selecionado: true,
            estrofe1: 'Ao meditar, Jesus, no Teu sofrer,\nEu quero mais e mais por Ti viver;\nOh! quanto resisti,\nMeus votos não cumpri,\nMas hoje entrego a Ti\nTodo o meu ser.',
            estrofe2: 'Submisso em oração no Teu altar,\nA minha débil fé vem aumentar.\nAjuda-me, Jesus,\nA carregar a cruz\nE, andando em Tua luz,\nTeu nome honrar.',
            estrofe3: 'Faze igual ao Teu meu coração,\nDá-me divino ardor e a compaixão;\nQue cada vez melhor\nEspalhe paz e amor,\nBuscando o pecador\nNa perdição.',
            estrofe4: 'Meu ser inteiro, ó Deus, consagro aqui.\nOs dons que deste a mim entrego a Ti.\nEm alegria ou dor,\nOu quando ao céu eu for,\nSou Teu, meu Salvador,\nServindo a Ti.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 269,
            tb: 389,
            selecionado: true,
            estrofe1: 'Não sou meu, pois Tu morreste,\nÓ Senhor, por mim na cruz;\nEu confesso alegremente\nQue pertenço a Ti, Jesus!',
            estrofe2: 'Não sou meu! Tu me remiste,\nE o Teu sangue me lavou;\nSó confio em Tua graça,\nQue minha alma resgatou.',
            estrofe3: 'Não sou meu! Venho entregar-Te\nTudo quanto julgo meu;\nTudo às Tuas mãos eu trago,\nRedentor, sou todo Teu!',
            estrofe4: 'Não sou meu! Inteiramente,\nSantifica-me, Senhor!\nDa vaidade e da soberba,\nVem livrar-me, ó Salvador!',
            estrofe5: '',
            som: '',
            coro: 'Não sou meu, não sou meu!\nBom Jesus, sou todo Teu!\nHoje mesmo e para sempre,\nBom Jesus, sou todo Teu!'
        },
        {
            id: 270,
            tb: 445,
            selecionado: true,
            estrofe1: 'Fala-me, Jesus, eu quero\nTua voz agora ouvir.\nEis-me aqui, junto ao madeiro,\nAnsioso a Te servir.\nOh! afasta os meus temores\nE revela o Teu querer,\nPor mercê das Tuas dores\nEu poderei vencer.',
            estrofe2: 'Fala-me, Jesus, eu sigo\nAonde queres, meu Senhor.\nÉ prazer andar conTigo\nNo gozo ou na dor.\nPurifica a quem Te implora\nAqui, no Teu altar,\nQuero ser Teu templo agora;\nOh! vem em mim reinar!',
            estrofe3: 'Que Teu sangue precioso\nVenha todo o mal lavar.\nTu, que és terno e poderoso,\nMe podes bem guardar.\nDeixo o mundo e seu engano,\nDigo adeus ao próprio eu\nE, entregue ao Teu plano,\nJesus, sou todo Teu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Fala, Jesus, humildemente eu ouço,\nAqui, ao pé da cruz,\nSeparo-me do mundo.'
        },
        {
            id: 271,
            tb: 22,
            selecionado: true,
            estrofe1: 'Oh! como servirei melhor\nEm gratidão a Ti, Jesus?\nFraco e inconstante foi meu labor\nPara exaltar a Tua cruz.',
            estrofe2: 'Surdo eu sou ao Teu mandar,\nLerda em servir é minha mão,\nMeus pés são tardos para enfrentar\nO meu Calvário em submissão.',
            estrofe3: 'Dá-me, Jesus, maior poder,\nAos olhos turvos dá visão.\nFaze-me crer, sem mais duvidar,\nE Te servir com devoção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Sinto, ao mirar Teu sofrer na cruz,\nQuanto falhei, rejeitando a luz;\nPeço, Senhor, mais graça e vigor\nPara servir-Te assim melhor.'
        },
        {
            id: 272,
            tb: 579,
            selecionado: true,
            estrofe1: 'Ao serdes tentados deveis resistir,\nPois sempre o inimigo vos quer iludir;\nVigiai, combatendo qualquer vil paixão,\nA Cristo seguindo como vero cristão.',
            estrofe2: 'O mau companheiro deveis evitar,\nNão ouve a Cristo, vos quer desviar.\nOh! sede ardorosos, com dedicação,\nA Cristo seguindo como vero cristão.',
            estrofe3: 'Deus dá a coroa só ao que vencer;\nAvante na luta; sem nada temer.\nUnidos ao Mestre, real Capitão;\nA Cristo seguindo como vero cristão.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vinde ao Mestre, pedindo\nForça, auxílio e graça;\nEle está sempre ouvindo;\nCristo vô-los quer dar.'
        },
        {
            id: 273,
            tb: 528,
            selecionado: true,
            estrofe1: 'Quero, Jesus, que me dês um coração\nPuro e lavado em Teu sangue sem par,\nLivre de todo o egoísmo e paixão,\nQual nenhum outro jamais pode dar.',
            estrofe2: 'Quero, Jesus, que me dês um coração\nCheio de santo e divino poder,\nArdendo em fogo, potente e eficaz,\nSantificado, e assim vou vencer.',
            estrofe3: 'Quero, Jesus, que me dês um coração\nApto a crescer pela graça e o bem,\nPara que assim, como Tu, eu possa ser\nFiel e, no fim, adorar-Te no além.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Um coração, terno Jesus,\nAlvo como a neve, sem manchas do mal,\nSomente em Ti, morto ali na cruz,\nPosso encontrá-lo e a paz divinal.'
        },
        {
            id: 274,
            tb: 167,
            selecionado: true,
            estrofe1: 'Se acaso eu hoje fui espinho a alguém\nOu se o levei a abandonar o bem,\nSe ao mau caminho eu atentei, também,\nPerdão, Senhor!',
            estrofe2: 'Se o meu falar foi pretensioso e vão\nOu se ao faminto eu recusei o pão,\nTemendo que ele me faltasse, então,\nPerdão, Senhor!',
            estrofe3: 'Se eu fui perverso, indiferente ou vil,\nSe só busquei abrigo em Teu redil,\nEm vez de ser soldado varonil,\nPerdão, Senhor!',
            estrofe4: 'Perdoa as transgressões da Tua lei,\nAs confessadas e as de que não sei,\nE guarda-me fiel à Tua grei,\nSenhor, amém!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 275,
            tb: 168,
            selecionado: true,
            estrofe1: 'Sonda-me, ó Deus, pois vês meu coração;\nProva-me, ó Pai, Te peço em oração.\nDe todo o mal liberta-me, Senhor,\nTambém da transgressão que oculta for.',
            estrofe2: 'Vem afastar os vis pecados meus,\nTua pureza busco aqui, meu Deus.\nVem-me inflamar e consumir de amor,\nPois quero-Te glorificar, Senhor.',
            estrofe3: 'Todo o meu ser, que já não julgo meu,\nQuero gastá-lo no serviço Teu.\nMinhas paixões Tu podes dominar;\nEu me submeto, oh! vem em mim reinar!',
            estrofe4: 'Lá do alto céu o avivamento vem,\nA começar em mim e indo além.\nO Teu poder, as bênçãos, Teu favor,\nConcede aos que são Teus, ó Pai de amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 276,
            tb: 858,
            selecionado: true,
            estrofe1: 'Bendito seja o Cordeiro,\nQue na cruz por nós morreu;\nBendito seja o Seu sangue,\nQue por todos nós verteu!\nEis nesse sangue lavados,\nTendo puro o coração,\nOs pecadores remidos\nQue perante Deus estão!',
            estrofe2: 'Quão espinhosa a coroa\nQue Jesus por nós levou;\nOh! quão profundas as chagas\nQue nos provam quanto amou!\nEis nessas chagas pureza\nPara o maior pecador,\nA quem mais alvo que a neve\nO Teu sangue faz, Senhor!',
            estrofe3: 'Se nós a Ti confessarmos\nE seguirmos Tua luz,\nTu não somente perdoas,\nPurificas, ó Jesus!\nLavas de todo o pecado,\nQue maravilha de amor!\nA nós mais alvos que a neve\nO Teu sangue faz, Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Alvo mais que a neve! (bis)\nSim, nesse sangue lavado,\nMais alvo que a neve serei.'
        },
        {
            id: 277,
            tb: 688,
            selecionado: true,
            estrofe1: 'Com sincero anelo em minha alma\nVenho à Tua presença, Senhor.\nSantifica meu ser, meus talentos,\nCom Teu toque de fogo e amor!',
            estrofe2: 'Faze-me aguardar paciente\nTeu Espírito consolador\nAo render-me à Tua vontade,\nAo buscar Teu divino favor.',
            estrofe3: 'Luz das luzes! Amor insondável!\nSó agora eu sei avaliar\nQuanto devo a Ti, meu bom Mestre,\nQuanto importa por Ti trabalhar.',
            estrofe4: 'Eu confio em Tua presença\nCada dia, por onde eu andar.\nAo mostrar Teu amor aos perdidos,\nQuero a Ti meu amor demonstrar.',
            estrofe5: '',
            som: '',
            coro: 'Mais ardente amor, consagração profunda,\nQuero ter por Ti, meu Salvador Jesus.\nPurifica-me com fogo lá do alto,\nPois, aqui, humilde espero ao pé da cruz.'
        },
        {
            id: 278,
            tb: 207,
            selecionado: true,
            estrofe1: 'Cristo, sê conosco,\nDesce com poder,\nMostra-nos Teu rosto,\nFaze-nos viver.\nE com humildade\nVamos-Te adorar\nE sinceramente\nO Teu nome honrar.',
            estrofe2: 'Tu nos revelaste\nTeu imenso amor\nQuando oraste ao Pai\nEm prol do malfeitor\nNo instante horrendo\nDo sofrer na cruz!\nQuem não vê, então,\nO Teu amor, Jesus?',
            estrofe3: 'Dá-nos o Teu sopro\nSantificador,\nVem! aviva a chama\nDo fraterno amor,\nGuarda-nos na via\nDa verdade e paz.\nBreve raia a aurora\nQue Teu dia traz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 279,
            tb: 135,
            selecionado: true,
            estrofe1: 'A minha vida, o meu querer,\nNas mãos do meu Senhor,\nQual pão partido há de ser,\nConstante ao Seu dispor,\nE no altar hei de verter\nA taça de amor.',
            estrofe2: 'Meu ser pertence a Ti, Senhor,\nPorém mais devo dar;\nE assim me encontro com temor\nPerante o Teu lagar;\nTu pedes todo o meu amor,\nQue venho entregar.',
            estrofe3: 'Em sacrifício vivo, eu,\nProstrado no altar,\nQual sacramento, Mestre meu,\nOferto o meu lidar;\nE enfim me chamarás ao céu\nPra sempre comungar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 280,
            tb: 130,
            selecionado: true,
            estrofe1: 'Tempos benditos hão de chegar,\nRios de bênçãos, graça sem par,\nVindos dos céus para nos inspirar,\nDivina promessa assim confirmar.',
            estrofe2: 'Portas celestes se abrirão,\nVentos divinos em nós soprarão;\nSe aguardarmos, já hão de chegar,\nA Igreja cobrindo, sem desapontar.',
            estrofe3: 'Nossos pedidos Deus ouvirá,\nTem a resposta e a dará.\nAvivamento, milagre da fé,\nBendito aquele que espera e crê.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Um avivamento Deus nos quer mandar,\nPoder e vitória a todos vai dar;\nDos céus vem chegando, resposta da fé,\nUm avivamento, quão belo ele é!'
        },
        {
            id: 281,
            tb: 170,
            selecionado: true,
            estrofe1: 'Bem de manhã, embora o céu sereno\nPareça um dia calmo anunciar,\nVigia e ora! O coração pequeno\nUm temporal pode abrigar.',
            estrofe2: 'Ao meio-dia e quando os sons da terra\nAbafam mais de Deus a voz de amor,\nRecorre à oração, evita a guerra\nE goza paz com o Senhor.',
            estrofe3: 'Do dia ao fim, após os teus lidares,\nRelembra as bênçãos do celeste amor\nE conta a Deus prazeres e pesares,\nDeixando em Suas mãos a dor.',
            estrofe4: 'E, sem cessar, vigia a cada instante,\nQue o inimigo ataca sem parar;\nSó com Jesus em comunhão constante\nÉ que o fiel vai triunfar.',
            estrofe5: '',
            som: '',
            coro: 'Bem de manhã, e sem cessar,\nVigiar e orar!'
        },

        {
            id: 282,
            tb: 26,
            selecionado: true,
            estrofe1: 'Sol da minha alma és Tu, Senhor!\nNoite não há se perto estás!\nDissipa as nuvens do temor\nE me concede a Tua paz!',
            estrofe2: 'Sol da minha alma és Tu, Jesus!\nCom Tua graça envolve a mim\nE, refletindo a pura luz,\nDá-me que eu viva até o fim.',
            estrofe3: 'Qual brando orvalho, o sono vem\nMinha alma e corpo restaurar.\nEm Ti, Jesus, supremo bem,\nSuave e doce é descansar!',
            estrofe4: 'Se neste dia um filho houver\nQue a voz divina desprezou,\nNão deixes que se vá perder\nA ovelha que se extraviou!',
            estrofe5: 'Há muitos hoje em luta e dor,\nEm indigência e tentação.\nVem confortá-los, ó Senhor,\nE dar-lhes Tua proteção!',
            som: '',
            coro: ''
        },
        {
            id: 283,
            tb: 66,
            selecionado: true,
            estrofe1: 'Bendita a hora de oração,\nQue acalma o aflito coração,\nQue leva ao trono de Jesus\nOs rogos por auxílio e luz!\nEm tempos de cuidado e dor,\nRefúgio tenho em meu Senhor;\nVencendo o ardil e a tentação,\nBendigo a hora de oração.',
            estrofe2: 'Bendita a hora de oração,\nQuando a fervente petição\nSobe ao benigno Salvador,\nQue atende à voz do meu clamor!\nJesus me ensina a recorrer\nAo Seu amor, ao Seu poder;\nContente e sem perturbação,\nEu busco a hora de oração.',
            estrofe3: 'Bendita a hora de oração,\nDe santa paz e comunhão!\nDesejo, enquanto aqui me achar,\nCom fé constante, humilde, orar;\nE enfim, no resplendor de Deus,\nNa glória dos mais altos céus,\nLembrar-me-ei com gratidão\nDas horas suaves de oração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 284,
            tb: 424,
            selecionado: true,
            estrofe1: 'Eis-nos, ó Pastor divino,\nTodos juntos num lugar,\nComo ovelhas, congregados,\nTeu auxílio a suplicar.\nSê presente, sê presente\nO rebanho a apascentar!',
            estrofe2: 'Guia os tristes, fatigados,\nAo aprisco do Senhor!\nLeva os tenros cordeirinhos\nNos Teus braços, bom Pastor,\nÀs pastagens, às pastagens\nDe celeste e doce amor!',
            estrofe3: 'Ó Jesus bondoso, escuta\nNossa humilde petição!\nVem encher o Teu rebanho\nDe sincera gratidão!\nCantaremos, cantaremos\nTua imensa compaixão.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 285,
            tb: 784,
            selecionado: true,
            estrofe1: 'Meu Jesus, ouve aqui minha oração,\nAbro humilde a Ti o meu coração.\nO caminho escuro está,\nLutas e tristezas há,\nMeu Senhor, vem já,\nOuve aqui, Jesus, minha oração.',
            estrofe2: 'Quão cruel é, Senhor, minha provação,\nOuve, meu Salvador, minha oração,\nQuero o Teu amor sentir,\nQuero a Tua voz ouvir,\nQuero a Ti seguir;\nOuve aqui, Jesus, minha oração.',
            estrofe3: 'Só por Ti vencerei toda a tentação.\nOuve, Herói da Cruz, minha oração,\nGuia-me, ó bom Pastor,\nFaze-me um vencedor,\nPor Teu grande amor\nOuve aqui, Jesus, minha oração.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 286,
            tb: 513,
            selecionado: true,
            estrofe1: 'Ouve, ó Deus, o Teu povo clamar:\nMais conversões.       (bis)\nVem entre nós Tua graça mostrar,\nMais conversões.       (bis)\nManda o Espírito Santo em poder\nPara que faça o rebelde em Ti crer\nE vida nova assim receber.\nDá-nos, Senhor, mais conversões.',
            estrofe2: 'Ouve, Jesus, nossa ardente oração:\nDá-nos mais fé. (bis)\nVem, sê presente em nossa reunião,\nDá-nos mais fé. (bis)\nOh! se os homens quisessem-Te ouvir\nPara poderem perdão conseguir\nE Tua bênção então possuir!\nDá-nos, Senhor, dá-nos mais fé!',
            estrofe3: 'É Teu desejo os perdidos salvar,\nCremos, Senhor!        (bis)\nSempre conosco prometes estar,\nCremos, Senhor!        (bis)\nAlmas serão convertidas a Ti\nE ao Teu serviço entregues aqui,\nNão mais pensando somente em si,\nCremos, Senhor! cremos, Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 287,
            tb: 196,
            selecionado: true,
            estrofe1: 'Recebereis do céu poder\nÉ a promessa de meu Pai.\nFirmes, não desanimeis,\nTende fé, orai, orai!',
            estrofe2: 'Disse Jesus: ―Qual é o pai\nA quem o filho pedir pão\nEm vez disso lhe dá pedra?‖\nImpossível! isso não!',
            estrofe3: 'Vós, que sois maus e sabeis dar\nAos vossos filhos o que é bom,\nQuanto mais o Pai celeste\nDar-vos-á o grande dom.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Pedi, pedi, pedi e dar-se-vos-á;\nBuscai, buscai, quem busca encontrará;\nBatei, batei até Deus atender;\nJesus, Jesus promete responder.'
        },

        {
            id: 288,
            tb: 543,
            selecionado: true,
            estrofe1: 'Com Tua mão segura bem a minha,\nPois eu tão frágil sou, ó Salvador,\nQue não me atrevo a dar jamais um passo\nSem Teu amparo, Cristo, meu Senhor!',
            estrofe2: 'Com Tua mão segura bem a minha,\nE pelo mundo alegre seguirei;\nMesmo onde as sombras caem mais escuras,\nTeu rosto vendo, nada temerei.',
            estrofe3: 'E, no momento de transpor o rio\nQue Tu, por mim, quiseste atravessar,\nCom Tua mão segura bem a minha,\nE sobre a morte eu hei de triunfar.',
            estrofe4: 'Quando voltares, lá dos céus descendo,\nSegura bem a minha mão, Senhor;\nCristo Jesus, conduze-me conTigo\nPara onde eu goze Teu eterno amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 289,
            tb: 174,
            selecionado: true,
            estrofe1: 'Ó, vem, Senhor Jesus,\nAbençoar Teu povo aqui.\nÓ, vem, Senhor Jesus,\nA nossa fé está em Ti!',
            estrofe2: 'Tu prometeste\nQue, onde dois ou três reunidos\nEm Teu nome se achassem,\nEstarias Tu, também.\nVem, nosso Deus,\nÓ Jesus, estende a mão,\nToca em cada um de nós,\nToca o nosso coração!',
            estrofe3: 'Tu, que mandaste\nTeu Espírito no cenáculo\nQuando ali Teu povo estava\nTe buscando em oração,\nNós Te pedimos:\nVem, Senhor, surpreender-nos,\nVem, visita-nos, Jesus,\nOuve a nossa petição!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 290,
            tb: 435,
            selecionado: true,
            estrofe1: 'Vivifica Tua Igreja,\nÓ bendito Salvador,\nAquecendo nossas almas\nNo divino, santo amor.\nVem, derrama sobre todos\nTua graça, ó Jesus,\nDando as bênçãos da verdade\nQue nos mostram Tua luz.',
            estrofe2: 'Pai, contempla Tua Igreja,\nVem, estende Tua mão!\nDá-lhe a graça insondável\nDa divina redenção.\nAntes que ela desfaleça\nE se torne sem vigor,\nVivifica, vivifica\nNossas almas, ó Senhor.',
            estrofe3: 'Santifica Tua Igreja\nPela graça divinal,\nFaze-a sempre triunfante\nNo conflito contra o mal,\nDá-lhe força renovada\nEm caminho para o Lar\nE que esteja preparada\nQuando Cristo regressar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 291,
            tb: 19,
            selecionado: true,
            estrofe1: 'Sempre, irmãos, orai e vigiai!\nPara vencer o mundo, alerta estai!\nSempre orai, lembrando o bom Jesus,\nQue ao Pai clamou quando foi sofrer na cruz.',
            estrofe2: 'Sempre orai, pois bem seguro está\nQuem teme a Deus e tudo a Cristo dá.\nSempre orai! que o Espírito de Deus\nPossa descer, dar valor aos filhos Seus.',
            estrofe3: 'Sempre orai, em alegria ou dor;\nEm hora própria chega o Salvador.\nSempre orai! Fiéis a Deus sereis\nE Suas bênçãos bem certo provareis.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 292,
            tb: 41,
            selecionado: true,
            estrofe1: 'Se nos assalta o temporal\nDas aflições e todo o mal,\nHá paz constante e proteção\nAo pé do altar de oração.',
            estrofe2: 'Em almejar o imortal,\nHá comunhão transcendental;\nE ungidos todos se unirão\nNum só lugar de oração.',
            estrofe3: 'Com asas de águia vou subir,\nNem tempo ou espaço hei de medir.\nDos céus me vem inspiração\nAli, no altar de oração.',
            estrofe4: 'Oh! deixe a língua de exultar,\nEsqueça o peito de arfar,\nInerte seja a minha mão\nSe olvidar a oração.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 293,
            tb: 456,
            selecionado: true,
            estrofe1: 'Chuvas de bênçãos teremos:\nÉ a promessa de Deus;\nTempos benditos trazendo\nChuvas de bênçãos dos céus.',
            estrofe2: 'Chuvas de bênçãos teremos,\nDe vida, paz e perdão;\nOs pecadores indignos\nGraça dos céus obterão.',
            estrofe3: 'Chuvas de bênçãos teremos,\nManda-nos já, ó Senhor!\nDá-nos o gozo dos frutos\nDos Teus ensinos de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Chuvas de bênçãos,\nChuvas de bênçãos dos céus,\nGotas benditas já temos,\nChuvas rogamos a Deus.'
        },

        {
            id: 294,
            tb: 375,
            selecionado: true,
            estrofe1: 'Deus presente está conosco,\nPronto todos a salvar;\nSobre as almas sequiosas,\nSua bênção quer mandar.',
            estrofe2: 'Eis a Ti, Jesus, erguemos\nNossos pobres corações;\nSendo rica a Tua graça,\nOuve as nossas petições.',
            estrofe3: 'Torna a nossa fé mais viva,\nMais ardente o nosso amor;\nEnche-nos de santo zelo,\nDe coragem e fervor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Manda, oh! manda ricas chuvas\nDessa bênção, Salvador!\nImploramos! Esperamos!\nVivifica-nos, Senhor!'
        },

        {
            id: 295,
            tb: 526,
            selecionado: true,
            estrofe1: 'Os noticiários descrevem o caos,\nEnfatizando a desgraça e o horror;\nNo fim do túnel do medo há uma luz\nPela tarefa do intercessor.',
            estrofe2: 'Ao ver estragos que o mal fabricou,\nVício, pecado, miséria e temor,\nPelo Espírito, lágrimas vêm,\nMas também força ao intercessor.',
            estrofe3: 'Há heresia e falta união,\nGeme o Corpo de Cristo, o Senhor.\n―Avivamento e não mais mornidão!‖\nOra em segredo o intercessor.',
            estrofe4: 'Autoridades, famílias, patrões,\nOs pecadores, os órfãos de amor...\nPaira no ar um urgente clamor\nQue exige a ação de um intercessor.',
            estrofe5: 'Gente sedenta à Fonte virá,\nMuitos famintos buscando o Pão;\nE a Igreja, em vitória, dirá:\n―Deus operou pela intercessão!‖',
            som: '',
            coro: 'Quero, Senhor, interceder,\nOh! dá-me a força do Espírito Santo,\nEm oração prevalecer\nE a resposta gloriosa obter!'
        },

        {
            id: 296,
            tb: 149,
            selecionado: true,
            estrofe1: 'Oh! por que duvidar\nSobre as ondas do mar,\nQuando Cristo caminho abriu?\nQuando forçado és\nA lutar contra o mar,\nSeu amor a ti quer revelar.',
            estrofe2: 'Ondas vêm-te assustar?\nTempestades no mar?\nDa montanha o Mestre te vê,\nE na tribulação\nEle vem socorrer:\nSua mão bem te pode suster.',
            estrofe3: 'Podes tu recordar\nMaravilhas sem par:\nNo deserto ao povo fartou.\nE o mesmo poder\nEle sempre terá,\nPois não muda e não falhará.',
            estrofe4: 'Quando pedes mais fé,\nEle ouve, oh! crê!\nMesmo sendo em tribulação.\nQuando a mão de poder\nO teu medo tirar,\nSobre as ondas, então, andarás.',
            estrofe5: '',
            som: '',
            coro: 'Solta o cabo da nau!\nToma os remos nas mãos\nE navega com fé em Jesus!\nE, então, tu verás\nQue bonança se faz,\nPois, com Ele, seguro serás.'
        },

        {
            id: 297,
            tb: 184,
            selecionado: true,
            estrofe1: 'Cristo amado, sei que na força do mal\nTu, meu Mestre, sempre serás protetor.\nTu me guardas, dando-me paz divinal;\nEu conTigo sempre serei vencedor!',
            estrofe2: 'Que alegria tenho no meu Salvador,\nTenho graça, vida de amor paternal!\nTudo posso, tudo, por Ti, meu Senhor;\nDeste mundo sou vencedor afinal!',
            estrofe3: 'Não duvido, Cristo, meu Mestre, de Ti,\nCreio em Tua rica promessa, Jesus;\nNão me deixes nem me rejeites aqui,\nQuero sempre ver Tua face de luz!',
            estrofe4: 'Oh! que bênção ter a certeza do bem,\nTer na vida paz e perdão do Senhor!\nMui alegre, busco essa pátria de além,\nOnde reina Cristo Jesus, Rei de amor!',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Mestre,\nSei que conTigo sou vencedor;\nDá-me graça.\nDá-me do Teu poder, Redentor.'
        },

        {
            id: 298,
            tb: 266,
            selecionado: true,
            estrofe1: 'Deus é por mim. Não temo\nO mundo e seu furor;\nMinha alma está segura\nNa graça do Senhor.\nSou, pelo Rei, amado,\nMeu defensor é Deus.\nNão temo inimigos,\nSou cidadão dos céus.',
            estrofe2: 'Declaro com firmeza\nQue Deus comigo vai;\nO Eterno Ser supremo\nÉ meu bondoso Pai.\nPor toda a parte, sempre\nMe cerca o Seu amor;\nPerigo algum me afasta\nDo excelso protetor.',
            estrofe3: 'Se Deus me justifica,\nQuem me condenará?\nDo grande amor de Cristo\nNinguém me apartará.\nA morte, a vida, os homens,\nTristeza e tentação,\nEm vão esperam todos\nRomper esta união.',
            estrofe4: 'Celeste luz me inunda\nDe paz e salvação;\nDe santo regozijo\nMe pulsa o coração.\nO sol que me ilumina\nÉ Cristo, meu Senhor;\nO gozo que me alegra\nÉ Seu constante amor.',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 299,
            tb: 797,
            selecionado: true,
            estrofe1: 'Firme nas promessas do meu Salvador,\nVou cantar louvores ao meu Criador.\nHei de confiar no Seu excelso amor,\nFirme nas promessas de Jesus.',
            estrofe2: 'Firme nas promessas, não irei falhar\nVindo as tempestades a me consternar;\nPelo Verbo eterno eu hei de trabalhar,\nFirme nas promessas de Jesus.',
            estrofe3: 'Firme nas promessas, sempre vejo assim\nPurificação no sangue para mim;\nPlena liberdade gozarei sem fim,\nFirme nas promessas de Jesus.',
            estrofe4: 'Firme nas promessas do Senhor Jesus,\nEm amor ligado com a Sua cruz;\nCada dia mais me alegro nessa luz,\nFirme nas promessas de Jesus.',
            estrofe5: '',
            som: '',
            coro: 'Firme, firme,\nFirme nas promessas de Jesus, meu Mestre.\nFirme, firme,\nSim, firme nas promessas de Jesus.'
        },

        {
            id: 300,
            tb: 591,
            selecionado: true,
            estrofe1: 'Mais graça Deus dá quando as cargas aumentam,\nMais força concede ao crescer o labor,\nEm grandes angústias envia consolo,\nEm todas as provas dá paz e valor.',
            estrofe2: 'E, quando os recursos em nós se esgotarem\nE em meio ao caminho a força faltar,\nVeremos a fonte da graça divina\nEm nós Seu poder começar a jorrar.',
            estrofe3: 'Amor sem limites, poder sem barreiras,\nQue graça infinita, inefável tem Deus!\nE desses tesouros, guardados em Cristo,\nEm grande medida dará sempre aos Seus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 301,
            tb: 569,
            selecionado: true,
            estrofe1: 'Qual âncora temos\nA fé no Senhor,\nFirmada na rocha,\nNão perde o valor!\nÉ a linda esperança\nQue outorga Jesus,\nLegada na morte\nDe angústia na cruz.',
            estrofe2: 'No arcano celeste\nNo trono de Deus,\nQue reina supremo\nNa glória dos céus;\nAli está presa\nE estável será,\nPois Deus o garante:\nJamais falhará!',
            estrofe3: 'E quando a tormenta\nMais rija bramir\nTenhamos certeza\nDe paz no porvir!\nNem fúria dos ventos\nNem choques do mar\nA entrada do porto\nNos podem vedar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 302,
            tb: 452,
            selecionado: true,
            estrofe1: 'Quando a tempestade ruge\nCom o seu feroz bramir,\nQuando as nuvens se acumulam,\nRaios mil a despedir,\nDo trovão o som tremendo\nFaz-se ouvir e com pavor,\nMas, na voz da tempestade,\nSoa a Tua voz, Senhor!',
            estrofe2: 'Quando o mar vem mansamente\nSobre a areia se espraiar,\nQuando a brisa sussurrante\nNos segreda ao perpassar,\nSoa mística harmonia,\nOuve-se um feliz rumor,\nSobre o coro vem, das ondas,\nTua doce voz, Senhor!',
            estrofe3: 'Quando o coração aflito\nQuer à dor, ao mal fugir,\nE se agita e luta e ruge,\nSem a doce paz sentir,\nQual um som que se repete\nNas quebradas a rolar,\nAo aflito e contristado\nTua voz vem consolar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Eis que ouvimos doce voz\nA animar os que andam sós,\nEm Ti sempre confiados\nE por Ti sempre a lutar\nNa aridez de imensas plagas,\nNo fragor do vasto mar.'
        },
        {
            id: 303,
            tb: 559,
            selecionado: true,
            estrofe1: 'Vai, alma tristonha,\nTeu pranto depor!\nEnterra os cuidados\nAos pés do Senhor!\nAo Mestre confia\nToda essa aflição,\nCristo te concede\nReal compaixão!',
            estrofe2: 'Teus sustos e medos\nDescobre ao Senhor!\nSeu mando transforma\nA noite em fulgor!\nLevanta a cabeça!\nCedo há de raiar\nO sol que dissipa\nNuvioso pesar!',
            estrofe3: 'Há muitos que choram\nAngústia maior;\nHá muitos cansados\nDe culpas e dor!\nVai! Leva a mensagem\nDa graça e luz!\nVai! Deixa as tristezas\nNas mãos de Jesus!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 304,
            tb: 188,
            selecionado: true,
            estrofe1: 'Quando eu preciso de meu Jesus,\nQuando tropeço diante da cruz,\nEle está perto com Sua luz\nQuando eu preciso mais.',
            estrofe2: 'Quando eu preciso de mais poder\nPra me amparar e me proteger,\nCristo está perto a me socorrer\nQuando eu preciso mais.',
            estrofe3: 'Quando eu preciso do meu Senhor,\nQuando me oprime o dissabor,\nEle está perto, o Salvador,\nQuando eu preciso mais.',
            estrofe4: 'Quando eu preciso de um irmão\nQue pode dar-me consolação,\nCristo me fala ao coração\nQuando eu preciso mais.',
            estrofe5: '',
            som: '',
            coro: 'Quando eu preciso mais, (bis)\nCristo está perto pra me ajudar\nQuando eu preciso mais.'
        },
        {
            id: 305,
            tb: 715,
            selecionado: true,
            estrofe1: 'Que consolação tem meu coração\nDescansando no poder de Deus!\nEle tem prazer em me proteger;\nDescansando no poder de Deus!',
            estrofe2: 'Sempre avante vou, bem contente estou\nDescansando no poder de Deus!\nTudo hei de vencer pelo Seu poder,\nDescansando no poder de Deus!',
            estrofe3: 'Não recearei, nada temerei\nDescansando no poder de Deus!\nGozo paz e amor junto a meu Senhor,\nDescansando no poder de Deus!',
            estrofe4: 'Lutas sem cessar hei de atravessar\nDescansando no poder de Deus!\nNão me deixará, mas me susterá;\nDescansando no poder de Deus!',
            estrofe5: '',
            som: '',
            coro: 'Descansando\nNos braços fortes do meu Deus;\nVou seguro\nDescansando no poder de Deus!'
        },
        {
            id: 306,
            tb: 299,
            selecionado: true,
            estrofe1: 'Simplesmente ao confiar,\nQuanta paz do céu me vem!\nTemporais pode enfrentar\nQuem confiança em Cristo tem.',
            estrofe2: 'Em meu débil coração\nVeio o Espírito reinar;\nMesmo em luta ou tentação\nNão me irá abandonar.',
            estrofe3: 'Com perigos ao redor\nOu se a vida me sorri,\nDentro em mim há um altar,\nCom Jesus me encontro ali.',
            estrofe4: 'Quando o vale assustador\nEu tiver de atravessar,\nPela mão do Bom Pastor\nBem seguro irei andar.',
            estrofe5: '',
            som: '',
            coro: 'Cada instante confiar,\nDia a dia, sem cessar,\nVou vivendo nessa luz,\nNa confiança em Jesus.'
        },
        {
            id: 307,
            tb: 332,
            selecionado: true,
            estrofe1: 'Minha alma firme está, meu Deus,\nFirme em Ti! Firme em Ti!\nPois resolvi ser um dos Teus,\nFirme em Ti!\nProfeta, Sacerdote e Rei\nEm Ti, Senhor Jesus, achei;\nPor isso grato cantarei\nSempre a Ti! Sempre a Ti!',
            estrofe2: 'Que os homens busquem ricos ser;\nCristo é meu! Cristo é meu!\nÉ rico além do meu saber;\nCristo é meu!\nA prata e o ouro hão de acabar,\nA fé, porém, vai perdurar\nE sobre as honras triunfar;\nCristo é meu! Cristo é meu!',
            estrofe3: 'Esteja eu bem ou mesmo em dor,\nCristo é meu! Cristo é meu!\nSe eu próspero ou pobre for,\nCristo é meu!\nE, quando a voz de Deus ouvir\nNo dia alegre em que eu partir\nDo mundo impuro, e aos céus subir,\nCristo é meu! Cristo é meu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 308,
            tb: 194,
            selecionado: true,
            estrofe1: 'Nada sei sobre o futuro,\nDesconheço o que há de vir;\nÉ provável que as nuvens\nVenham meu viver cobrir.\nNada temo do futuro,\nPois Jesus comigo está;\nVou seguindo confiante\nMeu caminho para lá.',
            estrofe2: 'Nada sei sobre o futuro,\nDesconheço o que haverá;\nSe das aves Ele cuida,\nDos Seus filhos cuidará.\nQuando andar pelos desertos\nOu em meio ao vendaval,\nSei que Cristo irá comigo,\nProtegendo-me do mal.',
            estrofe3: 'Meu caminho é mais brilhante\nDesfrutando o Seu amor;\nMinhas cargas são mais leves\nCom a ajuda do Senhor.\nQuando nas mansões eternas,\nQue na glória preparou,\nVou louvá-lO eternamente,\nPois a salvo me guardou.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Muitas coisas não compreendo,\nO amanhã o que trará?\nMas não devo preocupar-me:\nMeu Pastor à frente irá!'
        },
        {
            id: 309,
            tb: 442,
            selecionado: true,
            estrofe1: 'Nunca falha, nunca falta\nMeu bendito Salvador;\nNunca falha Sua graça,\nNunca falta Seu amor;\nSeus preceitos e promessas\nInfalíveis sempre são,\nMais seguros que os montes,   ) bis\nPara sempre durarão. )',
            estrofe2: 'Cristo nunca, nunca falta\nNa mais dura provação.\nQuando Satanás assalta\nCom tremenda tentação,\nProcurando derrotar-nos\nOu encher-nos de pavor,\n―Basta-vos a Minha graça,    ) bis\nPresto diz o Salvador. )',
            estrofe3: 'Nunca falha, nunca falta!\nQuantas vezes o provei,\nDesde que com fé singela\nA Jesus me entreguei!\nQuanto mais Jesus conheço,\nMais anseio por levar\nAos Seus pés os pecadores,    ) bis\nPara Ele os libertar.   )',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 310,
            tb: 261,
            selecionado: true,
            estrofe1: 'Oh! doce é meu descanso\nNo forte Redentor,\nPerfeitamente a salvo\nNa graça do Senhor!\nConfiando em Sua morte\nJamais perecerei!\nPor Ele foi cumprida\nA santa, eterna lei.',
            estrofe2: 'Salvo do meu pecado,\nSalvo da perdição,\nSalvo do triste império\nDa morte e tentação;\nLivre das incertezas\nQue a nossa vida traz,\nLivre de todo o medo,\nGozo de estável paz.',
            estrofe3: 'Inda por curtos dias\nEu vivo em meia-luz.\nMinha alma aguarda ansiosa\nA vinda de Jesus.\nCedo esta noite acaba,\nBreve Ele voltará;\nRaia a celeste aurora,\nCristo não tardará!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'A mim Jesus abriu\nSeu grande coração.\nEm Seu amor firmado,\nJá tenho a salvação.'
        },
        {
            id: 311,
            tb: 499,
            selecionado: true,
            estrofe1: 'Oh! Fé que vem de nossos pais!\nÉ grato ouvir a sua voz;\nConosco vive, mais e mais,\nLouvando a Deus, guiando a nós;\nDe nossos pais a santa fé\nNos auxilie a estar de pé!',
            estrofe2: 'Quando em cadeias e prisões\nE quando a espada lampejou,\nA paz desceu aos corações\nE as consciências libertou.\nDe nossos pais sublime fé\nQue nos alente a estar de pé!',
            estrofe3: 'Quem, como filho, desde já\nSeguir seus passos sem temor,\nDe dia em dia encontrará\nMais energia e mais amor.\nDe nossos pais a antiga fé\nAjudará a estar de pé.',
            estrofe4: 'E até a aurora aparecer\nNo dia que não tem igual\nE venha o evangelho ser\nTriunfador de todo o mal,\nPossamos nós, sagrada fé,\nLutar por ti, morrer até!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 312,
            tb: 513,
            selecionado: true,
            estrofe1: 'Oh! que descanso em Jesus encontrei;\nCristo é meu! Cristo é meu!\nOh! que tesouros infindos achei;\nCristo é meu! Cristo é meu!\nQueiram os outros o mundo pra si,\nBusquem riquezas, delícias aqui,\nEscolherei, ó Jesus, sempre a Ti!\nCristo é meu! Cristo é meu!',
            estrofe2: 'Quer na aflição, na doença ou na dor,\nCristo é meu! Cristo é meu!\nGoze eu saúde, perfeito vigor,\nCristo é meu! Cristo é meu!\nSempre ao meu lado, me vem socorrer\nCom Seu amor e infinito poder;\nEm cada transe Ele me quer valer.\nCristo é meu! Cristo é meu!',
            estrofe3: 'No dia amargo da perseguição,\nCristo é meu! Cristo é meu!\nNas duras provas e na tentação,\nCristo é meu! Cristo é meu!\nCristo o pecado no mundo venceu\nQuando por mim no Calvário morreu\nE da vitória a certeza me deu;\nCristo é meu! Cristo é meu!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 313,
            tb: 687,
            selecionado: true,
            estrofe1: 'O que me importa se as nuvens se aproximam,\nO meu Senhor e Mestre cuidará de mim;\nSe a tempestade está tentando confundir-me,\nA salvo sempre estou em Suas mãos.',
            estrofe2: 'Se eu não entendo tantas coisas que se passam,\nEm Deus confio e obedeço à Sua lei.\nA minha fé em Deus é o que supera tudo,\nPois eu seguro estou em Suas mãos.',
            estrofe3: 'A cada dia Deus Se mostra suficiente,\nPois eu entregue a Ele estou e ao Seu querer.\nA cada dia Sua graça é mais presente,\nE vou permanecer em Suas mãos.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Em Suas mãos, em Suas mãos,\nNas mãos de Deus estou por onde for.\nSe há nuvens ao redor,\nSeu trilho é o melhor,\nPois confiante estou nas mãos de Deus.'
        },
        {
            id: 314,
            tb: 339,
            selecionado: true,
            estrofe1: 'Pelo amor de Deus bendito,\nVai tudo bem!\nSeu amor é infinito;\nVai tudo bem!\nEsse amor nos é mostrado\nEm Seu Filho muito amado,\nQue por nós foi imolado.\nVai tudo bem!',
            estrofe2: 'Canta a fé quando há tristeza:\nVai tudo bem!\nCanta, sim, e com firmeza:\nVai tudo bem!\nPois, se Deus é quem nos guia,\nTernamente nos vigia\nCom bondade, noite e dia.\nVai tudo bem!',
            estrofe3: 'Quer na vida, quer na morte,\nVai tudo bem!\nMesmo em tempestade forte,\nVai tudo bem!\nPelo sangue resgatados\nE do mundo separados,\nSempre por Jesus guardados,\nVai tudo bem!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 315,
            tb: 186,
            selecionado: true,
            estrofe1: 'Deus nos dá promessas e cumpre o que diz;\nJamais foi a fé iludida.\nSe as provas são duras e estás infeliz,\nDeus nunca as promessas olvida.',
            estrofe2: 'Quem pede e busca vai sempre obter\nA bênção por Deus garantida,\nJamais foi em vão a Jesus recorrer,\nDeus nunca as promessas olvida.',
            estrofe3: 'Se tremes e gemes na forja da dor,\nDeus dá à tua alma ferida\nConsolo sublime, com voz de amor;\nDeus nunca as promessas olvida.',
            estrofe4: 'Se laços estreitos a morte romper,\nIremos, com fronte erguida,\nNo além, nossos entes queridos rever;\nDeus nunca as promessas olvida.',
            estrofe5: '',
            som: '',
            coro: 'As santas promessas bem firmes estão\nQual rocha no mar desta vida,\nE os que têm fé em breve verão:\nDeus nunca as promessas olvida.'
        },
        {
            id: 316,
            tb: 586,
            selecionado: true,
            estrofe1: 'Em Jesus confiar, Sua lei observar,\nOh! que gozo, que bênção, que paz!\nSatisfeito guardar tudo quanto ordenar,\nAlegria perene nos traz.',
            estrofe2: 'O inimigo falaz e a calúnia mordaz\nO Senhor saberá derrotar.\nNem tristeza, nem dor, nem angústia maior\nPoderão nossa fé abalar.',
            estrofe3: 'Grande prova de amor, comunhão no Senhor\nTem o crente zeloso e leal;\nO Seu rosto mirar é consolo sem par,\nÉ delícia que não tem igual.',
            estrofe4: 'Resolutos, Senhor, e com zelo e fervor,\nOs Teus passos queremos seguir,\nTeus preceitos guardar, o Teu nome exaltar;\nTeu querer temos gosto em cumprir.',
            estrofe5: '',
            som: '',
            coro: 'Crer e observar tudo quanto ordenar;\nO fiel obedece ao que Cristo mandar!'
        },
        {
            id: 317,
            tb: 211,
            selecionado: true,
            estrofe1: 'Se, ao seguir nos passos do meu Mestre,\nO Seu serviço caro me custar,\nSe a escuridão cobrir o meu caminho\nE a minha cruz pesada se tornar...',
            estrofe2: 'Se, ao pregar, as portas se fecharem,\nLembrar-me-ei: de Deus é a missão;\nSeu grande amor jamais será frustrado\nPela maldade ou barras de prisão.',
            estrofe3: 'Se eu chorar perante o sofrimento\nE o meu andar difícil se tornar,\nNão negarei Aquele a quem sigo,\nMas sempre o nome dEle irei honrar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Fiel serei,\nE as novas de amor\nVou sempre proclamar\nAo pecador.'
        },
        {
            id: 318,
            tb: 214,
            selecionado: true,
            estrofe1: 'Aflito e triste coração,\nDeus cuidará de ti;\nPor ti opera a Sua mão,\nQue cuidará de ti.',
            estrofe2: 'Na dor cruel, na provação,\nDeus cuidará de ti;\nSocorro dá e salvação,\nPois cuidará de ti.',
            estrofe3: 'A tua fé Deus quer provar,\nMas cuidará de ti;\nO teu amor quer aumentar,\nE cuidará de ti.',
            estrofe4: 'Nos Seus tesouros tudo tens,\nDeus cuidará de ti;\nTerrestres e celestes bens,\nE cuidará de ti.',
            estrofe5: 'O que é mister te pode dar\nQuem cuidará de ti;\nNos braços Seus te sustentar,\nPois cuidará de ti.',
            som: '',
            coro: 'Deus cuidará de ti,\nEm cada dia proverá;\nSim, cuidará de ti,\nDeus cuidará de ti.'
        },
        {
            id: 319,
            tb: 501,
            selecionado: true,
            estrofe1: 'Em nada ponho a minha fé\nSenão na graça de Jesus,\nNo sacrifício remidor,\nNo sangue do bom Redentor.',
            estrofe2: 'Se a face não Lhe posso ver,\nNa Sua graça vou viver;\nEm cada prova, sem falhar,\nSempre hei de nEle confiar.',
            estrofe3: 'Seu juramento é mui leal,\nAbriga-me no temporal;\nAo vir cercar-me a tentação,\nÉ Cristo a minha salvação.',
            estrofe4: 'Assim que o Seu clarim soar,\nIrei com Ele me encontrar\nE gozarei da redenção\nCom todos que no céu estão.',
            estrofe5: '',
            som: '',
            coro: 'A minha fé e o meu amor\nEstão firmados no Senhor,\nPois rocha firme é o Senhor.'
        },
        {
            id: 320,
            tb: 379,
            selecionado: true,
            estrofe1: 'Doce e rica é a promessa\nDo Salvador Jesus, nosso Rei!\nAo que confia na Sua graça\nEle diz: ―Nunca te deixarei.',
            estrofe2: 'Eu sou teu Deus e para guiar-te\nSempre contigo Eu estarei;\nNão temas, pois bem firme e seguro\nEu pela mão te conduzirei.',
            estrofe3: 'Dei o Meu sangue para remir-te,\nPelo teu nome Eu te chamei;\nMeu para sempre tu és agora,\nE nunca mais Eu te deixarei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: '―Oh! não temas! Oh! não temas!\nPois Eu contigo sempre estarei;\nOh! não temas! Oh! não temas!\nPorque Eu nunca te deixarei.'
        },
        {
            id: 321,
            tb: 415,
            selecionado: true,
            estrofe1: 'És, ó Cristo, o meu abrigo\nSe em perigo eu andar\nE me inspiras santo alento\nQuando triste me achar.\nEm Teu nome (bis)\nHei de sempre confiar.',
            estrofe2: 'Longo tempo, tão indigno,\nDuvidei do Teu amor\nE não cria, oh! que pena,\nNa palavra do Senhor,\nMas agora        (bis)\nCreio firme em Teu favor.',
            estrofe3: 'Fé gloriosa, vencedora,\nQue combate Satanás,\nFé preciosa que subjuga\nTodo o mal, trazendo paz,\nFé sincera      (bis)\nAo Teu servo sempre dás.',
            estrofe4: 'No conflito com as trevas\nE na rude tentação,\nTeu poder é bom escudo,\nTeu amor, consolação;\nE por isso      (bis)\nTe ofereço gratidão.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 322,
            tb: 190,
            selecionado: true,
            estrofe1: 'Vindo sombras escuras nos caminhos teus,\nOh! jamais desanimes! canta um hino a Deus!\nCada nuvem chuvosa um arco-íris traz\nQuando em teu coração reinar perfeita paz.',
            estrofe2: 'Se o viver é de lutas, cheio de amargor,\nMostra afeto aos aflitos, age em seu favor\nE de tudo o que sofres esquecer-te-ás,\nFruirás gozo e calma se tiveres paz.',
            estrofe3: 'Vem após densa noite a aurora matinal,\nFica o céu mais brilhante após o temporal!\nA esperança não percas, tudo vencerás!\nFugirão as tristezas se tiveres paz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Se teu coração estiver em paz,\nBem contente e alegre sempre te acharás.\nSe teu coração estiver em paz,\nTu verás que um arco-íris cada nuvem traz.'
        },
        {
            id: 323,
            tb: 157,
            selecionado: true,
            estrofe1: 'Os sinos anunciam que o dia declinou.\nQuem caiu ali, sem força e sem fé?\nSe és tu o peregrino que de Deus se desviou,\nNão desesperes nunca, pois Deus dará mercê.',
            estrofe2: 'A noite se transforma em luz se Deus contigo andar.\nNunca falhará Jesus, teu Salvador.\nCom Cristo ao teu lado, tudo podes enfrentar,\nConfia nEle agora, não fujas do Senhor.',
            estrofe3: 'Jamais se cansarão os que esperam em Jesus,\nDeus lhes dá, aqui, a graça e o vigor;\nDas sombras se erguendo, correm sempre para a luz\nE sobem como as águias, louvando ao Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Não é segredo, Deus dá poder.\nO que deu a outros tu podes ter.\nJesus espera, vem-te render!\nNão é segredo, Deus dá poder.'
        },
        {
            id: 324,
            tb: 219,
            selecionado: true,
            estrofe1: 'Jesus, o bom Pastor,\nSeguiu-me com grande amor\nE do abismo me livrou.\nEle estendeu a mão\nE guiou-me da escuridão\nÀ luz do Seu divino amor.',
            estrofe2: 'Estando com Jesus,\nCercado por Sua luz,\nO mundo perde a atração.\nJamais me importarei\nSe o mundo me desprezar,\nPois Cristo é todo o meu prazer.',
            estrofe3: 'Sei que no santo Lar\nIrei sempre descansar\nE com Jesus lá estarei.\nQual digno vencedor\nAos pés do meu bom Pastor,\nPrazer eterno gozarei.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Querido Salvador,\nO Teu imenso amor\nEnche meu coração\nDe gratidão.\nEu só não posso andar,\nVem-me, Senhor, guiar\nCom Tua santa mão\nÀ celestial mansão.'
        },
        {
            id: 325,
            tb: 510,
            selecionado: true,
            estrofe1: 'Luz celestial, sê na escuridão\nO orientador.\nLonge do Lar estou, tem compaixão\nDe mim, Senhor.\nGuia meus pés, não quero duvidar,\nPois sei que vês o fim do meu lidar.',
            estrofe2: 'Nem sempre Te busquei em oração,\nÓ meu Jesus.\nVivi no mundo e na perdição,\nSem Tua luz.\nNão respeitei as Tuas leis, Senhor,\nIndigno fui do Teu grandioso amor.',
            estrofe3: 'Na aflição e dor, com Teu poder\nGuiar-me-ás.\nNos contratempos fortes do viver,\nÉs minha paz.\nGuarda-me, Deus, na lida terrenal\nAté chegar à pátria celestial.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 326,
            tb: 207,
            selecionado: true,
            estrofe1: 'Mestre, o mar se revolta,\nAs ondas nos dão pavor,\nO céu se reveste de trevas,\nNão temos um Salvador!\nNão vês que estamos morrendo?\nPodes assim dormir,\nSe a cada momento nos vemos\nJá prestes a submergir?',
            estrofe2: 'Mestre, tão grande tristeza\nMe quer hoje consumir,\nE a dor que perturba minha alma\nTe implora: Vem-me acudir!\nDe ondas do mal que me encobrem,\nQuem me fará sair?\nEu pereço, pereço, ó Mestre;\nTe rogo, vem-me acudir!',
            estrofe3: 'Mestre, chegou a bonança,\nEm paz vejo o céu e o mar;\nO meu coração goza calma\nQue não poderá findar.\nFica comigo, ó Mestre,\nDono da terra e céu,\nE assim chegarei bem seguro\nAo porto, destino meu.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'As ondas atendem ao Meu mandar, sossegai!\nSeja o encapelado mar,\nA ira dos homens, o gênio do mal,\nTais águas não podem a nau tragar\nQue leva o Mestre do céu e mar.\nPois todos ouvem o Meu mandar,\nSossegai! Sossegai!\nConvosco estou para vos salvar,\nSossegai!'
        },
        {
            id: 327,
            tb: 566,
            selecionado: true,
            estrofe1: 'No mundo, sozinho não posso andar,\nNa santa vereda não sei caminhar.\nCristo é meu abrigo e quer-me salvar,\nSim, Ele promete jamais me deixar.',
            estrofe2: 'Se é forte o inimigo, mais forte é Jesus,\nEm cada perigo ao porto conduz.\nCom Ele ao meu lado, feliz vou lutar,\nSim, Ele promete jamais me deixar.',
            estrofe3: 'Nas lutas da vida, cruéis aflições,\nNos males do dia e vis tentações,\nMeu terno Amigo me vem libertar,\nSim, Ele promete jamais me deixar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Jamais me deixar, (bis)\nMeu Cristo, o Mestre, promete\nJamais me deixar.\nJamais me deixar, (bis)\nMeu Cristo, o Mestre, promete\nNunca, jamais me deixar.'
        },
        {
            id: 328,
            tb: 312,
            selecionado: true,
            estrofe1: 'Ó bondoso Salvador,\nSê Tu meu amparador!\nGrandes ondas de aflição,\nFortes ventos perto estão.\nDeste espanto e do terror\nVem salvar-me, ó bom Senhor,\nE no porto faze entrar\nMinha barca sem quebrar!',
            estrofe2: 'Consternado nesta dor,\nSem refúgio, sem vigor,\nMeu medroso coração\nClama a Ti por salvação.\nMostra o Teu imenso amor,\nÓ benigno Salvador!\nPoderosa e clara luz,\nNão me deixes, ó Jesus!',
            estrofe3: 'Compassivo Redentor,\nVale a um triste pecador!\nVida e gozo Tu me dás,\nGraça infinda, eterna paz.\nEnche o débil coração\nCom os dons da salvação,\nE, seguro e sem temor,\nGozarei do Teu favor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 329,
            tb: 838,
            selecionado: true,
            estrofe1: 'Tu, Senhor, és meu escudo,\nMeu amparo, minha luz;\nNão receio nem vacilo,\nPois me guardas, ó Jesus.',
            estrofe2: 'Quer aflito, quer prostrado,\nQuer exposto à tentação,\nA vitória tenho certa,\nPois me guia a Tua mão.',
            estrofe3: 'Não me cegam as riquezas\nDeste mundo tão falaz,\nTu me dás o Teu tesouro:\nTua graça, Tua paz.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Vai, minha alma, ao teu refúgio,\nConfiando sem cessar\nEm Jesus, minha esperança,\nMinha Rocha secular.'
        },
        {
            id: 330,
            tb: 415,
            selecionado: true,
            estrofe1: 'Vem guiar-me, ó Deus bendito,\nNesta peregrinação;\nTeu poder é infinito, (bis)\nNão me largue a Tua mão! (bis)',
            estrofe2: 'Quando, em meio de inimigos,\nAndo cheio de temor,\nOu por entre mil perigos, (bis)\nVem guiar-me, ó Salvador! (bis)',
            estrofe3: 'Do maná, o pão da vida,\nVem nutrir meu coração;\nGuie a nuvem minha lida (bis)\nNesta imensa solidão! (bis)',
            estrofe4: 'Fende a rocha milagrosa,\nDá-me puro manancial;\nA coluna luminosa (bis)\nSeja sempre o meu fanal. (bis)',
            estrofe5: 'Ao Jordão, enfim, chegado,\nDá-me a Tua mão, Senhor,\nE, seguro, no outro lado, (bis)\nCantarei a Ti louvor! (bis)',
            som: '',
            coro: ''
        },
        {
            id: 331,
            tb: 806,
            selecionado: true,
            estrofe1: 'Conduze-me, ó Mestre, com Tua mão\nE, assim, jamais me falte a proteção!\nNão quero nem um passo sem Ti andar;\nÓ meu Jesus, sê sempre meu luminar.',
            estrofe2: 'Em Tua graça envolve meu coração\nE dá-lhe paz e calma em aflição;\nQue eu tenha em Ti repouso bem junto à cruz\nE nunca me afaste de Ti, Jesus!',
            estrofe3: 'E, mesmo quando a luta tremenda for,\nSeguro hás de guiar-me, meu Redentor!\nConduze-me, ó Mestre, com Tua mão\nE, assim, jamais me falte a proteção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },

        {
            id: 332,
            tb: 245,
            selecionado: true,
            estrofe1: 'Eu tenho resolvido\nSeguir-Te até o fim,\nPois Tu, Senhor, prometes\nGuiar-me sempre a mim.\nEu sei que sou mui fraco\nE o bem não sei fazer,\nMas pela Tua graça\nHei sempre de vencer.',
            estrofe2: 'O mundo Tu venceste\nE as suas obras más;\nE sobre tudo reinas,\nÓ Príncipe da Paz.\nNo céu e aqui na terra\nImpera o Teu poder,\nE, pela Tua graça,\nHei sempre de vencer!',
            estrofe3: 'Cercado de inimigos\nAqui no mundo estou;\nAs tentações apertam\nPor onde quer que vou;\nMas Tu estás mais perto,\nPois vens em mim viver,\nE, pela Tua graça,\nHei sempre de vencer!',
            estrofe4: 'A todos que Te seguem\nE tomam sua cruz,\nPrometes que conTigo\nIrão morar, Jesus;\nDescansarão na glória\nConTigo, ó Vencedor,\nPois pela Tua graça\nVenceram, Salvador.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 333,
            tb: 444,
            selecionado: true,
            estrofe1: 'Todos falam dos perigos\nDo caminho em que eu estou,\nMas não vêem a luz que brilha\nEm redor por onde vou.\nVem, ó Deus, guiar-me os passos,\nVem meu trilho iluminar,\nNeste mundo tenebroso\nSó por mim não posso andar.',
            estrofe2: 'Falam mais em desenganos\nE na dura provação,\nMas Jesus ampara sempre\nE me dá consolação.\nSei que meu amor é fraco,\nQue me inclino a tropeçar,\nMas, com Seu divino auxílio,\nHei de sempre triunfar.',
            estrofe3: '',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 334,
            tb: 204,
            selecionado: true,
            estrofe1: 'Finda-se este dia que meu Pai me deu,\nSombras vespertinas cobrem já o céu.\nÓ Jesus bendito, se comigo estás,\nEu não temo a noite, vou dormir em paz.',
            estrofe2: 'Com os meus pecados, eu Te entristeci,\nMas perdão Te peço por amor de Ti;\nSou humano e fraco, livra-me do mal,\nE em sossego tenho proteção real.',
            estrofe3: 'Pelos pais e amigos, pela santa lei,\nPelo amor divino, graças Te darei.\nÓ Jesus, aceita minha petição,\nE seguro durmo, sem perturbação.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 335,
            tb: 309,
            selecionado: true,
            estrofe1: 'Guia, Cristo, minha nau\nSobre o agitado mar;\nTão enfurecido e mau,\nQuer fazê-la naufragar.\nVem, Jesus, oh! vem guiar,\nMinha nau vem pilotar!',
            estrofe2: 'Como sabe serenar\nBoa mãe ao filho seu,\nVem, acalma, assim, o mar\nQue se eleva até o céu.\nVem, Jesus, oh! vem guiar,\nMinha nau vem pilotar!',
            estrofe3: 'Se, no porto, quando entrar,\nMais o mar se enfurecer,\nQue me possa deleitar\nEm ouvir Jesus dizer:\n―Entra, pobre viajor,\nNo descanso do Senhor.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 336,
            tb: 294,
            selecionado: true,
            estrofe1: 'Guia-me, ó Salvador,\nPela senda divinal,\nAo Teu lado, sem temor,\nTenho gozo perenal!',
            estrofe2: 'Não me deixes, ó Senhor,\nPois, sem Ti, não posso andar;\nLeva-me por Teu amor\nPara o meu eterno Lar.',
            estrofe3: 'És a minha salvação,\nMeu querido Redentor,\nDa terrível corrupção\nMe salvaste com amor.',
            estrofe4: 'Quero Teu somente ser,\nSempre a Ti, Senhor, servir.\nCristo, és todo o meu viver,\nVou conTigo o céu fruir.',
            estrofe5: '',
            som: '',
            coro: 'Cristo, Cristo,\nNão me deixes, ó Senhor!\nGuia-me por Teu amor,\nE serei um vencedor.'
        },
        {
            id: 337,
            tb: 405,
            selecionado: true,
            estrofe1: 'Meu tesouro inestimável,\nMais que a vida, mais que o amor,\nMais que tudo o que conheço\nÉs, Jesus, meu Salvador.',
            estrofe2: 'Por prazer ou por descanso\nNão Te venho suplicar,\nMesmo na mais dura prova\nVou conTigo sempre andar.',
            estrofe3: 'Se o vale for sombrio\nE meu passo vacilar,\nQueira Tua mão divina\nHoje e sempre me guiar.',
            estrofe4: 'Quando, pelas santas portas\nDa feliz Jerusalém,\nEu entrar na Tua glória,\nGozarei o eterno bem.',
            estrofe5: '',
            som: '',
            coro: 'Junto a Ti, junto a Ti, (bis)\nQuero andar conTigo, ó Mestre,\nNa jornada minha aqui.'
        },
        {
            id: 338,
            tb: 378,
            selecionado: true,
            estrofe1: 'Minha cruz eu levo agora,\nQuero a Ti, Jesus, seguir;\nDe hoje em diante a Ti pertenço,\nVenha o que me possa vir.',
            estrofe2: 'Que pereçam vis prazeres,\nBens que tanto desejei;\nMinha herança é mais preciosa,\nSempre a Deus e aos céus terei.',
            estrofe3: 'Perco amigos, casas, honras,\nSofro injúria crucial?\nTudo é grato em Teu serviço,\nTeu amor derrota o mal.',
            estrofe4: 'Tendo a Tua complacência,\nÓ Deus forte e protetor,\nQuer me enganem, quer me odeiem,\nVou lutar por Ti, Senhor!',
            estrofe5: '',
            som: '',
            coro: 'Eu Te seguirei, ó Cristo,\nQue por mim morreste aqui!\nSe do mundo és Tu malquisto,\nNão me importa, eu sigo a Ti.'
        },
        {
            id: 339,
            tb: 830,
            selecionado: true,
            estrofe1: 'Em minha alma hoje brilha o sol/nGlorioso em resplendor,/nMais brilhante que a clara luz/nÉ o brilho de Jesus.',
            estrofe2: 'Em minha alma hoje há canção,\nDoce música ao Rei,\nE Jesus escuta a minha voz,\nA Ele cantarei.',
            estrofe3: 'Em minha alma hoje há prazer,\nFé, amor e gratidão\nPelas bênçãos que Jesus me dá,\nConforto e proteção.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ' Há um sol que brilha em minha alma,\nE eu gozo alegria e paz\nAo ver a terna face de Jesus.\nEm minha alma brilha o sol.'
        },
        {
            id: 340,
            tb: 517,
            selecionado: true,
            estrofe1: 'Comigo habita, ó Deus! a noite vem,\nAs trevas crescem, eis, Senhor, convém\nQue me socorra a Tua proteção;\nOh! vem fazer comigo habitação!',
            estrofe2: 'Vem revelar-Te a mim, Jesus, Senhor,\nDivino Mestre, Rei, Consolador!\nMeu guia forte, amparo em tentação;\nVem, vem fazer comigo habitação!',
            estrofe3: 'Em breve aqui terei meu fim mortal;\nDesaparece o gozo terreal.\nMudança vejo em tudo, e corrupção;\nComigo faze eterna habitação!',
            estrofe4: '\nNão há perigo andando com Jesus,\nPresente está nas trevas ou na luz.\nMorte e sepulcro não aterrarão\nOnde meu Deus fizer habitação.',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 341,
            tb: 34,
            selecionado: true,
            estrofe1: 'Cristo, meu Mestre,\nMeu amigo sem igual,\nTu dás descanso,\nSalvação real.\nQuando sou provado,\nPrestes a desfalecer,\nTu, meu Cristo amado,\nVens-me socorrer.',
            estrofe2: 'Só Tu me amparas\nQuando perseguido sou,\nEm Ti, ó Cristo,\nSocorrer-me vou,\nPois em Ti eu posso\nResistir à tentação,\nSim, em Ti obtenho\nForça, paz, perdão.',
            estrofe3: 'Cristo, meu Mestre,\nQue mais gozo posso ter\nQue no Teu reino\nTua glória ver?\nEm Teu seio quero\nMinha fronte reclinar,\nPara ter descanso\nDeste labutar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Cristo, vem mais perto,\nDá-me gozo, paz, perdão!\nPerto, sim, mais perto\nDo meu coração!'
        },
        {
            id: 342,
            tb: 451,
            selecionado: true,
            estrofe1: 'Que bondoso amigo é Cristo!\nRevelou-nos Seu amor\nE nos diz que Lhe entreguemos\nOs cuidados, sem temor.\nFalta ao coração dorido\nGozo, paz, consolação?\nÉ porque não insistimos\nCom Jesus em oração.',
            estrofe2: 'Andas triste e carregado\nDe pesares e de dor?\nA Jesus, refúgio eterno,\nVai, com fé, teu mal expor.\nTeus amigos te desprezam?\nConta-Lhe isso em oração;\nE do Seu amor supremo\nEncherás o coração.',
            estrofe3: 'Cristo é verdadeiro amigo!\nDisso prova nos mostrou,\nPara nos salvar da morte\nSobre a cruz Ele expirou.\nDerramou precioso sangue,\nPara as manchas nos lavar;\nPaz em vida e no futuro\nJá podemos alcançar!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 343,
            tb: 643,
            selecionado: true,
            estrofe1: 'Descansa, ó alma: eis o Senhor ao lado,\nPaciente leva, e sem queixar-te, a cruz.\nDeixa o Senhor tomar de ti cuidado:\nEle não muda, o teu fiel Jesus!\nProssegue, ó alma: o Amigo celestial\nProtegerá teus passos no espinhal.',
            estrofe2: 'Prossegue, ó alma: o trilho é estreito e escuro,\nMas no passado guiou-te Deus assim!\nConfia agora a Ele o teu futuro,\nQue esse mistério há de aclarar-se enfim.\nConfia, ó alma: a Sua mansa voz\nAinda acalma o vento e o mar feroz!',
            estrofe3: 'Confia, ó alma: a hora vem chegando,\nIrás com Cristo, o teu Senhor, morar.\nSem dor nem mágoas gozarás, cantando,\nAs alegrias do celeste Lar.\nDescansa, ó alma: agora há pranto e há dor,\nDepois, o gozo, a paz, o céu de amor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 344,
            tb: 716,
            selecionado: true,
            estrofe1: 'Perfeita paz! Bem além do pensamento.\nPerfeita paz! Que deixou meu Salvador.\nPerfeita paz! Que se estende à eternidade.\nPerfeita paz! Perfeita paz!',
            estrofe2: 'Perfeita paz!   Reina em cada sofrimento.\nPerfeita paz!   Nova em cada amanhecer.\nPerfeita paz!   É o legado do meu Mestre.\nPerfeita paz!   Perfeita paz!',
            estrofe3: 'Perfeita paz! Mesmo em plena tempestade.\nPerfeita paz! Nem o inferno a vencerá.\nPerfeita paz! Pelos tempos, imutável.\nPerfeita paz! Perfeita paz!',
            estrofe4: 'Perfeita paz! Ao levar-me, então, a morte.\nPerfeita paz! Minha tumba envolverá.\nPerfeita paz! Ao chamado da trombeta.\nPerfeita paz! Perfeita paz!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 345,
            tb: 376,
            selecionado: true,
            estrofe1: 'Quero o Salvador comigo,\nSem o qual não posso andar,\nQuero tê-lO sempre perto,\nNo Seu braço descansar.',
            estrofe2: 'Quero o Salvador comigo,\nFraco sou em confiar;\nSua voz me dá o conforto\nQue outra nunca pôde dar.',
            estrofe3: 'Quero o Salvador comigo\nDia a dia, em meu viver,\nNa tristeza ou na alegria,\nNo conflito ou no prazer.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Confiado no Senhor,\nConsolado em Seu amor,\nSeguirei o meu caminho\nSem tristeza e sem temor.\n'
        },
        {
            id: 346,
            tb: 695,
            selecionado: true,
            estrofe1: 'Se paz a mais doce me deres gozar,\nSe dor a mais forte sofrer,\nOh! seja o que for, Tu me fazes saber\nQue feliz com Jesus sempre sou!',
            estrofe2: 'Embora me assalte o cruel Satanás\nE ataque com vis tentações,\nOh! certo estou, apesar de aflições,\nQue feliz eu serei com Jesus!',
            estrofe3: 'Meu triste pecado, por meu Salvador,\nFoi pago de um modo cabal;\nValeu-me o Senhor, oh! mercê sem igual!\nSou feliz! Graças dou a Jesus!',
            estrofe4: 'A vinda eu anseio do meu Salvador,\nVirá conduzir-me ao Lar:\nO céu, onde vou para sempre morar\nCom remidos na luz do Senhor!',
            estrofe5: '',
            som: '',
            coro: 'Sou feliz com Jesus,\nSou feliz com Jesus, meu Senhor!'
        },
        {
            id: 347,
            tb: 217,
            selecionado: true,
            estrofe1: 'Eu sei que há perfeita paz\nJunto ao bondoso Deus;\nNão há pecados e obras más\nJunto ao bondoso Deus.',
            estrofe2: 'Eu sei que há conforto e luz\nJunto ao bondoso Deus;\nEncontro, ali, o meu Jesus,\nJunto ao bondoso Deus.',
            estrofe3: 'Encontro, ali, libertação,\nJunto ao bondoso Deus;\nE tenho paz e salvação\nJunto ao bondoso Deus.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Meu Redentor, meu Cristo,\nPão que desceu dos céus,\nSegura-me bem perto\nDo coração de Deus!'
        },
        {
            id: 348,
            tb: 215,
            selecionado: true,
            estrofe1: 'Aos pés de Cristo eu quero estar,\nBenditas horas aí passar,\nA voz divina compreender,      ) bis\nEu quero Cristo comigo ter.    )',
            estrofe2: 'Aos pés de Cristo eu quero estar,\nBenditas horas aí passar,\nA voz divina compreender,      ) bis\nEu quero Cristo comigo ter.    )',
            estrofe3: 'Aos pés de Cristo hão de cessar\nAs aflições e qualquer pesar,\nOs meus problemas sei resolver          ) bis\nSe posso Cristo comigo ter.   )',
            estrofe4: 'Bendito o dia quando me achar\nPerante o trono a adorar,\nVou face a face meu Mestre ver,         ) bis\nPois vou com Cristo no céu viver.       )',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 349,
            tb: 169,
            selecionado: true,
            estrofe1: 'Bem cedo encontro o jardim\nDe orvalho ainda coberto,\nE uma voz a mim vem falando assim:\nMeu filho, estou bem perto!',
            estrofe2: 'Tão doce é a voz do Senhor\nQue os passarinhos se aquietam,\nE em minha alma, então, cheia de emoção,\nA fé e o amor despertam.',
            estrofe3: 'Sim, nesse jardim ficarei,\nMesmo vindo a noite tão densa;\nBem seguro irei, pela mão do Rei,\nAo céu de luz intensa!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Com Jesus desejo permanecer\nE gozar real comunhão;\nDela vem a paz e o poder que traz\nPureza ao meu coração.'
        },
        {
            id: 350,
            tb: 190,
            selecionado: true,
            estrofe1: 'Mais junto, ó Deus, a Ti, mais junto a Ti,\nInda que aflições eu tenha aqui,\nAspiro ao gozo ali, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!',
            estrofe2: 'E, quando ao pôr-do-sol, na solidão,\nDormir cansado e só, meu leito o chão,\nVer-me-ei, em sonho, ali, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!',
            estrofe3: 'Sejam meus passos, pois, degraus do céu;\nTodas as provações, proveito meu.\nJá Teu amor senti, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!',
            estrofe4: 'Pedra em Betel porei, vencida a dor,\nMeus dias encherei com Teu louvor.\nViver, já decidi, mais junto, ó Deus, a Ti,\nMais junto, ó Deus, a Ti, mais junto a Ti!',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 351,
            tb: 444,
            selecionado: true,
            estrofe1: 'Preciosas são as horas\nNa presença de Jesus,\nComunhão deliciosa\nDa minha alma com a luz!\nOs cuidados deste mundo\nNão me podem abalar,\nPois é Ele o meu abrigo\nQuando o tentador chegar.',
            estrofe2: 'Ao sentir-me rodeado\nDe cuidados terreais,\nIrritado e abatido\nOu em dúvidas fatais,\nA Jesus eu me dirijo\nNesses tempos de aflição,\nAs palavras que Ele fala\nTrazem-me libertação.',
            estrofe3: 'Se confesso meus temores,\nToda a minha imperfeição,\nNele escuta com paciência\nNessa triste confissão;\nCom ternura repreende\nMeu pecado e todo o mal,\nEle é sempre o meu amigo,\nO melhor e mais leal.',
            estrofe4: 'Se quereis saber quão doce\nÉ a divina comunhão,\nPodereis mui bem prová-la\nE tereis compensação;\nProcurai estar sozinhos\nEm conversa com Jesus,\nProvareis na vossa vida\nO poder que vem da cruz.',
            estrofe5: '',
            som: '',
            coro: ''
        },
//         {
//             id: 352,
//             tb: 629,
//             selecionado: true,
//             estrofe1: 'O meu ser se encheu de música, alegria,
// Com a força do Senhor eu vou subir!
// Não há nuvens que me escondam Sua face,
// E por Seu amor eu vou subindo aos céus!',
//             estrofe2: 'Cada novo dia quero mais amá-lO,
// Cada novo dia vou servi-lO mais;
// Cada dia vou subindo mais depressa,
// Almejando o Lar eterno alcançar.',
//             estrofe3: 'Como é bom trazer os outros ao caminho,
// Tantos quantos desejarem podem vir;
// Pelo amor de Cristo, dado no Calvário,
// Os pecados ninguém deve mais levar!',
//             estrofe4: '',
//             estrofe5: '',
//             som: '',
//             coro: '*Vou subindo a escada para a glória,\nTendo à frente a coroa da vitória.\nVou subindo pela luz, vou subindo sem parar,\nVou louvar o meu Senhor quando chegar!\nVou subindo a escada para a glória,\nTendo à frente a coroa da vitória.\nVou subindo pela luz, vou subindo sem parar,\nVou louvar o meu Senhor Jesus!'
//         },
//         {
//             id: 353,
//             tb: 612,
//             selecionado: true,
//             estrofe1: 'Em paz com Deus, que inefável
// Viver assim, em comunhão,
// Liberto de condenação,
// É meu o dom inestimável.',
//             estrofe2: 'Em paz com Deus, meu ser se acalma,
// Tranqüilo tenho o coração;
// Vivo entoando uma canção
// A Cristo, que salvou minha alma.',
//             estrofe3: 'Em paz com Deus, por mar bravio
// Seguro irá o meu batel,
// Pois sei que Ele é fiel,
// Na Sua direção confio.
// ',
//             estrofe4: '',
//             estrofe5: '',
//             som: '',
//             coro: 'Em Cristo achei descanso e paz,**\nA graça celestial me traz\nA paz com Deus, a paz com Deus.'
//         },
//         {
//             id: 354,
//             tb: 391,
//             selecionado: true,
//             estrofe1: 'Paz com Deus!, busquei ganhá-la
// Com o mais real fervor,
// Sem, contudo, obter descanso
// Nem livrar-me do temor.',
//             estrofe2: 'Cheio de temor estava
// Sem a causa descobrir,
// Ora em trevas, ora em luta,
// Ignorando o meu porvir.',
//             estrofe3: 'E por fim, em desespero,
// Disse: ―Sem vigor estou!‖,
// E dos céus ouvi resposta:
// ―Tudo Cristo consumou!',
//             estrofe4: 'Paz bendita nunca muda,
// É constante seu valor,
// Sim, por Deus é garantida
// A quem busca o Salvador.',
//             estrofe5: '',
//             som: '',
//             coro: 'Oh! que paz Jesus me dá,**
//         \*\*Paz que outrora não gozei;\*\*

//         \*\*Tudo novo se tornou\*\*

//         \*\*Desde que essa paz achei.\*\*'
//         },
//         {
//             id: 355,
//             tb: 272,
//             selecionado: true,
//             estrofe1: 'Quero estar ao pé da cruz,
// De onde rica fonte
// Corre franca, salutar,
// De Sião no monte.',
//             estrofe2: 'A tremer ao pé da cruz,
// Graça eterna achou-me;
// Matutina Estrela, ali,
// Raios Seus mandou-me.',
//             estrofe3: 'Confiante, junto à cruz,
// Sem temor vigio,
// Pois à pátria santa irei,
// Salvo, além do rio.',
//             estrofe4: '',
//             estrofe5: '',
//             som: '',
//             coro: 'Sim, na cruz, sim, na cruz,**
//         \*\*Sempre me glorio,\*\*

//         \*\*Para, enfim, ir descansar\*\*

//         \*\*Salvo, além do rio.\*\*'
//         },
        {
            id: 356,
            tb: 668,
            selecionado: true,
            estrofe1: 'Nunca penses que Deus Se olvidou de ti,\nQue te perdoou só para ser gentil.\nTenhas feito bem ou mal, receberás amor,\nPois Deus não Se escondeu do teu olhar.',
            estrofe4: '',
            estrofe2: 'Nunca penses que estás sozinho aqui,\nQue não mais conseguirás viver feliz.\nTua vida tomará, também transformará,\nPois Deus não Se encondeu do teu olhar.',
            estrofe3: 'Nunca penses que não podes mais cumprir\nA vontade do teu amoroso Pai.\nAo teu lado sempre está e quer-te ajudar\nCom Sua rica graça e amor sem par.',
            estrofe5: '',
            som: '',
            coro: 'Seu amor é sempre igual, conhece o coração,\nNão penses que Ele quer-te abandonar;\nAo teu lado sempre está e quer-te ajudar\nCom Sua rica graça e amor sem par.'
        },
        {
            id: 357,
            tb: 220,
            selecionado: true,
            estrofe1: 'Tudo o que eu tenho quero entregar,\nToma a minha vida, o meu caminhar;\nMeus dias, horas, meu louvor,\nA Ti pertencem, meu Senhor!',
            estrofe2: 'Tudo o que eu tenho, hei de confessar,\nVem do Teu amor e graça singular;\nEm gratidão por Teu favor,\nDevolvo tudo a Ti, Senhor!',
            estrofe3: 'Tudo o que eu tenho trago com prazer,\nVem, ó fogo santo, brilha em meu viver,\nEnchendo-me de luz e amor,\nE cumpre o Teu querer, Senhor!',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: 'Tudo o que eu tenho,\nTudo o que eu sou,\nMeus talentos, meu amor,\nTudo a Ti eu dou!\nTudo o que eu tenho,\nTudo o que eu sou,\nTudo deixo em Teu altar,\nTudo a Ti eu dou!'
        },
        {
            id: 358,
            tb: 246,
            selecionado: true,
            estrofe1: 'Jesus, Pastor amado,\nReunidos hoje aqui,\nConcede que sejamos\nUm corpo só em Ti.\nContendas e malícias\nQue longe de nós vão,\nNenhum desgosto impeça\nDa Igreja a santa união.',
            estrofe2: 'Família unida somos,\nFamília de Jesus,\nIluminados todos\nDa mesma santa luz.\nA mesma fé nos prende\nNum só divino amor,\nE com o mesmo gozo\nServimos ao Senhor.',
            estrofe3: 'Na mesma senda estreita,\nÉ Deus quem nos conduz;\nNão temos esperança\nSenão num só: Jesus,\nQue pela Sua morte\nA todos vida traz;\nDo Seu precioso sangue\nNos vem a mesma paz.',
            estrofe4: 'Rebanho resgatado\nPor um só Salvador,\nDevemos ser unidos\nPor mais ardente amor,\nHumildes perdoando\nOs erros do irmão\nE todos ajudando\nCom terna compaixão.',
            estrofe5: 'Se Tua Igreja toda\nAndar em santa união,\nEntão será bendito\nO nome de cristão.\nAquilo que pediste\nEm nós se cumprirá,\nE assim o mundo inteiro\nA Ti conhecerá.',
            som: '',
            coro: ''
        },
        {
            id: 359,
            tb: 165,
            selecionado: true,
            estrofe1: 'Bendita e santa união\nQue, no fraterno amor,\nA todos sempre, em comunhão,\nNos prende no Senhor.',
            estrofe2: 'Aqui tudo é comum:\nTristezas e prazer;\nEm Cristo somos todos um,\nÉ esse o Seu querer.',
            estrofe3: 'Ao mesmo trono, além,\nVão nossas petições;\nQue desça o amor e a paz também\nAos nossos corações.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 360,
            tb: 170,
            selecionado: true,
            estrofe1: 'Que vista amável é\nO intenso e puro amor\nDe irmãos, unidos pela fé,\nLouvando ao Senhor!',
            estrofe2: 'O mundo observará\nTão santa e doce paz\nE, qual perfume, sentirá\nO gozo que ela traz.',
            estrofe3: 'Envia-nos, Jesus,\nDo monte de Sião,\nDivina graça que produz\nPerfeita comunhão.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 361,
            tb: 331,
            selecionado: true,
            estrofe1: 'Qual o adorno desta vida?\nÉ o amor. (bis)\nAlegria é concedida\nPelo amor. (bis)\nÉ benigno, é paciente,\nNão se torna maldizente (bis)\nEsse amor. (bis)',
            estrofe2: 'Com suspeitas não se alcança\nVero amor; (bis)\nOnde houver desconfiança,\nAi do amor! (bis)\nDemonstremos lealdade\nUma vez que a falsidade (bis)\nMata o amor. (bis)',
            estrofe3: 'O cristão não é mesquinho\nDesse amor; (bis)\nPois, então, ao teu vizinho\nMostra amor. (bis)\nO supremo Deus nos ama,\nCristo para o céu nos chama, (bis)\nQuanto amor! (bis)',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },
        {
            id: 362,
            tb: 202,
            selecionado: true,
            estrofe1: 'Se da vida as vagas\nProcelosas são,\nSe com desalento\nJulgas tudo vão,\nLembra as muitas bênçãos,\nDize-as duma vez\nE verás surpreso\nQuanto Deus já fez.',
            estrofe2: 'Tens acaso mágoas?\nTriste é teu lidar?\nÉ a cruz pesada\nQue tens de levar?\nConta as muitas bênçãos,\nLogo exultarás\nE, fortalecido,\nTudo vencerás!',
            estrofe3: 'Quando vires outros\nCheios de ouro e bens,\nLembra que tesouros\nPrometidos tens.\nNunca os bens da terra\nPoderão comprar\nA mansão celeste\nQue vais habitar.',
            estrofe4: 'Seja o teu combate\nLongo ou breve aqui,\nNão te desanimes,\nDeus será por ti.\nSeu divino auxílio,\nCorrigindo o mal,\nHá de assegurar-te\nGalardão final.',
            estrofe5: '',
            som: '',
            coro: 'Conta as bênçãos, dize quantas são,\nRecebidas da divina mão\nVem contá-las, todas duma vez,\nE verás surpreso\nQuanto Deus já fez.'
        },
        {
            id: 363,
            tb: 447,
            selecionado: true,
            estrofe1: 'Graças dou por esta vida,\nPelo bem que me legou.\nGraças pelo meu futuro\nE por tudo o que passou.\nPelas bênçãos derramadas,\nPelo amor, pela aflição,\nPelas graças reveladas,\nPelo gozo do perdão.',
            estrofe2: 'Graças pelo azul celeste\nE por nuvens que há, também,\nPelas rosas do caminho\nE os espinhos que elas têm.\nPela escuridão da noite,\nPela estrela que brilhou,\nPela prece respondida\nE a esperança que falhou.',
            estrofe3: 'Pela cruz e o sofrimento\nE feliz ressurreição,\nPelo amor que é sem medida,\nPela paz no coração.\nPela lágrima vertida,\nTeu consolo que é sem par,\nPelo dom da eterna vida,\nSempre graças hei de dar.',
            estrofe4: '',
            estrofe5: '',
            som: '',
            coro: ''
        },


    ])

    const [musicaSelecionada, setMusicaSelecionada] = useState(1);

    // pega o objeto filtrado
    const musica = letra.find(item => item.id === musicaSelecionada);
    //Caso eu queira ver o total de música
    const musicTotal = letra.length;

    //Verificar se tem coro
    let conteudoCoro;
    if (musica?.coro == '') {
        conteudoCoro = (
            <View></View>
        );
    } else {
        conteudoCoro = (
            <View style={styles.coro} >
                <Text style={{ fontWeight: "bold" }} >
                    {musica && (
                        <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.coro}</Text>
                    )}
                </Text>
            </View>
        );
    }

    function playSound() {
        alert("Em desenvolvimento ...")
    }

    return (
        <ScrollView>
            <StatusBar hidden />
            <View style={[styles.picContainer, { backgroundColor: isDarkMode ? '#001' : '#eee' }]}>
                <Picker
                    selectedValue={musicaSelecionada}
                    onValueChange={(itemValue) => setMusicaSelecionada(itemValue)}
                    style={[styles.picker, { color: isDarkMode ? '#fff' : '#001' }]}>
                    {letra.map(val => (
                        <Picker.Item key={val.id} label={`Canção ${val.id}`} value={val.id}
                        />
                    ))}
                </Picker>
                {/* BOTÃO REPRODUZIR ÁUDIO */}
                <TouchableOpacity style={{ width: '20%' }} onPress={playSound} >
                    <AntDesign name="play-circle" size={24} color={isDarkMode ? '#fff' : '#001'} />
                </TouchableOpacity>
                {musica && (
                    <Text style={[styles.tb, { color: isDarkMode ? '#fff' : '#001' }]}>TB: {musica.tb}</Text>
                )}
            </View>
            {/* /*Aqui será renderizados as letras*/}
            <View style={styles.container} >
                <View style={styles.estrofe} >
                    {musica && (
                        <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe1}</Text>
                    )}
                </View>
                {/* VIEW REFRÃO - CORO */}
                {
                    conteudoCoro
                }

                {/* VIEW ESTROFE 2 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe2}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 3 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe3}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 4 */}
                <View style={styles.estrofe} >
                    <Text  >
                        {musica && (
                            <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe4}</Text>
                        )}
                    </Text>
                </View>
                {/* VIEW ESTROFE 5 */}
                <View style={styles.estrofe} >
                    <Text style={styles.letra} >
                        {
                            musica && (
                                <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe5}</Text>
                            )
                        }
                    </Text>
                </View>
                {/* VIEW ESTROFE 6 */}
                <View style={styles.estrofe} >
                    <Text style={styles.letra} >
                        {
                            musica && (
                                <Text style={[styles.estrofe, { color: isDarkMode ? '#fff' : '#001' }]}>{musica.estrofe6}</Text>
                            )
                        }
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    estrofe: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 16 * escala
    },
    coro: {
        width: '100%',
        margin: 12
    },
    letra: {

    },
    picContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001',
        margin: 1
    },
    picker: {
        width: '60%',
    },
    tb: {
        fontWeight: 'bold',
        width: '20%',
    }
});

export default body;