const historyData = [
    {
      id: 1001,
      date: "2023-05-15",
      status: "Delivered",
      totalPrice: 1250,
      shippingFee: 50,
      paymentMethod: "Credit Card",
      items: [
        { id: 1, name: "Programming Book", price: 500, quantity: 2 },
        { id: 2, name: "Notebook Set", price: 250, quantity: 1 }
      ]
    },
    {
      id: 1002,
      date: "2023-06-20",
      status: "Processing",
      totalPrice: 750,
      shippingFee: 30,
      paymentMethod: "bKash",
      items: [
        { id: 3, name: "Scientific Calculator", price: 750, quantity: 1 }
      ]
    }
  ];
  
  export default historyData;