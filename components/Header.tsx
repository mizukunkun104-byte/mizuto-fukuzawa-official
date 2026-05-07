"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "TOP" },
  { href: "/profile", label: "PROFILE" },
  { href: "/history", label: "HISTORY" },
  { href: "/works", label: "WORKS" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-sm font-medium text-text sm:text-base" aria-label="トップページへ">
          <span className="hidden sm:inline">Mizuto Fukuzawa / 福澤 瑞人</span>
          <span className="sm:hidden">Mizuto Fukuzawa</span>
        </Link>

        <nav aria-label="グローバルナビ" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${pathname === item.href ? "text-blue" : "text-muted"} hover:text-text`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button aria-label="メニュー" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <span className="block h-0.5 w-6 bg-text" />
          <span className="mt-1 block h-0.5 w-6 bg-text" />
          <span className="mt-1 block h-0.5 w-6 bg-text" />
        </button>
      </div>
      {open && (
        <nav aria-label="モバイルナビ" className="border-t border-border md:hidden">
          <ul className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-text" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
