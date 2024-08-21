import { Router, Request, Response } from "express";
import { addJobs } from "../controllers/jobs.controllers";

const router = Router();


router.get("/", addJobs);


export default router;