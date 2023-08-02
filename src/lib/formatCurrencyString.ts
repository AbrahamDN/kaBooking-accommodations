interface Props {
  val: number | string;
  currency?: string;
  language?: string;
}

export const formatCurrencyString = ({
  val,
  currency = "BRL",
  language = "pt-BR",
}: Props): string => {
  const value = parseInt(val as string);

  const numberFormat = new Intl.NumberFormat(language, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
  });

  const parts = numberFormat.formatToParts(value);
  let zeroDecimalCurrency = true;

  for (const part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
      break;
    }
  }

  const finalValue = zeroDecimalCurrency ? value : value / 100;

  return numberFormat.format(parseFloat(finalValue.toFixed(2)));
};
