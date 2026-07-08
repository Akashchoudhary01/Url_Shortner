import { Router } from "express";
import {handleUrlGeneration} from "./Models/Url.models.ts";

const route = Router();

route.post("/" , handleUrlGeneration);

export default route;