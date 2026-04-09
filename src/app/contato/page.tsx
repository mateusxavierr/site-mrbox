import type { Metadata } from "next";
import type { SVGProps } from "react";
import Image from "next/image";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { pagePhotos } from "@/lib/media";
import { site, whatsappHref, whatsappLegacyHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a ${site.name} em Recife: telefone, dois WhatsApp, e-mail e endereço em Boa Viagem.`,
};

function IconPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinejoin="round" />
      <path d="M22 6l-10 7L2 6" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContatoPage() {
  const mapsUrlMatriz = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.locations[0].mapsQuery)}`;
  const mapsUrlFilial = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.locations[1].mapsQuery)}`;
  return (
    <div className="pb-16 sm:pb-24">
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-muted">Fale conosco</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Contato</h1>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-800">
              Unidades em <strong>Boa Viagem</strong> e <strong>Imbiribeira</strong>. Use os canais abaixo — o WhatsApp
              costuma ser o retorno mais rápido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsUrlMatriz}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl border-2 border-black bg-brand px-5 py-2.5 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press"
              >
                Como chegar (Matriz)
              </a>
              <a
                href={mapsUrlFilial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-xl border-2 border-black bg-brand px-5 py-2.5 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press"
              >
                Como chegar (Filial)
              </a>
              <a
                href={whatsappHref("Olá! Vim pela página de contato do site da Mr. Boxes e quero falar com a equipe.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white shadow-bolt-accent-sm hover:bg-black/90"
              >
                <IconWhatsApp className="h-5 w-5 shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/3] w-full max-h-[280px] min-h-[200px] overflow-hidden rounded-2xl border-2 border-black shadow-bolt-accent-lg">
            <Image
              src={pagePhotos.contato}
              alt={`${site.name} — contato e atendimento`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-black text-black sm:text-3xl">Endereços</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-black/80 sm:text-base">
            Matriz e filial com o mesmo horário de funcionamento.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            <li className="bolt-card p-6">
              <p className="text-xs font-black uppercase tracking-wide text-black/60">Endereço Matriz</p>
              <p className="mt-2 text-base font-black text-black">{site.locations[0].address}</p>
              <p className="mt-3 text-sm font-semibold text-black/70">Horário de funcionamento</p>
              <p className="mt-1 text-sm font-medium text-black/75">{site.locations[0].hours}</p>
              <a
                href={mapsUrlMatriz}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full justify-center rounded-xl border-2 border-black bg-black px-5 py-3 text-sm font-black text-white shadow-bolt-accent-sm hover:bg-black/90 sm:w-auto"
              >
                Ver no Google Maps
              </a>
            </li>
            <li className="bolt-card p-6">
              <p className="text-xs font-black uppercase tracking-wide text-black/60">Endereço Filial</p>
              <p className="mt-2 text-base font-black text-black">
                {site.locations[1].address} · CEP: {"cep" in site.locations[1] ? site.locations[1].cep : ""}
              </p>
              <p className="mt-3 text-sm font-semibold text-black/70">Horário de funcionamento</p>
              <p className="mt-1 text-sm font-medium text-black/75">{site.locations[1].hours}</p>
              <a
                href={mapsUrlFilial}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full justify-center rounded-xl border-2 border-black bg-black px-5 py-3 text-sm font-black text-white shadow-bolt-accent-sm hover:bg-black/90 sm:w-auto"
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-black text-black sm:text-3xl">Canais de atendimento</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-black/80 sm:text-base">
            Telefone, WhatsApp, e-mail e horário da unidade.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            <li className="bolt-card flex gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black">
                <IconPhone className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-black">Telefone</h3>
                <a
                  href={`tel:${site.phoneTel}`}
                  className="mt-1 inline-block text-base font-bold text-black/90 underline decoration-2 underline-offset-2 transition hover:text-black"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="bolt-card flex gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black">
                <IconWhatsApp className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-black">WhatsApp</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-black/75">
                  <a
                    href={whatsappHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black/90 underline decoration-2 underline-offset-2 transition hover:text-black"
                  >
                    {site.whatsappDisplay}
                  </a>
                  <span className="text-black/40"> · </span>
                  <a
                    href={whatsappLegacyHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-black/90 underline decoration-2 underline-offset-2 transition hover:text-black"
                  >
                    {site.whatsappLegacyDisplay}
                  </a>
                </p>
              </div>
            </li>
            <li className="bolt-card flex gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black">
                <IconMail className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-black">E-mail</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block break-all text-sm font-medium leading-relaxed text-black/75 underline decoration-2 underline-offset-2 transition hover:text-black"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="bolt-card flex gap-4 p-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black">
                <IconClock className="h-7 w-7" aria-hidden />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold leading-snug text-black">Horário</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-black/75">{site.hours}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
