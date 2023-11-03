const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});

app.get("/api/flowers", (req, res) => {
    const flowers = [];
    flowers[0] ={
        name: "Violet",
        petals: "5",
        family:"Violaceae",
        color: "Violet",
        places: ["Northern Hemishpere", "Hawaii", "Andes"],
        img: "images/violet.jpg"
    };
    flowers[1] ={
        name: "Tulip",
        petals: "6",
        family:"Liliaceae",
        color: "Yellow",
        places: ["Central Asia", "Turkey", "Albania"],
        img: "images/tulip.jpg"
    };
    flowers[2] ={
        name: "Rose",
        petals: "5-40",
        family:"Rosaceae",
        color: "Red",
        places: ["Northern Hemisphere", "China", "Bulgaria"],
        img: "images/rose.jpg"
    };
    flowers[3] ={
        name: "Lily",
        petals: "6",
        family:"Liliaceae",
        color: "White",
        places: ["Northern Hemisphere", "Asia", "Europe"],
        img: "images/lily.jpg"
    };
    flowers[4] ={
        name: "Lilac",
        petals: "4 (individual)",
        family:"Oleaceae",
        color: "Lilac",
        places: ["North America", "Asia", "Eastern Europe"],
        img: "images/lilac.jpg"
    };
    flowers[5] ={
        name: "Lavender",
        petals: "4-5 (individual)",
        family:"Lamiaceae",
        color: "Lavender",
        places: ["England", "Japan", "Argentina"],
        img: "images/lavender.jpg"
    };
    

    res.json(flowers);
});

app.listen(3000, () => {
    console.log("listening");
});