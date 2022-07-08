const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){ 
    const items = [
        {
            title: "A",
            message: "mazing technology "
        }, 
        {
            title: "M",
            message: "anage HTML using EJS"
        },
        {
            title: "A",
            message: "wesome way to construct pages"
        },
        {
            title: "Z",
            message: "illions of possibilities"
        },
        {
            title: "I",
            message: "nteraction between HTML and JS"
        },
        {
            title: "N",
            message: "othing could be better than this"
        },
        {
            title: "G",
            message: "ood, now you can take a look."
        }
    ];

    const subtitle = 'A model language to create an HTML page';

    res.render("pages/index", {
        qualities: items,
        subtitle: subtitle
    });
})

app.get("/about", function (req, res){ 
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando ...");