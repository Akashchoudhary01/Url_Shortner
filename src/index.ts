import express from 'express';
const app = express();
import urlRoute from './Routes/Url.route.js';

app.use(express());

const PORT = 6969;

app.get("/" , (req , res)=>{

    res.send("Hello Jai Shree Ram !")
});

app.use("/url" , urlRoute );
app.listen(PORT , ()=>{
    console.log( `App is live at http://localhost:${PORT}`)
})
