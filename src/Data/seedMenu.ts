import type { FoodItem } from '../Interfaces/food-item';

export const seedMenu: FoodItem[] = [
  {
    id: '1',
    name: 'Izgara Kofte',
    category: 'Ana Yemek',
    price: 320,
    description: 'Tereyagli pirinc pilavi ve izgara biber ile servis edilen klasik kofte tabagi.',
  },
  {
    id: '2',
    name: 'Domates Corbasi',
    category: 'Baslangic',
    price: 110,
    description: 'Feslegen dokunuslu, gunluk hazirlanan sicak domates corbasi.',
  },
  {
    id: '3',
    name: 'San Sebastian',
    category: 'Tatli',
    price: 180,
    description: 'Yumusak merkezli, hafif karamelize dokulu firin cikisi cheesecake.',
  },
];
