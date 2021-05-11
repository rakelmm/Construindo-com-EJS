const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    const items =[
        {
            title: "D",
            message:"Dsenvolver aplicações/serviços de forma fácil"
        },
        {
            title: "E",
            message:  "JS usa JavaSript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito facíl de usar "
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall EJS"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];

    const subtitle = "Uma liguagem de modelagem para criação de página HTML ultilizando JS"
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")