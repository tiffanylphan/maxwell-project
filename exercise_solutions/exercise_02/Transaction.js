class Transaction {
  constructor(items) {
    this.items = items.split(',').map((item) => {
      return item.trim().toLowerCase();
    });

    this.pricingTable = {
      'milk': {
        1: 3.97,
        2: 5.00
      },
      'bread': {
        1: 2.17,
        3: 6.00
      },
      'banana': 0.99,
      'apple': 0.89
    };

    this.moneySaved = 0.00;
    this.totalPrice = 0.00;
  }

  countQuantity(items, pricingTable) {
    const quantityTable = {};
    items.forEach(item => {
      if (pricingTable[item]) {
        quantityTable[item] = quantityTable[item] + 1 || 1;
      }
    })
    return quantityTable;
  }

  calculateSale(item, quantity, price) {
    const quantityOptions = Object.keys(price);
    const bulkQuantity = quantityOptions[quantityOptions.length - 1];
    if (quantity >= bulkQuantity) {
      const cost = (Math.floor(quantity / bulkQuantity) * price[bulkQuantity]) + (quantity % bulkQuantity * price['1']);
      this.moneySaved += ((quantity * price['1'] - cost));
      this.totalPrice += cost;
      console.log(`${item}      ${quantity}           $${cost}`);
    } else {
      this.calculateNormal(item, quantity, price['1']);
    }
  }

  calculateNormal(item, quantity, price) {
    const cost = quantity * price;
    this.totalPrice += cost;
    console.log(`${item}      ${quantity}           $${cost}`);
  }

  printReceipt() {
    const quantityTable = this.countQuantity(this.items, this.pricingTable);
    for (let item in quantityTable) {
      const price = this.pricingTable[item];
      if (typeof price === 'object') {
        this.calculateSale(item, quantityTable[item], price);
      } else {
        this.calculateNormal(item, quantityTable[item], price);
      }
    }

    console.log(`\nTotal price: $${this.totalPrice.toFixed(2)}`);
    console.log(`You saved $${this.moneySaved.toFixed(2)} today.`);
  }
}

// helper function

module.exports = Transaction;