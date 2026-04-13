export const MENU_STORAGE_KEY = 'menubase-menu-items';

export function createFoodId() {
  return `food-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
