var prompt = require("prompt-sync")();

//declação de variaveis;

let s = 0;
let food = true;
//Bloco que contem a introdução a historia;
console.log(
  "\nFaça boas escolhas e o sucesso encontrará um caminho até você. \n"
);
prompt("-----press enter to continue-----");
console.log(" ");
console.log(
  "Você está em uma historia interativa, suas escolhas mudarão o rumo da historia e como ela termina.\n"
);
console.log(
  "Hoje iremos assumir o controle de John, um caçador de 35 anos. E lembre-se, você só poderá responder sim ou não.\n"
);
console.log('Seu objetivo é chegar vivo em casa');
prompt("-----press enter to continue-----");
console.log(`\nJohn a tempos houve boatos que um grande alce que vaga pela floresta proximo a cidade de Stoney Fork Kentucky, EUA.
A temporada de caça está chegando e ele não pode perder essa oportunidade.
 O problema é que esse grande animal só foi visto
nas profundezas da floresta, onde não é nem um pouco seguro de caçar.
Alguns dias depois....\n`);
prompt("----press enter to continue----");
console.log(`\nJohn se prepara para a caçada, ele arruma todos os seus equipamentos de caça: seu bom e velho rifle CBC 7022,
sua faca especial
kit de primeiros socorros e equipamentos de segurança."Ok! Tudo pronto, eu acho."
No caminho ele encontra seu velhos amigo peter.`);
prompt("----press enter to continue----");
console.log(
  `\nPeter:" Eai John, pronto para a temporada de caça?... Então onde vai caçar esse ano?"\n`
);

let res = prompt(
  "Contar ao Peter sobre a caça ao lendario alce?: "
).toLowerCase(); //ira receber a respota do usuario, usei um metodo no final para facilitar futuras validações.
//validação, para garantir que a resposta será sim ou não;
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt(
    "Contar ao Peter sobre a caça ao lendario alce?: "
  ).toLowerCase();
}
console.log(res);
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if (res == "sim") {
  console.log(`Peter, esse ano irei atras daquele Alce gigantesco que aparece no fundo daquela floresta em Stoney Fork.

  Peter:vc é louco John, aquele animal foi visto muito distante da aréa segura, sem falar que são só rumores.

  Como você é cabeça dura e eu sei que não teria como fazer você mudar de ideia, só me resta te desejar uma otima caçada.\n`);
  s++; //Armazena quantas sims foram escolhidos para poder entregar os finais;
} else {
  console.log(`Você decide não contar que vai caçar o grande alce, em vez disso diz que vai caçar nos mesmos lugares de sempre. 
     Peter: Ok John, boa caçada amigo.\n`);
}
prompt("----Press -enter to continue----");
console.log(s); //Pausa para o usuario ir tomar um café e ter certeza que não vai perder nada;
console.log(" ");
console.log(`A viagem foi longa, mas vc chega ao seu destino, um guarda florestal se aproxima. 
 Guarda:(Veio caçar aqui, nessa floresta?
 Você deve estar mal informado amigo mas os alces adentraram até as entranhas desse lugar em direção as montanhas
 talvez tenha que andar dias até encontrar um,
 aconselho a não se afastar muito. E levar bastante suprimentos caso vá muito longe)\n`);
prompt("----press enter to continue----");
console.log(`\n
 É bom ouvir o guarda, infelizmente acabei esquecendo de comprar comida e levar agua extra,
  por sorte tem uma mercado proximo.\n `);
res = prompt("Comprar mais suprimentos?: ").toLowerCase();
//validação novamente certificar que a resposta é valida;
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt("Comprar mais suprimentos?: ").toLowerCase();
}
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if (res == "sim") {
  console.log("Comprei os suprimentos, vamos nessa!");
  s++;
} else {
  console.log(`Esse guarda não sabe oq está falando, 
  rapidinho irei encontrar esse alce e levarei sua cabeça e couro para casa antes do sol
  se por`);
  food = false;
}

