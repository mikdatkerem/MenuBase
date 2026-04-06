interface AdminSummaryProps {
  itemCount: number;
  editing: boolean;
}

export function AdminSummary({ itemCount, editing }: AdminSummaryProps) {
  const cards = [
    {
      title: 'Ekle islemi',
      value: 'Aktif',
      description: 'Form uzerinden yeni yemek olusturulur.',
    },
    {
      title: 'Listeleme islemi',
      value: `${itemCount} kayit`,
      description: 'Kayitlar aninda panel ve menu alanina yansir.',
    },
    {
      title: 'Guncelleme islemi',
      value: editing ? 'Secili kayit' : 'Beklemede',
      description: 'Var olan yemek bilgileri tekrar duzenlenebilir.',
    },
    {
      title: 'Silme islemi',
      value: 'Hazir',
      description: 'Tek tik ile kayit listeden kaldirilir.',
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
