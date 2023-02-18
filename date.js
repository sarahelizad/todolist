// Exporting this to app.js file - no parentheses because we are calling the function inside our module
exports.getDate = function () {
  // Logic and computation
  const today = new Date();
  // Creates a new date object

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long"
  };

return today.toLocaleDateString("en-US", options);
}
