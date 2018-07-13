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
$.ajax({
    url: "https://datacatalog.cookcountyil.gov/resource/69z9-nyig.json",
    type: "GET",
    data: {
        "$limit" : 5000,
        "$$app_token" : "z19GcEXHUsdQi8X7j8doySfMi"
    }
}).done(function(data) {
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log(data);
});