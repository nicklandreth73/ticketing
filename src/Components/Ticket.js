import React, { useState } from "react";
import Input from "./Input";
import { getCustomer } from "./Customers";

export default function Ticket() {
  const [customer, setCustomer] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });

  return (
    <>
      <h1>Repair Ticket </h1>
      <form>
        <radio />
        <Input type="text" label="Customer First Name" />
        <Input type="text" label="Customer Last Name" />
        <Input type="text" label="Customer Phone" />
        <Input type="text" label="Customer Email" />
        <label>Describe Issue: </label>
        <textarea> </textarea>
      </form>
    </>
  );
}
