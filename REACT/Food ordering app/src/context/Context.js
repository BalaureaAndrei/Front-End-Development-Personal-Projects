import React from "react";

const Context = React.createContext({
  onSubmit: () => {},
  orders: {},
  orderData: "",
});

export default Context;
