import Image from "next/image";
import Link from "next/link";
import { BoxTypesPicker } from "@/components/box-types-picker";
import { BudgetForm } from "@/components/budget-form";
import { IconBoxesSizes, IconClipboardQuote } from "@/components/cta-icons";
import { FacilityOffersSection } from "@/components/facility-offers";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { homeHeroDimensions, pagePhotos } from "@/lib/media";
import { site, whatsappHref } from "@/lib/site";

const benefits = [
  {
    title: "Tamanhos à vista",
    text: "Da faixa de 1 a 20 m³ você enxerga dimensões de referência, exemplos e o que cabe em cada box — tudo no mesmo lugar.",
  },
  {
    title: "Decisão mais simples",
    text: "Cada opção mostra foto, uso ideal e sugestões práticas para você comparar com calma antes de falar com a equipe.",
  },
  {
    title: "Contrato mensal",
    text: "Renovação por mês: encaixa mudança, obra, estoque ou operação no tempo que você precisa, sem amarrar longo prazo.",
  },
  {
    title: "Atendimento no WhatsApp",
    text: "Escolheu o tamanho? Um clique e você fala com quem confirma disponibilidade e próximos passos.",
  },
];

const profiles = [
  {
    title: "Para casa",
    line: "Libere espaço em casa guardando o que não usa todo dia — com acesso quando precisar.",
    examples: ["Objetos de temporada", "Móveis e eletro extras", "Hobby, esporte e coleções"],
  },
  {
    title: "Para mudança",
    line: "Meio-termo seguro entre sair de um endereço e entrar em outro — ou durante reforma.",
    examples: ["Móveis desmontados e caixas", "Ponte entre dois imóveis", "Obra e entrega programada"],
  },
  {
    title: "Para documentos e organização",
    line: "Arquivo em ordem, fora da sua mesa — ideal para casa ou home office.",
    examples: ["Papéis e contratos em caixa", "Arquivo morto", "Material de escritório"],
  },
  {
    title: "Para estoque e operação",
    line: "Volume extra sem alugar galpão: escala sobe e desce conforme a demanda.",
    examples: ["E-commerce e reposição", "Ferramentas e insumos", "Picos de campanha"],
  },
  {
    title: "Para empresas e profissionais",
    line: "Escritório enxuto, representação comercial ou negócio em crescimento — com espaço sob controle.",
    examples: ["Amostras e brindes", "Equipamentos e documentos", "Reposição e sazonalidade"],
  },
  {
    title: "Para transição e temporada",
    line: "Entre contratos, reforma longa ou equipamento que só usa em parte do ano.",
    examples: ["Mudança de cidade em etapas", "Obra demorada no imóvel", "Itens de viagem e lazer"],
  },
];

const faqItems: FaqItem[] = [
  {
    q: "Quais tamanhos de box existem?",
    a: "Trabalhamos com boxes de 1 a 20 m³. Na página inicial você seleciona o volume e vê foto, dimensões de referência, exemplos do que entra e uma dica para comparar opções.",
  },
  {
    q: "Como sei qual tamanho escolher?",
    a: "Use a comparação por volume na página inicial: cada tamanho mostra uso típico e exemplos. Para cravar medida e disponibilidade, a equipe orienta no WhatsApp.",
  },
  {
    q: "Posso mudar de tamanho depois?",
    a: "Na maior parte dos casos sim, conforme disponibilidade na unidade. No WhatsApp você alinha mudança de tamanho à sua necessidade.",
  },
  {
    q: "O serviço é indicado para casa ou empresa?",
    a: "Para os dois. Atendemos quem precisa de espaço extra em casa e negócios que precisam de estoque, arquivo ou volume sazonal com flexibilidade.",
  },
  {
    q: "Quais itens posso guardar?",
    a: "Bens e materiais permitidos por lei e pelas regras da operação. Não aceitamos itens ilegais ou perigosos; em dúvida sobre algo específico, valide no atendimento.",
  },
  {
    q: "Como funciona o contrato?",
    a: "Trabalhamos com contrato mensal para você ajustar o tempo à mudança, obra ou operação. Valores, condições e garantias fecham direto com a equipe.",
  },
  {
    q: "Como faço para falar com a equipe?",
    a: "Pelo WhatsApp: use o botão ao lado do tamanho que escolheu, o CTA da página ou o ícone flutuante. É o canal mais rápido para dúvidas e disponibilidade.",
  },
  {
    q: "O espaço é seguro?",
    a: "Sim. A unidade conta com segurança eletrônica, monitoramento por câmeras 24 h e controle de pragas. Horários e regras de acesso você confirma com a equipe.",
  },
];

