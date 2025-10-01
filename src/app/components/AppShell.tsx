'use client';

import { useState } from 'react';
import Footer from './Footer';
import TopNav from './TopNav';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div>
      <header className="w-full border-b border-slate-100">
        <TopNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      </header>

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>

      <footer className="w-full border-t border-slate-100">
        <Footer />
      </footer>
    </div>
  );
}
