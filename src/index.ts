import express from 'express';
const app = express();
import route from './Routes/Url.route.ts';
import URL from './Models/url.model.js';
import { dbConnection } from './Config/DbConnection.ts';

dbConnection('mongodb://127.0.0.1:27017/URL_SHORTNER');

app.use(express.json());

const PORT = 6969;

app.get("/" , (req , res)=>{

    res.send("Hello Jai Shree Ram !")
});

app.use("/url" , route );
app.get("/:shortid", async (req, res) => {
  const { shortid } = req.params;

  const entry = await URL.findOneAndUpdate(
    {
      shortID: shortid,
    },
    {
      $push: {
        visitHistory: {
          timestamp: new Date(),
        },
      },
    },
    {
      new: true,
    }
  );

  if (!entry) {
    return res.status(404).send("Short URL not found");
  }

  res.redirect(entry.redirectUrl);
});

app.listen(PORT , ()=>{
    console.log( `App is live at http://localhost:${PORT}`)
})
