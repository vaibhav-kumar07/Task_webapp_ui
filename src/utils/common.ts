import { ToWords } from "to-words";
export const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const toWords = new ToWords({
  localeCode: "en-IN",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,

    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: "Rupee",
      plural: "Rupees",
      symbol: "₹",
      fractionalUnit: {
        name: "Paisa",
        plural: "Paise",
        symbol: "",
      },
    },
  },
});

export const convertCurrencyToWords = (amount: number) => {
  let convertedAmount = "";

  if (amount) {
    // Convert the absolute value of the amount to words
    convertedAmount = toWords.convert(Math.abs(amount));
  }

  return convertedAmount;
};
