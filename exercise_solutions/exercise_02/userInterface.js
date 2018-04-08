const readline = require('readline');
const Transaction = require('./PriceCalculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter all the items purchased separated by a comma ', (items) => {
  console.log(`Item     Quantity      Price`);
  console.log(`----------------------------`);
  const transaction = new Transaction(items);
  transaction.printReceipt();
  rl.close();
});