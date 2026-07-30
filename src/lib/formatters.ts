export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{2})\s(\d{3})\s(\d+)/, "$1 $2 $3");
}

export function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^([\d,]+)(.*)$/);
  if (!match) return { number: 0, suffix: value };

  const number = parseInt(match[1].replace(/,/g, ""), 10);
  const suffix = match[2] || "";
  return { number, suffix };
}
