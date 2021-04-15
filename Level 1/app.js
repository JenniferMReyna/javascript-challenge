// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Selecting Table
var tables = d3.select("tbody");

//Selectign Filter Button
var button = d3.select("#filter-btn");

//Selecting Filter
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("change", runEnter);
form.on("submit", runEnter);

//Show Comlpete Table 
function printTable(allData){
    allData.forEach(function(sightingData){
        var rows = tables.append("tr");
        Object.entries(sightingData).forEach(function([key, value]){
            var cellrows = rows.append("th");
            cellrows.text(value);
        });
    });
};

// Print complete table prior to filtering
printTable(tableData);

// Complete the event handler function for the form
function runEnter(){
    
    // Prevent the page from refreshing and clear the page
    d3.event.preventDefault();
    tables.html("");

    // Select the input element (Date) and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
   
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    printTable(filteredData);
};