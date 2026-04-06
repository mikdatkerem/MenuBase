import type { PropsWithChildren } from 'react';
import { Navigation } from '../Components/Navigation';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navigation />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10">{children}</main>
    </div>
  );
}
