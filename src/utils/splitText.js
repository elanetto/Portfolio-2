export function splitTextIntoParagraphs(text) {
  if (!text) return [];
  return text
    .split(/\n{2,}/) // Split by 2 or more newlines
    .map((para) => para.trim())
    .filter((para) => para.length > 0);
}