console.log(`Você adentra a floresta, caminha por horas, e horas. 
Até encontrar o primeiro vestigio de animal, encontra fezes, com minha
esperiencia é de alce, está fresca.
Seguindo a trilha de galhos quebrados que o animal deixou, vc cegue, então encontra um lago, 
lugar onde é comum encontrar alces, 
usando um apito especial vc tenta chamar a atenção de algum alce na redondeça... 
Vc ouve o som, é o alce, pelo som emitido
um macho, e está proximo...\n`);
prompt("-----press enter to continue-----");
console.log(s);
console.log(`\nVc segue o som até que finalmente vc encontra, um majestoso alce, enorme o maior que vc já viu,
parado no meio de duas arvoes, então vc prende a respiraçã e prepara seu rifle está com a mira apontada em um lugar vital do animal,
vc atira!"efeito sonoro de tiro".
Acerta! e o animal rapidamente cai.\n`);

prompt("-----press enter to continue-----");

console.log(`\n vc corre até o alce, ele ainda está vivo com a faca acaba com o sofrimento do animal, 
e rapidamente e cuidadosamente remove todo seu couro, e cabeça.
"Nossa que couro pesado, vai valer muito e essa cabeça vai ficar para sempre na minha parede"
Já está escurecendo e o caminho de volta é longo.
Antes mesmo que consequise dar o primeiro passo, vc ouve um rugido ensurdecedor vindo de bem do seu lado, 
em seguida som de paços rapidos em sua direção.
\n`);
res = prompt("Olhar para a direção de onde vem o som?: ").toLowerCase();
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt("Olhar para a direção de onde vem o som?: ").toLowerCase();
}
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if (res == "sim") {
  console.log(`Você olha em direção de onde vem o som, então vc ver algo um figura humanoide, 
  semelhante a uma arvore e rapidamente ela fica parada imovel e vc tbm. 
  Alguns segundos se passam e tomado por medo vc não entende oq está acontecendo, 
  então vagarosamente vc se afasta sem tirar o olho daquela coisa, vagarosamente vc olha para o lado, tirando
  por alguns milesimos a criatura de sua visão, nesse momento como um flesh de luz, a criatura corre em direção a vc. 
  então rapidamente vc corre, mas é inutil, ela já te alcançou
  ela então o agarra e cobre seu rosto com algo, " Que cheiro estranho" rapidamente vc perde os sentidos.`);
  s++;
} else {
  console.log(`Logo o som dos paços correndo esta do seu lado, sem mais tempo de virar a cabeça para ver oq 
  o segue vc sente uma forte pancada na nuca e fica dessacordado.`);
}
prompt("-----press enter to continue-----");
console.log(s);
console.log(
  `Você acorda de cabeça para baixo amarrado pelos pés em uma arvore.\n`
);
res = prompt("Usar a faca para tentar cortar a corda?: ").toLowerCase();
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt("Usar a faca para tentar cortar a corda?: ").toLowerCase();
}
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if ((res == "sim")) {
  console.log(`Você corta a corda e cai, vagarosamente se levanta e percebe que já está muito escuro
  "Por quanto termpo eu apaguei, oq aconteceu?"`);
  s++;
} else {
  console.log(`Você se esforça para tentar soltar seu pé da corda, então um dos seus pés se solta da corda e depois de muito esforço o outro pé se solta, mas como ficou 
  pendurado por muito tempo só por um pé vc acaba causando uma lesão no pé.`);
}
if ((res == "sim")) {
  console.log(`Que coisa era aquela que me atacou?
  Preciso sair daqui, então sua vista aos poucos se acostumam com o breu da noite e ao longe vc ver uma luz, 
  vagarosamente se aproxima da fonte da luz, e ao se aproximar vc percebe que a luz são de lamparinas, 
  encontra casas no meio de uma clareira na floresta,"Uma aldeia, aqui? Preciso encontrar ajuda"
  "Socorro, alguem me ajude!" sem resposta.\n`);
  prompt("-----press enter to continue-----");
  console.log(s);
} else {
  console.log(`Que coisa era aquela que me atacou?
  Preciso sair daqui, então sua vista aos poucos se acostumam com o breu da noite e ao longe vc ver uma luz, 
  Com muita dor e mal conseguindo andar vagarosamente se aproxima da fonte da luz, e ao se aproximar vc percebe que a luz são de lamparinas, 
  encontra casas no meio de uma clareira na floresta,"Uma aldeia, aqui? Preciso encontrar ajuda"
  "Socorro, alguem me ajude!" sem resposta.\n
  `);
  prompt("-----press enter to continue-----");
}
console.log(`Vc entra em uma das cabanas de madeira, e encontra suas coisas, sua bolsa, 
  nesse momento vc percebe que quem te amarrou provavelmente mora ali.
  "Preciso fugir daqui o mais rapido possivel", Você pega suas coisas, 
  mas ao ir embora vc percebe que o couro do alce não está mais na sua mochila.\n`);

