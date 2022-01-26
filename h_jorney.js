var prompt = require("prompt-sync")();

//declação de variaveis;

let s = 0;

//Bloco que contem a introdução a historia;
console.log(
  "\nFaça boas escolhas e o sucesso encontrará um caminho até você. \n"
);
console.log(
  "Você está em uma historia interativa, suas escolhas mudarão o rumo da historia e como ela termina.\n"
);
console.log(
  "Hoje iremos assumir o controle de John, um caçador de 35 anos. E lembre-se, você só poderá responder sim ou não.\n"
);
console.log(`John a tempos houve boatos que um grande alce que que vaga pela floresta proximo a cidade de Stoney Fork Kentucky, EUA.
A temporada de caça está chegando e ele não pode perder essa oportunidade. O problema é que esse grande animal só foi visto
nas profundezas da floresta, onde não é nem um pouco seguro de caçar.
Alguns dias depois....

John se prepara para a caçada, ele arruma todos os seus equipamentos de caça: seu bom e velho rifle CBC 7022, sua faca especial
kit de primeiros socorros e equipamentos de segurança."Ok! Tudo pronto, eu acho."
No caminho ele encontra seu velhos amigo peter.

Peter:" Eai John, pronto para a temporada de caça?... Então onde vai caçar esse ano?"\n`);

let res = prompt(
  "Contar ao Peter sobre a caça ao lendario alce?: "
).toLowerCase(); //ira receber a respota do usuario, usei um metodo no final para facilitar futuras validações.
//validação, para garantir que a resposta será sim ou não;
while (res != "sim" && res != "nao") {
  console.log("Lembre-se, apenas sim ou não");
  res = prompt("Contar ao Peter sobre a caça ao lendario alce?: ");
}
console.log(res);
//Parte logica onde irá verificar se a resposta foi sim ou não e direcionar para seus respectivos dialogos;
if (res == "sim") {
  console.log(`Peter, esse ano irei atras daquele Alce gigantesco que aparece no fundo daquela floresta em Stoney Fork.

  Peter:vc é louco John, aquele animal foi visto muito distante da aréa segura, sem falar que são só rumores.

  Como você é cabeça dura e eu sei que não teria como fazer você mudar de ideia, só me resta te desejar uma otima caçada.\n`);
} else {
  console.log(`Você decide não contar que vai caçar o grande alce, em vez disso diz que vai caçar nos mesmos lugares de sempre. 
     Peter: Ok John, boa caçada amigo.\n`);
}
prompt("----Press -enter to continue----"); //Pausa para o usuario ir tomar um café e ter certeza que não vai perder nada;
console.log(" ");
console.log(`A viagem foi longa, mas vc chega ao seu destino, um guarda florestal se aproxima. 
 Guarda:(Veio caçar aqui, nessa floresta?
 Você deve estar mal informado amigo mas os alces adentraram até as entranhas desse lugar em direção as montanhas
 talvez tenha que andar dias até encontrar um, aconselho a não se afastar muito. E levar bastante suprimentos caso vá muito longe)

 É bom ouvir o guarda, infelizmente acabei esquecendo de comprar comida e levar agua extra, por sorte tem uma mercado proximo.\n `);
res = prompt("Comprar mais suprimentos?: ");
