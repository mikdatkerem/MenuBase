import { EmptyMenuState } from '../../Components/EmptyMenuState';
import { FoodCard } from '../../Components/FoodCard';
import { SectionHeading } from '../../Components/SectionHeading';
import type { FoodItem } from '../../Interfaces/food-item';

interface MenuPageProps {
  items: FoodItem[];
}

export function MenuPage({ items }: MenuPageProps) {
  return (
    <section id="menu" className="space-y-8 scroll-mt-24">
      <SectionHeading eyebrow="Menu" title="" description="" />

      {items.length === 0 ? (
        <EmptyMenuState />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
