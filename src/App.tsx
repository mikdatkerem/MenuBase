'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { seedMenu } from './Data/seedMenu';
import { useLocalStorage } from './Hooks/useLocalStorage';
import type { FoodItem, FoodItemInput } from './Interfaces/food-item';
import { MainLayout } from './Layouts/MainLayout';
import { AdminPage } from './Features/Pages/AdminPage';
import { MenuPage } from './Features/Pages/MenuPage';
import { createFoodId, MENU_STORAGE_KEY } from './Utils/storage';

const initialForm: FoodItemInput = {
  name: '',
  category: '',
  price: '',
  description: '',
};

function App() {
  const [items, setItems] = useLocalStorage<FoodItem[]>(MENU_STORAGE_KEY, seedMenu);
  const [form, setForm] = useState<FoodItemInput>(initialForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setEditingId(null);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedItem = {
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price),
      description: form.description.trim(),
    };

    if (
      !normalizedItem.name ||
      !normalizedItem.category ||
      !normalizedItem.description ||
      Number.isNaN(normalizedItem.price)
    ) {
      return;
    }

    if (editingId) {
      setItems((current) =>
        current.map((item) =>
          item.id === editingId ? { ...item, ...normalizedItem } : item,
        ),
      );
      resetForm();
      return;
    }

    setItems((current) => [...current, { id: createFoodId(), ...normalizedItem }]);
    resetForm();
  };

  const handleEdit = (item: FoodItem) => {
    setEditingId(item.id);
    setForm({
      name: item.name,
      category: item.category,
      price: String(item.price),
      description: item.description,
    });
  };

  const handleDelete = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
    if (editingId === id) {
      resetForm();
    }
  };

  return (
    <MainLayout>
      <MenuPage items={items} />
      <AdminPage
        items={items}
        form={form}
        editingId={editingId}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onCancelEdit={resetForm}
      />
    </MainLayout>
  );
}

export default App;
