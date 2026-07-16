import express from 'express';
const app = express();
import cookieParser from 'cookie-parser'
import route from './Routes/Url.route.ts';
import userRoute from './Routes/User.route.ts';
import StaticRoute from './Routes/Static.route.ts';
import path  from 'path';
import { Request , Response } from 'express';
import URL from './Models/url.model.ts';
import { dbConnection } from './Config/DbConnection.ts';
import { isLoggedIn , checkAuth } from './middleware/auth.middleware.js';

dbConnection('mongodb://127.0.0.1:27017/URL_SHORTNER');

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set("views" , path.resolve("./src/views"));
app.set("view engine" , "ejs");
app.use(cookieParser());



const PORT = 6969;


app.use("/url" , isLoggedIn,route );
app.use("/user" , userRoute );
app.use("/" ,checkAuth , StaticRoute);
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

app.get("/getAnalytics/:shortID", async (req: Request, res: Response) => {
  const { shortID } = req.params;

  const result = await URL.findOne( {shortID} );

  if (!result) {
    return res.status(404).json({
      message: "Short URL not found",
    });
  }

  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
});
console.log(path.join(process.cwd(), "views"));

app.listen(PORT , ()=>{
    console.log( `App is live at http://localhost:${PORT}`)
})
