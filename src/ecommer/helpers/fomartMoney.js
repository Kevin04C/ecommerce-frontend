export const formatMoney = (money) => {
  // return Number(money).toLocaleString("en-US", {
  //   style: "currency",
  //   currency: "USD",
  const nft = Intl.NumberFormat("es-US");
  return `S/${nft.format(money)}`
};