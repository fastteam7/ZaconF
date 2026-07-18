"use client";

import { useEffect } from "react";

/**
 * Componente que marca o body como "js-ready" após a hydration bem-sucedida.
 * Isso permite que o CSS saiba que o JavaScript está funcionando e
 * desabilita os fallbacks de visibilidade que garantem conteúdo visível
 * mesmo quando o JS falha.
 */
export function HydrationMarker() {
  useEffect(() => {
    // Marca o body como pronto após a hydration
    document.body.classList.add("js-ready");

    return () => {
      document.body.classList.remove("js-ready");
    };
  }, []);

  return null;
}
