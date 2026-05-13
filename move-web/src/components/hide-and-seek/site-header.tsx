"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#explore", label: "Explore" },
  { href: "#themes", label: "Themes" },
  { href: "#map", label: "Map" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-30 bg-black text-white md:bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <nav className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:opacity-80"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="sr-only">Menu</span>
          </button>
          <Link
            href="#top"
            className="font-[family-name:var(--font-hs-display)] text-xl font-semibold tracking-tight md:ml-auto md:text-2xl"
          >
            HIDE&amp;SEEK
          </Link>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 bg-black text-white transition md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="rounded px-3 py-2 text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className="flex flex-col gap-6 px-8 pt-8 text-lg font-medium">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/15 pb-4"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#reserve"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-none bg-[var(--hs-mint)] px-4 py-3 text-center text-sm font-semibold text-black"
          >
            Reserve your spot
          </Link>
        </nav>
      </div>
    </>
  );
}
