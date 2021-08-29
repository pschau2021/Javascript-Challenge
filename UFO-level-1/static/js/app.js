// from data.js
var tableData = data;


// Console.log the data from data.js
console.log(data);

// Use D3 to select the table
//var table = d3.select("table");
var tbody = d3.select("tbody");

data.forEach(function(UFO) {
  console.log(UFO);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
// Select button set to `filter-btn`
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#filters");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

// Create the function to run for both events
function runEnter() {
  tbody.html("");
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Print the value to the console
  console.log(inputValue);
  //FIlter datafrom selection
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  // Print the value to the console
  console.log(filteredData);
  //select the table
  //var tbody = d3.select("tbody");
  // remove any data from the table
  filteredData.forEach(function(FD) {
    console.log(FD);
    var row = tbody.append("tr");
    Object.entries(FD).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
   });
});
};