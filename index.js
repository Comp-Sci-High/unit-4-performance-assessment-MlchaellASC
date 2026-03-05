// 1) Use npm to install ejs in the terminal


// 2) create a views and a public folder



// 3) In your public folder create an index.html and add your code from the planning document 
// You can also add your CSS files here too if applicable 



// 4) Now in your views folder create your EJS file and add your HTML code from your planning document



const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})


// 5) Paste in your data array of objects from the planning documents here. 
const posts = [
{
id: 1,
title: "Summer in Paris",
location: "Paris, France",
imageURL: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
description: "A beautiful summer trip exploring museums, cafes, and historic landmarks across Paris.",
rating: 9,
highlights: ["Eiffel Tower visit", "Louvre Museum tour", "Seine River cruise"],
budget: 2500
},
{
id: 2,
title: "Tokyo Adventure",
location: "Tokyo, Japan",
imageURL: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f",
description: "An exciting city experience filled with amazing food, technology, and traditional temples.",
rating: 10,
highlights: ["Shibuya Crossing", "Sushi tasting", "Senso-ji Temple"],
budget: 3200
},
{
id: 3,
title: "California Road Trip",
location: "California, USA",
imageURL: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
description: "A scenic drive along the Pacific Coast Highway with stops at beaches and national parks.",
rating: 8,
highlights: ["Big Sur views", "Golden Gate Bridge", "Santa Monica Pier"],
budget: 1800
},
{
id: 4,
title: "Caribbean Getaway",
location: "Punta Cana, Dominican Republic",
imageURL: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
description: "A relaxing beach vacation with crystal clear water and all-inclusive resorts.",
rating: 9,
highlights: ["Snorkeling", "Beach lounging", "Resort dining"],
budget: 2200
},
{
id: 5,
title: "Exploring London",
location: "London, England",
imageURL: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
description: "A historic journey through London visiting famous landmarks and cultural sites.",
rating: 8,
highlights: ["Big Ben", "Tower of London", "Buckingham Palace"],
budget: 2400
}
];


// 6) Add static file middleware here
app.use(express.static(__dirname + "/public"))

// 7) Set the view engine to ejs here
app.set("view engine", "ejs")

// 8) Create a route handler to path / and send your index.html 
// run your server with node index.js to test it
app.get("/", (req,res) => {
res.sendFile(__dirname + "/public/index.html")
})


// 9) Create a route handler to your overview route from your planning document
// Pass in your data array
app.get("/posts", (req,res) => {
res.render("overview", { posts: posts})
})



// 10) Go to your EJS file and turn the HTML into EJS
// Test and run your server then submit if working (git add . git commit -m 'message' git push)


app.listen(3000, ()=> {
    console.log("Server Started")
})