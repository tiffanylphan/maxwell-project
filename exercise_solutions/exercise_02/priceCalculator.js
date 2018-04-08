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

    this.histogram = constructHistogram(this.items, this.pricingTable);

    this.moneySaved = 0.00;
    this.totalPrice = 0.00;

    this.calculateSale = this.calculateSale.bind(this);
    this.calculateNormal = this.calculateNormal.bind(this);
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
    for (let item in this.histogram) {
      const price = this.pricingTable[item];
      if (typeof price === 'object') {
        this.calculateSale(item, this.histogram[item], price);
      } else {
        this.calculateNormal(item, this.histogram[item], price);
      }
    }

    console.log(`\nTotal price: $${this.totalPrice.toFixed(2)}`);
    console.log(`You saved $${this.moneySaved.toFixed(2)} today.`);
  }
}

// helpers
const constructHistogram = (items, pricingTable) => {
  const histogram = {};
  items.forEach(item => {
    if (pricingTable[item]) {
      histogram[item] = histogram[item] + 1 || 1;
    }
  })
  return histogram;
}

module.exports = Transaction;