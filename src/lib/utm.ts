export function saveUTMs() {
  if (typeof window === "undefined") return;

  const params = window.location.search;
  if (!params) return;

  localStorage.setItem("utm_params", params);
}

export function getUTMs(): string {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("utm_params") || "";
}
