// Bride of Cookie Stand

//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
  estCookiesPerHr: [],
  listElement: '',
  //methods
  estimateCustomers: function() {
    var listBox = document.getElementById('lists');
    var listTitle = document.createElement('h2');
    listTitle.textContent = this.name;
    listBox.appendChild(listTitle);
    for (var i = 0; i < hours.length; i++) {
      this.estCustArray.push(getRandom(this.minCustPerHr, this.maxCustPerHr));
      this.estCookiesPerHr.push((this.estCustArray[i] * this.avgCookiesPerHr).toFixed(2));
      var listElement = document.createElement('li');
      listElement.textContent = 'For the ' + hours[i] + ' hour, prepare ' + this.estCookiesPerHr[i] + ' cookies.';
      listBox.appendChild(listElement);
    }
  }
};
store.estimateCustomers();
// store.renderList();
