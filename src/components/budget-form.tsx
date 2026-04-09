"use client";

import Link from "next/link";
import { useState } from "react";

type BudgetFormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
  acceptedTerms: boolean;
};

const initialState: BudgetFormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
  acceptedTerms: false,
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

function formatBrazilMobile(value: string) {
  const digits = onlyDigits(value).slice(0, 11);
  const ddd = digits.slice(0, 2);
  const nine = digits.slice(2, 3);
  const part1 = digits.slice(3, 7);
  const part2 = digits.slice(7, 11);

  if (!digits) return "";
  if (digits.length <= 2) return `(${ddd}`;
  if (digits.length <= 3) return `(${ddd}) ${nine}`;
  if (digits.length <= 7) return `(${ddd}) ${nine}${part1}`;
  return `(${ddd}) ${nine}${part1}-${part2}`;
}

function isValidBrazilMobile(value: string) {
  const digits = onlyDigits(value);
  return /^\d{2}9\d{8}$/.test(digits);
}

export function BudgetForm() {
  const [state, setState] = useState<BudgetFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPhoneTouched, setIsPhoneTouched] = useState(false);

  return (
    <form
      className="mx-auto mt-10 grid max-w-4xl gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        if (isSubmitting || !state.acceptedTerms || !isValidBrazilMobile(state.phone)) return;
        setIsSubmitting(true);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitting(false), 400);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-black uppercase tracking-wide text-black">Nome</span>
          <input
            className="mt-2 w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-black shadow-bolt-accent-sm outline-none placeholder:text-black/40 focus:shadow-bolt-sm"
            name="name"
            autoComplete="name"
            required
            value={state.name}
            onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
            placeholder="Seu nome"
          />
        </label>

        <label className="block">
          <span className="text-sm font-black uppercase tracking-wide text-black">Telefone</span>
          <input
            className="mt-2 w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-black shadow-bolt-accent-sm outline-none placeholder:text-black/40 focus:shadow-bolt-sm"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            type="tel"
            required
            value={formatBrazilMobile(state.phone)}
            onBlur={() => setIsPhoneTouched(true)}
            onChange={(e) => {
              if (!isPhoneTouched) setIsPhoneTouched(true);
              const digits = onlyDigits(e.target.value).slice(0, 11);
              setState((s) => ({ ...s, phone: digits }));
            }}
            placeholder="(81) 91234-1234"
            pattern="\\(\\d\\d\\) 9\\d\\d\\d\\d-\\d\\d\\d\\d"
            title="Digite um celular com DDD: (81) 9xxxx-xxxx"
          />
          {isPhoneTouched && state.phone && !isValidBrazilMobile(state.phone) ? (
            <p className="mt-2 text-xs font-semibold text-black/70">
              Número inválido. Use DDD + 9 + 8 números. Ex: (81) 91234-1234.
            </p>
          ) : null}
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-black uppercase tracking-wide text-black">Email</span>
        <input
          className="mt-2 w-full rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-black shadow-bolt-accent-sm outline-none placeholder:text-black/40 focus:shadow-bolt-sm"
          name="email"
          autoComplete="email"
          inputMode="email"
          type="email"
          required
          value={state.email}
          onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
          placeholder="seuemail@exemplo.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-black uppercase tracking-wide text-black">Mensagem</span>
        <textarea
          className="mt-2 min-h-[120px] w-full resize-y rounded-xl border-2 border-black bg-white px-4 py-3 text-sm font-semibold text-black shadow-bolt-accent-sm outline-none placeholder:text-black/40 focus:shadow-bolt-sm"
          name="message"
          required
          value={state.message}
          onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))}
          placeholder="Conte rapidamente o que você precisa (tamanho, período, etc.)"
        />
      </label>

      <label className="flex items-start gap-3 rounded-xl border-2 border-black bg-white p-4 shadow-bolt-accent-sm">
        <input
          type="checkbox"
          name="acceptedTerms"
          required
          checked={state.acceptedTerms}
          onChange={(e) => setState((s) => ({ ...s, acceptedTerms: e.target.checked }))}
          className="mt-1 h-5 w-5 accent-black"
        />
        <span className="text-sm font-semibold leading-relaxed text-black/80">
          Aceito os{" "}
          <Link
            href="/termo-de-privacidade"
            className="font-black text-black underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-muted"
          >
            termos e política de privacidade
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
        <button
          type="submit"
          disabled={isSubmitting || !state.acceptedTerms || !isValidBrazilMobile(state.phone)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-8 py-4 text-sm font-black text-white shadow-bolt-accent-sm transition hover:bg-black/90 hover:shadow-bolt-sm disabled:cursor-not-allowed disabled:opacity-70"
        >
          Enviar
        </button>
        {isSubmitted ? (
          <p className="text-center text-xs font-semibold text-black/70">Mensagem enviada com sucesso.</p>
        ) : null}
      </div>
    </form>
  );
}

