import type { FoodItem } from '../Interfaces/food-item';

export const seedMenu: FoodItem[] = [
  {
    id: '1',
    name: 'Izgara Köfte',
    category: 'Ana Yemek',
    price: 320,
    description: 'Tereyağlı pirinç pilavı ve ızgara biber ile servis edilen klasik köfte tabağı.',
  },
  {
    id: '2',
    name: 'Domates Çorbası',
    category: 'Başlangıç',
    price: 110,
    description: 'Fesleğen dokunuşlu, günlük hazırlanan sıcak domates çorbası.',
  },
  {
    id: '3',
    name: 'Trileçe',
    category: 'Tatlı',
    price: 180,
    description: 'Karamel soslu, sütlü ve hafif dokulu klasik Balkan tatlısı.',
  },
];
