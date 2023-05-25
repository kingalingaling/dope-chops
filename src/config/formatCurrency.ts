const NGN_FORMATTER = new Intl.NumberFormat('en-NG', {
  currency: 'NGN',
  style: 'currency',
});

export const formatCurrency = (amount: number) => {
    return NGN_FORMATTER.format(amount);
};
