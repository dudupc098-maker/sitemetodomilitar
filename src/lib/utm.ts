// src/lib/utm.ts
const STORAGE_KEY = "utm_params";

/**
 * Salva UTMs (e alguns IDs comuns) no localStorage.
 * - Não sobrescreve o que já existe com vazio
 * - Só salva quando a URL atual realmente tem parâmetros úteis
 */
export function saveUTMs(): void {
  if (typeof window === "undefined") return;

  const params = window.location.search || "";
  if (!params) return;

  const lower = params.toLowerCase();

  // Só salva se tiver algo que vale a pena (UTMs / IDs de clique)
  const hasUseful =
    lower.includes("utm_") ||
    lower.includes("gclid=") ||
    lower.includes("fbclid=") ||
    lower.includes("ttclid=") ||
    lower.includes("wbraid=") ||
    lower.includes("gbraid=");

  if (!hasUseful) return;

  try {
    localStorage.setItem(STORAGE_KEY, params);
  } catch {
    // se der erro (ex: modo privado), só ignora
  }
}

/**
 * Retorna a string completa de query salva, ex:
 * "?utm_source=...&utm_campaign=..."
 * ou "" se não existir.
 */
export function getUTMs(): string {
  if (typeof window === "undefined") return "";

  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}
