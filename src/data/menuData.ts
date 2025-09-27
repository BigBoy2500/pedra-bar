// Tipos para os itens do menu
export interface MenuItem {
  name: string;
  description: string;
  price: number;
  addedDate?: string; // Campo opcional para data de adição
}

export interface SubcategoryItem {
  name: string;
  price: number;
  addedDate?: string; // Campo opcional para data de adição
}

// Tipo para itens que podem ter addedDate
export type ItemWithAddedDate = MenuItem | SubcategoryItem;

// Função para verificar se um item é novo (dentro de 2 semanas)
export const isItemNew = (addedDate?: string): boolean => {
  if (!addedDate) return false;
  
  const added = new Date(addedDate);
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - (14 * 24 * 60 * 60 * 1000));
  
  return added > twoWeeksAgo;
};

export const menuData: {
  [key: string]: {
    label: string;
    items?: MenuItem[];
    subcategories?: {
      [key: string]: {
        label: string;
        items: SubcategoryItem[];
      };
    };
  };
} = {
  pratos: {
    label: 'Pratos',
    items: [
      {
        name: 'Francesinha s/ ovo',
        description: '',
        price: 9.50,
        addedDate: '2025-09-13',
      },
      {
        name: 'Francesinha c/ ovo',
        description: '',
        price: 10.00,
        addedDate: '2025-09-13',
      },
      {
        name: 'Cachorro à Pedra Bar',
        description: '',
        price: 6.30,
        addedDate: '2025-09-13',
      },
      {
        name: 'Prego no prato',
        description: '',
        price: 8.50,
      },
      {
        name: 'Panado no prato',
        description: '',
        price: 5.00,
      },
      {
        name: 'Alheira',
        description: '',
        price: 5.00,
      },
      {
        name: 'Omelete',
        description: '',
        price: 5.00,
      },
    ],
  },
  tappas: {
    label: 'Tappas',
    items: [
      {
        name: 'Tábua Grande',
        description: '',
        price: 10.00,
      },
      {
        name: 'Tábua Pequena',
        description: '',
        price: 5.00,
      },
    ],
  },
  salgadinhos: {
    label: 'Salgadinhos',
    items: [
      {
        name: 'Rissóis (un.)',
        description: '',
        price: 0.90,
      },
      {
        name: 'Moelas',
        description: '',
        price: 3.00,
      },
      {
        name: 'Caprichos (8un.)',
        description: '',
        price: 6.00,
      },
      {
        name: 'Asinhas de frango (8un.)',
        description: '',
        price: 6.00,
      },
      {
        name: 'Rojões c/pickles',
        description: '',
        price: 3.50,
      },
    ],
  },
  tostasSandes: {
    label: 'Tostas e Sandes',
    items: [
      {
        name: 'Tosta mista',
        description: '',
        price: 2.50,
      },
      {
        name: 'Tosta mista (pão rústico)',
        description: '',
        price: 3.00,
      },
      {
        name: 'Tosta de queijo',
        description: '',
        price: 2.30,
      },
      {
        name: 'Tosta de fiambre',
        description: '',
        price: 2.30,
      },
      {
        name: 'Prego no pão',
        description: '',
        price: 4.00,
      },
      {
        name: 'Prego no pão c/queijo da serra',
        description: '',
        price: 6.00,
      },
      {
        name: 'Panado no pão',
        description: '',
        price: 2.80,
      },
      {
        name: 'Sandes de rojões',
        description: '',
        price: 2.50,
      },
      {
        name: 'Sandes de Queijo',
        description: '',
        price: 1.80,
      },
      {
        name: 'Sandes de Fiambre',
        description: '',
        price: 1.80,
      },
      {
        name: 'Sandes mista',
        description: '',
        price: 2.00,
      },
      {
        name: 'Sandes de Presunto',
        description: '',
        price: 3.00,
      },
      {
        name: 'Féveras no pão',
        description: '',
        price: 2.50,
      },
      {
        name: 'Cachorro quente',
        description: '',
        price: 2.50,
      },
      {
        name: 'Hamburger',
        description: '',
        price: 5.00,
      },
    ],
  },
  bebidasQuentes: {
    label: 'Bebidas Quentes',
    items: [
      {
        name: 'Café',
        description: '',
        price: 0.80,
      },
      {
        name: 'Descafeinado',
        description: '',
        price: 0.80,
      },
      {
        name: 'Cappuccino',
        description: '',
        price: 1.30,
      },
      {
        name: 'Carioca',
        description: '',
        price: 0.70,
      },
      {
        name: 'Carioca de limão',
        description: '',
        price: 0.60,
      },
      {
        name: 'Pingo',
        description: '',
        price: 0.90,
      },
      {
        name: 'Meia de leite',
        description: '',
        price: 1.10,
      },
      {
        name: 'Cevada',
        description: '',
        price: 0.70,
      },
      {
        name: 'Chá',
        description: '',
        price: 1.20,
      },
    ],
  },
  cervejas: {
    label: 'Cervejas',
    items: [
      {
        name: 'Super Bock',
        description: '',
        price: 1.40,
      },
      {
        name: 'Super Bock mini 0.20cl',
        description: '',
        price: 1.00,
      },
      {
        name: 'Super Bock 0.0%',
        description: '',
        price: 1.40,
      },
      {
        name: 'Sagres mini 0.25cl',
        description: '',
        price: 1.20,
      },
      {
        name: 'Heineken 0.25cl',
        description: '',
        price: 1.40,
      },
      {
        name: 'Bohemia',
        description: '',
        price: 1.50,
      },
      {
        name: 'Fino San Miguel 0.20cl',
        description: '',
        price: 1.30,
      },
      {
        name: 'Fino San Miguel 0.40cl',
        description: '',
        price: 2.00,
      },
      {
        name: 'Fino Dunkel 0.20cl',
        description: '',
        price: 1.30,
      },
      {
        name: 'Fino Dunkel 0.40cl',
        description: '',
        price: 2.00,
      },
      {
        name: 'Somersby',
        description: '',
        price: 2.50,
      },
      {
        name: 'Stout mini 0.20cl',
        description: '',
        price: 1.20,
      },
      {
        name: 'Panaché',
        description: '',
        price: 1.20,
      },
      {
        name: 'Caneca 0.50cl',
        description: '',
        price: 2.20,
      },
    ],
  },
  vinhos: {
    label: 'Vinhos',
    items: [
      {
        name: 'Vidigueira Tinto',
        description: '',
        price: 9.50,
      },
      {
        name: 'Vidigueira Branco',
        description: '',
        price: 9.50,
      },
      {
        name: 'Monte Ermos Tinto',
        description: '',
        price: 9.00,
      },
      {
        name: 'Vila Real Tinto (Reserva)',
        description: '',
        price: 8.50,
      },
      {
        name: 'Encostas da Arrabida Maduro Tinto',
        description: '',
        price: 6.00,
      },
      {
        name: 'Encostas da Cesta Verde',
        description: '',
        price: 8.00,
      },
      {
        name: 'Bordoa Verde',
        description: '',
        price: 6.50,
      },
      {
        name: 'Vinho a Copo',
        description: '',
        price: 1.30,
      },
    ],
  },
  longDrinks: {
    label: 'Long Drinks',
    subcategories: {
      gins: {
        label: "Gin's",
        items: [
          { name: "Gordon's", price: 5.00 },
          { name: 'Beefeater', price: 5.00 },
          { name: 'Bombay Sapphire', price: 6.00 },
          { name: 'Tanqueray', price: 6.00 },
          { name: "Hendrick's", price: 7.00 },
        ],
      },
      vodkas: {
        label: 'Vodkas',
        items: [
          { name: 'Vodka Laranja', price: 4.00 },
          { name: 'Vodka Cranberry', price: 4.50 },
          { name: 'Vodka Red Bull', price: 5.00 },
        ],
      },
      rums: {
        label: 'Rum’s',
        items: [
          { name: 'Bacardi Cola', price: 4.00 },
          { name: 'El Galipote', price: 5.00 },
          { name: 'Mojito', price: 4.00 },
          { name: 'Piña Colada', price: 5.00 },
        ],
      },
      outros: {
        label: 'Outros',
        items: [
          { name: 'Campari Laranja / Tonic / Spritz', price: 3.50 },
          { name: 'Aperol Laranja / Tonic / Spritz', price: 4.00 },
          { name: 'Pisang Ambon', price: 3.50 },
          { name: 'Tequila Sunrise', price: 5.00 },
          { name: 'Sex on the beach', price: 5.00 },
          { name: 'Caipirinha', price: 4.00 },
          { name: 'Caipirosca', price: 4.00 },
          { name: 'Caipirão', price: 4.00 },
          { name: 'Mimosa', price: 3.50 },
          { name: 'Bellini', price: 3.50 },
          { name: 'Whisky Cola', price: 4.00 },
          { name: 'Porto Tónico', price: 3.50 },
        ],
      },
    },
  },
  LicoresAperitivos: {
    label: 'Licores e Aperitivos',
    items: [
      {
        name: 'Beirão',
        description: '',
        price: 3.00,
      },
      {
        name: 'Baileys',
        description: '',
        price: 4.00,
      },
      {
        name: 'Amarguinha',
        description: '',
        price: 2.50,
      },
      {
        name: 'Triple Seco',
        description: '',
        price: 2.50,
      },
      {
        name: 'Favaios',
        description: '',
        price: 1.50,
      },
      {
        name: 'Martini Rosso',
        description: '',
        price: 1.40,
      },
      {
        name: 'Martini Bianco',
        description: '',
        price: 1.40,
      },
      {
        name: 'Porto Tawny',
        description: '',
        price: 1.50,
      },
      {
        name: 'Porto Velho',
        description: '',
        price: 2.50,
      },
      {
        name: 'Porto Branco',
        description: '',
        price: 1.50,
      },
    ],
  },
  Whiskys: {
    label: "Whisky's",
    items: [
      {
        name: 'Velho',
        description: '',
        price: 6.00,
      },
      {
        name: 'Novo',
        description: '',
        price: 4.00,
      },
      {
        name: 'Bourbon',
        description: '',
        price: 6.00,
      },
    ],
  },
  BrandysAguardente: {
    label: "Brandy's / Aguardente",
    items: [
      {
        name: 'Croft',
        description: '',
        price: 2.50,
      },
      {
        name: 'Macieira',
        description: '',
        price: 2.50,
      },
      {
        name: 'Aliança Velha',
        description: '',
        price: 3.00,
      },
      {
        name: 'CRF',
        description: '',
        price: 3.00,
      },
      {
        name: 'Bagaceira',
        description: '',
        price: 2.00,
      },
    ],
  },
  Sangria: {
    label: 'Sangria',
    items: [
      {
        name: 'Vinho Tinto',
        description: '',
        price: 10.00,
      },
      {
        name: 'Vinho Branco',
        description: '',
        price: 10.00,
      },
      {
        name: 'Espumante',
        description: '',
        price: 12.00,
      },
      {
        name: 'Frutos Vermelhos (Rosé)',
        description: '',
        price: 12.00,
      },
      {
        name: 'Maracujá (Espumante)',
        description: '',
        price: 12.00,
      },
    ],
  },
  SemAlcool: {
    label: 'Sem Álcool',
    items: [
      {
        name: 'Água 0.50cl',
        description: '',
        price: 0.90,
      },
      {
        name: 'Água Tónica',
        description: '',
        price: 2.00,
      },
      {
        name: 'Castelo',
        description: '',
        price: 1.20,
      },
      {
        name: 'Pedras',
        description: '',
        price: 1.20,
      },
      {
        name: 'Frize',
        description: '',
        price: 1.40,
      },
      {
        name: 'Compal',
        description: '',
        price: 1.60,
      },
      {
        name: 'Santal',
        description: '',
        price: 1.70,
      },
      {
        name: 'Sumol',
        description: '',
        price: 1.70,
      },
      {
        name: 'Iced Tea',
        description: '',
        price: 1.70,
      },
      {
        name: 'Coca-Cola',
        description: '',
        price: 1.70,
      },
      {
        name: '7up',
        description: '',
        price: 1.70,
      },
      {
        name: 'Red Bull',
        description: '',
        price: 2.00,
      },
    ],
  },
} 