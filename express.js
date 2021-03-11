const express=require("express");
const app=express();
const PORT=process.env.PORT||8000;
const path=require("path")
const hbs=require("hbs")
const staticPath=path.join(__dirname,"/public")
// Custom middleware for css and js file
app.use(express.static(staticPath));

// View engine
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'public/views'));
// Partials
const partialPath=path.join(__dirname,"/partials")
hbs.registerPartials(partialPath)
app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/covid",(req,res)=>{
    res.render('covid')
})

app.get("/map",(req,res)=>{
    res.render('map')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("***",(req,res)=>{
    res.render('error')
})
app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`))