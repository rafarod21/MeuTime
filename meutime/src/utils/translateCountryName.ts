export function translateCountryName(code: string) {
  const brazilianName = new Intl.DisplayNames(['pt-BR'], { type: 'region' }).of(
    code
  );

  return brazilianName;
}
