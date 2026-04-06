import type { FoodItem } from '../Interfaces/food-item';

interface AdminListProps {
  items: FoodItem[];
  editingId: string | null;
  onEdit: (item: FoodItem) => void;
  onDelete: (id: string) => void;
}

export function AdminList({
  items,
  editingId,
  onEdit,
  onDelete,
}: AdminListProps) {
  return (
    <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-stone-900">Yemek Listesi</h3>
          <p className="mt-1 text-sm text-stone-500">
            Listeleme, guncelleme ve silme islemleri bu panelden yapilir.
          </p>
        </div>
        <span className="rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-stone-700">
          {items.length} kayit
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-3xl border border-stone-200">
        <div className="hidden grid-cols-[1.3fr_1fr_0.8fr_1.1fr] gap-4 bg-stone-100 px-5 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-stone-500 md:grid">
          <span>Yemek</span>
          <span>Kategori</span>
          <span>Fiyat</span>
          <span>Islem</span>
        </div>

        <div className="divide-y divide-stone-200">
          {items.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 px-5 py-5 md:grid-cols-[1.3fr_1fr_0.8fr_1.1fr] md:items-center"
            >
              <div>
                <p className="font-semibold text-stone-900">{item.name}</p>
                <p className="mt-1 text-sm text-stone-500">{item.description}</p>
              </div>
              <p className="text-sm text-stone-700">{item.category}</p>
              <p className="text-sm font-semibold text-stone-900">{item.price} TL</p>
              <div className="flex gap-3">
                <button
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    editingId === item.id
                      ? 'bg-stone-900 text-white'
                      : 'border border-stone-300 text-stone-700 hover:border-stone-900 hover:text-stone-900'
                  }`}
                  type="button"
                  onClick={() => onEdit(item)}
                >
                  Guncelle
                </button>
                <button
                  className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-700 transition hover:border-red-500 hover:text-red-800"
                  type="button"
                  onClick={() => onDelete(item.id)}
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 ? (
            <div className="px-5 py-10 text-center text-sm text-stone-500">
              Henuz menuye eklenmis bir yemek yok.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
