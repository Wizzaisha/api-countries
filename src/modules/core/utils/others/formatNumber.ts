export const formatNumber = (num: number): string => {
  const normalize = num.toString().replace(/\D/g, "");
  return new Intl.NumberFormat("es-CO").format(Number(normalize));
};
