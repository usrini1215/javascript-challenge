// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var h3 = d3.select("h3");


// YOUR CODE HERE!
//just trial print
console.log('first')
console.log(data)
printTabledata(tableData);

var submit = d3.select("#filter-btn");

function printTabledata(tdata) {
    tbody.html("");
    tdata.forEach((val) => {
        // Creating table rows for each row data
        var row = tbody.append("tr");
        //Iterating thru each row for key and values
        Object.entries(val).forEach(([key, value]) => {
            // Creating cells for posting table data
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

function handleClick() {
    console.log("A button was clicked!");
  
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
    var filtDate = d3.select(".form-control")
    console.log('sec')
    console.log(filtDate)

    var filtDateVal = filtDate.property("value")
    console.log('sec2')
    console.log(filtDateVal)


    // only data from benton
    filteredData = tableData.filter(val => val.datetime === filtDateVal)
    console.log('third');
    console.log(filteredData);
    if (filteredData.length > 0){
        h3.text('Filtered Data Set for : ' + filtDateVal)
        printTabledata(filteredData); 
    }
    else {
        h3.text('No data found for ( ' + filtDateVal + ' ) so heres the whole data set!!!')
        printTabledata(tableData);       
    } 

  }
  // We can use the `on` function in d3 to attach an event to the handler function
  submit.on("click", handleClick);
  
