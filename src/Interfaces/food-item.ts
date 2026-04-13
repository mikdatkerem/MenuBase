export interface FoodItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface FoodItemInput {
  name: string;
  category: string;
  price: string;
  description: string;
}
