const readline = require('readline');
const Transaction = require('./Transaction');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter all the items purchased separated by a comma \n', (items) => {
  const transaction = new Transaction(items);
  transaction.printReceipt();
  rl.close();
});