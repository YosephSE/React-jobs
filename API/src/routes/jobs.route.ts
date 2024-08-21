import { Router, Request, Response } from "express";
import { addJob, allJobs } from "../controllers/jobs.controllers";

const router = Router();

router.get("/", allJobs);

router.post("/", addJob);

export default router;
