export const miguelPhrases = {
  economize: [
    "Quer pagar menos? O Menzinho achou a fonte!",
    "Economia de verdade é aqui, meu kiridu!",
    "Pra que pagar caro se tem esse aqui?",
    "O bolso agradece e o cheiro é o mesmo!",
    "Alta perfumaria sem falir, bora!",
    "Esse aqui é o segredo que as marcas não contam!",
    "Qualidade de nicho, preço de amigo!",
    "Não seja bobo, vai nesse aqui que é sucesso!"
  ],
  similaridade: [
    "Meu kiridu, isso aqui é 98% igual! Ninguém vai saber que você não tá usando o de 3 mil reais. Confia no pai!",
    "Idêntico! Só um nariz biônico pra diferenciar. Vai na fé!",
    "A similaridade é assustadora. É passar e receber elogio na hora!",
    "Esse contratipo humilha o original no custo-benefício. BORA BORA!",
    "Fixa mais que o original e custa 10x menos. Precisa falar mais nada, né?",
    "Gêmeos separados no nascimento. A diferença é só o preço!",
    "Se eu te vendar, você não sabe qual é qual. Testado e aprovado!",
    "O clone perfeito existe e eu encontrei pra você!"
  ],
  cta: [
    "COMPRAR COM DESCONTO",
    "GARANTIR O MEU AGORA",
    "QUERO ESSE PERFUMAÇO",
    "APROVEITAR A OFERTA",
    "BORA FICAR CHEIROSO",
    "COMPRAR AGORA",
    "PEGAR MEU CUPOM"
  ]
};

export function getRandomPhrase(category: keyof typeof miguelPhrases): string {
  const phrases = miguelPhrases[category];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

