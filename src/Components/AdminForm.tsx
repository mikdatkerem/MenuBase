import type { ChangeEvent, FormEvent } from 'react';
import type { FoodItemInput } from '../Interfaces/food-item';

interface AdminFormProps {
  form: FoodItemInput;
  editingId: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onCancelEdit: () => void;
}

export function AdminForm({
  form,
  editingId,
  onChange,
  onSubmit,
  onCancelEdit,
}: AdminFormProps) {
  return (
    <form className="space-y-5 rounded-[2rem] border border-stone-200 bg-white p-6" onSubmit={onSubmit}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl text-stone-900">
            {editingId ? 'Yemek Guncelle' : 'Yeni Yemek Ekle'}
          </h3>
          <p className="mt-1 text-sm text-stone-500">
            Admin bu form uzerinden menu icerigini dogrudan yonetir.
          </p>
        </div>
        {editingId ? (
          <button
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-900"
            type="button"
            onClick={onCancelEdit}
          >
            Vazgec
          </button>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-stone-700">
          <span>Yemek Adi</span>
          <input
            required
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-900"
            name="name"
            value={form.name}
            onChange={onChange}
          />
        </label>

        <label className="space-y-2 text-sm text-stone-700">
          <span>Kategori</span>
          <input
            required
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-900"
            name="category"
            value={form.category}
            onChange={onChange}
          />
        </label>

        <label className="space-y-2 text-sm text-stone-700 md:col-span-2">
          <span>Aciklama</span>
          <textarea
            required
            className="min-h-32 w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-900"
            name="description"
            value={form.description}
            onChange={onChange}
          />
        </label>

        <label className="space-y-2 text-sm text-stone-700">
          <span>Fiyat</span>
          <input
            required
            min="0"
            step="0.01"
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 outline-none transition focus:border-stone-900"
            name="price"
            type="number"
            value={form.price}
            onChange={onChange}
          />
        </label>
      </div>

      <button
        className="rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        type="submit"
      >
        {editingId ? 'Guncellemeyi Kaydet' : 'Yemegi Ekle'}
      </button>
    </form>
  );
}
