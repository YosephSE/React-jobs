import { Router } from "express";
import { addJob, allJobs, singleJob } from "../controllers/jobs.controllers";

const router = Router();

router.get("/", allJobs);

router.post("/", addJob);

router.get("/:id", singleJob);

export default router;
