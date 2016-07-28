// Bride of Cookie Stand

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
var hourlyTotalCookies = [];

//Constructor
function Store(name, minCustPerHr, maxCustPerHr, avgCookiesPerHr) {
  this.name = name;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgCookiesPerHr = 6.3;
  this.estCustArray = [];
  this.estCookiesPerHr = [];
  this.storeTotalCookies = 0;
  this.listElement = '';
  stores.push(this);
};

//instances
var firstPike = new Store('1st & Pike', 23, 65, 6.3);
var SeaTac = new Store('SeaTac', 3, 24, 1.2);
var SeattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var CapHill = new Store('Capitol Hill', 20, 38, 2.3);
var Alki = new Store('Alki', 2, 16, 4.6);

//function declarations
  //populate arrays
function fillStoreArrays() {
  // var listBox = document.getElementById('lists');
  // var listTitle = document.createElement('h2');
  // listTitle.textContent = this.name;
  // listBox.appendChild(listTitle);
  for (var i = 0; i < hours.length; i++) {
    this.estCustArray.push(getRandom(this.minCustPerHr, this.maxCustPerHr));
    this.estCookiesPerHr.push((this.estCustArray[i] * this.avgCookiesPerHr).toFixed(2));
    // var listElement = document.createElement('li');
    // listElement.textContent = 'For the ' + hours[i] + ' hour, prepare ' + this.estCookiesPerHr[i] + ' cookies.';
    // listBox.appendChild(listElement);
  }
};
// estimateCustomers();


//generate random number
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//call functions
fillStoreArrays();
