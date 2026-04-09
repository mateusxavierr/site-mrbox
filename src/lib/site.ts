export const site = {
  name: "Mr. Boxes",
  tagline: "Self storage seguro em Recife",
  phoneDisplay: "(81) 3040-1112",
  phoneTel: "+558130401112",
  /** WhatsApp usado nos botões e links principais do site */
  whatsappDisplay: "(81) 3040-1112",
  whatsappE164: "558130401112",
  /** Segundo WhatsApp (ex.: rodapé) */
  whatsappLegacyDisplay: "(81) 9.9458-3333",
  whatsappLegacyE164: "5581994583333",
  email: "contato@mrboxes.com.br",
  addressLine: "Boa Viagem e Imbiribeira — Recife, PE",
  addressFull: "Rua Sargento Silvino Macedo, 511 — Boa Viagem, Recife/PE",
  hours: "Segunda a sexta, 8h às 18h · Sábado, 8h às 12h",
  instagram: "https://www.instagram.com/mrboxesrecife/",
  facebook: "https://www.facebook.com/mrboxesrecife/",
  mapsQuery: "Mr. Boxes Recife Boa Viagem",
  locations: [
    {
      label: "Matriz",
      address:
        "Rua Sargento Silvino Macedo, 511 — Boa Viagem, Recife/PE.",
      mapsQuery: "Rua Sargento Silvino Macedo, 511 Boa Viagem Recife PE",
      hours: "Segunda à Sexta - Das 8h às 18h · Sábados - Das 8h às 12h",
    },
    {
      label: "Filial",
      address: "Rua Itacari, 280 — Imbiribeira, Recife/PE",
      cep: "51.200-080",
      mapsQuery: "Rua Itacari, 280 Imbiribeira Recife PE 51200080",
      hours: "Segunda à Sexta - Das 8h às 18h · Sábados - Das 8h às 12h",
    },
  ],
} as const;

export function whatsappHref(text?: string) {
  const t = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${site.whatsappE164}${t}`;
}

export function whatsappLegacyHref(text?: string) {
  const t = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${site.whatsappLegacyE164}${t}`;
}
