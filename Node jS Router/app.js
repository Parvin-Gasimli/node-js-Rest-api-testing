const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const pleacerRoutes=require("./routes/pleaces-routes")





const PORT=3000;
app.use('/api/places',pleacerRoutes)
app.listen(PORT,()=>{
    console.log("SERVER IS RUNING");
})