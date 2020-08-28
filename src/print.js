function printTitle() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function printOwing (invoice) {
  let outstanding = 0;
  printTitle();

  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}
