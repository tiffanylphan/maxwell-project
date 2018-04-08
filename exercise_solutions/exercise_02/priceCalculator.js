
class Transaction {
  constructor(items) {
    this.items = items.split(',').map((item) => {
      return item.trim().toLowerCase();
    });

    this.pricingTable = {
      'milk': {
        1: 3.97,
        2: 5
      },
      'bread': {
        1: 2.17,
        3: 6
      },
      'banana': 0.99,
      'apple': 0.89
    };

    this.moneySaved = 0;
    this.totalPrice = 0;

    this.calculateSale = this.calculateSale.bind(this);
    this.calculateNormal = this.calculateNormal.bind(this);
  }

  calculateSale(item, quantity, price, histogram) {
    // get the keys of the object
    const quantityOptions = Object.keys(price);
    // because we know that there are only two possible deals
    // if the item quantity >= the last number in keys
    const bulkQuantity = quantityOptions[quantityOptions.length - 1];
    if (quantity >= bulkQuantity) {
      const cost = (Math.floor(quantity / bulkQuantity) * price[bulkQuantity]) + (quantity % bulkQuantity * price['1']);
      this.moneySaved += +((quantity * price['1'] - cost).toFixed(2));
      this.totalPrice += cost;
      console.log(item, quantity, cost);
    } else {
      this.calculateNormal(item, quantity, price['1'], histogram);
    }
  }

  calculateNormal(item, quantity, price, histogram) {
    const cost = quantity * price;
    this.totalPrice += cost;
    console.log(item, quantity, cost);
  }

  printReceipt() {
    const histogram = constructHistogram(this.items, this.pricingTable);
    // loop through histogram
    for (let item in histogram) {
      const price = this.pricingTable[item];
      // if pricingTable[item] is an object
      if (typeof price === 'object') {
        this.calculateSale(item, histogram[item], price, histogram);
      } else {
        this.calculateNormal(item, histogram[item], price, histogram);
      }
    }

    console.log('total cost', this.totalPrice);
    console.log('saved', this.moneySaved);
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