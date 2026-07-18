"use client";

/**
 * Componente cliente para renderizar o ano atual.
 * Usa suppressHydrationWarning para evitar erros de hydration
 * caso o build tenha sido feito em um ano diferente do acesso.
 */
export function CurrentYear() {
  return (
    <span suppressHydrationWarning>
      {new Date().getFullYear()}
    </span>
  );
}
