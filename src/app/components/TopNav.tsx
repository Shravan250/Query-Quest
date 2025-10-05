'use client';

import { Dispatch } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import Logo from '../utils/Logo';

interface TopNavProps {
  user?: { username?: string; avatar_url?: string } | null;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { href: '/playground', label: 'Playground' },
  { href: '/questions', label: 'Question Bank' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function TopNav({ mobileOpen, setMobileOpen }: TopNavProps) {
  const pathname = usePathname();
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex md:space-x-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium py-2 px-1 ${
                  active
                    ? 'text-[#00FF7A] underline underline-offset-4'
                    : 'text-slate-700 hover:text-[#00FF7A]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* actions */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link
              href="/login"
              className="inline-flex items-center px-4 py-2 rounded-md bg-[#00FF7A] text-white text-sm font-medium shadow-sm hover:shadow-md hover:shadow-[#00FF7A]/30"
            >
              Log In
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
            >
              {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 z-30"
              onClick={() => setMobileOpen(false)}
            />

            <div
              className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-600 ease-in-out z-40 ${
                mobileOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-col p-4 space-y-2 border border-slate-100">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`py-2 px-2 rounded-md ${
                      pathname === l.href
                        ? 'text-[#00FF7A]'
                        : 'text-slate-700 hover:text-[#00FF7A]'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}

                <Link
                  href="/login"
                  className="mt-2 inline-flex items-center justify-center px-3 py-2 rounded-md bg-[#00FF7A] text-white text-sm font-medium hover:shadow-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Log In
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
