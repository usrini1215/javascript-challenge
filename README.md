# JavaScript and DOM Manipulation (D3.js, html, CSS)

###  Background - This is a project that takes UFO sighting data and using Javascript filters data as needed and displays in html format.

1. **Dataset**
* [UFO Sightings Data](/static/js/data.js)  : data.js has the following structure :

        [{
            datetime: "",
            city: "",
            state: "",
            country: "",
            shape: "",
            durationMinutes: "",
            comments: ""
          }}


2.  **UFO-level-1** 
Automatic Table and Date Search:
This folder has the index.html, app.js and data.js to do a simple filter on just the datetime field.  I have added a message as to what date was selected by the user.  Once the user picks a date, a table is generated by filtering data for just that date.  The table displays `date/time`, `city`, `state`, `country`, `shape`, and `comment`.


3. **UFO-level-2**
Multiple Search Categories:
This folder has the index.html, app.js and data.js to do a filter based on the dropdown values.  I have added a message as to what data was selected by the user, depending on the choice, the data gets filtered.  The following columns are in the dropdown and can be searched on :
            - `city`
            - `state`
            - `country`
            - `shape`
Apart from that a date-time field can be entered as wll to show a combination of filters..


### Note
For both search types, if the filter search doesnt return any results, I show the whole table to take us back to the whole data set (instead of an empty table).




### Copyright
Usha Chari © 2020. All Rights Reserved.
