
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
  }

  calculateSale(item) {
    // price = Math.floor(histogram[item] / keys[lastkey#]) * bulk price + histogram[item] % keys[lastkey#] * individual price
    // $ saved += Math.floor(histogram[item] / keys[lastkey#]) * individual price
    // this.totalprice += price
    // console.log (item, quantity, price)
  }

  calculateNormal(item) {
    // price = quantity * number of items (histogram)
    // this.totalprice += price
    // console.log(item, quantity, price)
  }

  printReceipt() {
    const histogram = constructHistogram(this.items, this.pricingTable);
    console.log(histogram);
    // loop through histogram
      // if pricingTable[item] is an object
        // calculateSale(item)
      // else
        // calculateNormal(item)
    
    // console.log(this.totalPrice)
    // console.log(this.moneySaved)
  }

}

// helpers
const constructHistogram = (items, pricingTable) => {
  const histogram = {};
  items.forEach(item => {
    if (pricingTable[item]) {
      histogram[item] = histogram[item]++ || 1;
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