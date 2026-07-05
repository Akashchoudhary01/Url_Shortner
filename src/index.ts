import express from 'express';
const app = express();

app.use(express());

const PORT = 6969;

app.get("/" , (req , res)=>{

    res.send("Hello Jai Shree Ram !")
});

app.listen(PORT , ()=>{
    console.log( `App is live at http://localhost:${PORT}`)
})
