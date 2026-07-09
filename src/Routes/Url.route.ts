import { Router } from "express";
// import {handleUrlGeneration} from "./Models/ur.ts";
import { handleUrlGeneration } from "../Controllers/Url.controller.ts";

const route = Router();

route.post("/" , handleUrlGeneration);

export default route;