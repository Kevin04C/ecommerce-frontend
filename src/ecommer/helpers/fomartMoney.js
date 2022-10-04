export const formatMoney = (money) => {
  return Number(money).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
