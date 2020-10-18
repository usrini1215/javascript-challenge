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

function filterChoice(filtfield, filtval1,filtval2) {
    // only data from filter choices
    console.log('param values:')
    console.log(filtfield + ' ' + filtval1 + ' ' + filtval2)
    if (filtval2.trim().length > 0) {
        switch(filtfield) {
            case "city":
                filteredData = tableData.filter(val => val.city === filtval1 && val.datetime === filtval2);
                break;
            case "state":
                filteredData = tableData.filter(val => val.state === filtval1 && val.datetime === filtval2);
                break;
            case "country":
                filteredData = tableData.filter(val => val.country === filtval1 && val.datetime === filtval2);
                break;
            case "shape":
                filteredData = tableData.filter(val => val.shape === filtval1 && val.datetime === filtval2);
                break;
        }
    } 
    else {
        switch(filtfield) {
            case "city":
                filteredData = tableData.filter(val => val.city === filtval1);
                break;
            case "state":
                filteredData = tableData.filter(val => val.state === filtval1);
                break;
            case "country":
                filteredData = tableData.filter(val => val.country === filtval1);
                break;
            case "shape":
                filteredData = tableData.filter(val => val.shape === filtval1);
                break;
        }       
    }      
     

    console.log('third2');
    console.log(filteredData);
    if (filteredData.length > 0){
        h3.text('Filtered Data Set for ( ' + filtfield + ' = ' + filtval1 + ' and date = ' + filtval2 + ' )')
        printTabledata(filteredData); 
    }
    else {
        h3.text('No data found for ( ' + filtfield + ' = ' + filtval1 + ' and date = ' + filtval2 +' ) so heres the whole data set!!!')
        printTabledata(tableData);       
    } 

}

function handleClick() {
  
    var filtValue = d3.select(".form-control")
    var firstFiltVal = filtValue.property("value")

    var secFilt = d3.select(".form-control2")
    var secFiltVal = secFilt.property("value")

    console.log('secfilt')
    console.log(secFiltVal)


    console.log('sec')
    console.log(firstFiltVal)
    console.log('third')
    console.log(ufodata.value)

    filterChoice(ufodata.value,firstFiltVal,secFiltVal)

  }
  // We can use the `on` function in d3 to attach an event to the handler function
  submit.on("click", handleClick);
  
