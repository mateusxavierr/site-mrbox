import type { SVGProps } from "react";

/** Ícone para “ver tamanhos dos boxes” — volumes em grade */
export function IconBoxesSizes(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" strokeLinejoin="round" />
      <rect x="13" y="3" width="8" height="5" rx="1.5" strokeLinejoin="round" />
      <rect x="13" y="10" width="8" height="11" rx="1.5" strokeLinejoin="round" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/** Ícone para solicitar orçamento — prancheta / formulário */
export function IconClipboardQuote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5h6a1 1 0 011 1v1h1a2 2 0 012 2v11a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h1V6a1 1 0 011-1z"
      />
      <path strokeLinecap="round" d="M9 12h6M9 16h4" />
    </svg>
  );
}
