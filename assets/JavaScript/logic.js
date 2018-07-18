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

<<<<<<< HEAD
// A function that does an AJAX call
function judgesInfo(firstName, lastName) {
=======
>>>>>>> 822ddf70952a40ade38e2adebd65f986f39837ff
$.ajax({
    url: "https://datacatalog.cookcountyil.gov/resource/69z9-nyig.json?position=Judge&first_name=" + firstName +"&last_name=" + lastName,
    type: "GET",
    data: {
        "$limit" : 5000,
        "$$app_token" : "z19GcEXHUsdQi8X7j8doySfMi"
    }
}).done(function(data) {
<<<<<<< HEAD
  
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
     $("#judgeTable").append(tableRow);
 });
=======
    // alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
    console.log(data.last_name[0]);
});


// A function that does an AJAX call
function judgesInfo(firstName, lastName) {
    $.ajax({
        url: "https://datacatalog.cookcountyil.gov/resource/69z9-nyig.json?position=Judge&first_name=" + firstName +"&last_name=" + lastName,
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
        $("#judgeTable").append(tableRow);
    });
>>>>>>> 822ddf70952a40ade38e2adebd65f986f39837ff
}
//   on Click that grabs the text from the Input box and calls our judgesInfo() function also capitalizes the first letter of each input
$("#submit").on("click", function(event) {

    event.preventDefault();
<<<<<<< HEAD
    
    var firstName = $("#firstName").val().trim();
     firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    var lastName = $("#lastName").val().trim();
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    
    

    judgesInfo(firstName, lastName);
})
=======

    var firstName = $("#firstName").val().trim();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    var lastName = $("#lastName").val().trim();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);



    judgesInfo(firstName, lastName);
})

>>>>>>> 822ddf70952a40ade38e2adebd65f986f39837ff
