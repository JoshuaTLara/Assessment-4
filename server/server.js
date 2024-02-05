import express from "express"
import morgan from "morgan"
import ViteExpress from "vite-express"

// set up express instance as the variable "app"

const app = express()

//set up middleware
app.use(morgan("dev")) //while in dev enviorment use morgan fro additional logging, etc.
app.use(express.urlencoded({extended: false})) // allows express to read POST request objects
// app.use(express.static('public')) // pointing to folder for vite/express to understand where to look? static files only?
app.use(express.json())// lets server and front-end know that they'll b communication with JSON



// import handlerFunctions

import handlerFunctions from "./controller.js"


//Routes
app.get('/cards', handlerFunctions.getCards)
app.post('/card/add', handlerFunctions.addCard)
app.delete("/card/delete/:id", handlerFunctions.deleteCard)


// open up the door to our server
ViteExpress.listen(app, 8675, () => console.log("Lets do this. http://localhost:8675"))