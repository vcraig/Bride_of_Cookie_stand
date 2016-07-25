// Bride of Cookie Stand

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var estCookiesPerHr = [];
// var sumHourlyTotals = [];

//generate random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
//Object literal
var store = {
  name: '1st & Pike',
  id: '1st_pike',
  minCustPerHr: 23,
  maxCustPerHr: 65,
  avgCookiesPerHr: 6.3,
  estCustArray: [],
  //methods
  estimateCustomers: function() {
    for (var i = 0; i < hours.length; i++) {
      i = getRandom(this.minCustPerHr, this.maxCustPerHr);
      this.estCustArray.push(i);
      console.log(this.estCustArray, ' is estCustArray');
    }
  }
};
store.estimateCustomers();
