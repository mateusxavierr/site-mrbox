import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { publicAssetPath } from "@/lib/base-path";
import { site } from "@/lib/site";

/** Aumente quando trocar logo/favicon — força o navegador a baixar de novo (cache do favicon é agressivo). */
const FAVICON_VER = "4";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Boxes de 1 a 20 m³ em Recife: compare tamanhos com fotos, entenda o que cabe em cada um e fale com a equipe no WhatsApp.",
  metadataBase: new URL("https://www.mrboxes.com.br"),
  icons: {
    // PNG primeiro: a aba do navegador usa o ícone (o .ico sozinho costuma ser ignorado ou cacheado).
    icon: [
      { url: `${publicAssetPath("/icon.png")}?v=${FAVICON_VER}`, type: "image/png", sizes: "any" },
      {
        url: `${publicAssetPath("/favicon.ico")}?v=${FAVICON_VER}`,
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
    apple: `${publicAssetPath("/icon.png")}?v=${FAVICON_VER}`,
    shortcut: `${publicAssetPath("/icon.png")}?v=${FAVICON_VER}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col font-sans text-slate-900">
        <SiteHeader />
        <main className="relative flex-1">{children}</main>
        <SiteFooter />
        <div className="border-t border-slate-800 bg-slate-950 px-4 py-2 text-center text-[11px] font-medium leading-snug text-slate-500">
          <p>
            Utilizamos cookies conforme nossa política de privacidade.{" "}
            <Link
              href="/termo-de-privacidade"
              className="font-semibold text-slate-400 underline underline-offset-2 hover:text-brand"
            >
              Saiba mais
            </Link>
            .
          </p>
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
