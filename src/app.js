var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

app.get("/event", (req, res, next) => {
    var eventMonth = req.query.Month - 1; // lol why is this 0-indexed
    var eventDay = req.query.Day;

    // calculate the difference in the two dates
    const oneDay = 24 * 60 * 60 * 1000; // since Dates are just milliseconds
    var today = new Date();
    today.setHours(0,0,0); // set to midnight to avoid partial days rounding goofy
    var eventDate = new Date(today.getFullYear(), eventMonth, eventDay);
    eventDate.setHours(0,0,0);
    var diffDays = Math.round((eventDate - today) / oneDay);
    var dayString = "days";

    // if the eventDate already passed, assume they mean the next one
    if (diffDays < 0) {
        eventDate = new Date(today.getFullYear() + 1, eventMonth, eventDay);
        eventDate.setHours(0,0,0);
        diffDays = Math.round((eventDate - today) / oneDay);
    }

    // simple grammar correction if there is only 1 day left
    if (diffDays == 1) {
        dayString = "day";
    }

    res.send(diffDays + " " + dayString);
});