const PaystackConfig = (email: string, cost: number, deliveryFee:number) => {
    const config = {
      reference: new Date().getTime().toString(),
      email: email,
      //Currency in kobo
      amount: (cost + deliveryFee) * 100,
      publicKey: import.meta.env.VITE_PAYSTACK_API,
    };
  
    return config;
  };
  
  export default PaystackConfig;
  