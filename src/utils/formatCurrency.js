// El objecto Intl.NumberFormat habilita el formato numérico
// de acuerdo al idioma

const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "EUR",
});

export const toCurrency = (value) => formatter.format(value);