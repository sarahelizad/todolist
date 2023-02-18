const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // Module is local not global. We are requiring date module in our app.js. All exports are bound to date constant.

const newItems = ["Walk dog", "Shower", "Skincare", "Make Smoothie"];
const workItems = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
// Telling express to locate our static files

app.get("/", function(req, res) {

  const day = date.getDate(); // call function bound to const date and activate getDate() function
  res.render("list", {listTitle: day, newListItems: newItems});
  //Rendering a file called list and passing that file a JS object that has a key value pair.

});

app.post("/", function(req, res) {

  const newItem = req.body.newItem;
  // When a post request is triggered at our home route we save the value of that request to newItem variable
  // If statement that checks to see if the list that the new item came from was the work list and if so, pushes item to the end of work items array
    if (req.body.list === "Work") {
      workItems.push(newItem);
      res.redirect("/work");
    } else {
      newItems.push(newItem);
      res.redirect("/");
    }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
})

app.get("/about", function(req, res) {
  res.render("about")
})


app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
