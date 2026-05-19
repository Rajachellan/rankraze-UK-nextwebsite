export function stripHtml(html: string) {
  if (typeof window === "undefined") {
    // Server-side safe fallback
    return html.replace(/<[^>]*>/g, "");
  }

  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || "";
}


export default function getExcerpt(html: string, max = 150) {
  const text = stripHtml(html);
  return text.length > max ? text.slice(0, max) + "..." : text;
}
