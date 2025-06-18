console.log("hello from Express!");

const express=require('express');
const app=express();
app.use((req,res,next)=>
{
    console.log('Incoming ${req.method} request to ${req.URL}');
    next();
});
app.get('/',(req,res)=>
{
    res.send("Home request!");
})
app.listen(3000,()=>
    {
        console.log("server running...")
    });