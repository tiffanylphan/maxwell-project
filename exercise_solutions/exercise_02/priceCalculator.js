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

/* ----------------------------------------------------
functional programming solution. 

const pricingTable = {
  'Milk': {
    1: 3.97,
    2: 5
  },
  'Bread': {
    1: 2.17,
    3: 6
  },
  'Banana': 0.99,
  'Apple': 0.89
}

const constructHistogram = (items) => {
  const histogram = {};

  // split items by comma
  // loop through list
    // trim string
    // histogram[item] = histogram[item]++ || 1

  return histogram;
}

const priceCalculator = (items) => { 
  // set counter for $ saved
  // set counter for total price
  
  // construct histogram

  // for each item in histogram
    // if pricingTable[item] is an object
      // get the keys of the object
      // because we know that there are only two possible deals
      // if the item quantity >= the last number in keys
        // price = Math.floor(itemsHistogram[item] / keys[lastkey#]) * bulk price + itemsHistogram[item] % keys[lastkey#] * individual price
        // $ saved += Math.floor(itemsHistogram[item] / keys[lastkey#]) * individual price
        // total price += price
        // console.log (item, quantity, price)
    // else
      // price = quantity * number of items
      // total price += price
      // console.log(item, quantity, price)

  // console.log(total price)
  // console.log(price saved)
};
*/


module.exports = Transaction;