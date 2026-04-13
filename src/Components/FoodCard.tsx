import type { FoodItem } from '../Interfaces/food-item';

interface FoodCardProps {
  item: FoodItem;
}

export function FoodCard({ item }: FoodCardProps) {
  return (
    <article className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">
            {item.category}
          </p>
          <h3 className="font-serif text-2xl text-stone-900">{item.name}</h3>
        </div>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-semibold text-stone-700">
          {item.price} TL
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-stone-600">{item.description}</p>
    </article>
  );
}
