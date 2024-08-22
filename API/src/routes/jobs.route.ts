import { Router } from "express";
import {
  addJob,
  allJobs,
  deleteJob,
  singleJob,
} from "../controllers/jobs.controllers";

const router = Router();

router.get("/", allJobs);

router.post("/", addJob);

router.get("/:id", singleJob);

router.delete("/:id", deleteJob);

export default router;
