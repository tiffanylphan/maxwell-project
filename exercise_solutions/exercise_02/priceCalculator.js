//functional programming solution. 

const pricingTable = {
  'Milk': {
    1: 3.97,
    2: 5
  }
  'Bread': {
    1: 2.17,
    3: 6
  }
  'Banana': 0.99
  'Apple': 0.89
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

const constructHistogram = (items) => {
  const histogram = {};

  // split items by comma
  // loop through list
    // trim string
    // loop through string to check for items in pricing table
      // histogram[item] = histogram[item]++ || 1

  return histogram;
}

/* --------------------------------------------------------------------------- */



module.exports = priceCalculator;