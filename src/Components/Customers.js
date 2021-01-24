function getCustomers(email) {
  for (let customer in Customers) {
    if (email === customer.email) return customer;
  }
  return false;
}

const Customers = [
  {
    fName: "Jai",
    lName: "Gurung",
    phone: "541.444.4444",
    email: "jai@google.com"
  }
];

export { Customers, getCustomers };
