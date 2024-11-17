export interface ICatalogItem {
  itemId: string;
  img: string;
  title: string;
  category: string;
  description?: string[];
  price: number;
  weight: string;
  sale?: number;
}

export interface ICatalogItems {
  id: number;
  title: string;
  categories: string[];
  items: ICatalogItem[];
}

export const catalogItems: ICatalogItems[] = [
  {
    id: 0,
    title: "Шашлык",
    categories: ["Свинина", "Курица", "Телятина", "Баранина"],
    items: [
      {
        itemId: "0",
        img: "/img/eat/1@2x.png",
        title: "Шашлык из свиной вырезки",
        description: ["Свиная вырезка", "лук", "лаваш", "аджика"],
        category: "Свинина",
        price: 570,
        weight: "200/50 г",
        sale: 20,
      },
      {
        itemId: "1",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Семечки",
        description: ["Бараньи ребра", "лаваш", "лук", "аджика"],
        price: 850,
        weight: "200/50 г",
      },
      {
        itemId: "2",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        itemId: "3",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
    ],
  },
  {
    id: 1,
    title: "Люля-Кебаб",
    categories: ["Свинина", "Курица", "Телятина", "Баранина"],
    items: [
      {
        itemId: "4",
        img: "/img/eat/1@2x.png",
        category: "Свинина",
        title: "Шашлык из свиной вырезки",
        description: ["Свиная вырезка", "лук", "лаваш", "аджика"],
        price: 570,
        weight: "200/50 г",
        sale: 20,
      },
      {
        itemId: "5",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Семечки",
        description: ["Бараньи ребра", "лаваш", "лук", "аджика"],
        price: 850,
        weight: "200/50 г",
      },
      {
        itemId: "6",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
      {
        itemId: "7",
        img: "/img/eat/1@2x.png",
        category: "Баранина",
        title: "Шашлык из баранины Яблочко",
        description: ["Баранье яблоко", "лаваш", "лук", "аджика"],
        price: 830,
        weight: "200/50 г",
      },
    ],
  },

  {
    id: 2,
    title: "Напитки",
    categories: ["Газ", "Б/газ", "Соки", "Пиво"],
    items: [
      {
        itemId: "8",
        img: "/img/eat/1@2x.png",
        category: "Газ",
        title: "Кока-кола",
        price: 150,
        weight: "500 мл",
      },
      {
        itemId: "9",
        category: "Пиво",
        img: "/img/eat/1@2x.png",
        title: "Жигулевское",
        price: 150,
        weight: "500 мл",
      },
      {
        itemId: "10",
        category: "Б/газ",
        img: "/img/eat/1@2x.png",
        title: "Аква",
        price: 150,
        weight: "500 мл",
      },
      {
        itemId: "11",
        category: "Соки",
        img: "/img/eat/1@2x.png",
        title: "Добрый",
        price: 150,
        weight: "500 мл",
      },
    ],
  },
];
