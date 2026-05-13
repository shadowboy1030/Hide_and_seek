"use client";

import { useState } from "react";

export function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle",
  );
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErr(null);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        setStatus("err");
        setErr("Please check your details and try again.");
        return;
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("err");
      setErr("Network error.");
    }
  }

  return (
    <section
      id="reserve"
      className="scroll-mt-24 border-t border-black/10 bg-neutral-50 px-4 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-xl">
        <h2 className="font-[family-name:var(--font-hs-display)] text-3xl font-bold text-black sm:text-4xl">
          Reserve your spot
        </h2>
        <p className="mt-3 text-neutral-600">
          Tell us when you are visiting and what you hope to discover. We will
          get back within two business days.
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="bn" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              id="bn"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-black/15 bg-white px-4 py-3 text-black outline-none ring-[var(--hs-blue)] focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="be" className="mb-1 block text-sm font-medium">
              Email
            </label>
            <input
              id="be"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black/15 bg-white px-4 py-3 text-black outline-none ring-[var(--hs-blue)] focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="bm" className="mb-1 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="bm"
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y border border-black/15 bg-white px-4 py-3 text-black outline-none ring-[var(--hs-blue)] focus:ring-2"
            />
          </div>
          {err ? (
            <p className="text-sm text-red-600" role="alert">
              {err}
            </p>
          ) : null}
          {status === "ok" ? (
            <p className="text-sm font-medium text-green-700">
              Thank you — we received your note.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-[var(--hs-blue)] py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send request"}
          </button>
        </form>
      </div>
    </section>
  );
}
