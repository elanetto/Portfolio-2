export function splitTextIntoParagraphs(text) {
  return text
    .split(/\n\s*\n/) // This handles empty lines *with or without spaces*
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
}