export function HomeSections() {
  return (
    <>
      {/* Apresentação */}
      <section className="section-surface border-b-4 pb-14 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-black/45">Self storage · Recife</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-black sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
              {site.name}: box certo para casa ou empresa com segurança garantida
            </h1>
            <p className="mt-4 text-lg font-medium leading-relaxed text-black/85">
              Boxes de <strong className="text-black">1 a 20 m³</strong> para ganhar espaço com tranquilidade. Compare
              tamanhos abaixo — fotos, referências e exemplos na mesma tela.
            </p>
            <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3">
              <a
                href="#tipos-de-boxes"
                className="bolt-cta w-full max-w-xl justify-center gap-2 px-3 py-3 text-[11px] font-black uppercase leading-tight tracking-wide sm:px-8 sm:py-4 sm:text-base sm:leading-none sm:tracking-wide"
              >
                <IconBoxesSizes className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                Ver tamanhos dos boxes
              </a>
              <div className="grid w-full max-w-xl grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                <a
                  href="#orcamento"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-3 py-3 text-center text-[11px] font-bold leading-snug text-white shadow-bolt-accent-sm transition hover:bg-black/90 hover:shadow-bolt-sm sm:min-h-[56px] sm:py-4 sm:text-sm"
                >
                  <IconClipboardQuote className="h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5" />
                  Solicitar orçamento
                </a>
                <a
                  href={whatsappHref(`Olá! Acessei o site da ${site.name} e quero informações sobre self storage.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-3 py-3 text-center text-[11px] font-bold text-white shadow-bolt-accent-sm transition hover:bg-black/90 hover:shadow-bolt-sm sm:min-h-[56px] sm:py-4 sm:text-sm"
                >
                  <IconWhatsApp className="h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-black">
              <li className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-sm bg-black" />
                Contrato mensal flexível
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-sm bg-black" />
                1 a 20 m³ disponíveis
              </li>
              <li className="flex items-center gap-2">
                <span className="size-2 shrink-0 rounded-sm bg-black" />
                Residência e empresa
              </li>
            </ul>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border-2 border-black bg-white/95 shadow-bolt-accent-lg">
            <Image
              src={pagePhotos.homeHero}
              alt={`${site.name} — self storage em Recife, Boa Viagem`}
              width={homeHeroDimensions.width}
              height={homeHeroDimensions.height}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, min(520px, 45vw)"
              priority
            />
          </div>
        </div>
      </section>

      {/* Tipos de boxes — destaque (fundo preto + gradiente amarelo bem escuro) */}
      <section
        id="tipos-de-boxes"
        className="relative scroll-mt-24 overflow-hidden border-y-4 border-brand pb-16 pt-12 sm:pb-20 sm:pt-16"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-black"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(200,160,0,0.16),transparent_52%),radial-gradient(ellipse_50%_45%_at_100%_60%,rgba(140,110,0,0.12),transparent_48%),radial-gradient(ellipse_45%_40%_at_0%_70%,rgba(100,80,0,0.14),transparent_42%),linear-gradient(168deg,#080806_0%,#000000_38%,#12100a_72%,#050504_100%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
            Escolha o tamanho do seu box
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base font-medium leading-relaxed text-white/85">
            De <strong className="text-brand">1 a 20 m³</strong>. Selecione o volume para ver foto, dimensões de
            referência, exemplos do que entra e uma dica rápida — no desktop o detalhe fica ao lado; no celular, logo
            abaixo dos botões.
          </p>
          <div className="mx-auto mt-12 flex justify-center">
            <BoxTypesPicker tone="dark" />
          </div>
        </div>
      </section>

      <FacilityOffersSection />

      {/* Para quem */}
      <section className="section-surface border-b-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-black text-black sm:text-3xl">
            A Mr. Boxes encaixa na sua rotina
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-black/75 sm:text-base">
            Veja qual situação se parece com a sua — em seguida combine com o tamanho ideal na seção Tipos de boxes.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((p) => (
              <li key={p.title} className="bolt-card p-6">
                <h3 className="font-bold text-black">{p.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-black/75">{p.line}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm font-medium leading-relaxed text-black/70">
                  {p.examples.map((ex) => (
                    <li key={ex}>{ex}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/para-voce"
              className="text-sm font-bold text-black underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-muted"
            >
              Soluções para casa e pessoa física
            </Link>
            <Link
              href="/para-sua-empresa"
              className="text-sm font-bold text-black underline decoration-brand decoration-2 underline-offset-4 hover:text-brand-muted"
            >
              Soluções para empresas
            </Link>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-surface border-y-2 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-black text-black sm:text-3xl">Por que decidir na Mr. Boxes</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-black/75 sm:text-base">
            Transparência no tamanho, clareza no que entra e atendimento direto quando você quiser fechar.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <li key={b.title} className="bolt-card p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border-2 border-black bg-brand">
                  <svg className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-black">{b.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-black/75">{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-surface border-t-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-black text-black sm:text-3xl">Dúvidas frequentes</h2>
          <p className="mt-2 text-center text-sm font-semibold text-black/75">
            O que a maioria pergunta antes de reservar.
          </p>
          <div className="mt-8">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Orçamento */}
      <section id="orcamento" className="section-surface border-t-2 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-black uppercase tracking-tight text-black sm:text-3xl">
              SOLICITE UM ORÇAMENTO
            </h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-black/75 sm:text-base">
              Envie sua dúvida e retornaremos o mais breve possível.
            </p>
          </div>

          <BudgetForm />
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t-4 border-brand bg-black py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-black sm:text-3xl">Pronto para fechar seu box?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-white/85 sm:text-base">
            Escolheu o tamanho? Fale no WhatsApp: a equipe confirma disponibilidade e próximos passos.
          </p>
          <div className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-3 gap-2 sm:gap-3">
            <a
              href="#tipos-de-boxes"
              className="inline-flex min-h-[52px] w-full min-w-0 items-center justify-center gap-1 rounded-xl border-2 border-black bg-brand px-2 py-3 text-center text-[10px] font-black uppercase leading-tight tracking-wide text-black shadow-bolt-light transition hover:bg-brand-hover hover:shadow-bolt-press sm:min-h-[56px] sm:gap-2 sm:px-5 sm:py-4 sm:text-xs md:text-sm"
            >
              <IconBoxesSizes className="h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
              <span className="md:whitespace-nowrap">Comparar tamanhos</span>
            </a>
            <a
              href="#orcamento"
              className="inline-flex min-h-[52px] w-full min-w-0 items-center justify-center gap-1 rounded-xl border-2 border-white bg-white px-2 py-3 text-center text-[10px] font-black leading-tight text-black hover:bg-brand sm:min-h-[56px] sm:gap-2 sm:px-5 sm:py-4 sm:text-xs md:text-sm"
            >
              <IconClipboardQuote className="h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
              <span className="leading-tight md:whitespace-nowrap">Solicitar orçamento</span>
            </a>
            <a
              href={whatsappHref("Olá! Quero reservar ou tirar dúvidas sobre um box. Vim pelo site da Mr. Boxes.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] w-full min-w-0 items-center justify-center gap-1 rounded-xl border-2 border-white bg-white px-2 py-3 text-center text-[10px] font-black leading-tight text-black hover:bg-brand sm:min-h-[56px] sm:gap-2 sm:px-5 sm:py-4 sm:text-xs md:text-sm"
            >
              <IconWhatsApp className="h-4 w-4 shrink-0 text-black sm:h-5 sm:w-5" />
              <span className="leading-tight md:whitespace-nowrap">Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
