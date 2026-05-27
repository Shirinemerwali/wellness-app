// const mongoose = "Tolk-verktyget" som fattar MongoDB
const mongoose = require('mongoose');

// const connectDB = Namnet på vår "starta-databasen-maskin"
// async = "Ta den tid du behöver, vi väntar"
const connectDB = async () => {

  try { 
    // try = "Här börjar vi försöka..."
    
    // await = "Pausa här tills vi får svar från molnet"
    // mongoose.connect = "Här ringer vi upp!"
    // process.env.MONGO_URI = "Telefonnumret/Länken från .env"
    await mongoose.connect(process.env.MONGO_URI);

    // console.log = "Skriv ut detta om vi lyckades!"
    console.log("Klartecken! Databasen är vaken.");

  } catch (err) {
    // catch = "Här landar vi om det blir fel (t.ex. fel lösenord)"
    
    // err.message = "Själva förklaringen till VARFÖR det blev fel"
    console.log("Något gick fel:", err.message);
  }
};

// module.exports = "Gör maskinen tillgänglig för server.js"
module.exports = connectDB;
