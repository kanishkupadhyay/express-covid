const router=require("express").Router()
router.get("/",(req,res)=>{
    res.render('index')
})
router.get("/covid",(req,res)=>{
    res.render('covid')
})

router.get("/map",(req,res)=>{
    res.render('map')
})
router.get("/about",(req,res)=>{
    res.render('about')
})
router.get("***",(req,res)=>{
    res.render('error')
})
module.exports=router