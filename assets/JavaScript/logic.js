// Initialize Firebase
var config = {
    apiKey: "AIzaSyDXxgjCLsSBew-MUv45cjILMQ1euu6kMn8",
    authDomain: "projectnw-c2a39.firebaseapp.com",
    databaseURL: "https://projectnw-c2a39.firebaseio.com",
    projectId: "projectnw-c2a39",
    storageBucket: "projectnw-c2a39.appspot.com",
    messagingSenderId: "893943462331"
};
firebase.initializeApp(config);

// A function that does an AJAX call
function judgesInfo(judge) {
$.ajax({
    url: "https://datacatalog.cookcountyil.gov/resource/69z9-nyig.json?position=Judge&last_name=" + judge,
    type: "GET",
    data: {
        "$limit" : 5000,
        "$$app_token" : "z19GcEXHUsdQi8X7j8doySfMi"
    }
}).done(function(data) {

   var fullName =data[0].first_name + " " + data[0].last_name;

    //  Dynamically creating a new row for the table
   var tableRow = $("<tr>");
   //   Dynamically creating a cell and, inputting text from our object, and appending that to our table row   
   var judgeDivision = $("<td>").text(data[0].division);
     tableRow.append(judgeDivision);


   var judgeName = $("<td>").text(fullName);
    tableRow.append(judgeName);

   var judgeLocation = $("<td>").text(data[0].location_1_location);
      tableRow.append(judgeLocation);

   // Finding our table element and appending the row we just made
     $("#employeeTable").append(tableRow);
 });
}
//   on Click that grabs the text from the Input box and calls our judgesInfo() function
$("#select-artist").on("click", function(event) {

    event.preventDefault();
    var lastName = $("#artist-input").val().trim();
    console.log(lastName);

    judgesInfo(lastName);
})