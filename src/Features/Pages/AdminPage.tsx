import type { ChangeEvent, FormEvent } from 'react';
import { AdminForm } from '../../Components/AdminForm';
import { AdminList } from '../../Components/AdminList';
import { AdminSummary } from '../../Components/AdminSummary';
import { SectionHeading } from '../../Components/SectionHeading';
import type { FoodItem, FoodItemInput } from '../../Interfaces/food-item';

interface AdminPageProps {
  items: FoodItem[];
  form: FoodItemInput;
  editingId: string | null;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onEdit: (item: FoodItem) => void;
  onDelete: (id: string) => void;
  onCancelEdit: () => void;
}

export function AdminPage({
  items,
  form,
  editingId,
  onChange,
  onSubmit,
  onEdit,
  onDelete,
  onCancelEdit,
}: AdminPageProps) {
  return (
    <section id="admin" className="space-y-8 scroll-mt-24">
      <SectionHeading eyebrow="Admin" title="" description="" />

      <AdminSummary itemCount={items.length} editing={Boolean(editingId)} />

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.25fr]">
        <AdminForm
          form={form}
          editingId={editingId}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancelEdit={onCancelEdit}
        />
        <AdminList items={items} editingId={editingId} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </section>
  );
}
