// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $shapeInput = document.querySelector("#shape");
var $countryInput = document.querySelector("#country");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $select = document.querySelector("#selectBox");
// var currentOpt = select.options[select.selectedIndex];

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredDateTime to dataSet initially
var filteredDateTime = dataSet;

// renderTable renders the filteredDateTime to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDateTime.length; i++) {
    // Get get the current address object and its fields
    var datetime = filteredDateTime[i];
    var fields = Object.keys(datetime);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = datetime[field];
    }
  }
}

function handleSearchButtonClick() {
  var valueSelectBox = $select.value;

  var filterTextBox = document.querySelector("#searchTermInput").value;

  filteredDateTime = dataSet.filter(function(dt) {
    var data = dt[valueSelectBox];

    // If true, add the address to the filteredDateTime, otherwise don't add it to filteredDateTime
    return data === filterTextBox;
  });

  renderTable();
}

// function handleSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//   var filterState = $stateInput.value.trim().toLowerCase();
//
//   // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = addressData.filter(function(address) {
//     var addressState = address.state.toLowerCase();
//
//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//     return addressState === filterState;
//   });
//   renderTable();
// }

// Render the table for the first time on page load
renderTable();