res = prompt("Procurar pelo couro?: ").toLowerCase();
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt("Procurar pelo couro?: ").toLowerCase();
}
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if (res == "sim") {
  console.log(`"Eu não andei horas e passei por tudo isso para deixar o couro aqui, 
    o disgraçado não vai pegar meu trofeu." Então vc se arma com o rifle e sai procurando de cabana em cabana em busca do couro,
    em uma das cabanas vc encontra uma pilha de couro de varios animais. 
    Ao se aproximar vc percebe que no meio daquela pilha de couro tem algo semelhante a pele humana. 
    "Oqué é isso? oq está acontecendo aqui?"
    Você pega o couro do lendario alce que estava no meio daquela pilha, da uma olhada rapida em sua bussola
    e segue na escuridão da floresta.`);
  s++;
} else {
  console.log(`"Droga, depois de tudo eu perde o couro do alce. De qualquer forma eu tenho que ir embora."
    Da uma olhada rapida em sua bussola e segue na escuridão da floresta.`);
}
prompt("------press enter to continue------");
console.log(s);
console.log(`\n Está escuro mas não posso ligar minha lanterna, quem ou oqué tenha me atacado ainda está por ai.
   melhor eu continuar devagar e provavelmente não irei esbarrar em nada.`);
if (food == true) {
  console.log(`Por guantas horas eu estou andando? Preciso parar, comer algo e beber algo. Ainda bem que
  trouxe suprimentos extras.`);
} else {
  console.log(`Estou cansado, com fome e com sede, andei por horas. 
   Mas infelizmente não tem mais nada para comer nem beber.`);
}
prompt("-----press enter to continue-----");
//Aqui iremos mostrar os finais de acordo com a quantidade de respostas positivas;
if(s == 5){
  console.log(`\nVocê percebe que já está amanhecendo, e nota que alguns lugares por onde passou lhe é familiar.
  "Estou perto". Nesse momento você ouve aquele rugido novamente, rapidamente você olha em direção ao som,
  e vé a figura humanoide, coberta por algo que parece ser casca de tronco de arvore e galhos.
  De repente a criatura fala com você...\n`);
  prompt('----press enter to continue----');
  console.log(`Criatura: 'Sabe por quê irei te esfolar vivo? Humanos como você viajam por longas distancias
  gastando energia e recursos apenas para assasinar, e ninguem lhe pune por isso. Eu sou a vingança!.
  Irá pagar pelo que féz!'
  John: 'Espera, você fala? Quem é você? Você é louco, eu tenho permisão para caçar. Alces não tem predadores
  naturais nesse região, eu faço um grande favor ao equilibrio natural.
  Criatura: 'Diferente dos pobres alces que não tem predadores nessa região. Você tem, JOHN!,
  eu sou seu caçador, te cacei até aqui e agora guardarei sua pele como trofeu assim como fiz com muitos outros.\n`);
  prompt('-----press enter to continue----');
  console.log(`John sem exitar pega seu rifle mira e atira bem na cabeça da criatura.
  A criatura cai, e fica imovel, John sem pensar no que fez e sem olhar para trás, vai embora.
  Logo encontra seu amigo Peter que o estava procurando.
  Peter:"EI John! AQUI!. Seu louco por onde esteve? todos pensavam que você tinha se perdido na floresta.
  John, sentindo um grande alivio, responde: "Peter, é uma longa historia"`);
  console.log(`Dias depois no noticiario John vé a noticia de que foi encontrado um corpo de um homem,
  que estava fantasiado com troncos de arvores e logo relacionaram esse mesmo homem ao desaparecimento de varios
  caçadores, pois foi encontrado junto ao se corpo varios documentos de caçadores desaparecidos`);
  console.log('Ele acaba sua jornada com seu trofeu, e a fama de ter caçado uma lenda.')
}else if(s==4){
  console.log(`\nVocê percebe que já está amanhecendo, e nota que alguns lugares por onde passou lhe é familiar.
  "Estou perto". Nesse momento você ouve aquele rugido novamente, rapidamente você olha em direção ao som,
  e vé a figura humanoide, coberta por algo que parece ser casca de tronco de arvore e galhos.
  De repente a criatura fala com você...\n`);
  prompt('----press enter to continue----');
  console.log(`Criatura: 'Sabe por quê irei te esfolar vivo? Humanos como você viajam por longas distancias
  gastando energia e recursos apenas para assasinar, e ninguem lhe pune por isso. Eu sou a vingança!.
  Irá pagar pelo que féz!'
  John: 'Espera, você fala? Quem é você? Você é louco, eu tenho permisão para caçar. Alces não tem predadores
  naturais nesse região, eu faço um grande favor ao equilibrio natural.
  Criatura: 'Diferente dos pobres alces que não tem predadores nessa região. Você tem, JOHN!,
  eu sou seu caçador, te cacei até aqui e agora guardarei sua pele como trofeu assim como fiz com muitos outros.\n`);
  prompt('----press enter to continue----');
  console.log(`\nA criatura corre rapidamente em sua direção você tenta apontar a arma mas não é rapido o suficiente,
  a criatura de derruba no chão, quando novamente ela tenta desacordalo com um pano que exala um forte cheiro,
  então vc consegue soltar seu braço e socar o rosto da criatura ao fazer isso vc quebra a casca de arvore
  que cobria o seu rosto revelando um homem, aparencia jovem e com a barba mal cuidado, você vér no seus olhos furia e odio,
  ele grita "NÃO! eu sou um monstro, não olhe pra mim!" ele então puxa uma faca agarra a mão de John e arranca seu dedo fora.
  Tomado por uma dor intensa John grita, o homem se levanta e corre para a floresta.\n `);
  prompt('----press enter to continue-----');
  console.log(`Sem entender nada e com dor e com medo, John agarra sua mão na tentativa de estancar o sangramento
  e corre em direção contraria do homem louco, sem parar e sem olhar para trás ele corre, até que de longe ele vér o quarda.
  "Estou salvo"!
  Após relatar para as altoridades uma busca foi feita na floresta, varios corpos de caçadores desaparecidos
  foram encontrados e depois de meses de busca o homem da floresta foi pego e condenado a morte.`);
}else if(s==3){
  console.log(`\nVocê percebe que já está amanhecendo, e nota que alguns lugares por onde passou lhe é familiar.
  "Estou perto". Nesse momento você ouve aquele rugido novamente, rapidamente você olha em direção ao som,
  e vé a figura humanoide, coberta por algo que parece ser casca de tronco de arvore e galhos.
  De repente a criatura fala com você...\n`);
  prompt('----press enter to continue----');
  console.log(`Criatura: 'Sabe por quê irei te esfolar vivo? Humanos como você viajam por longas distancias
  gastando energia e recursos apenas para assasinar, e ninguem lhe pune por isso. Eu sou a vingança!.
  Irá pagar pelo que féz!'
  John: 'Espera, você fala? Quem é você? Você é louco, eu tenho permisão para caçar. Alces não tem predadores
  naturais nesse região, eu faço um grande favor ao equilibrio natural.
  Criatura: 'Diferente dos pobres alces que não tem predadores nessa região. Você tem, JOHN!,
  eu sou seu caçador, te cacei até aqui e agora guardarei sua pele como trofeu assim como fiz com muitos outros.\n`);
  prompt('-----press enter to continue----');
  console.log(`A criatura corre em sua direção, antes mesmo que pensase em fazer algo ela te alcança e te derruba,
  vc luta contra a criatura soca bem no rosto dela, porém não tem força o suficiente e seu soco não faz efeito
  a criatura então pega um pano e tenta desacordalo, o pano está cheio com um liquido que exala um forte cheiro
  então vc rapidamente puxa sua faca e consegue acertar o ombro da criatura ela rapimente sai de cima de vc e grita de dor
  vc se arrasta para longe e se afasta o mais rapido que pode, da uma rapida olhada e ve a criatura no chão gritando de dor.\n`);
  prompt('---press enter to continue----');
  console.log(`\n Continua se afastando da criatura sem olhar para trás, 
  caminha por alguns minutos quando vê ao longe atorre do guarda florestal.
  um forte sentimento de alivio toma conta do seu corpo, então vc enche o pulmão para gritar por ajuda...
  porém... antes mesmo que algum som seja emitido por vc, algo te agarra por tras, e vc sente aquele cheiro...
  "onde eu sente esse cheiro antes? um taxidermista que colecionava cobras em potés....
  CLOROFÓRMIO!" alguns minutos cheirando aquilo vc fica desacordado.`);
  prompt('----press enter to continue----');
  console.log('\nJohn nunca mais foi visto...');

}else if(s==2||s==1){
  console.log(`\nVocê percebe que já está amanhecendo, e nota que alguns lugares por onde passou lhe é familiar.
  "Estou perto". Nesse momento você ouve aquele rugido novamente, rapidamente você olha em direção ao som,
  e vé a figura humanoide, coberta por algo que parece ser casca de tronco de arvore e galhos.
  De repente a criatura fala com você...\n`);
  prompt('----press enter to continue----');
  console.log(`Criatura: 'Sabe por quê irei te esfolar vivo? Humanos como você viajam por longas distancias
  gastando energia e recursos apenas para assasinar, e ninguem lhe pune por isso. Eu sou a vingança!.
  Irá pagar pelo que féz!'
  John: 'Espera, você fala? Quem é você? Você é louco, eu tenho permisão para caçar. Alces não tem predadores
  naturais nesse região, eu faço um grande favor ao equilibrio natural.
  Criatura: 'Diferente dos pobres alces que não tem predadores nessa região. Você tem, JOHN!,
  eu sou seu caçador, te cacei até aqui e agora guardarei sua pele como trofeu assim como fiz com muitos outros.\n`);
  prompt('-----press enter to continue----');
  console.log(`A criatura corre em sua direção, antes mesmo que pensase em fazer algo ela te alcança e te derruba,
  vc luta contra a criatura soca bem no rosto dela, porém não tem força o suficiente e seu soco não faz efeito
  a criatura então pega um pano e tenta desacordalo, o pano está cheio com um liquido que exala um forte cheiro
  então vc rapidamente puxa sua faca e consegue acertar o ombro da criatura ela rapimente sai de cima de vc e grita de dor
  vc se arrasta para longe e se afasta o mais rapido que pode, da uma rapida olhada e ve a criatura no chão gritando de dor.\n`);
  prompt('----press enter to continue----');
  console.log(`\nJohn, no limite de sua sanidade, com frio e exausto. Perde totalmente a razão, então ele olha para a criatura e diz:
  "Já cacei muitas coisas, mas um homem arvore? Sua cabeça ficaria otima na minha parede."
  John atira varias vezes contra o monstro. Mas a verdade é que dunte a luta John percebeu que ali era apenas um
  homem fantaziado de arvore, mesmo assim ele o matou. John então pega seu trofeu, a cabeça do homem e vai embora.\n`);
  prompt('----press ente to continue----');
  console.log(`\nJohn pode ter sobrevivido mas ele nunca mais foi a mesma pessoa, e cada dia que passava
  a ideia de que o maior predador do mundo é o homem e que caçar o maior predador o faria o caçador supremo se enraizava
  em sua mente. Para sobreviver a um monstro, John se tornou algo pior.`);
  
}else{
  console.log(`Cansado, machucado, na escuridão daquela floresta. John escuta ao longe alguém gritando seu nome
  Uma euforia toma conta dele, ele grita com o restante de suas forças." SOCORRO, ESTOU AQUI! POR FAVOR ME AJUDA"
  sem retorno, mas ele continua gritando. Até que John ouve o som de galhos quebrando, sons vindo da escuridão.
  Então ele ouve uma voz dizer "Olha que animal raro eu encontrei, a cabeça dele vai ficar perfeita em cima da lareira"`);

  console.log('\nJohn nunca mais foi visto');
}

console.log(s);