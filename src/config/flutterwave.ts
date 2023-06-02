const flutterwaveConfig = (
  cost: number,
  email: string,
  phone: string,
  name: string,
  order: string[]
) => {
  const config = {
    public_key: import.meta.env.VITE_FLUTTERWAVE_API,
    tx_ref: Date.now().toLocaleString(),
    amount: cost,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Dope Chops Payment",
      description: `Payment for ${order}`,
      logo: "/assets/logo.png",
    },
  };

  return config;
};

export default flutterwaveConfig;
