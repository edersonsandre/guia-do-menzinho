export interface Perfume {
  id: string;
  name: string;
  brand: string;
  type: 'Niche' | 'Designer' | 'Clone';
  
  // Contratipo Nacional (BR)
  cloneOf?: string;
  cloneBrand?: string;
  cloneName?: string;
  cloneImage?: string;
  
  // Contratipo Árabe (Novo)
  arabBrand?: string;
  arabName?: string;
  arabImage?: string;
  arabNotes?: string; // Notas principais do árabe para comparação

  price: string;
  rating: number;
  occasions: string[];
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  description: string;
  image: string;
  buyLink?: string;
}

export const perfumes: Perfume[] = [
  // --- CREED ---
  {
    id: 'creed-aventus',
    name: 'Aventus',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'New Venttus',
    cloneImage: '/images/clones/new-venttus.webp',
    arabBrand: 'Armaf',
    arabName: 'Club de Nuit Intense Man',
    arabImage: '/images/clones/cdnim.jpg',
    arabNotes: 'Citrus, Fruity, Leather, Smoky, Woody',
    price: 'R$ 3.500,00',
    rating: 5,
    occasions: ['Trabalho', 'Encontro', 'Assinatura', 'Dia a Dia'],
    notes: {
      top: ['Abacaxi', 'Bergamota', 'Groselha Preta', 'Maçã'],
      heart: ['Bétula', 'Patchouli', 'Jasmim', 'Rosa'],
      base: ['Almíscar', 'Musgo de Carvalho', 'Âmbar Cinzento', 'Baunilha']
    },
    description: 'O rei da perfumaria de nicho. Fresco, frutado e esfumaçado. O perfume do sucesso.',
    image: '/images/perfumes/aventus.jpg'
  },
  {
    id: 'creed-aventus-absolu',
    name: 'Aventus Absolu',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Absolu Premium',
    cloneImage: '/images/clones/new-venttus.webp',
    arabBrand: 'Afnan',
    arabName: 'Supremacy Not Only Intense',
    arabImage: '/images/clones/supremacy-noi.jpg',
    arabNotes: 'Fruity, Smoky, Woody, Mossy',
    price: 'R$ 4.200,00',
    rating: 4.8,
    occasions: ['Noite', 'Inverno', 'Encontro Especial'],
    notes: {
      top: ['Toranja', 'Bergamota', 'Groselha Preta'],
      heart: ['Gengibre', 'Canela', 'Cardamomo', 'Cidra'],
      base: ['Pimenta Rosa', 'Patchouli', 'Vetiver']
    },
    description: 'Uma versão mais densa, especiada e exclusiva do clássico Aventus.',
    image: '/images/perfumes/aventus-absolu.jpg'
  },
  {
    id: 'creed-virgin-island-water',
    name: 'Virgin Island Water',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Caribbean',
    cloneImage: '/perfumes/caribbean.jpg',
    price: 'R$ 2.800,00',
    rating: 4.8,
    occasions: ['Verão', 'Praia', 'Férias', 'Calor Extremo'],
    notes: {
      top: ['Coco', 'Lima', 'Bergamota Branca', 'Mandarina Siciliana'],
      heart: ['Gengibre', 'Ylang Ylang', 'Jasmim Indiano', 'Hibisco'],
      base: ['Rum Branco', 'Cana de Açúcar', 'Almíscar']
    },
    description: 'O cheiro do paraíso tropical. Coco, lima e rum. Perfeito para dias quentes na praia.',
    image: '/perfumes/virgin_island_water.jpg'
  },
  {
    id: 'creed-royal-water',
    name: 'Royal Water',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Royal Acqua',
    cloneImage: '/perfumes/royal_acqua.jpg',
    price: 'R$ 2.600,00',
    rating: 4.5,
    occasions: ['Verão', 'Trabalho', 'Dia a Dia', 'Elegante'],
    notes: {
      top: ['Cítricos', 'Hortelã'],
      heart: ['Bagas de Zimbro', 'Manjericão'],
      base: ['Almíscar', 'Âmbar Cinzento']
    },
    description: 'Fresco, limpo e real. Uma fragrância cítrica e aromática para quem busca sofisticação discreta.',
    image: '/perfumes/royal_water.jpg'
  },
  {
    id: 'creed-millesime-imperial',
    name: 'Millesime Imperial',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Royal Garden',
    cloneImage: '/perfumes/royal_garden.jpg',
    arabBrand: 'Armaf',
    arabName: 'Club de Nuit Milestone',
    arabImage: '/images/clones/milestone.jpg',
    arabNotes: 'Marine, Fruity, Salty, Citrus',
    price: 'R$ 2.900,00',
    rating: 4.7,
    occasions: ['Verão', 'Trabalho', 'Assinatura', 'Dia a Dia'],
    notes: {
      top: ['Notas Frutadas', 'Sal Marinho'],
      heart: ['Limão Siciliano', 'Bergamota', 'Íris', 'Mandarina'],
      base: ['Almíscar', 'Notas Amadeiradas', 'Notas Oceânicas']
    },
    description: 'Ouro líquido. Salgado, frutado e luxuoso. O cheiro da realeza em férias.',
    image: '/perfumes/millesime_imperial.jpg'
  },
  {
    id: 'creed-silver-mountain-water',
    name: 'Silver Mountain Water',
    brand: 'Creed',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Mountain Water',
    cloneImage: '/images/clones/mountain-water.jpg',
    arabBrand: 'Armaf',
    arabName: 'Club de Nuit Sillage',
    arabImage: '/images/clones/sillage.jpg',
    arabNotes: 'Metallic, Green, Citrus, Musky',
    price: 'R$ 2.800,00',
    rating: 4.6,
    occasions: ['Verão', 'Trabalho', 'Dia a Dia', 'Fresco'],
    notes: {
      top: ['Bergamota', 'Mandarina'],
      heart: ['Chá Verde', 'Groselha Preta'],
      base: ['Almíscar', 'Petitgrain', 'Sândalo', 'Gálbano']
    },
    description: 'Fresco, metálico e revigorante. Como a água gelada de uma montanha suíça.',
    image: '/images/perfumes/smw.jpg'
  },

  // --- XERJOFF ---
  {
    id: 'xerjoff-naxos',
    name: 'Naxos',
    brand: 'Xerjoff',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Mead',
    cloneImage: '/images/clones/mead.webp',
    arabBrand: 'Paris Corner',
    arabName: 'Emir Voux Elegante',
    arabImage: '/images/clones/voux-elegante.jpg',
    arabNotes: 'Honey, Tobacco, Lavender, Vanilla',
    price: 'R$ 2.800,00',
    rating: 5,
    occasions: ['Inverno', 'Noite', 'Elegante', 'Festa'],
    notes: {
      top: ['Lavanda', 'Bergamota', 'Limão'],
      heart: ['Mel', 'Canela', 'Cashmeran', 'Jasmim Sambac'],
      base: ['Folha de Tabaco', 'Fava Tonka', 'Baunilha']
    },
    description: 'Uma obra-prima de mel e tabaco. Opulento, rico e extremamente elegante. Um dos favoritos do Menzinho.',
    image: '/images/perfumes/naxos.jpg'
  },
  {
    id: 'xerjoff-erba-gold',
    name: 'Erba Gold',
    brand: 'Xerjoff',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Unique Gold',
    cloneImage: '/images/clones/unique-gold.png',
    arabBrand: 'Al Haramain',
    arabName: 'Amber Oud Gold Edition',
    arabImage: '/images/clones/amber-oud-gold.jpg',
    arabNotes: 'Fruity, Sweet, Musky, Amber',
    price: 'R$ 2.500,00',
    rating: 4.7,
    occasions: ['Verão', 'Festa', 'Dia a Dia', 'Alegre'],
    notes: {
      top: ['Laranja Siciliana', 'Limão Siciliano', 'Bergamota da Calábria'],
      heart: ['Frutas', 'Gengibre', 'Cardamomo'],
      base: ['Almíscar Branco', 'Âmbar', 'Baunilha de Madagascar']
    },
    description: 'Uma explosão frutada e cítrica, mais refinada e menos agressiva que o Erba Pura.',
    image: '/images/perfumes/erba-gold.jpg'
  },
  {
    id: 'xerjoff-erba-pura',
    name: 'Erba Pura',
    brand: 'Xerjoff',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Pura',
    cloneImage: '/images/clones/pura.jpg',
    arabBrand: 'Al Haramain',
    arabName: 'Amber Oud Gold Edition',
    arabImage: '/images/clones/amber-oud-gold.jpg',
    arabNotes: 'Fruity, Sweet, Musky, Amber',
    price: 'R$ 2.400,00',
    rating: 4.6,
    occasions: ['Verão', 'Festa', 'Balada', 'Alegre'],
    notes: {
      top: ['Laranja Siciliana', 'Limão Siciliano', 'Bergamota'],
      heart: ['Cesta de Frutas'],
      base: ['Almíscar Branco', 'Âmbar', 'Baunilha']
    },
    description: 'Uma bomba de frutas tropicais e almíscar. Projeta quilômetros. Ame ou odeie.',
    image: '/images/perfumes/erba-pura.jpg'
  },
  {
    id: 'xerjoff-nio',
    name: 'Nio',
    brand: 'Xerjoff',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Iron',
    cloneImage: '/images/clones/iron.webp',
    price: 'R$ 3.200,00',
    rating: 4.9,
    occasions: ['Verão', 'Calor Extremo', 'Dia a Dia', 'Elegante'],
    notes: {
      top: ['Bergamota', 'Notas Verdes', 'Néroli'],
      heart: ['Cardamomo', 'Pimenta Rosa', 'Jasmim', 'Noz-moscada'],
      base: ['Vetiver', 'Cedro da Virgínia', 'Guaiac', 'Patchouli']
    },
    description: 'O cítrico mais natural e cortante da perfumaria. Bergamota pura e realista.',
    image: '/images/perfumes/nio.jpg'
  },

  // --- PARFUMS DE MARLY ---
  {
    id: 'pdm-layton',
    name: 'Layton',
    brand: 'Parfums de Marly',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Laymont',
    cloneImage: '/images/clones/laymont.webp',
    arabBrand: 'Al Haramain',
    arabName: 'Détour Noir',
    arabImage: '/images/clones/detour-noir.jpg',
    arabNotes: 'Vanilla, Spicy, Apple, Woody',
    price: 'R$ 2.100,00',
    rating: 5,
    occasions: ['Encontro', 'Noite', 'Outono', 'Inverno'],
    notes: {
      top: ['Maçã', 'Lavanda', 'Mandarina', 'Bergamota'],
      heart: ['Gerânio', 'Violeta', 'Jasmim'],
      base: ['Baunilha', 'Cardamomo', 'Sândalo', 'Pimenta']
    },
    description: 'O rei dos encontros. Maçã caramelizada com baunilha e especiarias. Sedutor e agradável.',
    image: '/images/perfumes/layton.jpg'
  },
  {
    id: 'pdm-layton-exclusif',
    name: 'Layton Exclusif',
    brand: 'Parfums de Marly',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Laymont Exclusif',
    cloneImage: '/images/clones/laymont.webp',
    arabBrand: 'Maison Alhambra',
    arabName: 'Leyden',
    arabImage: '/images/clones/leyden.jpg',
    arabNotes: 'Woody, Spicy, Animalic, Vanilla',
    price: 'R$ 2.400,00',
    rating: 4.8,
    occasions: ['Noite', 'Inverno', 'Formal', 'Gótico'],
    notes: {
      top: ['Amêndoa', 'Mandarina', 'Bergamota', 'Notas Aquosas'],
      heart: ['Civeta', 'Gerânio', 'Rosa', 'Gardênia', 'Lírio'],
      base: ['Guaiac', 'Oud', 'Baunilha', 'Café', 'Sândalo']
    },
    description: 'Versão mais sombria, animálica e amadeirada do Layton. Para quem quer impor presença.',
    image: '/images/perfumes/layton-exclusif.jpg'
  },
  {
    id: 'pdm-percival',
    name: 'Percival',
    brand: 'Parfums de Marly',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Fjord',
    cloneImage: '/perfumes/fjord.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Perseus',
    arabImage: '/images/clones/perseus.jpg',
    arabNotes: 'Fresh, Aromatic, Citrus, Musky',
    price: 'R$ 2.000,00',
    rating: 4.7,
    occasions: ['Dia a Dia', 'Trabalho', 'Assinatura', 'Verão'],
    notes: {
      top: ['Lavanda', 'Mandarina', 'Bergamota', 'Gerânio'],
      heart: ['Hedione', 'Violeta', 'Jasmim', 'Coentro', 'Canela'],
      base: ['Ambroxan', 'Madeira de Âmbar', 'Almíscar', 'Bálsamo de Abeto']
    },
    description: 'Fresco, limpo e extremamente versátil. O "azul" da perfumaria de nicho que agrada a todos.',
    image: '/perfumes/percival.jpg'
  },

  // --- NISHANE ---
  {
    id: 'nishane-hacivat',
    name: 'Hacivat',
    brand: 'Nishane',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Hannishe',
    cloneImage: '/images/clones/hannishe.png',
    arabBrand: 'Afnan',
    arabName: 'Supremacy Not Only Intense',
    arabImage: '/images/clones/supremacy-noi.jpg',
    arabNotes: 'Fruity, Mossy, Woody, Citrus',
    price: 'R$ 2.600,00',
    rating: 5,
    occasions: ['Verão', 'Trabalho', 'Assinatura', 'Calor'],
    notes: {
      top: ['Abacaxi', 'Toranja', 'Bergamota'],
      heart: ['Cedro', 'Patchouli', 'Jasmim'],
      base: ['Musgo de Carvalho', 'Notas Amadeiradas']
    },
    description: 'Um chipre frutado moderno. Abacaxi suculento com muito musgo de carvalho. Fixação eterna.',
    image: '/images/perfumes/hacivat.jpg'
  },
  {
    id: 'nishane-ani',
    name: 'Ani',
    brand: 'Nishane',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Edah',
    cloneImage: '/images/clones/edah.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Nasheet',
    arabImage: '/images/clones/nasheet.jpg',
    arabNotes: 'Vanilla, Spicy, Woody, Ginger',
    price: 'R$ 2.500,00',
    rating: 5,
    occasions: ['Inverno', 'Encontro', 'Conforto', 'Noite'],
    notes: {
      top: ['Gengibre', 'Bergamota', 'Pimenta Rosa', 'Notas Verdes'],
      heart: ['Cardamomo', 'Groselha Preta', 'Rosa Turca'],
      base: ['Baunilha', 'Benjoim', 'Sândalo', 'Cedro', 'Patchouli']
    },
    description: 'A melhor baunilha da perfumaria. Cremosa, especiada com gengibre e extremamente viciante.',
    image: '/images/perfumes/ani.jpg'
  },
  {
    id: 'nishane-fan-your-flames-x',
    name: 'Fan Your Flames X',
    brand: 'Nishane',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Flames of Desire',
    cloneImage: '/images/clones/flames-of-desire.webp',
    price: 'R$ 2.700,00',
    rating: 4.6,
    occasions: ['Noite', 'Festa', 'Inverno', 'Balada'],
    notes: {
      top: ['Coco', 'Rum', 'Lentisco'],
      heart: ['Tabaco', 'Fava Tonka', 'Tomilho', 'Cenoura'],
      base: ['Cedro', 'Musgo de Carvalho', 'Patchouli']
    },
    description: 'Coco, rum e tabaco. Uma vibe tropical noturna e boêmia.',
    image: '/images/perfumes/fan-your-flames-x.jpg'
  },

  // --- SOSPIRO ---
  {
    id: 'sospiro-vibrato',
    name: 'Vibrato',
    brand: 'Sospiro',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Vibrattion',
    cloneImage: '/images/clones/vibrattion.png',
    arabBrand: 'Afnan',
    arabName: 'Turathi Blue',
    arabImage: '/images/clones/turathi-blue.jpg',
    arabNotes: 'Citrus, Musky, Woody, Fresh',
    price: 'R$ 2.900,00',
    rating: 5,
    occasions: ['Verão', 'Assinatura', 'Elegante', 'Trabalho'],
    notes: {
      top: ['Jasmim', 'Bergamota', 'Toranja', 'Magnólia'],
      heart: ['Notas Herbais', 'Gengibre', 'Notas Atalcadas'],
      base: ['Cedro', 'Âmbar', 'Almíscar', 'Patchouli', 'Raíz de Orris']
    },
    description: 'Cítrico floral efervescente e sofisticado. Elegância pura em um frasco aveludado.',
    image: '/images/perfumes/vibrato.jpg'
  },

  // --- TOM FORD ---
  {
    id: 'tom-ford-tobacco-vanille',
    name: 'Tobacco Vanille',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Efrate',
    cloneImage: '/images/clones/efrate.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Tobacco Touch',
    arabImage: '/images/clones/tobacco-touch.jpg',
    arabNotes: 'Tobacco, Vanilla, Sweet, Spicy',
    price: 'R$ 2.200,00',
    rating: 4.9,
    occasions: ['Inverno', 'Natal', 'Noite', 'Formal'],
    notes: {
      top: ['Folha de Tabaco', 'Notas Especiadas'],
      heart: ['Baunilha', 'Cacau', 'Fava Tonka', 'Flor de Tabaco'],
      base: ['Frutas Secas', 'Notas Amadeiradas']
    },
    description: 'Um clássico opulento. Tabaco doce, baunilha e frutas secas. Cheiro de riqueza antiga.',
    image: '/images/perfumes/tobacco-vanille.jpg'
  },
  {
    id: 'tom-ford-oud-wood',
    name: 'Oud Wood',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Oud Tropicale',
    cloneImage: '/images/clones/oud-tropicale.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Woody Oud',
    arabImage: '/images/clones/woody-oud.jpg',
    arabNotes: 'Oud, Woody, Spicy, Warm',
    price: 'R$ 2.100,00',
    rating: 4.7,
    occasions: ['Trabalho', 'Formal', 'Escritório', 'Outono'],
    notes: {
      top: ['Pau-Rosa', 'Cardamomo', 'Pimenta Chinesa'],
      heart: ['Oud', 'Sândalo', 'Vetiver'],
      base: ['Fava Tonka', 'Baunilha', 'Âmbar']
    },
    description: 'Oud ocidental, limpo e sofisticado. Perfeito para o escritório e ternos bem cortados.',
    image: '/images/perfumes/oud-wood.jpg'
  },
  {
    id: 'tom-ford-fucking-fabulous',
    name: 'Fucking Fabulous',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Magna',
    cloneImage: '/perfumes/magna.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Fabulo Intense',
    arabImage: '/images/clones/fabulo-intense.jpg',
    arabNotes: 'Leather, Almond, Aromatic, Vanilla',
    price: 'R$ 2.800,00',
    rating: 4.6,
    occasions: ['Noite', 'Festa', 'Ousado', 'Encontro'],
    notes: {
      top: ['Sálvia Esclaréia', 'Lavanda'],
      heart: ['Amêndoa Amarga', 'Couro', 'Baunilha', 'Raíz de Orris'],
      base: ['Couro', 'Fava Tonka', 'Cashmeran', 'Madeiras Brancas', 'Âmbar']
    },
    description: 'Ousado, explícito e exclusivo. Couro com amêndoas amargas. Para quem não tem medo de chamar atenção.',
    image: '/perfumes/fucking_fabulous.png'
  },
  {
    id: 'tom-ford-lost-cherry',
    name: 'Lost Cherry',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Moriah',
    cloneImage: '/perfumes/moriah.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Lovely Cherie',
    arabImage: '/images/clones/lovely-cherie.jpg',
    arabNotes: 'Cherry, Almond, Sweet, Fruity',
    price: 'R$ 2.900,00',
    rating: 4.8,
    occasions: ['Encontro', 'Noite', 'Sedutor', 'Inverno'],
    notes: {
      top: ['Cereja Amarga', 'Licor', 'Amêndoa'],
      heart: ['Cereja Amarga', 'Rosa Turca', 'Jasmim Sambac', 'Ameixa'],
      base: ['Fava Tonka', 'Baunilha', 'Canela', 'Sândalo', 'Cedro', 'Cravo']
    },
    description: 'Cereja licorosa e sedutora. Doce, quente e irresistível. Perfeito para momentos íntimos.',
    image: '/perfumes/lost_cherry.png'
  },
  {
    id: 'tom-ford-neroli-portofino',
    name: 'Neroli Portofino',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Lemon & Neroli',
    cloneImage: '/perfumes/lemon_neroli.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Porto Neroli',
    arabImage: '/images/clones/porto-neroli.jpg',
    arabNotes: 'Citrus, White Floral, Fresh, Aromatic',
    price: 'R$ 2.100,00',
    rating: 4.5,
    occasions: ['Verão', 'Praia', 'Dia a Dia', 'Pós-Banho'],
    notes: {
      top: ['Bergamota', 'Mandarina', 'Limão', 'Laranja Amarga', 'Lavanda', 'Alecrim'],
      heart: ['Flor de Laranjeira Africana', 'Néroli', 'Jasmim'],
      base: ['Âmbar', 'Angélica', 'Ambreta']
    },
    description: 'A brisa da Riviera Italiana. Cítrico, floral e extremamente refrescante. Luxo engarrafado.',
    image: '/perfumes/neroli_portofino.png'
  },
  {
    id: 'tom-ford-bitter-peach',
    name: 'Bitter Peach',
    brand: 'Tom Ford',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Peach',
    cloneImage: '/images/clones/peach.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Bright Peach',
    arabImage: '/images/clones/bright-peach.jpg',
    arabNotes: 'Peach, Sweet, Fruity, Boozy',
    price: 'R$ 2.300,00',
    rating: 4.6,
    occasions: ['Verão', 'Festa', 'Alegre', 'Dia a Dia'],
    notes: {
      top: ['Pêssego', 'Laranja Sanguínea', 'Cardamomo'],
      heart: ['Rum', 'Conhaque', 'Davana', 'Jasmim'],
      base: ['Baunilha', 'Patchouli', 'Sândalo', 'Fava Tonka']
    },
    description: 'Pêssego maduro, suculento e levemente alcoólico. Divertido e sofisticado.',
    image: '/images/perfumes/bitter-peach.jpg'
  },

  // --- CLIVE CHRISTIAN ---
  {
    id: 'clive-christian-x',
    name: 'X For Men',
    brand: 'Clive Christian',
    type: 'Niche',
    cloneBrand: 'Le Scent',
    cloneName: 'X For Men Inspired',
    cloneImage: '/images/clones/shekinah.jpg', // Placeholder
    price: 'R$ 4.500,00',
    rating: 5,
    occasions: ['Gala', 'Casamento', 'Rei', 'Especialíssimo'],
    notes: {
      top: ['Ruibarbo', 'Abacaxi', 'Bergamota'],
      heart: ['Íris', 'Pimentão', 'Jasmim'],
      base: ['Cedro da Virgínia', 'Canela', 'Âmbar', 'Musgo de Carvalho', 'Vetiver']
    },
    description: 'Um dos perfumes mais caros e complexos do mundo. Especiado, quente e majestoso.',
    image: '/images/perfumes/x-for-men.jpg'
  },

  // --- LOUIS VUITTON ---
  {
    id: 'lv-imagination',
    name: 'Imagination',
    brand: 'Louis Vuitton',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Audacity',
    cloneImage: '/images/clones/audacity.webp',
    arabBrand: 'Maison Alhambra',
    arabName: 'Jean Lowe Immortal',
    arabImage: '/images/clones/jean-lowe-immortal.jpg',
    arabNotes: 'Citrus, Fresh Spicy, Amber, Aromatic',
    price: 'R$ 2.800,00',
    rating: 5,
    occasions: ['Verão', 'Assinatura', 'Elegante', 'Trabalho'],
    notes: {
      top: ['Cidra', 'Bergamota da Calábria', 'Laranja Siciliana'],
      heart: ['Gengibre Nigeriano', 'Néroli Tunisiano', 'Canela do Ceilão'],
      base: ['Chá Preto Chinês', 'Ambroxan', 'Olíbano', 'Guaiac']
    },
    description: 'A nota de chá preto mais sofisticada que existe. Cítrico, limpo e etéreo.',
    image: '/images/perfumes/imagination.jpg'
  },
  {
    id: 'lv-limmensite',
    name: "L'Immensité",
    brand: 'Louis Vuitton',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Immensity',
    cloneImage: '/images/clones/immensity.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Jean Lowe Immortal',
    arabImage: '/images/clones/jean-lowe-immortal.jpg',
    arabNotes: 'Fresh Spicy, Citrus, Amber, Aromatic',
    price: 'R$ 2.800,00',
    rating: 4.8,
    occasions: ['Verão', 'Trabalho', 'Assinatura', 'Elegante'],
    notes: {
      top: ['Toranja', 'Gengibre', 'Bergamota'],
      heart: ['Notas Aquáticas', 'Sálvia', 'Alecrim', 'Gerânio'],
      base: ['Ambroxan', 'Âmbar', 'Labdanum']
    },
    description: 'Fresco, especiado e extremamente versátil. O cheiro do sucesso moderno.',
    image: '/images/perfumes/limmensite.jpg'
  },

  // --- MAISON FRANCIS KURKDJIAN ---
  {
    id: 'mfk-baccarat-rouge-540-extrait',
    name: 'Baccarat Rouge 540 Extrait',
    brand: 'Maison Francis Kurkdjian',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Evodia',
    cloneImage: '/images/clones/evodia.jpg',
    arabBrand: 'Orientica',
    arabName: 'Amber Rouge',
    arabImage: '/images/clones/amber-rouge.jpg',
    arabNotes: 'Amber, Woody, Warm Spicy, Metallic',
    price: 'R$ 3.800,00',
    rating: 5,
    occasions: ['Noite', 'Festa', 'Luxo', 'Inverno'],
    notes: {
      top: ['Amêndoa Amarga', 'Açafrão'],
      heart: ['Jasmim Egípcio', 'Cedro'],
      base: ['Âmbar Cinzento', 'Notas Amadeiradas', 'Almíscar']
    },
    description: 'O perfume mais copiado do mundo, mas nunca igualado. Doce, aéreo e metálico. Puro luxo.',
    image: '/images/perfumes/baccarat-rouge.jpg'
  },
  {
    id: 'mfk-oud-satin-mood',
    name: 'Oud Satin Mood',
    brand: 'Maison Francis Kurkdjian',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Satin',
    cloneImage: '/images/clones/satin.jpg',
    arabBrand: 'Paris Corner',
    arabName: 'Ministry of Oud - Oud Satin',
    arabImage: '/images/clones/oud-satin.jpg',
    arabNotes: 'Rose, Oud, Vanilla, Powdery',
    price: 'R$ 3.600,00',
    rating: 4.9,
    occasions: ['Noite', 'Gala', 'Inverno', 'Romântico'],
    notes: {
      top: ['Violeta', 'Gerânio'],
      heart: ['Rosa Turca', 'Rosa Búlgara'],
      base: ['Oud do Laos', 'Baunilha', 'Âmbar']
    },
    description: 'Rosas com oud e baunilha. Textura de cetim. Extremamente sensual e luxuoso.',
    image: '/images/perfumes/oud-satin-mood.jpg'
  },

  // --- AMOUAGE ---
  {
    id: 'amouage-reflection-man',
    name: 'Reflection Man',
    brand: 'Amouage',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Prodige',
    cloneImage: '/images/clones/prodige.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Fakhar Black',
    arabImage: '/images/clones/fakhar-black.jpg',
    arabNotes: 'White Floral, Woody, Aromatic, Powdery',
    price: 'R$ 2.900,00',
    rating: 4.9,
    occasions: ['Trabalho', 'Casamento', 'Elegante', 'Primavera'],
    notes: {
      top: ['Alecrim', 'Pimenta Rosa', 'Petitgrain'],
      heart: ['Jasmim', 'Néroli', 'Raíz de Orris', 'Ylang Ylang'],
      base: ['Sândalo', 'Vetiver', 'Cedro', 'Patchouli']
    },
    description: 'Floral masculino, limpo e extremamente refinado. O cheiro de um homem bem sucedido e gentil.',
    image: '/images/perfumes/reflection-man.jpg'
  },

  // --- MANCERA ---
  {
    id: 'mancera-red-tobacco',
    name: 'Red Tobacco',
    brand: 'Mancera',
    type: 'Niche',
    cloneBrand: 'AZZA Parfums',
    cloneName: 'Red Explosion',
    cloneImage: '/images/clones/red-explosion.webp',
    arabBrand: 'Paris Corner',
    arabName: 'Red Tobacco',
    arabImage: '/images/clones/red-tobacco-pc.jpg',
    arabNotes: 'Tobacco, Warm Spicy, Sweet, Oud',
    price: 'R$ 1.200,00',
    rating: 4.5,
    occasions: ['Inverno', 'Noite', 'Balada', 'Frio Extremo'],
    notes: {
      top: ['Canela', 'Agarwood (Oud)', 'Açafrão', 'Incenso', 'Noz-moscada', 'Maçã Verde', 'Pera Branca'],
      heart: ['Patchouli', 'Jasmim'],
      base: ['Tabaco', 'Baunilha de Madagascar', 'Âmbar', 'Sândalo', 'Guaiac', 'Almíscar Branco', 'Vetiver do Haiti']
    },
    description: 'Uma bomba nuclear de tabaco e especiarias. Projeta por dias. Ame ou odeie.',
    image: '/images/perfumes/red-tobacco.jpg'
  },
  {
    id: 'mancera-cedrat-boise',
    name: 'Cedrat Boise',
    brand: 'Mancera',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Gálata',
    cloneImage: '/images/clones/galata.jpg',
    price: 'R$ 1.100,00',
    rating: 4.8,
    occasions: ['Dia a Dia', 'Trabalho', 'Assinatura', 'Versátil'],
    notes: {
      top: ['Limão Siciliano', 'Groselha Preta', 'Bergamota', 'Notas Especiadas'],
      heart: ['Notas Frutadas', 'Folha de Patchouli', 'Jasmim Aquático'],
      base: ['Cedro', 'Couro', 'Sândalo', 'Baunilha', 'Musgo', 'Almíscar Branco']
    },
    description: 'Um frutado amadeirado versátil e potente. Ótima alternativa ao Aventus, mas com personalidade própria.',
    image: '/images/perfumes/cedrat-boise.jpg'
  },

  // --- TIZIANA TERENZI ---
  {
    id: 'tiziana-terenzi-kirke',
    name: 'Kirke',
    brand: 'Tiziana Terenzi',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Safira',
    cloneImage: '/images/clones/safira.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Confidential Private Gold',
    arabImage: '/images/clones/confidential-gold.jpg',
    arabNotes: 'Fruity, Sweet, Musky, Tropical',
    price: 'R$ 1.800,00',
    rating: 4.6,
    occasions: ['Verão', 'Festa', 'Alegre', 'Dia a Dia'],
    notes: {
      top: ['Maracujá', 'Pêssego', 'Pera', 'Framboesa', 'Cassis', 'Areia'],
      heart: ['Lírio-do-Vale'],
      base: ['Almíscar', 'Sândalo', 'Baunilha', 'Patchouli', 'Heliotrópio']
    },
    description: 'Um coquetel de frutas tropicais com muito almíscar. Potente, doce e envolvente.',
    image: '/images/perfumes/kirke.jpg'
  },

  // --- INITIO ---
  {
    id: 'initio-oud-for-greatness',
    name: 'Oud for Greatness',
    brand: 'Initio Parfums Prives',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Shekinah',
    cloneImage: '/images/clones/shekinah.jpg',
    arabBrand: 'Lattafa',
    arabName: "Bade'e Al Oud Oud for Glory",
    arabImage: '/images/clones/oud-for-glory.jpg',
    arabNotes: 'Oud, Warm Spicy, Fresh Spicy, Patchouli',
    price: 'R$ 3.500,00',
    rating: 5,
    occasions: ['Noite', 'Inverno', 'Poderoso', 'Místico'],
    notes: {
      top: ['Açafrão', 'Noz-moscada', 'Lavanda'],
      heart: ['Agarwood (Oud)'],
      base: ['Patchouli', 'Almíscar']
    },
    description: 'Oud majestoso, escuro e especiado. Um perfume que exala poder e mistério.',
    image: '/images/perfumes/oud-for-greatness.jpg'
  },

  // --- KILIAN ---
  {
    id: 'kilian-angels-share',
    name: "Angels' Share",
    brand: 'Kilian',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Angels Lux',
    cloneImage: '/images/clones/angels-lux.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Khamrah',
    arabImage: '/images/clones/khamrah.jpg',
    arabNotes: 'Sweet, Warm Spicy, Vanilla, Amber',
    price: 'R$ 2.200,00',
    rating: 5,
    occasions: ['Inverno', 'Encontro', 'Natal', 'Gourmand'],
    notes: {
      top: ['Conhaque'],
      heart: ['Canela', 'Fava Tonka', 'Carvalho'],
      base: ['Pralinê', 'Baunilha', 'Sândalo']
    },
    description: 'Cheiro de torta de maçã com canela e conhaque envelhecido. Gourmand alcoólico divino.',
    image: '/images/perfumes/angels-share.jpg'
  },

  // --- LE LABO ---
  {
    id: 'le-labo-santal-33',
    name: 'Santal 33',
    brand: 'Le Labo',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Domini',
    cloneImage: '/perfumes/domini.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Santal 33',
    arabImage: '/images/clones/santal-33-ma.jpg',
    arabNotes: 'Woody, Powdery, Leather, Warm Spicy',
    price: 'R$ 2.400,00',
    rating: 4.7,
    occasions: ['Dia a Dia', 'Trabalho', 'Hipster', 'Outono'],
    notes: {
      top: ['Violeta', 'Cardamomo'],
      heart: ['Íris', 'Ambroxan'],
      base: ['Sândalo', 'Cedro', 'Couro', 'Papiro']
    },
    description: 'O cheiro de Nova York. Sândalo seco, couro e papiro. Único, polarizante e inconfundível.',
    image: '/perfumes/santal33.jpg'
  },

  // --- DIOR ---
  {
    id: 'dior-sauvage-elixir',
    name: 'Sauvage Elixir',
    brand: 'Dior',
    type: 'Designer',
    cloneBrand: 'Nuancielo',
    cloneName: 'Sauvage Elixir',
    cloneImage: '/images/clones/sauvage-elixir-nuancielo.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Asad',
    arabImage: '/images/clones/asad.jpg',
    arabNotes: 'Warm Spicy, Fresh Spicy, Woody, Vanilla',
    price: 'R$ 1.100,00',
    rating: 4.9,
    occasions: ['Inverno', 'Noite', 'Balada', 'Poderoso'],
    notes: {
      top: ['Noz-moscada', 'Canela', 'Cardamomo', 'Toranja'],
      heart: ['Lavanda'],
      base: ['Alcaçuz', 'Sândalo', 'Âmbar', 'Patchouli', 'Vetiver']
    },
    description: 'A versão definitiva do Sauvage. Especiado, denso e extremamente potente. Uma bomba de projeção.',
    image: '/images/perfumes/sauvage-elixir.jpg'
  },
  {
    id: 'dior-poison-girl',
    name: 'Poison Girl',
    brand: 'Dior',
    type: 'Designer',
    cloneBrand: 'Nuancielo',
    cloneName: 'Poison Girl',
    cloneImage: '/images/clones/poison-girl-nuancielo.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Yara',
    arabImage: '/images/clones/yara.jpg',
    arabNotes: 'Sweet, Vanilla, Powdery, Tropical',
    price: 'R$ 800,00',
    rating: 4.6,
    occasions: ['Inverno', 'Noite', 'Festa', 'Jovem'],
    notes: {
      top: ['Laranja Amarga', 'Limão'],
      heart: ['Rosa Damascena', 'Rosa de Grasse', 'Flor de Laranjeira'],
      base: ['Baunilha', 'Amêndoa', 'Fava Tonka', 'Tolu', 'Sândalo']
    },
    description: 'Doce, jovem e viciante. Baunilha com amêndoas e laranja. O cheiro da balada.',
    image: '/images/perfumes/poison-girl.jpg'
  },

  // --- YSL ---
  {
    id: 'ysl-y-edp',
    name: 'Y Eau de Parfum',
    brand: 'Yves Saint Laurent',
    type: 'Designer',
    cloneBrand: 'Nuancielo',
    cloneName: 'Y EDP',
    cloneImage: '/images/clones/y-edp-nuancielo.jpg',
    arabBrand: 'Lattafa',
    arabName: 'Fakhar Black',
    arabImage: '/images/clones/fakhar-black.jpg',
    arabNotes: 'Aromatic, Fresh Spicy, Woody, Citrus',
    price: 'R$ 750,00',
    rating: 4.7,
    occasions: ['Dia a Dia', 'Trabalho', 'Assinatura', 'Versátil'],
    notes: {
      top: ['Maçã', 'Gengibre', 'Bergamota'],
      heart: ['Sálvia', 'Bagas de Zimbro', 'Gerânio'],
      base: ['Amberwood', 'Fava Tonka', 'Cedro', 'Vetiver', 'Olíbano']
    },
    description: 'O perfume azul moderno definitivo. Maçã verde, sálvia e madeiras. Agrada a todos.',
    image: '/images/perfumes/y-edp.jpg'
  },
  {
    id: 'ysl-babycat',
    name: 'Babycat',
    brand: 'Yves Saint Laurent',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Babycat',
    cloneImage: '/images/clones/babycat-nuancielo.jpg',
    arabBrand: 'Paris Corner',
    arabName: 'Rifaaqat',
    arabImage: '/images/clones/rifaaqat.jpg',
    arabNotes: 'Fresh Spicy, Vanilla, Warm Spicy, Amber',
    price: 'R$ 2.200,00',
    rating: 5,
    occasions: ['Inverno', 'Noite', 'Encontro', 'Sensual'],
    notes: {
      top: ['Pimenta Rosa', 'Pimenta Preta', 'Elemi'],
      heart: ['Olíbano', 'Açafrão'],
      base: ['Baunilha', 'Cedro', 'Camurça']
    },
    description: 'Baunilha esfumaçada com camurça. Sexy, misterioso e unissex.',
    image: '/images/perfumes/babycat.jpg'
  },
  {
    id: 'ysl-tuxedo',
    name: 'Tuxedo',
    brand: 'Yves Saint Laurent',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Tuxedo',
    cloneImage: '/images/clones/tuxedo-nuancielo.jpg',
    arabBrand: 'Maison Alhambra',
    arabName: 'Kismet for Men',
    arabImage: '/images/clones/kismet.jpg',
    arabNotes: 'Woody, Warm Spicy, Patchouli, Vanilla',
    price: 'R$ 2.100,00',
    rating: 4.9,
    occasions: ['Noite', 'Gala', 'Encontro', 'Elegante'],
    notes: {
      top: ['Folha de Violeta', 'Bergamota', 'Coentro'],
      heart: ['Rosa', 'Lírio-do-Vale', 'Pimenta Preta'],
      base: ['Patchouli', 'Âmbar Cinzento', 'Baunilha Bourbon']
    },
    description: 'O cheiro da elegância. Patchouli com especiarias e baunilha. Perfeito para black tie.',
    image: '/images/perfumes/tuxedo.jpg'
  },

  // --- JEAN PAUL GAULTIER ---
  {
    id: 'jpg-ultra-male',
    name: 'Ultra Male',
    brand: 'Jean Paul Gaultier',
    type: 'Designer',
    cloneBrand: 'Nuancielo',
    cloneName: 'Ultra Male',
    cloneImage: '/images/clones/ultra-male-nuancielo.jpg',
    arabBrand: 'Afnan',
    arabName: '9pm',
    arabImage: '/images/clones/9pm.jpg',
    arabNotes: 'Vanilla, Amber, Warm Spicy, Fruity',
    price: 'R$ 650,00',
    rating: 4.8,
    occasions: ['Noite', 'Balada', 'Festa', 'Sedutor'],
    notes: {
      top: ['Pera', 'Lavanda', 'Hortelã', 'Bergamota', 'Limão'],
      heart: ['Canela', 'Sálvia Esclaréia', 'Alcarávia'],
      base: ['Casca de Baunilha Negra', 'Âmbar', 'Patchouli', 'Cedro']
    },
    description: 'O rei da balada. Pera doce com baunilha. Projeta muito e chama atenção.',
    image: '/images/perfumes/ultra-male.jpg'
  },

  // --- BVLGARI ---
  {
    id: 'bvlgari-tygar',
    name: 'Tygar',
    brand: 'Bvlgari',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Tygar',
    cloneImage: '/images/clones/tygar-nuancielo.jpg',
    arabBrand: 'Afnan',
    arabName: 'Turathi Blue',
    arabImage: '/images/clones/turathi-blue.jpg',
    arabNotes: 'Citrus, Musky, Woody, Fresh',
    price: 'R$ 2.800,00',
    rating: 4.8,
    occasions: ['Verão', 'Trabalho', 'Assinatura', 'Elegante'],
    notes: {
      top: ['Toranja'],
      heart: ['Gengibre', 'Ambreta'],
      base: ['Ambroxan', 'Notas Amadeiradas', 'Vetiver', 'Almíscar']
    },
    description: 'Cítrico simples e perfeito. Toranja suculenta com muito ambroxan. Elegância minimalista.',
    image: '/images/perfumes/tygar.jpg'
  },

  // --- MARC-ANTOINE BARROIS ---
  {
    id: 'marc-antoine-barrois-ganymede',
    name: 'Ganymede',
    brand: 'Marc-Antoine Barrois',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Ganymede',
    cloneImage: '/images/clones/ganymede-nuancielo.jpg',
    arabBrand: 'Paris Corner',
    arabName: 'Emir Celestial',
    arabImage: '/images/clones/celestial.jpg',
    arabNotes: 'Mineral, Warm Spicy, Leather, Ozonic',
    price: 'R$ 1.900,00',
    rating: 4.9,
    occasions: ['Trabalho', 'Assinatura', 'Futurista', 'Elegante'],
    notes: {
      top: ['Mandarina', 'Açafrão'],
      heart: ['Violeta', 'Osmanthus'],
      base: ['Akigalawood', 'Immortelle', 'Minerais']
    },
    description: 'Cheiro de outro planeta. Mineral, metálico e camurça. Uma obra de arte moderna.',
    image: '/images/perfumes/ganymede.jpg'
  },

  // --- ROJA DOVE ---
  {
    id: 'roja-elysium',
    name: 'Elysium Pour Homme',
    brand: 'Roja Dove',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Elysium',
    cloneImage: '/images/clones/elysium-nuancielo.jpg',
    arabBrand: 'Fragrance World',
    arabName: 'Imperium',
    arabImage: '/images/clones/imperium.jpg',
    arabNotes: 'Citrus, Aromatic, Woody, Fresh Spicy',
    price: 'R$ 3.200,00',
    rating: 4.7,
    occasions: ['Verão', 'Trabalho', 'Assinatura', 'Luxo'],
    notes: {
      top: ['Toranja', 'Limão', 'Bergamota', 'Lima'],
      heart: ['Vetiver', 'Bagas de Zimbro', 'Groselha Preta', 'Maçã'],
      base: ['Âmbar Cinzento', 'Almíscar', 'Benjoim', 'Baunilha', 'Couro']
    },
    description: 'Cítrico complexo e luxuoso. Cheiro de homem rico de férias.',
    image: '/images/perfumes/elysium.jpg'
  },

  // --- SOSPIRO (ERBA PURA MAGICA) ---
  {
    id: 'sospiro-erba-pura-magica',
    name: 'Erba Pura Magica',
    brand: 'Sospiro',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Erba Pura Magica',
    cloneImage: '/images/clones/erba-pura-magica-nuancielo.jpg',
    arabBrand: 'Al Wataniah',
    arabName: 'Kusuf',
    arabImage: '/images/clones/kusuf.jpg',
    arabNotes: 'Fruity, Sweet, Musky, Amber',
    price: 'R$ 2.600,00',
    rating: 4.7,
    occasions: ['Verão', 'Festa', 'Dia a Dia', 'Alegre'],
    notes: {
      top: ['Notas Frutadas', 'Limão', 'Bergamota'],
      heart: ['Notas Verdes', 'Íris'],
      base: ['Cedro', 'Almíscar', 'Âmbar', 'Baunilha']
    },
    description: 'Versão mais refinada e menos sintética do Erba Pura original.',
    image: '/images/perfumes/erba-pura-magica.jpg'
  },

  // --- RASASI ---
  {
    id: 'rasasi-hawas',
    name: 'Hawas for Him',
    brand: 'Rasasi',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Hawas',
    cloneImage: '/images/clones/hawas-nuancielo.jpg',
    arabBrand: 'Rasasi',
    arabName: 'Hawas for Him',
    arabImage: '/images/clones/hawas.jpg',
    arabNotes: 'Fruity, Citrus, Aquatic, Fresh',
    price: 'R$ 450,00',
    rating: 4.6,
    occasions: ['Verão', 'Calor', 'Dia a Dia', 'Jovem'],
    notes: {
      top: ['Maçã', 'Bergamota', 'Limão', 'Canela'],
      heart: ['Notas Aquáticas', 'Ameixa', 'Flor de Laranjeira'],
      base: ['Âmbar Cinzento', 'Almíscar', 'Patchouli']
    },
    description: 'O rei do hype árabe. Chiclete de ameixa com notas aquáticas. Projeta muito.',
    image: '/images/perfumes/hawas.jpg'
  },
  {
    id: 'rasasi-la-yuqawam',
    name: 'La Yuqawam Pour Homme',
    brand: 'Rasasi',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'La Yuqawam',
    cloneImage: '/images/clones/la-yuqawam-nuancielo.jpg',
    arabBrand: 'Rasasi',
    arabName: 'La Yuqawam Pour Homme',
    arabImage: '/images/clones/la-yuqawam.jpg',
    arabNotes: 'Leather, Fruity, Sweet, Animalic',
    price: 'R$ 550,00',
    rating: 4.8,
    occasions: ['Inverno', 'Noite', 'Elegante', 'Macho Alfa'],
    notes: {
      top: ['Framboesa', 'Açafrão', 'Tomilho'],
      heart: ['Olíbano', 'Jasmim', 'Artemísia'],
      base: ['Couro', 'Camurça', 'Notas Amadeiradas', 'Âmbar']
    },
    description: 'Couro com framboesa. Clone perfeito do Tuscan Leather, mas com performance nuclear.',
    image: '/images/perfumes/la-yuqawam.jpg'
  },

  // --- IBRAHEEM AL QURASHI ---
  {
    id: 'ibraheem-al-qurashi-tobacco',
    name: 'Tobacco & Oud',
    brand: 'Ibraheem Al Qurashi',
    type: 'Niche',
    cloneBrand: 'Nuancielo',
    cloneName: 'Tobacco & Oud',
    cloneImage: '/images/clones/tobacco-oud-nuancielo.jpg',
    arabBrand: 'Ibraheem Al Qurashi',
    arabName: 'Tobacco & Oud',
    arabImage: '/images/clones/tobacco-oud-iaq.jpg',
    arabNotes: 'Tobacco, Oud, Warm Spicy, Sweet',
    price: 'R$ 800,00',
    rating: 4.9,
    occasions: ['Inverno', 'Noite', 'Luxo', 'Exclusivo'],
    notes: {
      top: ['Tabaco', 'Especiarias'],
      heart: ['Oud', 'Rosa', 'Açafrão'],
      base: ['Sândalo', 'Âmbar', 'Almíscar']
    },
    description: 'Luxo saudita engarrafado. Tabaco e oud de altíssima qualidade.',
    image: '/images/perfumes/tobacco-oud-iaq.jpg'
  }
];

