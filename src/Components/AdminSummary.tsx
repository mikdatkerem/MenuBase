interface AdminSummaryProps {
  itemCount: number;
  editing: boolean;
}

export function AdminSummary({ itemCount, editing }: AdminSummaryProps) {
  const cards = [
    {
      title: 'Ekle işlemi',
      value: 'Aktif',
      description: 'Form üzerinden yeni yemek oluşturulur.',
    },
    {
      title: 'Listeleme işlemi',
      value: `${itemCount} kayıt`,
      description: 'Kayıtlar anında panel ve menü alanına yansır.',
    },
    {
      title: 'Güncelleme işlemi',
      value: editing ? 'Seçili kayıt' : 'Beklemede',
      description: 'Var olan yemek bilgileri tekrar düzenlenebilir.',
    },
    {
      title: 'Silme işlemi',
      value: 'Hazır',
      description: 'Tek tık ile kayıt listeden kaldırılır.',
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div key={card.title} className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">
            {card.title}
          </p>
          <p className="mt-4 font-serif text-2xl text-stone-900">{card.value}</p>
          <p className="mt-2 text-sm leading-6 text-stone-600">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
