const NOTE = '***********************';

function printTitle() {
  console.log(NOTE);
  console.log('**** Customer Owes ****');
  console.log(NOTE);
}
function printDetail() {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`amount: ${invoice.dueDate.toLocaleDateString()}`);
}

function printOwing (invoice) {
  printTitle();
  printDetail();
}
