import Job from "../models/job.model";
import { Request, Response } from "express";
const addJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}

export { addJobs };