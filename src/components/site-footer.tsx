import Image from "next/image";
import Link from "next/link";
import { brandMedia } from "@/lib/media";
import { site, whatsappHref, whatsappLegacyHref } from "@/lib/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/para-voce", label: "Para você" },
  { href: "/para-sua-empresa", label: "Para sua empresa" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
  { href: "/termo-de-privacidade", label: "Privacidade" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-black bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-12">
        <div>
          <Image
            src={brandMedia.logoRodape}
            alt={`${site.name} — logotipo`}
            width={360}
            height={120}
            className="mb-5 h-16 w-auto max-w-[320px] object-contain object-left sm:h-20"
          />
          <p className="max-w-sm text-sm font-semibold leading-relaxed text-slate-300/90">{site.tagline}</p>

          <div className="mt-7">
            <p className="text-xs font-black uppercase tracking-wide text-slate-400">Endereços</p>
            <ul className="mt-3 space-y-4 text-sm leading-relaxed">
              {site.locations.map((loc) => (
                <li key={loc.label} className="rounded-xl border border-slate-800/80 bg-slate-950/30 p-4">
                  <p className="text-xs font-black uppercase tracking-wide text-slate-400">{loc.label}</p>
                  <p className="mt-1 font-semibold text-slate-100">{loc.address}</p>
                  {"cep" in loc ? <p className="mt-1 text-xs font-semibold text-slate-400">CEP: {loc.cep}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-brand">Contato</p>

          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-brand px-5 py-3 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press sm:w-auto"
          >
            WhatsApp principal {site.whatsappDisplay}
          </a>

          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneTel}`} className="font-semibold text-slate-200 hover:text-brand">
                Telefone {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLegacyHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-200 hover:text-brand"
              >
                WhatsApp alternativo {site.whatsappLegacyDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="font-semibold text-slate-200 hover:text-brand">
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-slate-800/80 bg-slate-950/30 p-4">
            <p className="text-xs font-black uppercase tracking-wide text-slate-400">Horário de funcionamento</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-200/90">{site.hours}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-brand">Navegação</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-semibold text-slate-200 hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-brand">Redes sociais</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-200 hover:text-brand"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-200 hover:text-brand"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
