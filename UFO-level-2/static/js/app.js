// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var h3 = d3.select("h3");


// YOUR CODE HERE!
//just trial print
console.log('first')
console.log(data)

// print the whole table
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

function filterChoice(filtfield, filtval) {
    // only data from filter choices
    console.log('param values:')
    console.log(filtfield + ' ' + filtval)
     
    if (filtfield == 'datetime'){
        filteredData = tableData.filter(val => val.datetime === filtval);
    }
    else if (filtfield == 'city'){
        filteredData = tableData.filter(val => val.city === filtval);
    }
    else if (filtfield == 'state'){
        filteredData = tableData.filter(val => val.state === filtval);
    }
    else if (filtfield == 'country'){
        filteredData = tableData.filter(val => val.country === filtval);
    }
    else if (filtfield == 'shape'){
        filteredData = tableData.filter(val => val.shape === filtval);
    }

    console.log('third2');
    console.log(filteredData);
    if (filteredData.length > 0){
        h3.text('Filtered Data Set for ( ' + filtfield + ' = ' + filtval + ' )')
        printTabledata(filteredData); 
    }
    else {
        h3.text('No data found for ( ' + filtfield + ' = ' + filtval + ' ) so heres the whole data set!!!')
        printTabledata(tableData);       
    } 
}

function handleClick() {
  
    var filtValue = d3.select(".form-control")
    var filtDateVal = filtValue.property("value")

    console.log('sec')
    console.log(filtDateVal)
    console.log('third')
    console.log(ufodata.value)

    filterChoice(ufodata.value,filtDateVal)

  }
  // We can use the `on` function in d3 to attach an event to the handler function
  submit.on("click", handleClick);
  
